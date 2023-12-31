import {
  WalletApiFunction,
  WalletInterface,
  WalletCreateParams,
  WalletReCreateParams,
  WalletUnlockParams,
  WalletUnlockResponse,
} from './wallet'
import { NetworkApiFunction, NetworkInterface } from './network'
import { TransactionParams, TransactionApiFunction, TransactionInterface, GetBalanceParams } from './transaction'
import { GetHistoryListParams, HistoryApiFunction, HistoryInterface } from './history'
import { UploadApiFunction, UploadFileParams, UploadInterface, UploadFile } from './upload'

export { ApiKey } from './base'
export type { Params } from './base'

export type { WalletCreateParams, WalletReCreateParams, WalletUnlockParams, WalletUnlockResponse }
export type { TransactionParams, GetBalanceParams }
export type { GetHistoryListParams }
export type { UploadFileParams, UploadFile }

export { HistoryApiFunction, HistoryInterface }
export { WalletApiFunction, WalletInterface }
export { NetworkApiFunction, NetworkInterface }
export { TransactionApiFunction, TransactionInterface }
export { UploadApiFunction, UploadInterface }
