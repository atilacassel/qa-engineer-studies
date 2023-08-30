var itemStock = [
  { Id: "1", ItemName: "Razors", Stock: "10" },
  { Id: "2", ItemName: "Socks", Stock: "1" },
  { Id: "3", ItemName: "Towels", Stock: "100" },
  { Id: "4", ItemName: "Socks", Stock: "100" },
];

function filterItemStock(arr, key, term) {
  return arr.filter(function (obj) {
    return obj[key] === term;
  });
}

test("it returns all items with matching Id", () => {
  expect(filterItemStock(itemStock, "Id", "1")).toEqual([
    { Id: "1", ItemName: "Razors", Stock: "10" },
  ]);
});

test("it returns all items with matching Item Name", () => {
  expect(filterItemStock(itemStock, "ItemName", "Socks")).toEqual([
    { Id: "2", ItemName: "Socks", Stock: "1" },
    { Id: "4", ItemName: "Socks", Stock: "100" },
  ]);
});

test("it returns all items with matching Id", () => {
  expect(filterItemStock(itemStock, "Id", "1")).toMatchSnapshot();
});

test("it returns all items with matching Item Name", () => {
  expect(filterItemStock(itemStock, "ItemName", "Socks")).toMatchSnapshot();
});
