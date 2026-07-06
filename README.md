# VaultHub

<div align="center">

![VaultHub Banner](https://img.shields.io/badge/VaultHub-Secure%20File%20Sharing-2563eb?style=for-the-badge&logo=files&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

**Secure file sharing with client-side encryption, expiring links, and download tracking.**

</div>

---

## ✨ Overview

VaultHub is a privacy-focused file sharing platform that allows users to upload files, encrypt them in the browser, generate shareable links, and control access with expiry rules and password-protected downloads.

The app is built as a full-stack system with a React + TypeScript frontend, an Express + Prisma backend, PostgreSQL for metadata storage, and AWS S3 for file delivery.

---

## 🎨 Prototype Vision

The included prototype represents the product direction and user experience goals for VaultHub:

- clean dark/light interface
- drag-and-drop upload experience
- optional client-side encryption
- shareable file links
- password-based download flow
- activity logs for file access
- privacy-first messaging
- simple, polished onboarding for users

The final implementation may use a different stack from the prototype, but the workflow and feature set follow the same product idea.

---

## 🚀 Core Features

- 🔐 **Client-side encryption** before upload
- 🔗 **Shareable token-based links** for file access
- ⏳ **Expiration controls** for limited access
- 📥 **Download tracking** with activity logs
- 🛡️ **Password-protected downloads** for encrypted files
- ☁️ **S3-backed file storage**
- 🗄️ **PostgreSQL + Prisma** for file metadata and audit data
- 🧾 **Developer-friendly setup** with Docker and scripts

---

## 🧱 Stack

### Implemented stack
- **Frontend:** React, TypeScript, Vite
- **Backend:** Express, TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Storage:** AWS S3
- **Local setup:** Docker / Docker Compose

### Prototype / product experience
- Responsive web UI
- Dark and light mode concept
- Upload, download, and activity views
- Security and privacy-focused UX

---

## 📁 Repository Structure

```text
backend/
  src/
    server.ts          # API routes, file lookup, download checks
    lib/               # Prisma client and backend helpers
    services/           # S3 download URL generation
  prisma/
    schema.prisma      # File and ActivityLog database models
    seed.ts            # Local seed data for development

frontend/
  src/
    App.tsx            # Router and page shell
    pages/             # Download page UI
    lib/api.ts         # Frontend API client
    components/        # Shared UI components

docs/
  Person_B_Progress.md # Development notes and progress log
```

---

## 🔄 How It Works

1. A user uploads a file through the frontend.
2. The file is encrypted in the browser before being sent to storage.
3. The backend stores metadata in PostgreSQL and keeps the file in S3.
4. A unique share link is generated for the recipient.
5. When the recipient opens the link, the backend validates the token, expiry, and download limits.
6. If the file is encrypted, the recipient must provide the password before downloading.
7. Each download attempt is logged for later review.

---

## 🛠️ Local Setup

### Start the database

```bash
docker-compose up -d
```

### Install and prepare the project

```bash
chmod +x setup.sh
./setup.sh
```

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
cd frontend
npm run dev
```

---

## 🔧 Environment Variables

The project expects a local environment setup with values such as:

- `DATABASE_URL`
- AWS credentials for S3 access
- any additional values defined in `.env` / `.env.example`

---

## 🖥️ UI Prototype Notes

The HTML prototype illustrates the intended product experience with:

- upload and download pages
- activity log view
- privacy and about pages
- encryption/decryption progress states
- file metadata cards
- password entry flow
- polished navigation and responsive layout

This helps new contributors quickly understand what VaultHub is supposed to feel like, even before opening the app.

---

## 🤝 Team

- **Naveen** — Upload & Encryption
- **Rahul** — Download & Security

---

## 📄 License

MIT
