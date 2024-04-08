const express = require('express');
const { getAllUsers, getUserById, createUser, deleteUser, editUser, patchUser } = require('./user.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const usersId = parseInt(req.params.id);

  const user = await getUserById(usersId);

  res.send(user);
});

router.post('/', async (req, res) => {
  const newUser = req.body;
  const user = await createUser(newUser);

  res.send({ data: user, message: 'Successfully create User' });
});

router.delete('/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  await deleteUser(userId);

  res.send('Successfully delete User');
});

router.put('/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  const user = await editUser(userId, userData);

  res.send({
    data: user,
    message: 'Successfully update User',
  });
});

router.patch('/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  const user = await patchUser(userId, userData);

  res.send({
    data: user,
    message: 'Successfully update User',
  });
});

module.exports = router;
