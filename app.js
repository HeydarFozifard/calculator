//vars
let numberBtn = document.querySelectorAll("#numberBtn");
let operationBtn = document.querySelectorAll("#operationBtn");
let setResult = document.getElementById("result");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

//get all numbers btn
numberBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let getNumber = e.target.textContent;
        setResult.textContent += getNumber;
    });
});

//get all operation btn
operationBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let getoperation = e.target.textContent;
        setResult.textContent += getoperation;
    });
});

//clear the result box
clear.addEventListener("click", () => {
    if(setResult.textContent==""){
        alert('are you kidding me you wanna clean up what :(')
    }else{

        setResult.textContent = "";
    }
});

//caculate
equal.addEventListener("click", () => {
    if(setResult.textContent == ""){
        alert('please enter a number')
    }else{

        setResult.textContent = eval(setResult.textContent).toLocaleString();

    }
});
