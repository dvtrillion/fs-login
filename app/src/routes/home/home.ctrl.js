"use strict";


const output = {
    main: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },

};

const users = {
    id: ["admin", "administor,"],
    psword: ["1234", "qwe12qwe12!"],
};


const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
    
        return res.json({
            success: false,
            msg: "아이디 또는 비밀번호를 확인하세요",
        });
    },
};

module.exports = {
    output,
    process,
};