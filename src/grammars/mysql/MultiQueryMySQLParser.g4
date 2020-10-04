parser grammar MultiQueryMySQLParser;

options {
  superClass=MySQLBaseParser;
  tokenVocab=MySQLLexer;
}

import MySQLParser;

sql_script
  : query* EOF
  ;

// Need to overwrite query rule so that it does not include EOF
query
  : (simpleStatement | beginWork) SEMICOLON_SYMBOL?
  ;