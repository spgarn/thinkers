const text = '8;5;10;0;15;3;8;0;22;1;12;11;15;13;14;1;0;20;9;12;12;0;4;5;14;14;1;0;4;21;14;4;5;18;1;6;20;15;14;.;0;9;11;22;1;12;12;0;11;15;13;13;5;18;0;14;9;0;1;20;20;0;6;1;0;21;16;16;12;5;22;1;0;5;14;0;20;1;22;12;9;14;7;0;21;20;1;14;0;4;5;19;19;0;12;9;11;5;.;0;6;15;18;0;1;20;20;0;19;1;20;20;1;0;9;7;1;14;7;0;2;5;8;15;22;5;18;0;14;9;0;7;1;0;9;14;0;16;1;0;8;20;20;16;19;:;/;/;19;16;7;1;18;14;.;7;9;20;8;21;2;.;9;15;/;20;8;9;14;11;5;18;19;/;0;20;22;1;0;20;9;13;13;1;18;0;5;6;20;5;18;0;19;20;1;18;20;0;18;1;11;14;1;18;0;22;9;0;16;15;1;14;7;5;14;.;0;12;25;3;11;1;0;20;9;12;12'
const fs = require('fs');
const func = (text) => {
    const subString = text.split(';')
    const numb = subString.map(letter => {
        if (isNaN(letter)) return letter
        if (!isNaN(letter)) return Number(letter * letter)
    })

    const letters = numb.map(letter => {
        if (isNaN(letter)) return letter
        if (typeof letter === 'number') { return letter.toString() }
    })
    const arrstring = letters.join(',')
    fs.writeFileSync('message.txt', arrstring);
}

func(text)