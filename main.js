

let txt = document.getElementById("main");
            txt.style.textAlign = "center";


//document.getElementsByClassName("row").style.marginTop = "2rem";
//document.getElementById("container").style.lineHeight = "3";

function shared(confirm) {
    const value0 =document.getElementById('nome').value;
    console.log(value0);
    let value1 = document.getElementById('km').value;
    console.log(value1);
    const value2 = document.getElementById('old').value;
    console.log(value2);

let fullprice = (value1 * 0.21);
if ( isNaN (value2) || isNaN(value1) ){
    document.getElementById("hide-cont").innerHTML = `Error`;
    console.log(`i caratteri non sono numerici`);   
}else if( value2 < 18) {
    const saleUnder=((value1 * 20) / 100);
    document.getElementById("price").innerHTML = `${saleUnder}`;
    document.getElementById("offert").innerHTML = `Biglietto scontato under18`;
    console.log("costo scontato" , saleUnder);
    } else if( value2 > 65) {
    const saleOver=((value1 * 40) / 100);
    document.getElementById("price").innerHTML = `${saleOver}`;
    document.getElementById("offert").innerHTML = `Biglietto scontato over65`;
    console.log("costo scontato" , saleOver);
    }
    else {
    document.getElementById("mex").innerHTML = `Prezzo: ${fullprice}`;
    console.log("prezzo pieno" , fullprice);
    }
}
