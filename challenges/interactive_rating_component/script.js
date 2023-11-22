let ratingChosen = 0;

function accepted() {
    if(ratingChosen === 0){
        return; 
    }

    window.location.href = "accepted.html?rating=" + ratingChosen;
}

function rateColors(ratingSelected) {

    if(ratingChosen !== 0){
        return;
    }
    
    resetColors();

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");

    switch(ratingSelected) {
        case "one":
            one.style.backgroundColor = "var(--orange)";
            two.style.backgroundColor = "var(--light-gray)";

            one.style.color = "var(--white)";
            two.style.color = "var(--white)";
            break;
        case "two":
            two.style.backgroundColor = "var(--orange)";
            one.style.backgroundColor = "var(--light-gray)";
            three.style.backgroundColor = "var(--light-gray)";

            two.style.color = "var(--white)";
            one.style.color = "var(--white)";
            three.style.color = "var(--white)";
            break;
        case "three":
            three.style.backgroundColor = "var(--orange)";
            two.style.backgroundColor = "var(--light-gray)";
            four.style.backgroundColor = "var(--light-gray)";

            three.style.color = "var(--white)";
            two.style.color = "var(--white)";
            four.style.color = "var(--white)";
            break;
        case "four":
            four.style.backgroundColor = "var(--orange)";
            three.style.backgroundColor = "var(--light-gray)";
            five.style.backgroundColor = "var(--light-gray)";

            four.style.color = "var(--white)";
            three.style.color = "var(--white)";
            five.style.color = "var(--white)";
            break;
        case "five":
            five.style.backgroundColor = "var(--orange)";
            four.style.backgroundColor = "var(--light-gray)";

            five.style.color = "var(--white)";
            four.style.color = "var(--white)";
            break;
    }   
}

function resetColors(){

    if(ratingChosen !== 0){
        return;
    }

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");

    one.style.color = "var(--light-gray)";
    two.style.color = "var(--light-gray)";
    three.style.color = "var(--light-gray)";
    four.style.color = "var(--light-gray)";
    five.style.color = "var(--light-gray)";

    one.style.backgroundColor = "#272E38";
    two.style.backgroundColor = "#272E38";
    three.style.backgroundColor = "#272E38";
    four.style.backgroundColor = "#272E38";
    five.style.backgroundColor = "#272E38";
}

function selectionMade(number, event) {

    event.stopPropagation();
    ratingChosen = number;

    if(ratingChosen === 0){
        resetColors();
    }
}