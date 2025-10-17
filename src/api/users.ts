import { requestInstance } from './instance';
import { BASE_URL } from './baseUrl';
import type { PaginatedResponse } from '@/types/global';

const COLLECTION = 'po_users';
const ENDPOINT = `${BASE_URL}api/collections/${COLLECTION}/records`;

export interface User {
  id: string;
  username: string;
  email: string;
  description: string;
  avatar: string;
}

function buildFilter(filters: Partial<User>) {
  const parts: string[] = [];
  if (filters.id) parts.push(`id ~ "${filters.id}"`);
  if (filters.username) parts.push(`username ~ "${filters.username}"`);
  if (filters.email) parts.push(`email ~ "${filters.email}"`);
  return parts.join(' && ');
}

export async function getUsers(page = 1, perPage = 10, filters?: Partial<User>) {
  const params: Record<string, any> = { page, perPage, sort: '-created' };
  const filterStr = buildFilter(filters || {});
  if (filterStr) params.filter = filterStr;

  const res = await requestInstance.get<PaginatedResponse<User>>(ENDPOINT, { params });
  return res.data;
}

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
