import { antlr4tsSQL, SQLDialect } from '../dist/index';
import { PLpgSQLGrammar } from '../dist/index';

let antlr4tssql = null;
beforeAll(() => {
  antlr4tssql = new antlr4tsSQL(SQLDialect.PLpgSQL);
});

test('can parse and tokenize a query', () => {
  const query = 'SELECT * FROM table1';
  const tokens = antlr4tssql.getTokens(query);
  const parser = antlr4tssql.getParser(tokens);
  expect(parser instanceof PLpgSQLGrammar.PLpgSQLParser).toBeTruthy();
  const parseTree = antlr4tssql.getParseTree(parser);
  expect(tokens.getTokens().length).toBe(4 + 3 + 1); // 4 "words", 3 space characters, 1 EOF
  expect(parseTree instanceof PLpgSQLGrammar.SqlContext).toBeTruthy();
});