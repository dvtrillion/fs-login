"use strict"

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=> [id,psword,name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo; 
    }

    static #getUsers(data, isAll, fields) {
        const uers = JSON.parse(data);
        if (isAll) return uers;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs
            .readFile("./src/DB/users.json")
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/DB/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
        

    }

    

    static async save(userInfo) {
        const users = await this.getUsers(ture);
        if (!users.id.includes(usersInfo.id)) {
            return new Error("이미 존재하는 아이디 입니다");
        }
        users.id.push(userInfo.id);
        users.nick.push(userInfo.nick);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        users.phnumber.push(userInfo.phnumber);
        users.reco.push(userInfo.reco);
        fs.writeFile("./src/DB/users.json", JSON.stringify(users));
        return { success: ture };
    }
}

module.exports = UserStorage;