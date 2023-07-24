import { add } from "./utils.js";

console.log(add(2, 3));

import customAdd from "./utils.js";

console.log(customAdd(2, 3));

import * as utils from "./utils.js";

console.log(utils.add(2, 3));

import { capitalize } from "./utils.js";

const string1 = "hello";
const string2 = "world";

const capitalizedString1 = utils.capitalize(string1);
const capitalizedString2 = utils.capitalize(string2);

console.log(capitalizedString1);
console.log(capitalizedString2);
