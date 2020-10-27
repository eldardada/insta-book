let sum = function(...numbers) {
    let sum = 0;
    
    for(let num of numbers) {
        sum += num;
    }

    return sum;
}

let avg = function(...numbers) {
    return sum(...numbers) / numbers.length;
}

export default avg;