import { LetStatement, ReturnStatement, Statement } from "../ast";
import { Lexer } from "../lexer/lexer";
import { Parser } from "./parser";

test("parser test 1 ", () => {
  const inputE = `
    let x 5;
    let = 10;
    let 838383;
    `; // will erorr
  const inputV = `
    let x = 5;
    let y = 10;
    let foobar = 838383;
    `;

  const l = new Lexer(inputV);
  const p = new Parser(l);

  expect(p.errors.length).toBe(0);

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

test("parser test 2 ", () => {
  const input = `
    return 5;
    return 10;
    return 888282;
`;
  const l = new Lexer(input);
  const p = new Parser(l);

  expect(p.errors.length).toBe(0);

  const program = p.parseProgram();

  expect(program).not.toBeNull();
  expect(program.statements.length).toBe(3);
  const tests = [
    { expectedIdentifier: "return" },
    { expectedIdentifier: "return" },
    { expectedIdentifier: "return" },
  ];

  let idx = 0;
  for (const tt of tests) {
    const currStmt = program.statements[idx];
    expect(paresReturn(currStmt)).toBe(tt.expectedIdentifier);
    idx++;
  }

  function paresReturn(stateMent: Statement): string {
    const stm = stateMent as ReturnStatement;
    return stm.token.literal;
  }
});
