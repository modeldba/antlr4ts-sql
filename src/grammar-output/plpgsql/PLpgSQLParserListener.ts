// Generated from grammars/plpgsql/PLpgSQLParser.g4 by ANTLR 4.7.3-SNAPSHOT

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SqlContext } from "./PLpgSQLParser";
import { Qname_parserContext } from "./PLpgSQLParser";
import { Function_args_parserContext } from "./PLpgSQLParser";
import { Vex_eofContext } from "./PLpgSQLParser";
import { Plpgsql_functionContext } from "./PLpgSQLParser";
import { Plpgsql_function_test_listContext } from "./PLpgSQLParser";
import { StatementContext } from "./PLpgSQLParser";
import { Data_statementContext } from "./PLpgSQLParser";
import { Script_statementContext } from "./PLpgSQLParser";
import { Script_transactionContext } from "./PLpgSQLParser";
import { Transaction_modeContext } from "./PLpgSQLParser";
import { Lock_tableContext } from "./PLpgSQLParser";
import { Lock_modeContext } from "./PLpgSQLParser";
import { Script_additionalContext } from "./PLpgSQLParser";
import { Additional_statementContext } from "./PLpgSQLParser";
import { Explain_statementContext } from "./PLpgSQLParser";
import { Explain_queryContext } from "./PLpgSQLParser";
import { Execute_statementContext } from "./PLpgSQLParser";
import { Declare_statementContext } from "./PLpgSQLParser";
import { Show_statementContext } from "./PLpgSQLParser";
import { Explain_optionContext } from "./PLpgSQLParser";
import { User_nameContext } from "./PLpgSQLParser";
import { Table_cols_listContext } from "./PLpgSQLParser";
import { Table_colsContext } from "./PLpgSQLParser";
import { Vacuum_modeContext } from "./PLpgSQLParser";
import { Vacuum_optionContext } from "./PLpgSQLParser";
import { Analyze_modeContext } from "./PLpgSQLParser";
import { Boolean_valueContext } from "./PLpgSQLParser";
import { Fetch_move_directionContext } from "./PLpgSQLParser";
import { Schema_statementContext } from "./PLpgSQLParser";
import { Schema_createContext } from "./PLpgSQLParser";
import { Schema_alterContext } from "./PLpgSQLParser";
import { Schema_dropContext } from "./PLpgSQLParser";
import { Schema_importContext } from "./PLpgSQLParser";
import { Alter_function_statementContext } from "./PLpgSQLParser";
import { Alter_aggregate_statementContext } from "./PLpgSQLParser";
import { Alter_extension_statementContext } from "./PLpgSQLParser";
import { Alter_extension_actionContext } from "./PLpgSQLParser";
import { Extension_member_objectContext } from "./PLpgSQLParser";
import { Alter_schema_statementContext } from "./PLpgSQLParser";
import { Alter_language_statementContext } from "./PLpgSQLParser";
import { Alter_table_statementContext } from "./PLpgSQLParser";
import { Table_actionContext } from "./PLpgSQLParser";
import { Column_actionContext } from "./PLpgSQLParser";
import { Identity_bodyContext } from "./PLpgSQLParser";
import { Alter_identityContext } from "./PLpgSQLParser";
import { Storage_optionContext } from "./PLpgSQLParser";
import { Validate_constraintContext } from "./PLpgSQLParser";
import { Drop_constraintContext } from "./PLpgSQLParser";
import { Table_deferrableContext } from "./PLpgSQLParser";
import { Table_initialy_immedContext } from "./PLpgSQLParser";
import { Function_actions_commonContext } from "./PLpgSQLParser";
import { Function_defContext } from "./PLpgSQLParser";
import { Alter_index_statementContext } from "./PLpgSQLParser";
import { Index_def_actionContext } from "./PLpgSQLParser";
import { Alter_default_privilegesContext } from "./PLpgSQLParser";
import { Abbreviated_grant_or_revokeContext } from "./PLpgSQLParser";
import { Grant_option_forContext } from "./PLpgSQLParser";
import { Alter_sequence_statementContext } from "./PLpgSQLParser";
import { Alter_view_statementContext } from "./PLpgSQLParser";
import { Alter_event_triggerContext } from "./PLpgSQLParser";
import { Alter_event_trigger_actionContext } from "./PLpgSQLParser";
import { Alter_type_statementContext } from "./PLpgSQLParser";
import { Alter_domain_statementContext } from "./PLpgSQLParser";
import { Alter_server_statementContext } from "./PLpgSQLParser";
import { Alter_server_actionContext } from "./PLpgSQLParser";
import { Alter_fts_statementContext } from "./PLpgSQLParser";
import { Alter_fts_configurationContext } from "./PLpgSQLParser";
import { Type_actionContext } from "./PLpgSQLParser";
import { Set_def_columnContext } from "./PLpgSQLParser";
import { Drop_defContext } from "./PLpgSQLParser";
import { Create_index_statementContext } from "./PLpgSQLParser";
import { Index_restContext } from "./PLpgSQLParser";
import { Index_sortContext } from "./PLpgSQLParser";
import { Including_indexContext } from "./PLpgSQLParser";
import { Index_whereContext } from "./PLpgSQLParser";
import { Create_extension_statementContext } from "./PLpgSQLParser";
import { Create_language_statementContext } from "./PLpgSQLParser";
import { Create_event_triggerContext } from "./PLpgSQLParser";
import { Create_type_statementContext } from "./PLpgSQLParser";
import { Create_domain_statementContext } from "./PLpgSQLParser";
import { Create_server_statementContext } from "./PLpgSQLParser";
import { Create_fts_dictionaryContext } from "./PLpgSQLParser";
import { Option_with_valueContext } from "./PLpgSQLParser";
import { Create_fts_configurationContext } from "./PLpgSQLParser";
import { Create_fts_templateContext } from "./PLpgSQLParser";
import { Create_fts_parserContext } from "./PLpgSQLParser";
import { Create_collationContext } from "./PLpgSQLParser";
import { Alter_collationContext } from "./PLpgSQLParser";
import { Collation_optionContext } from "./PLpgSQLParser";
import { Create_user_mappingContext } from "./PLpgSQLParser";
import { Alter_user_mappingContext } from "./PLpgSQLParser";
import { Alter_user_or_roleContext } from "./PLpgSQLParser";
import { Alter_user_or_role_set_resetContext } from "./PLpgSQLParser";
import { User_or_role_set_resetContext } from "./PLpgSQLParser";
import { Alter_groupContext } from "./PLpgSQLParser";
import { Alter_group_actionContext } from "./PLpgSQLParser";
import { Alter_tablespaceContext } from "./PLpgSQLParser";
import { Alter_ownerContext } from "./PLpgSQLParser";
import { Alter_tablespace_actionContext } from "./PLpgSQLParser";
import { Alter_statisticsContext } from "./PLpgSQLParser";
import { Alter_foreign_data_wrapperContext } from "./PLpgSQLParser";
import { Alter_foreign_data_wrapper_actionContext } from "./PLpgSQLParser";
import { Alter_operator_statementContext } from "./PLpgSQLParser";
import { Alter_operator_actionContext } from "./PLpgSQLParser";
import { Operator_set_restrict_joinContext } from "./PLpgSQLParser";
import { Drop_user_mappingContext } from "./PLpgSQLParser";
import { Drop_ownedContext } from "./PLpgSQLParser";
import { Drop_operator_statementContext } from "./PLpgSQLParser";
import { Target_operatorContext } from "./PLpgSQLParser";
import { Domain_constraintContext } from "./PLpgSQLParser";
import { Create_transform_statementContext } from "./PLpgSQLParser";
import { Create_access_methodContext } from "./PLpgSQLParser";
import { Create_user_or_roleContext } from "./PLpgSQLParser";
import { User_or_role_optionContext } from "./PLpgSQLParser";
import { User_or_role_option_for_alterContext } from "./PLpgSQLParser";
import { User_or_role_or_group_common_optionContext } from "./PLpgSQLParser";
import { User_or_role_common_optionContext } from "./PLpgSQLParser";
import { User_or_role_or_group_option_for_createContext } from "./PLpgSQLParser";
import { Create_groupContext } from "./PLpgSQLParser";
import { Group_optionContext } from "./PLpgSQLParser";
import { Create_tablespaceContext } from "./PLpgSQLParser";
import { Create_statisticsContext } from "./PLpgSQLParser";
import { Create_foreign_data_wrapperContext } from "./PLpgSQLParser";
import { Option_without_equalContext } from "./PLpgSQLParser";
import { Create_operator_statementContext } from "./PLpgSQLParser";
import { Operator_nameContext } from "./PLpgSQLParser";
import { Operator_optionContext } from "./PLpgSQLParser";
import { Create_aggregate_statementContext } from "./PLpgSQLParser";
import { Aggregate_paramContext } from "./PLpgSQLParser";
import { Set_statementContext } from "./PLpgSQLParser";
import { Set_actionContext } from "./PLpgSQLParser";
import { Session_local_optionContext } from "./PLpgSQLParser";
import { Set_statement_valueContext } from "./PLpgSQLParser";
import { Create_rewrite_statementContext } from "./PLpgSQLParser";
import { Rewrite_commandContext } from "./PLpgSQLParser";
import { Create_trigger_statementContext } from "./PLpgSQLParser";
import { Trigger_referencingContext } from "./PLpgSQLParser";
import { When_triggerContext } from "./PLpgSQLParser";
import { Rule_commonContext } from "./PLpgSQLParser";
import { Rule_member_objectContext } from "./PLpgSQLParser";
import { Columns_permissionsContext } from "./PLpgSQLParser";
import { Table_column_privilegesContext } from "./PLpgSQLParser";
import { PermissionsContext } from "./PLpgSQLParser";
import { PermissionContext } from "./PLpgSQLParser";
import { Other_rulesContext } from "./PLpgSQLParser";
import { Grant_to_ruleContext } from "./PLpgSQLParser";
import { Revoke_from_cascade_restrictContext } from "./PLpgSQLParser";
import { Roles_namesContext } from "./PLpgSQLParser";
import { Role_name_with_groupContext } from "./PLpgSQLParser";
import { Comment_on_statementContext } from "./PLpgSQLParser";
import { Security_labelContext } from "./PLpgSQLParser";
import { Comment_member_objectContext } from "./PLpgSQLParser";
import { Label_member_objectContext } from "./PLpgSQLParser";
import { Create_function_statementContext } from "./PLpgSQLParser";
import { Create_funct_paramsContext } from "./PLpgSQLParser";
import { Transform_for_typeContext } from "./PLpgSQLParser";
import { Function_ret_tableContext } from "./PLpgSQLParser";
import { Function_column_name_typeContext } from "./PLpgSQLParser";
import { Function_parametersContext } from "./PLpgSQLParser";
import { Function_argsContext } from "./PLpgSQLParser";
import { Agg_orderContext } from "./PLpgSQLParser";
import { Character_stringContext } from "./PLpgSQLParser";
import { Function_argumentsContext } from "./PLpgSQLParser";
import { ArgmodeContext } from "./PLpgSQLParser";
import { Create_sequence_statementContext } from "./PLpgSQLParser";
import { Sequence_bodyContext } from "./PLpgSQLParser";
import { Signed_number_literalContext } from "./PLpgSQLParser";
import { Signed_numerical_literalContext } from "./PLpgSQLParser";
import { SignContext } from "./PLpgSQLParser";
import { Create_schema_statementContext } from "./PLpgSQLParser";
import { Create_policy_statementContext } from "./PLpgSQLParser";
import { Alter_policy_statementContext } from "./PLpgSQLParser";
import { Drop_policy_statementContext } from "./PLpgSQLParser";
import { Create_subscription_statementContext } from "./PLpgSQLParser";
import { Alter_subscription_statementContext } from "./PLpgSQLParser";
import { Alter_subscription_actionContext } from "./PLpgSQLParser";
import { Create_cast_statementContext } from "./PLpgSQLParser";
import { Drop_cast_statementContext } from "./PLpgSQLParser";
import { Create_operator_family_statementContext } from "./PLpgSQLParser";
import { Alter_operator_family_statementContext } from "./PLpgSQLParser";
import { Operator_family_actionContext } from "./PLpgSQLParser";
import { Add_operator_to_familyContext } from "./PLpgSQLParser";
import { Drop_operator_from_familyContext } from "./PLpgSQLParser";
import { Drop_operator_family_statementContext } from "./PLpgSQLParser";
import { Create_operator_class_statementContext } from "./PLpgSQLParser";
import { Create_operator_class_optionContext } from "./PLpgSQLParser";
import { Alter_operator_class_statementContext } from "./PLpgSQLParser";
import { Drop_operator_class_statementContext } from "./PLpgSQLParser";
import { Create_conversion_statementContext } from "./PLpgSQLParser";
import { Alter_conversion_statementContext } from "./PLpgSQLParser";
import { Create_publication_statementContext } from "./PLpgSQLParser";
import { Alter_publication_statementContext } from "./PLpgSQLParser";
import { Alter_publication_actionContext } from "./PLpgSQLParser";
import { Only_table_multiplyContext } from "./PLpgSQLParser";
import { Alter_trigger_statementContext } from "./PLpgSQLParser";
import { Alter_rule_statementContext } from "./PLpgSQLParser";
import { Copy_statementContext } from "./PLpgSQLParser";
import { Copy_from_statementContext } from "./PLpgSQLParser";
import { Copy_to_statementContext } from "./PLpgSQLParser";
import { Copy_option_listContext } from "./PLpgSQLParser";
import { Copy_optionContext } from "./PLpgSQLParser";
import { Create_view_statementContext } from "./PLpgSQLParser";
import { If_existsContext } from "./PLpgSQLParser";
import { If_not_existsContext } from "./PLpgSQLParser";
import { View_columnsContext } from "./PLpgSQLParser";
import { With_check_optionContext } from "./PLpgSQLParser";
import { Create_table_statementContext } from "./PLpgSQLParser";
import { Create_table_as_statementContext } from "./PLpgSQLParser";
import { Create_foreign_table_statementContext } from "./PLpgSQLParser";
import { Define_tableContext } from "./PLpgSQLParser";
import { Define_partitionContext } from "./PLpgSQLParser";
import { For_values_boundContext } from "./PLpgSQLParser";
import { Partition_bound_specContext } from "./PLpgSQLParser";
import { Partition_bound_partContext } from "./PLpgSQLParser";
import { Define_columnsContext } from "./PLpgSQLParser";
import { Define_typeContext } from "./PLpgSQLParser";
import { Partition_byContext } from "./PLpgSQLParser";
import { Partition_methodContext } from "./PLpgSQLParser";
import { Partition_columnContext } from "./PLpgSQLParser";
import { Define_serverContext } from "./PLpgSQLParser";
import { Define_foreign_optionsContext } from "./PLpgSQLParser";
import { Foreign_optionContext } from "./PLpgSQLParser";
import { Foreign_option_nameContext } from "./PLpgSQLParser";
import { List_of_type_column_defContext } from "./PLpgSQLParser";
import { Table_column_defContext } from "./PLpgSQLParser";
import { Table_of_type_column_defContext } from "./PLpgSQLParser";
import { Table_column_definitionContext } from "./PLpgSQLParser";
import { Like_optionContext } from "./PLpgSQLParser";
import { Constraint_commonContext } from "./PLpgSQLParser";
import { Constr_bodyContext } from "./PLpgSQLParser";
import { All_opContext } from "./PLpgSQLParser";
import { All_simple_opContext } from "./PLpgSQLParser";
import { Op_charsContext } from "./PLpgSQLParser";
import { Index_parametersContext } from "./PLpgSQLParser";
import { Names_in_parensContext } from "./PLpgSQLParser";
import { Names_referencesContext } from "./PLpgSQLParser";
import { Storage_parameterContext } from "./PLpgSQLParser";
import { Storage_parameter_optionContext } from "./PLpgSQLParser";
import { Storage_parameter_nameContext } from "./PLpgSQLParser";
import { With_storage_parameterContext } from "./PLpgSQLParser";
import { Storage_parameter_oidContext } from "./PLpgSQLParser";
import { On_commitContext } from "./PLpgSQLParser";
import { Table_spaceContext } from "./PLpgSQLParser";
import { ActionContext } from "./PLpgSQLParser";
import { Owner_toContext } from "./PLpgSQLParser";
import { Rename_toContext } from "./PLpgSQLParser";
import { Set_schemaContext } from "./PLpgSQLParser";
import { Table_column_privilegeContext } from "./PLpgSQLParser";
import { Usage_select_updateContext } from "./PLpgSQLParser";
import { Partition_by_columnsContext } from "./PLpgSQLParser";
import { Cascade_restrictContext } from "./PLpgSQLParser";
import { Collate_identifierContext } from "./PLpgSQLParser";
import { Indirection_varContext } from "./PLpgSQLParser";
import { Dollar_numberContext } from "./PLpgSQLParser";
import { Indirection_listContext } from "./PLpgSQLParser";
import { IndirectionContext } from "./PLpgSQLParser";
import { Drop_function_statementContext } from "./PLpgSQLParser";
import { Drop_trigger_statementContext } from "./PLpgSQLParser";
import { Drop_rule_statementContext } from "./PLpgSQLParser";
import { Drop_statementsContext } from "./PLpgSQLParser";
import { If_exist_names_restrict_cascadeContext } from "./PLpgSQLParser";
import { Id_tokenContext } from "./PLpgSQLParser";
import { IdentifierContext } from "./PLpgSQLParser";
import { Identifier_nontypeContext } from "./PLpgSQLParser";
import { Col_labelContext } from "./PLpgSQLParser";
import { Tokens_nonreservedContext } from "./PLpgSQLParser";
import { Tokens_nonreserved_except_function_typeContext } from "./PLpgSQLParser";
import { Tokens_reserved_except_function_typeContext } from "./PLpgSQLParser";
import { Tokens_reservedContext } from "./PLpgSQLParser";
import { Tokens_nonkeywordContext } from "./PLpgSQLParser";
import { Schema_qualified_name_nontypeContext } from "./PLpgSQLParser";
import { Type_listContext } from "./PLpgSQLParser";
import { Data_typeContext } from "./PLpgSQLParser";
import { Array_typeContext } from "./PLpgSQLParser";
import { Predefined_typeContext } from "./PLpgSQLParser";
import { Interval_fieldContext } from "./PLpgSQLParser";
import { Type_lengthContext } from "./PLpgSQLParser";
import { Precision_paramContext } from "./PLpgSQLParser";
import { VexContext } from "./PLpgSQLParser";
import { Vex_bContext } from "./PLpgSQLParser";
import { OpContext } from "./PLpgSQLParser";
import { All_op_refContext } from "./PLpgSQLParser";
import { Datetime_overlapsContext } from "./PLpgSQLParser";
import { Value_expression_primaryContext } from "./PLpgSQLParser";
import { Unsigned_value_specificationContext } from "./PLpgSQLParser";
import { Unsigned_numeric_literalContext } from "./PLpgSQLParser";
import { Truth_valueContext } from "./PLpgSQLParser";
import { Case_expressionContext } from "./PLpgSQLParser";
import { Cast_specificationContext } from "./PLpgSQLParser";
import { Function_callContext } from "./PLpgSQLParser";
import { Vex_or_named_notationContext } from "./PLpgSQLParser";
import { PointerContext } from "./PLpgSQLParser";
import { Function_constructContext } from "./PLpgSQLParser";
import { Extract_functionContext } from "./PLpgSQLParser";
import { System_functionContext } from "./PLpgSQLParser";
import { Date_time_functionContext } from "./PLpgSQLParser";
import { String_value_functionContext } from "./PLpgSQLParser";
import { Xml_functionContext } from "./PLpgSQLParser";
import { Xml_table_columnContext } from "./PLpgSQLParser";
import { Comparison_modContext } from "./PLpgSQLParser";
import { Filter_clauseContext } from "./PLpgSQLParser";
import { Window_definitionContext } from "./PLpgSQLParser";
import { Frame_clauseContext } from "./PLpgSQLParser";
import { Frame_boundContext } from "./PLpgSQLParser";
import { Array_expressionContext } from "./PLpgSQLParser";
import { Array_elementsContext } from "./PLpgSQLParser";
import { Type_coercionContext } from "./PLpgSQLParser";
import { Schema_qualified_nameContext } from "./PLpgSQLParser";
import { Set_qualifierContext } from "./PLpgSQLParser";
import { Table_subqueryContext } from "./PLpgSQLParser";
import { Select_stmtContext } from "./PLpgSQLParser";
import { After_opsContext } from "./PLpgSQLParser";
import { Select_stmt_no_parensContext } from "./PLpgSQLParser";
import { With_clauseContext } from "./PLpgSQLParser";
import { With_queryContext } from "./PLpgSQLParser";
import { Select_opsContext } from "./PLpgSQLParser";
import { Select_ops_no_parensContext } from "./PLpgSQLParser";
import { Select_primaryContext } from "./PLpgSQLParser";
import { Select_listContext } from "./PLpgSQLParser";
import { Select_sublistContext } from "./PLpgSQLParser";
import { Into_tableContext } from "./PLpgSQLParser";
import { From_itemContext } from "./PLpgSQLParser";
import { From_primaryContext } from "./PLpgSQLParser";
import { Alias_clauseContext } from "./PLpgSQLParser";
import { From_function_column_defContext } from "./PLpgSQLParser";
import { Groupby_clauseContext } from "./PLpgSQLParser";
import { Grouping_element_listContext } from "./PLpgSQLParser";
import { Grouping_elementContext } from "./PLpgSQLParser";
import { Values_stmtContext } from "./PLpgSQLParser";
import { Values_valuesContext } from "./PLpgSQLParser";
import { Orderby_clauseContext } from "./PLpgSQLParser";
import { Sort_specifier_listContext } from "./PLpgSQLParser";
import { Sort_specifierContext } from "./PLpgSQLParser";
import { Order_specificationContext } from "./PLpgSQLParser";
import { Null_orderingContext } from "./PLpgSQLParser";
import { Insert_stmt_for_psqlContext } from "./PLpgSQLParser";
import { Insert_columnsContext } from "./PLpgSQLParser";
import { Indirection_identifierContext } from "./PLpgSQLParser";
import { Conflict_objectContext } from "./PLpgSQLParser";
import { Conflict_actionContext } from "./PLpgSQLParser";
import { Delete_stmt_for_psqlContext } from "./PLpgSQLParser";
import { Update_stmt_for_psqlContext } from "./PLpgSQLParser";
import { Update_setContext } from "./PLpgSQLParser";
import { Notify_stmtContext } from "./PLpgSQLParser";
import { Truncate_stmtContext } from "./PLpgSQLParser";
import { Identifier_listContext } from "./PLpgSQLParser";
import { Anonymous_blockContext } from "./PLpgSQLParser";
import { Comp_optionsContext } from "./PLpgSQLParser";
import { Function_blockContext } from "./PLpgSQLParser";
import { Start_labelContext } from "./PLpgSQLParser";
import { DeclarationsContext } from "./PLpgSQLParser";
import { DeclarationContext } from "./PLpgSQLParser";
import { Type_declarationContext } from "./PLpgSQLParser";
import { Arguments_listContext } from "./PLpgSQLParser";
import { Data_type_decContext } from "./PLpgSQLParser";
import { Exception_statementContext } from "./PLpgSQLParser";
import { Function_statementsContext } from "./PLpgSQLParser";
import { Function_statementContext } from "./PLpgSQLParser";
import { Base_statementContext } from "./PLpgSQLParser";
import { VarContext } from "./PLpgSQLParser";
import { Diagnostic_optionContext } from "./PLpgSQLParser";
import { Perform_stmtContext } from "./PLpgSQLParser";
import { Assign_stmtContext } from "./PLpgSQLParser";
import { Execute_stmtContext } from "./PLpgSQLParser";
import { Control_statementContext } from "./PLpgSQLParser";
import { Cursor_statementContext } from "./PLpgSQLParser";
import { OptionContext } from "./PLpgSQLParser";
import { Transaction_statementContext } from "./PLpgSQLParser";
import { Message_statementContext } from "./PLpgSQLParser";
import { Log_levelContext } from "./PLpgSQLParser";
import { Raise_usingContext } from "./PLpgSQLParser";
import { Raise_paramContext } from "./PLpgSQLParser";
import { Return_stmtContext } from "./PLpgSQLParser";
import { Loop_statementContext } from "./PLpgSQLParser";
import { Loop_startContext } from "./PLpgSQLParser";
import { Using_vexContext } from "./PLpgSQLParser";
import { If_statementContext } from "./PLpgSQLParser";
import { Case_statementContext } from "./PLpgSQLParser";
import { Plpgsql_queryContext } from "./PLpgSQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PLpgSQLParser`.
 */
export interface PLpgSQLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PLpgSQLParser.sql`.
	 * @param ctx the parse tree
	 */
	enterSql?: (ctx: SqlContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.sql`.
	 * @param ctx the parse tree
	 */
	exitSql?: (ctx: SqlContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.qname_parser`.
	 * @param ctx the parse tree
	 */
	enterQname_parser?: (ctx: Qname_parserContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.qname_parser`.
	 * @param ctx the parse tree
	 */
	exitQname_parser?: (ctx: Qname_parserContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_args_parser`.
	 * @param ctx the parse tree
	 */
	enterFunction_args_parser?: (ctx: Function_args_parserContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_args_parser`.
	 * @param ctx the parse tree
	 */
	exitFunction_args_parser?: (ctx: Function_args_parserContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.vex_eof`.
	 * @param ctx the parse tree
	 */
	enterVex_eof?: (ctx: Vex_eofContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.vex_eof`.
	 * @param ctx the parse tree
	 */
	exitVex_eof?: (ctx: Vex_eofContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.plpgsql_function`.
	 * @param ctx the parse tree
	 */
	enterPlpgsql_function?: (ctx: Plpgsql_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.plpgsql_function`.
	 * @param ctx the parse tree
	 */
	exitPlpgsql_function?: (ctx: Plpgsql_functionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.plpgsql_function_test_list`.
	 * @param ctx the parse tree
	 */
	enterPlpgsql_function_test_list?: (ctx: Plpgsql_function_test_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.plpgsql_function_test_list`.
	 * @param ctx the parse tree
	 */
	exitPlpgsql_function_test_list?: (ctx: Plpgsql_function_test_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.data_statement`.
	 * @param ctx the parse tree
	 */
	enterData_statement?: (ctx: Data_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.data_statement`.
	 * @param ctx the parse tree
	 */
	exitData_statement?: (ctx: Data_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.script_statement`.
	 * @param ctx the parse tree
	 */
	enterScript_statement?: (ctx: Script_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.script_statement`.
	 * @param ctx the parse tree
	 */
	exitScript_statement?: (ctx: Script_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.script_transaction`.
	 * @param ctx the parse tree
	 */
	enterScript_transaction?: (ctx: Script_transactionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.script_transaction`.
	 * @param ctx the parse tree
	 */
	exitScript_transaction?: (ctx: Script_transactionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.transaction_mode`.
	 * @param ctx the parse tree
	 */
	enterTransaction_mode?: (ctx: Transaction_modeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.transaction_mode`.
	 * @param ctx the parse tree
	 */
	exitTransaction_mode?: (ctx: Transaction_modeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.lock_table`.
	 * @param ctx the parse tree
	 */
	enterLock_table?: (ctx: Lock_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.lock_table`.
	 * @param ctx the parse tree
	 */
	exitLock_table?: (ctx: Lock_tableContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.lock_mode`.
	 * @param ctx the parse tree
	 */
	enterLock_mode?: (ctx: Lock_modeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.lock_mode`.
	 * @param ctx the parse tree
	 */
	exitLock_mode?: (ctx: Lock_modeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.script_additional`.
	 * @param ctx the parse tree
	 */
	enterScript_additional?: (ctx: Script_additionalContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.script_additional`.
	 * @param ctx the parse tree
	 */
	exitScript_additional?: (ctx: Script_additionalContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.additional_statement`.
	 * @param ctx the parse tree
	 */
	enterAdditional_statement?: (ctx: Additional_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.additional_statement`.
	 * @param ctx the parse tree
	 */
	exitAdditional_statement?: (ctx: Additional_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.explain_statement`.
	 * @param ctx the parse tree
	 */
	enterExplain_statement?: (ctx: Explain_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.explain_statement`.
	 * @param ctx the parse tree
	 */
	exitExplain_statement?: (ctx: Explain_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.explain_query`.
	 * @param ctx the parse tree
	 */
	enterExplain_query?: (ctx: Explain_queryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.explain_query`.
	 * @param ctx the parse tree
	 */
	exitExplain_query?: (ctx: Explain_queryContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.execute_statement`.
	 * @param ctx the parse tree
	 */
	enterExecute_statement?: (ctx: Execute_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.execute_statement`.
	 * @param ctx the parse tree
	 */
	exitExecute_statement?: (ctx: Execute_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.declare_statement`.
	 * @param ctx the parse tree
	 */
	enterDeclare_statement?: (ctx: Declare_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.declare_statement`.
	 * @param ctx the parse tree
	 */
	exitDeclare_statement?: (ctx: Declare_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.show_statement`.
	 * @param ctx the parse tree
	 */
	enterShow_statement?: (ctx: Show_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.show_statement`.
	 * @param ctx the parse tree
	 */
	exitShow_statement?: (ctx: Show_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.explain_option`.
	 * @param ctx the parse tree
	 */
	enterExplain_option?: (ctx: Explain_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.explain_option`.
	 * @param ctx the parse tree
	 */
	exitExplain_option?: (ctx: Explain_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.user_name`.
	 * @param ctx the parse tree
	 */
	enterUser_name?: (ctx: User_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.user_name`.
	 * @param ctx the parse tree
	 */
	exitUser_name?: (ctx: User_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_cols_list`.
	 * @param ctx the parse tree
	 */
	enterTable_cols_list?: (ctx: Table_cols_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_cols_list`.
	 * @param ctx the parse tree
	 */
	exitTable_cols_list?: (ctx: Table_cols_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_cols`.
	 * @param ctx the parse tree
	 */
	enterTable_cols?: (ctx: Table_colsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_cols`.
	 * @param ctx the parse tree
	 */
	exitTable_cols?: (ctx: Table_colsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.vacuum_mode`.
	 * @param ctx the parse tree
	 */
	enterVacuum_mode?: (ctx: Vacuum_modeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.vacuum_mode`.
	 * @param ctx the parse tree
	 */
	exitVacuum_mode?: (ctx: Vacuum_modeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.vacuum_option`.
	 * @param ctx the parse tree
	 */
	enterVacuum_option?: (ctx: Vacuum_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.vacuum_option`.
	 * @param ctx the parse tree
	 */
	exitVacuum_option?: (ctx: Vacuum_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.analyze_mode`.
	 * @param ctx the parse tree
	 */
	enterAnalyze_mode?: (ctx: Analyze_modeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.analyze_mode`.
	 * @param ctx the parse tree
	 */
	exitAnalyze_mode?: (ctx: Analyze_modeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.boolean_value`.
	 * @param ctx the parse tree
	 */
	enterBoolean_value?: (ctx: Boolean_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.boolean_value`.
	 * @param ctx the parse tree
	 */
	exitBoolean_value?: (ctx: Boolean_valueContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.fetch_move_direction`.
	 * @param ctx the parse tree
	 */
	enterFetch_move_direction?: (ctx: Fetch_move_directionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.fetch_move_direction`.
	 * @param ctx the parse tree
	 */
	exitFetch_move_direction?: (ctx: Fetch_move_directionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.schema_statement`.
	 * @param ctx the parse tree
	 */
	enterSchema_statement?: (ctx: Schema_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.schema_statement`.
	 * @param ctx the parse tree
	 */
	exitSchema_statement?: (ctx: Schema_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.schema_create`.
	 * @param ctx the parse tree
	 */
	enterSchema_create?: (ctx: Schema_createContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.schema_create`.
	 * @param ctx the parse tree
	 */
	exitSchema_create?: (ctx: Schema_createContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.schema_alter`.
	 * @param ctx the parse tree
	 */
	enterSchema_alter?: (ctx: Schema_alterContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.schema_alter`.
	 * @param ctx the parse tree
	 */
	exitSchema_alter?: (ctx: Schema_alterContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.schema_drop`.
	 * @param ctx the parse tree
	 */
	enterSchema_drop?: (ctx: Schema_dropContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.schema_drop`.
	 * @param ctx the parse tree
	 */
	exitSchema_drop?: (ctx: Schema_dropContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.schema_import`.
	 * @param ctx the parse tree
	 */
	enterSchema_import?: (ctx: Schema_importContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.schema_import`.
	 * @param ctx the parse tree
	 */
	exitSchema_import?: (ctx: Schema_importContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_function_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_function_statement?: (ctx: Alter_function_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_function_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_function_statement?: (ctx: Alter_function_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_aggregate_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_aggregate_statement?: (ctx: Alter_aggregate_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_aggregate_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_aggregate_statement?: (ctx: Alter_aggregate_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_extension_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_extension_statement?: (ctx: Alter_extension_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_extension_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_extension_statement?: (ctx: Alter_extension_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_extension_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_extension_action?: (ctx: Alter_extension_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_extension_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_extension_action?: (ctx: Alter_extension_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.extension_member_object`.
	 * @param ctx the parse tree
	 */
	enterExtension_member_object?: (ctx: Extension_member_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.extension_member_object`.
	 * @param ctx the parse tree
	 */
	exitExtension_member_object?: (ctx: Extension_member_objectContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_schema_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_schema_statement?: (ctx: Alter_schema_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_schema_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_schema_statement?: (ctx: Alter_schema_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_language_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_language_statement?: (ctx: Alter_language_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_language_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_language_statement?: (ctx: Alter_language_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_table_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_table_statement?: (ctx: Alter_table_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_table_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_table_statement?: (ctx: Alter_table_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_action`.
	 * @param ctx the parse tree
	 */
	enterTable_action?: (ctx: Table_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_action`.
	 * @param ctx the parse tree
	 */
	exitTable_action?: (ctx: Table_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.column_action`.
	 * @param ctx the parse tree
	 */
	enterColumn_action?: (ctx: Column_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.column_action`.
	 * @param ctx the parse tree
	 */
	exitColumn_action?: (ctx: Column_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.identity_body`.
	 * @param ctx the parse tree
	 */
	enterIdentity_body?: (ctx: Identity_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.identity_body`.
	 * @param ctx the parse tree
	 */
	exitIdentity_body?: (ctx: Identity_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_identity`.
	 * @param ctx the parse tree
	 */
	enterAlter_identity?: (ctx: Alter_identityContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_identity`.
	 * @param ctx the parse tree
	 */
	exitAlter_identity?: (ctx: Alter_identityContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.storage_option`.
	 * @param ctx the parse tree
	 */
	enterStorage_option?: (ctx: Storage_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.storage_option`.
	 * @param ctx the parse tree
	 */
	exitStorage_option?: (ctx: Storage_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.validate_constraint`.
	 * @param ctx the parse tree
	 */
	enterValidate_constraint?: (ctx: Validate_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.validate_constraint`.
	 * @param ctx the parse tree
	 */
	exitValidate_constraint?: (ctx: Validate_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_constraint`.
	 * @param ctx the parse tree
	 */
	enterDrop_constraint?: (ctx: Drop_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_constraint`.
	 * @param ctx the parse tree
	 */
	exitDrop_constraint?: (ctx: Drop_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_deferrable`.
	 * @param ctx the parse tree
	 */
	enterTable_deferrable?: (ctx: Table_deferrableContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_deferrable`.
	 * @param ctx the parse tree
	 */
	exitTable_deferrable?: (ctx: Table_deferrableContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_initialy_immed`.
	 * @param ctx the parse tree
	 */
	enterTable_initialy_immed?: (ctx: Table_initialy_immedContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_initialy_immed`.
	 * @param ctx the parse tree
	 */
	exitTable_initialy_immed?: (ctx: Table_initialy_immedContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_actions_common`.
	 * @param ctx the parse tree
	 */
	enterFunction_actions_common?: (ctx: Function_actions_commonContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_actions_common`.
	 * @param ctx the parse tree
	 */
	exitFunction_actions_common?: (ctx: Function_actions_commonContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_def`.
	 * @param ctx the parse tree
	 */
	enterFunction_def?: (ctx: Function_defContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_def`.
	 * @param ctx the parse tree
	 */
	exitFunction_def?: (ctx: Function_defContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_index_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_index_statement?: (ctx: Alter_index_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_index_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_index_statement?: (ctx: Alter_index_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.index_def_action`.
	 * @param ctx the parse tree
	 */
	enterIndex_def_action?: (ctx: Index_def_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.index_def_action`.
	 * @param ctx the parse tree
	 */
	exitIndex_def_action?: (ctx: Index_def_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_default_privileges`.
	 * @param ctx the parse tree
	 */
	enterAlter_default_privileges?: (ctx: Alter_default_privilegesContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_default_privileges`.
	 * @param ctx the parse tree
	 */
	exitAlter_default_privileges?: (ctx: Alter_default_privilegesContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.abbreviated_grant_or_revoke`.
	 * @param ctx the parse tree
	 */
	enterAbbreviated_grant_or_revoke?: (ctx: Abbreviated_grant_or_revokeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.abbreviated_grant_or_revoke`.
	 * @param ctx the parse tree
	 */
	exitAbbreviated_grant_or_revoke?: (ctx: Abbreviated_grant_or_revokeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.grant_option_for`.
	 * @param ctx the parse tree
	 */
	enterGrant_option_for?: (ctx: Grant_option_forContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.grant_option_for`.
	 * @param ctx the parse tree
	 */
	exitGrant_option_for?: (ctx: Grant_option_forContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_sequence_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_sequence_statement?: (ctx: Alter_sequence_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_sequence_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_sequence_statement?: (ctx: Alter_sequence_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_view_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_view_statement?: (ctx: Alter_view_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_view_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_view_statement?: (ctx: Alter_view_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_event_trigger`.
	 * @param ctx the parse tree
	 */
	enterAlter_event_trigger?: (ctx: Alter_event_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_event_trigger`.
	 * @param ctx the parse tree
	 */
	exitAlter_event_trigger?: (ctx: Alter_event_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_event_trigger_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_event_trigger_action?: (ctx: Alter_event_trigger_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_event_trigger_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_event_trigger_action?: (ctx: Alter_event_trigger_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_type_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_type_statement?: (ctx: Alter_type_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_type_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_type_statement?: (ctx: Alter_type_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_domain_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_domain_statement?: (ctx: Alter_domain_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_domain_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_domain_statement?: (ctx: Alter_domain_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_server_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_server_statement?: (ctx: Alter_server_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_server_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_server_statement?: (ctx: Alter_server_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_server_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_server_action?: (ctx: Alter_server_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_server_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_server_action?: (ctx: Alter_server_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_fts_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_fts_statement?: (ctx: Alter_fts_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_fts_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_fts_statement?: (ctx: Alter_fts_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_fts_configuration`.
	 * @param ctx the parse tree
	 */
	enterAlter_fts_configuration?: (ctx: Alter_fts_configurationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_fts_configuration`.
	 * @param ctx the parse tree
	 */
	exitAlter_fts_configuration?: (ctx: Alter_fts_configurationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.type_action`.
	 * @param ctx the parse tree
	 */
	enterType_action?: (ctx: Type_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.type_action`.
	 * @param ctx the parse tree
	 */
	exitType_action?: (ctx: Type_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.set_def_column`.
	 * @param ctx the parse tree
	 */
	enterSet_def_column?: (ctx: Set_def_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.set_def_column`.
	 * @param ctx the parse tree
	 */
	exitSet_def_column?: (ctx: Set_def_columnContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_def`.
	 * @param ctx the parse tree
	 */
	enterDrop_def?: (ctx: Drop_defContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_def`.
	 * @param ctx the parse tree
	 */
	exitDrop_def?: (ctx: Drop_defContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_index_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_index_statement?: (ctx: Create_index_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_index_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_index_statement?: (ctx: Create_index_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.index_rest`.
	 * @param ctx the parse tree
	 */
	enterIndex_rest?: (ctx: Index_restContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.index_rest`.
	 * @param ctx the parse tree
	 */
	exitIndex_rest?: (ctx: Index_restContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.index_sort`.
	 * @param ctx the parse tree
	 */
	enterIndex_sort?: (ctx: Index_sortContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.index_sort`.
	 * @param ctx the parse tree
	 */
	exitIndex_sort?: (ctx: Index_sortContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.including_index`.
	 * @param ctx the parse tree
	 */
	enterIncluding_index?: (ctx: Including_indexContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.including_index`.
	 * @param ctx the parse tree
	 */
	exitIncluding_index?: (ctx: Including_indexContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.index_where`.
	 * @param ctx the parse tree
	 */
	enterIndex_where?: (ctx: Index_whereContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.index_where`.
	 * @param ctx the parse tree
	 */
	exitIndex_where?: (ctx: Index_whereContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_extension_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_extension_statement?: (ctx: Create_extension_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_extension_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_extension_statement?: (ctx: Create_extension_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_language_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_language_statement?: (ctx: Create_language_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_language_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_language_statement?: (ctx: Create_language_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_event_trigger`.
	 * @param ctx the parse tree
	 */
	enterCreate_event_trigger?: (ctx: Create_event_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_event_trigger`.
	 * @param ctx the parse tree
	 */
	exitCreate_event_trigger?: (ctx: Create_event_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_type_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_type_statement?: (ctx: Create_type_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_type_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_type_statement?: (ctx: Create_type_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_domain_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_domain_statement?: (ctx: Create_domain_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_domain_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_domain_statement?: (ctx: Create_domain_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_server_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_server_statement?: (ctx: Create_server_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_server_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_server_statement?: (ctx: Create_server_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_fts_dictionary`.
	 * @param ctx the parse tree
	 */
	enterCreate_fts_dictionary?: (ctx: Create_fts_dictionaryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_fts_dictionary`.
	 * @param ctx the parse tree
	 */
	exitCreate_fts_dictionary?: (ctx: Create_fts_dictionaryContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.option_with_value`.
	 * @param ctx the parse tree
	 */
	enterOption_with_value?: (ctx: Option_with_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.option_with_value`.
	 * @param ctx the parse tree
	 */
	exitOption_with_value?: (ctx: Option_with_valueContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_fts_configuration`.
	 * @param ctx the parse tree
	 */
	enterCreate_fts_configuration?: (ctx: Create_fts_configurationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_fts_configuration`.
	 * @param ctx the parse tree
	 */
	exitCreate_fts_configuration?: (ctx: Create_fts_configurationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_fts_template`.
	 * @param ctx the parse tree
	 */
	enterCreate_fts_template?: (ctx: Create_fts_templateContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_fts_template`.
	 * @param ctx the parse tree
	 */
	exitCreate_fts_template?: (ctx: Create_fts_templateContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_fts_parser`.
	 * @param ctx the parse tree
	 */
	enterCreate_fts_parser?: (ctx: Create_fts_parserContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_fts_parser`.
	 * @param ctx the parse tree
	 */
	exitCreate_fts_parser?: (ctx: Create_fts_parserContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_collation`.
	 * @param ctx the parse tree
	 */
	enterCreate_collation?: (ctx: Create_collationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_collation`.
	 * @param ctx the parse tree
	 */
	exitCreate_collation?: (ctx: Create_collationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_collation`.
	 * @param ctx the parse tree
	 */
	enterAlter_collation?: (ctx: Alter_collationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_collation`.
	 * @param ctx the parse tree
	 */
	exitAlter_collation?: (ctx: Alter_collationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.collation_option`.
	 * @param ctx the parse tree
	 */
	enterCollation_option?: (ctx: Collation_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.collation_option`.
	 * @param ctx the parse tree
	 */
	exitCollation_option?: (ctx: Collation_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_user_mapping`.
	 * @param ctx the parse tree
	 */
	enterCreate_user_mapping?: (ctx: Create_user_mappingContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_user_mapping`.
	 * @param ctx the parse tree
	 */
	exitCreate_user_mapping?: (ctx: Create_user_mappingContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_user_mapping`.
	 * @param ctx the parse tree
	 */
	enterAlter_user_mapping?: (ctx: Alter_user_mappingContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_user_mapping`.
	 * @param ctx the parse tree
	 */
	exitAlter_user_mapping?: (ctx: Alter_user_mappingContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_user_or_role`.
	 * @param ctx the parse tree
	 */
	enterAlter_user_or_role?: (ctx: Alter_user_or_roleContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_user_or_role`.
	 * @param ctx the parse tree
	 */
	exitAlter_user_or_role?: (ctx: Alter_user_or_roleContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_user_or_role_set_reset`.
	 * @param ctx the parse tree
	 */
	enterAlter_user_or_role_set_reset?: (ctx: Alter_user_or_role_set_resetContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_user_or_role_set_reset`.
	 * @param ctx the parse tree
	 */
	exitAlter_user_or_role_set_reset?: (ctx: Alter_user_or_role_set_resetContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.user_or_role_set_reset`.
	 * @param ctx the parse tree
	 */
	enterUser_or_role_set_reset?: (ctx: User_or_role_set_resetContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.user_or_role_set_reset`.
	 * @param ctx the parse tree
	 */
	exitUser_or_role_set_reset?: (ctx: User_or_role_set_resetContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_group`.
	 * @param ctx the parse tree
	 */
	enterAlter_group?: (ctx: Alter_groupContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_group`.
	 * @param ctx the parse tree
	 */
	exitAlter_group?: (ctx: Alter_groupContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_group_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_group_action?: (ctx: Alter_group_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_group_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_group_action?: (ctx: Alter_group_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_tablespace`.
	 * @param ctx the parse tree
	 */
	enterAlter_tablespace?: (ctx: Alter_tablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_tablespace`.
	 * @param ctx the parse tree
	 */
	exitAlter_tablespace?: (ctx: Alter_tablespaceContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_owner`.
	 * @param ctx the parse tree
	 */
	enterAlter_owner?: (ctx: Alter_ownerContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_owner`.
	 * @param ctx the parse tree
	 */
	exitAlter_owner?: (ctx: Alter_ownerContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_tablespace_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_tablespace_action?: (ctx: Alter_tablespace_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_tablespace_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_tablespace_action?: (ctx: Alter_tablespace_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_statistics`.
	 * @param ctx the parse tree
	 */
	enterAlter_statistics?: (ctx: Alter_statisticsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_statistics`.
	 * @param ctx the parse tree
	 */
	exitAlter_statistics?: (ctx: Alter_statisticsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_foreign_data_wrapper`.
	 * @param ctx the parse tree
	 */
	enterAlter_foreign_data_wrapper?: (ctx: Alter_foreign_data_wrapperContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_foreign_data_wrapper`.
	 * @param ctx the parse tree
	 */
	exitAlter_foreign_data_wrapper?: (ctx: Alter_foreign_data_wrapperContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_foreign_data_wrapper_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_foreign_data_wrapper_action?: (ctx: Alter_foreign_data_wrapper_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_foreign_data_wrapper_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_foreign_data_wrapper_action?: (ctx: Alter_foreign_data_wrapper_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_operator_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_operator_statement?: (ctx: Alter_operator_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_operator_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_operator_statement?: (ctx: Alter_operator_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_operator_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_operator_action?: (ctx: Alter_operator_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_operator_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_operator_action?: (ctx: Alter_operator_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.operator_set_restrict_join`.
	 * @param ctx the parse tree
	 */
	enterOperator_set_restrict_join?: (ctx: Operator_set_restrict_joinContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.operator_set_restrict_join`.
	 * @param ctx the parse tree
	 */
	exitOperator_set_restrict_join?: (ctx: Operator_set_restrict_joinContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_user_mapping`.
	 * @param ctx the parse tree
	 */
	enterDrop_user_mapping?: (ctx: Drop_user_mappingContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_user_mapping`.
	 * @param ctx the parse tree
	 */
	exitDrop_user_mapping?: (ctx: Drop_user_mappingContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_owned`.
	 * @param ctx the parse tree
	 */
	enterDrop_owned?: (ctx: Drop_ownedContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_owned`.
	 * @param ctx the parse tree
	 */
	exitDrop_owned?: (ctx: Drop_ownedContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_operator_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_operator_statement?: (ctx: Drop_operator_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_operator_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_operator_statement?: (ctx: Drop_operator_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.target_operator`.
	 * @param ctx the parse tree
	 */
	enterTarget_operator?: (ctx: Target_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.target_operator`.
	 * @param ctx the parse tree
	 */
	exitTarget_operator?: (ctx: Target_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.domain_constraint`.
	 * @param ctx the parse tree
	 */
	enterDomain_constraint?: (ctx: Domain_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.domain_constraint`.
	 * @param ctx the parse tree
	 */
	exitDomain_constraint?: (ctx: Domain_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_transform_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_transform_statement?: (ctx: Create_transform_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_transform_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_transform_statement?: (ctx: Create_transform_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_access_method`.
	 * @param ctx the parse tree
	 */
	enterCreate_access_method?: (ctx: Create_access_methodContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_access_method`.
	 * @param ctx the parse tree
	 */
	exitCreate_access_method?: (ctx: Create_access_methodContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_user_or_role`.
	 * @param ctx the parse tree
	 */
	enterCreate_user_or_role?: (ctx: Create_user_or_roleContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_user_or_role`.
	 * @param ctx the parse tree
	 */
	exitCreate_user_or_role?: (ctx: Create_user_or_roleContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.user_or_role_option`.
	 * @param ctx the parse tree
	 */
	enterUser_or_role_option?: (ctx: User_or_role_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.user_or_role_option`.
	 * @param ctx the parse tree
	 */
	exitUser_or_role_option?: (ctx: User_or_role_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.user_or_role_option_for_alter`.
	 * @param ctx the parse tree
	 */
	enterUser_or_role_option_for_alter?: (ctx: User_or_role_option_for_alterContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.user_or_role_option_for_alter`.
	 * @param ctx the parse tree
	 */
	exitUser_or_role_option_for_alter?: (ctx: User_or_role_option_for_alterContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.user_or_role_or_group_common_option`.
	 * @param ctx the parse tree
	 */
	enterUser_or_role_or_group_common_option?: (ctx: User_or_role_or_group_common_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.user_or_role_or_group_common_option`.
	 * @param ctx the parse tree
	 */
	exitUser_or_role_or_group_common_option?: (ctx: User_or_role_or_group_common_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.user_or_role_common_option`.
	 * @param ctx the parse tree
	 */
	enterUser_or_role_common_option?: (ctx: User_or_role_common_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.user_or_role_common_option`.
	 * @param ctx the parse tree
	 */
	exitUser_or_role_common_option?: (ctx: User_or_role_common_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.user_or_role_or_group_option_for_create`.
	 * @param ctx the parse tree
	 */
	enterUser_or_role_or_group_option_for_create?: (ctx: User_or_role_or_group_option_for_createContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.user_or_role_or_group_option_for_create`.
	 * @param ctx the parse tree
	 */
	exitUser_or_role_or_group_option_for_create?: (ctx: User_or_role_or_group_option_for_createContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_group`.
	 * @param ctx the parse tree
	 */
	enterCreate_group?: (ctx: Create_groupContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_group`.
	 * @param ctx the parse tree
	 */
	exitCreate_group?: (ctx: Create_groupContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.group_option`.
	 * @param ctx the parse tree
	 */
	enterGroup_option?: (ctx: Group_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.group_option`.
	 * @param ctx the parse tree
	 */
	exitGroup_option?: (ctx: Group_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_tablespace`.
	 * @param ctx the parse tree
	 */
	enterCreate_tablespace?: (ctx: Create_tablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_tablespace`.
	 * @param ctx the parse tree
	 */
	exitCreate_tablespace?: (ctx: Create_tablespaceContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_statistics`.
	 * @param ctx the parse tree
	 */
	enterCreate_statistics?: (ctx: Create_statisticsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_statistics`.
	 * @param ctx the parse tree
	 */
	exitCreate_statistics?: (ctx: Create_statisticsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_foreign_data_wrapper`.
	 * @param ctx the parse tree
	 */
	enterCreate_foreign_data_wrapper?: (ctx: Create_foreign_data_wrapperContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_foreign_data_wrapper`.
	 * @param ctx the parse tree
	 */
	exitCreate_foreign_data_wrapper?: (ctx: Create_foreign_data_wrapperContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.option_without_equal`.
	 * @param ctx the parse tree
	 */
	enterOption_without_equal?: (ctx: Option_without_equalContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.option_without_equal`.
	 * @param ctx the parse tree
	 */
	exitOption_without_equal?: (ctx: Option_without_equalContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_operator_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_operator_statement?: (ctx: Create_operator_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_operator_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_operator_statement?: (ctx: Create_operator_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.operator_name`.
	 * @param ctx the parse tree
	 */
	enterOperator_name?: (ctx: Operator_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.operator_name`.
	 * @param ctx the parse tree
	 */
	exitOperator_name?: (ctx: Operator_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.operator_option`.
	 * @param ctx the parse tree
	 */
	enterOperator_option?: (ctx: Operator_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.operator_option`.
	 * @param ctx the parse tree
	 */
	exitOperator_option?: (ctx: Operator_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_aggregate_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_aggregate_statement?: (ctx: Create_aggregate_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_aggregate_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_aggregate_statement?: (ctx: Create_aggregate_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.aggregate_param`.
	 * @param ctx the parse tree
	 */
	enterAggregate_param?: (ctx: Aggregate_paramContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.aggregate_param`.
	 * @param ctx the parse tree
	 */
	exitAggregate_param?: (ctx: Aggregate_paramContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.set_statement`.
	 * @param ctx the parse tree
	 */
	enterSet_statement?: (ctx: Set_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.set_statement`.
	 * @param ctx the parse tree
	 */
	exitSet_statement?: (ctx: Set_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.set_action`.
	 * @param ctx the parse tree
	 */
	enterSet_action?: (ctx: Set_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.set_action`.
	 * @param ctx the parse tree
	 */
	exitSet_action?: (ctx: Set_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.session_local_option`.
	 * @param ctx the parse tree
	 */
	enterSession_local_option?: (ctx: Session_local_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.session_local_option`.
	 * @param ctx the parse tree
	 */
	exitSession_local_option?: (ctx: Session_local_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.set_statement_value`.
	 * @param ctx the parse tree
	 */
	enterSet_statement_value?: (ctx: Set_statement_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.set_statement_value`.
	 * @param ctx the parse tree
	 */
	exitSet_statement_value?: (ctx: Set_statement_valueContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_rewrite_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_rewrite_statement?: (ctx: Create_rewrite_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_rewrite_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_rewrite_statement?: (ctx: Create_rewrite_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.rewrite_command`.
	 * @param ctx the parse tree
	 */
	enterRewrite_command?: (ctx: Rewrite_commandContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.rewrite_command`.
	 * @param ctx the parse tree
	 */
	exitRewrite_command?: (ctx: Rewrite_commandContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_trigger_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_trigger_statement?: (ctx: Create_trigger_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_trigger_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_trigger_statement?: (ctx: Create_trigger_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.trigger_referencing`.
	 * @param ctx the parse tree
	 */
	enterTrigger_referencing?: (ctx: Trigger_referencingContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.trigger_referencing`.
	 * @param ctx the parse tree
	 */
	exitTrigger_referencing?: (ctx: Trigger_referencingContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.when_trigger`.
	 * @param ctx the parse tree
	 */
	enterWhen_trigger?: (ctx: When_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.when_trigger`.
	 * @param ctx the parse tree
	 */
	exitWhen_trigger?: (ctx: When_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.rule_common`.
	 * @param ctx the parse tree
	 */
	enterRule_common?: (ctx: Rule_commonContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.rule_common`.
	 * @param ctx the parse tree
	 */
	exitRule_common?: (ctx: Rule_commonContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.rule_member_object`.
	 * @param ctx the parse tree
	 */
	enterRule_member_object?: (ctx: Rule_member_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.rule_member_object`.
	 * @param ctx the parse tree
	 */
	exitRule_member_object?: (ctx: Rule_member_objectContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.columns_permissions`.
	 * @param ctx the parse tree
	 */
	enterColumns_permissions?: (ctx: Columns_permissionsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.columns_permissions`.
	 * @param ctx the parse tree
	 */
	exitColumns_permissions?: (ctx: Columns_permissionsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_column_privileges`.
	 * @param ctx the parse tree
	 */
	enterTable_column_privileges?: (ctx: Table_column_privilegesContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_column_privileges`.
	 * @param ctx the parse tree
	 */
	exitTable_column_privileges?: (ctx: Table_column_privilegesContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.permissions`.
	 * @param ctx the parse tree
	 */
	enterPermissions?: (ctx: PermissionsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.permissions`.
	 * @param ctx the parse tree
	 */
	exitPermissions?: (ctx: PermissionsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.permission`.
	 * @param ctx the parse tree
	 */
	enterPermission?: (ctx: PermissionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.permission`.
	 * @param ctx the parse tree
	 */
	exitPermission?: (ctx: PermissionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.other_rules`.
	 * @param ctx the parse tree
	 */
	enterOther_rules?: (ctx: Other_rulesContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.other_rules`.
	 * @param ctx the parse tree
	 */
	exitOther_rules?: (ctx: Other_rulesContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.grant_to_rule`.
	 * @param ctx the parse tree
	 */
	enterGrant_to_rule?: (ctx: Grant_to_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.grant_to_rule`.
	 * @param ctx the parse tree
	 */
	exitGrant_to_rule?: (ctx: Grant_to_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.revoke_from_cascade_restrict`.
	 * @param ctx the parse tree
	 */
	enterRevoke_from_cascade_restrict?: (ctx: Revoke_from_cascade_restrictContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.revoke_from_cascade_restrict`.
	 * @param ctx the parse tree
	 */
	exitRevoke_from_cascade_restrict?: (ctx: Revoke_from_cascade_restrictContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.roles_names`.
	 * @param ctx the parse tree
	 */
	enterRoles_names?: (ctx: Roles_namesContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.roles_names`.
	 * @param ctx the parse tree
	 */
	exitRoles_names?: (ctx: Roles_namesContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.role_name_with_group`.
	 * @param ctx the parse tree
	 */
	enterRole_name_with_group?: (ctx: Role_name_with_groupContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.role_name_with_group`.
	 * @param ctx the parse tree
	 */
	exitRole_name_with_group?: (ctx: Role_name_with_groupContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.comment_on_statement`.
	 * @param ctx the parse tree
	 */
	enterComment_on_statement?: (ctx: Comment_on_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.comment_on_statement`.
	 * @param ctx the parse tree
	 */
	exitComment_on_statement?: (ctx: Comment_on_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.security_label`.
	 * @param ctx the parse tree
	 */
	enterSecurity_label?: (ctx: Security_labelContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.security_label`.
	 * @param ctx the parse tree
	 */
	exitSecurity_label?: (ctx: Security_labelContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.comment_member_object`.
	 * @param ctx the parse tree
	 */
	enterComment_member_object?: (ctx: Comment_member_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.comment_member_object`.
	 * @param ctx the parse tree
	 */
	exitComment_member_object?: (ctx: Comment_member_objectContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.label_member_object`.
	 * @param ctx the parse tree
	 */
	enterLabel_member_object?: (ctx: Label_member_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.label_member_object`.
	 * @param ctx the parse tree
	 */
	exitLabel_member_object?: (ctx: Label_member_objectContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_function_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_function_statement?: (ctx: Create_function_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_function_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_function_statement?: (ctx: Create_function_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_funct_params`.
	 * @param ctx the parse tree
	 */
	enterCreate_funct_params?: (ctx: Create_funct_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_funct_params`.
	 * @param ctx the parse tree
	 */
	exitCreate_funct_params?: (ctx: Create_funct_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.transform_for_type`.
	 * @param ctx the parse tree
	 */
	enterTransform_for_type?: (ctx: Transform_for_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.transform_for_type`.
	 * @param ctx the parse tree
	 */
	exitTransform_for_type?: (ctx: Transform_for_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_ret_table`.
	 * @param ctx the parse tree
	 */
	enterFunction_ret_table?: (ctx: Function_ret_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_ret_table`.
	 * @param ctx the parse tree
	 */
	exitFunction_ret_table?: (ctx: Function_ret_tableContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_column_name_type`.
	 * @param ctx the parse tree
	 */
	enterFunction_column_name_type?: (ctx: Function_column_name_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_column_name_type`.
	 * @param ctx the parse tree
	 */
	exitFunction_column_name_type?: (ctx: Function_column_name_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameters?: (ctx: Function_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameters?: (ctx: Function_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_args`.
	 * @param ctx the parse tree
	 */
	enterFunction_args?: (ctx: Function_argsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_args`.
	 * @param ctx the parse tree
	 */
	exitFunction_args?: (ctx: Function_argsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.agg_order`.
	 * @param ctx the parse tree
	 */
	enterAgg_order?: (ctx: Agg_orderContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.agg_order`.
	 * @param ctx the parse tree
	 */
	exitAgg_order?: (ctx: Agg_orderContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.character_string`.
	 * @param ctx the parse tree
	 */
	enterCharacter_string?: (ctx: Character_stringContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.character_string`.
	 * @param ctx the parse tree
	 */
	exitCharacter_string?: (ctx: Character_stringContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_arguments`.
	 * @param ctx the parse tree
	 */
	enterFunction_arguments?: (ctx: Function_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_arguments`.
	 * @param ctx the parse tree
	 */
	exitFunction_arguments?: (ctx: Function_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.argmode`.
	 * @param ctx the parse tree
	 */
	enterArgmode?: (ctx: ArgmodeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.argmode`.
	 * @param ctx the parse tree
	 */
	exitArgmode?: (ctx: ArgmodeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_sequence_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_sequence_statement?: (ctx: Create_sequence_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_sequence_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_sequence_statement?: (ctx: Create_sequence_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.sequence_body`.
	 * @param ctx the parse tree
	 */
	enterSequence_body?: (ctx: Sequence_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.sequence_body`.
	 * @param ctx the parse tree
	 */
	exitSequence_body?: (ctx: Sequence_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.signed_number_literal`.
	 * @param ctx the parse tree
	 */
	enterSigned_number_literal?: (ctx: Signed_number_literalContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.signed_number_literal`.
	 * @param ctx the parse tree
	 */
	exitSigned_number_literal?: (ctx: Signed_number_literalContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.signed_numerical_literal`.
	 * @param ctx the parse tree
	 */
	enterSigned_numerical_literal?: (ctx: Signed_numerical_literalContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.signed_numerical_literal`.
	 * @param ctx the parse tree
	 */
	exitSigned_numerical_literal?: (ctx: Signed_numerical_literalContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.sign`.
	 * @param ctx the parse tree
	 */
	enterSign?: (ctx: SignContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.sign`.
	 * @param ctx the parse tree
	 */
	exitSign?: (ctx: SignContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_schema_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_schema_statement?: (ctx: Create_schema_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_schema_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_schema_statement?: (ctx: Create_schema_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_policy_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_policy_statement?: (ctx: Create_policy_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_policy_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_policy_statement?: (ctx: Create_policy_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_policy_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_policy_statement?: (ctx: Alter_policy_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_policy_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_policy_statement?: (ctx: Alter_policy_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_policy_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_policy_statement?: (ctx: Drop_policy_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_policy_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_policy_statement?: (ctx: Drop_policy_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_subscription_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_subscription_statement?: (ctx: Create_subscription_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_subscription_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_subscription_statement?: (ctx: Create_subscription_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_subscription_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_subscription_statement?: (ctx: Alter_subscription_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_subscription_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_subscription_statement?: (ctx: Alter_subscription_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_subscription_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_subscription_action?: (ctx: Alter_subscription_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_subscription_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_subscription_action?: (ctx: Alter_subscription_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_cast_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_cast_statement?: (ctx: Create_cast_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_cast_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_cast_statement?: (ctx: Create_cast_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_cast_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_cast_statement?: (ctx: Drop_cast_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_cast_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_cast_statement?: (ctx: Drop_cast_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_operator_family_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_operator_family_statement?: (ctx: Create_operator_family_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_operator_family_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_operator_family_statement?: (ctx: Create_operator_family_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_operator_family_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_operator_family_statement?: (ctx: Alter_operator_family_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_operator_family_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_operator_family_statement?: (ctx: Alter_operator_family_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.operator_family_action`.
	 * @param ctx the parse tree
	 */
	enterOperator_family_action?: (ctx: Operator_family_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.operator_family_action`.
	 * @param ctx the parse tree
	 */
	exitOperator_family_action?: (ctx: Operator_family_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.add_operator_to_family`.
	 * @param ctx the parse tree
	 */
	enterAdd_operator_to_family?: (ctx: Add_operator_to_familyContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.add_operator_to_family`.
	 * @param ctx the parse tree
	 */
	exitAdd_operator_to_family?: (ctx: Add_operator_to_familyContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_operator_from_family`.
	 * @param ctx the parse tree
	 */
	enterDrop_operator_from_family?: (ctx: Drop_operator_from_familyContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_operator_from_family`.
	 * @param ctx the parse tree
	 */
	exitDrop_operator_from_family?: (ctx: Drop_operator_from_familyContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_operator_family_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_operator_family_statement?: (ctx: Drop_operator_family_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_operator_family_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_operator_family_statement?: (ctx: Drop_operator_family_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_operator_class_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_operator_class_statement?: (ctx: Create_operator_class_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_operator_class_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_operator_class_statement?: (ctx: Create_operator_class_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_operator_class_option`.
	 * @param ctx the parse tree
	 */
	enterCreate_operator_class_option?: (ctx: Create_operator_class_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_operator_class_option`.
	 * @param ctx the parse tree
	 */
	exitCreate_operator_class_option?: (ctx: Create_operator_class_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_operator_class_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_operator_class_statement?: (ctx: Alter_operator_class_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_operator_class_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_operator_class_statement?: (ctx: Alter_operator_class_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_operator_class_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_operator_class_statement?: (ctx: Drop_operator_class_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_operator_class_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_operator_class_statement?: (ctx: Drop_operator_class_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_conversion_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_conversion_statement?: (ctx: Create_conversion_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_conversion_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_conversion_statement?: (ctx: Create_conversion_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_conversion_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_conversion_statement?: (ctx: Alter_conversion_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_conversion_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_conversion_statement?: (ctx: Alter_conversion_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_publication_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_publication_statement?: (ctx: Create_publication_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_publication_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_publication_statement?: (ctx: Create_publication_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_publication_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_publication_statement?: (ctx: Alter_publication_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_publication_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_publication_statement?: (ctx: Alter_publication_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_publication_action`.
	 * @param ctx the parse tree
	 */
	enterAlter_publication_action?: (ctx: Alter_publication_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_publication_action`.
	 * @param ctx the parse tree
	 */
	exitAlter_publication_action?: (ctx: Alter_publication_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.only_table_multiply`.
	 * @param ctx the parse tree
	 */
	enterOnly_table_multiply?: (ctx: Only_table_multiplyContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.only_table_multiply`.
	 * @param ctx the parse tree
	 */
	exitOnly_table_multiply?: (ctx: Only_table_multiplyContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_trigger_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_trigger_statement?: (ctx: Alter_trigger_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_trigger_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_trigger_statement?: (ctx: Alter_trigger_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alter_rule_statement`.
	 * @param ctx the parse tree
	 */
	enterAlter_rule_statement?: (ctx: Alter_rule_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alter_rule_statement`.
	 * @param ctx the parse tree
	 */
	exitAlter_rule_statement?: (ctx: Alter_rule_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.copy_statement`.
	 * @param ctx the parse tree
	 */
	enterCopy_statement?: (ctx: Copy_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.copy_statement`.
	 * @param ctx the parse tree
	 */
	exitCopy_statement?: (ctx: Copy_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.copy_from_statement`.
	 * @param ctx the parse tree
	 */
	enterCopy_from_statement?: (ctx: Copy_from_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.copy_from_statement`.
	 * @param ctx the parse tree
	 */
	exitCopy_from_statement?: (ctx: Copy_from_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.copy_to_statement`.
	 * @param ctx the parse tree
	 */
	enterCopy_to_statement?: (ctx: Copy_to_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.copy_to_statement`.
	 * @param ctx the parse tree
	 */
	exitCopy_to_statement?: (ctx: Copy_to_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.copy_option_list`.
	 * @param ctx the parse tree
	 */
	enterCopy_option_list?: (ctx: Copy_option_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.copy_option_list`.
	 * @param ctx the parse tree
	 */
	exitCopy_option_list?: (ctx: Copy_option_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.copy_option`.
	 * @param ctx the parse tree
	 */
	enterCopy_option?: (ctx: Copy_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.copy_option`.
	 * @param ctx the parse tree
	 */
	exitCopy_option?: (ctx: Copy_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_view_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_view_statement?: (ctx: Create_view_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_view_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_view_statement?: (ctx: Create_view_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.if_exists`.
	 * @param ctx the parse tree
	 */
	enterIf_exists?: (ctx: If_existsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.if_exists`.
	 * @param ctx the parse tree
	 */
	exitIf_exists?: (ctx: If_existsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.if_not_exists`.
	 * @param ctx the parse tree
	 */
	enterIf_not_exists?: (ctx: If_not_existsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.if_not_exists`.
	 * @param ctx the parse tree
	 */
	exitIf_not_exists?: (ctx: If_not_existsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.view_columns`.
	 * @param ctx the parse tree
	 */
	enterView_columns?: (ctx: View_columnsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.view_columns`.
	 * @param ctx the parse tree
	 */
	exitView_columns?: (ctx: View_columnsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.with_check_option`.
	 * @param ctx the parse tree
	 */
	enterWith_check_option?: (ctx: With_check_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.with_check_option`.
	 * @param ctx the parse tree
	 */
	exitWith_check_option?: (ctx: With_check_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_table_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_statement?: (ctx: Create_table_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_table_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_statement?: (ctx: Create_table_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_table_as_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_table_as_statement?: (ctx: Create_table_as_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_table_as_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_table_as_statement?: (ctx: Create_table_as_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.create_foreign_table_statement`.
	 * @param ctx the parse tree
	 */
	enterCreate_foreign_table_statement?: (ctx: Create_foreign_table_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.create_foreign_table_statement`.
	 * @param ctx the parse tree
	 */
	exitCreate_foreign_table_statement?: (ctx: Create_foreign_table_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.define_table`.
	 * @param ctx the parse tree
	 */
	enterDefine_table?: (ctx: Define_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.define_table`.
	 * @param ctx the parse tree
	 */
	exitDefine_table?: (ctx: Define_tableContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.define_partition`.
	 * @param ctx the parse tree
	 */
	enterDefine_partition?: (ctx: Define_partitionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.define_partition`.
	 * @param ctx the parse tree
	 */
	exitDefine_partition?: (ctx: Define_partitionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.for_values_bound`.
	 * @param ctx the parse tree
	 */
	enterFor_values_bound?: (ctx: For_values_boundContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.for_values_bound`.
	 * @param ctx the parse tree
	 */
	exitFor_values_bound?: (ctx: For_values_boundContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.partition_bound_spec`.
	 * @param ctx the parse tree
	 */
	enterPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.partition_bound_spec`.
	 * @param ctx the parse tree
	 */
	exitPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.partition_bound_part`.
	 * @param ctx the parse tree
	 */
	enterPartition_bound_part?: (ctx: Partition_bound_partContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.partition_bound_part`.
	 * @param ctx the parse tree
	 */
	exitPartition_bound_part?: (ctx: Partition_bound_partContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.define_columns`.
	 * @param ctx the parse tree
	 */
	enterDefine_columns?: (ctx: Define_columnsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.define_columns`.
	 * @param ctx the parse tree
	 */
	exitDefine_columns?: (ctx: Define_columnsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.define_type`.
	 * @param ctx the parse tree
	 */
	enterDefine_type?: (ctx: Define_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.define_type`.
	 * @param ctx the parse tree
	 */
	exitDefine_type?: (ctx: Define_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.partition_by`.
	 * @param ctx the parse tree
	 */
	enterPartition_by?: (ctx: Partition_byContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.partition_by`.
	 * @param ctx the parse tree
	 */
	exitPartition_by?: (ctx: Partition_byContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.partition_method`.
	 * @param ctx the parse tree
	 */
	enterPartition_method?: (ctx: Partition_methodContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.partition_method`.
	 * @param ctx the parse tree
	 */
	exitPartition_method?: (ctx: Partition_methodContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.partition_column`.
	 * @param ctx the parse tree
	 */
	enterPartition_column?: (ctx: Partition_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.partition_column`.
	 * @param ctx the parse tree
	 */
	exitPartition_column?: (ctx: Partition_columnContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.define_server`.
	 * @param ctx the parse tree
	 */
	enterDefine_server?: (ctx: Define_serverContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.define_server`.
	 * @param ctx the parse tree
	 */
	exitDefine_server?: (ctx: Define_serverContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.define_foreign_options`.
	 * @param ctx the parse tree
	 */
	enterDefine_foreign_options?: (ctx: Define_foreign_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.define_foreign_options`.
	 * @param ctx the parse tree
	 */
	exitDefine_foreign_options?: (ctx: Define_foreign_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.foreign_option`.
	 * @param ctx the parse tree
	 */
	enterForeign_option?: (ctx: Foreign_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.foreign_option`.
	 * @param ctx the parse tree
	 */
	exitForeign_option?: (ctx: Foreign_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.foreign_option_name`.
	 * @param ctx the parse tree
	 */
	enterForeign_option_name?: (ctx: Foreign_option_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.foreign_option_name`.
	 * @param ctx the parse tree
	 */
	exitForeign_option_name?: (ctx: Foreign_option_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.list_of_type_column_def`.
	 * @param ctx the parse tree
	 */
	enterList_of_type_column_def?: (ctx: List_of_type_column_defContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.list_of_type_column_def`.
	 * @param ctx the parse tree
	 */
	exitList_of_type_column_def?: (ctx: List_of_type_column_defContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_column_def`.
	 * @param ctx the parse tree
	 */
	enterTable_column_def?: (ctx: Table_column_defContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_column_def`.
	 * @param ctx the parse tree
	 */
	exitTable_column_def?: (ctx: Table_column_defContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_of_type_column_def`.
	 * @param ctx the parse tree
	 */
	enterTable_of_type_column_def?: (ctx: Table_of_type_column_defContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_of_type_column_def`.
	 * @param ctx the parse tree
	 */
	exitTable_of_type_column_def?: (ctx: Table_of_type_column_defContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_column_definition`.
	 * @param ctx the parse tree
	 */
	enterTable_column_definition?: (ctx: Table_column_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_column_definition`.
	 * @param ctx the parse tree
	 */
	exitTable_column_definition?: (ctx: Table_column_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.like_option`.
	 * @param ctx the parse tree
	 */
	enterLike_option?: (ctx: Like_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.like_option`.
	 * @param ctx the parse tree
	 */
	exitLike_option?: (ctx: Like_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.constraint_common`.
	 * @param ctx the parse tree
	 */
	enterConstraint_common?: (ctx: Constraint_commonContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.constraint_common`.
	 * @param ctx the parse tree
	 */
	exitConstraint_common?: (ctx: Constraint_commonContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.constr_body`.
	 * @param ctx the parse tree
	 */
	enterConstr_body?: (ctx: Constr_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.constr_body`.
	 * @param ctx the parse tree
	 */
	exitConstr_body?: (ctx: Constr_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.all_op`.
	 * @param ctx the parse tree
	 */
	enterAll_op?: (ctx: All_opContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.all_op`.
	 * @param ctx the parse tree
	 */
	exitAll_op?: (ctx: All_opContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.all_simple_op`.
	 * @param ctx the parse tree
	 */
	enterAll_simple_op?: (ctx: All_simple_opContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.all_simple_op`.
	 * @param ctx the parse tree
	 */
	exitAll_simple_op?: (ctx: All_simple_opContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.op_chars`.
	 * @param ctx the parse tree
	 */
	enterOp_chars?: (ctx: Op_charsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.op_chars`.
	 * @param ctx the parse tree
	 */
	exitOp_chars?: (ctx: Op_charsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.index_parameters`.
	 * @param ctx the parse tree
	 */
	enterIndex_parameters?: (ctx: Index_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.index_parameters`.
	 * @param ctx the parse tree
	 */
	exitIndex_parameters?: (ctx: Index_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.names_in_parens`.
	 * @param ctx the parse tree
	 */
	enterNames_in_parens?: (ctx: Names_in_parensContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.names_in_parens`.
	 * @param ctx the parse tree
	 */
	exitNames_in_parens?: (ctx: Names_in_parensContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.names_references`.
	 * @param ctx the parse tree
	 */
	enterNames_references?: (ctx: Names_referencesContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.names_references`.
	 * @param ctx the parse tree
	 */
	exitNames_references?: (ctx: Names_referencesContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.storage_parameter`.
	 * @param ctx the parse tree
	 */
	enterStorage_parameter?: (ctx: Storage_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.storage_parameter`.
	 * @param ctx the parse tree
	 */
	exitStorage_parameter?: (ctx: Storage_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.storage_parameter_option`.
	 * @param ctx the parse tree
	 */
	enterStorage_parameter_option?: (ctx: Storage_parameter_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.storage_parameter_option`.
	 * @param ctx the parse tree
	 */
	exitStorage_parameter_option?: (ctx: Storage_parameter_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.storage_parameter_name`.
	 * @param ctx the parse tree
	 */
	enterStorage_parameter_name?: (ctx: Storage_parameter_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.storage_parameter_name`.
	 * @param ctx the parse tree
	 */
	exitStorage_parameter_name?: (ctx: Storage_parameter_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.with_storage_parameter`.
	 * @param ctx the parse tree
	 */
	enterWith_storage_parameter?: (ctx: With_storage_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.with_storage_parameter`.
	 * @param ctx the parse tree
	 */
	exitWith_storage_parameter?: (ctx: With_storage_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.storage_parameter_oid`.
	 * @param ctx the parse tree
	 */
	enterStorage_parameter_oid?: (ctx: Storage_parameter_oidContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.storage_parameter_oid`.
	 * @param ctx the parse tree
	 */
	exitStorage_parameter_oid?: (ctx: Storage_parameter_oidContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.on_commit`.
	 * @param ctx the parse tree
	 */
	enterOn_commit?: (ctx: On_commitContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.on_commit`.
	 * @param ctx the parse tree
	 */
	exitOn_commit?: (ctx: On_commitContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_space`.
	 * @param ctx the parse tree
	 */
	enterTable_space?: (ctx: Table_spaceContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_space`.
	 * @param ctx the parse tree
	 */
	exitTable_space?: (ctx: Table_spaceContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.owner_to`.
	 * @param ctx the parse tree
	 */
	enterOwner_to?: (ctx: Owner_toContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.owner_to`.
	 * @param ctx the parse tree
	 */
	exitOwner_to?: (ctx: Owner_toContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.rename_to`.
	 * @param ctx the parse tree
	 */
	enterRename_to?: (ctx: Rename_toContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.rename_to`.
	 * @param ctx the parse tree
	 */
	exitRename_to?: (ctx: Rename_toContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.set_schema`.
	 * @param ctx the parse tree
	 */
	enterSet_schema?: (ctx: Set_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.set_schema`.
	 * @param ctx the parse tree
	 */
	exitSet_schema?: (ctx: Set_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_column_privilege`.
	 * @param ctx the parse tree
	 */
	enterTable_column_privilege?: (ctx: Table_column_privilegeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_column_privilege`.
	 * @param ctx the parse tree
	 */
	exitTable_column_privilege?: (ctx: Table_column_privilegeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.usage_select_update`.
	 * @param ctx the parse tree
	 */
	enterUsage_select_update?: (ctx: Usage_select_updateContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.usage_select_update`.
	 * @param ctx the parse tree
	 */
	exitUsage_select_update?: (ctx: Usage_select_updateContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.partition_by_columns`.
	 * @param ctx the parse tree
	 */
	enterPartition_by_columns?: (ctx: Partition_by_columnsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.partition_by_columns`.
	 * @param ctx the parse tree
	 */
	exitPartition_by_columns?: (ctx: Partition_by_columnsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.cascade_restrict`.
	 * @param ctx the parse tree
	 */
	enterCascade_restrict?: (ctx: Cascade_restrictContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.cascade_restrict`.
	 * @param ctx the parse tree
	 */
	exitCascade_restrict?: (ctx: Cascade_restrictContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.collate_identifier`.
	 * @param ctx the parse tree
	 */
	enterCollate_identifier?: (ctx: Collate_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.collate_identifier`.
	 * @param ctx the parse tree
	 */
	exitCollate_identifier?: (ctx: Collate_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.indirection_var`.
	 * @param ctx the parse tree
	 */
	enterIndirection_var?: (ctx: Indirection_varContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.indirection_var`.
	 * @param ctx the parse tree
	 */
	exitIndirection_var?: (ctx: Indirection_varContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.dollar_number`.
	 * @param ctx the parse tree
	 */
	enterDollar_number?: (ctx: Dollar_numberContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.dollar_number`.
	 * @param ctx the parse tree
	 */
	exitDollar_number?: (ctx: Dollar_numberContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.indirection_list`.
	 * @param ctx the parse tree
	 */
	enterIndirection_list?: (ctx: Indirection_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.indirection_list`.
	 * @param ctx the parse tree
	 */
	exitIndirection_list?: (ctx: Indirection_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.indirection`.
	 * @param ctx the parse tree
	 */
	enterIndirection?: (ctx: IndirectionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.indirection`.
	 * @param ctx the parse tree
	 */
	exitIndirection?: (ctx: IndirectionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_function_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_function_statement?: (ctx: Drop_function_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_function_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_function_statement?: (ctx: Drop_function_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_trigger_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_trigger_statement?: (ctx: Drop_trigger_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_trigger_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_trigger_statement?: (ctx: Drop_trigger_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_rule_statement`.
	 * @param ctx the parse tree
	 */
	enterDrop_rule_statement?: (ctx: Drop_rule_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_rule_statement`.
	 * @param ctx the parse tree
	 */
	exitDrop_rule_statement?: (ctx: Drop_rule_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.drop_statements`.
	 * @param ctx the parse tree
	 */
	enterDrop_statements?: (ctx: Drop_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.drop_statements`.
	 * @param ctx the parse tree
	 */
	exitDrop_statements?: (ctx: Drop_statementsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.if_exist_names_restrict_cascade`.
	 * @param ctx the parse tree
	 */
	enterIf_exist_names_restrict_cascade?: (ctx: If_exist_names_restrict_cascadeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.if_exist_names_restrict_cascade`.
	 * @param ctx the parse tree
	 */
	exitIf_exist_names_restrict_cascade?: (ctx: If_exist_names_restrict_cascadeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.id_token`.
	 * @param ctx the parse tree
	 */
	enterId_token?: (ctx: Id_tokenContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.id_token`.
	 * @param ctx the parse tree
	 */
	exitId_token?: (ctx: Id_tokenContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.identifier_nontype`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_nontype?: (ctx: Identifier_nontypeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.identifier_nontype`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_nontype?: (ctx: Identifier_nontypeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.col_label`.
	 * @param ctx the parse tree
	 */
	enterCol_label?: (ctx: Col_labelContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.col_label`.
	 * @param ctx the parse tree
	 */
	exitCol_label?: (ctx: Col_labelContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.tokens_nonreserved`.
	 * @param ctx the parse tree
	 */
	enterTokens_nonreserved?: (ctx: Tokens_nonreservedContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.tokens_nonreserved`.
	 * @param ctx the parse tree
	 */
	exitTokens_nonreserved?: (ctx: Tokens_nonreservedContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.tokens_nonreserved_except_function_type`.
	 * @param ctx the parse tree
	 */
	enterTokens_nonreserved_except_function_type?: (ctx: Tokens_nonreserved_except_function_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.tokens_nonreserved_except_function_type`.
	 * @param ctx the parse tree
	 */
	exitTokens_nonreserved_except_function_type?: (ctx: Tokens_nonreserved_except_function_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.tokens_reserved_except_function_type`.
	 * @param ctx the parse tree
	 */
	enterTokens_reserved_except_function_type?: (ctx: Tokens_reserved_except_function_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.tokens_reserved_except_function_type`.
	 * @param ctx the parse tree
	 */
	exitTokens_reserved_except_function_type?: (ctx: Tokens_reserved_except_function_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.tokens_reserved`.
	 * @param ctx the parse tree
	 */
	enterTokens_reserved?: (ctx: Tokens_reservedContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.tokens_reserved`.
	 * @param ctx the parse tree
	 */
	exitTokens_reserved?: (ctx: Tokens_reservedContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.tokens_nonkeyword`.
	 * @param ctx the parse tree
	 */
	enterTokens_nonkeyword?: (ctx: Tokens_nonkeywordContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.tokens_nonkeyword`.
	 * @param ctx the parse tree
	 */
	exitTokens_nonkeyword?: (ctx: Tokens_nonkeywordContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.schema_qualified_name_nontype`.
	 * @param ctx the parse tree
	 */
	enterSchema_qualified_name_nontype?: (ctx: Schema_qualified_name_nontypeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.schema_qualified_name_nontype`.
	 * @param ctx the parse tree
	 */
	exitSchema_qualified_name_nontype?: (ctx: Schema_qualified_name_nontypeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.type_list`.
	 * @param ctx the parse tree
	 */
	enterType_list?: (ctx: Type_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.type_list`.
	 * @param ctx the parse tree
	 */
	exitType_list?: (ctx: Type_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.array_type`.
	 * @param ctx the parse tree
	 */
	enterArray_type?: (ctx: Array_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.array_type`.
	 * @param ctx the parse tree
	 */
	exitArray_type?: (ctx: Array_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.predefined_type`.
	 * @param ctx the parse tree
	 */
	enterPredefined_type?: (ctx: Predefined_typeContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.predefined_type`.
	 * @param ctx the parse tree
	 */
	exitPredefined_type?: (ctx: Predefined_typeContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.interval_field`.
	 * @param ctx the parse tree
	 */
	enterInterval_field?: (ctx: Interval_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.interval_field`.
	 * @param ctx the parse tree
	 */
	exitInterval_field?: (ctx: Interval_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.type_length`.
	 * @param ctx the parse tree
	 */
	enterType_length?: (ctx: Type_lengthContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.type_length`.
	 * @param ctx the parse tree
	 */
	exitType_length?: (ctx: Type_lengthContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.precision_param`.
	 * @param ctx the parse tree
	 */
	enterPrecision_param?: (ctx: Precision_paramContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.precision_param`.
	 * @param ctx the parse tree
	 */
	exitPrecision_param?: (ctx: Precision_paramContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.vex`.
	 * @param ctx the parse tree
	 */
	enterVex?: (ctx: VexContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.vex`.
	 * @param ctx the parse tree
	 */
	exitVex?: (ctx: VexContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.vex_b`.
	 * @param ctx the parse tree
	 */
	enterVex_b?: (ctx: Vex_bContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.vex_b`.
	 * @param ctx the parse tree
	 */
	exitVex_b?: (ctx: Vex_bContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.op`.
	 * @param ctx the parse tree
	 */
	enterOp?: (ctx: OpContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.op`.
	 * @param ctx the parse tree
	 */
	exitOp?: (ctx: OpContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.all_op_ref`.
	 * @param ctx the parse tree
	 */
	enterAll_op_ref?: (ctx: All_op_refContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.all_op_ref`.
	 * @param ctx the parse tree
	 */
	exitAll_op_ref?: (ctx: All_op_refContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.datetime_overlaps`.
	 * @param ctx the parse tree
	 */
	enterDatetime_overlaps?: (ctx: Datetime_overlapsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.datetime_overlaps`.
	 * @param ctx the parse tree
	 */
	exitDatetime_overlaps?: (ctx: Datetime_overlapsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.value_expression_primary`.
	 * @param ctx the parse tree
	 */
	enterValue_expression_primary?: (ctx: Value_expression_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.value_expression_primary`.
	 * @param ctx the parse tree
	 */
	exitValue_expression_primary?: (ctx: Value_expression_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.unsigned_value_specification`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_value_specification?: (ctx: Unsigned_value_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.unsigned_value_specification`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_value_specification?: (ctx: Unsigned_value_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.unsigned_numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_numeric_literal?: (ctx: Unsigned_numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.unsigned_numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_numeric_literal?: (ctx: Unsigned_numeric_literalContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.truth_value`.
	 * @param ctx the parse tree
	 */
	enterTruth_value?: (ctx: Truth_valueContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.truth_value`.
	 * @param ctx the parse tree
	 */
	exitTruth_value?: (ctx: Truth_valueContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?: (ctx: Case_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.cast_specification`.
	 * @param ctx the parse tree
	 */
	enterCast_specification?: (ctx: Cast_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.cast_specification`.
	 * @param ctx the parse tree
	 */
	exitCast_specification?: (ctx: Cast_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.vex_or_named_notation`.
	 * @param ctx the parse tree
	 */
	enterVex_or_named_notation?: (ctx: Vex_or_named_notationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.vex_or_named_notation`.
	 * @param ctx the parse tree
	 */
	exitVex_or_named_notation?: (ctx: Vex_or_named_notationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.pointer`.
	 * @param ctx the parse tree
	 */
	enterPointer?: (ctx: PointerContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.pointer`.
	 * @param ctx the parse tree
	 */
	exitPointer?: (ctx: PointerContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_construct`.
	 * @param ctx the parse tree
	 */
	enterFunction_construct?: (ctx: Function_constructContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_construct`.
	 * @param ctx the parse tree
	 */
	exitFunction_construct?: (ctx: Function_constructContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.extract_function`.
	 * @param ctx the parse tree
	 */
	enterExtract_function?: (ctx: Extract_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.extract_function`.
	 * @param ctx the parse tree
	 */
	exitExtract_function?: (ctx: Extract_functionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.system_function`.
	 * @param ctx the parse tree
	 */
	enterSystem_function?: (ctx: System_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.system_function`.
	 * @param ctx the parse tree
	 */
	exitSystem_function?: (ctx: System_functionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.date_time_function`.
	 * @param ctx the parse tree
	 */
	enterDate_time_function?: (ctx: Date_time_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.date_time_function`.
	 * @param ctx the parse tree
	 */
	exitDate_time_function?: (ctx: Date_time_functionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.string_value_function`.
	 * @param ctx the parse tree
	 */
	enterString_value_function?: (ctx: String_value_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.string_value_function`.
	 * @param ctx the parse tree
	 */
	exitString_value_function?: (ctx: String_value_functionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.xml_function`.
	 * @param ctx the parse tree
	 */
	enterXml_function?: (ctx: Xml_functionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.xml_function`.
	 * @param ctx the parse tree
	 */
	exitXml_function?: (ctx: Xml_functionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.xml_table_column`.
	 * @param ctx the parse tree
	 */
	enterXml_table_column?: (ctx: Xml_table_columnContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.xml_table_column`.
	 * @param ctx the parse tree
	 */
	exitXml_table_column?: (ctx: Xml_table_columnContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.comparison_mod`.
	 * @param ctx the parse tree
	 */
	enterComparison_mod?: (ctx: Comparison_modContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.comparison_mod`.
	 * @param ctx the parse tree
	 */
	exitComparison_mod?: (ctx: Comparison_modContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.filter_clause`.
	 * @param ctx the parse tree
	 */
	enterFilter_clause?: (ctx: Filter_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.filter_clause`.
	 * @param ctx the parse tree
	 */
	exitFilter_clause?: (ctx: Filter_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.window_definition`.
	 * @param ctx the parse tree
	 */
	enterWindow_definition?: (ctx: Window_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.window_definition`.
	 * @param ctx the parse tree
	 */
	exitWindow_definition?: (ctx: Window_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.frame_clause`.
	 * @param ctx the parse tree
	 */
	enterFrame_clause?: (ctx: Frame_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.frame_clause`.
	 * @param ctx the parse tree
	 */
	exitFrame_clause?: (ctx: Frame_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.frame_bound`.
	 * @param ctx the parse tree
	 */
	enterFrame_bound?: (ctx: Frame_boundContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.frame_bound`.
	 * @param ctx the parse tree
	 */
	exitFrame_bound?: (ctx: Frame_boundContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.array_expression`.
	 * @param ctx the parse tree
	 */
	enterArray_expression?: (ctx: Array_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.array_expression`.
	 * @param ctx the parse tree
	 */
	exitArray_expression?: (ctx: Array_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.array_elements`.
	 * @param ctx the parse tree
	 */
	enterArray_elements?: (ctx: Array_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.array_elements`.
	 * @param ctx the parse tree
	 */
	exitArray_elements?: (ctx: Array_elementsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.type_coercion`.
	 * @param ctx the parse tree
	 */
	enterType_coercion?: (ctx: Type_coercionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.type_coercion`.
	 * @param ctx the parse tree
	 */
	exitType_coercion?: (ctx: Type_coercionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.schema_qualified_name`.
	 * @param ctx the parse tree
	 */
	enterSchema_qualified_name?: (ctx: Schema_qualified_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.schema_qualified_name`.
	 * @param ctx the parse tree
	 */
	exitSchema_qualified_name?: (ctx: Schema_qualified_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.set_qualifier`.
	 * @param ctx the parse tree
	 */
	enterSet_qualifier?: (ctx: Set_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.set_qualifier`.
	 * @param ctx the parse tree
	 */
	exitSet_qualifier?: (ctx: Set_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.table_subquery`.
	 * @param ctx the parse tree
	 */
	enterTable_subquery?: (ctx: Table_subqueryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.table_subquery`.
	 * @param ctx the parse tree
	 */
	exitTable_subquery?: (ctx: Table_subqueryContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	enterSelect_stmt?: (ctx: Select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	exitSelect_stmt?: (ctx: Select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.after_ops`.
	 * @param ctx the parse tree
	 */
	enterAfter_ops?: (ctx: After_opsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.after_ops`.
	 * @param ctx the parse tree
	 */
	exitAfter_ops?: (ctx: After_opsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.select_stmt_no_parens`.
	 * @param ctx the parse tree
	 */
	enterSelect_stmt_no_parens?: (ctx: Select_stmt_no_parensContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.select_stmt_no_parens`.
	 * @param ctx the parse tree
	 */
	exitSelect_stmt_no_parens?: (ctx: Select_stmt_no_parensContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.with_clause`.
	 * @param ctx the parse tree
	 */
	enterWith_clause?: (ctx: With_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.with_clause`.
	 * @param ctx the parse tree
	 */
	exitWith_clause?: (ctx: With_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.with_query`.
	 * @param ctx the parse tree
	 */
	enterWith_query?: (ctx: With_queryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.with_query`.
	 * @param ctx the parse tree
	 */
	exitWith_query?: (ctx: With_queryContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.select_ops`.
	 * @param ctx the parse tree
	 */
	enterSelect_ops?: (ctx: Select_opsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.select_ops`.
	 * @param ctx the parse tree
	 */
	exitSelect_ops?: (ctx: Select_opsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.select_ops_no_parens`.
	 * @param ctx the parse tree
	 */
	enterSelect_ops_no_parens?: (ctx: Select_ops_no_parensContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.select_ops_no_parens`.
	 * @param ctx the parse tree
	 */
	exitSelect_ops_no_parens?: (ctx: Select_ops_no_parensContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.select_primary`.
	 * @param ctx the parse tree
	 */
	enterSelect_primary?: (ctx: Select_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.select_primary`.
	 * @param ctx the parse tree
	 */
	exitSelect_primary?: (ctx: Select_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.select_list`.
	 * @param ctx the parse tree
	 */
	enterSelect_list?: (ctx: Select_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.select_list`.
	 * @param ctx the parse tree
	 */
	exitSelect_list?: (ctx: Select_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.select_sublist`.
	 * @param ctx the parse tree
	 */
	enterSelect_sublist?: (ctx: Select_sublistContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.select_sublist`.
	 * @param ctx the parse tree
	 */
	exitSelect_sublist?: (ctx: Select_sublistContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.into_table`.
	 * @param ctx the parse tree
	 */
	enterInto_table?: (ctx: Into_tableContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.into_table`.
	 * @param ctx the parse tree
	 */
	exitInto_table?: (ctx: Into_tableContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.from_item`.
	 * @param ctx the parse tree
	 */
	enterFrom_item?: (ctx: From_itemContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.from_item`.
	 * @param ctx the parse tree
	 */
	exitFrom_item?: (ctx: From_itemContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.from_primary`.
	 * @param ctx the parse tree
	 */
	enterFrom_primary?: (ctx: From_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.from_primary`.
	 * @param ctx the parse tree
	 */
	exitFrom_primary?: (ctx: From_primaryContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.alias_clause`.
	 * @param ctx the parse tree
	 */
	enterAlias_clause?: (ctx: Alias_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.alias_clause`.
	 * @param ctx the parse tree
	 */
	exitAlias_clause?: (ctx: Alias_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.from_function_column_def`.
	 * @param ctx the parse tree
	 */
	enterFrom_function_column_def?: (ctx: From_function_column_defContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.from_function_column_def`.
	 * @param ctx the parse tree
	 */
	exitFrom_function_column_def?: (ctx: From_function_column_defContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	enterGroupby_clause?: (ctx: Groupby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	exitGroupby_clause?: (ctx: Groupby_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.grouping_element_list`.
	 * @param ctx the parse tree
	 */
	enterGrouping_element_list?: (ctx: Grouping_element_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.grouping_element_list`.
	 * @param ctx the parse tree
	 */
	exitGrouping_element_list?: (ctx: Grouping_element_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.grouping_element`.
	 * @param ctx the parse tree
	 */
	enterGrouping_element?: (ctx: Grouping_elementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.grouping_element`.
	 * @param ctx the parse tree
	 */
	exitGrouping_element?: (ctx: Grouping_elementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.values_stmt`.
	 * @param ctx the parse tree
	 */
	enterValues_stmt?: (ctx: Values_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.values_stmt`.
	 * @param ctx the parse tree
	 */
	exitValues_stmt?: (ctx: Values_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.values_values`.
	 * @param ctx the parse tree
	 */
	enterValues_values?: (ctx: Values_valuesContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.values_values`.
	 * @param ctx the parse tree
	 */
	exitValues_values?: (ctx: Values_valuesContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	enterOrderby_clause?: (ctx: Orderby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	exitOrderby_clause?: (ctx: Orderby_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.sort_specifier_list`.
	 * @param ctx the parse tree
	 */
	enterSort_specifier_list?: (ctx: Sort_specifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.sort_specifier_list`.
	 * @param ctx the parse tree
	 */
	exitSort_specifier_list?: (ctx: Sort_specifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.sort_specifier`.
	 * @param ctx the parse tree
	 */
	enterSort_specifier?: (ctx: Sort_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.sort_specifier`.
	 * @param ctx the parse tree
	 */
	exitSort_specifier?: (ctx: Sort_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.order_specification`.
	 * @param ctx the parse tree
	 */
	enterOrder_specification?: (ctx: Order_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.order_specification`.
	 * @param ctx the parse tree
	 */
	exitOrder_specification?: (ctx: Order_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.null_ordering`.
	 * @param ctx the parse tree
	 */
	enterNull_ordering?: (ctx: Null_orderingContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.null_ordering`.
	 * @param ctx the parse tree
	 */
	exitNull_ordering?: (ctx: Null_orderingContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.insert_stmt_for_psql`.
	 * @param ctx the parse tree
	 */
	enterInsert_stmt_for_psql?: (ctx: Insert_stmt_for_psqlContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.insert_stmt_for_psql`.
	 * @param ctx the parse tree
	 */
	exitInsert_stmt_for_psql?: (ctx: Insert_stmt_for_psqlContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.insert_columns`.
	 * @param ctx the parse tree
	 */
	enterInsert_columns?: (ctx: Insert_columnsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.insert_columns`.
	 * @param ctx the parse tree
	 */
	exitInsert_columns?: (ctx: Insert_columnsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.indirection_identifier`.
	 * @param ctx the parse tree
	 */
	enterIndirection_identifier?: (ctx: Indirection_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.indirection_identifier`.
	 * @param ctx the parse tree
	 */
	exitIndirection_identifier?: (ctx: Indirection_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.conflict_object`.
	 * @param ctx the parse tree
	 */
	enterConflict_object?: (ctx: Conflict_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.conflict_object`.
	 * @param ctx the parse tree
	 */
	exitConflict_object?: (ctx: Conflict_objectContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.conflict_action`.
	 * @param ctx the parse tree
	 */
	enterConflict_action?: (ctx: Conflict_actionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.conflict_action`.
	 * @param ctx the parse tree
	 */
	exitConflict_action?: (ctx: Conflict_actionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.delete_stmt_for_psql`.
	 * @param ctx the parse tree
	 */
	enterDelete_stmt_for_psql?: (ctx: Delete_stmt_for_psqlContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.delete_stmt_for_psql`.
	 * @param ctx the parse tree
	 */
	exitDelete_stmt_for_psql?: (ctx: Delete_stmt_for_psqlContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.update_stmt_for_psql`.
	 * @param ctx the parse tree
	 */
	enterUpdate_stmt_for_psql?: (ctx: Update_stmt_for_psqlContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.update_stmt_for_psql`.
	 * @param ctx the parse tree
	 */
	exitUpdate_stmt_for_psql?: (ctx: Update_stmt_for_psqlContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.update_set`.
	 * @param ctx the parse tree
	 */
	enterUpdate_set?: (ctx: Update_setContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.update_set`.
	 * @param ctx the parse tree
	 */
	exitUpdate_set?: (ctx: Update_setContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.notify_stmt`.
	 * @param ctx the parse tree
	 */
	enterNotify_stmt?: (ctx: Notify_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.notify_stmt`.
	 * @param ctx the parse tree
	 */
	exitNotify_stmt?: (ctx: Notify_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.truncate_stmt`.
	 * @param ctx the parse tree
	 */
	enterTruncate_stmt?: (ctx: Truncate_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.truncate_stmt`.
	 * @param ctx the parse tree
	 */
	exitTruncate_stmt?: (ctx: Truncate_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_list?: (ctx: Identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_list?: (ctx: Identifier_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.anonymous_block`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_block?: (ctx: Anonymous_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.anonymous_block`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_block?: (ctx: Anonymous_blockContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.comp_options`.
	 * @param ctx the parse tree
	 */
	enterComp_options?: (ctx: Comp_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.comp_options`.
	 * @param ctx the parse tree
	 */
	exitComp_options?: (ctx: Comp_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_block`.
	 * @param ctx the parse tree
	 */
	enterFunction_block?: (ctx: Function_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_block`.
	 * @param ctx the parse tree
	 */
	exitFunction_block?: (ctx: Function_blockContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.start_label`.
	 * @param ctx the parse tree
	 */
	enterStart_label?: (ctx: Start_labelContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.start_label`.
	 * @param ctx the parse tree
	 */
	exitStart_label?: (ctx: Start_labelContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.declarations`.
	 * @param ctx the parse tree
	 */
	enterDeclarations?: (ctx: DeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.declarations`.
	 * @param ctx the parse tree
	 */
	exitDeclarations?: (ctx: DeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?: (ctx: Type_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.arguments_list`.
	 * @param ctx the parse tree
	 */
	enterArguments_list?: (ctx: Arguments_listContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.arguments_list`.
	 * @param ctx the parse tree
	 */
	exitArguments_list?: (ctx: Arguments_listContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.data_type_dec`.
	 * @param ctx the parse tree
	 */
	enterData_type_dec?: (ctx: Data_type_decContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.data_type_dec`.
	 * @param ctx the parse tree
	 */
	exitData_type_dec?: (ctx: Data_type_decContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.exception_statement`.
	 * @param ctx the parse tree
	 */
	enterException_statement?: (ctx: Exception_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.exception_statement`.
	 * @param ctx the parse tree
	 */
	exitException_statement?: (ctx: Exception_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_statements`.
	 * @param ctx the parse tree
	 */
	enterFunction_statements?: (ctx: Function_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_statements`.
	 * @param ctx the parse tree
	 */
	exitFunction_statements?: (ctx: Function_statementsContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.function_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement?: (ctx: Function_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.function_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement?: (ctx: Function_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.base_statement`.
	 * @param ctx the parse tree
	 */
	enterBase_statement?: (ctx: Base_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.base_statement`.
	 * @param ctx the parse tree
	 */
	exitBase_statement?: (ctx: Base_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.diagnostic_option`.
	 * @param ctx the parse tree
	 */
	enterDiagnostic_option?: (ctx: Diagnostic_optionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.diagnostic_option`.
	 * @param ctx the parse tree
	 */
	exitDiagnostic_option?: (ctx: Diagnostic_optionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.perform_stmt`.
	 * @param ctx the parse tree
	 */
	enterPerform_stmt?: (ctx: Perform_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.perform_stmt`.
	 * @param ctx the parse tree
	 */
	exitPerform_stmt?: (ctx: Perform_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.assign_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssign_stmt?: (ctx: Assign_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.assign_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssign_stmt?: (ctx: Assign_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.execute_stmt`.
	 * @param ctx the parse tree
	 */
	enterExecute_stmt?: (ctx: Execute_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.execute_stmt`.
	 * @param ctx the parse tree
	 */
	exitExecute_stmt?: (ctx: Execute_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.control_statement`.
	 * @param ctx the parse tree
	 */
	enterControl_statement?: (ctx: Control_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.control_statement`.
	 * @param ctx the parse tree
	 */
	exitControl_statement?: (ctx: Control_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.cursor_statement`.
	 * @param ctx the parse tree
	 */
	enterCursor_statement?: (ctx: Cursor_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.cursor_statement`.
	 * @param ctx the parse tree
	 */
	exitCursor_statement?: (ctx: Cursor_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.transaction_statement`.
	 * @param ctx the parse tree
	 */
	enterTransaction_statement?: (ctx: Transaction_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.transaction_statement`.
	 * @param ctx the parse tree
	 */
	exitTransaction_statement?: (ctx: Transaction_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.message_statement`.
	 * @param ctx the parse tree
	 */
	enterMessage_statement?: (ctx: Message_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.message_statement`.
	 * @param ctx the parse tree
	 */
	exitMessage_statement?: (ctx: Message_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.log_level`.
	 * @param ctx the parse tree
	 */
	enterLog_level?: (ctx: Log_levelContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.log_level`.
	 * @param ctx the parse tree
	 */
	exitLog_level?: (ctx: Log_levelContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.raise_using`.
	 * @param ctx the parse tree
	 */
	enterRaise_using?: (ctx: Raise_usingContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.raise_using`.
	 * @param ctx the parse tree
	 */
	exitRaise_using?: (ctx: Raise_usingContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.raise_param`.
	 * @param ctx the parse tree
	 */
	enterRaise_param?: (ctx: Raise_paramContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.raise_param`.
	 * @param ctx the parse tree
	 */
	exitRaise_param?: (ctx: Raise_paramContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?: (ctx: Loop_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?: (ctx: Loop_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.loop_start`.
	 * @param ctx the parse tree
	 */
	enterLoop_start?: (ctx: Loop_startContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.loop_start`.
	 * @param ctx the parse tree
	 */
	exitLoop_start?: (ctx: Loop_startContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.using_vex`.
	 * @param ctx the parse tree
	 */
	enterUsing_vex?: (ctx: Using_vexContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.using_vex`.
	 * @param ctx the parse tree
	 */
	exitUsing_vex?: (ctx: Using_vexContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?: (ctx: Case_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?: (ctx: Case_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PLpgSQLParser.plpgsql_query`.
	 * @param ctx the parse tree
	 */
	enterPlpgsql_query?: (ctx: Plpgsql_queryContext) => void;
	/**
	 * Exit a parse tree produced by `PLpgSQLParser.plpgsql_query`.
	 * @param ctx the parse tree
	 */
	exitPlpgsql_query?: (ctx: Plpgsql_queryContext) => void;
}

