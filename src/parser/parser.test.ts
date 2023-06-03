import { Lexer } from "../lexer/lexer";
import { Token } from "../token/token";
import { Parser } from "./parser";
import { Program } from "../ast";

test("parser test 1 ", () => {
  const inputV = `
    let x = 5;
    let y = 10;
    let foobar = 838383;
    `;

  const l = new Lexer(inputV);
  const p = new Parser(l);
});
