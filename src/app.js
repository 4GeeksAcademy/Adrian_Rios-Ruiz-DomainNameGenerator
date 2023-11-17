/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let part1 = ["the", "our", "this", "them"];
  let part2 = ["great", "big", "beautiful", "amazing"];
  let part3 = ["jogger", "racoon", "bikkers", "sniper"];
  let part4 = [".com", ".is", ".our", ".our"];

  function randomIndex(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  let domain =
    randomIndex(part1) +
    randomIndex(part2) +
    randomIndex(part3) +
    randomIndex(part4);

  document.querySelector("#domainText").innerHTML = domain;
  console.log(domain);
};
