function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase()
    } else {
        return input.toUpperCase()
    }
}
// console.log(formatString("Hello",false));         
// console.log(formatString("Hello", true));;  
// console.log(formatString("Hello", false));  


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4)
}

// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
// ];

// const result = filterByRating(books);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
// console.log(result);


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}

// const result1 = concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// const result2 = concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
// console.log(result1,result2);