# antlr4ts-sql

Pre-built SQL grammars that you can import and "just use". No configuration necessary.

Supports MySQL, T-SQL (SQL Server), PL/pgSQL (PostgreSQL), PL/SQL (Oracle) dialects.

- Get parsers, lexers and parse-trees with a single method call.
- Determine if an arbitrary SQL script is syntactically correct.
- Identify the types of keywords used in the queries.

## Install
```shell
npm install antlr4ts-sql
```

## [Full documentation can be found here](https://modeldba.com/antlr4ts-sql/docs/)

## Get Started

```typescript
import { antlr4tsSQL, SQLDialect } from 'antlr4ts-sql';

const antlr4tssql = new antlr4tsSQL(SQLDialect.MYSQL);
const query = 'SELECT * FROM table1';
const parseTree = antlr4tssql.getParseTreeFromSQL(query);
console.log(parseTree);

// Sql_scriptContext {
//   _parent: undefined,
//   invokingState: -1,
//   _start: CommonToken { _line: 1, _charPositionInLine: 0, _channel: 0,
//                           index: 0, _text: undefined, _type: 614,
//                           source: { source: [MySQLLexer], stream: [ANTLRInputStream] },
//                           start: 0, stop: 5
//   },
//   children: [
//     QueryContext {
//       _parent: [Circular], invokingState: 1212,
//       _start: [CommonToken], children: [Array], _stop: [CommonToken]
//     },
//     TerminalNode { _symbol: [CommonToken], _parent: [Circular] }
//   ],
//   _stop: CommonToken { _line: 1, _charPositionInLine: 20, _channel: 0,
//                         index: 7, _text: undefined, _type: -1,
//                         source: { source: [MySQLLexer], stream: [ANTLRInputStream] },
//                         start: 20, stop: 19
//   }
// }
```

## Created By

[![modelDBA logo](https://modeldba.com/antlr4ts-sql/modelDBA128x128.png "modelDBA")](https://modeldba.com)

antlr4ts-sql is a project created and maintained by [modelDBA](https://modeldba.com), a database IDE for modern developers. 
modelDBA lets you visualize SQL as you type and edit tables easily with a no-code table editor.
