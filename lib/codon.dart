import 'package:dna_simulator/aminoAcids.dart';
import 'package:dna_simulator/nucleotides.dart';
import 'package:equatable/equatable.dart';

String _shortEnum(String s, {int amount = 1}) => s.split('.').last.substring(0, amount);
class Codon extends Equatable {
  Codon(this.first, this.second, this.last)
      : assert(first != null && second != null && last != null), super(<Nucleotide>[first, second, last]);
  final Nucleotide first;
  final Nucleotide second;
  final Nucleotide last;

  AminoAcid get aminoAcid {
    switch (first) {
      case Nucleotide.Uracil:
        switch (second) {
          case Nucleotide.Uracil:
            switch (last) {
              case Nucleotide.Uracil:
                return AminoAcid.Phenylalanine;
                break;
              case Nucleotide.Cytosine:
                return AminoAcid.Phenylalanine;
                break;
              case Nucleotide.Adenine:
                return AminoAcid.Leucine;
                break;
              case Nucleotide.Guanine:
                return AminoAcid.Leucine;
                break;
              default:
                return null;
            }
            break;
          case Nucleotide.Cytosine:
            return AminoAcid.Serine;
            break;
          case Nucleotide.Adenine:
            switch (last) {
              case Nucleotide.Uracil:
                return AminoAcid.Tyrosine;
                break;
              case Nucleotide.Cytosine:
                return AminoAcid.Tyrosine;
                break;
              default:
                return null;
            }
            break;
          case Nucleotide.Guanine:
            switch (last) {
              case Nucleotide.Uracil:
                return AminoAcid.Cysteine;
                break;
              case Nucleotide.Cytosine:
                return AminoAcid.Cysteine;
                break;
              case Nucleotide.Guanine:
                return AminoAcid.Trytonphan;
                break;
              default:
                return null;
            }
            break;
          default:
            return null;
        }
        break;

      case Nucleotide.Cytosine:
        switch (second) {
          case Nucleotide.Uracil:
            return AminoAcid.Leucine;
            break;
          case Nucleotide.Cytosine:
            return AminoAcid.Proline;
            break;
          case Nucleotide.Adenine:
            switch (last) {
              case Nucleotide.Uracil:
                return AminoAcid.Histidine;
                break;
              case Nucleotide.Cytosine:
                return AminoAcid.Histidine;
                break;
              case Nucleotide.Adenine:
                return AminoAcid.Glutamine;
                break;
              case Nucleotide.Guanine:
                return AminoAcid.Glutamine;
                break;
              default:
                return null;
            }
            break;
          case Nucleotide.Guanine:
            return AminoAcid.Arginine;
          default:
            return null;
        }
        break;

      case Nucleotide.Adenine:
        switch (second) {
          case Nucleotide.Uracil:
            if (last == Nucleotide.Guanine) {
              return AminoAcid.Methionine;
            } else {
              return AminoAcid.Isoleucine;
            }
            break;
          case Nucleotide.Cytosine:
            return AminoAcid.Threonine;
            break;
          case Nucleotide.Adenine:
            switch (last) {
              case Nucleotide.Uracil:
                return AminoAcid.Aspargine;
                break;
              case Nucleotide.Cytosine:
                return AminoAcid.Aspargine;
                break;
              case Nucleotide.Adenine:
                return AminoAcid.Lysine;
                break;
              case Nucleotide.Guanine:
                return AminoAcid.Lysine;
                break;
              default:
                return null;
            }
            break;
          case Nucleotide.Guanine:
            switch (last) {
              case Nucleotide.Uracil:
                return AminoAcid.Serine;
                break;
              case Nucleotide.Cytosine:
                return AminoAcid.Serine;
                break;
              case Nucleotide.Adenine:
                return AminoAcid.Arginine;
                break;
              case Nucleotide.Guanine:
                return AminoAcid.Arginine;
                break;
              default:
                return null;
            }
            break;
          default:
            return null;
        }
        break;

      case Nucleotide.Guanine:
        switch (second) {
          case Nucleotide.Uracil:
            return AminoAcid.Valine;
            break;
          case Nucleotide.Cytosine:
            return AminoAcid.Alanine;
            break;
          case Nucleotide.Adenine:
            switch (last) {
              case Nucleotide.Uracil:
                return AminoAcid.AsparticAcid;
                break;
              case Nucleotide.Cytosine:
                return AminoAcid.AsparticAcid;
                break;
              case Nucleotide.Adenine:
                return AminoAcid.GlutamicAcid;
                break;
              case Nucleotide.Guanine:
                return AminoAcid.GlutamicAcid;
                break;
              default:
                return null;
            }
            break;
          case Nucleotide.Guanine:
            return AminoAcid.Glycine;
            break;
          default:
            return null;
        }
        break;
      default:
        return null;
    }
  }

  @override
  String toString() {
    return 'Codon: ${first} + ${second} + ${last}';
  }

  String get toStringShort => (_shortEnum(first.toString()) + _shortEnum(second.toString()) + _shortEnum(last.toString()));
  String get decodedString {
    if (isStart) {
      return 'Start/' + _shortEnum(AminoAcid.Methionine.toString(), amount: 4);
    } else if (isStop) {
      return 'Stop';
    } else {
      return _shortEnum(aminoAcid.toString(), amount: 4);
    }
  }

  bool get isStart =>
      first == Nucleotide.Adenine &&
      second == Nucleotide.Uracil &&
      last == Nucleotide.Guanine;

  bool get isStop =>
      (first == Nucleotide.Uracil &&
          second == Nucleotide.Adenine &&
          last == Nucleotide.Adenine) ||
      (first == Nucleotide.Uracil &&
          second == Nucleotide.Adenine &&
          last == Nucleotide.Guanine) ||
      (first == Nucleotide.Uracil &&
          second == Nucleotide.Guanine &&
          last == Nucleotide.Adenine);

  bool get isSpecial => isStart || isStop;
}
