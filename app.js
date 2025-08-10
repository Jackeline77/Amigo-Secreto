// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    } else if (listaAmigos.includes(nombre)) {
        alert("El nombre ya está en la lista de amigos.");
        return;
    } else {
        listaAmigos.push(nombre);
        input.value = "";
        mostrarLista();
    }
}
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
