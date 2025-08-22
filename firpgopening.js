let givenName = document.getElementById("given-name");
let familyName = document.getElementById("family-name");

let headingName = document.getElementById("headingName");
let nameInfo = document.getElementById("nameInfo");

let pdDoneBtn = document.getElementById("pdDoneBtn");

function updateName(){
    if (givenName.value === ""){
        headingName.textContent = headingName.textContent;
    }else{
        headingName.textContent = givenName.value;
    }
}