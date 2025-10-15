import { BASE_URL } from './baseUrl';
import PocketBase from 'pocketbase';

const pb = new PocketBase(BASE_URL);

export default async function getUsers() {
  try {
    const result = await pb.collection('po_users').getList(1, 50, {
      sort: '-created',
    });
    const users = result.items.map((user) => ({
      key: user.id,
      name: user.name || 'Name',
      username: user.username,
      email: user.email || 'email',
      description: user.description || 'description',
    }));

    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}
