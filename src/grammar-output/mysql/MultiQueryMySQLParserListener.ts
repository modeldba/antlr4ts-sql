// Generated from grammars/mysql/MultiQueryMySQLParser.g4 by ANTLR 4.7.3-SNAPSHOT

/*
 * Copyright (c) 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2.0,
 * as published by the Free Software Foundation.
 *
 * This program is also distributed with certain software (including
 * but not limited to OpenSSL) that is licensed under separate terms, as
 * designated in a particular file or component or in included license
 * documentation. The authors of MySQL hereby grant you an additional
 * permission to link the program and your derivative works with the
 * separately licensed software that they have included with MySQL.
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See
 * the GNU General Public License, version 2.0, for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SimpleExprVariableContext } from "./MultiQueryMySQLParser";
import { SimpleExprColumnRefContext } from "./MultiQueryMySQLParser";
import { SimpleExprRuntimeFunctionContext } from "./MultiQueryMySQLParser";
import { SimpleExprFunctionContext } from "./MultiQueryMySQLParser";
import { SimpleExprCollateContext } from "./MultiQueryMySQLParser";
import { SimpleExprLiteralContext } from "./MultiQueryMySQLParser";
import { SimpleExprParamMarkerContext } from "./MultiQueryMySQLParser";
import { SimpleExprSumContext } from "./MultiQueryMySQLParser";
import { SimpleExprGroupingOperationContext } from "./MultiQueryMySQLParser";
import { SimpleExprWindowingFunctionContext } from "./MultiQueryMySQLParser";
import { SimpleExprConcatContext } from "./MultiQueryMySQLParser";
import { SimpleExprUnaryContext } from "./MultiQueryMySQLParser";
import { SimpleExprNotContext } from "./MultiQueryMySQLParser";
import { SimpleExprListContext } from "./MultiQueryMySQLParser";
import { SimpleExprSubQueryContext } from "./MultiQueryMySQLParser";
import { SimpleExprOdbcContext } from "./MultiQueryMySQLParser";
import { SimpleExprMatchContext } from "./MultiQueryMySQLParser";
import { SimpleExprBinaryContext } from "./MultiQueryMySQLParser";
import { SimpleExprCastContext } from "./MultiQueryMySQLParser";
import { SimpleExprCaseContext } from "./MultiQueryMySQLParser";
import { SimpleExprConvertContext } from "./MultiQueryMySQLParser";
import { SimpleExprConvertUsingContext } from "./MultiQueryMySQLParser";
import { SimpleExprDefaultContext } from "./MultiQueryMySQLParser";
import { SimpleExprValuesContext } from "./MultiQueryMySQLParser";
import { SimpleExprIntervalContext } from "./MultiQueryMySQLParser";
import { PrimaryExprPredicateContext } from "./MultiQueryMySQLParser";
import { PrimaryExprIsNullContext } from "./MultiQueryMySQLParser";
import { PrimaryExprCompareContext } from "./MultiQueryMySQLParser";
import { PrimaryExprAllAnyContext } from "./MultiQueryMySQLParser";
import { PredicateExprInContext } from "./MultiQueryMySQLParser";
import { PredicateExprBetweenContext } from "./MultiQueryMySQLParser";
import { PredicateExprLikeContext } from "./MultiQueryMySQLParser";
import { PredicateExprRegexContext } from "./MultiQueryMySQLParser";
import { ExprIsContext } from "./MultiQueryMySQLParser";
import { ExprNotContext } from "./MultiQueryMySQLParser";
import { ExprAndContext } from "./MultiQueryMySQLParser";
import { ExprXorContext } from "./MultiQueryMySQLParser";
import { ExprOrContext } from "./MultiQueryMySQLParser";
import { PartitionDefKeyContext } from "./MultiQueryMySQLParser";
import { PartitionDefHashContext } from "./MultiQueryMySQLParser";
import { PartitionDefRangeListContext } from "./MultiQueryMySQLParser";
import { Sql_scriptContext } from "./MultiQueryMySQLParser";
import { QueryContext } from "./MultiQueryMySQLParser";
import { SimpleStatementContext } from "./MultiQueryMySQLParser";
import { AlterStatementContext } from "./MultiQueryMySQLParser";
import { AlterDatabaseContext } from "./MultiQueryMySQLParser";
import { AlterEventContext } from "./MultiQueryMySQLParser";
import { AlterLogfileGroupContext } from "./MultiQueryMySQLParser";
import { AlterLogfileGroupOptionsContext } from "./MultiQueryMySQLParser";
import { AlterLogfileGroupOptionContext } from "./MultiQueryMySQLParser";
import { AlterServerContext } from "./MultiQueryMySQLParser";
import { AlterTableContext } from "./MultiQueryMySQLParser";
import { AlterTableActionsContext } from "./MultiQueryMySQLParser";
import { AlterCommandListContext } from "./MultiQueryMySQLParser";
import { AlterCommandsModifierListContext } from "./MultiQueryMySQLParser";
import { StandaloneAlterCommandsContext } from "./MultiQueryMySQLParser";
import { AlterPartitionContext } from "./MultiQueryMySQLParser";
import { AlterListContext } from "./MultiQueryMySQLParser";
import { AlterCommandsModifierContext } from "./MultiQueryMySQLParser";
import { AlterListItemContext } from "./MultiQueryMySQLParser";
import { PlaceContext } from "./MultiQueryMySQLParser";
import { RestrictContext } from "./MultiQueryMySQLParser";
import { AlterOrderListContext } from "./MultiQueryMySQLParser";
import { AlterAlgorithmOptionContext } from "./MultiQueryMySQLParser";
import { AlterLockOptionContext } from "./MultiQueryMySQLParser";
import { IndexLockAndAlgorithmContext } from "./MultiQueryMySQLParser";
import { WithValidationContext } from "./MultiQueryMySQLParser";
import { RemovePartitioningContext } from "./MultiQueryMySQLParser";
import { AllOrPartitionNameListContext } from "./MultiQueryMySQLParser";
import { ReorgPartitionRuleContext } from "./MultiQueryMySQLParser";
import { AlterTablespaceContext } from "./MultiQueryMySQLParser";
import { AlterUndoTablespaceContext } from "./MultiQueryMySQLParser";
import { UndoTableSpaceOptionsContext } from "./MultiQueryMySQLParser";
import { UndoTableSpaceOptionContext } from "./MultiQueryMySQLParser";
import { AlterTablespaceOptionsContext } from "./MultiQueryMySQLParser";
import { AlterTablespaceOptionContext } from "./MultiQueryMySQLParser";
import { ChangeTablespaceOptionContext } from "./MultiQueryMySQLParser";
import { AlterViewContext } from "./MultiQueryMySQLParser";
import { ViewTailContext } from "./MultiQueryMySQLParser";
import { ViewSelectContext } from "./MultiQueryMySQLParser";
import { ViewCheckOptionContext } from "./MultiQueryMySQLParser";
import { CreateStatementContext } from "./MultiQueryMySQLParser";
import { CreateDatabaseContext } from "./MultiQueryMySQLParser";
import { CreateDatabaseOptionContext } from "./MultiQueryMySQLParser";
import { CreateTableContext } from "./MultiQueryMySQLParser";
import { TableElementListContext } from "./MultiQueryMySQLParser";
import { TableElementContext } from "./MultiQueryMySQLParser";
import { DuplicateAsQueryExpressionContext } from "./MultiQueryMySQLParser";
import { QueryExpressionOrParensContext } from "./MultiQueryMySQLParser";
import { CreateRoutineContext } from "./MultiQueryMySQLParser";
import { CreateProcedureContext } from "./MultiQueryMySQLParser";
import { CreateFunctionContext } from "./MultiQueryMySQLParser";
import { CreateUdfContext } from "./MultiQueryMySQLParser";
import { RoutineCreateOptionContext } from "./MultiQueryMySQLParser";
import { RoutineAlterOptionsContext } from "./MultiQueryMySQLParser";
import { RoutineOptionContext } from "./MultiQueryMySQLParser";
import { CreateIndexContext } from "./MultiQueryMySQLParser";
import { IndexNameAndTypeContext } from "./MultiQueryMySQLParser";
import { CreateIndexTargetContext } from "./MultiQueryMySQLParser";
import { CreateLogfileGroupContext } from "./MultiQueryMySQLParser";
import { LogfileGroupOptionsContext } from "./MultiQueryMySQLParser";
import { LogfileGroupOptionContext } from "./MultiQueryMySQLParser";
import { CreateServerContext } from "./MultiQueryMySQLParser";
import { ServerOptionsContext } from "./MultiQueryMySQLParser";
import { ServerOptionContext } from "./MultiQueryMySQLParser";
import { CreateTablespaceContext } from "./MultiQueryMySQLParser";
import { CreateUndoTablespaceContext } from "./MultiQueryMySQLParser";
import { TsDataFileNameContext } from "./MultiQueryMySQLParser";
import { TsDataFileContext } from "./MultiQueryMySQLParser";
import { TablespaceOptionsContext } from "./MultiQueryMySQLParser";
import { TablespaceOptionContext } from "./MultiQueryMySQLParser";
import { TsOptionInitialSizeContext } from "./MultiQueryMySQLParser";
import { TsOptionUndoRedoBufferSizeContext } from "./MultiQueryMySQLParser";
import { TsOptionAutoextendSizeContext } from "./MultiQueryMySQLParser";
import { TsOptionMaxSizeContext } from "./MultiQueryMySQLParser";
import { TsOptionExtentSizeContext } from "./MultiQueryMySQLParser";
import { TsOptionNodegroupContext } from "./MultiQueryMySQLParser";
import { TsOptionEngineContext } from "./MultiQueryMySQLParser";
import { TsOptionWaitContext } from "./MultiQueryMySQLParser";
import { TsOptionCommentContext } from "./MultiQueryMySQLParser";
import { TsOptionFileblockSizeContext } from "./MultiQueryMySQLParser";
import { TsOptionEncryptionContext } from "./MultiQueryMySQLParser";
import { CreateViewContext } from "./MultiQueryMySQLParser";
import { ViewReplaceOrAlgorithmContext } from "./MultiQueryMySQLParser";
import { ViewAlgorithmContext } from "./MultiQueryMySQLParser";
import { ViewSuidContext } from "./MultiQueryMySQLParser";
import { CreateTriggerContext } from "./MultiQueryMySQLParser";
import { TriggerFollowsPrecedesClauseContext } from "./MultiQueryMySQLParser";
import { CreateEventContext } from "./MultiQueryMySQLParser";
import { CreateRoleContext } from "./MultiQueryMySQLParser";
import { CreateSpatialReferenceContext } from "./MultiQueryMySQLParser";
import { SrsAttributeContext } from "./MultiQueryMySQLParser";
import { DropStatementContext } from "./MultiQueryMySQLParser";
import { DropDatabaseContext } from "./MultiQueryMySQLParser";
import { DropEventContext } from "./MultiQueryMySQLParser";
import { DropFunctionContext } from "./MultiQueryMySQLParser";
import { DropProcedureContext } from "./MultiQueryMySQLParser";
import { DropIndexContext } from "./MultiQueryMySQLParser";
import { DropLogfileGroupContext } from "./MultiQueryMySQLParser";
import { DropLogfileGroupOptionContext } from "./MultiQueryMySQLParser";
import { DropServerContext } from "./MultiQueryMySQLParser";
import { DropTableContext } from "./MultiQueryMySQLParser";
import { DropTableSpaceContext } from "./MultiQueryMySQLParser";
import { DropTriggerContext } from "./MultiQueryMySQLParser";
import { DropViewContext } from "./MultiQueryMySQLParser";
import { DropRoleContext } from "./MultiQueryMySQLParser";
import { DropSpatialReferenceContext } from "./MultiQueryMySQLParser";
import { DropUndoTablespaceContext } from "./MultiQueryMySQLParser";
import { RenameTableStatementContext } from "./MultiQueryMySQLParser";
import { RenamePairContext } from "./MultiQueryMySQLParser";
import { TruncateTableStatementContext } from "./MultiQueryMySQLParser";
import { ImportStatementContext } from "./MultiQueryMySQLParser";
import { CallStatementContext } from "./MultiQueryMySQLParser";
import { DeleteStatementContext } from "./MultiQueryMySQLParser";
import { PartitionDeleteContext } from "./MultiQueryMySQLParser";
import { DeleteStatementOptionContext } from "./MultiQueryMySQLParser";
import { DoStatementContext } from "./MultiQueryMySQLParser";
import { HandlerStatementContext } from "./MultiQueryMySQLParser";
import { HandlerReadOrScanContext } from "./MultiQueryMySQLParser";
import { InsertStatementContext } from "./MultiQueryMySQLParser";
import { InsertLockOptionContext } from "./MultiQueryMySQLParser";
import { InsertFromConstructorContext } from "./MultiQueryMySQLParser";
import { FieldsContext } from "./MultiQueryMySQLParser";
import { InsertValuesContext } from "./MultiQueryMySQLParser";
import { InsertQueryExpressionContext } from "./MultiQueryMySQLParser";
import { ValueListContext } from "./MultiQueryMySQLParser";
import { ValuesContext } from "./MultiQueryMySQLParser";
import { ValuesReferenceContext } from "./MultiQueryMySQLParser";
import { InsertUpdateListContext } from "./MultiQueryMySQLParser";
import { LoadStatementContext } from "./MultiQueryMySQLParser";
import { DataOrXmlContext } from "./MultiQueryMySQLParser";
import { XmlRowsIdentifiedByContext } from "./MultiQueryMySQLParser";
import { LoadDataFileTailContext } from "./MultiQueryMySQLParser";
import { LoadDataFileTargetListContext } from "./MultiQueryMySQLParser";
import { FieldOrVariableListContext } from "./MultiQueryMySQLParser";
import { ReplaceStatementContext } from "./MultiQueryMySQLParser";
import { SelectStatementContext } from "./MultiQueryMySQLParser";
import { SelectStatementWithIntoContext } from "./MultiQueryMySQLParser";
import { QueryExpressionContext } from "./MultiQueryMySQLParser";
import { QueryExpressionBodyContext } from "./MultiQueryMySQLParser";
import { QueryExpressionParensContext } from "./MultiQueryMySQLParser";
import { QuerySpecificationContext } from "./MultiQueryMySQLParser";
import { SubqueryContext } from "./MultiQueryMySQLParser";
import { QuerySpecOptionContext } from "./MultiQueryMySQLParser";
import { LimitClauseContext } from "./MultiQueryMySQLParser";
import { SimpleLimitClauseContext } from "./MultiQueryMySQLParser";
import { LimitOptionsContext } from "./MultiQueryMySQLParser";
import { LimitOptionContext } from "./MultiQueryMySQLParser";
import { IntoClauseContext } from "./MultiQueryMySQLParser";
import { ProcedureAnalyseClauseContext } from "./MultiQueryMySQLParser";
import { HavingClauseContext } from "./MultiQueryMySQLParser";
import { WindowClauseContext } from "./MultiQueryMySQLParser";
import { WindowDefinitionContext } from "./MultiQueryMySQLParser";
import { WindowSpecContext } from "./MultiQueryMySQLParser";
import { WindowSpecDetailsContext } from "./MultiQueryMySQLParser";
import { WindowFrameClauseContext } from "./MultiQueryMySQLParser";
import { WindowFrameUnitsContext } from "./MultiQueryMySQLParser";
import { WindowFrameExtentContext } from "./MultiQueryMySQLParser";
import { WindowFrameStartContext } from "./MultiQueryMySQLParser";
import { WindowFrameBetweenContext } from "./MultiQueryMySQLParser";
import { WindowFrameBoundContext } from "./MultiQueryMySQLParser";
import { WindowFrameExclusionContext } from "./MultiQueryMySQLParser";
import { WithClauseContext } from "./MultiQueryMySQLParser";
import { CommonTableExpressionContext } from "./MultiQueryMySQLParser";
import { GroupByClauseContext } from "./MultiQueryMySQLParser";
import { OlapOptionContext } from "./MultiQueryMySQLParser";
import { OrderClauseContext } from "./MultiQueryMySQLParser";
import { DirectionContext } from "./MultiQueryMySQLParser";
import { FromClauseContext } from "./MultiQueryMySQLParser";
import { TableReferenceListContext } from "./MultiQueryMySQLParser";
import { SelectOptionContext } from "./MultiQueryMySQLParser";
import { LockingClauseContext } from "./MultiQueryMySQLParser";
import { LockStrenghContext } from "./MultiQueryMySQLParser";
import { LockedRowActionContext } from "./MultiQueryMySQLParser";
import { SelectItemListContext } from "./MultiQueryMySQLParser";
import { SelectItemContext } from "./MultiQueryMySQLParser";
import { SelectAliasContext } from "./MultiQueryMySQLParser";
import { WhereClauseContext } from "./MultiQueryMySQLParser";
import { TableReferenceContext } from "./MultiQueryMySQLParser";
import { EscapedTableReferenceContext } from "./MultiQueryMySQLParser";
import { JoinedTableContext } from "./MultiQueryMySQLParser";
import { NaturalJoinTypeContext } from "./MultiQueryMySQLParser";
import { InnerJoinTypeContext } from "./MultiQueryMySQLParser";
import { OuterJoinTypeContext } from "./MultiQueryMySQLParser";
import { TableFactorContext } from "./MultiQueryMySQLParser";
import { SingleTableContext } from "./MultiQueryMySQLParser";
import { SingleTableParensContext } from "./MultiQueryMySQLParser";
import { DerivedTableContext } from "./MultiQueryMySQLParser";
import { TableReferenceListParensContext } from "./MultiQueryMySQLParser";
import { TableFunctionContext } from "./MultiQueryMySQLParser";
import { ColumnsClauseContext } from "./MultiQueryMySQLParser";
import { JtColumnContext } from "./MultiQueryMySQLParser";
import { OnEmptyOrErrorContext } from "./MultiQueryMySQLParser";
import { OnEmptyContext } from "./MultiQueryMySQLParser";
import { OnErrorContext } from "./MultiQueryMySQLParser";
import { JtOnResponseContext } from "./MultiQueryMySQLParser";
import { UnionOptionContext } from "./MultiQueryMySQLParser";
import { TableAliasContext } from "./MultiQueryMySQLParser";
import { IndexHintListContext } from "./MultiQueryMySQLParser";
import { IndexHintContext } from "./MultiQueryMySQLParser";
import { IndexHintTypeContext } from "./MultiQueryMySQLParser";
import { KeyOrIndexContext } from "./MultiQueryMySQLParser";
import { ConstraintKeyTypeContext } from "./MultiQueryMySQLParser";
import { IndexHintClauseContext } from "./MultiQueryMySQLParser";
import { IndexListContext } from "./MultiQueryMySQLParser";
import { IndexListElementContext } from "./MultiQueryMySQLParser";
import { UpdateStatementContext } from "./MultiQueryMySQLParser";
import { TransactionOrLockingStatementContext } from "./MultiQueryMySQLParser";
import { TransactionStatementContext } from "./MultiQueryMySQLParser";
import { BeginWorkContext } from "./MultiQueryMySQLParser";
import { TransactionCharacteristicContext } from "./MultiQueryMySQLParser";
import { SavepointStatementContext } from "./MultiQueryMySQLParser";
import { LockStatementContext } from "./MultiQueryMySQLParser";
import { LockItemContext } from "./MultiQueryMySQLParser";
import { LockOptionContext } from "./MultiQueryMySQLParser";
import { XaStatementContext } from "./MultiQueryMySQLParser";
import { XaConvertContext } from "./MultiQueryMySQLParser";
import { XidContext } from "./MultiQueryMySQLParser";
import { ReplicationStatementContext } from "./MultiQueryMySQLParser";
import { ResetOptionContext } from "./MultiQueryMySQLParser";
import { MasterResetOptionsContext } from "./MultiQueryMySQLParser";
import { ReplicationLoadContext } from "./MultiQueryMySQLParser";
import { ChangeMasterContext } from "./MultiQueryMySQLParser";
import { ChangeMasterOptionsContext } from "./MultiQueryMySQLParser";
import { MasterOptionContext } from "./MultiQueryMySQLParser";
import { PrivilegeCheckDefContext } from "./MultiQueryMySQLParser";
import { MasterTlsCiphersuitesDefContext } from "./MultiQueryMySQLParser";
import { MasterFileDefContext } from "./MultiQueryMySQLParser";
import { ServerIdListContext } from "./MultiQueryMySQLParser";
import { ChangeReplicationContext } from "./MultiQueryMySQLParser";
import { FilterDefinitionContext } from "./MultiQueryMySQLParser";
import { FilterDbListContext } from "./MultiQueryMySQLParser";
import { FilterTableListContext } from "./MultiQueryMySQLParser";
import { FilterStringListContext } from "./MultiQueryMySQLParser";
import { FilterWildDbTableStringContext } from "./MultiQueryMySQLParser";
import { FilterDbPairListContext } from "./MultiQueryMySQLParser";
import { SlaveContext } from "./MultiQueryMySQLParser";
import { SlaveUntilOptionsContext } from "./MultiQueryMySQLParser";
import { SlaveConnectionOptionsContext } from "./MultiQueryMySQLParser";
import { SlaveThreadOptionsContext } from "./MultiQueryMySQLParser";
import { SlaveThreadOptionContext } from "./MultiQueryMySQLParser";
import { GroupReplicationContext } from "./MultiQueryMySQLParser";
import { PreparedStatementContext } from "./MultiQueryMySQLParser";
import { ExecuteStatementContext } from "./MultiQueryMySQLParser";
import { ExecuteVarListContext } from "./MultiQueryMySQLParser";
import { CloneStatementContext } from "./MultiQueryMySQLParser";
import { DataDirSSLContext } from "./MultiQueryMySQLParser";
import { SslContext } from "./MultiQueryMySQLParser";
import { AccountManagementStatementContext } from "./MultiQueryMySQLParser";
import { AlterUserContext } from "./MultiQueryMySQLParser";
import { AlterUserTailContext } from "./MultiQueryMySQLParser";
import { UserFunctionContext } from "./MultiQueryMySQLParser";
import { CreateUserContext } from "./MultiQueryMySQLParser";
import { CreateUserTailContext } from "./MultiQueryMySQLParser";
import { DefaultRoleClauseContext } from "./MultiQueryMySQLParser";
import { RequireClauseContext } from "./MultiQueryMySQLParser";
import { ConnectOptionsContext } from "./MultiQueryMySQLParser";
import { AccountLockPasswordExpireOptionsContext } from "./MultiQueryMySQLParser";
import { DropUserContext } from "./MultiQueryMySQLParser";
import { GrantContext } from "./MultiQueryMySQLParser";
import { GrantTargetListContext } from "./MultiQueryMySQLParser";
import { GrantOptionsContext } from "./MultiQueryMySQLParser";
import { ExceptRoleListContext } from "./MultiQueryMySQLParser";
import { WithRolesContext } from "./MultiQueryMySQLParser";
import { GrantAsContext } from "./MultiQueryMySQLParser";
import { VersionedRequireClauseContext } from "./MultiQueryMySQLParser";
import { RenameUserContext } from "./MultiQueryMySQLParser";
import { RevokeContext } from "./MultiQueryMySQLParser";
import { OnTypeToContext } from "./MultiQueryMySQLParser";
import { AclTypeContext } from "./MultiQueryMySQLParser";
import { RoleOrPrivilegesListContext } from "./MultiQueryMySQLParser";
import { RoleOrPrivilegeContext } from "./MultiQueryMySQLParser";
import { GrantIdentifierContext } from "./MultiQueryMySQLParser";
import { RequireListContext } from "./MultiQueryMySQLParser";
import { RequireListElementContext } from "./MultiQueryMySQLParser";
import { GrantOptionContext } from "./MultiQueryMySQLParser";
import { SetRoleContext } from "./MultiQueryMySQLParser";
import { RoleListContext } from "./MultiQueryMySQLParser";
import { RoleContext } from "./MultiQueryMySQLParser";
import { TableAdministrationStatementContext } from "./MultiQueryMySQLParser";
import { HistogramContext } from "./MultiQueryMySQLParser";
import { CheckOptionContext } from "./MultiQueryMySQLParser";
import { RepairTypeContext } from "./MultiQueryMySQLParser";
import { InstallUninstallStatmentContext } from "./MultiQueryMySQLParser";
import { SetStatementContext } from "./MultiQueryMySQLParser";
import { StartOptionValueListContext } from "./MultiQueryMySQLParser";
import { TransactionCharacteristicsContext } from "./MultiQueryMySQLParser";
import { TransactionAccessModeContext } from "./MultiQueryMySQLParser";
import { IsolationLevelContext } from "./MultiQueryMySQLParser";
import { OptionValueListContinuedContext } from "./MultiQueryMySQLParser";
import { OptionValueNoOptionTypeContext } from "./MultiQueryMySQLParser";
import { OptionValueContext } from "./MultiQueryMySQLParser";
import { SetSystemVariableContext } from "./MultiQueryMySQLParser";
import { StartOptionValueListFollowingOptionTypeContext } from "./MultiQueryMySQLParser";
import { OptionValueFollowingOptionTypeContext } from "./MultiQueryMySQLParser";
import { SetExprOrDefaultContext } from "./MultiQueryMySQLParser";
import { ShowStatementContext } from "./MultiQueryMySQLParser";
import { ShowCommandTypeContext } from "./MultiQueryMySQLParser";
import { NonBlockingContext } from "./MultiQueryMySQLParser";
import { FromOrInContext } from "./MultiQueryMySQLParser";
import { InDbContext } from "./MultiQueryMySQLParser";
import { ProfileTypeContext } from "./MultiQueryMySQLParser";
import { OtherAdministrativeStatementContext } from "./MultiQueryMySQLParser";
import { KeyCacheListOrPartsContext } from "./MultiQueryMySQLParser";
import { KeyCacheListContext } from "./MultiQueryMySQLParser";
import { AssignToKeycacheContext } from "./MultiQueryMySQLParser";
import { AssignToKeycachePartitionContext } from "./MultiQueryMySQLParser";
import { CacheKeyListContext } from "./MultiQueryMySQLParser";
import { KeyUsageElementContext } from "./MultiQueryMySQLParser";
import { KeyUsageListContext } from "./MultiQueryMySQLParser";
import { FlushOptionContext } from "./MultiQueryMySQLParser";
import { LogTypeContext } from "./MultiQueryMySQLParser";
import { FlushTablesContext } from "./MultiQueryMySQLParser";
import { FlushTablesOptionsContext } from "./MultiQueryMySQLParser";
import { PreloadTailContext } from "./MultiQueryMySQLParser";
import { PreloadListContext } from "./MultiQueryMySQLParser";
import { PreloadKeysContext } from "./MultiQueryMySQLParser";
import { AdminPartitionContext } from "./MultiQueryMySQLParser";
import { ResourceGroupManagementContext } from "./MultiQueryMySQLParser";
import { CreateResourceGroupContext } from "./MultiQueryMySQLParser";
import { ResourceGroupVcpuListContext } from "./MultiQueryMySQLParser";
import { VcpuNumOrRangeContext } from "./MultiQueryMySQLParser";
import { ResourceGroupPriorityContext } from "./MultiQueryMySQLParser";
import { ResourceGroupEnableDisableContext } from "./MultiQueryMySQLParser";
import { AlterResourceGroupContext } from "./MultiQueryMySQLParser";
import { SetResourceGroupContext } from "./MultiQueryMySQLParser";
import { ThreadIdListContext } from "./MultiQueryMySQLParser";
import { DropResourceGroupContext } from "./MultiQueryMySQLParser";
import { UtilityStatementContext } from "./MultiQueryMySQLParser";
import { DescribeCommandContext } from "./MultiQueryMySQLParser";
import { ExplainCommandContext } from "./MultiQueryMySQLParser";
import { ExplainableStatementContext } from "./MultiQueryMySQLParser";
import { HelpCommandContext } from "./MultiQueryMySQLParser";
import { UseCommandContext } from "./MultiQueryMySQLParser";
import { RestartServerContext } from "./MultiQueryMySQLParser";
import { ExprContext } from "./MultiQueryMySQLParser";
import { BoolPriContext } from "./MultiQueryMySQLParser";
import { CompOpContext } from "./MultiQueryMySQLParser";
import { PredicateContext } from "./MultiQueryMySQLParser";
import { PredicateOperationsContext } from "./MultiQueryMySQLParser";
import { BitExprContext } from "./MultiQueryMySQLParser";
import { SimpleExprContext } from "./MultiQueryMySQLParser";
import { ArrayCastContext } from "./MultiQueryMySQLParser";
import { JsonOperatorContext } from "./MultiQueryMySQLParser";
import { SumExprContext } from "./MultiQueryMySQLParser";
import { GroupingOperationContext } from "./MultiQueryMySQLParser";
import { WindowFunctionCallContext } from "./MultiQueryMySQLParser";
import { WindowingClauseContext } from "./MultiQueryMySQLParser";
import { LeadLagInfoContext } from "./MultiQueryMySQLParser";
import { NullTreatmentContext } from "./MultiQueryMySQLParser";
import { JsonFunctionContext } from "./MultiQueryMySQLParser";
import { InSumExprContext } from "./MultiQueryMySQLParser";
import { IdentListArgContext } from "./MultiQueryMySQLParser";
import { IdentListContext } from "./MultiQueryMySQLParser";
import { FulltextOptionsContext } from "./MultiQueryMySQLParser";
import { RuntimeFunctionCallContext } from "./MultiQueryMySQLParser";
import { GeometryFunctionContext } from "./MultiQueryMySQLParser";
import { TimeFunctionParametersContext } from "./MultiQueryMySQLParser";
import { FractionalPrecisionContext } from "./MultiQueryMySQLParser";
import { WeightStringLevelsContext } from "./MultiQueryMySQLParser";
import { WeightStringLevelListItemContext } from "./MultiQueryMySQLParser";
import { DateTimeTtypeContext } from "./MultiQueryMySQLParser";
import { TrimFunctionContext } from "./MultiQueryMySQLParser";
import { SubstringFunctionContext } from "./MultiQueryMySQLParser";
import { FunctionCallContext } from "./MultiQueryMySQLParser";
import { UdfExprListContext } from "./MultiQueryMySQLParser";
import { UdfExprContext } from "./MultiQueryMySQLParser";
import { VariableContext } from "./MultiQueryMySQLParser";
import { UserVariableContext } from "./MultiQueryMySQLParser";
import { SystemVariableContext } from "./MultiQueryMySQLParser";
import { InternalVariableNameContext } from "./MultiQueryMySQLParser";
import { WhenExpressionContext } from "./MultiQueryMySQLParser";
import { ThenExpressionContext } from "./MultiQueryMySQLParser";
import { ElseExpressionContext } from "./MultiQueryMySQLParser";
import { CastTypeContext } from "./MultiQueryMySQLParser";
import { ExprListContext } from "./MultiQueryMySQLParser";
import { CharsetContext } from "./MultiQueryMySQLParser";
import { NotRuleContext } from "./MultiQueryMySQLParser";
import { Not2RuleContext } from "./MultiQueryMySQLParser";
import { IntervalContext } from "./MultiQueryMySQLParser";
import { IntervalTimeStampContext } from "./MultiQueryMySQLParser";
import { ExprListWithParenthesesContext } from "./MultiQueryMySQLParser";
import { ExprWithParenthesesContext } from "./MultiQueryMySQLParser";
import { SimpleExprWithParenthesesContext } from "./MultiQueryMySQLParser";
import { OrderListContext } from "./MultiQueryMySQLParser";
import { OrderExpressionContext } from "./MultiQueryMySQLParser";
import { GroupListContext } from "./MultiQueryMySQLParser";
import { GroupingExpressionContext } from "./MultiQueryMySQLParser";
import { ChannelContext } from "./MultiQueryMySQLParser";
import { CompoundStatementContext } from "./MultiQueryMySQLParser";
import { ReturnStatementContext } from "./MultiQueryMySQLParser";
import { IfStatementContext } from "./MultiQueryMySQLParser";
import { IfBodyContext } from "./MultiQueryMySQLParser";
import { ThenStatementContext } from "./MultiQueryMySQLParser";
import { CompoundStatementListContext } from "./MultiQueryMySQLParser";
import { CaseStatementContext } from "./MultiQueryMySQLParser";
import { ElseStatementContext } from "./MultiQueryMySQLParser";
import { LabeledBlockContext } from "./MultiQueryMySQLParser";
import { UnlabeledBlockContext } from "./MultiQueryMySQLParser";
import { LabelContext } from "./MultiQueryMySQLParser";
import { BeginEndBlockContext } from "./MultiQueryMySQLParser";
import { LabeledControlContext } from "./MultiQueryMySQLParser";
import { UnlabeledControlContext } from "./MultiQueryMySQLParser";
import { LoopBlockContext } from "./MultiQueryMySQLParser";
import { WhileDoBlockContext } from "./MultiQueryMySQLParser";
import { RepeatUntilBlockContext } from "./MultiQueryMySQLParser";
import { SpDeclarationsContext } from "./MultiQueryMySQLParser";
import { SpDeclarationContext } from "./MultiQueryMySQLParser";
import { VariableDeclarationContext } from "./MultiQueryMySQLParser";
import { ConditionDeclarationContext } from "./MultiQueryMySQLParser";
import { SpConditionContext } from "./MultiQueryMySQLParser";
import { SqlstateContext } from "./MultiQueryMySQLParser";
import { HandlerDeclarationContext } from "./MultiQueryMySQLParser";
import { HandlerConditionContext } from "./MultiQueryMySQLParser";
import { CursorDeclarationContext } from "./MultiQueryMySQLParser";
import { IterateStatementContext } from "./MultiQueryMySQLParser";
import { LeaveStatementContext } from "./MultiQueryMySQLParser";
import { GetDiagnosticsContext } from "./MultiQueryMySQLParser";
import { SignalAllowedExprContext } from "./MultiQueryMySQLParser";
import { StatementInformationItemContext } from "./MultiQueryMySQLParser";
import { ConditionInformationItemContext } from "./MultiQueryMySQLParser";
import { SignalInformationItemNameContext } from "./MultiQueryMySQLParser";
import { SignalStatementContext } from "./MultiQueryMySQLParser";
import { ResignalStatementContext } from "./MultiQueryMySQLParser";
import { SignalInformationItemContext } from "./MultiQueryMySQLParser";
import { CursorOpenContext } from "./MultiQueryMySQLParser";
import { CursorCloseContext } from "./MultiQueryMySQLParser";
import { CursorFetchContext } from "./MultiQueryMySQLParser";
import { ScheduleContext } from "./MultiQueryMySQLParser";
import { ColumnDefinitionContext } from "./MultiQueryMySQLParser";
import { CheckOrReferencesContext } from "./MultiQueryMySQLParser";
import { CheckConstraintContext } from "./MultiQueryMySQLParser";
import { ConstraintEnforcementContext } from "./MultiQueryMySQLParser";
import { TableConstraintDefContext } from "./MultiQueryMySQLParser";
import { ConstraintNameContext } from "./MultiQueryMySQLParser";
import { FieldDefinitionContext } from "./MultiQueryMySQLParser";
import { ColumnAttributeContext } from "./MultiQueryMySQLParser";
import { ColumnFormatContext } from "./MultiQueryMySQLParser";
import { StorageMediaContext } from "./MultiQueryMySQLParser";
import { GcolAttributeContext } from "./MultiQueryMySQLParser";
import { ReferencesContext } from "./MultiQueryMySQLParser";
import { DeleteOptionContext } from "./MultiQueryMySQLParser";
import { KeyListContext } from "./MultiQueryMySQLParser";
import { KeyPartContext } from "./MultiQueryMySQLParser";
import { KeyListWithExpressionContext } from "./MultiQueryMySQLParser";
import { KeyPartOrExpressionContext } from "./MultiQueryMySQLParser";
import { KeyListVariantsContext } from "./MultiQueryMySQLParser";
import { IndexTypeContext } from "./MultiQueryMySQLParser";
import { IndexOptionContext } from "./MultiQueryMySQLParser";
import { CommonIndexOptionContext } from "./MultiQueryMySQLParser";
import { VisibilityContext } from "./MultiQueryMySQLParser";
import { IndexTypeClauseContext } from "./MultiQueryMySQLParser";
import { FulltextIndexOptionContext } from "./MultiQueryMySQLParser";
import { SpatialIndexOptionContext } from "./MultiQueryMySQLParser";
import { DataTypeDefinitionContext } from "./MultiQueryMySQLParser";
import { DataTypeContext } from "./MultiQueryMySQLParser";
import { NcharContext } from "./MultiQueryMySQLParser";
import { RealTypeContext } from "./MultiQueryMySQLParser";
import { FieldLengthContext } from "./MultiQueryMySQLParser";
import { FieldOptionsContext } from "./MultiQueryMySQLParser";
import { CharsetWithOptBinaryContext } from "./MultiQueryMySQLParser";
import { AsciiContext } from "./MultiQueryMySQLParser";
import { UnicodeContext } from "./MultiQueryMySQLParser";
import { WsNumCodepointsContext } from "./MultiQueryMySQLParser";
import { TypeDatetimePrecisionContext } from "./MultiQueryMySQLParser";
import { CharsetNameContext } from "./MultiQueryMySQLParser";
import { CollationNameContext } from "./MultiQueryMySQLParser";
import { CreateTableOptionsContext } from "./MultiQueryMySQLParser";
import { CreateTableOptionsSpaceSeparatedContext } from "./MultiQueryMySQLParser";
import { CreateTableOptionContext } from "./MultiQueryMySQLParser";
import { TernaryOptionContext } from "./MultiQueryMySQLParser";
import { DefaultCollationContext } from "./MultiQueryMySQLParser";
import { DefaultEncryptionContext } from "./MultiQueryMySQLParser";
import { DefaultCharsetContext } from "./MultiQueryMySQLParser";
import { PartitionClauseContext } from "./MultiQueryMySQLParser";
import { PartitionTypeDefContext } from "./MultiQueryMySQLParser";
import { SubPartitionsContext } from "./MultiQueryMySQLParser";
import { PartitionKeyAlgorithmContext } from "./MultiQueryMySQLParser";
import { PartitionDefinitionsContext } from "./MultiQueryMySQLParser";
import { PartitionDefinitionContext } from "./MultiQueryMySQLParser";
import { PartitionValuesInContext } from "./MultiQueryMySQLParser";
import { PartitionOptionContext } from "./MultiQueryMySQLParser";
import { SubpartitionDefinitionContext } from "./MultiQueryMySQLParser";
import { PartitionValueItemListParenContext } from "./MultiQueryMySQLParser";
import { PartitionValueItemContext } from "./MultiQueryMySQLParser";
import { DefinerClauseContext } from "./MultiQueryMySQLParser";
import { IfExistsContext } from "./MultiQueryMySQLParser";
import { IfNotExistsContext } from "./MultiQueryMySQLParser";
import { ProcedureParameterContext } from "./MultiQueryMySQLParser";
import { FunctionParameterContext } from "./MultiQueryMySQLParser";
import { CollateContext } from "./MultiQueryMySQLParser";
import { TypeWithOptCollateContext } from "./MultiQueryMySQLParser";
import { SchemaIdentifierPairContext } from "./MultiQueryMySQLParser";
import { ViewRefListContext } from "./MultiQueryMySQLParser";
import { UpdateListContext } from "./MultiQueryMySQLParser";
import { UpdateElementContext } from "./MultiQueryMySQLParser";
import { CharsetClauseContext } from "./MultiQueryMySQLParser";
import { FieldsClauseContext } from "./MultiQueryMySQLParser";
import { FieldTermContext } from "./MultiQueryMySQLParser";
import { LinesClauseContext } from "./MultiQueryMySQLParser";
import { LineTermContext } from "./MultiQueryMySQLParser";
import { UserListContext } from "./MultiQueryMySQLParser";
import { CreateUserListContext } from "./MultiQueryMySQLParser";
import { AlterUserListContext } from "./MultiQueryMySQLParser";
import { CreateUserEntryContext } from "./MultiQueryMySQLParser";
import { AlterUserEntryContext } from "./MultiQueryMySQLParser";
import { RetainCurrentPasswordContext } from "./MultiQueryMySQLParser";
import { DiscardOldPasswordContext } from "./MultiQueryMySQLParser";
import { ReplacePasswordContext } from "./MultiQueryMySQLParser";
import { UserIdentifierOrTextContext } from "./MultiQueryMySQLParser";
import { UserContext } from "./MultiQueryMySQLParser";
import { LikeClauseContext } from "./MultiQueryMySQLParser";
import { LikeOrWhereContext } from "./MultiQueryMySQLParser";
import { OnlineOptionContext } from "./MultiQueryMySQLParser";
import { NoWriteToBinLogContext } from "./MultiQueryMySQLParser";
import { UsePartitionContext } from "./MultiQueryMySQLParser";
import { FieldIdentifierContext } from "./MultiQueryMySQLParser";
import { ColumnNameContext } from "./MultiQueryMySQLParser";
import { ColumnInternalRefContext } from "./MultiQueryMySQLParser";
import { ColumnInternalRefListContext } from "./MultiQueryMySQLParser";
import { ColumnRefContext } from "./MultiQueryMySQLParser";
import { InsertIdentifierContext } from "./MultiQueryMySQLParser";
import { IndexNameContext } from "./MultiQueryMySQLParser";
import { IndexRefContext } from "./MultiQueryMySQLParser";
import { TableWildContext } from "./MultiQueryMySQLParser";
import { SchemaNameContext } from "./MultiQueryMySQLParser";
import { SchemaRefContext } from "./MultiQueryMySQLParser";
import { ProcedureNameContext } from "./MultiQueryMySQLParser";
import { ProcedureRefContext } from "./MultiQueryMySQLParser";
import { FunctionNameContext } from "./MultiQueryMySQLParser";
import { FunctionRefContext } from "./MultiQueryMySQLParser";
import { TriggerNameContext } from "./MultiQueryMySQLParser";
import { TriggerRefContext } from "./MultiQueryMySQLParser";
import { ViewNameContext } from "./MultiQueryMySQLParser";
import { ViewRefContext } from "./MultiQueryMySQLParser";
import { TablespaceNameContext } from "./MultiQueryMySQLParser";
import { TablespaceRefContext } from "./MultiQueryMySQLParser";
import { LogfileGroupNameContext } from "./MultiQueryMySQLParser";
import { LogfileGroupRefContext } from "./MultiQueryMySQLParser";
import { EventNameContext } from "./MultiQueryMySQLParser";
import { EventRefContext } from "./MultiQueryMySQLParser";
import { UdfNameContext } from "./MultiQueryMySQLParser";
import { ServerNameContext } from "./MultiQueryMySQLParser";
import { ServerRefContext } from "./MultiQueryMySQLParser";
import { EngineRefContext } from "./MultiQueryMySQLParser";
import { TableNameContext } from "./MultiQueryMySQLParser";
import { FilterTableRefContext } from "./MultiQueryMySQLParser";
import { TableRefWithWildcardContext } from "./MultiQueryMySQLParser";
import { TableRefContext } from "./MultiQueryMySQLParser";
import { TableRefListContext } from "./MultiQueryMySQLParser";
import { TableAliasRefListContext } from "./MultiQueryMySQLParser";
import { ParameterNameContext } from "./MultiQueryMySQLParser";
import { LabelIdentifierContext } from "./MultiQueryMySQLParser";
import { LabelRefContext } from "./MultiQueryMySQLParser";
import { RoleIdentifierContext } from "./MultiQueryMySQLParser";
import { RoleRefContext } from "./MultiQueryMySQLParser";
import { PluginRefContext } from "./MultiQueryMySQLParser";
import { ComponentRefContext } from "./MultiQueryMySQLParser";
import { ResourceGroupRefContext } from "./MultiQueryMySQLParser";
import { WindowNameContext } from "./MultiQueryMySQLParser";
import { PureIdentifierContext } from "./MultiQueryMySQLParser";
import { IdentifierContext } from "./MultiQueryMySQLParser";
import { IdentifierListContext } from "./MultiQueryMySQLParser";
import { IdentifierListWithParenthesesContext } from "./MultiQueryMySQLParser";
import { QualifiedIdentifierContext } from "./MultiQueryMySQLParser";
import { SimpleIdentifierContext } from "./MultiQueryMySQLParser";
import { DotIdentifierContext } from "./MultiQueryMySQLParser";
import { Ulong_numberContext } from "./MultiQueryMySQLParser";
import { Real_ulong_numberContext } from "./MultiQueryMySQLParser";
import { Ulonglong_numberContext } from "./MultiQueryMySQLParser";
import { Real_ulonglong_numberContext } from "./MultiQueryMySQLParser";
import { LiteralContext } from "./MultiQueryMySQLParser";
import { SignedLiteralContext } from "./MultiQueryMySQLParser";
import { StringListContext } from "./MultiQueryMySQLParser";
import { TextStringLiteralContext } from "./MultiQueryMySQLParser";
import { TextStringContext } from "./MultiQueryMySQLParser";
import { TextStringHashContext } from "./MultiQueryMySQLParser";
import { TextLiteralContext } from "./MultiQueryMySQLParser";
import { TextStringNoLinebreakContext } from "./MultiQueryMySQLParser";
import { TextStringLiteralListContext } from "./MultiQueryMySQLParser";
import { NumLiteralContext } from "./MultiQueryMySQLParser";
import { BoolLiteralContext } from "./MultiQueryMySQLParser";
import { NullLiteralContext } from "./MultiQueryMySQLParser";
import { TemporalLiteralContext } from "./MultiQueryMySQLParser";
import { FloatOptionsContext } from "./MultiQueryMySQLParser";
import { StandardFloatOptionsContext } from "./MultiQueryMySQLParser";
import { PrecisionContext } from "./MultiQueryMySQLParser";
import { TextOrIdentifierContext } from "./MultiQueryMySQLParser";
import { LValueIdentifierContext } from "./MultiQueryMySQLParser";
import { RoleIdentifierOrTextContext } from "./MultiQueryMySQLParser";
import { SizeNumberContext } from "./MultiQueryMySQLParser";
import { ParenthesesContext } from "./MultiQueryMySQLParser";
import { EqualContext } from "./MultiQueryMySQLParser";
import { OptionTypeContext } from "./MultiQueryMySQLParser";
import { VarIdentTypeContext } from "./MultiQueryMySQLParser";
import { SetVarIdentTypeContext } from "./MultiQueryMySQLParser";
import { IdentifierKeywordContext } from "./MultiQueryMySQLParser";
import { IdentifierKeywordsAmbiguous1RolesAndLabelsContext } from "./MultiQueryMySQLParser";
import { IdentifierKeywordsAmbiguous2LabelsContext } from "./MultiQueryMySQLParser";
import { LabelKeywordContext } from "./MultiQueryMySQLParser";
import { IdentifierKeywordsAmbiguous3RolesContext } from "./MultiQueryMySQLParser";
import { IdentifierKeywordsUnambiguousContext } from "./MultiQueryMySQLParser";
import { RoleKeywordContext } from "./MultiQueryMySQLParser";
import { LValueKeywordContext } from "./MultiQueryMySQLParser";
import { IdentifierKeywordsAmbiguous4SystemVariablesContext } from "./MultiQueryMySQLParser";
import { RoleOrIdentifierKeywordContext } from "./MultiQueryMySQLParser";
import { RoleOrLabelKeywordContext } from "./MultiQueryMySQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MultiQueryMySQLParser`.
 */
export interface MultiQueryMySQLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `simpleExprVariable`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprVariable?: (ctx: SimpleExprVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprVariable`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprVariable?: (ctx: SimpleExprVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprColumnRef`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprColumnRef?: (ctx: SimpleExprColumnRefContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprColumnRef`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprColumnRef?: (ctx: SimpleExprColumnRefContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprRuntimeFunction`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprRuntimeFunction?: (ctx: SimpleExprRuntimeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprRuntimeFunction`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprRuntimeFunction?: (ctx: SimpleExprRuntimeFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprFunction`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprFunction?: (ctx: SimpleExprFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprFunction`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprFunction?: (ctx: SimpleExprFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprCollate`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprCollate?: (ctx: SimpleExprCollateContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprCollate`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprCollate?: (ctx: SimpleExprCollateContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprLiteral`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprLiteral?: (ctx: SimpleExprLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprLiteral`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprLiteral?: (ctx: SimpleExprLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprParamMarker`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprParamMarker?: (ctx: SimpleExprParamMarkerContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprParamMarker`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprParamMarker?: (ctx: SimpleExprParamMarkerContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprSum`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprSum?: (ctx: SimpleExprSumContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprSum`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprSum?: (ctx: SimpleExprSumContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprGroupingOperation`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprGroupingOperation?: (ctx: SimpleExprGroupingOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprGroupingOperation`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprGroupingOperation?: (ctx: SimpleExprGroupingOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprWindowingFunction`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprWindowingFunction?: (ctx: SimpleExprWindowingFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprWindowingFunction`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprWindowingFunction?: (ctx: SimpleExprWindowingFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprConcat`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprConcat?: (ctx: SimpleExprConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprConcat`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprConcat?: (ctx: SimpleExprConcatContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprUnary`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprUnary?: (ctx: SimpleExprUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprUnary`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprUnary?: (ctx: SimpleExprUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprNot`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprNot?: (ctx: SimpleExprNotContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprNot`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprNot?: (ctx: SimpleExprNotContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprList`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprList?: (ctx: SimpleExprListContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprList`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprList?: (ctx: SimpleExprListContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprSubQuery`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprSubQuery?: (ctx: SimpleExprSubQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprSubQuery`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprSubQuery?: (ctx: SimpleExprSubQueryContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprOdbc`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprOdbc?: (ctx: SimpleExprOdbcContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprOdbc`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprOdbc?: (ctx: SimpleExprOdbcContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprMatch`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprMatch?: (ctx: SimpleExprMatchContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprMatch`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprMatch?: (ctx: SimpleExprMatchContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprBinary`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprBinary?: (ctx: SimpleExprBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprBinary`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprBinary?: (ctx: SimpleExprBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprCast`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprCast?: (ctx: SimpleExprCastContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprCast`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprCast?: (ctx: SimpleExprCastContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprCase`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprCase?: (ctx: SimpleExprCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprCase`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprCase?: (ctx: SimpleExprCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprConvert`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprConvert?: (ctx: SimpleExprConvertContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprConvert`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprConvert?: (ctx: SimpleExprConvertContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprConvertUsing`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprConvertUsing?: (ctx: SimpleExprConvertUsingContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprConvertUsing`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprConvertUsing?: (ctx: SimpleExprConvertUsingContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprDefault`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprDefault?: (ctx: SimpleExprDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprDefault`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprDefault?: (ctx: SimpleExprDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprValues`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprValues?: (ctx: SimpleExprValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprValues`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprValues?: (ctx: SimpleExprValuesContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleExprInterval`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprInterval?: (ctx: SimpleExprIntervalContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleExprInterval`
	 * labeled alternative in `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprInterval?: (ctx: SimpleExprIntervalContext) => void;

	/**
	 * Enter a parse tree produced by the `primaryExprPredicate`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExprPredicate?: (ctx: PrimaryExprPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExprPredicate`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExprPredicate?: (ctx: PrimaryExprPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `primaryExprIsNull`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExprIsNull?: (ctx: PrimaryExprIsNullContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExprIsNull`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExprIsNull?: (ctx: PrimaryExprIsNullContext) => void;

	/**
	 * Enter a parse tree produced by the `primaryExprCompare`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExprCompare?: (ctx: PrimaryExprCompareContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExprCompare`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExprCompare?: (ctx: PrimaryExprCompareContext) => void;

	/**
	 * Enter a parse tree produced by the `primaryExprAllAny`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExprAllAny?: (ctx: PrimaryExprAllAnyContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExprAllAny`
	 * labeled alternative in `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExprAllAny?: (ctx: PrimaryExprAllAnyContext) => void;

	/**
	 * Enter a parse tree produced by the `predicateExprIn`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	enterPredicateExprIn?: (ctx: PredicateExprInContext) => void;
	/**
	 * Exit a parse tree produced by the `predicateExprIn`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	exitPredicateExprIn?: (ctx: PredicateExprInContext) => void;

	/**
	 * Enter a parse tree produced by the `predicateExprBetween`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	enterPredicateExprBetween?: (ctx: PredicateExprBetweenContext) => void;
	/**
	 * Exit a parse tree produced by the `predicateExprBetween`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	exitPredicateExprBetween?: (ctx: PredicateExprBetweenContext) => void;

	/**
	 * Enter a parse tree produced by the `predicateExprLike`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	enterPredicateExprLike?: (ctx: PredicateExprLikeContext) => void;
	/**
	 * Exit a parse tree produced by the `predicateExprLike`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	exitPredicateExprLike?: (ctx: PredicateExprLikeContext) => void;

	/**
	 * Enter a parse tree produced by the `predicateExprRegex`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	enterPredicateExprRegex?: (ctx: PredicateExprRegexContext) => void;
	/**
	 * Exit a parse tree produced by the `predicateExprRegex`
	 * labeled alternative in `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	exitPredicateExprRegex?: (ctx: PredicateExprRegexContext) => void;

	/**
	 * Enter a parse tree produced by the `exprIs`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprIs?: (ctx: ExprIsContext) => void;
	/**
	 * Exit a parse tree produced by the `exprIs`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprIs?: (ctx: ExprIsContext) => void;

	/**
	 * Enter a parse tree produced by the `exprNot`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprNot?: (ctx: ExprNotContext) => void;
	/**
	 * Exit a parse tree produced by the `exprNot`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprNot?: (ctx: ExprNotContext) => void;

	/**
	 * Enter a parse tree produced by the `exprAnd`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprAnd?: (ctx: ExprAndContext) => void;
	/**
	 * Exit a parse tree produced by the `exprAnd`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprAnd?: (ctx: ExprAndContext) => void;

	/**
	 * Enter a parse tree produced by the `exprXor`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprXor?: (ctx: ExprXorContext) => void;
	/**
	 * Exit a parse tree produced by the `exprXor`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprXor?: (ctx: ExprXorContext) => void;

	/**
	 * Enter a parse tree produced by the `exprOr`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprOr?: (ctx: ExprOrContext) => void;
	/**
	 * Exit a parse tree produced by the `exprOr`
	 * labeled alternative in `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprOr?: (ctx: ExprOrContext) => void;

	/**
	 * Enter a parse tree produced by the `partitionDefKey`
	 * labeled alternative in `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefKey?: (ctx: PartitionDefKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionDefKey`
	 * labeled alternative in `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefKey?: (ctx: PartitionDefKeyContext) => void;

	/**
	 * Enter a parse tree produced by the `partitionDefHash`
	 * labeled alternative in `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefHash?: (ctx: PartitionDefHashContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionDefHash`
	 * labeled alternative in `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefHash?: (ctx: PartitionDefHashContext) => void;

	/**
	 * Enter a parse tree produced by the `partitionDefRangeList`
	 * labeled alternative in `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefRangeList?: (ctx: PartitionDefRangeListContext) => void;
	/**
	 * Exit a parse tree produced by the `partitionDefRangeList`
	 * labeled alternative in `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefRangeList?: (ctx: PartitionDefRangeListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.sql_script`.
	 * @param ctx the parse tree
	 */
	enterSql_script?: (ctx: Sql_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.sql_script`.
	 * @param ctx the parse tree
	 */
	exitSql_script?: (ctx: Sql_scriptContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.simpleStatement`.
	 * @param ctx the parse tree
	 */
	enterSimpleStatement?: (ctx: SimpleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.simpleStatement`.
	 * @param ctx the parse tree
	 */
	exitSimpleStatement?: (ctx: SimpleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterStatement?: (ctx: AlterStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterStatement?: (ctx: AlterStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterEvent`.
	 * @param ctx the parse tree
	 */
	enterAlterEvent?: (ctx: AlterEventContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterEvent`.
	 * @param ctx the parse tree
	 */
	exitAlterEvent?: (ctx: AlterEventContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterLogfileGroup`.
	 * @param ctx the parse tree
	 */
	enterAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterLogfileGroup`.
	 * @param ctx the parse tree
	 */
	exitAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterLogfileGroupOptions`.
	 * @param ctx the parse tree
	 */
	enterAlterLogfileGroupOptions?: (ctx: AlterLogfileGroupOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterLogfileGroupOptions`.
	 * @param ctx the parse tree
	 */
	exitAlterLogfileGroupOptions?: (ctx: AlterLogfileGroupOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterLogfileGroupOption`.
	 * @param ctx the parse tree
	 */
	enterAlterLogfileGroupOption?: (ctx: AlterLogfileGroupOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterLogfileGroupOption`.
	 * @param ctx the parse tree
	 */
	exitAlterLogfileGroupOption?: (ctx: AlterLogfileGroupOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterServer`.
	 * @param ctx the parse tree
	 */
	enterAlterServer?: (ctx: AlterServerContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterServer`.
	 * @param ctx the parse tree
	 */
	exitAlterServer?: (ctx: AlterServerContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAlterTable?: (ctx: AlterTableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAlterTable?: (ctx: AlterTableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterTableActions`.
	 * @param ctx the parse tree
	 */
	enterAlterTableActions?: (ctx: AlterTableActionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterTableActions`.
	 * @param ctx the parse tree
	 */
	exitAlterTableActions?: (ctx: AlterTableActionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterCommandList`.
	 * @param ctx the parse tree
	 */
	enterAlterCommandList?: (ctx: AlterCommandListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterCommandList`.
	 * @param ctx the parse tree
	 */
	exitAlterCommandList?: (ctx: AlterCommandListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterCommandsModifierList`.
	 * @param ctx the parse tree
	 */
	enterAlterCommandsModifierList?: (ctx: AlterCommandsModifierListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterCommandsModifierList`.
	 * @param ctx the parse tree
	 */
	exitAlterCommandsModifierList?: (ctx: AlterCommandsModifierListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.standaloneAlterCommands`.
	 * @param ctx the parse tree
	 */
	enterStandaloneAlterCommands?: (ctx: StandaloneAlterCommandsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.standaloneAlterCommands`.
	 * @param ctx the parse tree
	 */
	exitStandaloneAlterCommands?: (ctx: StandaloneAlterCommandsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterPartition`.
	 * @param ctx the parse tree
	 */
	enterAlterPartition?: (ctx: AlterPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterPartition`.
	 * @param ctx the parse tree
	 */
	exitAlterPartition?: (ctx: AlterPartitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterList`.
	 * @param ctx the parse tree
	 */
	enterAlterList?: (ctx: AlterListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterList`.
	 * @param ctx the parse tree
	 */
	exitAlterList?: (ctx: AlterListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterCommandsModifier`.
	 * @param ctx the parse tree
	 */
	enterAlterCommandsModifier?: (ctx: AlterCommandsModifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterCommandsModifier`.
	 * @param ctx the parse tree
	 */
	exitAlterCommandsModifier?: (ctx: AlterCommandsModifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterListItem`.
	 * @param ctx the parse tree
	 */
	enterAlterListItem?: (ctx: AlterListItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterListItem`.
	 * @param ctx the parse tree
	 */
	exitAlterListItem?: (ctx: AlterListItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.place`.
	 * @param ctx the parse tree
	 */
	enterPlace?: (ctx: PlaceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.place`.
	 * @param ctx the parse tree
	 */
	exitPlace?: (ctx: PlaceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.restrict`.
	 * @param ctx the parse tree
	 */
	enterRestrict?: (ctx: RestrictContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.restrict`.
	 * @param ctx the parse tree
	 */
	exitRestrict?: (ctx: RestrictContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterOrderList`.
	 * @param ctx the parse tree
	 */
	enterAlterOrderList?: (ctx: AlterOrderListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterOrderList`.
	 * @param ctx the parse tree
	 */
	exitAlterOrderList?: (ctx: AlterOrderListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterAlgorithmOption`.
	 * @param ctx the parse tree
	 */
	enterAlterAlgorithmOption?: (ctx: AlterAlgorithmOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterAlgorithmOption`.
	 * @param ctx the parse tree
	 */
	exitAlterAlgorithmOption?: (ctx: AlterAlgorithmOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterLockOption`.
	 * @param ctx the parse tree
	 */
	enterAlterLockOption?: (ctx: AlterLockOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterLockOption`.
	 * @param ctx the parse tree
	 */
	exitAlterLockOption?: (ctx: AlterLockOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexLockAndAlgorithm`.
	 * @param ctx the parse tree
	 */
	enterIndexLockAndAlgorithm?: (ctx: IndexLockAndAlgorithmContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexLockAndAlgorithm`.
	 * @param ctx the parse tree
	 */
	exitIndexLockAndAlgorithm?: (ctx: IndexLockAndAlgorithmContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.withValidation`.
	 * @param ctx the parse tree
	 */
	enterWithValidation?: (ctx: WithValidationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.withValidation`.
	 * @param ctx the parse tree
	 */
	exitWithValidation?: (ctx: WithValidationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.removePartitioning`.
	 * @param ctx the parse tree
	 */
	enterRemovePartitioning?: (ctx: RemovePartitioningContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.removePartitioning`.
	 * @param ctx the parse tree
	 */
	exitRemovePartitioning?: (ctx: RemovePartitioningContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.allOrPartitionNameList`.
	 * @param ctx the parse tree
	 */
	enterAllOrPartitionNameList?: (ctx: AllOrPartitionNameListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.allOrPartitionNameList`.
	 * @param ctx the parse tree
	 */
	exitAllOrPartitionNameList?: (ctx: AllOrPartitionNameListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.reorgPartitionRule`.
	 * @param ctx the parse tree
	 */
	enterReorgPartitionRule?: (ctx: ReorgPartitionRuleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.reorgPartitionRule`.
	 * @param ctx the parse tree
	 */
	exitReorgPartitionRule?: (ctx: ReorgPartitionRuleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterTablespace`.
	 * @param ctx the parse tree
	 */
	enterAlterTablespace?: (ctx: AlterTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterTablespace`.
	 * @param ctx the parse tree
	 */
	exitAlterTablespace?: (ctx: AlterTablespaceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterUndoTablespace`.
	 * @param ctx the parse tree
	 */
	enterAlterUndoTablespace?: (ctx: AlterUndoTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterUndoTablespace`.
	 * @param ctx the parse tree
	 */
	exitAlterUndoTablespace?: (ctx: AlterUndoTablespaceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.undoTableSpaceOptions`.
	 * @param ctx the parse tree
	 */
	enterUndoTableSpaceOptions?: (ctx: UndoTableSpaceOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.undoTableSpaceOptions`.
	 * @param ctx the parse tree
	 */
	exitUndoTableSpaceOptions?: (ctx: UndoTableSpaceOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.undoTableSpaceOption`.
	 * @param ctx the parse tree
	 */
	enterUndoTableSpaceOption?: (ctx: UndoTableSpaceOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.undoTableSpaceOption`.
	 * @param ctx the parse tree
	 */
	exitUndoTableSpaceOption?: (ctx: UndoTableSpaceOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterTablespaceOptions`.
	 * @param ctx the parse tree
	 */
	enterAlterTablespaceOptions?: (ctx: AlterTablespaceOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterTablespaceOptions`.
	 * @param ctx the parse tree
	 */
	exitAlterTablespaceOptions?: (ctx: AlterTablespaceOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterTablespaceOption`.
	 * @param ctx the parse tree
	 */
	enterAlterTablespaceOption?: (ctx: AlterTablespaceOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterTablespaceOption`.
	 * @param ctx the parse tree
	 */
	exitAlterTablespaceOption?: (ctx: AlterTablespaceOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.changeTablespaceOption`.
	 * @param ctx the parse tree
	 */
	enterChangeTablespaceOption?: (ctx: ChangeTablespaceOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.changeTablespaceOption`.
	 * @param ctx the parse tree
	 */
	exitChangeTablespaceOption?: (ctx: ChangeTablespaceOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterView`.
	 * @param ctx the parse tree
	 */
	enterAlterView?: (ctx: AlterViewContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterView`.
	 * @param ctx the parse tree
	 */
	exitAlterView?: (ctx: AlterViewContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewTail`.
	 * @param ctx the parse tree
	 */
	enterViewTail?: (ctx: ViewTailContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewTail`.
	 * @param ctx the parse tree
	 */
	exitViewTail?: (ctx: ViewTailContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewSelect`.
	 * @param ctx the parse tree
	 */
	enterViewSelect?: (ctx: ViewSelectContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewSelect`.
	 * @param ctx the parse tree
	 */
	exitViewSelect?: (ctx: ViewSelectContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewCheckOption`.
	 * @param ctx the parse tree
	 */
	enterViewCheckOption?: (ctx: ViewCheckOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewCheckOption`.
	 * @param ctx the parse tree
	 */
	exitViewCheckOption?: (ctx: ViewCheckOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateStatement?: (ctx: CreateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateStatement?: (ctx: CreateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createDatabase`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createDatabase`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createDatabaseOption`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createDatabaseOption`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableElementList`.
	 * @param ctx the parse tree
	 */
	enterTableElementList?: (ctx: TableElementListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableElementList`.
	 * @param ctx the parse tree
	 */
	exitTableElementList?: (ctx: TableElementListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableElement`.
	 * @param ctx the parse tree
	 */
	enterTableElement?: (ctx: TableElementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableElement`.
	 * @param ctx the parse tree
	 */
	exitTableElement?: (ctx: TableElementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.duplicateAsQueryExpression`.
	 * @param ctx the parse tree
	 */
	enterDuplicateAsQueryExpression?: (ctx: DuplicateAsQueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.duplicateAsQueryExpression`.
	 * @param ctx the parse tree
	 */
	exitDuplicateAsQueryExpression?: (ctx: DuplicateAsQueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.queryExpressionOrParens`.
	 * @param ctx the parse tree
	 */
	enterQueryExpressionOrParens?: (ctx: QueryExpressionOrParensContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.queryExpressionOrParens`.
	 * @param ctx the parse tree
	 */
	exitQueryExpressionOrParens?: (ctx: QueryExpressionOrParensContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createRoutine`.
	 * @param ctx the parse tree
	 */
	enterCreateRoutine?: (ctx: CreateRoutineContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createRoutine`.
	 * @param ctx the parse tree
	 */
	exitCreateRoutine?: (ctx: CreateRoutineContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createProcedure`.
	 * @param ctx the parse tree
	 */
	enterCreateProcedure?: (ctx: CreateProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createProcedure`.
	 * @param ctx the parse tree
	 */
	exitCreateProcedure?: (ctx: CreateProcedureContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createFunction`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createFunction`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createUdf`.
	 * @param ctx the parse tree
	 */
	enterCreateUdf?: (ctx: CreateUdfContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createUdf`.
	 * @param ctx the parse tree
	 */
	exitCreateUdf?: (ctx: CreateUdfContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.routineCreateOption`.
	 * @param ctx the parse tree
	 */
	enterRoutineCreateOption?: (ctx: RoutineCreateOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.routineCreateOption`.
	 * @param ctx the parse tree
	 */
	exitRoutineCreateOption?: (ctx: RoutineCreateOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.routineAlterOptions`.
	 * @param ctx the parse tree
	 */
	enterRoutineAlterOptions?: (ctx: RoutineAlterOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.routineAlterOptions`.
	 * @param ctx the parse tree
	 */
	exitRoutineAlterOptions?: (ctx: RoutineAlterOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.routineOption`.
	 * @param ctx the parse tree
	 */
	enterRoutineOption?: (ctx: RoutineOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.routineOption`.
	 * @param ctx the parse tree
	 */
	exitRoutineOption?: (ctx: RoutineOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createIndex`.
	 * @param ctx the parse tree
	 */
	enterCreateIndex?: (ctx: CreateIndexContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createIndex`.
	 * @param ctx the parse tree
	 */
	exitCreateIndex?: (ctx: CreateIndexContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexNameAndType`.
	 * @param ctx the parse tree
	 */
	enterIndexNameAndType?: (ctx: IndexNameAndTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexNameAndType`.
	 * @param ctx the parse tree
	 */
	exitIndexNameAndType?: (ctx: IndexNameAndTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createIndexTarget`.
	 * @param ctx the parse tree
	 */
	enterCreateIndexTarget?: (ctx: CreateIndexTargetContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createIndexTarget`.
	 * @param ctx the parse tree
	 */
	exitCreateIndexTarget?: (ctx: CreateIndexTargetContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createLogfileGroup`.
	 * @param ctx the parse tree
	 */
	enterCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createLogfileGroup`.
	 * @param ctx the parse tree
	 */
	exitCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.logfileGroupOptions`.
	 * @param ctx the parse tree
	 */
	enterLogfileGroupOptions?: (ctx: LogfileGroupOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.logfileGroupOptions`.
	 * @param ctx the parse tree
	 */
	exitLogfileGroupOptions?: (ctx: LogfileGroupOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.logfileGroupOption`.
	 * @param ctx the parse tree
	 */
	enterLogfileGroupOption?: (ctx: LogfileGroupOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.logfileGroupOption`.
	 * @param ctx the parse tree
	 */
	exitLogfileGroupOption?: (ctx: LogfileGroupOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createServer`.
	 * @param ctx the parse tree
	 */
	enterCreateServer?: (ctx: CreateServerContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createServer`.
	 * @param ctx the parse tree
	 */
	exitCreateServer?: (ctx: CreateServerContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.serverOptions`.
	 * @param ctx the parse tree
	 */
	enterServerOptions?: (ctx: ServerOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.serverOptions`.
	 * @param ctx the parse tree
	 */
	exitServerOptions?: (ctx: ServerOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.serverOption`.
	 * @param ctx the parse tree
	 */
	enterServerOption?: (ctx: ServerOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.serverOption`.
	 * @param ctx the parse tree
	 */
	exitServerOption?: (ctx: ServerOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createTablespace`.
	 * @param ctx the parse tree
	 */
	enterCreateTablespace?: (ctx: CreateTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createTablespace`.
	 * @param ctx the parse tree
	 */
	exitCreateTablespace?: (ctx: CreateTablespaceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createUndoTablespace`.
	 * @param ctx the parse tree
	 */
	enterCreateUndoTablespace?: (ctx: CreateUndoTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createUndoTablespace`.
	 * @param ctx the parse tree
	 */
	exitCreateUndoTablespace?: (ctx: CreateUndoTablespaceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsDataFileName`.
	 * @param ctx the parse tree
	 */
	enterTsDataFileName?: (ctx: TsDataFileNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsDataFileName`.
	 * @param ctx the parse tree
	 */
	exitTsDataFileName?: (ctx: TsDataFileNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsDataFile`.
	 * @param ctx the parse tree
	 */
	enterTsDataFile?: (ctx: TsDataFileContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsDataFile`.
	 * @param ctx the parse tree
	 */
	exitTsDataFile?: (ctx: TsDataFileContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tablespaceOptions`.
	 * @param ctx the parse tree
	 */
	enterTablespaceOptions?: (ctx: TablespaceOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tablespaceOptions`.
	 * @param ctx the parse tree
	 */
	exitTablespaceOptions?: (ctx: TablespaceOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tablespaceOption`.
	 * @param ctx the parse tree
	 */
	enterTablespaceOption?: (ctx: TablespaceOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tablespaceOption`.
	 * @param ctx the parse tree
	 */
	exitTablespaceOption?: (ctx: TablespaceOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionInitialSize`.
	 * @param ctx the parse tree
	 */
	enterTsOptionInitialSize?: (ctx: TsOptionInitialSizeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionInitialSize`.
	 * @param ctx the parse tree
	 */
	exitTsOptionInitialSize?: (ctx: TsOptionInitialSizeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionUndoRedoBufferSize`.
	 * @param ctx the parse tree
	 */
	enterTsOptionUndoRedoBufferSize?: (ctx: TsOptionUndoRedoBufferSizeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionUndoRedoBufferSize`.
	 * @param ctx the parse tree
	 */
	exitTsOptionUndoRedoBufferSize?: (ctx: TsOptionUndoRedoBufferSizeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionAutoextendSize`.
	 * @param ctx the parse tree
	 */
	enterTsOptionAutoextendSize?: (ctx: TsOptionAutoextendSizeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionAutoextendSize`.
	 * @param ctx the parse tree
	 */
	exitTsOptionAutoextendSize?: (ctx: TsOptionAutoextendSizeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionMaxSize`.
	 * @param ctx the parse tree
	 */
	enterTsOptionMaxSize?: (ctx: TsOptionMaxSizeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionMaxSize`.
	 * @param ctx the parse tree
	 */
	exitTsOptionMaxSize?: (ctx: TsOptionMaxSizeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionExtentSize`.
	 * @param ctx the parse tree
	 */
	enterTsOptionExtentSize?: (ctx: TsOptionExtentSizeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionExtentSize`.
	 * @param ctx the parse tree
	 */
	exitTsOptionExtentSize?: (ctx: TsOptionExtentSizeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionNodegroup`.
	 * @param ctx the parse tree
	 */
	enterTsOptionNodegroup?: (ctx: TsOptionNodegroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionNodegroup`.
	 * @param ctx the parse tree
	 */
	exitTsOptionNodegroup?: (ctx: TsOptionNodegroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionEngine`.
	 * @param ctx the parse tree
	 */
	enterTsOptionEngine?: (ctx: TsOptionEngineContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionEngine`.
	 * @param ctx the parse tree
	 */
	exitTsOptionEngine?: (ctx: TsOptionEngineContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionWait`.
	 * @param ctx the parse tree
	 */
	enterTsOptionWait?: (ctx: TsOptionWaitContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionWait`.
	 * @param ctx the parse tree
	 */
	exitTsOptionWait?: (ctx: TsOptionWaitContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionComment`.
	 * @param ctx the parse tree
	 */
	enterTsOptionComment?: (ctx: TsOptionCommentContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionComment`.
	 * @param ctx the parse tree
	 */
	exitTsOptionComment?: (ctx: TsOptionCommentContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionFileblockSize`.
	 * @param ctx the parse tree
	 */
	enterTsOptionFileblockSize?: (ctx: TsOptionFileblockSizeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionFileblockSize`.
	 * @param ctx the parse tree
	 */
	exitTsOptionFileblockSize?: (ctx: TsOptionFileblockSizeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tsOptionEncryption`.
	 * @param ctx the parse tree
	 */
	enterTsOptionEncryption?: (ctx: TsOptionEncryptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tsOptionEncryption`.
	 * @param ctx the parse tree
	 */
	exitTsOptionEncryption?: (ctx: TsOptionEncryptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createView`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createView`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewReplaceOrAlgorithm`.
	 * @param ctx the parse tree
	 */
	enterViewReplaceOrAlgorithm?: (ctx: ViewReplaceOrAlgorithmContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewReplaceOrAlgorithm`.
	 * @param ctx the parse tree
	 */
	exitViewReplaceOrAlgorithm?: (ctx: ViewReplaceOrAlgorithmContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewAlgorithm`.
	 * @param ctx the parse tree
	 */
	enterViewAlgorithm?: (ctx: ViewAlgorithmContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewAlgorithm`.
	 * @param ctx the parse tree
	 */
	exitViewAlgorithm?: (ctx: ViewAlgorithmContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewSuid`.
	 * @param ctx the parse tree
	 */
	enterViewSuid?: (ctx: ViewSuidContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewSuid`.
	 * @param ctx the parse tree
	 */
	exitViewSuid?: (ctx: ViewSuidContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createTrigger`.
	 * @param ctx the parse tree
	 */
	enterCreateTrigger?: (ctx: CreateTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createTrigger`.
	 * @param ctx the parse tree
	 */
	exitCreateTrigger?: (ctx: CreateTriggerContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.triggerFollowsPrecedesClause`.
	 * @param ctx the parse tree
	 */
	enterTriggerFollowsPrecedesClause?: (ctx: TriggerFollowsPrecedesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.triggerFollowsPrecedesClause`.
	 * @param ctx the parse tree
	 */
	exitTriggerFollowsPrecedesClause?: (ctx: TriggerFollowsPrecedesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createEvent`.
	 * @param ctx the parse tree
	 */
	enterCreateEvent?: (ctx: CreateEventContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createEvent`.
	 * @param ctx the parse tree
	 */
	exitCreateEvent?: (ctx: CreateEventContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createRole`.
	 * @param ctx the parse tree
	 */
	enterCreateRole?: (ctx: CreateRoleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createRole`.
	 * @param ctx the parse tree
	 */
	exitCreateRole?: (ctx: CreateRoleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createSpatialReference`.
	 * @param ctx the parse tree
	 */
	enterCreateSpatialReference?: (ctx: CreateSpatialReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createSpatialReference`.
	 * @param ctx the parse tree
	 */
	exitCreateSpatialReference?: (ctx: CreateSpatialReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.srsAttribute`.
	 * @param ctx the parse tree
	 */
	enterSrsAttribute?: (ctx: SrsAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.srsAttribute`.
	 * @param ctx the parse tree
	 */
	exitSrsAttribute?: (ctx: SrsAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropStatement`.
	 * @param ctx the parse tree
	 */
	enterDropStatement?: (ctx: DropStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropStatement`.
	 * @param ctx the parse tree
	 */
	exitDropStatement?: (ctx: DropStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	enterDropDatabase?: (ctx: DropDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	exitDropDatabase?: (ctx: DropDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropEvent`.
	 * @param ctx the parse tree
	 */
	enterDropEvent?: (ctx: DropEventContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropEvent`.
	 * @param ctx the parse tree
	 */
	exitDropEvent?: (ctx: DropEventContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropProcedure`.
	 * @param ctx the parse tree
	 */
	enterDropProcedure?: (ctx: DropProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropProcedure`.
	 * @param ctx the parse tree
	 */
	exitDropProcedure?: (ctx: DropProcedureContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropIndex`.
	 * @param ctx the parse tree
	 */
	enterDropIndex?: (ctx: DropIndexContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropIndex`.
	 * @param ctx the parse tree
	 */
	exitDropIndex?: (ctx: DropIndexContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropLogfileGroup`.
	 * @param ctx the parse tree
	 */
	enterDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropLogfileGroup`.
	 * @param ctx the parse tree
	 */
	exitDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropLogfileGroupOption`.
	 * @param ctx the parse tree
	 */
	enterDropLogfileGroupOption?: (ctx: DropLogfileGroupOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropLogfileGroupOption`.
	 * @param ctx the parse tree
	 */
	exitDropLogfileGroupOption?: (ctx: DropLogfileGroupOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropServer`.
	 * @param ctx the parse tree
	 */
	enterDropServer?: (ctx: DropServerContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropServer`.
	 * @param ctx the parse tree
	 */
	exitDropServer?: (ctx: DropServerContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropTable`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropTable`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropTableSpace`.
	 * @param ctx the parse tree
	 */
	enterDropTableSpace?: (ctx: DropTableSpaceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropTableSpace`.
	 * @param ctx the parse tree
	 */
	exitDropTableSpace?: (ctx: DropTableSpaceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropTrigger`.
	 * @param ctx the parse tree
	 */
	enterDropTrigger?: (ctx: DropTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropTrigger`.
	 * @param ctx the parse tree
	 */
	exitDropTrigger?: (ctx: DropTriggerContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropView`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropView`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropRole`.
	 * @param ctx the parse tree
	 */
	enterDropRole?: (ctx: DropRoleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropRole`.
	 * @param ctx the parse tree
	 */
	exitDropRole?: (ctx: DropRoleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropSpatialReference`.
	 * @param ctx the parse tree
	 */
	enterDropSpatialReference?: (ctx: DropSpatialReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropSpatialReference`.
	 * @param ctx the parse tree
	 */
	exitDropSpatialReference?: (ctx: DropSpatialReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropUndoTablespace`.
	 * @param ctx the parse tree
	 */
	enterDropUndoTablespace?: (ctx: DropUndoTablespaceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropUndoTablespace`.
	 * @param ctx the parse tree
	 */
	exitDropUndoTablespace?: (ctx: DropUndoTablespaceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.renameTableStatement`.
	 * @param ctx the parse tree
	 */
	enterRenameTableStatement?: (ctx: RenameTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.renameTableStatement`.
	 * @param ctx the parse tree
	 */
	exitRenameTableStatement?: (ctx: RenameTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.renamePair`.
	 * @param ctx the parse tree
	 */
	enterRenamePair?: (ctx: RenamePairContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.renamePair`.
	 * @param ctx the parse tree
	 */
	exitRenamePair?: (ctx: RenamePairContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.callStatement`.
	 * @param ctx the parse tree
	 */
	enterCallStatement?: (ctx: CallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.callStatement`.
	 * @param ctx the parse tree
	 */
	exitCallStatement?: (ctx: CallStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatement?: (ctx: DeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionDelete`.
	 * @param ctx the parse tree
	 */
	enterPartitionDelete?: (ctx: PartitionDeleteContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionDelete`.
	 * @param ctx the parse tree
	 */
	exitPartitionDelete?: (ctx: PartitionDeleteContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.deleteStatementOption`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatementOption?: (ctx: DeleteStatementOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.deleteStatementOption`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatementOption?: (ctx: DeleteStatementOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.handlerStatement`.
	 * @param ctx the parse tree
	 */
	enterHandlerStatement?: (ctx: HandlerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.handlerStatement`.
	 * @param ctx the parse tree
	 */
	exitHandlerStatement?: (ctx: HandlerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.handlerReadOrScan`.
	 * @param ctx the parse tree
	 */
	enterHandlerReadOrScan?: (ctx: HandlerReadOrScanContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.handlerReadOrScan`.
	 * @param ctx the parse tree
	 */
	exitHandlerReadOrScan?: (ctx: HandlerReadOrScanContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertStatement?: (ctx: InsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.insertLockOption`.
	 * @param ctx the parse tree
	 */
	enterInsertLockOption?: (ctx: InsertLockOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.insertLockOption`.
	 * @param ctx the parse tree
	 */
	exitInsertLockOption?: (ctx: InsertLockOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.insertFromConstructor`.
	 * @param ctx the parse tree
	 */
	enterInsertFromConstructor?: (ctx: InsertFromConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.insertFromConstructor`.
	 * @param ctx the parse tree
	 */
	exitInsertFromConstructor?: (ctx: InsertFromConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fields`.
	 * @param ctx the parse tree
	 */
	enterFields?: (ctx: FieldsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fields`.
	 * @param ctx the parse tree
	 */
	exitFields?: (ctx: FieldsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.insertValues`.
	 * @param ctx the parse tree
	 */
	enterInsertValues?: (ctx: InsertValuesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.insertValues`.
	 * @param ctx the parse tree
	 */
	exitInsertValues?: (ctx: InsertValuesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.insertQueryExpression`.
	 * @param ctx the parse tree
	 */
	enterInsertQueryExpression?: (ctx: InsertQueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.insertQueryExpression`.
	 * @param ctx the parse tree
	 */
	exitInsertQueryExpression?: (ctx: InsertQueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.valueList`.
	 * @param ctx the parse tree
	 */
	enterValueList?: (ctx: ValueListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.valueList`.
	 * @param ctx the parse tree
	 */
	exitValueList?: (ctx: ValueListContext) => void;

	/**
	 * Enter a parse tree produced by the `values`
	 * labeled alternative in `MultiQueryMySQLParser.exprexprexprexprexprboolPriboolPriboolPriboolPripredicateOperationspredicateOperationspredicateOperationspredicateOperationssimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprpartitionTypeDefpartitionTypeDefpartitionTypeDef`.
	 * @param ctx the parse tree
	 */
	enterValues?: (ctx: ValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `values`
	 * labeled alternative in `MultiQueryMySQLParser.exprexprexprexprexprboolPriboolPriboolPriboolPripredicateOperationspredicateOperationspredicateOperationspredicateOperationssimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprsimpleExprpartitionTypeDefpartitionTypeDefpartitionTypeDef`.
	 * @param ctx the parse tree
	 */
	exitValues?: (ctx: ValuesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.valuesReference`.
	 * @param ctx the parse tree
	 */
	enterValuesReference?: (ctx: ValuesReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.valuesReference`.
	 * @param ctx the parse tree
	 */
	exitValuesReference?: (ctx: ValuesReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.insertUpdateList`.
	 * @param ctx the parse tree
	 */
	enterInsertUpdateList?: (ctx: InsertUpdateListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.insertUpdateList`.
	 * @param ctx the parse tree
	 */
	exitInsertUpdateList?: (ctx: InsertUpdateListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.loadStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadStatement?: (ctx: LoadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.loadStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadStatement?: (ctx: LoadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dataOrXml`.
	 * @param ctx the parse tree
	 */
	enterDataOrXml?: (ctx: DataOrXmlContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dataOrXml`.
	 * @param ctx the parse tree
	 */
	exitDataOrXml?: (ctx: DataOrXmlContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.xmlRowsIdentifiedBy`.
	 * @param ctx the parse tree
	 */
	enterXmlRowsIdentifiedBy?: (ctx: XmlRowsIdentifiedByContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.xmlRowsIdentifiedBy`.
	 * @param ctx the parse tree
	 */
	exitXmlRowsIdentifiedBy?: (ctx: XmlRowsIdentifiedByContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.loadDataFileTail`.
	 * @param ctx the parse tree
	 */
	enterLoadDataFileTail?: (ctx: LoadDataFileTailContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.loadDataFileTail`.
	 * @param ctx the parse tree
	 */
	exitLoadDataFileTail?: (ctx: LoadDataFileTailContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.loadDataFileTargetList`.
	 * @param ctx the parse tree
	 */
	enterLoadDataFileTargetList?: (ctx: LoadDataFileTargetListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.loadDataFileTargetList`.
	 * @param ctx the parse tree
	 */
	exitLoadDataFileTargetList?: (ctx: LoadDataFileTargetListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fieldOrVariableList`.
	 * @param ctx the parse tree
	 */
	enterFieldOrVariableList?: (ctx: FieldOrVariableListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fieldOrVariableList`.
	 * @param ctx the parse tree
	 */
	exitFieldOrVariableList?: (ctx: FieldOrVariableListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.replaceStatement`.
	 * @param ctx the parse tree
	 */
	enterReplaceStatement?: (ctx: ReplaceStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.replaceStatement`.
	 * @param ctx the parse tree
	 */
	exitReplaceStatement?: (ctx: ReplaceStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectStatement?: (ctx: SelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectStatement?: (ctx: SelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.selectStatementWithInto`.
	 * @param ctx the parse tree
	 */
	enterSelectStatementWithInto?: (ctx: SelectStatementWithIntoContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.selectStatementWithInto`.
	 * @param ctx the parse tree
	 */
	exitSelectStatementWithInto?: (ctx: SelectStatementWithIntoContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.queryExpression`.
	 * @param ctx the parse tree
	 */
	enterQueryExpression?: (ctx: QueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.queryExpression`.
	 * @param ctx the parse tree
	 */
	exitQueryExpression?: (ctx: QueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.queryExpressionBody`.
	 * @param ctx the parse tree
	 */
	enterQueryExpressionBody?: (ctx: QueryExpressionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.queryExpressionBody`.
	 * @param ctx the parse tree
	 */
	exitQueryExpressionBody?: (ctx: QueryExpressionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.queryExpressionParens`.
	 * @param ctx the parse tree
	 */
	enterQueryExpressionParens?: (ctx: QueryExpressionParensContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.queryExpressionParens`.
	 * @param ctx the parse tree
	 */
	exitQueryExpressionParens?: (ctx: QueryExpressionParensContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.querySpecOption`.
	 * @param ctx the parse tree
	 */
	enterQuerySpecOption?: (ctx: QuerySpecOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.querySpecOption`.
	 * @param ctx the parse tree
	 */
	exitQuerySpecOption?: (ctx: QuerySpecOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.simpleLimitClause`.
	 * @param ctx the parse tree
	 */
	enterSimpleLimitClause?: (ctx: SimpleLimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.simpleLimitClause`.
	 * @param ctx the parse tree
	 */
	exitSimpleLimitClause?: (ctx: SimpleLimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.limitOptions`.
	 * @param ctx the parse tree
	 */
	enterLimitOptions?: (ctx: LimitOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.limitOptions`.
	 * @param ctx the parse tree
	 */
	exitLimitOptions?: (ctx: LimitOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.limitOption`.
	 * @param ctx the parse tree
	 */
	enterLimitOption?: (ctx: LimitOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.limitOption`.
	 * @param ctx the parse tree
	 */
	exitLimitOption?: (ctx: LimitOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.intoClause`.
	 * @param ctx the parse tree
	 */
	enterIntoClause?: (ctx: IntoClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.intoClause`.
	 * @param ctx the parse tree
	 */
	exitIntoClause?: (ctx: IntoClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.procedureAnalyseClause`.
	 * @param ctx the parse tree
	 */
	enterProcedureAnalyseClause?: (ctx: ProcedureAnalyseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.procedureAnalyseClause`.
	 * @param ctx the parse tree
	 */
	exitProcedureAnalyseClause?: (ctx: ProcedureAnalyseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowClause`.
	 * @param ctx the parse tree
	 */
	enterWindowClause?: (ctx: WindowClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowClause`.
	 * @param ctx the parse tree
	 */
	exitWindowClause?: (ctx: WindowClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowDefinition`.
	 * @param ctx the parse tree
	 */
	enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowDefinition`.
	 * @param ctx the parse tree
	 */
	exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowSpec?: (ctx: WindowSpecContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowSpec?: (ctx: WindowSpecContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowSpecDetails`.
	 * @param ctx the parse tree
	 */
	enterWindowSpecDetails?: (ctx: WindowSpecDetailsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowSpecDetails`.
	 * @param ctx the parse tree
	 */
	exitWindowSpecDetails?: (ctx: WindowSpecDetailsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFrameClause`.
	 * @param ctx the parse tree
	 */
	enterWindowFrameClause?: (ctx: WindowFrameClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFrameClause`.
	 * @param ctx the parse tree
	 */
	exitWindowFrameClause?: (ctx: WindowFrameClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFrameUnits`.
	 * @param ctx the parse tree
	 */
	enterWindowFrameUnits?: (ctx: WindowFrameUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFrameUnits`.
	 * @param ctx the parse tree
	 */
	exitWindowFrameUnits?: (ctx: WindowFrameUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFrameExtent`.
	 * @param ctx the parse tree
	 */
	enterWindowFrameExtent?: (ctx: WindowFrameExtentContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFrameExtent`.
	 * @param ctx the parse tree
	 */
	exitWindowFrameExtent?: (ctx: WindowFrameExtentContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFrameStart`.
	 * @param ctx the parse tree
	 */
	enterWindowFrameStart?: (ctx: WindowFrameStartContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFrameStart`.
	 * @param ctx the parse tree
	 */
	exitWindowFrameStart?: (ctx: WindowFrameStartContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFrameBetween`.
	 * @param ctx the parse tree
	 */
	enterWindowFrameBetween?: (ctx: WindowFrameBetweenContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFrameBetween`.
	 * @param ctx the parse tree
	 */
	exitWindowFrameBetween?: (ctx: WindowFrameBetweenContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFrameBound`.
	 * @param ctx the parse tree
	 */
	enterWindowFrameBound?: (ctx: WindowFrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFrameBound`.
	 * @param ctx the parse tree
	 */
	exitWindowFrameBound?: (ctx: WindowFrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFrameExclusion`.
	 * @param ctx the parse tree
	 */
	enterWindowFrameExclusion?: (ctx: WindowFrameExclusionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFrameExclusion`.
	 * @param ctx the parse tree
	 */
	exitWindowFrameExclusion?: (ctx: WindowFrameExclusionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.commonTableExpression`.
	 * @param ctx the parse tree
	 */
	enterCommonTableExpression?: (ctx: CommonTableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.commonTableExpression`.
	 * @param ctx the parse tree
	 */
	exitCommonTableExpression?: (ctx: CommonTableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.olapOption`.
	 * @param ctx the parse tree
	 */
	enterOlapOption?: (ctx: OlapOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.olapOption`.
	 * @param ctx the parse tree
	 */
	exitOlapOption?: (ctx: OlapOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.orderClause`.
	 * @param ctx the parse tree
	 */
	enterOrderClause?: (ctx: OrderClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.orderClause`.
	 * @param ctx the parse tree
	 */
	exitOrderClause?: (ctx: OrderClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.direction`.
	 * @param ctx the parse tree
	 */
	enterDirection?: (ctx: DirectionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.direction`.
	 * @param ctx the parse tree
	 */
	exitDirection?: (ctx: DirectionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableReferenceList`.
	 * @param ctx the parse tree
	 */
	enterTableReferenceList?: (ctx: TableReferenceListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableReferenceList`.
	 * @param ctx the parse tree
	 */
	exitTableReferenceList?: (ctx: TableReferenceListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.selectOption`.
	 * @param ctx the parse tree
	 */
	enterSelectOption?: (ctx: SelectOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.selectOption`.
	 * @param ctx the parse tree
	 */
	exitSelectOption?: (ctx: SelectOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lockingClause`.
	 * @param ctx the parse tree
	 */
	enterLockingClause?: (ctx: LockingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lockingClause`.
	 * @param ctx the parse tree
	 */
	exitLockingClause?: (ctx: LockingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lockStrengh`.
	 * @param ctx the parse tree
	 */
	enterLockStrengh?: (ctx: LockStrenghContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lockStrengh`.
	 * @param ctx the parse tree
	 */
	exitLockStrengh?: (ctx: LockStrenghContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lockedRowAction`.
	 * @param ctx the parse tree
	 */
	enterLockedRowAction?: (ctx: LockedRowActionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lockedRowAction`.
	 * @param ctx the parse tree
	 */
	exitLockedRowAction?: (ctx: LockedRowActionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.selectItemList`.
	 * @param ctx the parse tree
	 */
	enterSelectItemList?: (ctx: SelectItemListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.selectItemList`.
	 * @param ctx the parse tree
	 */
	exitSelectItemList?: (ctx: SelectItemListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.selectAlias`.
	 * @param ctx the parse tree
	 */
	enterSelectAlias?: (ctx: SelectAliasContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.selectAlias`.
	 * @param ctx the parse tree
	 */
	exitSelectAlias?: (ctx: SelectAliasContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableReference`.
	 * @param ctx the parse tree
	 */
	enterTableReference?: (ctx: TableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableReference`.
	 * @param ctx the parse tree
	 */
	exitTableReference?: (ctx: TableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.escapedTableReference`.
	 * @param ctx the parse tree
	 */
	enterEscapedTableReference?: (ctx: EscapedTableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.escapedTableReference`.
	 * @param ctx the parse tree
	 */
	exitEscapedTableReference?: (ctx: EscapedTableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.joinedTable`.
	 * @param ctx the parse tree
	 */
	enterJoinedTable?: (ctx: JoinedTableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.joinedTable`.
	 * @param ctx the parse tree
	 */
	exitJoinedTable?: (ctx: JoinedTableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.naturalJoinType`.
	 * @param ctx the parse tree
	 */
	enterNaturalJoinType?: (ctx: NaturalJoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.naturalJoinType`.
	 * @param ctx the parse tree
	 */
	exitNaturalJoinType?: (ctx: NaturalJoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.innerJoinType`.
	 * @param ctx the parse tree
	 */
	enterInnerJoinType?: (ctx: InnerJoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.innerJoinType`.
	 * @param ctx the parse tree
	 */
	exitInnerJoinType?: (ctx: InnerJoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.outerJoinType`.
	 * @param ctx the parse tree
	 */
	enterOuterJoinType?: (ctx: OuterJoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.outerJoinType`.
	 * @param ctx the parse tree
	 */
	exitOuterJoinType?: (ctx: OuterJoinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableFactor`.
	 * @param ctx the parse tree
	 */
	enterTableFactor?: (ctx: TableFactorContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableFactor`.
	 * @param ctx the parse tree
	 */
	exitTableFactor?: (ctx: TableFactorContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.singleTable`.
	 * @param ctx the parse tree
	 */
	enterSingleTable?: (ctx: SingleTableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.singleTable`.
	 * @param ctx the parse tree
	 */
	exitSingleTable?: (ctx: SingleTableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.singleTableParens`.
	 * @param ctx the parse tree
	 */
	enterSingleTableParens?: (ctx: SingleTableParensContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.singleTableParens`.
	 * @param ctx the parse tree
	 */
	exitSingleTableParens?: (ctx: SingleTableParensContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.derivedTable`.
	 * @param ctx the parse tree
	 */
	enterDerivedTable?: (ctx: DerivedTableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.derivedTable`.
	 * @param ctx the parse tree
	 */
	exitDerivedTable?: (ctx: DerivedTableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableReferenceListParens`.
	 * @param ctx the parse tree
	 */
	enterTableReferenceListParens?: (ctx: TableReferenceListParensContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableReferenceListParens`.
	 * @param ctx the parse tree
	 */
	exitTableReferenceListParens?: (ctx: TableReferenceListParensContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableFunction`.
	 * @param ctx the parse tree
	 */
	enterTableFunction?: (ctx: TableFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableFunction`.
	 * @param ctx the parse tree
	 */
	exitTableFunction?: (ctx: TableFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnsClause`.
	 * @param ctx the parse tree
	 */
	enterColumnsClause?: (ctx: ColumnsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnsClause`.
	 * @param ctx the parse tree
	 */
	exitColumnsClause?: (ctx: ColumnsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.jtColumn`.
	 * @param ctx the parse tree
	 */
	enterJtColumn?: (ctx: JtColumnContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.jtColumn`.
	 * @param ctx the parse tree
	 */
	exitJtColumn?: (ctx: JtColumnContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.onEmptyOrError`.
	 * @param ctx the parse tree
	 */
	enterOnEmptyOrError?: (ctx: OnEmptyOrErrorContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.onEmptyOrError`.
	 * @param ctx the parse tree
	 */
	exitOnEmptyOrError?: (ctx: OnEmptyOrErrorContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.onEmpty`.
	 * @param ctx the parse tree
	 */
	enterOnEmpty?: (ctx: OnEmptyContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.onEmpty`.
	 * @param ctx the parse tree
	 */
	exitOnEmpty?: (ctx: OnEmptyContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.onError`.
	 * @param ctx the parse tree
	 */
	enterOnError?: (ctx: OnErrorContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.onError`.
	 * @param ctx the parse tree
	 */
	exitOnError?: (ctx: OnErrorContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.jtOnResponse`.
	 * @param ctx the parse tree
	 */
	enterJtOnResponse?: (ctx: JtOnResponseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.jtOnResponse`.
	 * @param ctx the parse tree
	 */
	exitJtOnResponse?: (ctx: JtOnResponseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.unionOption`.
	 * @param ctx the parse tree
	 */
	enterUnionOption?: (ctx: UnionOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.unionOption`.
	 * @param ctx the parse tree
	 */
	exitUnionOption?: (ctx: UnionOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexHintList`.
	 * @param ctx the parse tree
	 */
	enterIndexHintList?: (ctx: IndexHintListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexHintList`.
	 * @param ctx the parse tree
	 */
	exitIndexHintList?: (ctx: IndexHintListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexHint`.
	 * @param ctx the parse tree
	 */
	enterIndexHint?: (ctx: IndexHintContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexHint`.
	 * @param ctx the parse tree
	 */
	exitIndexHint?: (ctx: IndexHintContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexHintType`.
	 * @param ctx the parse tree
	 */
	enterIndexHintType?: (ctx: IndexHintTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexHintType`.
	 * @param ctx the parse tree
	 */
	exitIndexHintType?: (ctx: IndexHintTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyOrIndex`.
	 * @param ctx the parse tree
	 */
	enterKeyOrIndex?: (ctx: KeyOrIndexContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyOrIndex`.
	 * @param ctx the parse tree
	 */
	exitKeyOrIndex?: (ctx: KeyOrIndexContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.constraintKeyType`.
	 * @param ctx the parse tree
	 */
	enterConstraintKeyType?: (ctx: ConstraintKeyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.constraintKeyType`.
	 * @param ctx the parse tree
	 */
	exitConstraintKeyType?: (ctx: ConstraintKeyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexHintClause`.
	 * @param ctx the parse tree
	 */
	enterIndexHintClause?: (ctx: IndexHintClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexHintClause`.
	 * @param ctx the parse tree
	 */
	exitIndexHintClause?: (ctx: IndexHintClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexList`.
	 * @param ctx the parse tree
	 */
	enterIndexList?: (ctx: IndexListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexList`.
	 * @param ctx the parse tree
	 */
	exitIndexList?: (ctx: IndexListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexListElement`.
	 * @param ctx the parse tree
	 */
	enterIndexListElement?: (ctx: IndexListElementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexListElement`.
	 * @param ctx the parse tree
	 */
	exitIndexListElement?: (ctx: IndexListElementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.transactionOrLockingStatement`.
	 * @param ctx the parse tree
	 */
	enterTransactionOrLockingStatement?: (ctx: TransactionOrLockingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.transactionOrLockingStatement`.
	 * @param ctx the parse tree
	 */
	exitTransactionOrLockingStatement?: (ctx: TransactionOrLockingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.transactionStatement`.
	 * @param ctx the parse tree
	 */
	enterTransactionStatement?: (ctx: TransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.transactionStatement`.
	 * @param ctx the parse tree
	 */
	exitTransactionStatement?: (ctx: TransactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.beginWork`.
	 * @param ctx the parse tree
	 */
	enterBeginWork?: (ctx: BeginWorkContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.beginWork`.
	 * @param ctx the parse tree
	 */
	exitBeginWork?: (ctx: BeginWorkContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.transactionCharacteristic`.
	 * @param ctx the parse tree
	 */
	enterTransactionCharacteristic?: (ctx: TransactionCharacteristicContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.transactionCharacteristic`.
	 * @param ctx the parse tree
	 */
	exitTransactionCharacteristic?: (ctx: TransactionCharacteristicContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.savepointStatement`.
	 * @param ctx the parse tree
	 */
	enterSavepointStatement?: (ctx: SavepointStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.savepointStatement`.
	 * @param ctx the parse tree
	 */
	exitSavepointStatement?: (ctx: SavepointStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lockStatement`.
	 * @param ctx the parse tree
	 */
	enterLockStatement?: (ctx: LockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lockStatement`.
	 * @param ctx the parse tree
	 */
	exitLockStatement?: (ctx: LockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lockItem`.
	 * @param ctx the parse tree
	 */
	enterLockItem?: (ctx: LockItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lockItem`.
	 * @param ctx the parse tree
	 */
	exitLockItem?: (ctx: LockItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lockOption`.
	 * @param ctx the parse tree
	 */
	enterLockOption?: (ctx: LockOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lockOption`.
	 * @param ctx the parse tree
	 */
	exitLockOption?: (ctx: LockOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.xaStatement`.
	 * @param ctx the parse tree
	 */
	enterXaStatement?: (ctx: XaStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.xaStatement`.
	 * @param ctx the parse tree
	 */
	exitXaStatement?: (ctx: XaStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.xaConvert`.
	 * @param ctx the parse tree
	 */
	enterXaConvert?: (ctx: XaConvertContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.xaConvert`.
	 * @param ctx the parse tree
	 */
	exitXaConvert?: (ctx: XaConvertContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.xid`.
	 * @param ctx the parse tree
	 */
	enterXid?: (ctx: XidContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.xid`.
	 * @param ctx the parse tree
	 */
	exitXid?: (ctx: XidContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.replicationStatement`.
	 * @param ctx the parse tree
	 */
	enterReplicationStatement?: (ctx: ReplicationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.replicationStatement`.
	 * @param ctx the parse tree
	 */
	exitReplicationStatement?: (ctx: ReplicationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.resetOption`.
	 * @param ctx the parse tree
	 */
	enterResetOption?: (ctx: ResetOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.resetOption`.
	 * @param ctx the parse tree
	 */
	exitResetOption?: (ctx: ResetOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.masterResetOptions`.
	 * @param ctx the parse tree
	 */
	enterMasterResetOptions?: (ctx: MasterResetOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.masterResetOptions`.
	 * @param ctx the parse tree
	 */
	exitMasterResetOptions?: (ctx: MasterResetOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.replicationLoad`.
	 * @param ctx the parse tree
	 */
	enterReplicationLoad?: (ctx: ReplicationLoadContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.replicationLoad`.
	 * @param ctx the parse tree
	 */
	exitReplicationLoad?: (ctx: ReplicationLoadContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.changeMaster`.
	 * @param ctx the parse tree
	 */
	enterChangeMaster?: (ctx: ChangeMasterContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.changeMaster`.
	 * @param ctx the parse tree
	 */
	exitChangeMaster?: (ctx: ChangeMasterContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.changeMasterOptions`.
	 * @param ctx the parse tree
	 */
	enterChangeMasterOptions?: (ctx: ChangeMasterOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.changeMasterOptions`.
	 * @param ctx the parse tree
	 */
	exitChangeMasterOptions?: (ctx: ChangeMasterOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.masterOption`.
	 * @param ctx the parse tree
	 */
	enterMasterOption?: (ctx: MasterOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.masterOption`.
	 * @param ctx the parse tree
	 */
	exitMasterOption?: (ctx: MasterOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.privilegeCheckDef`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeCheckDef?: (ctx: PrivilegeCheckDefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.privilegeCheckDef`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeCheckDef?: (ctx: PrivilegeCheckDefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.masterTlsCiphersuitesDef`.
	 * @param ctx the parse tree
	 */
	enterMasterTlsCiphersuitesDef?: (ctx: MasterTlsCiphersuitesDefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.masterTlsCiphersuitesDef`.
	 * @param ctx the parse tree
	 */
	exitMasterTlsCiphersuitesDef?: (ctx: MasterTlsCiphersuitesDefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.masterFileDef`.
	 * @param ctx the parse tree
	 */
	enterMasterFileDef?: (ctx: MasterFileDefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.masterFileDef`.
	 * @param ctx the parse tree
	 */
	exitMasterFileDef?: (ctx: MasterFileDefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.serverIdList`.
	 * @param ctx the parse tree
	 */
	enterServerIdList?: (ctx: ServerIdListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.serverIdList`.
	 * @param ctx the parse tree
	 */
	exitServerIdList?: (ctx: ServerIdListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.changeReplication`.
	 * @param ctx the parse tree
	 */
	enterChangeReplication?: (ctx: ChangeReplicationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.changeReplication`.
	 * @param ctx the parse tree
	 */
	exitChangeReplication?: (ctx: ChangeReplicationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.filterDefinition`.
	 * @param ctx the parse tree
	 */
	enterFilterDefinition?: (ctx: FilterDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.filterDefinition`.
	 * @param ctx the parse tree
	 */
	exitFilterDefinition?: (ctx: FilterDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.filterDbList`.
	 * @param ctx the parse tree
	 */
	enterFilterDbList?: (ctx: FilterDbListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.filterDbList`.
	 * @param ctx the parse tree
	 */
	exitFilterDbList?: (ctx: FilterDbListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.filterTableList`.
	 * @param ctx the parse tree
	 */
	enterFilterTableList?: (ctx: FilterTableListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.filterTableList`.
	 * @param ctx the parse tree
	 */
	exitFilterTableList?: (ctx: FilterTableListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.filterStringList`.
	 * @param ctx the parse tree
	 */
	enterFilterStringList?: (ctx: FilterStringListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.filterStringList`.
	 * @param ctx the parse tree
	 */
	exitFilterStringList?: (ctx: FilterStringListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.filterWildDbTableString`.
	 * @param ctx the parse tree
	 */
	enterFilterWildDbTableString?: (ctx: FilterWildDbTableStringContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.filterWildDbTableString`.
	 * @param ctx the parse tree
	 */
	exitFilterWildDbTableString?: (ctx: FilterWildDbTableStringContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.filterDbPairList`.
	 * @param ctx the parse tree
	 */
	enterFilterDbPairList?: (ctx: FilterDbPairListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.filterDbPairList`.
	 * @param ctx the parse tree
	 */
	exitFilterDbPairList?: (ctx: FilterDbPairListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.slave`.
	 * @param ctx the parse tree
	 */
	enterSlave?: (ctx: SlaveContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.slave`.
	 * @param ctx the parse tree
	 */
	exitSlave?: (ctx: SlaveContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.slaveUntilOptions`.
	 * @param ctx the parse tree
	 */
	enterSlaveUntilOptions?: (ctx: SlaveUntilOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.slaveUntilOptions`.
	 * @param ctx the parse tree
	 */
	exitSlaveUntilOptions?: (ctx: SlaveUntilOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.slaveConnectionOptions`.
	 * @param ctx the parse tree
	 */
	enterSlaveConnectionOptions?: (ctx: SlaveConnectionOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.slaveConnectionOptions`.
	 * @param ctx the parse tree
	 */
	exitSlaveConnectionOptions?: (ctx: SlaveConnectionOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.slaveThreadOptions`.
	 * @param ctx the parse tree
	 */
	enterSlaveThreadOptions?: (ctx: SlaveThreadOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.slaveThreadOptions`.
	 * @param ctx the parse tree
	 */
	exitSlaveThreadOptions?: (ctx: SlaveThreadOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.slaveThreadOption`.
	 * @param ctx the parse tree
	 */
	enterSlaveThreadOption?: (ctx: SlaveThreadOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.slaveThreadOption`.
	 * @param ctx the parse tree
	 */
	exitSlaveThreadOption?: (ctx: SlaveThreadOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.groupReplication`.
	 * @param ctx the parse tree
	 */
	enterGroupReplication?: (ctx: GroupReplicationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.groupReplication`.
	 * @param ctx the parse tree
	 */
	exitGroupReplication?: (ctx: GroupReplicationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.preparedStatement`.
	 * @param ctx the parse tree
	 */
	enterPreparedStatement?: (ctx: PreparedStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.preparedStatement`.
	 * @param ctx the parse tree
	 */
	exitPreparedStatement?: (ctx: PreparedStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.executeStatement`.
	 * @param ctx the parse tree
	 */
	enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.executeStatement`.
	 * @param ctx the parse tree
	 */
	exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.executeVarList`.
	 * @param ctx the parse tree
	 */
	enterExecuteVarList?: (ctx: ExecuteVarListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.executeVarList`.
	 * @param ctx the parse tree
	 */
	exitExecuteVarList?: (ctx: ExecuteVarListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.cloneStatement`.
	 * @param ctx the parse tree
	 */
	enterCloneStatement?: (ctx: CloneStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.cloneStatement`.
	 * @param ctx the parse tree
	 */
	exitCloneStatement?: (ctx: CloneStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dataDirSSL`.
	 * @param ctx the parse tree
	 */
	enterDataDirSSL?: (ctx: DataDirSSLContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dataDirSSL`.
	 * @param ctx the parse tree
	 */
	exitDataDirSSL?: (ctx: DataDirSSLContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ssl`.
	 * @param ctx the parse tree
	 */
	enterSsl?: (ctx: SslContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ssl`.
	 * @param ctx the parse tree
	 */
	exitSsl?: (ctx: SslContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.accountManagementStatement`.
	 * @param ctx the parse tree
	 */
	enterAccountManagementStatement?: (ctx: AccountManagementStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.accountManagementStatement`.
	 * @param ctx the parse tree
	 */
	exitAccountManagementStatement?: (ctx: AccountManagementStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterUser`.
	 * @param ctx the parse tree
	 */
	enterAlterUser?: (ctx: AlterUserContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterUser`.
	 * @param ctx the parse tree
	 */
	exitAlterUser?: (ctx: AlterUserContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterUserTail`.
	 * @param ctx the parse tree
	 */
	enterAlterUserTail?: (ctx: AlterUserTailContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterUserTail`.
	 * @param ctx the parse tree
	 */
	exitAlterUserTail?: (ctx: AlterUserTailContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.userFunction`.
	 * @param ctx the parse tree
	 */
	enterUserFunction?: (ctx: UserFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.userFunction`.
	 * @param ctx the parse tree
	 */
	exitUserFunction?: (ctx: UserFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createUser`.
	 * @param ctx the parse tree
	 */
	enterCreateUser?: (ctx: CreateUserContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createUser`.
	 * @param ctx the parse tree
	 */
	exitCreateUser?: (ctx: CreateUserContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createUserTail`.
	 * @param ctx the parse tree
	 */
	enterCreateUserTail?: (ctx: CreateUserTailContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createUserTail`.
	 * @param ctx the parse tree
	 */
	exitCreateUserTail?: (ctx: CreateUserTailContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.defaultRoleClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultRoleClause?: (ctx: DefaultRoleClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.defaultRoleClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultRoleClause?: (ctx: DefaultRoleClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.requireClause`.
	 * @param ctx the parse tree
	 */
	enterRequireClause?: (ctx: RequireClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.requireClause`.
	 * @param ctx the parse tree
	 */
	exitRequireClause?: (ctx: RequireClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.connectOptions`.
	 * @param ctx the parse tree
	 */
	enterConnectOptions?: (ctx: ConnectOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.connectOptions`.
	 * @param ctx the parse tree
	 */
	exitConnectOptions?: (ctx: ConnectOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.accountLockPasswordExpireOptions`.
	 * @param ctx the parse tree
	 */
	enterAccountLockPasswordExpireOptions?: (ctx: AccountLockPasswordExpireOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.accountLockPasswordExpireOptions`.
	 * @param ctx the parse tree
	 */
	exitAccountLockPasswordExpireOptions?: (ctx: AccountLockPasswordExpireOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropUser`.
	 * @param ctx the parse tree
	 */
	enterDropUser?: (ctx: DropUserContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropUser`.
	 * @param ctx the parse tree
	 */
	exitDropUser?: (ctx: DropUserContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.grant`.
	 * @param ctx the parse tree
	 */
	enterGrant?: (ctx: GrantContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.grant`.
	 * @param ctx the parse tree
	 */
	exitGrant?: (ctx: GrantContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.grantTargetList`.
	 * @param ctx the parse tree
	 */
	enterGrantTargetList?: (ctx: GrantTargetListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.grantTargetList`.
	 * @param ctx the parse tree
	 */
	exitGrantTargetList?: (ctx: GrantTargetListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.grantOptions`.
	 * @param ctx the parse tree
	 */
	enterGrantOptions?: (ctx: GrantOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.grantOptions`.
	 * @param ctx the parse tree
	 */
	exitGrantOptions?: (ctx: GrantOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.exceptRoleList`.
	 * @param ctx the parse tree
	 */
	enterExceptRoleList?: (ctx: ExceptRoleListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.exceptRoleList`.
	 * @param ctx the parse tree
	 */
	exitExceptRoleList?: (ctx: ExceptRoleListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.withRoles`.
	 * @param ctx the parse tree
	 */
	enterWithRoles?: (ctx: WithRolesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.withRoles`.
	 * @param ctx the parse tree
	 */
	exitWithRoles?: (ctx: WithRolesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.grantAs`.
	 * @param ctx the parse tree
	 */
	enterGrantAs?: (ctx: GrantAsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.grantAs`.
	 * @param ctx the parse tree
	 */
	exitGrantAs?: (ctx: GrantAsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.versionedRequireClause`.
	 * @param ctx the parse tree
	 */
	enterVersionedRequireClause?: (ctx: VersionedRequireClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.versionedRequireClause`.
	 * @param ctx the parse tree
	 */
	exitVersionedRequireClause?: (ctx: VersionedRequireClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.renameUser`.
	 * @param ctx the parse tree
	 */
	enterRenameUser?: (ctx: RenameUserContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.renameUser`.
	 * @param ctx the parse tree
	 */
	exitRenameUser?: (ctx: RenameUserContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.revoke`.
	 * @param ctx the parse tree
	 */
	enterRevoke?: (ctx: RevokeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.revoke`.
	 * @param ctx the parse tree
	 */
	exitRevoke?: (ctx: RevokeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.onTypeTo`.
	 * @param ctx the parse tree
	 */
	enterOnTypeTo?: (ctx: OnTypeToContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.onTypeTo`.
	 * @param ctx the parse tree
	 */
	exitOnTypeTo?: (ctx: OnTypeToContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.aclType`.
	 * @param ctx the parse tree
	 */
	enterAclType?: (ctx: AclTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.aclType`.
	 * @param ctx the parse tree
	 */
	exitAclType?: (ctx: AclTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleOrPrivilegesList`.
	 * @param ctx the parse tree
	 */
	enterRoleOrPrivilegesList?: (ctx: RoleOrPrivilegesListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleOrPrivilegesList`.
	 * @param ctx the parse tree
	 */
	exitRoleOrPrivilegesList?: (ctx: RoleOrPrivilegesListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleOrPrivilege`.
	 * @param ctx the parse tree
	 */
	enterRoleOrPrivilege?: (ctx: RoleOrPrivilegeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleOrPrivilege`.
	 * @param ctx the parse tree
	 */
	exitRoleOrPrivilege?: (ctx: RoleOrPrivilegeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.grantIdentifier`.
	 * @param ctx the parse tree
	 */
	enterGrantIdentifier?: (ctx: GrantIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.grantIdentifier`.
	 * @param ctx the parse tree
	 */
	exitGrantIdentifier?: (ctx: GrantIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.requireList`.
	 * @param ctx the parse tree
	 */
	enterRequireList?: (ctx: RequireListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.requireList`.
	 * @param ctx the parse tree
	 */
	exitRequireList?: (ctx: RequireListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.requireListElement`.
	 * @param ctx the parse tree
	 */
	enterRequireListElement?: (ctx: RequireListElementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.requireListElement`.
	 * @param ctx the parse tree
	 */
	exitRequireListElement?: (ctx: RequireListElementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.grantOption`.
	 * @param ctx the parse tree
	 */
	enterGrantOption?: (ctx: GrantOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.grantOption`.
	 * @param ctx the parse tree
	 */
	exitGrantOption?: (ctx: GrantOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.setRole`.
	 * @param ctx the parse tree
	 */
	enterSetRole?: (ctx: SetRoleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.setRole`.
	 * @param ctx the parse tree
	 */
	exitSetRole?: (ctx: SetRoleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleList`.
	 * @param ctx the parse tree
	 */
	enterRoleList?: (ctx: RoleListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleList`.
	 * @param ctx the parse tree
	 */
	exitRoleList?: (ctx: RoleListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.role`.
	 * @param ctx the parse tree
	 */
	enterRole?: (ctx: RoleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.role`.
	 * @param ctx the parse tree
	 */
	exitRole?: (ctx: RoleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableAdministrationStatement`.
	 * @param ctx the parse tree
	 */
	enterTableAdministrationStatement?: (ctx: TableAdministrationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableAdministrationStatement`.
	 * @param ctx the parse tree
	 */
	exitTableAdministrationStatement?: (ctx: TableAdministrationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.histogram`.
	 * @param ctx the parse tree
	 */
	enterHistogram?: (ctx: HistogramContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.histogram`.
	 * @param ctx the parse tree
	 */
	exitHistogram?: (ctx: HistogramContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.checkOption`.
	 * @param ctx the parse tree
	 */
	enterCheckOption?: (ctx: CheckOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.checkOption`.
	 * @param ctx the parse tree
	 */
	exitCheckOption?: (ctx: CheckOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.repairType`.
	 * @param ctx the parse tree
	 */
	enterRepairType?: (ctx: RepairTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.repairType`.
	 * @param ctx the parse tree
	 */
	exitRepairType?: (ctx: RepairTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.installUninstallStatment`.
	 * @param ctx the parse tree
	 */
	enterInstallUninstallStatment?: (ctx: InstallUninstallStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.installUninstallStatment`.
	 * @param ctx the parse tree
	 */
	exitInstallUninstallStatment?: (ctx: InstallUninstallStatmentContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.setStatement`.
	 * @param ctx the parse tree
	 */
	enterSetStatement?: (ctx: SetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.setStatement`.
	 * @param ctx the parse tree
	 */
	exitSetStatement?: (ctx: SetStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.startOptionValueList`.
	 * @param ctx the parse tree
	 */
	enterStartOptionValueList?: (ctx: StartOptionValueListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.startOptionValueList`.
	 * @param ctx the parse tree
	 */
	exitStartOptionValueList?: (ctx: StartOptionValueListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.transactionCharacteristics`.
	 * @param ctx the parse tree
	 */
	enterTransactionCharacteristics?: (ctx: TransactionCharacteristicsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.transactionCharacteristics`.
	 * @param ctx the parse tree
	 */
	exitTransactionCharacteristics?: (ctx: TransactionCharacteristicsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.isolationLevel`.
	 * @param ctx the parse tree
	 */
	enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.isolationLevel`.
	 * @param ctx the parse tree
	 */
	exitIsolationLevel?: (ctx: IsolationLevelContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.optionValueListContinued`.
	 * @param ctx the parse tree
	 */
	enterOptionValueListContinued?: (ctx: OptionValueListContinuedContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.optionValueListContinued`.
	 * @param ctx the parse tree
	 */
	exitOptionValueListContinued?: (ctx: OptionValueListContinuedContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.optionValueNoOptionType`.
	 * @param ctx the parse tree
	 */
	enterOptionValueNoOptionType?: (ctx: OptionValueNoOptionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.optionValueNoOptionType`.
	 * @param ctx the parse tree
	 */
	exitOptionValueNoOptionType?: (ctx: OptionValueNoOptionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.optionValue`.
	 * @param ctx the parse tree
	 */
	enterOptionValue?: (ctx: OptionValueContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.optionValue`.
	 * @param ctx the parse tree
	 */
	exitOptionValue?: (ctx: OptionValueContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.setSystemVariable`.
	 * @param ctx the parse tree
	 */
	enterSetSystemVariable?: (ctx: SetSystemVariableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.setSystemVariable`.
	 * @param ctx the parse tree
	 */
	exitSetSystemVariable?: (ctx: SetSystemVariableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.startOptionValueListFollowingOptionType`.
	 * @param ctx the parse tree
	 */
	enterStartOptionValueListFollowingOptionType?: (ctx: StartOptionValueListFollowingOptionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.startOptionValueListFollowingOptionType`.
	 * @param ctx the parse tree
	 */
	exitStartOptionValueListFollowingOptionType?: (ctx: StartOptionValueListFollowingOptionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.optionValueFollowingOptionType`.
	 * @param ctx the parse tree
	 */
	enterOptionValueFollowingOptionType?: (ctx: OptionValueFollowingOptionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.optionValueFollowingOptionType`.
	 * @param ctx the parse tree
	 */
	exitOptionValueFollowingOptionType?: (ctx: OptionValueFollowingOptionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.setExprOrDefault`.
	 * @param ctx the parse tree
	 */
	enterSetExprOrDefault?: (ctx: SetExprOrDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.setExprOrDefault`.
	 * @param ctx the parse tree
	 */
	exitSetExprOrDefault?: (ctx: SetExprOrDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowStatement?: (ctx: ShowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowStatement?: (ctx: ShowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.showCommandType`.
	 * @param ctx the parse tree
	 */
	enterShowCommandType?: (ctx: ShowCommandTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.showCommandType`.
	 * @param ctx the parse tree
	 */
	exitShowCommandType?: (ctx: ShowCommandTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.nonBlocking`.
	 * @param ctx the parse tree
	 */
	enterNonBlocking?: (ctx: NonBlockingContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.nonBlocking`.
	 * @param ctx the parse tree
	 */
	exitNonBlocking?: (ctx: NonBlockingContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fromOrIn`.
	 * @param ctx the parse tree
	 */
	enterFromOrIn?: (ctx: FromOrInContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fromOrIn`.
	 * @param ctx the parse tree
	 */
	exitFromOrIn?: (ctx: FromOrInContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.inDb`.
	 * @param ctx the parse tree
	 */
	enterInDb?: (ctx: InDbContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.inDb`.
	 * @param ctx the parse tree
	 */
	exitInDb?: (ctx: InDbContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.profileType`.
	 * @param ctx the parse tree
	 */
	enterProfileType?: (ctx: ProfileTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.profileType`.
	 * @param ctx the parse tree
	 */
	exitProfileType?: (ctx: ProfileTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.otherAdministrativeStatement`.
	 * @param ctx the parse tree
	 */
	enterOtherAdministrativeStatement?: (ctx: OtherAdministrativeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.otherAdministrativeStatement`.
	 * @param ctx the parse tree
	 */
	exitOtherAdministrativeStatement?: (ctx: OtherAdministrativeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyCacheListOrParts`.
	 * @param ctx the parse tree
	 */
	enterKeyCacheListOrParts?: (ctx: KeyCacheListOrPartsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyCacheListOrParts`.
	 * @param ctx the parse tree
	 */
	exitKeyCacheListOrParts?: (ctx: KeyCacheListOrPartsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyCacheList`.
	 * @param ctx the parse tree
	 */
	enterKeyCacheList?: (ctx: KeyCacheListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyCacheList`.
	 * @param ctx the parse tree
	 */
	exitKeyCacheList?: (ctx: KeyCacheListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.assignToKeycache`.
	 * @param ctx the parse tree
	 */
	enterAssignToKeycache?: (ctx: AssignToKeycacheContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.assignToKeycache`.
	 * @param ctx the parse tree
	 */
	exitAssignToKeycache?: (ctx: AssignToKeycacheContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.assignToKeycachePartition`.
	 * @param ctx the parse tree
	 */
	enterAssignToKeycachePartition?: (ctx: AssignToKeycachePartitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.assignToKeycachePartition`.
	 * @param ctx the parse tree
	 */
	exitAssignToKeycachePartition?: (ctx: AssignToKeycachePartitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.cacheKeyList`.
	 * @param ctx the parse tree
	 */
	enterCacheKeyList?: (ctx: CacheKeyListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.cacheKeyList`.
	 * @param ctx the parse tree
	 */
	exitCacheKeyList?: (ctx: CacheKeyListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyUsageElement`.
	 * @param ctx the parse tree
	 */
	enterKeyUsageElement?: (ctx: KeyUsageElementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyUsageElement`.
	 * @param ctx the parse tree
	 */
	exitKeyUsageElement?: (ctx: KeyUsageElementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyUsageList`.
	 * @param ctx the parse tree
	 */
	enterKeyUsageList?: (ctx: KeyUsageListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyUsageList`.
	 * @param ctx the parse tree
	 */
	exitKeyUsageList?: (ctx: KeyUsageListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.flushOption`.
	 * @param ctx the parse tree
	 */
	enterFlushOption?: (ctx: FlushOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.flushOption`.
	 * @param ctx the parse tree
	 */
	exitFlushOption?: (ctx: FlushOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.logType`.
	 * @param ctx the parse tree
	 */
	enterLogType?: (ctx: LogTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.logType`.
	 * @param ctx the parse tree
	 */
	exitLogType?: (ctx: LogTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.flushTables`.
	 * @param ctx the parse tree
	 */
	enterFlushTables?: (ctx: FlushTablesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.flushTables`.
	 * @param ctx the parse tree
	 */
	exitFlushTables?: (ctx: FlushTablesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.flushTablesOptions`.
	 * @param ctx the parse tree
	 */
	enterFlushTablesOptions?: (ctx: FlushTablesOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.flushTablesOptions`.
	 * @param ctx the parse tree
	 */
	exitFlushTablesOptions?: (ctx: FlushTablesOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.preloadTail`.
	 * @param ctx the parse tree
	 */
	enterPreloadTail?: (ctx: PreloadTailContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.preloadTail`.
	 * @param ctx the parse tree
	 */
	exitPreloadTail?: (ctx: PreloadTailContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.preloadList`.
	 * @param ctx the parse tree
	 */
	enterPreloadList?: (ctx: PreloadListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.preloadList`.
	 * @param ctx the parse tree
	 */
	exitPreloadList?: (ctx: PreloadListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.preloadKeys`.
	 * @param ctx the parse tree
	 */
	enterPreloadKeys?: (ctx: PreloadKeysContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.preloadKeys`.
	 * @param ctx the parse tree
	 */
	exitPreloadKeys?: (ctx: PreloadKeysContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.adminPartition`.
	 * @param ctx the parse tree
	 */
	enterAdminPartition?: (ctx: AdminPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.adminPartition`.
	 * @param ctx the parse tree
	 */
	exitAdminPartition?: (ctx: AdminPartitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.resourceGroupManagement`.
	 * @param ctx the parse tree
	 */
	enterResourceGroupManagement?: (ctx: ResourceGroupManagementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.resourceGroupManagement`.
	 * @param ctx the parse tree
	 */
	exitResourceGroupManagement?: (ctx: ResourceGroupManagementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createResourceGroup`.
	 * @param ctx the parse tree
	 */
	enterCreateResourceGroup?: (ctx: CreateResourceGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createResourceGroup`.
	 * @param ctx the parse tree
	 */
	exitCreateResourceGroup?: (ctx: CreateResourceGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.resourceGroupVcpuList`.
	 * @param ctx the parse tree
	 */
	enterResourceGroupVcpuList?: (ctx: ResourceGroupVcpuListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.resourceGroupVcpuList`.
	 * @param ctx the parse tree
	 */
	exitResourceGroupVcpuList?: (ctx: ResourceGroupVcpuListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.vcpuNumOrRange`.
	 * @param ctx the parse tree
	 */
	enterVcpuNumOrRange?: (ctx: VcpuNumOrRangeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.vcpuNumOrRange`.
	 * @param ctx the parse tree
	 */
	exitVcpuNumOrRange?: (ctx: VcpuNumOrRangeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.resourceGroupPriority`.
	 * @param ctx the parse tree
	 */
	enterResourceGroupPriority?: (ctx: ResourceGroupPriorityContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.resourceGroupPriority`.
	 * @param ctx the parse tree
	 */
	exitResourceGroupPriority?: (ctx: ResourceGroupPriorityContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.resourceGroupEnableDisable`.
	 * @param ctx the parse tree
	 */
	enterResourceGroupEnableDisable?: (ctx: ResourceGroupEnableDisableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.resourceGroupEnableDisable`.
	 * @param ctx the parse tree
	 */
	exitResourceGroupEnableDisable?: (ctx: ResourceGroupEnableDisableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterResourceGroup`.
	 * @param ctx the parse tree
	 */
	enterAlterResourceGroup?: (ctx: AlterResourceGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterResourceGroup`.
	 * @param ctx the parse tree
	 */
	exitAlterResourceGroup?: (ctx: AlterResourceGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.setResourceGroup`.
	 * @param ctx the parse tree
	 */
	enterSetResourceGroup?: (ctx: SetResourceGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.setResourceGroup`.
	 * @param ctx the parse tree
	 */
	exitSetResourceGroup?: (ctx: SetResourceGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.threadIdList`.
	 * @param ctx the parse tree
	 */
	enterThreadIdList?: (ctx: ThreadIdListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.threadIdList`.
	 * @param ctx the parse tree
	 */
	exitThreadIdList?: (ctx: ThreadIdListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dropResourceGroup`.
	 * @param ctx the parse tree
	 */
	enterDropResourceGroup?: (ctx: DropResourceGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dropResourceGroup`.
	 * @param ctx the parse tree
	 */
	exitDropResourceGroup?: (ctx: DropResourceGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.utilityStatement`.
	 * @param ctx the parse tree
	 */
	enterUtilityStatement?: (ctx: UtilityStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.utilityStatement`.
	 * @param ctx the parse tree
	 */
	exitUtilityStatement?: (ctx: UtilityStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.describeCommand`.
	 * @param ctx the parse tree
	 */
	enterDescribeCommand?: (ctx: DescribeCommandContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.describeCommand`.
	 * @param ctx the parse tree
	 */
	exitDescribeCommand?: (ctx: DescribeCommandContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.explainCommand`.
	 * @param ctx the parse tree
	 */
	enterExplainCommand?: (ctx: ExplainCommandContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.explainCommand`.
	 * @param ctx the parse tree
	 */
	exitExplainCommand?: (ctx: ExplainCommandContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.explainableStatement`.
	 * @param ctx the parse tree
	 */
	enterExplainableStatement?: (ctx: ExplainableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.explainableStatement`.
	 * @param ctx the parse tree
	 */
	exitExplainableStatement?: (ctx: ExplainableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.helpCommand`.
	 * @param ctx the parse tree
	 */
	enterHelpCommand?: (ctx: HelpCommandContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.helpCommand`.
	 * @param ctx the parse tree
	 */
	exitHelpCommand?: (ctx: HelpCommandContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.useCommand`.
	 * @param ctx the parse tree
	 */
	enterUseCommand?: (ctx: UseCommandContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.useCommand`.
	 * @param ctx the parse tree
	 */
	exitUseCommand?: (ctx: UseCommandContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.restartServer`.
	 * @param ctx the parse tree
	 */
	enterRestartServer?: (ctx: RestartServerContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.restartServer`.
	 * @param ctx the parse tree
	 */
	exitRestartServer?: (ctx: RestartServerContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	enterBoolPri?: (ctx: BoolPriContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.boolPri`.
	 * @param ctx the parse tree
	 */
	exitBoolPri?: (ctx: BoolPriContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.compOp`.
	 * @param ctx the parse tree
	 */
	enterCompOp?: (ctx: CompOpContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.compOp`.
	 * @param ctx the parse tree
	 */
	exitCompOp?: (ctx: CompOpContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	enterPredicateOperations?: (ctx: PredicateOperationsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.predicateOperations`.
	 * @param ctx the parse tree
	 */
	exitPredicateOperations?: (ctx: PredicateOperationsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.bitExpr`.
	 * @param ctx the parse tree
	 */
	enterBitExpr?: (ctx: BitExprContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.bitExpr`.
	 * @param ctx the parse tree
	 */
	exitBitExpr?: (ctx: BitExprContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpr?: (ctx: SimpleExprContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.simpleExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpr?: (ctx: SimpleExprContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.arrayCast`.
	 * @param ctx the parse tree
	 */
	enterArrayCast?: (ctx: ArrayCastContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.arrayCast`.
	 * @param ctx the parse tree
	 */
	exitArrayCast?: (ctx: ArrayCastContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.jsonOperator`.
	 * @param ctx the parse tree
	 */
	enterJsonOperator?: (ctx: JsonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.jsonOperator`.
	 * @param ctx the parse tree
	 */
	exitJsonOperator?: (ctx: JsonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.sumExpr`.
	 * @param ctx the parse tree
	 */
	enterSumExpr?: (ctx: SumExprContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.sumExpr`.
	 * @param ctx the parse tree
	 */
	exitSumExpr?: (ctx: SumExprContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.groupingOperation`.
	 * @param ctx the parse tree
	 */
	enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.groupingOperation`.
	 * @param ctx the parse tree
	 */
	exitGroupingOperation?: (ctx: GroupingOperationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowFunctionCall`.
	 * @param ctx the parse tree
	 */
	enterWindowFunctionCall?: (ctx: WindowFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowFunctionCall`.
	 * @param ctx the parse tree
	 */
	exitWindowFunctionCall?: (ctx: WindowFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowingClause`.
	 * @param ctx the parse tree
	 */
	enterWindowingClause?: (ctx: WindowingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowingClause`.
	 * @param ctx the parse tree
	 */
	exitWindowingClause?: (ctx: WindowingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.leadLagInfo`.
	 * @param ctx the parse tree
	 */
	enterLeadLagInfo?: (ctx: LeadLagInfoContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.leadLagInfo`.
	 * @param ctx the parse tree
	 */
	exitLeadLagInfo?: (ctx: LeadLagInfoContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.nullTreatment`.
	 * @param ctx the parse tree
	 */
	enterNullTreatment?: (ctx: NullTreatmentContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.nullTreatment`.
	 * @param ctx the parse tree
	 */
	exitNullTreatment?: (ctx: NullTreatmentContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.jsonFunction`.
	 * @param ctx the parse tree
	 */
	enterJsonFunction?: (ctx: JsonFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.jsonFunction`.
	 * @param ctx the parse tree
	 */
	exitJsonFunction?: (ctx: JsonFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.inSumExpr`.
	 * @param ctx the parse tree
	 */
	enterInSumExpr?: (ctx: InSumExprContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.inSumExpr`.
	 * @param ctx the parse tree
	 */
	exitInSumExpr?: (ctx: InSumExprContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identListArg`.
	 * @param ctx the parse tree
	 */
	enterIdentListArg?: (ctx: IdentListArgContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identListArg`.
	 * @param ctx the parse tree
	 */
	exitIdentListArg?: (ctx: IdentListArgContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identList`.
	 * @param ctx the parse tree
	 */
	enterIdentList?: (ctx: IdentListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identList`.
	 * @param ctx the parse tree
	 */
	exitIdentList?: (ctx: IdentListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fulltextOptions`.
	 * @param ctx the parse tree
	 */
	enterFulltextOptions?: (ctx: FulltextOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fulltextOptions`.
	 * @param ctx the parse tree
	 */
	exitFulltextOptions?: (ctx: FulltextOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.runtimeFunctionCall`.
	 * @param ctx the parse tree
	 */
	enterRuntimeFunctionCall?: (ctx: RuntimeFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.runtimeFunctionCall`.
	 * @param ctx the parse tree
	 */
	exitRuntimeFunctionCall?: (ctx: RuntimeFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.geometryFunction`.
	 * @param ctx the parse tree
	 */
	enterGeometryFunction?: (ctx: GeometryFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.geometryFunction`.
	 * @param ctx the parse tree
	 */
	exitGeometryFunction?: (ctx: GeometryFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.timeFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterTimeFunctionParameters?: (ctx: TimeFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.timeFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitTimeFunctionParameters?: (ctx: TimeFunctionParametersContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fractionalPrecision`.
	 * @param ctx the parse tree
	 */
	enterFractionalPrecision?: (ctx: FractionalPrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fractionalPrecision`.
	 * @param ctx the parse tree
	 */
	exitFractionalPrecision?: (ctx: FractionalPrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.weightStringLevels`.
	 * @param ctx the parse tree
	 */
	enterWeightStringLevels?: (ctx: WeightStringLevelsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.weightStringLevels`.
	 * @param ctx the parse tree
	 */
	exitWeightStringLevels?: (ctx: WeightStringLevelsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.weightStringLevelListItem`.
	 * @param ctx the parse tree
	 */
	enterWeightStringLevelListItem?: (ctx: WeightStringLevelListItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.weightStringLevelListItem`.
	 * @param ctx the parse tree
	 */
	exitWeightStringLevelListItem?: (ctx: WeightStringLevelListItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dateTimeTtype`.
	 * @param ctx the parse tree
	 */
	enterDateTimeTtype?: (ctx: DateTimeTtypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dateTimeTtype`.
	 * @param ctx the parse tree
	 */
	exitDateTimeTtype?: (ctx: DateTimeTtypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.trimFunction`.
	 * @param ctx the parse tree
	 */
	enterTrimFunction?: (ctx: TrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.trimFunction`.
	 * @param ctx the parse tree
	 */
	exitTrimFunction?: (ctx: TrimFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.substringFunction`.
	 * @param ctx the parse tree
	 */
	enterSubstringFunction?: (ctx: SubstringFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.substringFunction`.
	 * @param ctx the parse tree
	 */
	exitSubstringFunction?: (ctx: SubstringFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.udfExprList`.
	 * @param ctx the parse tree
	 */
	enterUdfExprList?: (ctx: UdfExprListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.udfExprList`.
	 * @param ctx the parse tree
	 */
	exitUdfExprList?: (ctx: UdfExprListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.udfExpr`.
	 * @param ctx the parse tree
	 */
	enterUdfExpr?: (ctx: UdfExprContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.udfExpr`.
	 * @param ctx the parse tree
	 */
	exitUdfExpr?: (ctx: UdfExprContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.userVariable`.
	 * @param ctx the parse tree
	 */
	enterUserVariable?: (ctx: UserVariableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.userVariable`.
	 * @param ctx the parse tree
	 */
	exitUserVariable?: (ctx: UserVariableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.systemVariable`.
	 * @param ctx the parse tree
	 */
	enterSystemVariable?: (ctx: SystemVariableContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.systemVariable`.
	 * @param ctx the parse tree
	 */
	exitSystemVariable?: (ctx: SystemVariableContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.internalVariableName`.
	 * @param ctx the parse tree
	 */
	enterInternalVariableName?: (ctx: InternalVariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.internalVariableName`.
	 * @param ctx the parse tree
	 */
	exitInternalVariableName?: (ctx: InternalVariableNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.whenExpression`.
	 * @param ctx the parse tree
	 */
	enterWhenExpression?: (ctx: WhenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.whenExpression`.
	 * @param ctx the parse tree
	 */
	exitWhenExpression?: (ctx: WhenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.thenExpression`.
	 * @param ctx the parse tree
	 */
	enterThenExpression?: (ctx: ThenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.thenExpression`.
	 * @param ctx the parse tree
	 */
	exitThenExpression?: (ctx: ThenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.elseExpression`.
	 * @param ctx the parse tree
	 */
	enterElseExpression?: (ctx: ElseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.elseExpression`.
	 * @param ctx the parse tree
	 */
	exitElseExpression?: (ctx: ElseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.castType`.
	 * @param ctx the parse tree
	 */
	enterCastType?: (ctx: CastTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.castType`.
	 * @param ctx the parse tree
	 */
	exitCastType?: (ctx: CastTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.charset`.
	 * @param ctx the parse tree
	 */
	enterCharset?: (ctx: CharsetContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.charset`.
	 * @param ctx the parse tree
	 */
	exitCharset?: (ctx: CharsetContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.notRule`.
	 * @param ctx the parse tree
	 */
	enterNotRule?: (ctx: NotRuleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.notRule`.
	 * @param ctx the parse tree
	 */
	exitNotRule?: (ctx: NotRuleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.not2Rule`.
	 * @param ctx the parse tree
	 */
	enterNot2Rule?: (ctx: Not2RuleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.not2Rule`.
	 * @param ctx the parse tree
	 */
	exitNot2Rule?: (ctx: Not2RuleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.intervalTimeStamp`.
	 * @param ctx the parse tree
	 */
	enterIntervalTimeStamp?: (ctx: IntervalTimeStampContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.intervalTimeStamp`.
	 * @param ctx the parse tree
	 */
	exitIntervalTimeStamp?: (ctx: IntervalTimeStampContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.exprListWithParentheses`.
	 * @param ctx the parse tree
	 */
	enterExprListWithParentheses?: (ctx: ExprListWithParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.exprListWithParentheses`.
	 * @param ctx the parse tree
	 */
	exitExprListWithParentheses?: (ctx: ExprListWithParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.exprWithParentheses`.
	 * @param ctx the parse tree
	 */
	enterExprWithParentheses?: (ctx: ExprWithParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.exprWithParentheses`.
	 * @param ctx the parse tree
	 */
	exitExprWithParentheses?: (ctx: ExprWithParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.simpleExprWithParentheses`.
	 * @param ctx the parse tree
	 */
	enterSimpleExprWithParentheses?: (ctx: SimpleExprWithParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.simpleExprWithParentheses`.
	 * @param ctx the parse tree
	 */
	exitSimpleExprWithParentheses?: (ctx: SimpleExprWithParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.orderList`.
	 * @param ctx the parse tree
	 */
	enterOrderList?: (ctx: OrderListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.orderList`.
	 * @param ctx the parse tree
	 */
	exitOrderList?: (ctx: OrderListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.orderExpression`.
	 * @param ctx the parse tree
	 */
	enterOrderExpression?: (ctx: OrderExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.orderExpression`.
	 * @param ctx the parse tree
	 */
	exitOrderExpression?: (ctx: OrderExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.groupList`.
	 * @param ctx the parse tree
	 */
	enterGroupList?: (ctx: GroupListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.groupList`.
	 * @param ctx the parse tree
	 */
	exitGroupList?: (ctx: GroupListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.groupingExpression`.
	 * @param ctx the parse tree
	 */
	enterGroupingExpression?: (ctx: GroupingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.groupingExpression`.
	 * @param ctx the parse tree
	 */
	exitGroupingExpression?: (ctx: GroupingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.channel`.
	 * @param ctx the parse tree
	 */
	enterChannel?: (ctx: ChannelContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.channel`.
	 * @param ctx the parse tree
	 */
	exitChannel?: (ctx: ChannelContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ifBody`.
	 * @param ctx the parse tree
	 */
	enterIfBody?: (ctx: IfBodyContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ifBody`.
	 * @param ctx the parse tree
	 */
	exitIfBody?: (ctx: IfBodyContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.thenStatement`.
	 * @param ctx the parse tree
	 */
	enterThenStatement?: (ctx: ThenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.thenStatement`.
	 * @param ctx the parse tree
	 */
	exitThenStatement?: (ctx: ThenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.compoundStatementList`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatementList?: (ctx: CompoundStatementListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.compoundStatementList`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatementList?: (ctx: CompoundStatementListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	enterCaseStatement?: (ctx: CaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	exitCaseStatement?: (ctx: CaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.labeledBlock`.
	 * @param ctx the parse tree
	 */
	enterLabeledBlock?: (ctx: LabeledBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.labeledBlock`.
	 * @param ctx the parse tree
	 */
	exitLabeledBlock?: (ctx: LabeledBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.unlabeledBlock`.
	 * @param ctx the parse tree
	 */
	enterUnlabeledBlock?: (ctx: UnlabeledBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.unlabeledBlock`.
	 * @param ctx the parse tree
	 */
	exitUnlabeledBlock?: (ctx: UnlabeledBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.beginEndBlock`.
	 * @param ctx the parse tree
	 */
	enterBeginEndBlock?: (ctx: BeginEndBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.beginEndBlock`.
	 * @param ctx the parse tree
	 */
	exitBeginEndBlock?: (ctx: BeginEndBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.labeledControl`.
	 * @param ctx the parse tree
	 */
	enterLabeledControl?: (ctx: LabeledControlContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.labeledControl`.
	 * @param ctx the parse tree
	 */
	exitLabeledControl?: (ctx: LabeledControlContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.unlabeledControl`.
	 * @param ctx the parse tree
	 */
	enterUnlabeledControl?: (ctx: UnlabeledControlContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.unlabeledControl`.
	 * @param ctx the parse tree
	 */
	exitUnlabeledControl?: (ctx: UnlabeledControlContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.loopBlock`.
	 * @param ctx the parse tree
	 */
	enterLoopBlock?: (ctx: LoopBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.loopBlock`.
	 * @param ctx the parse tree
	 */
	exitLoopBlock?: (ctx: LoopBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.whileDoBlock`.
	 * @param ctx the parse tree
	 */
	enterWhileDoBlock?: (ctx: WhileDoBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.whileDoBlock`.
	 * @param ctx the parse tree
	 */
	exitWhileDoBlock?: (ctx: WhileDoBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.repeatUntilBlock`.
	 * @param ctx the parse tree
	 */
	enterRepeatUntilBlock?: (ctx: RepeatUntilBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.repeatUntilBlock`.
	 * @param ctx the parse tree
	 */
	exitRepeatUntilBlock?: (ctx: RepeatUntilBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.spDeclarations`.
	 * @param ctx the parse tree
	 */
	enterSpDeclarations?: (ctx: SpDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.spDeclarations`.
	 * @param ctx the parse tree
	 */
	exitSpDeclarations?: (ctx: SpDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.spDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSpDeclaration?: (ctx: SpDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.spDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSpDeclaration?: (ctx: SpDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.conditionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConditionDeclaration?: (ctx: ConditionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.conditionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConditionDeclaration?: (ctx: ConditionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.spCondition`.
	 * @param ctx the parse tree
	 */
	enterSpCondition?: (ctx: SpConditionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.spCondition`.
	 * @param ctx the parse tree
	 */
	exitSpCondition?: (ctx: SpConditionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.sqlstate`.
	 * @param ctx the parse tree
	 */
	enterSqlstate?: (ctx: SqlstateContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.sqlstate`.
	 * @param ctx the parse tree
	 */
	exitSqlstate?: (ctx: SqlstateContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.handlerDeclaration`.
	 * @param ctx the parse tree
	 */
	enterHandlerDeclaration?: (ctx: HandlerDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.handlerDeclaration`.
	 * @param ctx the parse tree
	 */
	exitHandlerDeclaration?: (ctx: HandlerDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.handlerCondition`.
	 * @param ctx the parse tree
	 */
	enterHandlerCondition?: (ctx: HandlerConditionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.handlerCondition`.
	 * @param ctx the parse tree
	 */
	exitHandlerCondition?: (ctx: HandlerConditionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.cursorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCursorDeclaration?: (ctx: CursorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.cursorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCursorDeclaration?: (ctx: CursorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.iterateStatement`.
	 * @param ctx the parse tree
	 */
	enterIterateStatement?: (ctx: IterateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.iterateStatement`.
	 * @param ctx the parse tree
	 */
	exitIterateStatement?: (ctx: IterateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.leaveStatement`.
	 * @param ctx the parse tree
	 */
	enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.leaveStatement`.
	 * @param ctx the parse tree
	 */
	exitLeaveStatement?: (ctx: LeaveStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.getDiagnostics`.
	 * @param ctx the parse tree
	 */
	enterGetDiagnostics?: (ctx: GetDiagnosticsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.getDiagnostics`.
	 * @param ctx the parse tree
	 */
	exitGetDiagnostics?: (ctx: GetDiagnosticsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.signalAllowedExpr`.
	 * @param ctx the parse tree
	 */
	enterSignalAllowedExpr?: (ctx: SignalAllowedExprContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.signalAllowedExpr`.
	 * @param ctx the parse tree
	 */
	exitSignalAllowedExpr?: (ctx: SignalAllowedExprContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.statementInformationItem`.
	 * @param ctx the parse tree
	 */
	enterStatementInformationItem?: (ctx: StatementInformationItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.statementInformationItem`.
	 * @param ctx the parse tree
	 */
	exitStatementInformationItem?: (ctx: StatementInformationItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.conditionInformationItem`.
	 * @param ctx the parse tree
	 */
	enterConditionInformationItem?: (ctx: ConditionInformationItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.conditionInformationItem`.
	 * @param ctx the parse tree
	 */
	exitConditionInformationItem?: (ctx: ConditionInformationItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.signalInformationItemName`.
	 * @param ctx the parse tree
	 */
	enterSignalInformationItemName?: (ctx: SignalInformationItemNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.signalInformationItemName`.
	 * @param ctx the parse tree
	 */
	exitSignalInformationItemName?: (ctx: SignalInformationItemNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.signalStatement`.
	 * @param ctx the parse tree
	 */
	enterSignalStatement?: (ctx: SignalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.signalStatement`.
	 * @param ctx the parse tree
	 */
	exitSignalStatement?: (ctx: SignalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.resignalStatement`.
	 * @param ctx the parse tree
	 */
	enterResignalStatement?: (ctx: ResignalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.resignalStatement`.
	 * @param ctx the parse tree
	 */
	exitResignalStatement?: (ctx: ResignalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.signalInformationItem`.
	 * @param ctx the parse tree
	 */
	enterSignalInformationItem?: (ctx: SignalInformationItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.signalInformationItem`.
	 * @param ctx the parse tree
	 */
	exitSignalInformationItem?: (ctx: SignalInformationItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.cursorOpen`.
	 * @param ctx the parse tree
	 */
	enterCursorOpen?: (ctx: CursorOpenContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.cursorOpen`.
	 * @param ctx the parse tree
	 */
	exitCursorOpen?: (ctx: CursorOpenContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.cursorClose`.
	 * @param ctx the parse tree
	 */
	enterCursorClose?: (ctx: CursorCloseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.cursorClose`.
	 * @param ctx the parse tree
	 */
	exitCursorClose?: (ctx: CursorCloseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.cursorFetch`.
	 * @param ctx the parse tree
	 */
	enterCursorFetch?: (ctx: CursorFetchContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.cursorFetch`.
	 * @param ctx the parse tree
	 */
	exitCursorFetch?: (ctx: CursorFetchContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.schedule`.
	 * @param ctx the parse tree
	 */
	enterSchedule?: (ctx: ScheduleContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.schedule`.
	 * @param ctx the parse tree
	 */
	exitSchedule?: (ctx: ScheduleContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.checkOrReferences`.
	 * @param ctx the parse tree
	 */
	enterCheckOrReferences?: (ctx: CheckOrReferencesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.checkOrReferences`.
	 * @param ctx the parse tree
	 */
	exitCheckOrReferences?: (ctx: CheckOrReferencesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.checkConstraint`.
	 * @param ctx the parse tree
	 */
	enterCheckConstraint?: (ctx: CheckConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.checkConstraint`.
	 * @param ctx the parse tree
	 */
	exitCheckConstraint?: (ctx: CheckConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.constraintEnforcement`.
	 * @param ctx the parse tree
	 */
	enterConstraintEnforcement?: (ctx: ConstraintEnforcementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.constraintEnforcement`.
	 * @param ctx the parse tree
	 */
	exitConstraintEnforcement?: (ctx: ConstraintEnforcementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableConstraintDef`.
	 * @param ctx the parse tree
	 */
	enterTableConstraintDef?: (ctx: TableConstraintDefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableConstraintDef`.
	 * @param ctx the parse tree
	 */
	exitTableConstraintDef?: (ctx: TableConstraintDefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.constraintName`.
	 * @param ctx the parse tree
	 */
	enterConstraintName?: (ctx: ConstraintNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.constraintName`.
	 * @param ctx the parse tree
	 */
	exitConstraintName?: (ctx: ConstraintNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fieldDefinition`.
	 * @param ctx the parse tree
	 */
	enterFieldDefinition?: (ctx: FieldDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fieldDefinition`.
	 * @param ctx the parse tree
	 */
	exitFieldDefinition?: (ctx: FieldDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnAttribute`.
	 * @param ctx the parse tree
	 */
	enterColumnAttribute?: (ctx: ColumnAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnAttribute`.
	 * @param ctx the parse tree
	 */
	exitColumnAttribute?: (ctx: ColumnAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnFormat`.
	 * @param ctx the parse tree
	 */
	enterColumnFormat?: (ctx: ColumnFormatContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnFormat`.
	 * @param ctx the parse tree
	 */
	exitColumnFormat?: (ctx: ColumnFormatContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.storageMedia`.
	 * @param ctx the parse tree
	 */
	enterStorageMedia?: (ctx: StorageMediaContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.storageMedia`.
	 * @param ctx the parse tree
	 */
	exitStorageMedia?: (ctx: StorageMediaContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.gcolAttribute`.
	 * @param ctx the parse tree
	 */
	enterGcolAttribute?: (ctx: GcolAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.gcolAttribute`.
	 * @param ctx the parse tree
	 */
	exitGcolAttribute?: (ctx: GcolAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.references`.
	 * @param ctx the parse tree
	 */
	enterReferences?: (ctx: ReferencesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.references`.
	 * @param ctx the parse tree
	 */
	exitReferences?: (ctx: ReferencesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.deleteOption`.
	 * @param ctx the parse tree
	 */
	enterDeleteOption?: (ctx: DeleteOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.deleteOption`.
	 * @param ctx the parse tree
	 */
	exitDeleteOption?: (ctx: DeleteOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyList`.
	 * @param ctx the parse tree
	 */
	enterKeyList?: (ctx: KeyListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyList`.
	 * @param ctx the parse tree
	 */
	exitKeyList?: (ctx: KeyListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyPart`.
	 * @param ctx the parse tree
	 */
	enterKeyPart?: (ctx: KeyPartContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyPart`.
	 * @param ctx the parse tree
	 */
	exitKeyPart?: (ctx: KeyPartContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyListWithExpression`.
	 * @param ctx the parse tree
	 */
	enterKeyListWithExpression?: (ctx: KeyListWithExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyListWithExpression`.
	 * @param ctx the parse tree
	 */
	exitKeyListWithExpression?: (ctx: KeyListWithExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyPartOrExpression`.
	 * @param ctx the parse tree
	 */
	enterKeyPartOrExpression?: (ctx: KeyPartOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyPartOrExpression`.
	 * @param ctx the parse tree
	 */
	exitKeyPartOrExpression?: (ctx: KeyPartOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.keyListVariants`.
	 * @param ctx the parse tree
	 */
	enterKeyListVariants?: (ctx: KeyListVariantsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.keyListVariants`.
	 * @param ctx the parse tree
	 */
	exitKeyListVariants?: (ctx: KeyListVariantsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexType`.
	 * @param ctx the parse tree
	 */
	enterIndexType?: (ctx: IndexTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexType`.
	 * @param ctx the parse tree
	 */
	exitIndexType?: (ctx: IndexTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexOption`.
	 * @param ctx the parse tree
	 */
	enterIndexOption?: (ctx: IndexOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexOption`.
	 * @param ctx the parse tree
	 */
	exitIndexOption?: (ctx: IndexOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.commonIndexOption`.
	 * @param ctx the parse tree
	 */
	enterCommonIndexOption?: (ctx: CommonIndexOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.commonIndexOption`.
	 * @param ctx the parse tree
	 */
	exitCommonIndexOption?: (ctx: CommonIndexOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.visibility`.
	 * @param ctx the parse tree
	 */
	enterVisibility?: (ctx: VisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.visibility`.
	 * @param ctx the parse tree
	 */
	exitVisibility?: (ctx: VisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexTypeClause`.
	 * @param ctx the parse tree
	 */
	enterIndexTypeClause?: (ctx: IndexTypeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexTypeClause`.
	 * @param ctx the parse tree
	 */
	exitIndexTypeClause?: (ctx: IndexTypeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fulltextIndexOption`.
	 * @param ctx the parse tree
	 */
	enterFulltextIndexOption?: (ctx: FulltextIndexOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fulltextIndexOption`.
	 * @param ctx the parse tree
	 */
	exitFulltextIndexOption?: (ctx: FulltextIndexOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.spatialIndexOption`.
	 * @param ctx the parse tree
	 */
	enterSpatialIndexOption?: (ctx: SpatialIndexOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.spatialIndexOption`.
	 * @param ctx the parse tree
	 */
	exitSpatialIndexOption?: (ctx: SpatialIndexOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dataTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterDataTypeDefinition?: (ctx: DataTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dataTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitDataTypeDefinition?: (ctx: DataTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.nchar`.
	 * @param ctx the parse tree
	 */
	enterNchar?: (ctx: NcharContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.nchar`.
	 * @param ctx the parse tree
	 */
	exitNchar?: (ctx: NcharContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.realType`.
	 * @param ctx the parse tree
	 */
	enterRealType?: (ctx: RealTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.realType`.
	 * @param ctx the parse tree
	 */
	exitRealType?: (ctx: RealTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fieldLength`.
	 * @param ctx the parse tree
	 */
	enterFieldLength?: (ctx: FieldLengthContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fieldLength`.
	 * @param ctx the parse tree
	 */
	exitFieldLength?: (ctx: FieldLengthContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	enterFieldOptions?: (ctx: FieldOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	exitFieldOptions?: (ctx: FieldOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.charsetWithOptBinary`.
	 * @param ctx the parse tree
	 */
	enterCharsetWithOptBinary?: (ctx: CharsetWithOptBinaryContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.charsetWithOptBinary`.
	 * @param ctx the parse tree
	 */
	exitCharsetWithOptBinary?: (ctx: CharsetWithOptBinaryContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ascii`.
	 * @param ctx the parse tree
	 */
	enterAscii?: (ctx: AsciiContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ascii`.
	 * @param ctx the parse tree
	 */
	exitAscii?: (ctx: AsciiContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.unicode`.
	 * @param ctx the parse tree
	 */
	enterUnicode?: (ctx: UnicodeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.unicode`.
	 * @param ctx the parse tree
	 */
	exitUnicode?: (ctx: UnicodeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.wsNumCodepoints`.
	 * @param ctx the parse tree
	 */
	enterWsNumCodepoints?: (ctx: WsNumCodepointsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.wsNumCodepoints`.
	 * @param ctx the parse tree
	 */
	exitWsNumCodepoints?: (ctx: WsNumCodepointsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.typeDatetimePrecision`.
	 * @param ctx the parse tree
	 */
	enterTypeDatetimePrecision?: (ctx: TypeDatetimePrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.typeDatetimePrecision`.
	 * @param ctx the parse tree
	 */
	exitTypeDatetimePrecision?: (ctx: TypeDatetimePrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.charsetName`.
	 * @param ctx the parse tree
	 */
	enterCharsetName?: (ctx: CharsetNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.charsetName`.
	 * @param ctx the parse tree
	 */
	exitCharsetName?: (ctx: CharsetNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.collationName`.
	 * @param ctx the parse tree
	 */
	enterCollationName?: (ctx: CollationNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.collationName`.
	 * @param ctx the parse tree
	 */
	exitCollationName?: (ctx: CollationNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createTableOptions`.
	 * @param ctx the parse tree
	 */
	enterCreateTableOptions?: (ctx: CreateTableOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createTableOptions`.
	 * @param ctx the parse tree
	 */
	exitCreateTableOptions?: (ctx: CreateTableOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createTableOptionsSpaceSeparated`.
	 * @param ctx the parse tree
	 */
	enterCreateTableOptionsSpaceSeparated?: (ctx: CreateTableOptionsSpaceSeparatedContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createTableOptionsSpaceSeparated`.
	 * @param ctx the parse tree
	 */
	exitCreateTableOptionsSpaceSeparated?: (ctx: CreateTableOptionsSpaceSeparatedContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createTableOption`.
	 * @param ctx the parse tree
	 */
	enterCreateTableOption?: (ctx: CreateTableOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createTableOption`.
	 * @param ctx the parse tree
	 */
	exitCreateTableOption?: (ctx: CreateTableOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ternaryOption`.
	 * @param ctx the parse tree
	 */
	enterTernaryOption?: (ctx: TernaryOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ternaryOption`.
	 * @param ctx the parse tree
	 */
	exitTernaryOption?: (ctx: TernaryOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.defaultCollation`.
	 * @param ctx the parse tree
	 */
	enterDefaultCollation?: (ctx: DefaultCollationContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.defaultCollation`.
	 * @param ctx the parse tree
	 */
	exitDefaultCollation?: (ctx: DefaultCollationContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.defaultEncryption`.
	 * @param ctx the parse tree
	 */
	enterDefaultEncryption?: (ctx: DefaultEncryptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.defaultEncryption`.
	 * @param ctx the parse tree
	 */
	exitDefaultEncryption?: (ctx: DefaultEncryptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.defaultCharset`.
	 * @param ctx the parse tree
	 */
	enterDefaultCharset?: (ctx: DefaultCharsetContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.defaultCharset`.
	 * @param ctx the parse tree
	 */
	exitDefaultCharset?: (ctx: DefaultCharsetContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionClause`.
	 * @param ctx the parse tree
	 */
	enterPartitionClause?: (ctx: PartitionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionClause`.
	 * @param ctx the parse tree
	 */
	exitPartitionClause?: (ctx: PartitionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	enterPartitionTypeDef?: (ctx: PartitionTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionTypeDef`.
	 * @param ctx the parse tree
	 */
	exitPartitionTypeDef?: (ctx: PartitionTypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.subPartitions`.
	 * @param ctx the parse tree
	 */
	enterSubPartitions?: (ctx: SubPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.subPartitions`.
	 * @param ctx the parse tree
	 */
	exitSubPartitions?: (ctx: SubPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionKeyAlgorithm`.
	 * @param ctx the parse tree
	 */
	enterPartitionKeyAlgorithm?: (ctx: PartitionKeyAlgorithmContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionKeyAlgorithm`.
	 * @param ctx the parse tree
	 */
	exitPartitionKeyAlgorithm?: (ctx: PartitionKeyAlgorithmContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionDefinitions`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionDefinitions`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionValuesIn`.
	 * @param ctx the parse tree
	 */
	enterPartitionValuesIn?: (ctx: PartitionValuesInContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionValuesIn`.
	 * @param ctx the parse tree
	 */
	exitPartitionValuesIn?: (ctx: PartitionValuesInContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	enterPartitionOption?: (ctx: PartitionOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionOption`.
	 * @param ctx the parse tree
	 */
	exitPartitionOption?: (ctx: PartitionOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.subpartitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.subpartitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionValueItemListParen`.
	 * @param ctx the parse tree
	 */
	enterPartitionValueItemListParen?: (ctx: PartitionValueItemListParenContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionValueItemListParen`.
	 * @param ctx the parse tree
	 */
	exitPartitionValueItemListParen?: (ctx: PartitionValueItemListParenContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.partitionValueItem`.
	 * @param ctx the parse tree
	 */
	enterPartitionValueItem?: (ctx: PartitionValueItemContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.partitionValueItem`.
	 * @param ctx the parse tree
	 */
	exitPartitionValueItem?: (ctx: PartitionValueItemContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.definerClause`.
	 * @param ctx the parse tree
	 */
	enterDefinerClause?: (ctx: DefinerClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.definerClause`.
	 * @param ctx the parse tree
	 */
	exitDefinerClause?: (ctx: DefinerClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.procedureParameter`.
	 * @param ctx the parse tree
	 */
	enterProcedureParameter?: (ctx: ProcedureParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.procedureParameter`.
	 * @param ctx the parse tree
	 */
	exitProcedureParameter?: (ctx: ProcedureParameterContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.functionParameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameter?: (ctx: FunctionParameterContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.collate`.
	 * @param ctx the parse tree
	 */
	enterCollate?: (ctx: CollateContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.collate`.
	 * @param ctx the parse tree
	 */
	exitCollate?: (ctx: CollateContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.typeWithOptCollate`.
	 * @param ctx the parse tree
	 */
	enterTypeWithOptCollate?: (ctx: TypeWithOptCollateContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.typeWithOptCollate`.
	 * @param ctx the parse tree
	 */
	exitTypeWithOptCollate?: (ctx: TypeWithOptCollateContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.schemaIdentifierPair`.
	 * @param ctx the parse tree
	 */
	enterSchemaIdentifierPair?: (ctx: SchemaIdentifierPairContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.schemaIdentifierPair`.
	 * @param ctx the parse tree
	 */
	exitSchemaIdentifierPair?: (ctx: SchemaIdentifierPairContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewRefList`.
	 * @param ctx the parse tree
	 */
	enterViewRefList?: (ctx: ViewRefListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewRefList`.
	 * @param ctx the parse tree
	 */
	exitViewRefList?: (ctx: ViewRefListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.updateList`.
	 * @param ctx the parse tree
	 */
	enterUpdateList?: (ctx: UpdateListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.updateList`.
	 * @param ctx the parse tree
	 */
	exitUpdateList?: (ctx: UpdateListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.updateElement`.
	 * @param ctx the parse tree
	 */
	enterUpdateElement?: (ctx: UpdateElementContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.updateElement`.
	 * @param ctx the parse tree
	 */
	exitUpdateElement?: (ctx: UpdateElementContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.charsetClause`.
	 * @param ctx the parse tree
	 */
	enterCharsetClause?: (ctx: CharsetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.charsetClause`.
	 * @param ctx the parse tree
	 */
	exitCharsetClause?: (ctx: CharsetClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fieldsClause`.
	 * @param ctx the parse tree
	 */
	enterFieldsClause?: (ctx: FieldsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fieldsClause`.
	 * @param ctx the parse tree
	 */
	exitFieldsClause?: (ctx: FieldsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fieldTerm`.
	 * @param ctx the parse tree
	 */
	enterFieldTerm?: (ctx: FieldTermContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fieldTerm`.
	 * @param ctx the parse tree
	 */
	exitFieldTerm?: (ctx: FieldTermContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.linesClause`.
	 * @param ctx the parse tree
	 */
	enterLinesClause?: (ctx: LinesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.linesClause`.
	 * @param ctx the parse tree
	 */
	exitLinesClause?: (ctx: LinesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lineTerm`.
	 * @param ctx the parse tree
	 */
	enterLineTerm?: (ctx: LineTermContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lineTerm`.
	 * @param ctx the parse tree
	 */
	exitLineTerm?: (ctx: LineTermContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.userList`.
	 * @param ctx the parse tree
	 */
	enterUserList?: (ctx: UserListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.userList`.
	 * @param ctx the parse tree
	 */
	exitUserList?: (ctx: UserListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createUserList`.
	 * @param ctx the parse tree
	 */
	enterCreateUserList?: (ctx: CreateUserListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createUserList`.
	 * @param ctx the parse tree
	 */
	exitCreateUserList?: (ctx: CreateUserListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterUserList`.
	 * @param ctx the parse tree
	 */
	enterAlterUserList?: (ctx: AlterUserListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterUserList`.
	 * @param ctx the parse tree
	 */
	exitAlterUserList?: (ctx: AlterUserListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.createUserEntry`.
	 * @param ctx the parse tree
	 */
	enterCreateUserEntry?: (ctx: CreateUserEntryContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.createUserEntry`.
	 * @param ctx the parse tree
	 */
	exitCreateUserEntry?: (ctx: CreateUserEntryContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.alterUserEntry`.
	 * @param ctx the parse tree
	 */
	enterAlterUserEntry?: (ctx: AlterUserEntryContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.alterUserEntry`.
	 * @param ctx the parse tree
	 */
	exitAlterUserEntry?: (ctx: AlterUserEntryContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.retainCurrentPassword`.
	 * @param ctx the parse tree
	 */
	enterRetainCurrentPassword?: (ctx: RetainCurrentPasswordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.retainCurrentPassword`.
	 * @param ctx the parse tree
	 */
	exitRetainCurrentPassword?: (ctx: RetainCurrentPasswordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.discardOldPassword`.
	 * @param ctx the parse tree
	 */
	enterDiscardOldPassword?: (ctx: DiscardOldPasswordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.discardOldPassword`.
	 * @param ctx the parse tree
	 */
	exitDiscardOldPassword?: (ctx: DiscardOldPasswordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.replacePassword`.
	 * @param ctx the parse tree
	 */
	enterReplacePassword?: (ctx: ReplacePasswordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.replacePassword`.
	 * @param ctx the parse tree
	 */
	exitReplacePassword?: (ctx: ReplacePasswordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.userIdentifierOrText`.
	 * @param ctx the parse tree
	 */
	enterUserIdentifierOrText?: (ctx: UserIdentifierOrTextContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.userIdentifierOrText`.
	 * @param ctx the parse tree
	 */
	exitUserIdentifierOrText?: (ctx: UserIdentifierOrTextContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.user`.
	 * @param ctx the parse tree
	 */
	enterUser?: (ctx: UserContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.user`.
	 * @param ctx the parse tree
	 */
	exitUser?: (ctx: UserContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.likeClause`.
	 * @param ctx the parse tree
	 */
	enterLikeClause?: (ctx: LikeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.likeClause`.
	 * @param ctx the parse tree
	 */
	exitLikeClause?: (ctx: LikeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.likeOrWhere`.
	 * @param ctx the parse tree
	 */
	enterLikeOrWhere?: (ctx: LikeOrWhereContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.likeOrWhere`.
	 * @param ctx the parse tree
	 */
	exitLikeOrWhere?: (ctx: LikeOrWhereContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.onlineOption`.
	 * @param ctx the parse tree
	 */
	enterOnlineOption?: (ctx: OnlineOptionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.onlineOption`.
	 * @param ctx the parse tree
	 */
	exitOnlineOption?: (ctx: OnlineOptionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.noWriteToBinLog`.
	 * @param ctx the parse tree
	 */
	enterNoWriteToBinLog?: (ctx: NoWriteToBinLogContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.noWriteToBinLog`.
	 * @param ctx the parse tree
	 */
	exitNoWriteToBinLog?: (ctx: NoWriteToBinLogContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.usePartition`.
	 * @param ctx the parse tree
	 */
	enterUsePartition?: (ctx: UsePartitionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.usePartition`.
	 * @param ctx the parse tree
	 */
	exitUsePartition?: (ctx: UsePartitionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.fieldIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFieldIdentifier?: (ctx: FieldIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.fieldIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFieldIdentifier?: (ctx: FieldIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnName`.
	 * @param ctx the parse tree
	 */
	enterColumnName?: (ctx: ColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnName`.
	 * @param ctx the parse tree
	 */
	exitColumnName?: (ctx: ColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnInternalRef`.
	 * @param ctx the parse tree
	 */
	enterColumnInternalRef?: (ctx: ColumnInternalRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnInternalRef`.
	 * @param ctx the parse tree
	 */
	exitColumnInternalRef?: (ctx: ColumnInternalRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnInternalRefList`.
	 * @param ctx the parse tree
	 */
	enterColumnInternalRefList?: (ctx: ColumnInternalRefListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnInternalRefList`.
	 * @param ctx the parse tree
	 */
	exitColumnInternalRefList?: (ctx: ColumnInternalRefListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.columnRef`.
	 * @param ctx the parse tree
	 */
	enterColumnRef?: (ctx: ColumnRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.columnRef`.
	 * @param ctx the parse tree
	 */
	exitColumnRef?: (ctx: ColumnRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.insertIdentifier`.
	 * @param ctx the parse tree
	 */
	enterInsertIdentifier?: (ctx: InsertIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.insertIdentifier`.
	 * @param ctx the parse tree
	 */
	exitInsertIdentifier?: (ctx: InsertIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexName`.
	 * @param ctx the parse tree
	 */
	enterIndexName?: (ctx: IndexNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexName`.
	 * @param ctx the parse tree
	 */
	exitIndexName?: (ctx: IndexNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.indexRef`.
	 * @param ctx the parse tree
	 */
	enterIndexRef?: (ctx: IndexRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.indexRef`.
	 * @param ctx the parse tree
	 */
	exitIndexRef?: (ctx: IndexRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableWild`.
	 * @param ctx the parse tree
	 */
	enterTableWild?: (ctx: TableWildContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableWild`.
	 * @param ctx the parse tree
	 */
	exitTableWild?: (ctx: TableWildContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.schemaName`.
	 * @param ctx the parse tree
	 */
	enterSchemaName?: (ctx: SchemaNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.schemaName`.
	 * @param ctx the parse tree
	 */
	exitSchemaName?: (ctx: SchemaNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.schemaRef`.
	 * @param ctx the parse tree
	 */
	enterSchemaRef?: (ctx: SchemaRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.schemaRef`.
	 * @param ctx the parse tree
	 */
	exitSchemaRef?: (ctx: SchemaRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.procedureName`.
	 * @param ctx the parse tree
	 */
	enterProcedureName?: (ctx: ProcedureNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.procedureName`.
	 * @param ctx the parse tree
	 */
	exitProcedureName?: (ctx: ProcedureNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.procedureRef`.
	 * @param ctx the parse tree
	 */
	enterProcedureRef?: (ctx: ProcedureRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.procedureRef`.
	 * @param ctx the parse tree
	 */
	exitProcedureRef?: (ctx: ProcedureRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.functionRef`.
	 * @param ctx the parse tree
	 */
	enterFunctionRef?: (ctx: FunctionRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.functionRef`.
	 * @param ctx the parse tree
	 */
	exitFunctionRef?: (ctx: FunctionRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.triggerName`.
	 * @param ctx the parse tree
	 */
	enterTriggerName?: (ctx: TriggerNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.triggerName`.
	 * @param ctx the parse tree
	 */
	exitTriggerName?: (ctx: TriggerNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.triggerRef`.
	 * @param ctx the parse tree
	 */
	enterTriggerRef?: (ctx: TriggerRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.triggerRef`.
	 * @param ctx the parse tree
	 */
	exitTriggerRef?: (ctx: TriggerRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewName`.
	 * @param ctx the parse tree
	 */
	enterViewName?: (ctx: ViewNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewName`.
	 * @param ctx the parse tree
	 */
	exitViewName?: (ctx: ViewNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.viewRef`.
	 * @param ctx the parse tree
	 */
	enterViewRef?: (ctx: ViewRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.viewRef`.
	 * @param ctx the parse tree
	 */
	exitViewRef?: (ctx: ViewRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tablespaceName`.
	 * @param ctx the parse tree
	 */
	enterTablespaceName?: (ctx: TablespaceNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tablespaceName`.
	 * @param ctx the parse tree
	 */
	exitTablespaceName?: (ctx: TablespaceNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tablespaceRef`.
	 * @param ctx the parse tree
	 */
	enterTablespaceRef?: (ctx: TablespaceRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tablespaceRef`.
	 * @param ctx the parse tree
	 */
	exitTablespaceRef?: (ctx: TablespaceRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.logfileGroupName`.
	 * @param ctx the parse tree
	 */
	enterLogfileGroupName?: (ctx: LogfileGroupNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.logfileGroupName`.
	 * @param ctx the parse tree
	 */
	exitLogfileGroupName?: (ctx: LogfileGroupNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.logfileGroupRef`.
	 * @param ctx the parse tree
	 */
	enterLogfileGroupRef?: (ctx: LogfileGroupRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.logfileGroupRef`.
	 * @param ctx the parse tree
	 */
	exitLogfileGroupRef?: (ctx: LogfileGroupRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.eventName`.
	 * @param ctx the parse tree
	 */
	enterEventName?: (ctx: EventNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.eventName`.
	 * @param ctx the parse tree
	 */
	exitEventName?: (ctx: EventNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.eventRef`.
	 * @param ctx the parse tree
	 */
	enterEventRef?: (ctx: EventRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.eventRef`.
	 * @param ctx the parse tree
	 */
	exitEventRef?: (ctx: EventRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.udfName`.
	 * @param ctx the parse tree
	 */
	enterUdfName?: (ctx: UdfNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.udfName`.
	 * @param ctx the parse tree
	 */
	exitUdfName?: (ctx: UdfNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.serverName`.
	 * @param ctx the parse tree
	 */
	enterServerName?: (ctx: ServerNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.serverName`.
	 * @param ctx the parse tree
	 */
	exitServerName?: (ctx: ServerNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.serverRef`.
	 * @param ctx the parse tree
	 */
	enterServerRef?: (ctx: ServerRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.serverRef`.
	 * @param ctx the parse tree
	 */
	exitServerRef?: (ctx: ServerRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.engineRef`.
	 * @param ctx the parse tree
	 */
	enterEngineRef?: (ctx: EngineRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.engineRef`.
	 * @param ctx the parse tree
	 */
	exitEngineRef?: (ctx: EngineRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableName`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableName`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.filterTableRef`.
	 * @param ctx the parse tree
	 */
	enterFilterTableRef?: (ctx: FilterTableRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.filterTableRef`.
	 * @param ctx the parse tree
	 */
	exitFilterTableRef?: (ctx: FilterTableRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableRefWithWildcard`.
	 * @param ctx the parse tree
	 */
	enterTableRefWithWildcard?: (ctx: TableRefWithWildcardContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableRefWithWildcard`.
	 * @param ctx the parse tree
	 */
	exitTableRefWithWildcard?: (ctx: TableRefWithWildcardContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableRef`.
	 * @param ctx the parse tree
	 */
	enterTableRef?: (ctx: TableRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableRef`.
	 * @param ctx the parse tree
	 */
	exitTableRef?: (ctx: TableRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableRefList`.
	 * @param ctx the parse tree
	 */
	enterTableRefList?: (ctx: TableRefListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableRefList`.
	 * @param ctx the parse tree
	 */
	exitTableRefList?: (ctx: TableRefListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.tableAliasRefList`.
	 * @param ctx the parse tree
	 */
	enterTableAliasRefList?: (ctx: TableAliasRefListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.tableAliasRefList`.
	 * @param ctx the parse tree
	 */
	exitTableAliasRefList?: (ctx: TableAliasRefListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.parameterName`.
	 * @param ctx the parse tree
	 */
	enterParameterName?: (ctx: ParameterNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.parameterName`.
	 * @param ctx the parse tree
	 */
	exitParameterName?: (ctx: ParameterNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.labelIdentifier`.
	 * @param ctx the parse tree
	 */
	enterLabelIdentifier?: (ctx: LabelIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.labelIdentifier`.
	 * @param ctx the parse tree
	 */
	exitLabelIdentifier?: (ctx: LabelIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.labelRef`.
	 * @param ctx the parse tree
	 */
	enterLabelRef?: (ctx: LabelRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.labelRef`.
	 * @param ctx the parse tree
	 */
	exitLabelRef?: (ctx: LabelRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleIdentifier`.
	 * @param ctx the parse tree
	 */
	enterRoleIdentifier?: (ctx: RoleIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleIdentifier`.
	 * @param ctx the parse tree
	 */
	exitRoleIdentifier?: (ctx: RoleIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleRef`.
	 * @param ctx the parse tree
	 */
	enterRoleRef?: (ctx: RoleRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleRef`.
	 * @param ctx the parse tree
	 */
	exitRoleRef?: (ctx: RoleRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.pluginRef`.
	 * @param ctx the parse tree
	 */
	enterPluginRef?: (ctx: PluginRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.pluginRef`.
	 * @param ctx the parse tree
	 */
	exitPluginRef?: (ctx: PluginRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.componentRef`.
	 * @param ctx the parse tree
	 */
	enterComponentRef?: (ctx: ComponentRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.componentRef`.
	 * @param ctx the parse tree
	 */
	exitComponentRef?: (ctx: ComponentRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.resourceGroupRef`.
	 * @param ctx the parse tree
	 */
	enterResourceGroupRef?: (ctx: ResourceGroupRefContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.resourceGroupRef`.
	 * @param ctx the parse tree
	 */
	exitResourceGroupRef?: (ctx: ResourceGroupRefContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.windowName`.
	 * @param ctx the parse tree
	 */
	enterWindowName?: (ctx: WindowNameContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.windowName`.
	 * @param ctx the parse tree
	 */
	exitWindowName?: (ctx: WindowNameContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.pureIdentifier`.
	 * @param ctx the parse tree
	 */
	enterPureIdentifier?: (ctx: PureIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.pureIdentifier`.
	 * @param ctx the parse tree
	 */
	exitPureIdentifier?: (ctx: PureIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierListWithParentheses`.
	 * @param ctx the parse tree
	 */
	enterIdentifierListWithParentheses?: (ctx: IdentifierListWithParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierListWithParentheses`.
	 * @param ctx the parse tree
	 */
	exitIdentifierListWithParentheses?: (ctx: IdentifierListWithParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSimpleIdentifier?: (ctx: SimpleIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSimpleIdentifier?: (ctx: SimpleIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.dotIdentifier`.
	 * @param ctx the parse tree
	 */
	enterDotIdentifier?: (ctx: DotIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.dotIdentifier`.
	 * @param ctx the parse tree
	 */
	exitDotIdentifier?: (ctx: DotIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ulong_number`.
	 * @param ctx the parse tree
	 */
	enterUlong_number?: (ctx: Ulong_numberContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ulong_number`.
	 * @param ctx the parse tree
	 */
	exitUlong_number?: (ctx: Ulong_numberContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.real_ulong_number`.
	 * @param ctx the parse tree
	 */
	enterReal_ulong_number?: (ctx: Real_ulong_numberContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.real_ulong_number`.
	 * @param ctx the parse tree
	 */
	exitReal_ulong_number?: (ctx: Real_ulong_numberContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.ulonglong_number`.
	 * @param ctx the parse tree
	 */
	enterUlonglong_number?: (ctx: Ulonglong_numberContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.ulonglong_number`.
	 * @param ctx the parse tree
	 */
	exitUlonglong_number?: (ctx: Ulonglong_numberContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.real_ulonglong_number`.
	 * @param ctx the parse tree
	 */
	enterReal_ulonglong_number?: (ctx: Real_ulonglong_numberContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.real_ulonglong_number`.
	 * @param ctx the parse tree
	 */
	exitReal_ulonglong_number?: (ctx: Real_ulonglong_numberContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.signedLiteral`.
	 * @param ctx the parse tree
	 */
	enterSignedLiteral?: (ctx: SignedLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.signedLiteral`.
	 * @param ctx the parse tree
	 */
	exitSignedLiteral?: (ctx: SignedLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.stringList`.
	 * @param ctx the parse tree
	 */
	enterStringList?: (ctx: StringListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.stringList`.
	 * @param ctx the parse tree
	 */
	exitStringList?: (ctx: StringListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.textStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterTextStringLiteral?: (ctx: TextStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.textStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitTextStringLiteral?: (ctx: TextStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.textString`.
	 * @param ctx the parse tree
	 */
	enterTextString?: (ctx: TextStringContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.textString`.
	 * @param ctx the parse tree
	 */
	exitTextString?: (ctx: TextStringContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.textStringHash`.
	 * @param ctx the parse tree
	 */
	enterTextStringHash?: (ctx: TextStringHashContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.textStringHash`.
	 * @param ctx the parse tree
	 */
	exitTextStringHash?: (ctx: TextStringHashContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.textLiteral`.
	 * @param ctx the parse tree
	 */
	enterTextLiteral?: (ctx: TextLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.textLiteral`.
	 * @param ctx the parse tree
	 */
	exitTextLiteral?: (ctx: TextLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.textStringNoLinebreak`.
	 * @param ctx the parse tree
	 */
	enterTextStringNoLinebreak?: (ctx: TextStringNoLinebreakContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.textStringNoLinebreak`.
	 * @param ctx the parse tree
	 */
	exitTextStringNoLinebreak?: (ctx: TextStringNoLinebreakContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.textStringLiteralList`.
	 * @param ctx the parse tree
	 */
	enterTextStringLiteralList?: (ctx: TextStringLiteralListContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.textStringLiteralList`.
	 * @param ctx the parse tree
	 */
	exitTextStringLiteralList?: (ctx: TextStringLiteralListContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.numLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumLiteral?: (ctx: NumLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.numLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumLiteral?: (ctx: NumLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.boolLiteral`.
	 * @param ctx the parse tree
	 */
	enterBoolLiteral?: (ctx: BoolLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.boolLiteral`.
	 * @param ctx the parse tree
	 */
	exitBoolLiteral?: (ctx: BoolLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.nullLiteral`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.temporalLiteral`.
	 * @param ctx the parse tree
	 */
	enterTemporalLiteral?: (ctx: TemporalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.temporalLiteral`.
	 * @param ctx the parse tree
	 */
	exitTemporalLiteral?: (ctx: TemporalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.floatOptions`.
	 * @param ctx the parse tree
	 */
	enterFloatOptions?: (ctx: FloatOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.floatOptions`.
	 * @param ctx the parse tree
	 */
	exitFloatOptions?: (ctx: FloatOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.standardFloatOptions`.
	 * @param ctx the parse tree
	 */
	enterStandardFloatOptions?: (ctx: StandardFloatOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.standardFloatOptions`.
	 * @param ctx the parse tree
	 */
	exitStandardFloatOptions?: (ctx: StandardFloatOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.precision`.
	 * @param ctx the parse tree
	 */
	enterPrecision?: (ctx: PrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.precision`.
	 * @param ctx the parse tree
	 */
	exitPrecision?: (ctx: PrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.textOrIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTextOrIdentifier?: (ctx: TextOrIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.textOrIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTextOrIdentifier?: (ctx: TextOrIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lValueIdentifier`.
	 * @param ctx the parse tree
	 */
	enterLValueIdentifier?: (ctx: LValueIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lValueIdentifier`.
	 * @param ctx the parse tree
	 */
	exitLValueIdentifier?: (ctx: LValueIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleIdentifierOrText`.
	 * @param ctx the parse tree
	 */
	enterRoleIdentifierOrText?: (ctx: RoleIdentifierOrTextContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleIdentifierOrText`.
	 * @param ctx the parse tree
	 */
	exitRoleIdentifierOrText?: (ctx: RoleIdentifierOrTextContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.sizeNumber`.
	 * @param ctx the parse tree
	 */
	enterSizeNumber?: (ctx: SizeNumberContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.sizeNumber`.
	 * @param ctx the parse tree
	 */
	exitSizeNumber?: (ctx: SizeNumberContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.parentheses`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.parentheses`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.equal`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.equal`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.optionType`.
	 * @param ctx the parse tree
	 */
	enterOptionType?: (ctx: OptionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.optionType`.
	 * @param ctx the parse tree
	 */
	exitOptionType?: (ctx: OptionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.varIdentType`.
	 * @param ctx the parse tree
	 */
	enterVarIdentType?: (ctx: VarIdentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.varIdentType`.
	 * @param ctx the parse tree
	 */
	exitVarIdentType?: (ctx: VarIdentTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.setVarIdentType`.
	 * @param ctx the parse tree
	 */
	enterSetVarIdentType?: (ctx: SetVarIdentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.setVarIdentType`.
	 * @param ctx the parse tree
	 */
	exitSetVarIdentType?: (ctx: SetVarIdentTypeContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierKeyword`.
	 * @param ctx the parse tree
	 */
	enterIdentifierKeyword?: (ctx: IdentifierKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierKeyword`.
	 * @param ctx the parse tree
	 */
	exitIdentifierKeyword?: (ctx: IdentifierKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous1RolesAndLabels`.
	 * @param ctx the parse tree
	 */
	enterIdentifierKeywordsAmbiguous1RolesAndLabels?: (ctx: IdentifierKeywordsAmbiguous1RolesAndLabelsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous1RolesAndLabels`.
	 * @param ctx the parse tree
	 */
	exitIdentifierKeywordsAmbiguous1RolesAndLabels?: (ctx: IdentifierKeywordsAmbiguous1RolesAndLabelsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous2Labels`.
	 * @param ctx the parse tree
	 */
	enterIdentifierKeywordsAmbiguous2Labels?: (ctx: IdentifierKeywordsAmbiguous2LabelsContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous2Labels`.
	 * @param ctx the parse tree
	 */
	exitIdentifierKeywordsAmbiguous2Labels?: (ctx: IdentifierKeywordsAmbiguous2LabelsContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.labelKeyword`.
	 * @param ctx the parse tree
	 */
	enterLabelKeyword?: (ctx: LabelKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.labelKeyword`.
	 * @param ctx the parse tree
	 */
	exitLabelKeyword?: (ctx: LabelKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous3Roles`.
	 * @param ctx the parse tree
	 */
	enterIdentifierKeywordsAmbiguous3Roles?: (ctx: IdentifierKeywordsAmbiguous3RolesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous3Roles`.
	 * @param ctx the parse tree
	 */
	exitIdentifierKeywordsAmbiguous3Roles?: (ctx: IdentifierKeywordsAmbiguous3RolesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsUnambiguous`.
	 * @param ctx the parse tree
	 */
	enterIdentifierKeywordsUnambiguous?: (ctx: IdentifierKeywordsUnambiguousContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsUnambiguous`.
	 * @param ctx the parse tree
	 */
	exitIdentifierKeywordsUnambiguous?: (ctx: IdentifierKeywordsUnambiguousContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleKeyword`.
	 * @param ctx the parse tree
	 */
	enterRoleKeyword?: (ctx: RoleKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleKeyword`.
	 * @param ctx the parse tree
	 */
	exitRoleKeyword?: (ctx: RoleKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.lValueKeyword`.
	 * @param ctx the parse tree
	 */
	enterLValueKeyword?: (ctx: LValueKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.lValueKeyword`.
	 * @param ctx the parse tree
	 */
	exitLValueKeyword?: (ctx: LValueKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous4SystemVariables`.
	 * @param ctx the parse tree
	 */
	enterIdentifierKeywordsAmbiguous4SystemVariables?: (ctx: IdentifierKeywordsAmbiguous4SystemVariablesContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.identifierKeywordsAmbiguous4SystemVariables`.
	 * @param ctx the parse tree
	 */
	exitIdentifierKeywordsAmbiguous4SystemVariables?: (ctx: IdentifierKeywordsAmbiguous4SystemVariablesContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleOrIdentifierKeyword`.
	 * @param ctx the parse tree
	 */
	enterRoleOrIdentifierKeyword?: (ctx: RoleOrIdentifierKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleOrIdentifierKeyword`.
	 * @param ctx the parse tree
	 */
	exitRoleOrIdentifierKeyword?: (ctx: RoleOrIdentifierKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `MultiQueryMySQLParser.roleOrLabelKeyword`.
	 * @param ctx the parse tree
	 */
	enterRoleOrLabelKeyword?: (ctx: RoleOrLabelKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `MultiQueryMySQLParser.roleOrLabelKeyword`.
	 * @param ctx the parse tree
	 */
	exitRoleOrLabelKeyword?: (ctx: RoleOrLabelKeywordContext) => void;
}

