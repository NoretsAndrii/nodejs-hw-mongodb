import { authUser, registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const authUserController = async (req, res) => {
  const user = await authUser(req.body);
  res.status(201).json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: user,
  });
};
