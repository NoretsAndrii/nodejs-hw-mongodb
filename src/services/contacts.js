import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page,
  perPage,
  sortBy,
  sortOrder,
  filter = {},
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find({ userId });

  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }
  if (filter.isFavourite !== undefined) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();
  console.log(contactsCount);

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = (contactId, userId) =>
  ContactsCollection.findOne({ _id: contactId, userId });

export const createContact = (contactData) =>
  ContactsCollection.create(contactData);

export const updateContact = (contactId, userId, contactData, options = {}) =>
  ContactsCollection.findOneAndUpdate({ _id: contactId, userId }, contactData, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

export const deleteContact = (contactId, userId) =>
  ContactsCollection.findOneAndDelete({ _id: contactId, userId });
