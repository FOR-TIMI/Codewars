function rot13(str) {
    let decrypt = '';
    let count = 0
    for(let i=0; i < str.length; i++){
      if(str.charCodeAt(i) < 65){
        count = str.charCodeAt(i)
      }
      else{
          count = str.charCodeAt(i) + 13;
      }

        if(count > 90){
            count -= 26
            decrypt += String.fromCharCode(count)
        }
        else{
            decrypt += String.fromCharCode(count)
        }
        
    }
    return decrypt;
}

  //Tests for the Ceasar Cipher
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))

