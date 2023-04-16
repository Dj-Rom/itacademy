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
   
    let f ='',result = '',r = '',rres='', s = '';
    for( let key of func){
       // (key[Object.keys(key)[1]] == 'check')? key[Object.keys(key)[1]] = 'radio': false
        if(Object.keys(key).length ==4){
                let a = 0;
                if(key[Object.keys(key)[1]] == 'combo'){
                 const startCombo = ` <label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label>`

                   const startSelectCombo = `<select name="${key[Object.keys(key)[2]]}" >`
                    const endSelectCombo =`</select>`
                    for(a; a < key[Object.keys(key)[3]].length;a++){
                
                 s += `<option value="${key[Object.keys(key)[3]][a].value}">${key[Object.keys(key)[3]][a].text}</option>`
                }
                rres = `${startCombo}${startSelectCombo}${s}${endSelectCombo}`
                        f = rres

                    }


                else if (key[Object.keys(key)[1]] == 'radio'){console.log(key[Object.keys(key)[2]]);for(a; a < key[Object.keys(key)[3]].length;a++){
                   r +=` <input type="radio" required id ="${key[Object.keys(key)[2]]}" name="${key[Object.keys(key)[2]]}"  value="${key[Object.keys(key)[3]][a].value}"><label for="${key[Object.keys(key)[2]]}"> ${key[Object.keys(key)[3]][a].text}<br></label>`
                  
                   f = `<br><label>${key[Object.keys(key)[0]]}</label> ${r}`
                } }
            };
                
            
        if(Object.keys(key).length ==3){
            if (key[Object.keys(key)[1]] == 'check'){
                f = ` <label for="${key[Object.keys(key)[2]]}">${key[Object.keys(key)[0]]}</label> <input type="checkbox" name="${key[Object.keys(key)[2]]}">`
            }else 
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