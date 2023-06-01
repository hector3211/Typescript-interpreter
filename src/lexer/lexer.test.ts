import { Token, TokenType, TokenTypes } from "../token/token";
import { Lexer } from "../lexer/lexer";
const expectedTokens: Token[] = [
  {
    type: TokenTypes.ASSIGN,
    literal: "=",
  },
  {
    type: TokenTypes.PLUS,
    literal: "+",
  },
  {
    type: TokenTypes.LPAREN,
    literal: "(",
  },
  {
    type: TokenTypes.RPAREN,
    literal: ")",
  },
  {
    type: TokenTypes.LBRACE,
    literal: "{",
  },
  {
    type: TokenTypes.RBRACE,
    literal: "}",
  },
  {
    type: TokenTypes.COMMA,
    literal: ",",
  },
  {
    type: TokenTypes.SEMICOLON,
    literal: ";",
  },
  {
    type: TokenTypes.EOF,
    literal: "0",
  },
];

test("this should accept my input and work", () => {
  const inputV = "=+(){},;";

  const testOne = (input: string) => {
    const result = new Lexer();
    result.new(input);
    console.log(result.char);
    let res = true;
    for (const token of expectedTokens) {
      let tok = result.nextToken();

      if (tok.type !== token.type) {
        res = false;
      }
      if (tok.literal !== token.literal) {
        res = false;
      }
    }
    expect(testOne(inputV)).toBe(true);
  };
});

// test("Should read what we put in test #2", () => {
//   let input = "let five = 5;";
//
//   const result = new Lexer();
//   result.new(input);
// });
