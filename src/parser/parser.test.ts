import { LetStatement, Statement } from "../ast";
import { Lexer } from "../lexer/lexer";
import { Parser } from "./parser";

test("parser test 1 ", () => {
  const inputV = `
    let x = 5;
    let y = 10;
    let foobar = 838383;
    `;

  const l = new Lexer(inputV);
  const p = new Parser(l);

  const program = p.parseProgram();

  expect(program).not.toBeNull();
  expect(program.statements.length).toBe(3);

  const tests = [
    { expectedIdentifier: "x" },
    { expectedIdentifier: "y" },
    { expectedIdentifier: "foobar" },
  ];

  let idx = 0;
  for (const tt of tests) {
    const currStmt = program.statements[idx];
    expect(parseLet(currStmt)).toBe(tt.expectedIdentifier);
    idx++;
  }

  function parseLet(stateMent: Statement) {
    const stmt = stateMent as LetStatement;
    return stmt.name.value;
  }
});
