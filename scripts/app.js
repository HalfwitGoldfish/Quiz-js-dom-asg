// id-section-start
    let changeColorBtn =
    document.getElementById("changeColorBtn");

    let resetColorBtn =
    document.getElementById("resetColorBtn");

    let boxNumber =
    document.getElementById("boxNumber");

    let changeColor =
    document.getElementById("changeColor");

    let box1 =
    document.getElementById("box1");

    let box2 =
    document.getElementById("box2");

    let box3 =
    document.getElementById("box3");

    let box4 =
    document.getElementById("box4");

    let box5 =
    document.getElementById("box5");

    let box6 =
    document.getElementById("box6");

    let box7 =
    document.getElementById("box7");

    let box8 =
    document.getElementById("box8");
// id-section-end

changeColorBtn.addEventListener("click", function(){
    switch(boxNumber.value){
        case "1":
            box1.className = "col-3 text-center boxSize";
            box1.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        case "2":
            box2.className = "col-3 text-center boxSize";
            box2.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        case "3":
            box3.className = "col-3 text-center boxSize";
            box3.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        case "4":
            box4.className = "col-3 text-center boxSize";
            box4.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        case "5":
            box5.className = "col-3 text-center boxSize";
            box5.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        case "6":
            box6.className = "col-3 text-center boxSize";
            box6.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        case "7":
            box7.className = "col-3 text-center boxSize";
            box7.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        case "8":
            box8.className = "col-3 text-center boxSize";
            box8.classList.add(changeColor.value.toLowerCase());
            boxNumber.value = "";
            changeColor.value = "";
            break;
        default:
            alert("One of the values you entered is incorrect. Please try again.");
            boxNumber.value = "";
            changeColor.value = "";
            break;
    }
});

resetColorBtn.addEventListener("click", function(){
    box1.className = "col-3 text-center boxSize";

    box2.className = "col-3 text-center boxSize";

    box3.className = "col-3 text-center boxSize";

    box4.className = "col-3 text-center boxSize";

    box5.className = "col-3 text-center boxSize";

    box6.className = "col-3 text-center boxSize";

    box7.className = "col-3 text-center boxSize";

    box8.className = "col-3 text-center boxSize";
});