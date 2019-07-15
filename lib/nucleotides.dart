enum Nucleotide { Uracil, Thymine, Cytosine, Adenine, Guanine }
Nucleotide inverseRNANucleotide(Nucleotide n) {
  switch (n) {
    case Nucleotide.Uracil:
      return Nucleotide.Adenine;
      break;
    case Nucleotide.Thymine:
      return Nucleotide.Adenine;
      break;
    case Nucleotide.Cytosine:
      return Nucleotide.Guanine;
      break;
    case Nucleotide.Adenine:
      return Nucleotide.Uracil;
      break;
    case Nucleotide.Guanine:
      return Nucleotide.Cytosine;
      break;
    default:
      return null;
  }
}

Nucleotide inverseDNANucleotide(Nucleotide n) {
  switch (n) {
    case Nucleotide.Uracil:
      return Nucleotide.Adenine;
      break;
    case Nucleotide.Thymine:
      return Nucleotide.Adenine;
      break;
    case Nucleotide.Cytosine:
      return Nucleotide.Guanine;
      break;
    case Nucleotide.Adenine:
      return Nucleotide.Thymine;
      break;
    case Nucleotide.Guanine:
      return Nucleotide.Cytosine;
      break;
    default:
      return null;
  }
}
