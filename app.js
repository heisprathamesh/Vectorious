// script.js

// Function for magnitude of A
function magA() {
  
    document.getElementsByClassName("result")[0].style.display = "flex";

    let i = parseInt( document.getElementById("i1").value);
    let j = parseInt( document.getElementById("j1").value);
    let k = parseInt( document.getElementById("k1").value);

    let mag = Math.sqrt((i**2) + (j**2) + (k**2));
    document.getElementById("ans").value = mag.toFixed(2);
}


// Function for magnitude of B
function magB() {
    document.getElementsByClassName("result")[0].style.display = "flex";

    let i = parseInt( document.getElementById("i2").value);
    let j =parseInt(  document.getElementById("j2").value);
    let k =parseInt(  document.getElementById("k2").value);

    let mag = Math.sqrt((i**2) + (j**2) + (k**2));
    document.getElementById("ans").value = mag.toFixed(2);
}

// Function for the cross product of a*b
function cross() {
    document.getElementsByClassName("result")[0].style.display = "flex";

    let i1 = parseInt(document.getElementById("i1").value);
    let j1 = parseInt(document.getElementById("j1").value);
    let k1 = parseInt(document.getElementById("k1").value);

    let i2 = parseInt(document.getElementById("i2").value);
    let j2 = parseInt(document.getElementById("j2").value);
    let k2 = parseInt(document.getElementById("k2").value);

    const ic = (j1 * k2) - (k1 * j2);
    const jc = (i1 * k2) -( k1 * i2);
    const kc = (i1 * j2) - (j1 * i2);

    const product = ` ${ic}i  ${-jc}j  ${kc}k`;

    document.getElementById("ans").value = product;
}

// Function for dot product
function dot() {
    document.getElementsByClassName("result")[0].style.display = "flex";

    let i1 = parseInt(document.getElementById("i1").value);
    let j1 = parseInt(document.getElementById("j1").value);
    let k1 = parseInt(document.getElementById("k1").value);

    let i2 = parseInt(document.getElementById("i2").value);
    let j2 = parseInt(document.getElementById("j2").value);
    let k2 = parseInt(document.getElementById("k2").value);

    const ic = (i1 * i2);
    const jc = (j1 * j2);
    const kc = (k1 * k2);

    const product = (ic )+ (jc) + (kc);

    document.getElementById("ans").value = product;
}

// Function to add A and B (A+B)
function add() {
    document.getElementsByClassName("result")[0].style.display = "flex";

    let i1 = parseInt(document.getElementById("i1").value);
    let j1 = parseInt(document.getElementById("j1").value);
    let k1 = parseInt(document.getElementById("k1").value);

    let i2 = parseInt(document.getElementById("i2").value);
    let j2 = parseInt(document.getElementById("j2").value);
    let k2 = parseInt(document.getElementById("k2").value);

    let i = i1 + i2;
    let j = j1 + j2;
    let k = k1 + k2;
    
    let vec = `${i}i  ${j}j  ${k}k`;
    document.getElementById("ans").value = vec;
}

// Function to subtract B from A (A-B)
function subtr() {
    document.getElementsByClassName("result")[0].style.display = "flex";

    let i1 = parseInt(document.getElementById("i1").value);
    let j1 = parseInt(document.getElementById("j1").value);
    let k1 = parseInt(document.getElementById("k1").value);

    let i2 = parseInt(document.getElementById("i2").value);
    let j2 = parseInt(document.getElementById("j2").value);
    let k2 = parseInt(document.getElementById("k2").value);

    let i =  i2-i1  ;
    let j =  j2 -j1   ;
    let k =   k2- k1 ;

    let vec = `${i}i  ${j}j  ${k}k`;
    document.getElementById("ans").value = vec;
}

