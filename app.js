const items = JSON.parse(localStorage.getItem('items')) || [];

const displayItems = () => {
    const theRenderingItems = document.querySelector("#theItems");
    while (theRenderingItems.firstChild) {
        theRenderingItems.removeChild(theRenderingItems.firstChild);
    }
    items.forEach((ele, ind)=>{
        let thePTag = document.createElement('p');
        thePTag.innerHTML = ele;
        theRenderingItems.appendChild(thePTag); 
    });
}

displayItems();

const addItemHandler = () => {
    if(document.querySelector("#newItem").value.length == 0){
        alert("Empty Item!");
    }
    const itemName = document.querySelector("#newItem").value;
    if(items.includes(itemName)){
        alert("Item already exists");
    }
    else{
        items.push(itemName);
    }
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items)
    displayItems();
}

