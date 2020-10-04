import { antlr4tsSQL, SQLDialect } from '../dist/index';
import { TSQLGrammar } from '../dist/index';

let antlr4tssql = null;
beforeAll(() => {
  antlr4tssql = new antlr4tsSQL(SQLDialect.TSQL);
});

test('can parse and tokenize a query', () => {
  const query = 'SELECT * FROM table1';
  const tokens = antlr4tssql.getTokens(query);
  const parser = antlr4tssql.getParser(tokens);
  expect(parser instanceof TSQLGrammar.TSqlParser).toBeTruthy();
  const parseTree = antlr4tssql.getParseTree(parser);
  expect(tokens.getTokens().length).toBe(4 + 1); // 4 "words", 1 EOF, the TSQL Grammar skips whitespace characters
  expect(parseTree instanceof TSQLGrammar.Tsql_fileContext).toBeTruthy();
});