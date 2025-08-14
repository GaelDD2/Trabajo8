// parte donde se cargan las nacionalidades 
document.addEventListener("DOMContentLoaded", () => {

const url = "https://restcountries.com/v3.1/all?fields=cca3,name";

fetch(url)
  .then(response => response.json()) 
  .then(paises => {
    paises.forEach(pais => {
        var dataPais=pais.cca3+pais.name.common;
        
        const selectPaises= document.getElementById("nacionalidad");

        const optionPais= document.createElement("option");
        
        optionPais.value=pais.cca3;

        optionPais.text= pais.name.common;

        selectPaises.appendChild(optionPais);

      });  });
});