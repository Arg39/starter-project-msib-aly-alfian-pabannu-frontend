// models/userModel.ts

// Import model pengguna dan tipe data yang diperlukan
import User from '@/models/userModels'; // Sesuaikan dengan path yang sesuai

// Definisikan antarmuka atau tipe untuk userModel
export interface UserModel {
    id: number;
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    forgotPasswordToken: string | null;
    forgotPasswordTokenExpiry: Date | null;
    verifyToken: string | null;
    verifyTokenExpiry: Date | null;
  }
  
  // Fungsi untuk mengecek penggunaan model pengguna
  export function checkUserModel(user: UserModel) {
    // Cek properti yang diharapkan
    console.log('User ID:', user.id);
    console.log('Username:', user.username);
    console.log('Email:', user.email);
    // Lanjutkan untuk properti lainnya
  
    // Jika userModel diimpor dengan benar dan memiliki struktur yang sesuai,
    // Anda akan mendapatkan penandaan statis dan bantuan dari TypeScript
  }
