"use strict";
let sales = 123456789;
let sales2 = 123456789;
let numbers = [1, 2, 3];
let number = [];
let user = [1, "Atila"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
//# sourceMappingURL=index.js.map