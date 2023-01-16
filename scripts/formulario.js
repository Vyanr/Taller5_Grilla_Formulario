const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");
const texto = document.getElementById("escribirenfer");
const edadcamp = document.getElementById("eedad");

const calcularEdad = (fechaNacimiento) => {
  const fechaActual = new Date();
  const annoActual = parseInt(fechaActual.getFullYear());
  const mesActual = parseInt(fechaActual.getMonth) + 1;
  const diaActual = parseInt(fechaActual.getDate());

  const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
  const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
  const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

  let edad = annoActual - anoNacimiento;
  if (mesActual < mesNacimiento) {
    edad--;
  } else if (mesActual === mesNacimiento) {
    if (diaActual < diaNacimiento) {
      edad--;
    }
  }
  return edad;
};

window.addEventListener("load", function () {
  let texto = document.getElementById("escribirenfer");
  texto.classList.add("hide");
  fechaNacimiento.addEventListener("change", function () {
    if (this.value) {
      edadcamp.value = `${calcularEdad(this.value)}`;
    }
  });
});

function respuesta() {
  let select = document.getElementById("enfermedades");
  let value = select.options[select.selectedIndex].value;
  if (value === "si") {
    texto.classList.remove("hide");
  } else {
    texto.classList.add("hide");
  }
}
