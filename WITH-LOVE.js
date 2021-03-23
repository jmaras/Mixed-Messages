let salution = ["darling", "sweetie pie", "babe", "honey", "sweetheart"];
let activity = [
  "make babies",
  "eat ice cream",
  "take a walk through the park",
  "have dinner",
  "netflix and chill",
];
let worship = [
  "I love you so much!",
  "Yours forever,",
  "I wanna touch your butt badly.",
  "Let's fly to the moon together!",
  "Ouuuweee!!!",
];

console.log(
  `Welcome to "WITH-LOVE", the love message creator. Your Love Message is: "Hey ${
    salution[Math.floor(Math.random() * 5)]
  }, would you like to ${activity[Math.floor(Math.random() * 5)]} together? ${
    worship[Math.floor(Math.random() * 5)]
  } Yours sincerly, Secret Crush Bot.`
);
