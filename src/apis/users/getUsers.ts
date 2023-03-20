import { API_BASE_URL } from '../../config';
import { User } from '../../interfaces/User';

export const getUsers = async (page: number): Promise<User[]> => {
  const res = await fetch(`${API_BASE_URL}users/${page}/next`);

  if (!res.ok) {
    return [];
  }

  const parsedRes = await res.json();
  return parsedRes?.users;
};
