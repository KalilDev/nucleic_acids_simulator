import 'package:dna_simulator/codon.dart';
import 'dart:collection';

class Gene extends ListBase<Codon> {
  final List<Codon> l = [];
  Gene();

  set length(int newLength) { l.length = newLength; }
  int get length => l.length;
  Codon operator [](int index) => l[index];
  void operator []=(int index, Codon value) { l[index] = value; }
  
  // Though not strictly necessary, for performance reasons
  // you should implement add and addAll.

  void add(Codon value) => l.add(value);

  void addAll(Iterable<Codon> all) => l.addAll(all);

}