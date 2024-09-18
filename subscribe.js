console.log("Fetch & Subscribe");

function renderNavInfo() {
    let emailNavItem = document.getElementById("email-input")
    // retrieve data from localStorage
    let myEmail = localStorage.getItem("email");
    console.log(myEmail);
    // put data into the DOM
    emailNavItem.textContent = myEmail;

}
renderNavInfo();