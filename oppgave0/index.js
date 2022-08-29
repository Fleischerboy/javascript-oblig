// Oppgave 1
// løsning 1
const removeBtn = document.getElementById("remove-btn");
// removeBtn.addEventListener("click", function() {
// const removeText = document.querySelector("#remove");
// removeText.style.display = "none"
// });

// løsning 2
const removeParagraph = document.getElementById("remove");
removeBtn.addEventListener('click', () => {
   removeParagraph.remove();
});


// Oppgave 2

const changeBtn = document.getElementById("change-btn");
const changeParagraph = document.getElementById("change");
changeBtn.addEventListener('click', () => {
//changeParagraph.innerHTML = "Hello I'm new to Javascript!"
changeParagraph.textContent = "Hello I'm new to Javascript!";

});

// Oppgave 3

const inputText = document.getElementById("input-text");
const inputBox = document.getElementById("input");
inputBox.addEventListener("change", () => {
inputText.innerHTML = inputBox.value;

});


// Oppgave 4
const writeListBtn = document.getElementById("write-list");
const ulList = document.getElementById("ul");
const myList = ["item one", "item two", "item three"];

function displayList() {
   ulList.innerHTML = null;
   myList.forEach(element => {
    let li = document.createElement("li");
    li.innerHTML = element;
    ulList.appendChild(li);
    
   });
}
writeListBtn.addEventListener("click", displayList);



// Oppgave 5
const placeholderId = document.getElementById("placeholder");
const createId = document.getElementById("create");
const selectId = document.getElementById("select");
const textId = document.getElementById("text");

createId.addEventListener("click", () => {
selectedValue = selectId.value;
text = textId.value;
createdTag = document.createElement(selectedValue);
createdTag.innerHTML = text;
placeholderId.appendChild(createdTag);

});



// Oppgave 6

const ulListId = document.getElementById("list");
const removeLiId = document.getElementById("remove-li");

removeLiId.addEventListener("click", () => {
   let lis = ulListId.getElementsByTagName("li");
   if(lis.length != 0) {
      lis[0].remove();
   }
});

// Oppgave 7

const orderId = document.getElementById("order");
const nameId = document.getElementById("name");

nameId.addEventListener("keyup", (e) => {
   if(validateMaxLength(nameId.value, 4)) {
      orderId.disabled = true;
      
   }
   else {
      orderId.disabled = false;
      orderId.style = "none";
   }
    
});

function validateMaxLength(value, maxLength) {
  if(value.trim().length > maxLength) {
   return true;
  }
  return false;
}



// Oppgave 8 
// kanskje ikke den beste løsningen, men det var det jeg fikk til :).
const colorId = document.getElementById("color");
const listId = document.querySelector(".children");
const ListChilderen = listId.getElementsByTagName("li");
const numWords = {
   "one" : 1,
   "two" : 2,
   "three" : 3,
   "four" : 4,
   "five": 5,
   "six" : 6,
}

colorId.addEventListener("click", () => {
   for (let i = 0; i <= ListChilderen.length - 1; i++) {
         let str = ListChilderen[i].textContent;
         strArray = str.split(' ');
 
         if(numWords[strArray[1]] % 2 == 0) {
            ListChilderen[i].style = "border: 2px solid pink;"
         }
         else {
            ListChilderen[i].style = "border: 2px solid green;"
         }
   }
  
});


