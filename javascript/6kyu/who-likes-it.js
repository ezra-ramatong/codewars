// Who likes it? (6kyu)

// Problem?
// Input: string array of names ["Jon", "Max", "Bob"]
// Desired Output: "Jon, Max and Bob like this"

function likes(names) {
  switch (true) {
    case names.length === 1:
      return `${names[0]} likes this`;
    case names.length === 2:
      return `${names[0]} and ${names[1]} like this`;
    case names.length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case names.length >= 4:
      return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`;
    default:
      return "no one likes this";
  }
}
