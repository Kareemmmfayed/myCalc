let butt = document.querySelectorAll(".grid-item");

let finalNum = "";
let second, third;
let plus = false;
let minus = false;
let multi = false;
let divi = false;
let click = false;
let tog = true;

butt.forEach(bu => {
    bu.addEventListener("click", (e) => {
        if (e.target.classList.contains("num") && finalNum.length < 9) {
            finalNum += e.target.innerHTML;
            showNum();
        }
        if (e.target.classList.contains("del")) {
            let num = finalNum.length - 1;
            finalNum = finalNum.substring(0, num);
            showNum();
        }
        if (e.target.classList.contains("plus") && plus === true) {
            second += parseInt(finalNum);
            finalNum = "";
        }
        if (e.target.classList.contains("plus") && plus === false) {
            second = parseInt(finalNum);
            finalNum = "";
            plus = true;
        }
        if (e.target.classList.contains("equal") && plus === true) {
            let num1 = second;
            let num2 = parseInt(finalNum);
            let numf = num1 + num2;
            finalNum = "" + numf;
            plus = false;
            showNum();
        }
        if (e.target.classList.contains("minus") && minus === true) {
            third -= parseInt(finalNum);
            finalNum = "";
        }
        if (e.target.classList.contains("minus") && minus === false) {
            third = parseInt(finalNum);
            finalNum = "";
            minus = true;
        }
        if (e.target.classList.contains("equal") && minus === true) {
            let num3 = third;
            let num4 = parseInt(finalNum);
            let numff = num3 - num4;
            finalNum = "" + numff;
            minus = false;
            showNum();
        }
        if (e.target.classList.contains("multi") && multi === true) {
            fourth = fourth * parseInt(finalNum);
            finalNum = "";
        }
        if (e.target.classList.contains("multi") && multi === false) {
            fourth = parseInt(finalNum);
            finalNum = "";
            multi = true;
        }
        if (e.target.classList.contains("equal") && multi === true) {
            let num3 = fourth;
            let num4 = parseInt(finalNum);
            let numff = num3 * num4;
            finalNum = "" + numff;
            multi = false;
            showNum();
        }
        if (e.target.classList.contains("divi") && divi === true) {
            fifth = fifth / parseInt(finalNum);
            finalNum = "";
        }
        if (e.target.classList.contains("divi") && divi === false) {
            fifth = parseInt(finalNum);
            finalNum = "";
            divi = true;
        }
        if (e.target.classList.contains("equal") && divi === true) {
            let num3 = fifth;
            let num4 = parseInt(finalNum);
            let numff = num3 / num4;
            finalNum = "" + numff;
            divi = false;
            showNum();
        }
        if (e.target.classList.contains("reset")) {
            finalNum = "";
            showNum();
        }
        
    });
});


function showNum () {
    if (click) {
        document.querySelector(".screen div").remove();
        click = false;
    }

    const Node = document.createElement("div");
    const textNode = document.createTextNode(finalNum);
    Node.appendChild(textNode);
    document.querySelector(".screen").appendChild(Node);
    click = true;
}

document.querySelector(".tog").onclick = function () {
    
    var r = document.querySelector(':root');

    if (tog) {
        document.querySelector(".tog span").style.left = "39px";
        tog = false;
        r.style.setProperty("--back", "#313129");
        r.style.setProperty("--body", "#d2cbcb");
        r.style.setProperty("--screen", "#eeeeee");
        // r.style.setProperty("--but-one", "#37372d");
    }
    else {
        document.querySelector(".tog span").style.left = "4px";
        tog = true;
        r.style.setProperty("--back", "#3b4664");
        r.style.setProperty("--body", "#252d44");
        r.style.setProperty("--screen", "#181f32");
    }
};