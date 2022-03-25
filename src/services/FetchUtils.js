import { client, checkError } from './client.js';

export async function getWorkshops() {
  const resp = await client.from('workshops').select('*');
  return checkError(resp);
}

export async function getBunnies() {
  const resp = await client.from('fuzzy_bunnies').select('*');
  return checkError(resp);
}

export async function getTodos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}