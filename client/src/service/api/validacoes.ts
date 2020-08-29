import Axios from 'axios'

import client from '.'

export const validacaoEmail = ( email:String ) => {
	return client.get(`/validateEmail?email=${email}`)
}