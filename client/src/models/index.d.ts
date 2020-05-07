import { AccountTypes, AccountSubtypes, TransactionType } from './enums'

export interface User {
  _id: string
  email?: string
  firstName?: string
  lastName?: string
  accounts?: IAccount[]
  createdAt?: string
  updatedAt?: string
}

export interface IAccount {
  _id?: string
  name?: string
  type?: AccountTypes
  subtype?: AccountSubtypes
  startingBalance?: number
  owner?: string

  createdAt?: string
  updatedAt?: string
}

export interface ICategory {
  name?: string

  createdAt?: string
  updatedAt?: string
}

export interface ITransaction {
  amount?: number
  date?: Date
  account: IAccount
  category: ICategory
  type: TransactionType

  createdAt?: string
  updatedAt?: string
}