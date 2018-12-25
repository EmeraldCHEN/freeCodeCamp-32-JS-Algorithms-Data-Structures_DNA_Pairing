
/***************   Solution #1     *****************************************************************************************/

function pairElement(str) {
    let arr = str.split('');
    var twoDArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'A'){
            twoDArr.push([arr[i],'T']);
        }else if(arr[i] === 'T'){
            twoDArr.push([arr[i],'A']);
        }else if(arr[i] === 'C'){
            twoDArr.push([arr[i],'G']);
        }else{
            twoDArr.push([arr[i],'C']);
        }
    }
    return twoDArr;
  }
pairElement("ATCGA"); // return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGA"); // return [["T","A"],["T","A"],["G","C"],["A","T"]]


/***************   Solution #2     *****************************************************************************************/


function pairElement(str) {
    let paired = [];
    // Function to check with strand to pair using switch statements
    let search = function(char){ // Same as:  function search(char){ 
        switch(char){
            case 'A':
                paired.push(['A','T']);
                break;
            case 'T':
                paired.push(['T','A']);
                break; 
            case 'C':
                paired.push(['C','G']);
                break;
            case 'G':
                paired.push(['G','C']);
                break;
        }
    };
    // Loops through the input and pair
    for(let i = 0; i < str.length; i++){
        search(str[i]);
    }
    return paired;
}






// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing/
