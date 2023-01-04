"use strict";

const id = document.querySelector("#id"),
    nick = document.querySelector("#nick"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    name = document.querySelector("#name"),
    phNumber = document.querySelector("#phone-number"),
    reco = document.querySelector("#recommander"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register)

function register() {
    if (!id.value) return alert("아이디를 입력하세요");
    if (!nick.value) return alert("닉네임을 입력하세요");
    if (!psword.value) return alert("비밀번호를 입력하세요");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다");
    if (!name.value) return alert("이름을 입력하세요");
    if (!phNumber.value) return alert("연락처를 입력하세요");


    const req = {
        id: id.value,
        nick: nick.value,
        psword: psword.value,
        name: name.value,
        phNumber: phNumber.value,
    
    };
    console.log(req);

    fetch("/register", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 에러");
        });

}
