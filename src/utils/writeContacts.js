import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (arr) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(arr, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};
