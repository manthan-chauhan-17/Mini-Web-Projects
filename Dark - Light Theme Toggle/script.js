const toggle = document.getElementById("toggle");
const body = document.querySelector("body");

toggle.addEventListener("click" , changeTheme);

function changeTheme(){
    if (toggle.checked) {
        body.style.backgroundColor = "#252525";
        body.style.color = "aliceblue";
    }
    else{
        body.style.backgroundColor = "aliceblue";
        body.style.color = "#252525";
    }
}