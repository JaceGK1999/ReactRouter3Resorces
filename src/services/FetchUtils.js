import { client, checkError } from './client.js';

export async function getWorkshops() {
  const resp = await client.from('workshops').select('*');
  console.log(resp, 'resp');
  return checkError(resp);
}

export async function getBunnies() {
  const resp = await client.from('fuzzy_bunnies').select('*');
  return checkError(resp);
}