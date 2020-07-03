var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteBtn = document.getElementsByClassName("delete")

for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", removeParent, false);
}


function removeParent(evt) {
    evt
        .target
        .removeEventListener("click", removeParent, false);
    evt
        .target
        .parentNode
        .remove();
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.scrElement;
}

function createListElement() {
    var btn = document.createElement("button");
    btn.innerHTML = "delete";
    btn.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(btn);

    ul.appendChild(li);
    input.value = "";

}

// click on tiems ans you get strike threw.
var list = document.querySelectorAll("li");
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function (e) {
        e
            .currentTarget
            .classList
            .toggle("done");
    })
} 

// add new items
function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
