const list1 = ["Big", "Massive", "Total", "Huge"];
const list2 = ["Person", "Place", "Thing"];

function displayWords() {
  let word1 = list1[Math.floor(Math.random() * list1.length)];
  let word2 = list2[Math.floor(Math.random() * list2.length)];
  document.getElementById("words").innerHTML = `${word1} ${word2}`;
}
