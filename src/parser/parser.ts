import { Identifier, LetStatement, Program, Statement } from "../ast";
import { Lexer } from "../lexer/lexer";
import { Token, TokenType, TokenTypes } from "../token/token";

function parseProgram(p: Parser): Program {
  const program = new Program([]);

  while (p.currToken.type !== TokenTypes.Eof) {
    const stmt = p.parseStatement();
    if (stmt !== null) {
      program.statements.push(stmt);
    }
    p.nextToken();
  }

  return program;
}
export class Parser {
  lexer: Lexer;
  currToken: Token;
  peekToken: Token;

  constructor(lexer: Lexer) {
    this.lexer = lexer;
    this.currToken = {} as Token;
    this.peekToken = {} as Token;
    this.nextToken();
    this.nextToken();
  }

  nextToken() {
    this.currToken = this.peekToken;
    this.peekToken = this.lexer.nextToken();
  }

  parseProgram(): Program {
    const program = new Program([]);

    while (this.currToken.type !== TokenTypes.Eof) {
      const stmt = this.parseStatement();
      if (stmt) {
        program.statements.push(stmt);
      }
      this.nextToken();
    }
    return program;
  }

  parseStatement(): Statement | null {
    switch (this.currToken.type) {
      case TokenTypes.Let:
        return this.parseLetStatment();
      default:
        return null;
    }
  }

  parseLetStatment(): LetStatement | null {
    const stmt = new LetStatement(this.currToken);
    if (!this.expectPeek(TokenTypes.Ident)) {
      return null;
    }
    stmt.name = new Identifier(this.currToken, this.currToken.literal);

    if (!this.expectPeek(TokenTypes.Assign)) {
      return null;
    }

    while (!this.currTokenIs(TokenTypes.Semicolon)) {
      this.nextToken();
    }
    console.log(stmt);
    return stmt;
  }

  private currTokenIs(token: TokenType): boolean {
    return this.currToken.type === token;
  }

  private peekTokenIs(token: TokenType): boolean {
    return this.peekToken.type === token;
  }

  private expectPeek(token: TokenType): boolean {
    if (this.peekTokenIs(token)) {
      this.nextToken();
      return true;
    } else {
      return false;
    }
  }
}

const inputV = `
    let x = 5;
    let y = 10;
    let foobar = 838383;
    `;

const l = new Lexer(inputV);
const p = new Parser(l);

const program = p.parseProgram();

console.log(`Statement list - ${program.statements}`);
console.log(`Statement length - ${program.statements.length}`);
const tests = [
  { expectedIdentifier: "x" },
  { expectedIdentifier: "y" },
  { expectedIdentifier: "foobar" },
];
