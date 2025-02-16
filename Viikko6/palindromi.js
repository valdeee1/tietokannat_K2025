function palindrome(x){
    for(let i=0; i<x.length; i++){
        if(x[i] != x[x.length-1-i]){
            console.log("Ei ole palindromi");
            return;
        }
    }
    console.log("On palindromi");
}

palindrome("saippuakauppias");
palindrome("kissa");