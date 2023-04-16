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
    let f ='',result = '',r = '';
    for( let key of func){
        if(Object.keys(key).length ==4){
            for(let s=0;s<key[Object.keys(key)[3]].length;s++){
                console.log(key[Object.keys(key)[3]]);
                r = `<option value="${key[Object.keys(key)[3]][1]}">${key[Object.keys(key)[3]][0]}</option>`
            };
                f=`<label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}<select name="${key[Object.keys(key)[2]]}">${r}</select>`;}
        if(Object.keys(key).length ==3){
        f=` <label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label> <input type="${key[Object.keys(key)[1]]}" name="${key[Object.keys(key)[2]]}" >`; }
        if(Object.keys(key).length ===2){
            f=` <input type="${key[Object.keys(key)[1]]}" value="${key[Object.keys(key)[0]]}"  >`;
        break}
            result += f
    }
    result += f
    const divForm = document.forms.formJs;
    divForm.innerHTML = result
}form(formDef1)