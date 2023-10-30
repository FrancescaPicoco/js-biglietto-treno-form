document.body.style.backgroundColor = "#303030";
document.body.style.color = "#999999";
document.getElementById("main").style.marginTop = "30px";
document.querySelector("#hide-cont").style.marginTop = "30px";

let err =document.getElementById('error')

document.querySelector("#nome").classList.add("borderRadious");
document.querySelector("#km").classList.add("borderRadious");
document.querySelector("#old").classList.add("borderRadious");
document.querySelector("#confirm").classList.add("borderRadious");
document.querySelector("#cancel").classList.add("borderRadious");
//document.querySelector(".brd").classList.add("borderRadious");
//document.querySelector(".brd").classList[1].add("borderRadious"); 

//document.getElementById("cancel").addEventListener("click", function () {
function clean(){  
    document.getElementById("delete").reset();
} 
//document.getElementById('confirm').addEventListener("click", function () {
function shared() {
    const value0 =document.getElementById('nome').value;
    let value1 = document.getElementById('km').value;
    const value2 = document.getElementById('old').value;

    let fullprice = (value1 * 0.21);

    if ( isNaN (value2) || isNaN(value1) ){
        err.classList.remove('d-none');
        }else if( value2 < 18) {
            const saleUnder=((value1 * 20) / 100);
            document.getElementById("price").innerHTML = `${saleUnder}`;
            document.getElementById("offert").innerHTML = `Biglietto -20%`; 
            console.log("costo scontato" , saleUnder);
    
        }else if( value2 > 65) {
            const saleOver=((value1 * 40) / 100);
            document.getElementById("price").innerHTML = `${saleOver}`;
            document.getElementById("offert").innerHTML = `Biglietto -40%`;
            console.log("costo scontato" , saleOver);       
        }else {
            document.getElementById("price").innerHTML = `${fullprice}`;
            document.getElementById("offert").innerHTML = `Biglietto Base`;
            console.log("prezzo pieno" , fullprice);
            }
        document.getElementById("hide-cont").style.display = "block";
        document.getElementById("nome").innerHTML = `${value0}`;
}