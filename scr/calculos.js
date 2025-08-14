function MensajeTipoSeguro(){

       const selectSeguros= document.getElementById("seguro");
    
   
     
        const optionSeleccionado= selectSeguros.options[selectSeguros.selectedIndex];

        const idOption= optionSeleccionado.id;
        

        switch (idOption) {
            case "PBO":
                alert("Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito.");    

            break;
            
            case "PED":
                alert("Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones. ");    

            break;


            case "PGM":
                alert("Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo. ");    

            break;
            
            
            default:
            break;
        }
  

}


document.addEventListener("DOMContentLoaded", () => {
    const btnCalcular = document.querySelector('input[value="Calcular"]');

    btnCalcular.addEventListener("click", async () => {
        const fechaRetiro = document.querySelector('input[name="fechaRetiro"]').value;
        const fechaDevolucion = document.querySelector('input[name="fechadevolucion"]').value;
        const diasInput = document.querySelector('input[name="dias"]');
        const tdInput = document.querySelector('input[name="td"]');
        const totalPagarInput = document.querySelector('input[name="totalPagar"]');

        const tipoVehiculo = parseFloat(document.querySelector('#tipoVehiculo').value);
        const tipoSeguro = parseFloat(document.querySelector('#seguro').value);
        const nacionalidad = document.querySelector('#nacionalidad').value;

        if (!fechaRetiro || !fechaDevolucion) {
            alert("Seleccione ambas fechas.");
            return;
        }

        const inicio = new Date(fechaRetiro);
        const fin = new Date(fechaDevolucion);
        const diffMs = fin - inicio;
        const dias = diffMs / (1000 * 60 * 60 * 24);

        if (dias < 3 || dias > 365) {
            alert("La cantidad de días debe estar entre 3 y 365.");
            return;
        }

        diasInput.value = dias;

        let TD = tipoVehiculo + tipoSeguro;

        let descuentoDias = 0;
        if (dias > 30 && dias < 120) {
            descuentoDias = 0.15;
        } else if (dias >= 120 && dias <= 365) {
            descuentoDias = 0.25;
        }

        TD = TD - (TD * descuentoDias);
        tdInput.value = TD.toFixed(2);

        let descuentoRegion = 0;
        try {
            const resp = await fetch(`https://restcountries.com/v3.1/alpha?codes=${nacionalidad}`);
            const data = await resp.json();
            const region = data[0].region;

            if (region === "Americas" || region === "Europe") {
                descuentoRegion = 0.10;
            } else if (region === "Africa") {
                descuentoRegion = 0.05;
            }
        } catch (error) {
            console.error("Error obteniendo región:", error);
        }

        const TP = (TD * dias) - ((TD * dias) * descuentoRegion);
        totalPagarInput.value = TP.toFixed(2);
    });
});
