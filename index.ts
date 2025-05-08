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

// console.log(processValue("hello"));
// console.log(processValue(10)    );


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null

    return products.reduce((max, product) =>
        product.price > max.price ? product : max
    )
}


// const products = [
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 25 },
//     { name: "Bag", price: 50 }
//   ];

//   console.log(getMostExpensiveProduct(products));


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend'
    }
    return 'Weekday'
}


// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error(' Nagitive number are not allowed')
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n)
        }, 1000);
    })
}

squareAsync(-4).then(console.log);         // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed