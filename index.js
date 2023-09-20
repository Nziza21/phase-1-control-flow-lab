function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.';
  } else {
    return 'This is not a valid distance.';
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  return tip === "generous" ? "Thank you so much." : tip === "not as generous" ? "Thank you." : "Bye."
}