import { User } from './User'
import { Category } from './Category'
import { Group } from './Group'

export enum TransactionType {
  DEBIT = 'debit',
  CREDIT = 'credit',
  TRANSFERENCE = 'transference',
}

export interface Transaction {
	id: string
  amount: number
  date: Date
  description: string
  debitAccount: Account
  creditAccount: Account
  categories: Category[]
  type: TransactionType
  creator: User
  group: Group
  createdAt: Date
  updatedAt: Date
}