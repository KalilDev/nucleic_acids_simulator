import 'package:dna_simulator/codon.dart';
import 'package:dna_simulator/nucleicAcids.dart' show RNAm;
import 'package:dna_simulator/nucleotides.dart';
import 'package:test/test.dart';
import 'package:dna_simulator/gene.dart';
import 'dart:math';

void main() {
  test('Test num constructor', () {
    final RNAm defaultConstructor = RNAm(<Nucleotide>[Nucleotide.Adenine, Nucleotide.Uracil, Nucleotide.Cytosine, Nucleotide.Guanine]);
    final RNAm numConstructor = RNAm.fromNumbers(<int>[0,1,2,3]);
    expect(defaultConstructor, numConstructor);
  });

  test('Ensure startCodon is right', () {
    expect(RNAm.fromNumbers(<int>[0,1,3]).getGenes().length, 1);
    expect(RNAm.fromNumbers(<int>[1,1,3]).getGenes().length, 0);
  });
  
  test('Ensure stop Codons and are Working', () {
    // 1,0,0 = UAA, 1,0,3 = UAG, 1,3,0 = UGA
    expect(RNAm.fromNumbers(<int>[0,1,3, 1,0,0, 0,1,3, 1,0,0]).getGenes().length, 2);
    expect(RNAm.fromNumbers(<int>[0,1,3, 1,0,3, 0,1,3, 1,0,3]).getGenes().length, 2);
    expect(RNAm.fromNumbers(<int>[0,1,3, 1,3,0, 0,1,3, 1,3,0]).getGenes().length, 2);
  });

  test('Ensure start and stop codons are included', () {
    final List<Gene> UAA = RNAm.fromNumbers(<int>[0,1,3, 1,0,0, 0,1,3, 1,0,0]).getGenes();
    final List<Gene> UAG = RNAm.fromNumbers(<int>[0,1,3, 1,0,3, 0,1,3, 1,0,3]).getGenes();
    final List<Gene> UGA = RNAm.fromNumbers(<int>[0,1,3, 1,3,0, 0,1,3, 1,3,0]).getGenes();
    // Amount
    expect(UAA[0].length, 2);
    expect(UAA[1].length, 2);
    expect(UAG[0].length, 2);
    expect(UAG[1].length, 2);
    expect(UGA[0].length, 2);
    expect(UGA[1].length, 2);
    // Confirm the start codon is right
    expect(UAA[0][0], Codon(Nucleotide.Adenine, Nucleotide.Uracil, Nucleotide.Guanine));
    expect(UAA[1][0], Codon(Nucleotide.Adenine, Nucleotide.Uracil, Nucleotide.Guanine));
    expect(UAG[0][0], Codon(Nucleotide.Adenine, Nucleotide.Uracil, Nucleotide.Guanine));
    expect(UAG[1][0], Codon(Nucleotide.Adenine, Nucleotide.Uracil, Nucleotide.Guanine));
    expect(UGA[0][0], Codon(Nucleotide.Adenine, Nucleotide.Uracil, Nucleotide.Guanine));
    expect(UGA[1][0], Codon(Nucleotide.Adenine, Nucleotide.Uracil, Nucleotide.Guanine));
    // Confirm the end codon is right
    expect(UAA[0][1], Codon(Nucleotide.Uracil, Nucleotide.Adenine, Nucleotide.Adenine));
    expect(UAA[1][1], Codon(Nucleotide.Uracil, Nucleotide.Adenine, Nucleotide.Adenine));
    expect(UAG[0][1], Codon(Nucleotide.Uracil, Nucleotide.Adenine, Nucleotide.Guanine));
    expect(UAG[1][1], Codon(Nucleotide.Uracil, Nucleotide.Adenine, Nucleotide.Guanine));
    expect(UGA[0][1], Codon(Nucleotide.Uracil, Nucleotide.Guanine, Nucleotide.Adenine));
    expect(UGA[1][1], Codon(Nucleotide.Uracil, Nucleotide.Guanine, Nucleotide.Adenine));
  });

  test('Ensure that an gene without an stop codon can be parsed too', () {
    final List<Gene> genes = RNAm.fromNumbers(<int>[0,1,3, 1,1,3, 1,2,3, 3,3,3]).getGenes();
    expect(genes.length, 1);
    expect(genes[0].length, 4);
  });

  test('Ensure an gene without the right amount of nucleotides doesnt make the parser explode', () {
    final List<Gene> genesWOStop = RNAm.fromNumbers(<int>[0,1,3, 1,1,3, 1,2,3, 3,3]).getGenes();
    expect(genesWOStop.length, 1);
    expect(genesWOStop[0].length, 3);

    final List<Gene> genesWStop = RNAm.fromNumbers(<int>[0,1,3, 1,1,3, 1,2,3, 1,0,0, 3]).getGenes();
    expect(genesWStop.length, 1);
    expect(genesWStop[0].length, 4);
  });

  test('Check that it does not explode on a real world scenario', () {
    final Iterable<int> numbers = Iterable<int>.generate(2000000, (int i) => Random().nextInt(4));
    final RNAm rna = RNAm.fromNumbers(numbers);
    final List<Gene> genes = rna.getGenes();
    expect(genes == null, false);
  });

}