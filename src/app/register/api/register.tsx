// pages/api/register.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-mysql-user',
  password: 'your-mysql-password',
  database: 'your-mysql-database'
});

const registerUser = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, address, email, password } = req.body;
    const user = { username, address, email, password };

    connection.query('INSERT INTO users SET ?', user, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'User registered successfully', user });
      }
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default registerUser;
