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
