import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../dist/public/css/main.css';

let btn_buscar = document.getElementById("btn_buscar");
let btn_limpiar = document.getElementById("btn_limpiar");
let texto = document.getElementById("texto");
let palabra = document.getElementById("palabra");
let contenido_resultado = document.getElementById("contenido_resultado");
let contenido_repeticion = document.getElementById("contenido_repeticion");

btn_buscar.addEventListener("click", () => {
    let texto_valor = texto.value;
    let palabra_valor = palabra.value.trim();

    if (palabra_valor === "") {
        contenido_resultado.innerHTML = "0";
        contenido_repeticion.innerHTML = "Ingresa una palabra para buscar.";
        return;
    }

    // ✅ Expresión regular que detecta límites de palabra incluyendo tildes y ñ
    let regex = new RegExp(`(?<![\\p{L}])${palabra_valor}(?![\\p{L}])`, 'giu');

    let resultado = texto_valor.match(regex);
    let cantidad = resultado ? resultado.length : 0;
    contenido_resultado.innerHTML = cantidad;

    // Remarcar coincidencias
    let texto_remarcado = texto_valor.replace(regex, (match) => {
        return `<span class="bg-warning text-danger fw-bold">${match}</span>`;
    });

    contenido_repeticion.innerHTML = texto_remarcado || "No se encontraron coincidencias";
});

btn_sustituir.addEventListener("click", () => {
    let texto_valor = texto.value;
    let palabra_valor = palabra.value.trim();
    let sustituir_valor = sustituir.value.trim();

    if ( palabra_valor === "" ){
        contenido_resultado.innerHTML = "0";
        contenido_repeticion.innerHTML = "Ingresa una palabra para buscar.";
        return;
    }

    if ( sustituir_valor === "" ){
        contenido_resultado.innerHTML = "0";
        contenido_repeticion.innerHTML = "Ingresa una palabra para sustituir.";
        return;
    }
    
    let regex = new RegExp(`(?<![\\p{L}])${palabra_valor}(?![\\p{L}])`, 'giu');
    let texto_sustituido = texto_valor.replace(regex, sustituir_valor);

    contenido_repeticion.innerHTML = texto_sustituido || "No se encontraron coincidencias para sustituir.";

});

btn_limpiar.addEventListener("click", () => {
    texto.value = "";
    palabra.value = "";
    contenido_resultado.innerHTML = "";
    contenido_repeticion.innerHTML = "";
    sustituir.value = "";
});