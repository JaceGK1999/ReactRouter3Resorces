import { client, checkError } from './client.js';

export async function getWorkshops() {
  const resp = await client.from('workshops').select('*');

  checkError(resp);
}
