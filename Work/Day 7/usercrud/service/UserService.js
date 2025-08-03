import bcrypt from 'bcrypt';
import User from '../model/user.js';

export async function createUser(userData) {
  if (!userData.password) {
    throw new Error('Invalid password');
  }

  console.log("before hash -->", userData);

  userData.password = await bcrypt.hash(userData.password, 10);

  console.log("after hash -->", userData);

  await User.create(userData);

  return true;
}