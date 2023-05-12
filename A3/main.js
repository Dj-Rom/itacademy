// creat new element div>input

const formUser = document.createElement("form"),
    label = document.createElement("label"),
    inputUser = document.createElement("input"),
    inputBtn = document.createElement("input");
//  setting up  new elements
inputUser.name = "inputUser";
label.innerHTML = "Please, write here      =>";
inputUser.id = "inp";
inputUser.type = "text";
inputBtn.id = "but";
inputBtn.type = "button";
inputBtn.value = "check";
formUser.append(label);
formUser.append(inputUser);
formUser.append(inputBtn);
document.body.append(formUser);

//  We get the elements

but.addEventListener("mousedown", () => {
    const but = document.querySelector("#but");
    const strD = document.getElementById("inp");
    let stringU = strD.value;
    palindrom(stringU);
});
function palindrom(str) {
    let postStr = "";
    str = str.toUpperCase();
    str = str.replace(/[!@#$%^&*()_+-=./' ",<>0-9ЁЬЪ]/g, "");

    function proverka(str) {
        let result = "",
            endresult = "";
        for (var i = 0; i < 3; i++) {
            result += str[i];
        }
        for (let k = str.length - 1; k >= str.length - 3; --k) {
            endresult += str[k]
        }
        return (endresult === result)
    }


    function myRevStr(str, prov) {
        if (prov) {
            console.log(prov);
            for (let i = 0; i < str.length; i++) {
                postStr = str[i].concat(postStr);
            }
        }
    }
    myRevStr(str, proverka(str));
    if (!str) {
        alert("ввод не корректен!!!");
    } else if (postStr === str) {
        alert("это палиндром");
    } else {
        alert("это не палиндром");
    }
}

