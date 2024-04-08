const prisma = require('../lib/db');

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

const insertUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    },
  });

  return user;
};

const editUserById = async (id, userData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    },
  });

  return user;
};

const patchUserById = async (id, userData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    },
  });

  return user;
};

module.exports = {
  findUsers,
  findUserById,
  insertUser,
  editUserById,
  patchUserById,
};
