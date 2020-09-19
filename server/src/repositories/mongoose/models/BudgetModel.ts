import { Document, Schema, model } from 'mongoose'
import { IUser } from './UserModel'

export const BUDGET: string = 'Budget'

export interface IBudget extends Document {
  name: string,
  description: string,
  creator: IUser['_id']
  members: IUser[]
  createdAt: Date
  updatedAt: Date
}

export const BudgetSchema = new Schema<IBudget>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: true
})

export default model<IBudget>(BUDGET, BudgetSchema)