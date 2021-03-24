const messageGenerator = {
  salution : ["darling", "sweetie pie", "babe", "honey", "sweetheart"],
  activity : [
  "make babies",
  "eat ice cream",
  "take a walk through the park",
  "have dinner",
  "netflix and chill",
  ],
  worship : [
  "I love you so much!",
  "Yours forever,",
  "I wanna touch your butt badly.",
  "Let's fly to the moon!",
  "Ouuuweee!!!"
  ]
}
console.log(
  `Welcome to "WITH-LOVE", the love message creator. Your Love Message is: "Hey ${
    messageGenerator.salution[Math.floor(Math.random() * messageGenerator.salution.length)]
  }, would you like to ${messageGenerator.activity[Math.floor(Math.random() * messageGenerator.activity.length)]} together? ${
    messageGenerator.worship[Math.floor(Math.random() * messageGenerator.worship.length)]
  } Yours sincerly, WITH-LOVE Bot.`
);
