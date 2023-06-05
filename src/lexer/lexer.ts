import { Token, TokenTypes, createToken, keywords } from "../token/token";

const _0 = "0".charCodeAt(0);
const _9 = "9".charCodeAt(0);
const a = "a".charCodeAt(0);
const z = "z".charCodeAt(0);
const A = "A".charCodeAt(0);
const Z = "Z".charCodeAt(0);
const _ = "_".charCodeAt(0);

function isLetter(ch: string): boolean {
  const char = ch.charCodeAt(0);
  if ((a <= char && z >= char) || (A <= char && Z >= char) || char === _) {
    return true;
  }
  return false;
}

function isDigit(ch: string): boolean {
  const char = ch.charCodeAt(0);
  if (_0 <= char && _9 >= char) {
    return true;
  }
  return false;
}

export class Lexer {
  private input: string;
  private position: number;
  private readPosition: number;
  private char!: string; // Character (Maybe could change to a number type)!!!

  constructor(value: string) {
    this.input = value;
    this.position = 0;
    this.readPosition = 0;
    this.readChar();
  }

  nextToken(): Token {
    let tok: Token | undefined;
    this.skipSpaces();
    switch (this.char) {
      case "=":
        if (this.peekChar() === "=") {
          const char = this.char;
          this.readChar();
          tok = createToken(TokenTypes.Equal, `${char}${this.char}`);
        } else {
          tok = createToken(TokenTypes.Assign, this.char);
        }
        break;
      case "-":
        tok = createToken(TokenTypes.Minus, this.char);
        break;
      case "!":
        if (this.peekChar() === "=") {
          const char = this.char;
          this.readChar();
          tok = createToken(TokenTypes.NotEqual, `${char}${this.char}`);
        } else {
          tok = createToken(TokenTypes.Bang, this.char);
        }
        break;
      case "/":
        tok = createToken(TokenTypes.Slash, this.char);
        break;
      case "*":
        tok = createToken(TokenTypes.Asterisk, this.char);
        break;
      case "<":
        tok = createToken(TokenTypes.Lt, this.char);
        break;
      case ">":
        tok = createToken(TokenTypes.Gt, this.char);
        break;
      case ";":
        tok = createToken(TokenTypes.Semicolon, this.char);
        break;
      case "(":
        tok = createToken(TokenTypes.Lparen, this.char);
        break;
      case ")":
        tok = createToken(TokenTypes.Rparen, this.char);
        break;
      case ",":
        tok = createToken(TokenTypes.Comma, this.char);
        break;
      case "+":
        tok = createToken(TokenTypes.Plus, this.char);
        break;
      case "{":
        tok = createToken(TokenTypes.Lbrace, this.char);
        break;
      case "}":
        tok = createToken(TokenTypes.Rbrace, this.char);
        break;
      case "\0": // end of file
        tok = createToken(TokenTypes.Eof, "");
        break;
    }

    if (isLetter(this.char)) {
      const ident = this.readIdent();
      const keyword = keywords[ident as keyof typeof keywords];
      if (keyword) {
        return keyword;
      } else {
        return createToken(TokenTypes.Ident, ident);
      }
    } else if (isDigit(this.char)) {
      return createToken(TokenTypes.Int, this.readNumber());
    } else if (!tok) {
      return createToken(TokenTypes.Illegal, this.char);
    }
    this.readChar();
    return tok as Token;
  }

  private skipSpaces(): void {
    while (
      this.char === " " ||
      this.char === "\t" ||
      this.char === "\n" ||
      this.char === "\r"
    ) {
      this.readChar();
    }
  }

  private readChar(): void {
    if (this.readPosition >= this.input.length) {
      this.char = "\0"; // end of file
    } else {
      this.char = this.input[this.readPosition];
    }

    this.position = this.readPosition;
    this.readPosition += 1;
  }

  private readIdent(): string {
    const position = this.position;

    while (isLetter(this.char)) {
      this.readChar();
    }

    return this.input.slice(position, this.position);
  }

  private readNumber(): string {
    const position = this.position;
    while (isDigit(this.char)) {
      this.readChar();
    }
    return this.input.slice(position, this.position);
  }

  private peekChar(): string | number {
    if (this.readPosition >= this.input.length) {
      return 0;
    } else {
      return this.input[this.readPosition];
    }
  }
}

const input = `=+(){},;`;
let result = new Lexer(input);
console.log(result.nextToken());
