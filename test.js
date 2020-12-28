const pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return [...dna].map(item => pairs[item]).join('');
}

console.log(DNAStrand("ATTGC"));