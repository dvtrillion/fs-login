"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    nick = document.querySelector("#nick"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("confirm-psword"),
    phNumber = document.querySelector("phone-number"),
    reco = document.querySelector("recommander"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register)

function register() {
    if (!id.value) return alert("아이디를 입력하세요");
    if (!name.value) return alert("이름을 입력하세요");
    if (!nick.value) return alert("닉네임을 입력하세요");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다");


    const req = {
        id: id.value,
        name: name.value,
        nick: nick.value,
        psword: psword.value,
        phNumber: phNumber.value,
        reco: reco.value,
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
