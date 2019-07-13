import 'dart:math';
import 'package:dna_simulator/nucleicAcids.dart';
import 'package:dna_simulator/codon.dart';
import 'package:dna_simulator/gene.dart';

main(List<String> arguments) {
  print('hello world');
  final Iterable<int> numbers = Iterable<int>.generate(2000, (int i) => Random().nextInt(4));
  final RNAm rna = RNAm.fromNumbers(numbers);
  List<Gene> gene = rna.getGenes();
  gene.forEach((Gene g) => g.forEach((Codon c) => print(c.decodedString)));
}
