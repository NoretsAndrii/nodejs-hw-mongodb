import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { UserCollection } from '../db/models/user.js';

export const registerUser = async (userData) => {
  const isNewEmail = await UserCollection.findOne({ email: userData.email });
  if (isNewEmail !== null) {
    throw createHttpError(409, 'Email in use');
  }
  const encryptedPassword = await bcrypt.hash(userData.password, 10);

  return await UserCollection.create({
    ...userData,
    password: encryptedPassword,
  });
};

export const authUser = async (userData) => {
  const user = await UserCollection.findOne({ email: userData.email });
  if (user === null) throw createHttpError(401, 'User not found');
  const isValidPassword = await bcrypt.compare(
    userData.password,
    user.password,
  );
  if (!isValidPassword) throw createHttpError(401, 'Unauthorized');
  return user;
};
