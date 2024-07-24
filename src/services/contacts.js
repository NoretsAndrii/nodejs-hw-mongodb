import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();
  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

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
