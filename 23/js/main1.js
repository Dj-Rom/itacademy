var formDef1 = [{
        label: 'Название сайта:',
        kind: 'longtext',
        name: 'sitename'
    },
    {
        label: 'URL сайта:',
        kind: 'longtext',
        name: 'siteurl'
    },
    {
        label: 'Посетителей в сутки:',
        kind: 'number',
        name: 'visitors'
    },
    {
        label: 'E-mail для связи:',
        kind: 'shorttext',
        name: 'email'
    },
    {
        label: 'Рубрика каталога:',
        kind: 'combo',
        name: 'division',
        variants: [{
            text: 'здоровье',
            value: 1
        }, {
            text: 'домашний уют',
            value: 2
        }, {
            text: 'бытовая техника',
            value: 3
        }]
    },
    {
        label: 'Размещение:',
        kind: 'radio',
        name: 'payment',
        variants: [{
            text: 'бесплатное',
            value: 1
        }, {
            text: 'платное',
            value: 2
        }, {
            text: 'VIP',
            value: 3
        }]
    },
    {
        label: 'Разрешить отзывы:',
        kind: 'check',
        name: 'votes'
    },
    {
        label: 'Описание сайта:',
        kind: 'memo',
        name: 'description'
    },
    {
        caption: 'Опубликовать',
        kind: 'submit'
    },
];
var formDef2 = [{
        label: 'Фамилия:',
        kind: 'longtext',
        name: 'lastname'
    },
    {
        label: 'Имя:',
        kind: 'longtext',
        name: 'firstname'
    },
    {
        label: 'Отчество:',
        kind: 'longtext',
        name: 'secondname'
    },
    {
        label: 'Возраст:',
        kind: 'number',
        name: 'age'
    },
    {
        caption: 'Зарегистрироваться',
        kind: 'submit'
    },
];

function form(func) {
    let f = '',
        result = '<br><form action="https://fe.it-academy.by/TestForm.php" name="formJs" method="post">',
        r = '',
        rres = '',
        s = '',
        a = 0;

    for (let key of func) {

        if (key.kind === 'memo') {
            result += ` <label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label> <input type="memo" name="${key[Object.keys(key)[2]]}" required>`
        }

        if (key.kind == 'longtext') {
            result += ` <label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label> <input type="text"  name="${key[Object.keys(key)[2]]}" required>`;
        }

        if (key.kind === 'number') {
            result += ` <label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label> <input type="number"  name="${key[Object.keys(key)[2]]}" min="0" required>`;
        }
        if (key.kind === 'shorttext') {
            result += `<label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label> <input type="shorttext" name="${key[Object.keys(key)[0]]}" required  >`;
        }
        if (key.kind === 'submit') {
            result += ` <input type="${key[Object.keys(key)[1]]}" value="${key[Object.keys(key)[0]]}"  >`;

        }
        if (key.kind === 'radio') {
            for (a = 0; a < key[Object.keys(key)[3]].length; a++) {
                r += ` <input type="radio" required id ="${key[Object.keys(key)[2]]}" name="${key[Object.keys(key)[2]]}"  value="${key[Object.keys(key)[3]][a].value}"><label for="${key[Object.keys(key)[2]]}"> ${key[Object.keys(key)[3]][a].text}<br></label>`
            }
            result += `<br><label>${key[Object.keys(key)[0]]}</label> ${r}`
        }
        if (key.kind === 'check') {
            result += `<label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label> <input type="checkbox" name="${key[Object.keys(key)[2]]}">`
        }
        if (key.kind === 'combo') {
            const startCombo = ` <label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label>`
            const startSelectCombo = `<select name="${key[Object.keys(key)[2]]}" >`
            const endSelectCombo = `</select>`
            for (a; a < key[Object.keys(key)[3]].length; a++) {
                s += `<option value="${key[Object.keys(key)[3]][a].value}">${key[Object.keys(key)[3]][a].text}</option>`
            }
            result += `<br>${startCombo}${startSelectCombo}${s}${endSelectCombo}`;

        }

    }
    let divForm = document.createElement("div");
    result += rres


    divForm.innerHTML = result;
    document.body.append(divForm);
}
form(formDef1);
form(formDef2);
