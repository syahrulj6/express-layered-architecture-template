const { findUsers, findUserById, insertUser, editUserById, patchUserById } = require('./user.repository');

const getAllUsers = async () => {
  const users = await findUsers();

  return users;
};

const getUserById = async (id) => {
  if (typeof id !== 'number') {
    throw new Error('Id must be a number/int type');
  }

  const product = await findUserById(id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

const createUser = async (data) => {
  const user = await insertUser(data);

  return user;
};

const deleteUser = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};

const editUser = async (id, userData) => {
  if (!(userData.image && userData.name && userData.email && userData.password)) {
    return res.status(400).send('Some fields are missing');
  }

  const user = await editUserById(id, userData);

  return user;
};

const patchUser = async (id, userData) => {
  const user = await patchUserById(id, userData);
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  editUser,
  patchUser,
};
