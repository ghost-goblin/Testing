function fibs(n) {
    // Base cases to break out of recursive function
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    // Recursive case
    return [...fibs(n-1), fibs(n-1)[n-2]+fibs(n-1)[n-3]];
    

}

console.log(fibs(5));