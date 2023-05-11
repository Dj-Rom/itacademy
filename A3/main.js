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
    palindrom(stringU, 0);
});
function palindrom(str, test) {
    let postStr = "";

    str = str.toUpperCase();
    str = str.replace(/[!@#$%^&*()_+-=./' ",<>0-9]/g, "");

    function checkStr(strInput) {
        for (let i = 0; i <= strInput.length; i++) {
            switch (strInput[i]) {
                case "Ё":
                    strInput = strInput.replace("Ё", "Е");
                    break;
                case "Ъ":
                    strInput = strInput.replace("Ъ", "");
                    break;
                case "Ь":
                    strInput = strInput.replace("Ь", "");
                    break;
                default:
                    break;
            }
        }
        str = strInput;
    }
    checkStr(str);

    function myRevStr(str) {
        for (let i = 0; i < str.length; i++) {
            postStr = str[i].concat(postStr);
        }
    }
    myRevStr(str);

    if (test == false) {
        if (!str) {
            alert("ввод не корректен!!!");
        } else if (postStr == str) {
            alert("это палиндром");
        } else {
            alert("это не палиндром");
        }
    } else if (test == 1) {
        if (!str) {
            return `${str}&${postStr}'ввод не корректен!!!'`;
        } else if (postStr == str) {
            return `${str}&${postStr} "это палиндром"`;
        } else {
            return `${str}&${postStr}"это не палиндром"`;
        }
    }
}

// test
const testBtn = document.createElement("input");
testBtn.type = "button";
testBtn.value = "test";
formUser.append(testBtn);
testBtn.addEventListener("mousedown", test);
function test() {
    console.log("при вводе 'ddd' мы получаем ",palindrom("ddd", 1));
    console.log("при вводе 'gdgrdy' мы получаем ",palindrom("gdgrdy", 1));
    console.log("при вводе 'ЁЁЁ' мы получаем ",palindrom("ЁЁЁ", 1));
    console.log("при вводе 'ХЗЩШГНЕКУВАПРОЛОРПАВВУ;%ЕНГШd' мы получаем ",palindrom("ХЗЩШГНЕКУВАПРОЛОРПАВВУ;%ЕНГШd", 1));
    console.log("при вводе 'ЁУКЕНГШ' мы получаем ",palindrom("ЁУКЕНГШ", 1));
    console.log("при вводе 'gd3333grdy' мы получаем ",palindrom("gd3333grdy", 1));
    console.log("при вводе 'gersraegtwer' мы получаем ",palindrom("gersraegtwer", 1));
    console.log("при вводе '454 wi74$%^&*ddd' мы получаем ",palindrom("454 wi74$%^&*ddd", 1));
    console.log("при вводе 'ddыввапап' мы получаем ",palindrom("ddыввапапd", 1));
    console.log("при вводе 'gdgrваываБББББюdy' мы получаем ",palindrom("gdgrваываБББББюdy", 1));
    console.log("при вводе 'ЁЁННЁ' мы получаем ",palindrom("ЁЁННЁ", 1));
    console.log("при вводе '12234565432345676543' мы получаем ",palindrom("12234565432345676543", 1));
    console.log("при вводе 'твыывт' мы получаем ",palindrom("твыывт", 1));
    console.log("при вводе 'ДДДдддДДД' мы получаем ",palindrom("ДДДдддДДД", 1));
    console.log("при вводе 'ЮБЮ' мы получаем ",palindrom("ЮБЮ", 1));
    console.log("при вводе 'ючю' мы получаем ",palindrom("ючю", 1));
}
