//TODO app

(function(){
    "use strict";

    //funkcija konstruktora
    function Todo(){
        const polje = document.querySelector("input"),
        gumbicDodaj = document.querySelector("button"),
        lista = document.querySelector("ul");

        function oznaciObavljanje(event){
            const gumbicOznaci = event.target;
            gumbicOznaci.parentNode.classList.toggle("obavljeno");
        }

        function ukloniStavke(event){
            const gumbicUkloni = event.target;
            gumbicUkloni.parentNode.remove();
            polje.focus();
        }

        function dodajGumbicOznaci(stavka){
            const gumbicOznaci = document.createElement("input");
            gumbicOznaci.setAttribute("type", "checkbox");
            gumbicOznaci.addEventListener("click", oznaciObavljanje);

            stavka.insertBefore(gumbicOznaci, stavka.firstChild);
        }

        function dodajGumbicUkloni(stavka){
            const gumbicUkloni = document.createElement("div");
            gumbicUkloni.className = "gumbic-ukloni";
            gumbicUkloni.addEventListener("click", ukloniStavke);
            stavka.appendChild(gumbicUkloni);
        }

        function kreirajStavku(text){
            const stavka = document.createElement("li");
            stavka.innerHTML = text;
            dodajGumbicOznaci(stavka);
            dodajGumbicUkloni(stavka);
            return stavka;
        }

        function dodajStavku(){
            const text = polje.value.trim();
            if(text != ""){
                const stavka = kreirajStavku(text);
                lista.appendChild(stavka);
                polje.value = "";
                polje.focus();
            }
            else{
                alert("Nije uneseno ime zadatka!");
                polje.focus();
            }
        }

        //deklaracija metode dostupne preko objekta kreiranog iz funkcije konstruktora
        this.init = function(){
            gumbicDodaj.addEventListener("click", dodajStavku);
        }
    }

    //kreiranje objekta iz funkcije konstruktora
    const todo = new Todo();

    //poziv metode init() nakon ucitavanja kompletne stranice 
    window.addEventListener("load", todo.init);
})();