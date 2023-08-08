let sales: number = 123_456_789;
let sales2 = 123_456_789;

let numbers = [1, 2, 3];
let number: number[] = [];

let user: [number, string] = [1, "Atila"];

// ==> Enum
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

// ==> Functions
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

// ==> Object
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

// ==> Using type aliases
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

// ==> Union types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number')
      return weight * 2.2;
    else
      return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

// ==> Intersection types
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

// ==> Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// ==> Nullable types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola!')
}

greet(undefined);

// ==> Optional Chaining
type Customer = {
  birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optinal element access opeerator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');

// ==> Generics
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers4 = [1, 2, 3];
const firstNumber = getFirstElement(numbers); // Result: 1

const names = ["Alice", "Bob", "Charlie"];
const firstName = getFirstElement(names); // Result: "Alice"

class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

const numberBox = new Box(42); // Box<number>
const stringBox = new Box("Hello!"); // Box<string>
