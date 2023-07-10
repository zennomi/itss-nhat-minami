const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/db.sqlite');

const DB = {
    getUserInfo: async ({ user_id = null, username = null }) => {
        let subQuery = '';
        if (user_id === null && username === null) return null;
        user_id ? subQuery = `WHERE id = ${user_id}` : subQuery = `WHERE username = '${username}'`;

        return new Promise((resolve) => {
            db.get(`SELECT *
                    FROM users ${subQuery}`, (err, row) => {
                if (err) console.log(err);
                resolve(row);
            });
        });
    },

    createUser: async (username, hash_password) => {
        return new Promise((resolve) => {
            db.get(`INSERT INTO users (username, hash_password, role)
                    VALUES ('${username}', '${hash_password}', 0)
                    returning id`, (err, row) => {
                if (err) console.log(err);
                resolve(row.id);
            });
        });
    },
    updateUserInfos: async (user_id, params) => {
        let subQuery = '';
        subQuery += params.name ? `name = '${params.name}', ` : '';
        subQuery += params.gender ? `gender = '${params.gender}', ` : '';
        subQuery += params.date_of_birth ? `date_of_birth = '${params.date_of_birth}', ` : '';

        return new Promise((resolve) => {
            if (subQuery === '') resolve();
            subQuery = subQuery.slice(0, -2);
            db.run(`UPDATE users
                    SET ${subQuery}
                    WHERE id = ${user_id}`, (err) => {
                if (err) console.log(err);
                resolve();
            });

        });
    },
    changePassword: async (user_id, hash_password) => {
        return new Promise((resolve) => {
            db.run(`UPDATE users
                    SET hash_password = '${hash_password}'
                    WHERE id = ${user_id}`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },
    addSession: async (user_id, token) => {
        return new Promise((resolve) => {
            db.run(`INSERT INTO sessions (user_id, token)
                    VALUES ('${user_id}', '${token}')`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },

    checkSession: async (user_id, token) => {
        return new Promise((resolve) => {
            db.get(`SELECT *
                    FROM sessions
                    WHERE token = '${token}'
                      AND user_id = '${user_id}'
            `, (err, row) => {
                if (err) console.log(err);
                resolve(row);
            });
        });
    },
    deleteSession: async (user_id) => {
        return new Promise((resolve) => {
            db.run(`DELETE
                    FROM sessions
                    WHERE user_id = '${user_id}'`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },
    setRole: async (user_id, role) => {
        return new Promise((resolve) => {
            db.run(`UPDATE users
                    SET role = '${role}'
                    WHERE id = '${user_id}'`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },
    searchTeacher: async (params = {}) => {
        let subQuery = '';
        subQuery += params.lang_study ? `AND t.lang_study = '${params.lang_study}' ` : '';
        subQuery += params.lang_teach ? `AND t.lang_teach = '${params.lang_teach}' ` : '';
        subQuery += params.purpose ? `AND t.purpose = '${params.purpose}' ` : '';
        subQuery += params.price ? `AND t.price <= '${params.price}' ` : '';
        subQuery += params.gioitinh ? `AND u.gender = '${params.gioitinh}' ` : '';
        subQuery += params.star ? `AND (select avg(rating) from reviews where teacher_id = t.id) >= ${params.star} ` : '';
        subQuery += (params.longitude && params.latitude && params.radius) ?
            `AND (SQRT(SQUARE((t.latitude - ${params.latitude}) * 110.574) + SQUARE((t.longitude - ${params.longitude}) * 111.320 * COS(t.latitude / 180 * PI()))) <= ${params.radius}) ` : '';
        if (params.timesession.length > 0) {
            subQuery += `AND (`;
            params.timesession.forEach((item, index) => {
                let [day, start_hour, end_hour] = item.split("-");
                subQuery += `(s.day = '${day}' and s.start_hour >= '${start_hour}' and s.end_hour <= '${end_hour}')`;
                if (index < params.timesession.length - 1) subQuery += ` or `;
            });
            subQuery += `)`;
        }
        if (subQuery.length > 0)
            subQuery = subQuery.slice(4);
        else subQuery = '1 = 1';
        let limit = params.limit || 10;
        let page = params.page || 1;

        return new Promise((resolve) => {
            db.all(`select t.*,
                           avg(r.rating)             as star,
                           u.name,
                           u.gender,
                           u.date_of_birth,
                           count(r.id)               as reviewCount,
                           s.end_hour - s.start_hour as hours
                    from teachers t
                             left join users u on u.id = t.user_id
                             left join schedules s on t.id = s.teacher_id
                             left join reviews r on t.id = r.teacher_id
                    WHERE ${subQuery}
                    GROUP BY t.id`, (err, rows) => {
                if (err) console.log(err);

                for (let i = 0; i < rows?.length; i++) {
                    rows[i].age = new Date().getFullYear() - new Date(rows[i].date_of_birth).getFullYear();
                    if (rows[i].age < params.age) {
                        rows.splice(i, 1);
                        i--;
                    }
                }

                let result = rows?.slice((page - 1) * limit, page * limit);
                let data = {
                    teacher: result,
                    pagination: {
                        total: rows.length,
                        currentPage: parseInt(page),
                        totalPage: Math.ceil(rows.length / limit),
                        limit: parseInt(limit)
                    }
                }
                resolve(data);
            });
        });
    },
    getTeacherInfos: async (teacher_id) => {
        return new Promise((resolve) => {
            db.get(`select t.*,
                           avg(r.rating)             as star,
                           count(r.id)               as reviewCount,
                           u.name,
                           u.gender,
                           u.date_of_birth,
                           s.end_hour - s.start_hour as hours
                    from teachers t
                             left join reviews r on t.id = r.teacher_id
                             left join users u on u.id = t.user_id
                             left join schedules s on t.id = s.teacher_id
                    where t.id = ${teacher_id}
                    GROUP BY t.id`, (err, row) => {
                if (err) console.log(err);
                Object.keys(row).forEach((key) => {
                    if (row[key] !== null && typeof row[key] === 'string' && row[key].includes('null')) {
                        row[key] = null;
                    }
                });
                db.all(`select *
                        from certificates
                        where teacher_id = ${teacher_id}`, (err, row2) => {
                    if (err) console.log(err);
                    if (row)
                        row.certificates = row2;
                    db.all(`select *
                            from schedules
                            where teacher_id = ${teacher_id}`, (err, row3) => {
                        if (err) console.log(err);
                        if (row)
                            row.schedules = row3;
                        resolve(row);
                    });
                });
            });
        });
    },
    updateTeacherInfos: async (teacher_id, params) => {
        let subQuery = '';
        subQuery += params.lang_teach ? `lang_teach = '${params.lang_teach}', ` : '';
        subQuery += params.lang_study ? `lang_study = '${params.lang_study}', ` : '';
        subQuery += params.purpose ? `purpose = '${params.purpose}', ` : '';
        subQuery += params.price ? `price = '${params.price}', ` : '';
        subQuery += params.phone_number ? `phone_number = '${params.phone_number}', ` : '';
        subQuery += params.resume_url ? `resume_url = '${params.resume_url}', ` : '';
        subQuery += params.website_url ? `website_url = '${params.website_url}', ` : '';
        subQuery += params.facebook_url ? `facebook_url = '${params.facebook_url}', ` : '';
        subQuery += params.instagram_url ? `instagram_url = '${params.instagram_url}', ` : '';
        subQuery += params.linkedin_url ? `linkedin_url = '${params.linkedin_url}', ` : '';
        subQuery += params.twitter_url ? `twitter_url = '${params.twitter_url}', ` : '';
        subQuery += params.photo_url ? `photo_url = '${params.photo_url}', ` : '';
        subQuery += params.background_image_url ? `background_image_url = '${params.background_image_url}', ` : '';
        subQuery += params.description ? `description = '${params.description}', ` : '';
        subQuery += params.country_of_birth ? `country_of_birth = '${params.country_of_birth}', ` : '';
        subQuery += params.address ? `address = '${params.address}', ` : '';
        subQuery += params.latitude ? `latitude = '${params.latitude}', ` : '';
        subQuery += params.longitude ? `longitude = '${params.longitude}', ` : '';
        subQuery += params.gmail ? `gmail = '${params.gmail}', ` : '';

        if (subQuery.length > 0)
            subQuery = subQuery.slice(0, -2);
        else subQuery = '1 = 1';

        return new Promise((resolve) => {
            db.run(`UPDATE teachers
                    SET ${subQuery}
                    WHERE id = '${teacher_id}'`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },
    createTeacher: async (user_id, params) => {
        console.log({ params })
        // returning id
        return new Promise((resolve) => {
            db.get(`INSERT INTO teachers (user_id, lang_teach, lang_study, purpose, price, phone_number, resume_url,
                                          website_url, facebook_url, instagram_url, linkedin_url, twitter_url,
                                          photo_url, background_image_url, description, country_of_birth, address,
                                          latitude, longitude)
                    VALUES ('${user_id}', '${params.lang_teach}', '${params.lang_study}', '${params.purpose}',
                            '${params.price}', '${params.phone_number}', '${params.resume_url}', '${params.website_url}',
                            '${params.facebook_url}', '${params.instagram_url}', '${params.linkedin_url}',
                            '${params.twitter_url}', '${params.photo_url}', '${params.background_image_url}',
                            '${params.description}', '${params.country_of_birth}', '${params.address}',
                            '${params.latitude}', '${params.longitude}')
                    returning id`, (err, row) => {
                if (err) console.log(err);
                resolve(row);
            });
        });
    },
    addReview: async (teacher_id, user_id, rating, content) => {
        return new Promise((resolve) => {
            db.run(`INSERT INTO reviews (teacher_id, user_id, rating, content, created_at)
                    VALUES ('${teacher_id}', '${user_id}', '${rating}', '${content}', '${new Date().toISOString()}
                            ')`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },
    getReviewsByTeacherId: async (teacher_id) => {
        return new Promise((resolve) => {
            db.all(`SELECT r.*, u.name, u.gender
                    FROM reviews r
                             JOIN users u on r.user_id = u.id
                    WHERE r.teacher_id = '${teacher_id}'`, (err, rows) => {
                if (err) console.log(err);
                resolve(rows);
            });
        });
    },
    getTeacherByUserId: async (user_id) => {
        return new Promise((resolve) => {
            db.get(`SELECT *
                    FROM teachers
                    WHERE user_id = ${user_id}`, (err, row) => {
                if (err) console.log(err);
                resolve(row);
            });
        });
    },
    updateCertificates: async (teacher_id, certificates) => {
        return new Promise((resolve) => {
            db.run(`DELETE
                    FROM certificates
                    WHERE teacher_id = ${teacher_id}`, (err) => {
                if (err) console.log(err);
            });
            certificates.forEach((item) => {
                db.run(`INSERT INTO certificates (teacher_id, language_code, level)
                        VALUES ('${teacher_id}', '${item.language_code}', '${item.level}')`, (err) => {
                    if (err) console.log(err);
                    resolve();
                });
            });
        });
    },
    addBookmark: async (user_id, teacher_id) => {
        return new Promise((resolve) => {
            db.run(`INSERT INTO bookmarks (user_id, teacher_id, created_at)
                    VALUES ('${user_id}', '${teacher_id}', '${new Date().toISOString()}')`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },
    removeBookmark: async (user_id, teacher_id) => {
        return new Promise((resolve) => {
            db.run(`DELETE
                    FROM bookmarks
                    WHERE user_id = ${user_id}
                      AND teacher_id = ${teacher_id}`, (err) => {
                if (err) console.log(err);
                resolve();
            });
        });
    },
    getBookmarksByUserId: async (user_id) => {
        return new Promise((resolve) => {
            db.all(`SELECT *
                    FROM bookmarks b
                             JOIN teachers t on b.teacher_id = t.id
                             JOIN users u on u.id = t.user_id
                    WHERE b.user_id = ${user_id}`, (err, rows) => {
                if (err) console.log(err);
                resolve(rows);
            });
        });
    }
};

module.exports = DB;
