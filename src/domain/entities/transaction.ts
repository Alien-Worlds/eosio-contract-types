import { Action } from './action';
import { Extension } from './extension';
import { TimePoint } from './time';
import { TransactionStruct } from '../../data';

export class Transaction {
  public static fromStruct(struct: TransactionStruct): Transaction {
    const {
      expiration,
      ref_block_num,
      ref_block_prefix,
      max_net_usage_words,
      max_cpu_usage_ms,
      delay_sec,
      context_free_actions,
      actions,
      transaction_extensions,
    } = struct;

    return new Transaction(
      TimePoint.fromStruct(expiration),
      ref_block_num,
      ref_block_prefix,
      max_net_usage_words,
      max_cpu_usage_ms,
      delay_sec,
      context_free_actions.map(action => Action.fromStruct(action)),
      actions.map(action => Action.fromStruct(action)),
      transaction_extensions.map(extension => Extension.fromStruct(extension))
    );
  }

  protected constructor(
    public readonly expiration: TimePoint,
    public readonly refBlockNumber: number,
    public readonly refBlockPrefix: number,
    public readonly maxNetUsageWords: number,
    public readonly maxCpuUsageMs: number,
    public readonly delaySec: number,
    public readonly contextFreeActions: Action[],
    public readonly actions: Action[],
    public readonly transactionExtensions: Extension[]
  ) {}

  public toStruct(): TransactionStruct {
    const {
      expiration,
      refBlockNumber,
      refBlockPrefix,
      maxNetUsageWords,
      maxCpuUsageMs,
      delaySec,
      contextFreeActions,
      actions,
      transactionExtensions,
    } = this;

    return {
      expiration: expiration.toStruct(),
      ref_block_num: refBlockNumber,
      ref_block_prefix: refBlockPrefix,
      max_net_usage_words: maxNetUsageWords,
      max_cpu_usage_ms: maxCpuUsageMs,
      delay_sec: delaySec,
      context_free_actions: contextFreeActions.map(action => action.toStruct()),
      actions: actions.map(action => action.toStruct()),
      transaction_extensions: transactionExtensions.map(extension =>
        extension.toStruct()
      ),
    };
  }
}
