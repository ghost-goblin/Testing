let alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialchars = [' ', '!', '?', '@', '-', '*', '£', '%', '/', '$', '+', '#']
function caesarcipher(char) {
    let rot13 = [];
    let index = [];


    for (let i = 0; i < char.length; i++) { 
        for (let y = 0; y < specialchars.length; y++) {
            if (specialchars[y]===char[i]) {
                index.push(char[i]);
            }
        }
        for (let v = 0; v < alphabets.length; v++) {

            if (alphabets[v]===(char[i].toUpperCase())) {
                const newindex = alphabets.indexOf(alphabets[v])+13;
                if (newindex >= 26) {
                    index.push(newindex - 26);
                } else index.push(newindex);
                
                          
            };
        }
    };
    for (let r = 0; r < index.length; r++) {
        if (alphabets[(index[r])]) {
            rot13.push((alphabets[(index[r])]));
        } else rot13.push(index[r]);
            

    };
    

    
    return rot13.join("");

  
}

module.exports = caesarcipher;