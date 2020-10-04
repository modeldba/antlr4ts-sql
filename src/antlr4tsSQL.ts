import { CommonTokenStream, ANTLRInputStream, Parser } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { CaseChangingStream } from "./models/CaseChangingStream";
import { SQLDialect } from "./models/SQLDialect";
import { MultiQueryMySQLParser } from "./grammar-output/mysql/MultiQueryMySQLParser";
import { MySQLLexer } from "./grammar-output/mysql/MySQLLexer";
import { PLpgSQLLexer } from "./grammar-output/plpgsql/PLpgSQLLexer";
import { PLpgSQLParser } from "./grammar-output/plpgsql/PLpgSQLParser";
import { PlSqlParser } from "./grammar-output/plsql/PlSqlParser";
import { PlSqlLexer } from "./grammar-output/plsql/PlSqlLexer";
import {TSqlParser} from './grammar-output/tsql/TSqlParser';
import {TSqlLexer} from './grammar-output/tsql/TSqlLexer';

export class antlr4tsSQL {

  dialect: SQLDialect;

  constructor(dialect: SQLDialect) {
    this.dialect = dialect;
  }

  getTokens(sqlScript: string): CommonTokenStream {
    const chars = new ANTLRInputStream(sqlScript);
    const caseChangingCharStream = new CaseChangingStream(chars, true);
    let lexer = null;
    if (this.dialect === SQLDialect.TSQL) {
      lexer = new TSqlLexer(caseChangingCharStream);
    } else if (this.dialect === SQLDialect.PLSQL) {
      lexer = new PlSqlLexer(caseChangingCharStream);
    } else if (this.dialect === SQLDialect.PLpgSQL) {
      lexer = new PLpgSQLLexer(chars);
    } else if (this.dialect === SQLDialect.MYSQL) {
      lexer = new MySQLLexer(chars);
    }
    const tokens = new CommonTokenStream(lexer);
    return tokens;
  }

  getParser(tokens: CommonTokenStream): Parser {
    let parser = null;
    if (this.dialect === SQLDialect.TSQL) {
      parser = new TSqlParser(tokens);
    } else if (this.dialect === SQLDialect.PLSQL) {
      parser = new PlSqlParser(tokens);
    } else if (this.dialect === SQLDialect.PLpgSQL) {
      parser = new PLpgSQLParser(tokens);
    } else if (this.dialect === SQLDialect.MYSQL) {
      parser = new MultiQueryMySQLParser(tokens);
    }
    return parser;
  }

  getParseTree(parser: Parser): ParseTree {
    if (parser instanceof TSqlParser) {
      return parser.tsql_file();
    } else if (parser instanceof PlSqlParser) {
      return (parser as PlSqlParser).sql_script();
    } else if (parser instanceof PLpgSQLParser) {
      return (parser as PLpgSQLParser).sql();
    } else if (parser instanceof MultiQueryMySQLParser) {
      return (parser as MultiQueryMySQLParser).sql_script();
    }
    return null;
  }

  /*** Convenience Methods ***/

  getParserFromSQL(sqlScript: string): Parser {
    return this.getParser(this.getTokens(sqlScript));
  }

  getParseTreeFromSQL(sqlScript: string): ParseTree {
    return this.getParseTree(this.getParserFromSQL(sqlScript));
  }

}