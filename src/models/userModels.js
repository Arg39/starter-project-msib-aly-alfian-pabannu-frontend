import mysql from 'mysql';

// Membuat koneksi ke database MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'nextjs'
});

// Membuka koneksi
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Definisikan skema pengguna MySQL
const userSchema = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    isVerified BOOLEAN DEFAULT false,
    isAdmin BOOLEAN DEFAULT false,
    forgotPasswordToken VARCHAR(255),
    forgotPasswordTokenExpiry DATETIME,
    verifyToken VARCHAR(255),
    verifyTokenExpiry DATETIME
  )
`;

// Eksekusi skema pengguna
connection.query(userSchema, (err, results) => {
  if (err) {
    console.error('Error executing user schema query:', err);
    return;
  }
  console.log('User schema created or already exists');
});

// Ekspor koneksi untuk digunakan di seluruh aplikasi
export default connection;