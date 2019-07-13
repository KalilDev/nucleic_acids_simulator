import 'package:dna_simulator/aminoAcids.dart';
import 'package:dna_simulator/codon.dart';
import 'package:dna_simulator/nucleotides.dart';
import 'package:test/test.dart';

void main() {
  const List<Nucleotide> possibleNucleotides = <Nucleotide>[Nucleotide.Adenine, Nucleotide.Cytosine, Nucleotide.Guanine, Nucleotide.Uracil];
  test('codons started in Uracil and Uracil', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Uracil, Nucleotide.Uracil, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.Phenylalanine);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.Phenylalanine);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, AminoAcid.Leucine);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, AminoAcid.Leucine);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Uracil and Cytosine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Uracil, Nucleotide.Cytosine, n);
      expect(codon.aminoAcid, AminoAcid.Serine);
    }
  });

  test('codons started in Uracil and Adenin', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Uracil, Nucleotide.Adenine, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.Tyrosine);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.Tyrosine);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, null);
          expect(codon.isStop, true);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, null);
          expect(codon.isStop, true);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Uracil and Guanine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Uracil, Nucleotide.Guanine, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.Cysteine);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.Cysteine);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, null);
          expect(codon.isStop, true);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, AminoAcid.Trytonphan);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Cytosine and Uracil', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Cytosine, Nucleotide.Uracil, n);
      expect(codon.aminoAcid, AminoAcid.Leucine);
    }
  });

  test('codons started in Cytosine and Cytosine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Cytosine, Nucleotide.Cytosine, n);
      expect(codon.aminoAcid, AminoAcid.Proline);
    }
  });

  test('codons started in Cytosine and Adenine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Cytosine, Nucleotide.Adenine, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.Histidine);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.Histidine);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, AminoAcid.Glutamine);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, AminoAcid.Glutamine);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Cytosine and Guanine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Cytosine, Nucleotide.Guanine, n);
      expect(codon.aminoAcid, AminoAcid.Arginine);
    }
  });

  test('codons started in Adenine and Uracil', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Adenine, Nucleotide.Uracil, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.Isoleucine);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.Isoleucine);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, AminoAcid.Isoleucine);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, AminoAcid.Methionine);
          expect(codon.isStart, true);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Adenine and Cytosine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Adenine, Nucleotide.Cytosine, n);
      expect(codon.aminoAcid, AminoAcid.Threonine);
    }
  });

  test('codons started in Adenine and Adenine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Adenine, Nucleotide.Adenine, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.Aspargine);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.Aspargine);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, AminoAcid.Lysine);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, AminoAcid.Lysine);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Adenine and Guanine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Adenine, Nucleotide.Guanine, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.Serine);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.Serine);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, AminoAcid.Arginine);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, AminoAcid.Arginine);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Guanine and Uracil', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Guanine, Nucleotide.Uracil, n);
      expect(codon.aminoAcid, AminoAcid.Valine);
    }
  });

  test('codons started in Guanine and Cytosine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Guanine, Nucleotide.Cytosine, n);
      expect(codon.aminoAcid, AminoAcid.Alanine);
    }
  });

  test('codons started in Guanine and Adenine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Guanine, Nucleotide.Adenine, n);
      switch (n) {
        case Nucleotide.Uracil:
          expect(codon.aminoAcid, AminoAcid.AsparticAcid);
          break;
        case Nucleotide.Cytosine:
          expect(codon.aminoAcid, AminoAcid.AsparticAcid);
          break;
        case Nucleotide.Adenine:
          expect(codon.aminoAcid, AminoAcid.GlutamicAcid);
          break;
        case Nucleotide.Guanine:
          expect(codon.aminoAcid, AminoAcid.GlutamicAcid);
          break;
        default: throw Exception('Nucleotide that isnt allowed');
      }
    }
  });

  test('codons started in Guanine and Guanine', () {
    for (Nucleotide n in possibleNucleotides) {
      final Codon codon = Codon(Nucleotide.Guanine, Nucleotide.Guanine, n);
      expect(codon.aminoAcid, AminoAcid.Glycine);
    }
  });
}