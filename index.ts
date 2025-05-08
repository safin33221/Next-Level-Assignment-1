function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase()
    } else {
        return input.toUpperCase()
    }
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4)
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}




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






function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    } else {
        return value * 2
    }

}




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




async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error(' Negative number are not allowed')
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n)
        }, 1000);
    })
}

