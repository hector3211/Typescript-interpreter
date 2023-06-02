import { Token, TokenType, TokenTypes } from "../token/token";
import { Lexer } from "../lexer/lexer";

test("test getNextToken()", function () {
  const input = `=+(){},;`;
  const expectedTokens: Token[] = [
    { type: TokenTypes.ASSIGN, literal: "=" },
    { type: TokenTypes.PLUS, literal: "+" },
    { type: TokenTypes.LPAREN, literal: "(" },
    { type: TokenTypes.RPAREN, literal: ")" },
    { type: TokenTypes.LBRACE, literal: "{" },
    { type: TokenTypes.RBRACE, literal: "}" },
    { type: TokenTypes.COMMA, literal: "," },
    { type: TokenTypes.SEMICOLON, literal: ";" },
    { type: TokenTypes.EOF, literal: "0" },
  ];

  const lexer = new Lexer(input);

  let res: Token[];
  for (const token of expectedTokens) {
    // expect(lexer.nextToken()).toBe(token);
    let tok = lexer.nextToken();

    if (tok.type !== token.type) {
      expect("").toThrowError();
    }
    if (tok.literal !== token.literal) {
      expect("").toThrowError();
    }
    expect(tok.type).toBe(token.type);
  }
});

// test("this should accept my input and work", () => {
//   //   const expectedTokens = [
//   //     TokenTypes.ASSIGN,
//   //     TokenTypes.PLUS,
//   //      TokenTypes.LPAREN,
//   //     TokenTypes.RPAREN,
//   //     TokenTypes.LBRACE,
//   //     TokenTypes.RBRACE,
//   //     TokenTypes.COMMA,
//   //     TokenTypes.SEMICOLON,
//   // ];
//   const expectedTokens: Token[] = [
//     { type: TokenTypes.ASSIGN, literal: "=" },
//     { type: TokenTypes.PLUS, literal: "+" },
//     { type: TokenTypes.LPAREN, literal: "(" },
//     { type: TokenTypes.RPAREN, literal: ")" },
//     { type: TokenTypes.LBRACE, literal: "{" },
//     { type: TokenTypes.RBRACE, literal: "}" },
//     { type: TokenTypes.COMMA, literal: "," },
//     { type: TokenTypes.SEMICOLON, literal: ";" },
//     { type: TokenTypes.EOF, literal: "0" },
//   ];
//   const inputV = "=+(){},;";
//
//   const testOne = (input: string) => {
//     const result = new Lexer();
//     result.new(input);
//     let res: Token[];
//     for (const token of expectedTokens) {
//       let tok = result.nextToken();
//
//       if (tok.type !== token.type) {
//         return;
//       }
//       if (tok.literal !== token.literal) {
//         return;
//       }
//       res.push(tok);
//     }
//   };
//   expect(testOne(inputV)).toBe(expectedTokens);
// });
//
// test("Should read what we put in test #2", () => {
//   const expectedTokens: Token[] = [
//     { type: TokenTypes.LET, literal: "let" },
//     { type: TokenTypes.IDENT, literal: "five" },
//     { type: TokenTypes.ASSIGN, literal: "=" },
//     { type: TokenTypes.INT, literal: "5" },
//     { type: TokenTypes.SEMICOLON, literal: ";" },
//     { type: TokenTypes.LET, literal: "let" },
//     { type: TokenTypes.IDENT, literal: "ten" },
//     { type: TokenTypes.ASSIGN, literal: "=" },
//     { type: TokenTypes.INT, literal: "10" },
//     { type: TokenTypes.SEMICOLON, literal: ";" },
//     { type: TokenTypes.LET, literal: "let" },
//     { type: TokenTypes.IDENT, literal: "add" },
//     { type: TokenTypes.ASSIGN, literal: "=" },
//     { type: TokenTypes.FUNCTION, literal: "fn" },
//     { type: TokenTypes.LPAREN, literal: "(" },
//     { type: TokenTypes.IDENT, literal: "x" },
//     { type: TokenTypes.COMMA, literal: "," },
//     { type: TokenTypes.IDENT, literal: "y" },
//     { type: TokenTypes.RPAREN, literal: ")" },
//     { type: TokenTypes.LBRACE, literal: "{" },
//     { type: TokenTypes.IDENT, literal: "x" },
//     { type: TokenTypes.PLUS, literal: "+" },
//     { type: TokenTypes.IDENT, literal: "y" },
//     { type: TokenTypes.SEMICOLON, literal: ";" },
//     { type: TokenTypes.RBRACE, literal: "}" },
//     { type: TokenTypes.SEMICOLON, literal: ";" },
//     { type: TokenTypes.LET, literal: "let" },
//     { type: TokenTypes.IDENT, literal: "result" },
//     { type: TokenTypes.ASSIGN, literal: "=" },
//     { type: TokenTypes.IDENT, literal: "add" },
//     { type: TokenTypes.LPAREN, literal: "(" },
//     { type: TokenTypes.IDENT, literal: "five" },
//     { type: TokenTypes.COMMA, literal: "," },
//     { type: TokenTypes.IDENT, literal: "ten" },
//     { type: TokenTypes.RPAREN, literal: ")" },
//     { type: TokenTypes.SEMICOLON, literal: ";" },
//     { type: TokenTypes.EOF, literal: "" },
//   ];
//   let inputV = `let five = 5;
//         let ten = 10;
//
//         let add = fn(x,y) {
//             x + y;
//         };
//         let result = add(five,ten);
//     `;
//
//   const testTwo = (input: string) => {
//     const result = new Lexer();
//     result.new(input);
//     let res: Token[];
//     for (const token of expectedTokens) {
//       let tok = result.nextToken();
//
//       if (tok.type !== token.type) {
//         return false;
//       }
//       if (tok.literal !== token.literal) {
//         return false;
//       }
//       res.push(tok);
//     }
//   };
//   expect(testTwo(inputV)).toBe(expectedTokens);
// });
