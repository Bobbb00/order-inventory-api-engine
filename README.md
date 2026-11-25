# 📦 Order & Inventory Management RESTful API Engine

Production-ready backend API dibangun menggunakan **TypeScript, Express, Prisma ORM, PostgreSQL, Docker, dan Zod**.

Proyek ini dirancang mengadopsi prinsip **Clean Architecture**, **Role-Based Access Control (RBAC)**, dan **Atomic Database Transactions**.

---

## 🛠️ Tech Stack & Architecture

- **Runtime & Language:** Node.js & TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL (Containerized via Docker)
- **ORM:** Prisma v6
- **Validation:** Zod Schema Validation
- **Authentication:** JWT (JSON Web Token) & Bcrypt Password Hashing
- **Architecture Pattern:** Modular MVC / Clean Architecture

---

## 🚀 Getting Started

### 1. Prerequisites

Pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (v18+)
- [Docker & Docker Compose](https://www.docker.com/)

### 2. Environment Setup

Salin file konfigurasi template `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Sesuaikan konfigurasi port dan kredensial database jika diperlukan.

### 3. Menjalankan Database (Docker)

Nyalakan container PostgreSQL:

```bash
docker compose up -d
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Menjalankan Server Development

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`.

---

## 📋 Project Specification

Dokumentasi lengkap mengenai spesifikasi teknis, ERD, dan kontrak API dapat dilihat pada dokumen:
👉 [Technical Specification](./docs/capstone_technical_specification.md)
