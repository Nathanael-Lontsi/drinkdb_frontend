import bcrypt from 'bcrypt';
import express from 'express';

const app = express();
app.use(express.json());
const users = [];

app.post('/register', async function (req, res) {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 13);

  users.push({
    username,
    password: hash,
  });

  console.log(users);

  res.send('ok');
});

app.post('/login', async function (req, res) {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).send('wrong username');
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).send('wrong password');
  }

  // send a cookie
  // send a jwt
});

app.listen(3000, () => console.log('Listening on port'));
