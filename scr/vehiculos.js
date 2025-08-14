(() => {
  const carros = [
      { imagen: "images/Compacto1.png", modelo: "KIA PICANTO 2016" },
      { imagen: "images/Compacto2.png", modelo: "FORD FIESTA ST 2015" },
      { imagen: "images/Compacto3.png", modelo: "PEUGEOT 308 2018" },
      { imagen: "images/TodoTerreno1.png", modelo: "TOYOTA FJ CRUISER 2016" },
      { imagen: "images/TodoTerreno2.png", modelo: "TOYOTA Prado 2018" },
      { imagen: "images/TodoTerreno3.png", modelo: "NISSAN JUKE 2017" },
      { imagen: "images/Mediano1.png", modelo: "HONDA CITY CAR 2017" },
      { imagen: "images/Mediano2.png", modelo: "MERCEDES SLS 2015" },
      { imagen: "images/Mediano3.png", modelo: "FORD FIESTA ST 2016" },
      { imagen: "images/Familiar1.png", modelo: "TOYOTA SIENNA 2018" },
      { imagen: "images/Familiar2.png", modelo: "DODGE GRAND CARAVANE 2015" },
      { imagen: "images/Familiar3.png", modelo: "HYUNDAI ELANTRA 2016" }
  ];

  function mostrarTodo(){
      const selectVehiculo = document.getElementById("tipoVehiculo");
      const VehiculoSeleccionado = selectVehiculo.options[selectVehiculo.selectedIndex];
      
      for (let i = 1; i <= 3; i++) {
          const src = "images/" + VehiculoSeleccionado.text.replace(/\s+/g, "") + i + ".png";
          const imagenV = document.getElementById("img" + i);
          if (imagenV) {
              imagenV.src = src; 
          }
      }
      
      document.getElementById("imgVista").src = document.getElementById("img1").src;
      const descripcion = carros.find(a => a.imagen.endsWith(VehiculoSeleccionado.text.replace(/\s+/g, "") + "1.png"));
      document.getElementById("infTCar").textContent = descripcion?.modelo || "Descripción no disponible";
  }

  function mostrarImagen(numero){
      const imagenVista = document.getElementById("imgVista");
      const imagenVehiculoSeleccionado = document.getElementById("img" + numero);
      imagenVista.src = imagenVehiculoSeleccionado.src;
      
      const descripcion = carros.find(a => imagenVehiculoSeleccionado.src.includes(a.imagen));
      document.getElementById("infTCar").textContent = descripcion?.modelo || "Descripción no disponible";
  }

  window.mostrarTodo = mostrarTodo;
  window.mostrarImagen = mostrarImagen;
})();
