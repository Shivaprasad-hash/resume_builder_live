// Input Elements
let givenName = document.getElementById("given-name");
let familyName = document.getElementById("family-name");
let desiredPosition = document.getElementById("desired-position");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let postCode = document.getElementById("post-code")
let city = document.getElementById("city");
let linkedin = document.getElementById("linkedin");

// Resume names
let headingName = document.getElementById("headingName");
let nameInfo = document.getElementById("nameInfo");
let emailInfo = document.getElementById("emailInfo");
let phonenoInfo = document.getElementById("phonenoInfo");
let adressInfo = document.getElementById("adressInfo");
let linkedinInfo = document.getElementById("linkedinInfo");

let pdDoneBtn = document.getElementById("pdDoneBtn");



function updateName(){
    headingName.textContent = givenName.value +" " + familyName.value || "\u00A0";
    nameInfo.textContent = givenName.value +" " + familyName.value || "\u00A0";
    emailInfo.textContent = email.value  || "\u00A0";
    phonenoInfo.textContent = phone.value;
    adressInfo.textContent = address.value +" "+postCode.value+" "+city.value || "\u00A0";
    linkedinInfo.textContent = linkedin.value || "\u00A0";
}

pdDoneBtn.addEventListener("click", updateName);