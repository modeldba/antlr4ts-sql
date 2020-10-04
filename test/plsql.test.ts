import { antlr4tsSQL, SQLDialect } from '../dist/index';
import { PlSQLGrammar } from '../dist/index';

let antlr4tssql = null;
beforeAll(() => {
  antlr4tssql = new antlr4tsSQL(SQLDialect.PLSQL);
});

test('can parse and tokenize a query', () => {
  const query = 'SELECT * FROM table1';
  const tokens = antlr4tssql.getTokens(query);
  const parser = antlr4tssql.getParser(tokens);
  expect(parser instanceof PlSQLGrammar.PlSqlParser).toBeTruthy();
  const parseTree = antlr4tssql.getParseTree(parser);
  expect(tokens.getTokens().length).toBe(4 + 3 + 1); // 4 "words", 3 space characters, 1 EOF
  expect(parseTree instanceof PlSQLGrammar.Sql_scriptContext).toBeTruthy();
});