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

 let result = '<br><form action="https://fe.it-academy.by/TestForm.php" name="formJs" method="post">',
    r = '',
    rres = '',
    s = '',
    a = 0;

for (let key of func) {

    if (key.kind === 'memo') {
        result += ` <label for="${key.name}">${key.label}</label> <input type="memo" name="${key.name}}" required>`;
    }

    if (key.kind == 'longtext') {
        result += ` <label for="${key.name}">${key.label}</label> <input type="longtext"  name="${key.name}}" required>`;
    }

    if (key.kind === 'number') {
        result += ` <label for="${key.name}">${key.label}</label> <input type="number"  name="${key.name}}" min="0" required>`;
    }
    if (key.kind === 'shorttext') {
        result += `<label for="${key.name}">${key.label}</label> <input type="shorttext" name="${key.name}}" required  >`;
    }
    if (key.kind === 'submit') {
        result += ` <input type="${key.kind}" value="${key.caption}"  >`;

    }
    if (key.kind === 'radio') {
        for (a = 0; a < key.variants.length; a++) {
           
            r += ` <br><input type="radio" required  name="${key.name}}"  value="${key.variants[a].value}"><label for="${key.name}"> ${key.variants[a].text}<br></label>`;
        }
        result += `<br><label>${key.label}</label> ${r}`;
    }
    if (key.kind === 'check') {
        result += `<label for="${key.name}">${key.label}</label> <input type="checkbox" name="${key.name}}">`;
    }
    if (key.kind === 'combo') {
        const startCombo = ` <label for="${key.name}">${key.label}</label>`;
        const startSelectCombo = `<select name="${key.name}" >`;
        const endSelectCombo = `</select>`;
        for (a; a < key.variants.length;a++) {
            s += `<option value="${key.variants[a].value}">${key.variants[a].text}</option>`;
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

