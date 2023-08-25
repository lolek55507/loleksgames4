function findNum (arr) {
   let c = 0;
    for (let g = 0; g < arr.length; g++) {
        if (arr[g] > c) {
            c = arr[g];
        }
        
    }
    console.log(c);
    return c;
}

findNum([1,2,1,5,3]);