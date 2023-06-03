import { Lexer } from "../lexer/lexer";
import { Token } from "../token/token";
export class Parser {
  lexer: Lexer;
  currToken: Token;
  peekToken: Token;

  constructor(lexer: Lexer) {
    this.lexer = lexer;
    this.nextToken();
    this.nextToken();
  }

  nextToken() {
    this.currToken = this.peekToken;
    this.peekToken = this.lexer.nextToken();
  }

  private parseProgram() {
    return null;
  }
}
