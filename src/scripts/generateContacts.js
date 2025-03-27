import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const newContacts = Array(number).fill(0).map(createFakeContact);

  try {
    const contactList = await readContacts();
    const updatedContacts = [...contactList, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Added ${number} products`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
