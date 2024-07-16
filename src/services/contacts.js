import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = () => ContactsCollection.find();

export const getContactById = (contactId) =>
  ContactsCollection.findById(contactId);

export const createContact = (contactData) =>
  ContactsCollection.create(contactData);

export const updateContact = (contactId, contactData, options = {}) =>
  ContactsCollection.findOneAndUpdate({ _id: contactId }, contactData, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

export const deleteContact = (contactId) =>
  ContactsCollection.findOneAndDelete({ _id: contactId });
