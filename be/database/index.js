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
    updateUserInfos: async (user_id, {full_name, email, phone, address}) => {
        let subQuery = '';
        if (full_name) subQuery += `full_name = '${full_name}',`;
        if (email) subQuery += `email = '${email}',`;
        if (phone) subQuery += `phone = '${phone}',`;
        if (address) subQuery += `address = '${address}',`;
        subQuery = subQuery.slice(0, -1);

        return new Promise((resolve) => {
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
        subQuery += params.date ? `AND s.day = '${params.date}' ` : '';
        if (params.timesession.length > 0) {
            subQuery += `AND (`;
            params.timesession.forEach((item, index) => {
                subQuery += `(s.start_hour = ${item.split("-")[0]} and s.end_hour = ${item.split("-")[1]})`;
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
            db.all(`select t.*, avg(r.rating) as star, u.name, u.gender, u.date_of_birth
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

                let result = rows.slice((page - 1) * limit, page * limit);
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
    }
};

module.exports = DB;
