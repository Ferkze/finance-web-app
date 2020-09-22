import { Request, Response } from 'express'
import { Account } from '../models/entities/Account'
import usecases from '../usecases'
import debug from 'debug'

const log = debug('app:account:controller')

class AccountController {

	public async index(req: Request, res: Response): Promise<Response> {
		try {
			const accounts = await usecases.account.listAccountsByUser(req.user['id'])
			return res.status(200).json({ accounts })
		} catch (error) {
			return res.status(500).json({ error: error.message })
		}
	}

	public async findById(req: Request, res: Response): Promise<Response> {
		try {
			const account = await usecases.account.findAccountById(req.params.accountId)
			return res.status(200).json({ account })
		} catch (error) {
			log('Erro na busca de conta', error)
			return res.status(500).json({ error: error.message })
		}
	}

	public async create(req: Request, res: Response): Promise<Response> {
		try {
			const account = await usecases.account.registerAccount(req.body as Account)
			return res.status(200).json({ account })
		} catch (error) {
			log('Erro na gravação de conta', error)
			return res.status(500).json({ error: error.message })
		}
	}

	public async update(req: Request, res: Response): Promise<Response> {
		try {
			const account = await usecases.account.editAccount(req.body as Account)
			return res.status(200).json({ account })
		} catch (error) {
			log('Erro na atualização de conta', error)
			return res.status(500).json({ error: error.message })
		}
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		try {
			const account = await usecases.account.deleteAccount(req.params.accountId)
			return res.status(200).json({ account })
		} catch (error) {
			log('Erro na remoção de conta', error)
			return res.status(500).json({ error: error.message })
		}
	}

	public async balance(req: Request, res: Response): Promise<Response> {
		// const { accountId } = req.params
		// const transactions = await Transaction.find().byAccount(accountId)
		// const balance = transactions.reduce((total, cur) => {
		// 	switch (cur.type) {
		// 	case TransactionType.CREDIT:
		// 		total -= cur.amount
		// 		break
		// 	case TransactionType.DEBIT:
		// 		total += cur.amount
		// 		break
		// 	case TransactionType.TRANSFERENCE:
		// 		if (cur.debitAccount == accountId)
		// 			total += cur.amount
		// 		break
		// 	default:
		// 		log('Transaction without type:', cur)
		// 	}
		// 	return total
		// }, 0)
		// return res.json(balance)
		return res.json(null)
	}

}

export default new AccountController()