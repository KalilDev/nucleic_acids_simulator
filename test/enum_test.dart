import 'package:dna_simulator/aminoAcids.dart';
import 'package:dna_simulator/nucleotides.dart';
import 'package:test/test.dart';

void main() {
  test('Amount of aminoacids', () {
    expect(AminoAcid.values.length, 20);
  });
  test('Amount of nucleotides', () {
    expect(Nucleotide.values.length, 5);
  });
}
