/*const lista =[];
const List = document.getElementById("listResult")
const Result = document.getElementById("comments")
let newComment = document.createElement("p")

function read (){
    let nombres= document.getElementById("nombre").value;
    let dinero= document.getElementById("gasto").value;
    lista.push([nombres,parseInt(dinero)]);
}
function dividircuenta(lista){
    auxiliar= 0;
    for( let valor of lista){
        sum= auxiliar + valor[1]
    }
    auxiliar2=sum/(lista.length);
    return auxiliar2,sum
}
function printList() {
    let nuevaLista = document.createElement("li")
    for (i of lista) {
        nuevaLista.innerHTML = '<li class="list-group-item" style="background-color: #D3DEDC">' + i[0] + ': $' + i[1] + '</li>' 
        List.appendChild(nuevaLista)
    }
}
function comentario() {
    newComment.innerHTML = '<p style="background-color: #D3DEDC; padding-left:16px;">Total: $' + sum + '<br> A cada uno le toca: $' + Valores +'</p>'
    List.appendChild(newComment)
}
function submit(){
    read()
    dividircuenta(lista)
    printList()
    comentario()
}*/
const arr = [];
const List = document.getElementById("listResult")
const Result = document.getElementById("comments")
let newComment = document.createElement("p")

function tomoValores(){
    let names = document.getElementById("nombre").value
    let value = document.getElementById("gasto").value
    arr.push([names, parseFloat(value)])
}
function printList() {
    let newList = document.createElement("li")
    for (i of arr) {
        newList.innerHTML = `<li class="list-group-item bg-primary bg-gradient fw-bold text-white" style="background-color: blue">${i[0]}: \$${i[1]}</li>` 
        List.appendChild(newList)
    }
}
function printComment() {
    newComment.innerHTML = '<p style="background-color: #D3DEDC; padding-left:16px;">Total: $' + suma + '<br> A cada uno le toca: $' + Valores +'</p>'
    List.appendChild(newComment)
}
function splitBills(Montos) {
    suma = 0;
        for (let Valor of Montos){
            suma = suma + Valor[1]  ;
        }
        Valores = suma / (arr.length);
        return Valores, suma
}

function sumbit() {
    tomoValores()
    splitBills(arr)
    printList()
    console.log(suma)
    printComment()
}