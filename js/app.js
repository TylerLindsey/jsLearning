var userAge = [11, 12, 13, 14, 15, 21, 22, 23, 24, 25];
var is_subscribed = [true, false, true, false, true, false, true, false, true, false];
// Above here are 2 simple arrays.

for (let index=0; index < userAge.length; index++){
  console.log(`${userAge[index]} is ${is_subscribed[index]}`);
}
// The for loop starts at postion 0 (the first on 0-index); then then index will go as long as the array is; and index++ makes it go one at a time. 
// The console logs the values of the arrays together, the whole thing is in a string that prints the user age and a true/false value is they are or are not subscribed, by simply displaying the user age value and the subscription value with the word 'is' between them. 