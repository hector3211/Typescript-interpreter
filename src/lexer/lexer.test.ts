import { Token, TokenTypes } from "../token/token";
import { Lexer } from "../lexer/lexer";

test("Test 1", function () {
  const input = `=+(){},;`;
  const expectedTokens: Token[] = [
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Plus, literal: "+" },
    { type: TokenTypes.Lparen, literal: "(" },
    { type: TokenTypes.Rparen, literal: ")" },
    { type: TokenTypes.Lbrace, literal: "{" },
    { type: TokenTypes.Rbrace, literal: "}" },
    { type: TokenTypes.Comma, literal: "," },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Eof, literal: "0" },
  ];

  const lexer = new Lexer(input);

  for (const token of expectedTokens) {
    expect(lexer.nextToken().type).toBe(token.type);
  }
});

test("Test 2", () => {
  const expectedTokens: Token[] = [
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "five" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Int, literal: "5" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "ten" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Int, literal: "10" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "add" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Function, literal: "fn" },
    { type: TokenTypes.Lparen, literal: "(" },
    { type: TokenTypes.Ident, literal: "x" },
    { type: TokenTypes.Comma, literal: "," },
    { type: TokenTypes.Ident, literal: "y" },
    { type: TokenTypes.Rparen, literal: ")" },
    { type: TokenTypes.Lbrace, literal: "{" },
    { type: TokenTypes.Ident, literal: "x" },
    { type: TokenTypes.Plus, literal: "+" },
    { type: TokenTypes.Ident, literal: "y" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Rbrace, literal: "}" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "result" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Ident, literal: "add" },
    { type: TokenTypes.Lparen, literal: "(" },
    { type: TokenTypes.Ident, literal: "five" },
    { type: TokenTypes.Comma, literal: "," },
    { type: TokenTypes.Ident, literal: "ten" },
    { type: TokenTypes.Rparen, literal: ")" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Eof, literal: "\0" },
  ];
  let inputV = `let five = 5;
        let ten = 10;

        let add = fn(x,y) {
            x + y;
        };
        let result = add(five,ten);
    `;

  const result = new Lexer(inputV);
  for (const token of expectedTokens) {
    expect(result.nextToken().type).toBe(token.type);
  }
});

test("Test 3", () => {
  const expectedTokens: Token[] = [
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "five" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Int, literal: "5" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "ten" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Int, literal: "10" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "add" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Function, literal: "fn" },
    { type: TokenTypes.Lparen, literal: "(" },
    { type: TokenTypes.Ident, literal: "x" },
    { type: TokenTypes.Comma, literal: "," },
    { type: TokenTypes.Ident, literal: "y" },
    { type: TokenTypes.Rparen, literal: ")" },
    { type: TokenTypes.Lbrace, literal: "{" },
    { type: TokenTypes.Ident, literal: "x" },
    { type: TokenTypes.Plus, literal: "+" },
    { type: TokenTypes.Ident, literal: "y" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Rbrace, literal: "}" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Let, literal: "let" },
    { type: TokenTypes.Ident, literal: "result" },
    { type: TokenTypes.Assign, literal: "=" },
    { type: TokenTypes.Ident, literal: "add" },
    { type: TokenTypes.Lparen, literal: "(" },
    { type: TokenTypes.Ident, literal: "five" },
    { type: TokenTypes.Comma, literal: "," },
    { type: TokenTypes.Ident, literal: "ten" },
    { type: TokenTypes.Rparen, literal: ")" },
    { type: TokenTypes.Semicolon, literal: ";" },

    { type: TokenTypes.Bang, literal: "!" },
    { type: TokenTypes.Dash, literal: "-" },
    { type: TokenTypes.ForwardSlash, literal: "/" },
    { type: TokenTypes.Asterisk, literal: "*" },
    { type: TokenTypes.Int, literal: "5" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Int, literal: "5" },
    { type: TokenTypes.Lt, literal: "<" },
    { type: TokenTypes.Int, literal: "10" },
    { type: TokenTypes.Gt, literal: ">" },
    { type: TokenTypes.Int, literal: "5" },
    { type: TokenTypes.Semicolon, literal: ";" },

    { type: TokenTypes.If, literal: "if" },
    { type: TokenTypes.Lparen, literal: "(" },
    { type: TokenTypes.Int, literal: "5" },
    { type: TokenTypes.Lt, literal: "<" },
    { type: TokenTypes.Int, literal: "10" },
    { type: TokenTypes.Rparen, literal: ")" },
    { type: TokenTypes.Lbrace, literal: "{" },
    { type: TokenTypes.Return, literal: "return" },
    { type: TokenTypes.True, literal: "true" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Rbrace, literal: "}" },
    { type: TokenTypes.Else, literal: "else" },
    { type: TokenTypes.Lbrace, literal: "{" },
    { type: TokenTypes.Return, literal: "return" },
    { type: TokenTypes.False, literal: "false" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Rbrace, literal: "}" },

    { type: TokenTypes.Int, literal: "10" },
    { type: TokenTypes.Equal, literal: "==" },
    { type: TokenTypes.Int, literal: "10" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Int, literal: "10" },
    { type: TokenTypes.NotEqual, literal: "!=" },
    { type: TokenTypes.Int, literal: "9" },
    { type: TokenTypes.Semicolon, literal: ";" },
    { type: TokenTypes.Eof, literal: "\0" },
  ];
  const inputV = `let five = 5;
        let ten = 10;
        let add = fn(x, y) {
            x + y;
        };
        let result = add(five, ten);
        !-/*5;
        5 < 10 > 5;
        if (5 < 10) {
            return true;
        } else {
            return false;
        }


        10 == 10;
        10 != 9;
    `;

  const result = new Lexer(inputV);
  for (const token of expectedTokens) {
    expect(result.nextToken().type).toBe(token.type);
  }
});
