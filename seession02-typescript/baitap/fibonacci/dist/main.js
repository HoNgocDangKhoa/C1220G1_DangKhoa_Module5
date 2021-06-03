function getSumOfFibonacci(number) {
    let sum = 0;
    let first = 0;
    let second = 1;
    let third;
    let count = 2;
    sum += first + second;
    while (count <= number) {
        third = first + second;
        first = second;
        second = third;
        console.log(second);
        sum += third;
        count++;
    }
    console.log("Sum of " + number + " First Fibonacci is " + sum);
}
getSumOfFibonacci(15);
//# sourceMappingURL=main.js.map