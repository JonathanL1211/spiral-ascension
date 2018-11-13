function createGrid(size){
    let arr = [];
    for (let i = 0; i < size; i++){
        arr.push(new Array(size));
    }
    return arr;
}

function createSpiral(n){
    const spiral = createGrid(n);
    let currentNumber = 1;
    let i = 0;
    let j = 0;
    let di = 0;
    let dj = 1;

    while (currentNumber <= n * n){
        spiral[i][j] = currentNumber;
        if (j + dj === n || i + di === n || j + dj === -1 || spiral[i+di][j+dj]){
            const temp = di; //keep track when to turn right
            di = dj;
            dj = -temp; //negative cause the other direction
        }
        j += dj;//take the next step
        i += di;
        currentNumber ++;
    }

    return spiral;
}

console.log(createSpiral(10));