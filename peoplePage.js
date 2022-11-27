// localStorage.clear();
let newInfo = JSON.parse(localStorage.getItem("currInfo")) || [];
let newItemsList = JSON.parse(localStorage.getItem("itemsList")) || [];
let newAss = JSON.parse(localStorage.getItem("assIte")) || [];
window.addEventListener("load", () => {
  let listPeople = document.querySelector(".listPeople");
  let input1 = document.querySelector("#name");
  let input2 = document.querySelector("#contact");

  const displayHarsh = () => {
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
      const perNam = document.querySelector("#perNames");
      const opt = document.createElement("option");
      opt.innerHTML = newInfo[i]["nameMR"];
      opt.value = newInfo[i]["nameMR"];
      perNam.appendChild(opt);
    }
  };
  displayHarsh();
  let sub = document.querySelector("#submit1");
  let na = "Name: ";
  let co = "Contact: ";
  sub.addEventListener("click", (e) => {
    let currInfo = JSON.parse(localStorage.getItem("currInfo"));
    if (currInfo == null) {
      currInfo = [];
    }
    let task1 = na + input1.value;
    let task2 = co + input2.value;
    if (task1 == "Name: " || task2 == "Contact: ") {
      alert("Please fill all the details");
    } else {
      let nameMR = input1.value;
      let contactMR = input2.value;

      let Info = {
        nameMR: nameMR,
        contactMR: contactMR,
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
      upperBelow.appendChild(contentBox);
    }
  };
  displayAssignItems();

  assign.addEventListener("click", (e) => {
    let optValue = document.querySelector("#perNames");

    let iteName = document.querySelector("#itemNames");

    let puk1 = optValue.value;
    let puk2 = iteName.value;
    console.log(puk1, puk2);
    if (puk1 == "Select Name" || puk2 == "Select Item") {
      alert("Select Appropriate options");
    } else {
      let Ass = JSON.parse(localStorage.getItem("assIte")) || [];
      let AssignItem = {
        nameAs: puk1,
        itemAs: puk2,
      };

      
      Ass.push(AssignItem);
      localStorage.setItem("assIte", JSON.stringify(Ass));
      window.location.reload();
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
      inpItem.value = "";
    }
  });
});
