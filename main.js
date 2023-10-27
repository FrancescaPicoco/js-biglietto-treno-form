
document.body.style.backgroundColor = "#303030";
document.body.style.color = "#999999";

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
    document.getElementById("error").innerHTML = `ERROR`;
    console.log(`i caratteri non sono numerici`);   
}else if( value2 < 18) {
    const saleUnder=((value1 * 20) / 100);
    document.getElementById("hide-cont").style.display = "block";
    document.getElementById("price").innerHTML = `${saleUnder}`;
    document.getElementById("offert").innerHTML = `Biglietto -20%`;
    document.getElementById("nome").innerHTML = `${value0}`;
    console.log("costo scontato" , saleUnder);
    } else if( value2 > 65) {
    const saleOver=((value1 * 40) / 100);
    document.getElementById("hide-cont").style.display = 'block';
    document.getElementById("price").innerHTML = `${saleOver}`;
    document.getElementById("offert").innerHTML = `Biglietto -40%`;
    document.getElementById("nome").innerHTML = `${value0}`;
    console.log("costo scontato" , saleOver);
    }
    else {
        document.getElementById("hide-cont").style.display = 'block';
    document.getElementById("price").innerHTML = `${fullprice}`;
    document.getElementById("offert").innerHTML = `Biglietto Base`;
    document.getElementById("nome").innerHTML = `${value0}`;
    console.log("prezzo pieno" , fullprice);
    }
}
