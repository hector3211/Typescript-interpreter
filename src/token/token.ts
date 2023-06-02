export const TokenTypes = {
  ILLEGAL: "ILLEGAL", // Token/Character we don't know about
  EOF: "EOF", // END OF FILE

  // Identifiers + literals
  IDENT: "IDENT",
  INT: "INT",

  // Operators
  ASSIGN: "=",
  PLUS: "+",

  // Delimiters
  COMMA: ",",
  SEMICOLON: ";",

  LPAREN: "(",
  RPAREN: ")",
  LBRACE: "{",
  RBRACE: "}",

  // Keywords
  FUNCTION: "FUNCTION",
  LET: "LET",
} as const;

export type TokenType = (typeof TokenTypes)[keyof typeof TokenTypes];

export type Token = {
  type: TokenType;
  literal: string;
};

export function createToken(type: TokenType, literal: string): Token {
  return { type: type, literal: literal };
}
