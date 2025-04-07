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

export const addContacts = async (payload) => {
  return await ContactsCollection.create(payload);
};

export const updateContacts = async (_id, payload) => {
  return ContactsCollection.findOneAndUpdate({ _id }, payload, { new: true });
};

export const deleteContactsById = async (_id) => {
  return ContactsCollection.findOneAndDelete({ _id });
};
