var health = "Hearts";
var weapons = 5;
var isHero= true;

var itemnames = ["Hearts", "Potions", "Food", "Fairies"];

console.log(itemnames);

console.log(itemnames[1]);

console.log(itemnames[0]);

console.log(itemnames[3]);

itemnames[3] = "HeartContainer";

console.log(itemnames[3]);

if (itemnames[3] === "HeartContainer") {
  console.log(itemnames[3] + " gives you another heart!");
}
