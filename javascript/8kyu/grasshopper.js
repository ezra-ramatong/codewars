// Grasshopper - Personalized Message
function greet(name, owner) {
  return `Hello ${name === owner ? "boss" : "guest"}`;
}

console.log(greet("ezra", "nina"));
