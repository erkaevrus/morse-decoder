const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrDigitWord = expr.split('**********')
    const arrDigitAlpha = []
    let line = []
    let letter = ''
    let result = ''

    for (let item of arrDigitWord) {
        for (let i = 0; i < item.length; i += 10) {
        line.push(item.slice(i, i+10))
        }
          arrDigitAlpha.push(line)
          line = []
    }

    for (let item of arrDigitAlpha) {
        for (let str of item) {
            for (let i = 0; i < str.length; i +=2) {
                if (str.slice(i, i + 2) === '10') {
                    letter += '.'
                }
                if (str.slice(i, i + 2) === '11') {
                    letter += '-'
                }
            }
            result += MORSE_TABLE[letter]
            letter = ''
        }
        result += ' '
    }
    return result.trim()
}


module.exports = {
    decode
}
