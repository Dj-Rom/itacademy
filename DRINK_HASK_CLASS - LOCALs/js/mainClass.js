window.addEventListener("load", ()=>{
   localStorage["Drink"] =  localStorage["Drink"]? localStorage["Drink"]: JSON.stringify({})
   localStorage["food"] =   localStorage["food"]? localStorage["food"]: JSON.stringify({})

class HashStorageClass  {
   #storage = {};
  
   constructor() {
     
   }
   
   addValue(key, value,self) {
      
       this.#storage[key] = value ;
      let data = ""; data += JSON.stringify(this.#storage)
      localStorage[self] = data
   
      this.#storage = JSON.parse(localStorage[self])
      
      console.log(JSON.parse(localStorage[self]));
   
      
      }
   getKeys(self) {
      this.#storage = JSON.parse(localStorage[self])|| this.#storage
   
       return Object.keys(this.#storage); 
      }
   getValue(key,self) { 
      this.#storage = JSON.parse(localStorage[self])
      this.#storage[key]; 
 
   }
   deleteValue(key,self) {
   
   
      if(key in this.#storage){
         delete this.#storage[key];
         const inData = this.#storage
         localStorage.removeItem(self)
         localStorage[self] = JSON.stringify(inData)
         return true
         }return false
   }
}

const drinkStorage = new HashStorageClass;
const foodStorage = new HashStorageClass
console.log(!drinkStorage);
const nameDrink = document.querySelector('#enterDrink');
nameDrink.addEventListener('click', () => {
   const keyDrink = prompt('Введите название напитка');
   const valueAlcoDrinkUser = confirm(' напиток алкогольный ок=ДА, отмена=НЕТ');
   const valueReceptDrinkUser = prompt('рецепт его приготовления');
         
   drinkStorage.addValue(keyDrink.toLowerCase(), {valueReceptDrinkUser, valueAlcoDrinkUser}, "Drink");
});


const resultDrink = document.querySelector('#resultDrink');
resultDrink.addEventListener('click', () => {
   const allInfoDrink = prompt('«получение информации о напитке»');
   const g = (drinkStorage.getValue(allInfoDrink, "Drink"));
   (g) ?
   alert(`напиток ${allInfoDrink}
   алкогольный: ${(g.valueAlcoDrinkUser)?'да':'НЕТ'}
   рецепт приготовления:
   ${g.valueReceptDrinkUser}`): alert(`not ${allInfoDrink}`);

});
const deleteDrink = document.querySelector('#deleteDrink');
deleteDrink.addEventListener('click', () => {
   const deleteNameDrink = prompt('«удаление информации о напитке»'),
      resDelete = drinkStorage.deleteValue(deleteNameDrink,"Drink");
   (resDelete)  ? alert(`${deleteNameDrink} удаленно успешно `) :alert("Ошибка");
});
const allDrink = document.querySelector('#allDrink');
allDrink.addEventListener('click', () => {
   event.preventDefault()
   
   const resGet = drinkStorage.getKeys("Drink")

   if(!resGet[0]){alert(`Ваш список напитков пуст`);
  }
   else  { ;alert(`«перечень всех напитков» ${drinkStorage.getKeys("Drink")}`); }
   
});



const nameFood = document.querySelector('#enterFood');
nameFood.addEventListener('click', () => {
   const keyFood = prompt('Введите название еды');
   const valueAlcoFoodUser = confirm(' еда VEGAN ок=ДА, отмена=НЕТ');
   const valueReceptFoodUser= prompt('рецепт его приготовления');
         
   foodStorage.addValue(keyFood.toLowerCase(), {valueReceptFoodUser, valueAlcoFoodUser}, "food");
});

const resultFood = document.querySelector('#resultFood');
resultFood.addEventListener('click', () => {
   const allInfoFood = prompt('«получение информации о еде»');
   const gF = (foodStorage.getValue(allInfoFood));
   (gF) ?
   alert(`еды ${allInfoFood}
   VEGAN: ${(gF.valueAlcoFoodUser)?'да':'НЕТ'}
   рецепт приготовления:
   ${gF.valueReceptFoodUser}`): alert(`not ${allInfoFood}`);

});
const deleteFood = document.querySelector('#deleteFood');
deleteFood.addEventListener('click', () => {
   const deleteNameFood = prompt('«удаление информации о еде»'),
      resDelete = foodStorage.deleteValue(deleteNameFood,"food");
   (resDelete)  ? alert(`${deleteNameFood} удаленно успешно `) :alert("Ошибка");
});
const allFood = document.querySelector('#allFood');
allFood.addEventListener('click', () => {
   const resGet = foodStorage.getKeys("food")
   if(!resGet[0]){alert(`Ваш список еды пуст`);
  }
   else { ;alert(`«перечень всех блюд» ${foodStorage.getKeys("food")}`); }
});


})
