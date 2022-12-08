"use strict"

class UserStorage {
   static #users = {
    id: ["admin", "administor"],
    psword: ["1234", "qwe12qwe12!"],

    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return this.#users;
    }
}

module.exports = UserStorage;