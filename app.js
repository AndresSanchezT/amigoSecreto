// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim()

    if (nombre === "") {
        alert("El campo nombre está vacío")
        return
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("El campo nombre solo acepta letras y espacios")
        return
    }

    amigos.push(nombre)
    document.getElementById("amigo").value = ""
    actualizarLista()
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""
    amigos.forEach(amigo => {
        const li = document.createElement("li")
        li.textContent = amigo
        lista.appendChild(li)
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear")
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio]

    const resultado = document.getElementById("resultado")
    resultado.innerHTML = `<li>${amigoSorteado}</li>`
}
