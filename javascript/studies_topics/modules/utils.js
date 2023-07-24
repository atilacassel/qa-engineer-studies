export function add(a, b) {
  return a + b;
}

export default function customAdd(a, b) {
  return a * b;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
