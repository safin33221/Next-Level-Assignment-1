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


class Vehicle {
    private _make: string;
    year: number;

    constructor(_make: string, year: number) {
        this._make = _make
        this.year = year
    }
    getInfo() {
        return `Make: ${this._make}, Year: ${this.year}`
    }

}

class Car extends Vehicle {
    private _modal: string;

    constructor(_make: string, year: number, _modal: string) {
        super(_make, year)
        this._modal = _modal
    }
    getModel() {
        return `Model: ${this._modal}`
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel());  // Output: "Model: Corolla"




function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    } else {
        return value * 2
    }

}

console.log(processValue("hello"));
console.log(processValue(10)    );