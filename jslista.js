

var lista = ["Manzana", "Pera", "Mango", "Naranja", "Papaya", "Lulo", "Mangostino", "Uva", "Cereza", "Melocotón"];

frutas = document.getElementById("frutas");

i = 1;
while (i <= 10) {
    lista.forEach(function (element) {

        dato = document.createElement("li");
        dato.innerText = element;


        if (i % 2 == 0) {
            dato.classList.add("cambiop");
            dato.setAttribute("id", i);

        } else {
            dato.classList.add("cambioinp");
            dato.setAttribute("id", i);
        }
        i++;
        frutas.appendChild(dato);

    });
}

cambiop = document.querySelector("cambiop");
cambioinp = document.querySelector("cambioinp");

const tema1 = document.getElementById("tema1");

var body = document.getElementById("body");

tema1.addEventListener("click", function onclick() {
    body.style.backgroundColor = "#dcdc91";

    var cal = frutas.childNodes;

    i = 1;
    cal.forEach(function (element) {

        if (i % 2 == 0) {
            document.getElementById(i).style.color = "#8c1d2c";

        } else {
            document.getElementById(i).style.color = "black";
        }
        i++;
    });
});

const tema2 = document.getElementById("tema2");

tema2.addEventListener("click", function onclick() {
    body.style.backgroundColor = "#c8812b";
    var cal = frutas.childNodes;

    i = 1;
    cal.forEach(function (element) {

        if (i % 2 == 1) {

            document.getElementById(i).style.color = "#8c1d2c";
        }else{
            document.getElementById(i).style.color = "black";
        }
        i++;
    });
});





