import ContactsCollection from '../db/models/Contact.js';

export const getContacts = async () => {
  try {
    return await ContactsCollection.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getContactsById = async (id) => {
  try {
    return await ContactsCollection.findOne({ _id: id });
  } catch (error) {
    throw new Error(error);
  }
};
