// localStorage.clear();
// console.log(names);
let newInfo = JSON.parse(localStorage.getItem("currInfo")) || [];
let newItemsList = JSON.parse(localStorage.getItem("itemsList")) || [];
let newAss = JSON.parse(localStorage.getItem("assIte")) || [];
window.addEventListener("load", () => {
  let names = [];
  let listPeople = document.querySelector(".listPeople");
  

  const displayPeople = () => {
    while (listPeople.firstChild) {
      listPeople.removeChild(listPeople.firstChild);
    }

    for (var i = 0; i < newInfo.length; i++) {
      let personInp = document.createElement("div");
      personInp.classList.add("valuePerson");
      let nameP = document.createElement("p");
      nameP.classList.add("pInsert");
      nameP.innerHTML = newInfo[i]["nameMR"];
      personInp.appendChild(nameP);
      let contactP = document.createElement("p");
      contactP.classList.add("nInsert");
      contactP.innerHTML = newInfo[i]["contactMR"];
      personInp.appendChild(contactP);
      listPeople.appendChild(personInp);
      if(newInfo[i]["itemMRK"]!= ""){
        let itemP = document.createElement('div');
        itemP.classList.add('itemsss');
        itemP.innerHTML = newInfo[i].itemMRK;
        personInp.appendChild(itemP);
      }
      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.innerHTML = "Delete";
      
      personInp.appendChild(deleteBtn);
      deleteBtn.onclick = (function(i) {
        return function() {

            if (confirm("Do you want to delete this data ?")) {
                newInfo.splice(i, 1) 
                window.location.reload();
                localStorage.setItem("currInfo", JSON.stringify(newInfo)); 
            }                        
        }
    })(i);
      // deleteBtn.addEventListener('click',(e)=>{
      //   newInfo.splice(,1);
      //   // listPeople.removeChild(personInp);
      //   localStorage.setItem("currInfo",JSON.stringify(newInfo));
      // })
      const perNam = document.querySelector("#perNames");
      const opt = document.createElement("option");
      opt.innerHTML = newInfo[i]["nameMR"];
      opt.value = newInfo[i]["nameMR"];
      perNam.appendChild(opt);
    }
  };
  displayPeople();

  // let delFunc = document.querySelector('.deleteBtn');
   
  let sub = document.querySelector("#submit1");
  let na = "Name: ";
  let co = "Contact: ";
  sub.addEventListener("click", (e) => {
    let input1 = document.querySelector("#name");
    let input2 = document.querySelector("#contact");
    let currInfo = JSON.parse(localStorage.getItem("currInfo"));
    if (currInfo == null) {
      currInfo = [];
    }
    console.log(currInfo.length);
    for(var y = 0;y < currInfo.length;y++){
      if(input1.value == currInfo[y].nameMR){
        alert('Name already exists');
        return ;
      }
    }
    
    if(input2.value.length!=10){
      alert('Invalid Contact Number');
      input2.value = "";
      return;
    }
    let task1 = na + input1.value;
    let task2 = co + input2.value;
    if (task1 == "Name: " || task2 == "Contact: ") {
      alert("Please fill all the details");
    } else {
      let nameMR = input1.value;
      let contactMR = input2.value;
      names.push(nameMR);
      console.log(names);
      
      let Info = {
        nameMR: nameMR,
        contactMR: contactMR,
        itemMRK : [],
      };
      currInfo.push(Info);

      localStorage.setItem("currInfo", JSON.stringify(currInfo));

      window.location.reload();
      input1.value = "";
      input2.value = "";
    }
  });

  let assign = document.querySelector("#assign");
  let upperBelow = document.querySelector(".upperBelow");

  const displayAssignItems = () => {
    while (upperBelow.firstChild) {
      upperBelow.removeChild(upperBelow.firstChild);
    }

    for (var i = 0; i < newAss.length; i++) {
      let contentBox = document.createElement("div");
      contentBox.classList.add("contentBox");

      let nam = document.createElement("p");
      nam.classList.add("nam");
      nam.innerHTML = newAss[i]["nameAs"];
      nam.value = newAss[i]["nameAs"];
      contentBox.appendChild(nam);
      let ite = document.createElement("p");
      ite.classList.add("iteNam");
      ite.innerHTML = newAss[i]["itemAs"];
      ite.value = newAss[i]["itemAs"];
      contentBox.appendChild(ite);
      let delBtn2 = document.createElement('button');
      delBtn2.classList.add('delBtn2');
      delBtn2.innerHTML = "Delete";
      contentBox.appendChild(delBtn2);
      delBtn2.onclick = (function(i) {
        return function() {
          var flag = 0;
            if (confirm("Do you want to delete this data ?")) {
                let itemls = JSON.parse(localStorage.getItem("itemsList"));
                let newInfo3 = JSON.parse(localStorage.getItem("currInfo"));
                let anoIte = {
                  itemMR : newAss[i].itemAs,
                }
                itemls.push(anoIte);
                for(var e = 0;e < newInfo3.length;e++){
                  if(newInfo3[e].nameMR == newAss[i].nameAs){
                    // console.log('harshppppp');
                    for(var f = 0;f < newInfo3[e].itemMRK.length;f++){
                      if(newInfo3[e].itemMRK[f] == newAss[i].itemAs){
                        newInfo3[e].itemMRK.splice(f,1);
                        flag = 1;
                        break;
                      }
                    }
                    if(flag == 1){
                      break;
                    }
                  }
                }
                newAss.splice(i, 1) 
                window.location.reload();
                localStorage.setItem("currInfo",JSON.stringify(newInfo3));
                localStorage.setItem("itemsList",JSON.stringify(itemls));
                localStorage.setItem("assIte", JSON.stringify(newAss)); 
            }                        
        }
    })(i);
      upperBelow.appendChild(contentBox);
    }
  };
  displayAssignItems();

  assign.addEventListener("click", (e) => {
    let optValue = document.querySelector("#perNames");

    let iteName = document.querySelector("#itemNames");

    let puk1 = optValue.value;
    let puk2 = iteName.value;
    // console.log(puk1, puk2);
    if (puk1 == "Select Name" || puk2 == "selectItem") {
      alert("Select Appropriate options");
    } else {
      let newInfo2 = JSON.parse(localStorage.getItem("currInfo")) || [];
      let newItem2 = JSON.parse(localStorage.getItem("itemsList")) || [];

      let Ass = JSON.parse(localStorage.getItem("assIte")) || [];
      let AssignItem = {
        nameAs: puk1,
        itemAs: puk2,
      };
      

      Ass.push(AssignItem);
      localStorage.setItem("assIte",JSON.stringify(Ass));
      window.location.reload();
      
      for(var k = 0;k < newInfo2.length;k++){
        if(newInfo2[k].nameMR == String(puk1)){
          console.log('harshz');
          idx = k;
          break;
        }
      }
      window.location.reload();
      newInfo2[idx].itemMRK.push(puk2);
      
      localStorage.setItem("currInfo", JSON.stringify(newInfo2));
      console.log(newItem2.length)
      for(var r = 0;r < newItem2.length;r++){
        if(newItem2[r].itemMR == String(puk2)){
          
          newItem2.splice(r,1);
          console.log(newItem2);
          break;
        }
      }
      localStorage.setItem("itemsList",JSON.stringify(newItem2));
    }

  });
 
  let addItem = document.querySelector("#addItemBtn");
  let middle2 = document.querySelector(".another");
  let itemNames = document.querySelector("#itemNames");

  const displayItem = () => {
    while (middle2.firstChild) {
      middle2.removeChild(middle2.firstChild);
    }
    
    console.log(newItemsList.length);
    for (var i = 0; i < newItemsList.length; i++) {
      let optNe = document.createElement("option");
      optNe.value = newItemsList[i]["itemMR"];
      optNe.innerHTML = newItemsList[i]["itemMR"];
      itemNames.appendChild(optNe);
      let itemex = document.createElement("div");
      itemex.classList.add("itemex");
      middle2.appendChild(itemex);
      let pure = document.createElement("p");
      pure.classList.add("pure");
      pure.innerHTML = newItemsList[i]["itemMR"];
      itemex.appendChild(pure);
      inpItem.value = "";
    }
  };
  displayItem();

  addItem.addEventListener("click", (e) => {
    let itemsList = JSON.parse(localStorage.getItem("itemsList"));
    if (itemsList == null) {
      itemsList = [];
    }
    let inpItem = document.querySelector("#inpItem");
    if (!inpItem.value) {
      alert("Please fill the details!");
    } else {
      let ta = inpItem.value;
      let z = {
        itemMR: ta,
      };
      itemsList.push(z);
      localStorage.setItem("itemsList", JSON.stringify(itemsList));
      window.location.reload();
      inpItem.focus();
      inpItem.value = "";
    }
  });
});
