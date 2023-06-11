const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/db.sqlite');

const DB = {
    getUserInfo: async ({user_id = null, username = null}) => {
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
                             join users u on u.id = t.user_id
                             join schedules s on t.id = s.teacher_id
                             join reviews r on t.id = r.teacher_id
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
                             join reviews r on t.id = r.teacher_id
                             join users u on u.id = t.user_id
                             join schedules s on t.id = s.teacher_id
                    where t.id = ${teacher_id}
                    GROUP BY t.id`, (err, row) => {
                if (err) console.log(err);
                resolve(row);
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
    }
};

module.exports = DB;
