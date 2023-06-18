import { Token } from "./token/token";

export interface Node {
  tokenLiteral(): string;
}

export interface Statement extends Node {
  StatementNode(): void;
}

export interface Expression extends Node {
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
  name!: Identifier;
  value!: Expression;
  constructor(token: Token) {
    this.token = token;
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

export class ReturnStatement implements Statement {
  token: Token;
  returnValue!: Expression;

  constructor(token: Token) {
    this.token = token;
  }

  StatementNode(): void {}

  tokenLiteral(): string {
    return this.token.literal;
  }
}
