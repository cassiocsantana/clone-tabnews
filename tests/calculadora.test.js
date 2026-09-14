const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
});

test("somar `banana` + 100 deveria retornar `error`", () => {
  expect(calculadora.somar("banana", 100)).toBe("error");
});

test("somar 10 + `banana` deveria retornar `error`", () => {
  expect(calculadora.somar(10, "banana")).toBe("error");
});

test("somar `banana` + `banana` deveria retornar `error`", () => {
  expect(calculadora.somar("banana", "banana")).toBe("error");
});
