import { Token, TokenTypes, createToken } from "../token/token";
// package Lexer
//

const a = "a".charCodeAt(0);
const z = "z".charCodeAt(0);
const A = "A".charCodeAt(0);
const Z = "Z".charCodeAt(0);

export class Lexer {
  input: string;
  position: number;
  readPosition: number;
  char: string; // Character (Maybe could change to a number type)!!!
  indicator: number = 0;

  constructor() {
    this.input = "";
    this.position = 0;
    this.readPosition = 0;
    this.char = "";
  }

  nextToken() {
    this.skipSpaces();
    let tok: Token;
    switch (this.char) {
      case "=":
        tok = createToken(TokenTypes.ASSIGN, this.char);
        break;
      case ";":
        tok = createToken(TokenTypes.SEMICOLON, this.char);
        break;
      case "(":
        tok = createToken(TokenTypes.LPAREN, this.char);
        break;
      case ")":
        tok = createToken(TokenTypes.RPAREN, this.char);
        break;
      case ",":
        tok = createToken(TokenTypes.COMMA, this.char);
        break;

      case "+":
        tok = createToken(TokenTypes.PLUS, this.char);
        break;
      case "{":
        tok = createToken(TokenTypes.LBRACE, this.char);
        break;
      case "}":
        tok = createToken(TokenTypes.RBRACE, this.char);
        break;
      case "0": // end of file
        tok = createToken(TokenTypes.EOF, "");
        break;
      default:
        throw new Error("Weird Token passed In");
    }

    this.readChar();
    return tok;
  }

  skipSpaces() {
    while (
      this.char === " " ||
      this.char === "\t" ||
      this.char === "\n" ||
      this.char === "\r"
    ) {
      this.readChar();
    }
  }
  new(input: string) {
    this.input = input;
    this.readChar();
    return;
  }

  readChar() {
    if (this.readPosition >= this.input.length) {
      this.char = "0"; // end of file
    } else {
      this.char = this.input[this.readPosition];
    }

    this.position = this.readPosition;
    this.readPosition += 1;
  }
}

let result = new Lexer();
const input = "=+(){},;";
result.new(input);
console.log(result.char);
