let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".site__select");
let elResault = document.querySelector(".resault");
let elSize = document.querySelector(".size");
let elProduct = document.querySelector(".pizza__dough")

let selArr = ["Yupqa", "Qalin", "O'rta"];
let sizePizza = ["25sm", "30sm", "35sm"]


for(let el = 0; el < selArr.length; el++) {
   let elOption = document.createElement("option");
   elOption.value = selArr[el];
   elOption.textContent =  selArr[el];
   elSelect.appendChild(elOption);
}

elSelect.addEventListener("click", function(evt){
   evt.preventDefault();
   
   console.log(elSelect.value);
   elResault.textContent = elSelect.value;
})

for(let el = 0; el < sizePizza.length; el++) {
   let elInput = document.createElement("input");
   let elLabel = document.createElement("label");
   
   elInput.value = sizePizza [el];
   elInput.setAttribute("type", "radio")
   elInput.setAttribute("name", "radio")
   
   elLabel.textContent = sizePizza[el];
   elSize.appendChild(elLabel);
   elLabel.appendChild(elInput);
   elLabel.style.backgroundColor = "grey";
   elLabel.style.marginRight = "20px";
   elLabel.style.width = "50px";
   elLabel.style.height = "50px";
   elLabel.style.borderRadius = "50%";
   elInput.style.opacity = "00"
   elLabel.style.padding = "10px"
   elLabel.style.cursor = "pointer"
}



let elProductList = ["Pomidor", "Kurka go'shti", "Zaytun",]
for(let el = 0; el < elProductList.length; el++) {
   let elInput = document.createElement("input");
   let elCheckboxLabel = document.createElement("label");
   
   elInput.value = elProductList[el];
   elInput.setAttribute("type", "checkbox");
   
   elCheckboxLabel.textContent = elProductList[el] ;
   
   elProduct.appendChild(elCheckboxLabel);
   elCheckboxLabel.appendChild(elInput);
   
   elCheckboxLabel.style.display = "flex"
}

let elList = ["Tuzlangan bodiring", "Qo'ziqorn", "Qazi",]
for(let el = 0; el < elProductList.length; el++) {
   let elInput = document.createElement("input");
   let elCheckboxLabel = document.createElement("label");
   
   elInput.value = elProductList[el];
   elInput.setAttribute("type", "checkbox");
   
   elCheckboxLabel.textContent = elProductList[el] ;
   
   elProduct.appendChild(elCheckboxLabel);
   elCheckboxLabel.appendChild(elInput);
   elCheckboxLabel.style.display = "flex"
}

   let addtions = document.querySelector(".additions");
   let creatInput = document.createElement("input");
   let creatInput2 = document.createElement("input");
   let creatLabel2 = document.createElement("label");
   let creatLabel = document.createElement("label");
   creatInput.setAttribute("type","checkbox");
   creatLabel.setAttribute("type","for");
   creatLabel.textContent = "Achchiq";
   creatLabel2.textContent = "Sosiskali";
   creatInput2.setAttribute("type","checkbox");
   creatLabel2.setAttribute("type","for");
   addtions.append(creatInput);   
   addtions.append(creatLabel);
   addtions.append(creatInput2);
   addtions.append(creatLabel2);

   let span = document.querySelector(".resoult");
   creatInput.addEventListener("click",()=> {
      if(creatInput.type == "checkbox"){
         span.textContent = label.textContent;
      }
   });

   let pizza = document.querySelector(".on__pizza");
   elInput.addEventListener("click",()=> {
      if(elInput.type == "checkbox"){
         pizza.textContent = label.textContent;
      }
   });

   let big = document.querySelector(".big");
   sizePizza.addEventListener("click",()=> {
      if(sizePizza.type == "checkbox"){
         span.textContent = label.textContent;
      }
   });



