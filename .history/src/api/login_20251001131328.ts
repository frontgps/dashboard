import axios from 'axios'
import { BASE_URL } from './baseUrl'
import { AuthSuccessResponse, LoginCredentials } from '@/types/auth'

export async function login({
  identity,
  password,
}: LoginCredentials): Promise<AuthSuccessResponse> {
  const response = await axios.post<AuthSuccessResponse>(
    `${BASE_URL}api/collections/po_users/auth-with-password`,
    { identity, password }
  )
  return response.data
}
