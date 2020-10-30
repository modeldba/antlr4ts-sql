import { antlr4tsSQL, ConsoleErrorListener, DiagnosticErrorListener, ProxyParserErrorListener, SQLDialect } from '../dist/index';

let antlr4tssql = null;
beforeAll(() => {
  antlr4tssql = new antlr4tsSQL(SQLDialect.MYSQL);
});

test('can customize error listeners', () => {
  const query = 'SELECT * FROM table1';
  let tokens = antlr4tssql.getTokens(query);
  expect(tokens._tokenSource._listeners.length).toBe(1);
  expect(tokens._tokenSource._listeners[0] instanceof ConsoleErrorListener).toBeTruthy();

  let parser = antlr4tssql.getParser(tokens);
  expect(parser._listeners.length).toBe(1);
  expect(parser._listeners[0] instanceof ConsoleErrorListener).toBeTruthy();

  tokens = antlr4tssql.getTokens(query, []);
  expect(tokens._tokenSource._listeners.length).toBe(0);
  
  parser = antlr4tssql.getParser(tokens, []);
  expect(parser._listeners.length).toBe(0);
  
  tokens = antlr4tssql.getTokens(query, [ConsoleErrorListener.INSTANCE, new DiagnosticErrorListener()]);
  expect(tokens._tokenSource._listeners.length).toBe(2);
  expect(tokens._tokenSource._listeners[0] instanceof ConsoleErrorListener).toBeTruthy();
  expect(tokens._tokenSource._listeners[1] instanceof DiagnosticErrorListener).toBeTruthy();

  parser = antlr4tssql.getParser(tokens, [ConsoleErrorListener.INSTANCE, new DiagnosticErrorListener()]);
  expect(parser._listeners.length).toBe(2);
  expect(parser._listeners[0] instanceof ConsoleErrorListener).toBeTruthy();
  expect(parser._listeners[1] instanceof DiagnosticErrorListener).toBeTruthy();
});