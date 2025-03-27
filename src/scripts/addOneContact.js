import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contactList = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contactList, newContact];
    await writeContacts(updatedContacts);
    console.log('Added one product');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
