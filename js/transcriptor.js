var consonants = "";
var obstruents = "";
var fortisObstruents = "";
var lenisObstruents = "";
var plosives = "";
var fortisPlosives = "";
var lenisPlosives = "";
var bilabialPlosives = "";
var alveolarPlosives = "";
var velarPlosives = "";
var bilabials = "";
var alveolars = "";
var velars = "";
var dentalFricatives = "";
var labiodentalFricatives = "";
var affricates = "";
var approximants = "";
var sonorants = "";
var nasals = "";
var vowels = "";
var shortVowels = "";
var frontVowels = "";
var closeFrontVowels = "";
var backOpenVowels = "";
var roundedVowels = "";
var schwas = "";
var reducedVowels = "";
var lengthMarks = "";
var stressMarks = "";
var syllableBoundary = "";
var wordBoundary = "";
var ssSymbols = "";
var input = "";
var result = "";
var accent = "";
var $accentSwitch = $("input:radio[name='accent']");
function assignAccent() {
    accent = $("input:radio[name='accent']:checked").val();
    if (accent === "bre") {
        $('.ame-trait').hide();
        $('.ame-trait').prop('checked', false); 
        $('.bre-trait').show();
        $('.bre-trait').prop('checked', true); 
    } else if (accent === "ame") {
        $('.bre-trait').hide();
        $('.bre-trait').prop('checked', false); 
        $('.ame-trait').show();
        $('.ame-trait').prop('checked', true); 
    }
}

function assignSegments() {
    if (accent == "bre") {
        consonants = ["p", "b", "b̥", "t", "tˡ", "d", "dˡ", "d̥", "k", "k̟", "k̠", "ɡ", "ɡ̥", "ɡ̟", "ɡ̠", "f", "v", "v̥", "θ", "ð", "ð̥", "s", "z", "z̥", "ʃ", "ʒ", "ʒ̥", "h", "ʧ", "ʤ", "ʤ̥", "m", "n", "ŋ", "r", "ɹ̥", "l", "l̥", "ɫ", "j", "j̥", "w"];
        obstruents = ["p", "b", "b̥", "t", "d", "d̥", "k", "k̟", "ɡ", "ɡ̥", "ɡ̟", "ɡ̠", "f", "v", "v̥", "θ", "ð", "s", "z", "z̥", "ʃ", "ʒ", "ʒ̥", "h", "ʧ", "ʤ", "ʤ̥"];
        fortisObstruents = ["p", "t", "k", "f", "θ", "s", "ʃ", "h", "ʧ", "t̚", "p̚", "k̚"];
        lenisObstruents = ["b", "d", "ɡ", "v", "ð", "z", "ʒ", "ʤ"];
        plosives = ["p", "b", "t", "d", "k", "ɡ", "d̥", "t̠", "d̠", "d̥̠", "pʲ", "t", "t̠", "tʲ", "k", "kʲ", "tⁿ", "k̚", "t̚", "p̚", "k̟", "k̠", "tʷ", "kʷ", "pʷ", "k̠", "t̠ʷ", "k̠ʷ", "k̠ʷ"];
        fortisPlosives = ["p", "pʲ", "t", "t̠", "tʲ", "k", "kʲ", "tⁿ", "k̚", "t̚", "p̚", "k̟", "k̠", "tʷ", "kʷ", "pʷ", "tˡ", "pⁿ", "kⁿ", "t̠ʷ", "k̠ʷ", "k̠ʷ"];
        lenisPlosives = ["b", "d", "ɡ"];
        bilabialPlosives = ["p", "b"];
        alveolarPlosives = ["t", "d", "d̥", "t̠", "d̠", "d̥̠"];
        velarPlosives = ["k", "ɡ", "ɡ̥"];
        bilabials = ["p", "b", "m"];
        alveolars = ["t", "d", "d̥", "n", "l"];
        velars = ["k", "ɡ", "ŋ"];
        dentalFricatives = ["θ", "ð"];
        labiodentalFricatives = ["f", "v"];
        affricates = ["ʧ", "ʤ"];
        approximants = ["ɹ", "l", "l̴", "l̴̩", "w", "j"];
        sonorants = ["ɹ", "l", "w", "j", "m", "n", "ŋ"];
        nasals = ["m", "n", "ŋ"];
        vowels = ["ɪ", "e", "æ", "ʌ", "ʊ", "ɒ", "i", "ɔ", "ɑ", "ɜ", "u", "ə", "ɪ̃", "ẽ", "æ̃", "ʌ̃", "ʊ̃", "ɒ̃", "ĩ", "ɔ̃", "ɑ̃", "ɜ̃", "ũ", "ə̃", "ə̥", "a", "ʉ", "ʉ̃", "æ̆", "ɪ̆", "ĕ", "ʌ̆", "ɒ̆", "ʊ̆", "ə̆"];
        shortVowels = ["ɪ", "e", "æ", "ʌ", "ʊ", "ɒ", "ə", "ɪ̃", "ẽ", "æ̃", "ʌ̃", "ʊ̃", "ɒ̃", "ə̃", "ə̥", "ɪ̆", "ĕ", "æ̆", "ʌ̆", "ʊ̆", "ɒ̆"];
        frontVowels = ["ɪ", "e", "æ", "ʌ", "i", "ɪ̃", "ẽ", "æ̃", "ʌ̃", "ĩ"];
        closeFrontVowels = ["ɪ", "i", "ɪ̃", "ĩ", "ɪ̆"];
        backOpenVowels = ["ɒ", "ɑ", "ɒ̃", "ɑ̃", "ɒ̆"];
        roundedVowels = ["ɒ", "ɔ", "ʊ", "u", "ɒ̃", "ɔ̃", "ʊ̃", "ũ", "ʉ", "ʉ̃", "ʊ̆", "ɒ̆"];
        schwas = ["ə", "ə̃", "ə̥", "ɚ̻", "ɚ̃", "ɚ"];
        reducedVowels = ["u", "i", "ᵊ"];
        lengthMarks = ["ː", "ˑ"];
        stressMarks = ["ˈ", "ˌ"];
        syllableBoundary = [".", ","];
        wordBoundary = [","];
        ssSymbols = ["ʲ", "ʷ", "ⁿ"];
    } else {
        consonants = ["p", "b", "b̥", "t", "tˡ", "d", "dˡ", "d̥", "k", "k̟", "k̠", "ɡ", "ɡ̥", "ɡ̟", "ɡ̠", "f", "v", "v̥", "θ", "ð", "ð̥", "s", "z", "z̥", "ʃ", "ʒ", "ʒ̥", "h", "ʧ", "ʤ", "ʤ̥", "m", "n", "ŋ", "r", "ɹ̥", "l", "l̥", "ɫ", "j", "j̥", "w"];
        obstruents = ["p", "b", "b̥", "t", "d", "d̥", "k", "k̟", "ɡ", "ɡ̥", "ɡ̟", "ɡ̠", "f", "v", "v̥", "θ", "ð", "s", "z", "z̥", "ʃ", "ʒ", "ʒ̥", "h", "ʧ", "ʤ", "ʤ̥"];
        fortisObstruents = ["p", "t", "k", "f", "θ", "s", "ʃ", "h", "ʧ", "t̚", "p̚", "k̚"];
        lenisObstruents = ["b", "d", "ɡ", "v", "ð", "z", "ʒ", "ʤ"];
        plosives = ["p", "b", "t", "d", "k", "ɡ", "d̥", "t̠", "d̠", "d̥̠", "pʲ", "t", "t̠", "tʲ", "k", "kʲ", "tⁿ", "k̚", "t̚", "p̚", "k̟", "k̠", "tʷ", "kʷ", "pʷ"];
        fortisPlosives = ["p", "pʲ", "t", "t̠", "tʲ", "k", "kʲ", "tⁿ", "k̚", "t̚", "p̚", "k̟", "k̠", "tʷ", "kʷ", "pʷ", "tˡ", "pⁿ", "kⁿ"];
        lenisPlosives = ["b", "d", "ɡ"];
        bilabialPlosives = ["p", "b"];
        alveolarPlosives = ["t", "d", "d̥", "t̠", "d̠", "d̥̠", "tⁿ", "t̚"];
        velarPlosives = ["k", "ɡ", "ɡ̥"];
        bilabials = ["p", "b", "m"];
        alveolars = ["t", "d", "d̥", "n", "l"];
        velars = ["k", "ɡ", "ŋ"];
        dentalFricatives = ["θ", "ð"];
        labiodentalFricatives = ["f", "v"];
        affricates = ["ʧ", "ʤ"];
        approximants = ["ɹ", "l", "l̴", "l̴̩", "w", "j"];
        sonorants = ["ɹ", "l", "w", "j", "m", "n", "ŋ"];
        nasals = ["m", "n", "ŋ"];
        vowels = ["ɪ", "e", "æ", "ʌ", "ʊ", "i", "ɔ", "ɑ", "ɜ", "u", "ə", "ɪ̃", "ẽ", "æ̃", "ʌ̃", "ʊ̃", "ĩ", "ɔ̃", "ɑ̃", "ɜ̃", "ũ", "ə̃", "ə̥", "a", "æ̆", "ɪ̆", "ĕ", "ʌ̆", "ɒ̆", "ʊ̆", "ɚ̻", "ɚ̃", "ɚ", "ː"];
        shortVowels = ["ɪ", "e", "æ", "ʌ", "ʊ", , "ə", "ɪ̃", "ẽ", "æ̃", "ʌ̃", "ʊ̃", "ə̃", "ə̥", "ɚ̻", "ɚ̃", "ɚ", "ɪ̆", "ĕ", "æ̆", "ʌ̆", "ʊ̆"];
        frontVowels = ["ɪ", "e", "æ", "ʌ", "i", "ɪ̃", "ẽ", "æ̃", "ʌ̃", "ĩ"];
        closeFrontVowels = ["ɪ", "i", "ɪ̃", "ĩ", "ɪ̆"];
        backOpenVowels = ["ɑ", "ɑ̃"];
        roundedVowels = ["o", "ɔ", "ʊ", "u", "ɔ̃", "ʊ̃", "ũ", "ʊ̆"];
        schwas = ["ə", "ə̃", "ə̥", "ɚ̻", "ɚ̃", "ɚ"];
        reducedVowels = ["u", "i"];
        lengthMarks = ["ː", "ˑ"];
        stressMarks = ["ˈ", "ˌ"];
        syllableBoundary = [".", ","];
        wordBoundary = [","];
        ssSymbols = ["ʲ", "ʷ", "ⁿ"];
    }
}

function isSchwa(segment) {
    if (schwas.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isReducedVowel(segment) {
    if (reducedVowels.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isConsonant(segment) {
    if (consonants.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isObstruent(segment) {
    if (obstruents.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isFortisObstruent(segment) {
    if (fortisObstruents.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isLenisObstruent(segment) {
    if (lenisObstruents.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isPlosive(segment) {
    if (plosives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isAffricate(segment) {
    if (affricates.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}


function isBilabialPlosive(segment) {
    if (bilabialPlosives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isAlveolarPlosive(segment) {
    if (alveolarPlosives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isVelarPlosive(segment) {
    if (velarPlosives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isVelar(segment) {
    if (velars.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isBilabial(segment) {
    if (bilabials.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isFortisPlosive(segment) {
    if (fortisPlosives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isLenisPlosive(segment) {
    if (lenisPlosives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isDentalFricative(segment) {
    if (dentalFricatives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isLabiodentalFricative(segment) {
    if (labiodentalFricatives.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isAlveolar(segment) {
    if (alveolars.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isApproximant(segment) {
    if (approximants.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isNasal(segment) {
    if (nasals.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isSonorant(segment) {
    if (sonorants.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isVowel(segment) {
    if (vowels.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isShortVowel(segment) {
    if (shortVowels.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}


function isOpenBackVowel(segment) {
    if (backOpenVowels.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isFrontVowel(segment) {
    if (frontVowels.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isCloseFrontVowel(segment) {
    if (closeFrontVowels.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isRoundedVowel(segment) {
    if (roundedVowels.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isLengthMark(segment) {
    if (lengthMarks.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isStressMark(segment) {
    if (stressMarks.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isSyllableBoundary(segment) {
    if (syllableBoundary.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function isWordBoundary(segment) {
    if (wordBoundary.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}


function isSsSymbol(segment) {
    if (ssSymbols.indexOf(segment) != -1) {
        return true;
    } else {
        return false;
    }
}

function containsSpaces() {
    if ($("#checkThis").val().indexOf(" " || "  ") != -1) {
        return true;
    } else {
        return false;
    }
}

$("#target").click(function () {
    input = $("#checkThis").val();
    result = "";
    function transcribe() {
        function removeSpaces() {
            input = input.replace(/\s+/g, ",");
            input = input.replace(/\//g, "");
            input = input.replace(/|/g, "");
        }

        function removeSchwaBeforeSyllabic() {
            input = input.replace(/ᵊl/g, "l̩");
            input = input.replace(/ᵊn/g, "n̩");
        }

        function replaceSymbols() {
            input = input.replace(/tʃ/g, "ʧ");
            input = input.replace(/dʒ/g, "ʤ");
            input = input.replace(/r/g, "ɹ");
        }

        function palatalisation() {
            if (isObstruent(segment) && nextSegment === "j") {
                segment += "ʲ";
            } 
            else if (isObstruent(segment) && isSyllableBoundary(nextSegment) && next2Segment === "j") {
                segment += "ʲ";
            } 
            else if (isObstruent(segment) && isStressMark(nextSegment) && next2Segment === "j") {
                segment += "ʲ";
            } 
            else if (isObstruent(segment) && isSyllableBoundary(nextSegment) && isStressMark(next2Segment) && next3Segment === "j") {
                segment += "ʲ";
            } 
            else if (isNasal(segment)) {
                if (nextSegment === "j") {
                    segment += "ʲ";
                } 
                else if (isStressMark(nextSegment) && next2Segment === "j") {
                    segment += "ʲ";
                } 
                else if (isStressMark(isSyllableBoundary(nextSegment) && next2Segment) && next3Segment === "j") {
                    segment += "ʲ";
                } 
                else if (nextSegment === "ɪ" && next2Segment === "ə") {
                    segment += "ʲ";
                }
                else if (isSyllableBoundary(nextSegment) && isStressMark(next2Segment) &&  next3Segment === "ɪ" && next4Segment === "ə") {
                    segment += "ʲ";
                } 
                else {
                    return segment;
                }
            } else {
                return segment;
            }
        }

        function unreleased() {
            if (isPlosive(segment)) {
                if(isPlosive(nextSegment)) {
                segment += "̚";
                }
                else if(isAffricate(nextSegment)) {
                segment += "̚";
                }
                else if (isSyllableBoundary(nextSegment)) {
                segment += "̚";
                }
                else if (isStressMark(nextSegment) && isPlosive(next2Segment)) {
                segment += "̚";
                }
                else if (isStressMark(nextSegment) && isAffricate(next2Segment)) {
                segment += "̚";
                }
                else {
                    return segment;
                } 
            }
            else {
                return segment;
            }
        }

        function devoicing() {
            if (isLenisObstruent(segment)) {
                if (i === 0 || i === input.length - 1) {
                    segment += "̥";
                } 
                else if (isFortisObstruent(previousSegment) || isFortisObstruent(nextSegment)) {
                    segment += "̥";
                } 
                else if (isSyllableBoundary(previousSegment) && isFortisObstruent(previous2Segment)) {
                    segment += "̥";
                }
                else if (isSyllableBoundary(nextSegment) && isFortisObstruent(next2Segment)) {
                    segment += "̥";
                }
                else if (isStressMark(nextSegment) && isFortisObstruent(next2Segment)) {
                    segment += "̥";
                }
                else if (isSyllableBoundary(nextSegment) && isStressMark(next2Segment) && isFortisObstruent(next3Segment)) {
                    segment += "̥";
                }
                else if (isStressMark(previousSegment) && isFortisObstruent(previous2Segment)) {
                    segment += "̥";
                }
                else if (isStressMark(previousSegment) && isSyllableBoundary(previous2Segment) && isFortisObstruent(previous3Segment)) {
                    segment += "̥";
                } 
                else if (isStressMark(previousSegment) && i === 1) {
                    segment += "̥";
                }
                else {
                    return segment;
                }
            } 
            else if (isApproximant(segment) && isFortisPlosive(previousSegment)) {
                if (previous2Segment === "ˈ" || i === 1) {
                    segment += "̥";
                } else {
                    return segment;
                }
            } 
            else if (isApproximant(segment) && isSyllableBoundary(previousSegment) && isFortisPlosive(previous2Segment)) {
                if (previous2Segment === "ˈ" || i === 1) {
                    segment += "̥";
                } else {
                    return segment;
                }
            } 
            else if (isApproximant(segment) && isSsSymbol(previousSegment) && isFortisPlosive(previous2Segment)) {
                if (previous3Segment === "ˈ" || i === 2) {
                    segment += "̥";
                } else {
                    return segment;
                }
            } 
            else if (isApproximant(segment) && isSsSymbol(previousSegment) && isSyllableBoundary(previous2Segment) && isFortisPlosive(previous3Segment)) {
                if (previous3Segment === "ˈ" || i === 2) {
                    segment += "̥";
                } else {
                    return segment;
                }
            } 
            else if (isNasal(segment) && previousSegment === "s") {
                segment += "̥";
            } 
            /*else if (isNasal(segment) && isSyllableBoundary(previousSegment) && previous2Segment === "s") {
                segment += "̥"; 
            } trzeba zastanowić się nad resztą devoicingu nasals*/
            else if (segment === "ə" || segment === "ɚ") {
                if (i === 0) {
                    return segment;
                }
                else if (isFortisObstruent(previousSegment) && isFortisObstruent(nextSegment)) {
                    segment += "̥";
                }
                else if (isFortisObstruent(previous2Segment) && isSyllableBoundary(previousSegment) && isFortisObstruent(nextSegment)) {
                    segment += "̥";
                }
                else if (isFortisObstruent(previousSegment) && isSyllableBoundary(nextSegment) && isFortisObstruent(next2Segment)) {
                    segment += "̥";
                }
                else if (isFortisObstruent(previousSegment) && isStressMark(nextSegment) && isFortisObstruent(next2Segment)) {
                    segment += "̥";
                }
                else if (isFortisObstruent(previousSegment) && isSyllableBoundary(nextSegment) && isStressMark(next2Segment) && isFortisObstruent(next3Segment)) {
                    segment += "̥";
                }
                else if (isFortisObstruent(previous2Segment) && isSyllableBoundary(previousSegment) && isStressMark(nextSegment) && isFortisObstruent(next3Segment)) {
                    segment += "̥";
                }
                else {
                    return segment;
                }
            } 
            else {
                return segment;
            }
        }

        function aspiration() {
            if (isFortisPlosive(segment) && isVowel(nextSegment)) {
                if (i === 0 && input.indexOf("ˈ") === -1) {
                    segment += "ʰ";
                } else if (previousSegment === "ˈ") {
                    segment += "ʰ";
                } else {
                    return segment;
                }
            }
        }

        function glottaling() {
            if (accent == "br") {
                if (isFortisPlosive(segment)) {
                    if (i === 0) {
                        return segment;
                    }
                    if (isVowel(previousSegment) || isLengthMark(previousSegment) || isSonorant(previousSegment)) {
                        if (isConsonant(nextSegment) || i === input.length - 1) {
                            segment = "ʔ" + segment;
                        }
                        else if (isStressMark(nextSegment) && isConsonant(next2Segment)) {
                            segment = "ʔ" + segment;
                        }
                        else if (isSyllableBoundary(nextSegment) && isStressMark(next2Segment) && isConsonant(next3Segment)) {
                            segment = "ʔ" + segment;
                        }
                        else {
                            return segment;
                        }
                    }  
                    else {
                        return segment;
                    }
                } 
                else if (segment === "ʧ") {
                        if (isVowel(previousSegment) || isLengthMark(previousSegment)  || isSonorant(previousSegment)) {
                            segment = "ʔ" + segment;
                        } else {
                            return segment;
                        }
                    }
                else {
                    return segment;
                }
            } else {
                if (isFortisPlosive(segment) && isAlveolarPlosive(segment)) {
                    if (i === 0) {
                        return segment;
                    }
                    if (isVowel(previousSegment) || isLengthMark(previousSegment) || isSonorant(previousSegment)) {
                        if (isConsonant(nextSegment)) {
                            segment = "ʔ" + segment;
                        }
                        else if (isStressMark(nextSegment) && isConsonant(next2Segment)) {
                            segment = "ʔ" + segment;
                        }
                        else if (isSyllableBoundary(nextSegment) && isStressMark(next2Segment) && isConsonant(next3Segment)) {
                            segment = "ʔ" + segment;
                        }
                        else {
                            return segment;
                        }
                    }  
                    else {
                        return segment;
                    }
                } 
                else {
                    return segment;
                }
            }
        }   
        
        function phoneticAffricates() {
            if (isAlveolarPlosive(segment) && nextSegment === "ɹ") {
                segment += "͜";
            } 
            else if (segment === "ʔt" && nextSegment === "s") {
                segment = "ʔt͜";
            }
            else if (segment === "t" && nextSegment === "s") {
                segment += "͜";
            }
            else if (segment === "d" && nextSegment === "z") {
                segment += "͜";
            } 
        }
        
        function syllabicity() {
           /* if (segment === "l" && previousSegment === "ə" && isConsonant(previous2Segment)) {
                segment += "̩";
            } else */if (segment === "l" && isConsonant(previousSegment) && i === input.length - 1) {
                segment += "̩";
            } else if (segment === "ɫ" && isConsonant(previousSegment) && i === input.length - 1) {
                segment += "̩";
            } else if (isNasal(segment) && i === input.length - 1 && isObstruent(previousSegment)) {
                segment += "̩";
            } else {
                return segment;
            }
        }

        function syllabicity() {
           /* if (segment === "l" && previousSegment === "ə" && isConsonant(previous2Segment)) {
                segment += "̩";
            } else */if (segment === "l" && isConsonant(previousSegment) && i === input.length - 1) {
                segment += "̩";
            } else if (segment === "ɫ" && isConsonant(previousSegment) && i === input.length - 1) {
                segment += "̩";
            } else if (isNasal(segment) && i === input.length - 1 && isObstruent(previousSegment)) {
                segment += "̩";
            } else {
                return segment;
            }
        }
        
        function prefortisClipping() {
            if (segment === "ː" && isFortisObstruent(nextSegment)) {
                segment = "ˑ";
            }
            else if (segment === "ː" && isNasal(nextSegment) && isFortisObstruent(next2Segment)) {
                segment = "ˑ";
            }
            else if (isShortVowel(segment) && isFortisObstruent(nextSegment)) {
                segment += "̆";
            }
            else if (isShortVowel(segment) && isNasal(nextSegment) && isFortisObstruent(next2Segment)) {
                segment += "̆";
            }
            else {
                return segment;
            }
        }
        
        function velarisation() {
            if (accent == "bre") {
                if (!isStressMark(nextSegment) && !isVowel(nextSegment) && nextSegment !== "j") {
                    if (segment === "l") {
                        segment = "ɫ";
                    } 
                    if (segment === "l̪") {
                        segment = "ɫ̪";
                    } 
                    else if (segment === "l̩") {
                        segment = "l̴̩";
                    } 
                    else {
                        return segment;
                    }
                }
                else if (isSyllableBoundary(nextSegment) && !isStressMark(next2Segment) && !isVowel(next2Segment) && next2Segment !== "j") {
                    if (segment === "l") {
                        segment = "ɫ";
                    } 
                    if (segment === "l̪") {
                        segment = "ɫ̪";
                    } 
                    else if (segment === "l̩") {
                        segment = "l̴̩";
                    } 
                    else {
                        return segment;
                    }
                }
                else if (isSyllableBoundary(nextSegment) && isStressMark(next2Segment) && !isVowel(next3Segment) && next3Segment !== "j") {
                    if (segment === "l") {
                        segment = "ɫ";
                    } 
                    if (segment === "l̪") {
                        segment = "ɫ̪";
                    } 
                    else if (segment === "l̩") {
                        segment = "l̴̩";
                    } 
                    else {
                        return segment;
                    }
                }
                else if (isStressMark(nextSegment) && !isVowel(next2Segment) && next2Segment !== "j") {
                    if (segment === "l") {
                        segment = "ɫ";
                    } 
                    if (segment === "l̪") {
                        segment = "ɫ̪";
                    } 
                    else if (segment === "l̩") {
                        segment = "l̴̩";
                    } 
                    else {
                        return segment;
                    }
                }
                else {
                    return segment;
                }
            } else {
                if (segment === "l") {
                    segment = "ɫ";
                } 
                if (segment === "l̪") {
                    segment = "ɫ̪";
                } 
                else if (segment === "l̩") {
                    segment = "l̴̩";
                }
                else if (segment === "l̪") {
                    segment = "ɫ̪";
                } 
                else {
                    return segment;
                }           
            }
        }
        
        function centralisation() {
            if (accent == "bre") {
                if (previousSegment ==="j") {
                    if (segment === "u") {
                        segment ="ʉ";
                    }
                    else if (segment === "ũ") {
                        segment ="ʉ̃";
                    }
                }
                else if (!isVowel(next3Segment) && isLengthMark(nextSegment)) {
                    if (isFrontVowel(segment) && next2Segment === "l") {
                        segment +="̈";
                    } else if (isFrontVowel(segment) && next2Segment === "l̩") {
                        segment +="̈";
                    } else {
                        return segment;
                    }
                } 
                else if (!isVowel(next2Segment)) {
                    if (isFrontVowel(segment) && nextSegment === "l") {
                        segment +="̈";
                    } else if (isFrontVowel(segment) && nextSegment === "l̩") {
                        segment +="̈";
                    } else {
                        return segment;
                    }
                } 
                else {
                    return segment;
                }
            } else {
            if (!isVowel(next3Segment) && isLengthMark(nextSegment)) {
                if (isFrontVowel(segment) && next2Segment === "l") {
                    segment +="̈";
                } else if (isFrontVowel(segment) && next2Segment === "l̩") {
                    segment +="̈";
                } else {
                    return segment;
                }
            } 
                else if (!isVowel(next2Segment)) {
                    if (isFrontVowel(segment) && nextSegment === "l") {
                        segment +="̈";
                    } else if (isFrontVowel(segment) && nextSegment === "l̩") {
                        segment +="̈";
                    } else {
                        return segment;
                    }
                } 
                else {
                    return segment;
                }
            }
        }
        
        /* tutaj skończyłem refaktoryzacje po kropkach*/
        
        function labialisation() {
            if (isConsonant(segment) && segment !=="w" && nextSegment === "w") {
                segment += "ʷ";
            } 
            else if (isConsonant(segment) && segment !=="w" && isRoundedVowel(nextSegment)) {
                segment += "ʷ";
            } 
            else {
                return segment;
            }
        }
        
        function nasalPlosion() {
            if (isBilabialPlosive(segment) && nextSegment === "m") {
                segment += "ⁿ";
            } 
            else if (isBilabialPlosive(segment) && isStressMark(nextSegment) && next2Segment === "m") {
                segment += "ⁿ";
            } 
            else if (isAlveolarPlosive(segment) && nextSegment === "n") {
                segment += "ⁿ";
            }
            else if (isAlveolarPlosive(segment) && isStressMark(nextSegment) && next2Segment === "n") {
                segment += "ⁿ";
            }
            else if (isAlveolarPlosive(segment) && nextSegment === "n̩") {
                segment += "ⁿ";
            } 
             else if (isAlveolarPlosive(segment) && isStressMark(nextSegment) && next2Segment === "n̩") {
                segment += "ⁿ";
            } 
            else if (isVelarPlosive(segment) && nextSegment === "ŋ") {
                segment += "ⁿ";
            }
            else {
                return segment;
            }
        }

        function lateralPlosion() {
            if (isAlveolarPlosive(segment) && nextSegment === "l") {
                segment += "ˡ";
            } 
            else if (isAlveolarPlosive(segment) && isStressMark(nextSegment) && next2Segment === "l") {
                segment += "ˡ";
            } 
            else {
                return segment;
            }
        }

        function retraction() {
            if (isAlveolarPlosive(segment) && nextSegment === "ɹ") {
                segment += "̠";
            } else if (isVelarPlosive(segment) && isOpenBackVowel(nextSegment)) {
                segment += "̠";
            } 
            else if (isAlveolarPlosive(segment) && isStressMark(nextSegment) && next2Segment === "ɹ") {
                segment += "̠";
            } 
            else if (isVelarPlosive(segment) && isStressMark(nextSegment) && isOpenBackVowel(next2Segment)) {
                segment += "̠";
            } else {
                return segment;
            }
        }
        
        function dentalisation() {
            if (isAlveolar(segment) && isDentalFricative(nextSegment)) {
                segment += "̪";
            } else {
                return segment;
            }
        }

        function advancing() {
            if (isVelarPlosive(segment)) {
                if (isCloseFrontVowel(nextSegment) || nextSegment === "j") {
                    segment += "̟";
                } 
                else if (isStressMark(nextSegment)) {
                    if (isCloseFrontVowel(next2Segment) || next2Segment === "j") {
                        segment += "̟";
                    }
                    else {
                        return segment;
                        }
                } 
                else {
                    return segment;
                }
            } else {
                return segment;
            }
        }
        
        function labiodentalNasal() {
            if (isNasal(segment) && isLabiodentalFricative(nextSegment)) {
                segment = "ɱ";
            } else {
                return segment;
            }
        }

        function nasalisation() {
            if (isVowel(segment)) {
                if (isNasal(nextSegment)) {
                    segment += "̃";
                } else if (isLengthMark(nextSegment) && isNasal(next2Segment)) {
                    segment += "̃";
                } else if (isStressMark(nextSegment) && isNasal(next2Segment)) {
                    segment += "̃";
                } else if (isLengthMark(nextSegment) && isLengthMark(next2Segment) && isNasal(next3Segment)) {
                    segment += "̃";
                } else {
                    return segment;
                }
            } else {
                return segment;
            }
        }

        function tapping() {
            if (isVowel(previous2Segment) && !isSchwa(previous2Segment) && !isReducedVowel(previous2Segment)) {
                if (previousSegment = "n" || isAlveolarPlosive(previousSegment)){}
                    if (isSchwa(nextSegment) || isReducedVowel(nextSegment)) {
                        if (isAlveolarPlosive(segment)) {
                            segment = "";
                        }
                }
                else {
                    return segment;
                }
            }
            else if (isVowel(previousSegment) && !isSchwa(previousSegment) && !isReducedVowel(previousSegment)) {
                if (isSchwa(nextSegment) || isReducedVowel(nextSegment)) {
                    if  (isAlveolarPlosive(segment)) {
                        segment = "ɾ";
                    }
                    else {
                        return segment;
                    }
                }
                else if (isSchwa(next2Segment) || isReducedVowel(next2Segment)) {
                    if (isAlveolarPlosive(nextSegment) || nextSegment === "n") {
                        if (segment === "n") {
                            segment = "ɾ̃";
                        }
                        else {
                            return segment;
                        }
                    }
                    else {
                    return segment;
                    }
                }
                else {
                return segment;
                }
            }
            else {
                return segment;
            }
        }
        
        function glottalReplacement() {
            result = result.replace(/ʔt͜s/g, "ʔs");
            result = result.replace(/ʔtˡ/g, "ʔ");
            result = result.replace(/ʔtⁿ/g, "ʔ");
            result = result.replace(/ʔt/g, "ʔ");
            result = result.replace(/ʔ̚/g, "ʔ");
        }
        
        
        function devoicedSymbols() {
            result = result.replace(/j̥/g, "j̊");
            result = result.replace(/ɡ̥/g, "ɡ̊");
            result = result.replace(/d͜z̥/g, "d͡z̥");
            result = result.replace(/t̠͜ɹ̥/g, "t̠͡ɹ̥");
        }
        
        function keepSpaces() {
            if ($('#keepSpaces').attr('checked')) {
            result = result.replace(/,/g, " ");
            }
            else {
            result = result.replace(/,/g, "");
            }
        }
        function removeDots() {
            if ($('#removeDots').attr('checked')) {
            result = result.replace(/\./g, "");
            }
            else {
            return result;
            }
        }
        
        removeSchwaBeforeSyllabic();
        replaceSymbols();
        removeSpaces();
        for (i = 0; i < input.length; i++) {
            segment = input.substr(i, 1);
            previousSegment = input.substr(i - 1, 1);
            previous2Segment = input.substr(i - 2, 1);
            previous3Segment = input.substr(i - 3, 1);
            nextSegment = input.substr(i + 1, 1);
            next2Segment = input.substr(i + 2, 1);
            next3Segment = input.substr(i + 3, 1);
            next4Segment = input.substr(i + 4, 1);
            syllabicity();  
            if ($('#tapping').attr('checked')) {
                tapping();
            } else {
                segment = segment;
            }
            if ($('#devoicing').attr('checked')) {
                devoicing();
            } else {
                segment = segment;
            }
            if ($('#unreleased').attr('checked')) {
                unreleased();
            } else {
                segment = segment;
            }
            if ($('#retraction').attr('checked')) {
                retraction();
            } else {
                segment = segment;
            }
            if ($('#dentalisation').attr('checked')) {
                dentalisation();
            } else {
                segment = segment;
            }
            if ($('#advancing').attr('checked')) {
                advancing();
            } else {
                segment = segment;
            }
            if ($('#velarisation').attr('checked')) {
                velarisation();
            } else {
                segment = segment;
            }
            if ($('#labiodentalNasal').attr('checked')) {
                labiodentalNasal();
            } else {
                segment = segment;
            }
            if ($('#nasalisation').attr('checked')) {
                nasalisation();
            } else {
                segment = segment;
            }
            if ($('#prefortisClipping').attr('checked')) {
                prefortisClipping();
            } else {
                segment = segment;
            }
            if ($('#centralisation').attr('checked')) {
                centralisation();
            } else {
                segment = segment;
            }
            if ($('#palatalisation').attr('checked')) {
                palatalisation();
            } else {
                segment = segment;
            }
            if ($('#nasalPlosion').attr('checked')) {
                nasalPlosion();
            } else {
                segment = segment;
            }
            if ($('#lateralPlosion').attr('checked')) {
                lateralPlosion();
            } else {
                segment = segment;
            }
            if ($('#labialisation').attr('checked')) {
                labialisation();
            } else {
                segment = segment;
            }
            if ($('#aspiration').attr('checked')) {
                aspiration();
            } else {
                segment = segment;
            }
            if ($('#glottaling').attr('checked')) {
                glottaling();
            } else {
                segment = segment;
            }
            if ($('#phoneticAffricates').attr('checked')) {
                phoneticAffricates();
            } else {
                segment = segment;
            }
            result += segment;
        }
        
        if (input.length === 0) {
            $("#result").html('<p class="text-error">Please type some text!</p>');
        } 
        if (containsSpaces()) 
        {
            $("#result").html('<p class="text-error">This tool works only with single words!</p>');
        }
        else {
            if ($('#glottalReplacement').attr('checked')) {
                glottalReplacement();
            } else {
                segment = segment;
            }
            devoicedSymbols();
            keepSpaces();
            removeDots();
            $("#result").text("[" + result + "]");
        }
    }
    transcribe();
});
$('#form').submit(function(){
    var inputValue = $("#checkThis").val();
    inputValue = inputValue + ',' + accent;
    inputValue = inputValue + ',' + Number($("#labialisation").is(":checked"));
    inputValue = inputValue + ',' + Number($("#palatalisation").is(":checked"));
    inputValue = inputValue + ',' + Number($("#devoicing").is(":checked"));
    inputValue = inputValue + ',' + Number($("#unreleased").is(":checked"));
    inputValue = inputValue + ',' + Number($("#aspiration").is(":checked"));
    inputValue = inputValue + ',' + Number($("#tapping").is(":checked"));
    inputValue = inputValue + ',' + Number($("#glottaling").is(":checked"));
    inputValue = inputValue + ',' + Number($("#glottalReplacement").is(":checked"));
    inputValue = inputValue + ',' + Number($("#dentalisation").is(":checked"));
    inputValue = inputValue + ',' + Number($("#nasalPlosion").is(":checked"));
    inputValue = inputValue + ',' + Number($("#lateralPlosion").is(":checked"));
    inputValue = inputValue + ',' + Number($("#advancing").is(":checked"));
    inputValue = inputValue + ',' + Number($("#retraction").is(":checked"));
    inputValue = inputValue + ',' + Number($("#phoneticAffricates").is(":checked"));
    inputValue = inputValue + ',' + Number($("#centralisation").is(":checked"));
    inputValue = inputValue + ',' + Number($("#labiodentalNasal").is(":checked"));
    inputValue = inputValue + ',' + Number($("#prefortisClipping").is(":checked"));
    inputValue = inputValue + ',' + Number($("#nasalisation").is(":checked"));
    var outputValue = $("#result").html();
    _paq.push(['trackEvent', "logged_text", inputValue, [outputValue]]);
    console.log("query logged");
});
$("#form").submit(function(e){
    e.preventDefault();
});

$accentSwitch.click(function() {
    assignAccent();
    assignSegments()
});
    
assignAccent();
assignSegments()
