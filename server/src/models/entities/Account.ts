import { User } from './User'

export enum AccountTypes {
  DEBIT = 'debit',
  CREDIT = 'credit'
}

export enum AccountSubtypes {
  CURRENCY = 'currency',
  DIGITAL_CURRENCY  = 'digital-currency',
  CURRENT = 'current-account',
  CREDIT_CARD = 'credit-card',
  BROKER = 'broker-account'
}

export interface Account {
  id?: any
  name: string
  main: boolean
  institution: string
  unregisteredInstitution?: string
  type: AccountTypes
  subtype: AccountSubtypes
  startingBalance: number
  owner: User['id']
  createdAt?: Date
  updatedAt?: Date
}