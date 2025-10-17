import { requestInstance } from './instance';
import { BASE_URL } from './baseUrl';
import type { PaginatedResponse } from '@/types/global';

const COLLECTION = 'po_users';
const ENDPOINT = `${BASE_URL}api/collections/${COLLECTION}/records`;

// ---------- Types ----------
export interface User {
  id: string;
  username: string;
  email: string;
  description: string;
  avatar: string;
}

// ---------- CRUD Operations ----------

// READ: paginated list
export async function getUsers(page = 1, perPage = 10) {
  const res = await requestInstance.get<PaginatedResponse<User>>(ENDPOINT, {
    params: { page, perPage, sort: '-created' },
  });
  return res.data;
}

// READ: single User
export async function getUser(id: string) {
  const res = await requestInstance.get<User>(`${ENDPOINT}/${id}`);
  return res.data;
}

// CREATE
export async function createUser(data: Omit<User, 'id' | 'created'>) {
  const res = await requestInstance.post<User>(ENDPOINT, data);
  return res.data;
}

// UPDATE
export async function updateUser(id: string, data: Partial<User>) {
  const res = await requestInstance.patch<User>(`${ENDPOINT}/${id}`, data);
  return res.data;
}

// DELETE
export async function deleteUser(id: string) {
  const res = await requestInstance.delete(`${ENDPOINT}/${id}`);
  return res.data;
}
