/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let end = [".com", ".is"];

  function domaingenerator(pronoun, adj, noun, end) {
    // Inicializar el resultado como una lista vacía
    let domains = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let x = 0; x < adj.length; x++) {
        for (let y = 0; y < noun.length; y++) {
          for (let z = 0; z < end.length; z++) {
            // Crear el dominio y agregarlo a la lista
            let domain = pronoun[i] + adj[x] + noun[y] + end[z];
            domains.push(domain);
          }
        }
      }
    }

    // Devolver la lista de dominios
    return domains;
  }

  // Llamar a la función y almacenar el resultado en la variable result
  let result = domaingenerator(pronoun, adj, noun, end);

  // Imprimir los resultados en la consola
  console.log(result);

  // Mostrar los resultados en el HTML
  document.getElementById("domainResult").innerHTML = result
    .map(domain => '<li class="list-group-item">' + domain + "</li> ")
    .join("");
};
