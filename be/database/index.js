const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/db.sqlite');

const DB = {
    getUserInfo: async ({user_id = null, username = null}) => {
        let subQuery = '';
        if (user_id === null && username === null) return null;
        user_id ? subQuery = `WHERE id = ${user_id}` : subQuery = `WHERE username = '${username}'`;

        return new Promise((resolve) => {
            db.get(`SELECT u.username, u.role, u.hash_password, ui.*
                    FROM users u
                             JOIN user_infos ui on u.id = ui.user_id
                        ${subQuery}`, (err, row) => {
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
                db.run(`INSERT INTO user_infos (user_id)
                        VALUES (${row.id})`, (err) => {
                    if (err) console.log(err);
                    resolve(row.id);
                });
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
            db.run(`UPDATE user_infos
                    SET ${subQuery}
                    WHERE user_id = ${user_id}`, (err) => {
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
    }
};

module.exports = DB;
