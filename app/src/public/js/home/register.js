"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    nick = document.querySelector("#nick"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("confirm-psword"),
    phNumber = document.querySelector("phone-number"),
    reco = document.querySelector("recommander"),
    registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register)

function register() {
    const req = {
        id: id.value,
        name: name.value,
        nick: nick.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
        phNumber: phNumber.value,
        reco: reco.value,
    };
    console.log(req);

    // fetch("/register", {
    //     method: "POST",
    //     headers: {
    //         "content-Type": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         if (res.success) {
    //             location.href = "/";
    //         } else {
    //             alert(res.msg);
    //         }
    //     })
    //     .catch((err) => {
    //         console.error("로그인 에러");
    //     });

}
