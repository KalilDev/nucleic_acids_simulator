import 'package:dna_simulator/codon.dart';
import 'package:dna_simulator/nucleotides.dart';
import 'package:equatable/equatable.dart';
import 'gene.dart';

class DNA extends NucleicAcid {
  DNA(List<Nucleotide> threeToFive)
      : assert(threeToFive.any((Nucleotide n) => n != Nucleotide.Uracil)),
        super(threeToFive);
  List<Nucleotide> get fiveToThree {
    return List<Nucleotide>.of(threeToFive.map((Nucleotide n) {
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
      }
    }));
  }
}

abstract class NucleicAcid extends Equatable {
  final List<Nucleotide> threeToFive;
  NucleicAcid(this.threeToFive) : super(<dynamic>[threeToFive]);
}

abstract class RNA extends NucleicAcid {
  RNA(List<Nucleotide> threeToFive)
      : assert(!threeToFive.any((Nucleotide n) => n == Nucleotide.Thymine)),
        super(threeToFive);
}

class RNAm extends RNA {
  RNAm(List<Nucleotide> threeToFive) : super(threeToFive);
  factory RNAm.fromNumbers(Iterable<int> numbers) {
    final Iterable<Nucleotide> nucleotides =
        numbers.where((int i) => (i <= 3 && i >= 0)).map<Nucleotide>((int i) {
      if (i == 0) {
        return Nucleotide.Adenine;
      }
      if (i == 1) {
        return Nucleotide.Uracil;
      }
      if (i == 2) {
        return Nucleotide.Cytosine;
      }
      if (i == 3) {
        return Nucleotide.Guanine;
      }
    });
    return RNAm(nucleotides.toList());
  }

  List<Gene> getGenes() {
    int lastIdx = 0;
    List<Gene> genes = List<Gene>();

    Gene getGene(int firstIdx) {
    int startIdx;
    int i = firstIdx ?? 0;
    if (i + 2 >= threeToFive.length)
      return null;
    while (startIdx == null) {
      final indexOfAdenine = threeToFive.indexOf(Nucleotide.Adenine, i);

      if (indexOfAdenine == -1 || indexOfAdenine + 2 >= threeToFive.length) {
        return null;
      }

      if (threeToFive.elementAt(indexOfAdenine + 1) == Nucleotide.Uracil) {
        if (threeToFive.elementAt(indexOfAdenine + 2) == Nucleotide.Guanine) {
          startIdx = indexOfAdenine;
        } else {
          i = indexOfAdenine+2;
        }
      } else {
        i = indexOfAdenine+1;
      }
    }
    // Now i know the start
    Gene gene = Gene();
    int codonIdx = 0;
    while ((startIdx + codonIdx * 3 + 3) <= threeToFive.length) {
      final Nucleotide first = threeToFive.elementAt(startIdx + 3*codonIdx);
      final Nucleotide second = threeToFive.elementAt(startIdx + 3*codonIdx + 1);
      final Nucleotide last= threeToFive.elementAt(startIdx + 3*codonIdx + 2);
      final Codon codon = Codon(first,second,last);
      gene.add(codon);
      if (codon.isStop) {
        lastIdx = startIdx + codonIdx * 3+3;
        return gene;
        }
      codonIdx++;
    }
    lastIdx = startIdx + codonIdx * 3+3;
    return gene;
  }
  while (lastIdx <= threeToFive.length) {
    Gene gene = getGene(lastIdx);
    if (gene == null) {
      return genes;
    }
    genes.add(gene);
  }
  return genes;
  }
}
//class RNAr extends RNA {}
