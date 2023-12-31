function DNAStrand(dna) {
  let complementaryDNA = "";
  for (let symbol of dna) {
    switch (symbol) {
      case "A":
        complementaryDNA += "T";
        break;
      case "T":
        complementaryDNA += "A";
        break;
      case "C":
        complementaryDNA += "G";
        break;
      case "G":
        complementaryDNA += "C";
        break;
    }
  }
  return complementaryDNA;
}

console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
