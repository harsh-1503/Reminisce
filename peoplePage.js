// alert('hello');
// const

const arr = [];
window.addEventListener("load", () => {
  const listPeople = document.querySelector(".listPeople");
  const input1 = document.querySelector("#name");
  const input2 = document.querySelector("#contact");

  const sub = document.querySelector("#submit1");
  const na = "Name: ";
  const co = "Contact: ";
  sub.addEventListener("click", (e) => {
    const task1 = na + input1.value;
    const task2 = co + input2.value;
    if (task1 == "Name: " || task2 == "Contact: ") {
      alert("Please fill all the details");
    } else {
      const p = input1.value,q = input2.value;
      arr.push({p,q});
      // localStorage.setItem("name",p);
      // localStorage.setItem("contact",q);
      console.log(arr);
      const personInp = document.createElement("div");
      personInp.classList.add("valuePerson");

      const nameP = document.createElement("p");
      nameP.classList.add("pInsert");
      nameP.innerHTML = task1;
      personInp.appendChild(nameP);
      const contactP = document.createElement("p");
      contactP.classList.add("nInsert");
      contactP.innerHTML = task2;
      personInp.appendChild(contactP);

      const itemP = document.createElement("p");
      // itemP.type='text';
      // itemP.setAttribute('readonly','readonly');
      personInp.appendChild(itemP);
      listPeople.appendChild(personInp);
      const perNam = document.querySelector("#perNames");
      const opt = document.createElement("option");
      opt.innerHTML = task1;
      opt.value = task1;
      perNam.appendChild(opt);
      input1.value = "";
      input2.value = "";
    }
  });

  const assign = document.querySelector("#assign");

  assign.addEventListener("click", (e) => {
    const upperBelow = document.querySelector(".upperBelow");
    // alert('bhosdya');
    const optValue = document.querySelector("#perNames");
    const iteName = document.querySelector("#itemNames");

    const puk1 = optValue.value;
    const puk2 = iteName.value;
    if (puk1 == "Select Name" || puk2 == "Select Item") {
      alert("Select Appropriate options");
    } else {
      const contentBox = document.createElement("div");
      contentBox.classList.add("contentBox");

      const nam = document.createElement("p");
      nam.classList.add("nam");
      nam.innerHTML = puk1;
      nam.value = puk1;
      contentBox.appendChild(nam);
      const ite = document.createElement("p");
      ite.classList.add("iteNam");
      ite.innerHTML = puk2;
      ite.value = puk2;
      contentBox.appendChild(ite);

      upperBelow.appendChild(contentBox);
    }
  });

  const addItem = document.querySelector("#addItemBtn");
  const middle2 = document.querySelector(".another");
  const itemNames = document.querySelector("#itemNames");
  addItem.addEventListener("click", (e) => {
    const inpItem = document.querySelector("#inpItem");
    if (!inpItem.value) {
      alert("Please fill the details!");
    } else {
      const ta = inpItem.value;
      const optNe = document.createElement("option");
      optNe.value = ta;
      optNe.innerHTML = ta;
      itemNames.appendChild(optNe);
      const itemex = document.createElement("div");
      itemex.classList.add("itemex");
      middle2.appendChild(itemex);
      const pure = document.createElement("p");
      pure.classList.add("pure");
      pure.innerHTML = ta;
      itemex.appendChild(pure);
      inpItem.value = "";
    }
  });
});
