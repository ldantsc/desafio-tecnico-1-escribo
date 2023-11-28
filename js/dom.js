import { sumValues } from './script.js';

/* ADICIONANDO RESULTADO AO HTML */

const input = document.getElementById("input-value");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const value = sumValues(input.value);
    result.innerHTML = value;
    console.log(`Resultado: ${value}`)
});
