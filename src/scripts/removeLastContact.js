import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contactList = await readContacts();
    contactList.pop();
    await writeContacts(contactList);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
