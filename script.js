function enviarformulario() {
  let nombre = document.getElementById("nombre").value
  let Apellido = document.getElementById("Apellido").value
  let FechaN = document.getElementById("FechaN").value
  let LugarN = document.getElementById("LugarN").value

  let datosR = document.getElementById("datosR")

  datosR.innerHTML = `
  El nombre capturado es: ${nombre}
  <br>
  El apellido capturado es: ${Apellido}
  <br>
  La fecha de nacimiento capturada es: ${FechaN}
  <br>
  El lugar de nacimiento capturado es: ${LugarN}
  `
}