const quotes = [
    "Are you ready to dive into something unforgettable? The journey starts with a single click!",
    "What if today is the beginning of your greatest adventure? Let’s find out together!",
    "Step into a world where curiosity leads the way and surprises wait around every corner!",
    "Why stay in the ordinary when the extraordinary is just one click away?",
    "This is your moment - take the leap and see where it leads!",
    "Every hero’s story begins with a choice. Will you press play?",
    "Adventure doesn’t knock - it waits quietly behind the play button!",
    "You’ve made it this far. What’s stopping you from going further?",
    "The unknown is calling. Will you answer?",
    "Let your imagination run wild and your courage take the lead!"
  ];
  
  const quoteEl = document.getElementById("quote");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = randomQuote;