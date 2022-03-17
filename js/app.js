var userAge = 19;
var is_subscribed = true;

console.log(userAge);
if((userAge <18) && (is_subscribed === true)) {
  console.log('the user is under the age of 18 and is subscribed');
} else if ((userAge >=18) && (is_subscribed == true)) {
  console.log('the user is 18 or older and is subscribed');
} else if ((userAge <18) && (is_subscribed == false)) {
  console.log('the user is under the age of 18 and is not subscried');
} else {
// ((userAge >=18) && (is_subscribed = false)) 
  console.log('the user is 18 or older and is not subscribed');
}
