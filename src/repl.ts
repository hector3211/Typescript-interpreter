import { Lexer } from "./lexer/lexer";
import readline from "readline";

const rs = readline.createInterface({
  input: process.stdin,
});

rs.on("line", (input) => {
  const lexer = new Lexer(input);

  while (true) {
    const token = lexer.nextToken();
    console.log(`Token: ${token.type} Literal: ${token.literal}`);
    if (token.type === "Eof") {
      break;
    }
  }
});

rs.on("close", () => {
  console.log(`End of Interpreting!`);
});
