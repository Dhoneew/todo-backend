# Todo App Backend - Tugas 5

## Cara Setup Project

1. Buka folder proyek di VS Code.
2. Jalankan perintah `npm install` di terminal untuk mengunduh dependencies.
3. Salin file `.env.example` menjadi `.env`, kemudian sesuaikan nilainya seperti port, kredensial database, dan JWT Secret.

## Cara Import Database

1. Buka XAMPP/Laragon dan jalankan service MySQL.
2. Buat database baru dengan nama `todo_db`.
3. Import file SQL ke dalam database tersebut agar struktur tabel `users` dan `todos` terbentuk.

## Cara Menjalankan Server Lokal

Buka terminal pada folder project, kemudian jalankan:

```bash
npm run dev