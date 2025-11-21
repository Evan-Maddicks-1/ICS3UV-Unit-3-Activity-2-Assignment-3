/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-11-18
* @fileoverview this program gives you the correct change
*/
const number = 246
const change = number
console.log(makeChange(change));
function makeChange(cents: number): String {
  let left = cents;

  let toonies = Math.floor(left / 200);
  left = left % 200;

  let loonies = Math.floor(left / 100);
  left = left % 100;

  let quarters = Math.floor(left / 25);
  left = left % 25;

  let dimes = Math.floor(left / 10);
  left = left % 10;

  let nickels = Math.floor(left / 5);
  left = left % 5;

  let pennies = left;

  console.log("Your change is: " + toonies + " toonies, " + loonies + " loonies, " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels and " + pennies + " cents")
}