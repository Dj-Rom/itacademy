
class HashStorageClass  {
   #storage = {};
   constructor() {
      
   }
   addValue(key, value) {
       return this.#storage[key] = value ;
      }
   getKeys() {
       return Object.keys(this.#storage); 
      }
   getValue(key) { 
      return this.#storage[key]; 
   }
   deleteValue(key) {
      if(key in this.#storage){
         delete this.#storage[key];
         return true
         }return false
   }
}
const drinkStorage = new HashStorageClass;
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
