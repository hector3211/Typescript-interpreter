export const TokenTypes = {
  Illegal: "Illegal", // Token/Character we don't know about
  Eof: "Eof", // END OF FILE

  // Identifiers + literals
  Ident: "Ident",
  Int: "Int",

  // Operators
  Assign: "=",
  Plus: "+",
  Minus: "-",
  Bang: "!",
  Asterisk: "*",
  Slash: "/",
  Lt: "<",
  Gt: ">",
  NotEqual: "!=",
  Equal: "==",
  Dash: "-",
  ForwardSlash: "/",

  // Delimiters
  Comma: ",",
  Semicolon: ";",

  Lparen: "(",
  Rparen: ")",
  Lbrace: "{",
  Rbrace: "}",

  // Keywords
  Function: "FUNCTION",
  Let: "LET",
  Return: "return",
  True: "true",
  False: "false",
  If: "if",
  Else: "els",
} as const;

export type TokenType = (typeof TokenTypes)[keyof typeof TokenTypes];

export type Token = {
  type: TokenType;
  literal: string;
};

export function createToken(type: TokenType, literal: string): Token {
  return { type: type, literal: literal };
}

export const keywords = {
  fn: createToken(TokenTypes.Function, "fn"),
  let: createToken(TokenTypes.Let, "let"),
  return: createToken(TokenTypes.Return, "return"),
  true: createToken(TokenTypes.True, "true"),
  false: createToken(TokenTypes.False, "false"),
  if: createToken(TokenTypes.If, "if"),
  else: createToken(TokenTypes.Else, "else"),
} as const;
