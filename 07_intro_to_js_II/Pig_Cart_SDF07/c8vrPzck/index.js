import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-65904-default-rtdb.europe-west1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)
const dataBase = getDatabase(app)
const shoppingList = ref(dataBase, "shoppingList")

const input = document.getElementById("input-field")
const add_btn = document.getElementById("add-button")
const shopList = document.getElementById('shopping-list')

add_btn.addEventListener("click", function() {
    let inputValue = input.value    
    push( shoppingList ,inputValue)
    // console.log(`${inputValue} added to database`)
    clearInput()
        
  })

onValue(shoppingList, function(snapshot){
    
if (snapshot.exists()){
    
    let listArray = Object.entries(snapshot.val())
    
    clearShopList()
    
    for (let i = 0; i < listArray.length; i++){
        let currentItem = listArray[i]
        let currentItemID = currentItem[0];
        // console.log(currentItemID)
        let currentItemValue = currentItem[1];
        // console.log(currentItemValue)
        
        appendItemToShoppingList(currentItem)
        // console.log(currentItem)
    } 
} else{
    shopList.innerHTML = "No items here... yet."
}


    
})

function appendItemToShoppingList(item){
    let itemID = item[0]
    let itemValue = item[1]
    
    // Create a new paragraph element
    const newEl = document.createElement('li');

    // Set the text content of the paragraph
    newEl.textContent = itemValue;
    
    // eventListener to delete double clicked element
    newEl.addEventListener("dblclick", function() {
        let locationInDB = ref(dataBase, `shoppingList/${itemID}`)
        
        remove(locationInDB)
        
        // console.log(itemID)
    })

    // Append the new paragraph to the shopping list body
    shopList.appendChild(newEl);
}

function clearInput(){
    input.value = ""
}

function clearShopList(){
    shopList.innerHTML = ""
}


  
