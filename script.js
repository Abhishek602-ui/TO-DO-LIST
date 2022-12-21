function getAndUpdate() {
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem("itemsJson") == null) {
        console.log("Jai Sree ram");
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem("itemsJson")
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    update();
}
function update() {

    if (localStorage.getItem("itemsJson") == null) {

        itemJsonArray = [];
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem("itemsJson")
        itemJsonArray = JSON.parse(itemJsonArraystr);

    }
    // Populate the table...

    let tablebody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`
    });
    tablebody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArraystr = localStorage.getItem("itemsJson")
    itemJsonArray = JSON.parse(itemJsonArraystr);
    // Delete itemIndex Element From The Array..
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    update();
}

