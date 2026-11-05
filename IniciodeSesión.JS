
let u = JSON.parse(localStorage.u || "[]"), a = null;

function registrar() {
  let n = prompt("Nombre"), c = prompt("Correo"), p = prompt("Contraseña");
  if (!n || !c || !p) alert("Faltan datos");
  else if (u.find(x => x.c == c)) alert("Registrado");
  else {
    u.push({n,c,p});
    localStorage.u = JSON.stringify(u);
    alert("Registro exitoso");
  }
}

function iniciar() {
  let c = prompt("Correo"), p = prompt("Contraseña");
  a = u.find(x => x.c == c && x.p == p);
  if (a) alert("Bienvenido " + a.n);
  else alert("Datos incorrectos");
}

function reportar() {
  if (!a) alert("Inicia sesión");
  else {
    let r = JSON.parse(localStorage.r || "[]");
    let t = prompt("1-Bacheo 2-Luz 3-Basura");
    let d = prompt("Descripción");
    if (!t || !d) alert("Faltan datos");
    else {
      r.push({c:a.c,t,d});
      localStorage.r = JSON.stringify(r);
      alert("Reporte enviado");
    }
  }
}

let o;
do {
  o = prompt("1-Registrar 2-Iniciar 3-Reportar 4-Salir");
  if (o == "1") registrar();
  else if (o == "2") iniciar();
  else if (o == "3") reportar();
} while (o != "4" && o != null);
