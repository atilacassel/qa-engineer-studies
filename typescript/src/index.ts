let sales: number = 123_456_789;
let sales2 = 123_456_789;

let numbers = [1, 2, 3];
let number: number[] = [];

let user: [number, string] = [1, "Atila"];

// Enum
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCasel
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 50_000) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022);

// Using default value
function sum(a: number, b = 5): number {
  return a + b;
}

sum(2);
sum(2, 5);

// Object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Atila",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Using type aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: "Atila",
  retire: (date: Date) => {
    console.log(date)
  }
}

// Union types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number')
      return weight * 2.2;
    else
      return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

// Intersection types
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}