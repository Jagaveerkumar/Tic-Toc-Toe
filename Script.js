var flag = 'x';
function fnBtn0() {
    if (flag == 'x') {
        document.getElementById("box0").value = "x";
        document.getElementById("box0").disabled = true;
        flag = 'o';
    }
    else {
        document.getElementById("box0").value = "o";
        document.getElementById("box0").disabled = true;
        flag = 'x';
    }
}


function fnBtn1() {
    if (flag == 'x') {
        document.getElementById("box1").value = "x";
        document.getElementById("box1").disabled = true;
        flag = 'o';
    }
    else {
        document.getElementById("box1").value = "o";
        document.getElementById("box1").disabled = true;
        flag = 'x';
    }
}
function fnBtn2() {
    if (flag == 'x') {
        document.getElementById("box2").value = "x";
        document.getElementById("box2").disabled = true;
        flag = 'o';
    }
    else {
        document.getElementById("box2").value = "o";
        document.getElementById("box2").disabled = true;
        flag = 'x';
    }
}
function fnBtn3() {
    if (flag == 'x') {
        document.getElementById("box3").value = "x";
        document.getElementById("box3").disabled = true;
        flag = 'o';
    } else {
        document.getElementById("box3").value = "o";
        document.getElementById("box3").disabled = true;
        flag = 'x';
    }
}
function fnBtn4() {
    if (flag == 'x') {
        document.getElementById("box4").value = "x";
        document.getElementById("box4").disabled = true;
        flag = 'o';
    } else {
        document.getElementById("box4").value = "o";
        document.getElementById("box4").disabled = true;
        flag = 'x';
    }
}
function fnBtn5() {
    if (flag == 'x') {
        document.getElementById("box5").value = "x";
        document.getElementById("box5").disabled = true;
        flag = 'o';
    } else {
        document.getElementById("box5").value = "o";
        document.getElementById("box5").disabled = true;
        flag = 'x';
    }
}
function fnBtn6() {
    if (flag == 'x') {
        document.getElementById("box6").value = "x";
        document.getElementById("box6").disabled = true;
        flag = 'o';
    } else {
        document.getElementById("box6").value = "o";
        document.getElementById("box6").disabled = true;
        flag = 'x';
    }
}
function fnBtn7() {
    if (flag == 'x') {
        document.getElementById("box7").value = "x";
        document.getElementById("box7").disabled = true;
        flag = 'o'
    }
    else {
        document.getElementById("box7").value = "o";
        document.getElementById("box7").disabled = true;
        flag = 'x';
    }
}
function fnBtn8() {
    if (flag == 'x') {
        document.getElementById("box8").value = "x";
        document.getElementById("box8").disabled = true;
        flag = 'o';
    }
    else {
        document.getElementById("box8").value = "o";
        document.getElementById("box8").disabled = true;
        flag = 'x';
    }
}

function check() {
    var b0 = document.getElementById("box0").value;
    var b1 = document.getElementById("box1").value;
    var b2 = document.getElementById("box2").value;
    var b3 = document.getElementById("box3").value;
    var b4 = document.getElementById("box4").value;
    var b5 = document.getElementById("box5").value;
    var b6 = document.getElementById("box6").value;
    var b7 = document.getElementById("box7").value;
    var b8 = document.getElementById("box8").value;
    if (b0 == 'x' && b1 == 'x' && b2 == 'x') {
        document.getElementById("Result").innerText = "Player X Won ";
        var b3 = document.getElementById("box3").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;


    }
    else if (b0 == 'o' && b1 == 'o' && b2 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b3 = document.getElementById("box3").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    }
    
    if (b3 == 'x' && b4 == 'x' && b5 == 'x') {
        document.getElementById("Result").innerText = "Player X Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    }
    else if (b3 == 'o' && b4 == 'o' && b5 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    } 

    if (b6 == 'x' && b7 == 'x' && b8 == 'x') {
        document.getElementById("Result").innerText = "Player X Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
    }
    else if (b6 == 'o' && b7 == 'o' && b8 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
    }
    
    if (b0 == 'x' && b3 == 'x' && b6 == 'x') {
        document.getElementById("Result").innerText = "Player X Won";
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    }
    else if (b0 == 'o' && b3 == 'o' && b6 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    } 

    if (b1 == 'x' && b4 == 'x' && b7 == 'x') {
        document.getElementById("Result").innerText = "Player X Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    }
    else if (b1 == 'o' && b4 == 'o' && b7 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    } 
    if (b2 == 'x' && b5 == 'x' && b8 == 'x') {
        document.getElementById("Result").innerText = "Player X Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
    }
    else if (b2 == 'o' && b5 == 'o' && b8 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b4 = document.getElementById("box4").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
    }
    
    if (b0 == 'x' && b4 == 'x' && b8 == 'x') {
        document.getElementById("Result").innerText = "Player X Won";
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
    }
    else if (b0 == 'o' && b4 == 'o' && b8 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b1 = document.getElementById("box1").disabled = true;
        var b2 = document.getElementById("box2").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b6 = document.getElementById("box6").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
    }
    
    if (b2 == 'x' && b4 == 'x' && b6 == 'x') {
        document.getElementById("Result").innerText = "Player X Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    }
    else if (b2 == 'o' && b4 == 'o' && b6 == 'o') {
        document.getElementById("Result").innerText = "Player O Won";
        var b0 = document.getElementById("box0").disabled = true;
        var b1 = document.getElementById("box1").disabled = true;
        var b3 = document.getElementById("box3").disabled = true;
        var b5 = document.getElementById("box5").disabled = true;
        var b7 = document.getElementById("box7").disabled = true;
        var b8 = document.getElementById("box8").disabled = true;
    }
    else if (
        (b0 == "x" || b0 == "o") &&
        (b1 == "x" || b1 == "o") &&
        (b2 == "x" || b2 == "o") &&
        (b3 == "x" || b3 == "o") &&
        (b4 == "x" || b4 == "o") &&
        (b5 == "x" || b5 == "o") &&
        (b6 == "x" || b6 == "o") &&
        (b7 == "x" || b7 == "o") &&
        (b8 == "x" || b8 == "o")
    ) {
        document.getElementById("Result").innerText = "Match Tie"
    }

}
function Reset() {
    location.reload();
}