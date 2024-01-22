const factorial = require("../factorial");

test("Evaluate the factorial", () => {
    expect(factorial(5)).toBe(120)
})