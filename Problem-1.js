class Calculator {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    operate(operation) {
      switch (operation) {
        case "add":
          return this.a + this.b;
        case "sub":
          return this.a - this.b;
        case "mul":
          return this.a * this.b;
        case "div":
          return this.b !== 0 ? this.a / this.b : "Error: Division by zero";
        default:
          return
      }
    }
  }
  
 
  const calc = new Calculator(10, 5);
  console.log(calc.operate("add")); 
  console.log(calc.operate("div")); 
  