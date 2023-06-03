import { Token } from "./token/token";

interface Node {
  tokenLiteral(): string;
}

interface Statement extends Node {
  StatementNode(): void;
}

interface Expression extends Node {
  expressionNode(): void;
}

export class Program implements Node {
  statements: Statement[];

  constructor(statements: Statement[]) {
    this.statements = statements;
  }

  tokenLiteral(): string {
    if (this.statements.length > 0) {
      return this.statements[0].tokenLiteral();
    } else {
      return "";
    }
  }
}
export class LetStatement implements Statement {
  token: Token;
  name: Identifier;
  value: Expression;
  constructor(token: Token, name: Identifier, value: Expression) {
    this.token = token;
    this.name = name;
    this.value = value;
  }

  StatementNode(): void {}

  tokenLiteral(): string {
    return this.token.literal;
  }
}

export class Identifier implements Expression {
  token: Token;
  value: string;

  constructor(token: Token, value: string) {
    this.token = token;
    this.value = value;
  }

  expressionNode(): void {}
  tokenLiteral(): string {
    return this.token.literal;
  }
}
