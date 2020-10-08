const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

/**
 * 
 * @param {String} expr 
 */
function decode(expr) {
    MORSE_TABLE['**********'] = " ";

    let devidedExpr = expr.match(/.{10}/g);
    let res = [];

    for (let i = 0; i < devidedExpr.length; i++) {
        let allMatches = devidedExpr[i].match(/10|11/g);
        let decodedLetter = "";

        if (devidedExpr[i] === '**********') {
            res.push(devidedExpr[i])
            continue;
        }
        allMatches.forEach((item) => {

            return (item == 10) ? decodedLetter += (".") : decodedLetter += ("-");
        })

        res.push(decodedLetter);

    }

    return res.reduce((init, item) => {
        return init += MORSE_TABLE[item];
    }, "")
}


module.exports = {
    decode
}