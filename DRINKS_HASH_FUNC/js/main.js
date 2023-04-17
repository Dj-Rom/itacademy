"use strict";

function HashStorageFunc() {
    const storage = {};
this.addValue = function (key, value) {
   return storage[key] = value;
}
this.getValue = function (key) {
   return storage[key];
}
this.deleteValue = function (key) {
   if(key in storage){
   delete storage[key];
   return true;
   }return false;
}
this.getKeys = function () {
   return Object.keys(storage);
}
}
const drinkStorage = new HashStorageFunc();
const nameDrink = document.querySelector('#enterDrink');
nameDrink.addEventListener('click', () => {
   const keyDrink = prompt('Введите название напитка');
   const valueAlcoDrinkUser = confirm(' напиток алкогольный ок=ДА, отмена=НЕТ');
   const valueReceptDrinkUser = prompt('рецепт его приготовления');
         
   drinkStorage.addValue(keyDrink.toLowerCase(), {valueReceptDrinkUser, valueAlcoDrinkUser});
});

const resultDrink = document.querySelector('#resultDrink');
resultDrink.addEventListener('click', () => {
   const allInfoDrink = prompt('«получение информации о напитке»');
   const g = (drinkStorage.getValue(allInfoDrink));
   (g) ?
   alert(`напиток ${allInfoDrink}
   алкогольный: ${(g.valueAlcoDrinkUser)?'да':'НЕТ'}
   рецепт приготовления:
   ${g.valueReceptDrinkUser}`): alert(`not ${allInfoDrink}`);

});
const deleteDrink = document.querySelector('#deleteDrink');
deleteDrink.addEventListener('click', () => {
   const deleteNameDrink = prompt('«удаление информации о напитке»'),
      resDelete = drinkStorage.deleteValue(deleteNameDrink);
   (resDelete)  ? alert(`${deleteNameDrink} удаленно успешно `) :alert("Ошибка");
});
const allDrink = document.querySelector('#allDrink');
allDrink.addEventListener('click', () => {
   const resGet = drinkStorage.getKeys()
   if(!resGet[0]){alert(`Ваш список напитков пуст`);
  }
   else { alert(`«перечень всех напитков» ${drinkStorage.getKeys()}`); }
});
