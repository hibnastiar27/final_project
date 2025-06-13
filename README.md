<div align="center">
  <img width="248" alt="logo-destinara" src="https://github.com/user-attachments/assets/125c9064-8f28-4ef1-9ea8-b10433e7a4e9" />  

  # Destinasi Nusntara 
  
  **Platform Rekomendasi Destinasi dan Kuliner Indonesia di Pulau Jawa**
  
  <p>
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#contributing">Contributing</a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/React.js-18+-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React.js">
    <img src="https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite" alt="Vite">
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  </p>
</div>

---

## 🌏 Tentang Destinara

**Destinara** adalah platform rekomendasi wisata berbasis preferensi pengguna yang dirancang untuk mempersonalisasi pengalaman berlibur di Pulau Jawa. Dengan memanfaatkan data minat pengguna dan kecocokan atribut destinasi, sistem ini menghadirkan saran perjalanan dan kuliner lokal yang relevan, personal, dan informatif.

### 🤷‍♂️ Latar Belakang Masalah
- **Pemilihan Destinasi yang Sulit**: Banyak wisatawan kesulitan menentukan destinasi wisata yang sesuai dengan minat pribadi mereka
- **Minimnya Rekomendasi Personal**: Rekomendasi destinasi dan kuliner yang tersedia umumnya bersifat umum, bukan berdasarkan preferensi pengguna
- **Kurangnya Integrasi Data Minat**: Belum banyak sistem yang memanfaatkan data survei minat pengguna untuk menghasilkan saran wisata yang relevan
- **Potensi Wisata Lokal Kurang Tersorot**: Banyak destinasi dan makanan khas daerah di Pulau Jawa belum terangkat secara maksimal karena belum terhubung dengan preferensi wisatawan

### 💡 Solusi yang Ditawarkan
- 🎟️ **Rekomendasi berbasis preferensi personal** menggunakan pendekatan content-based filtering
- 🎟️ **Integrasi data survei** pengguna secara langsung untuk menghasilkan rekomendasi yang lebih akurat dan relevan
- 🎟️ **Rekomendasi kuliner khas daerah** yang disesuaikan dengan destinasi pilihan pengguna
- 🎟️ **Dukungan terhadap pariwisata lokal** dan promosi budaya Indonesia melalui pengalaman digital
- 🎟️ **Antarmuka yang interaktif dan personal** untuk eksplorasi wisata dan gaya hidup, termasuk fitur berbagi ke media sosial
---

## 🛎️ Features

### 🎯 Fitur Utama Website
🧠 **Survey Berbasis Preferensi** - Form survei interaktif yang dirancang untuk menangkap minat pengguna terhadap berbagai kategori destinasi, menjadi data utama dalam proses rekomendasi.
🧭 **Rekomendasi Destinasi Personal** - Sistem cerdas yang memberikan rekomendasi destinasi wisata di Pulau Jawa berdasarkan minat pengguna melalui pendekatan content-based filtering dengan model machine learning<br>
🍽️ **Rekomendasi Kuliner Daerah** - Tidak hanya tempat wisata, Destinara juga merekomendasikan makanan khas yang sesuai dengan lokasi pilihan pengguna, memperkaya pengalaman budaya<br>


### ⚙️ Fitur Teknis
-📱 **Responsive Design** – Tata letak web dirancang agar optimal digunakan di berbagai ukuran layar perangkat, baik desktop maupun mobile
-🧠 **Custom TensorFlow ML Model** – Menggunakan arsitektur TensorFlow untuk membangun model Machine Learning dari awal tanpa menggunakan model dari TensorFlow Hub, AutoML, atau layanan AI pihak ketiga
-🔌 **RESTful API with Hapi.js** – Backend dikembangkan menggunakan framework Hapi untuk membangun RESTful API dengan endpoint sesuai konvensi standar.
-⛓️ **Modular Build System** – Proyek dikembangkan menggunakan module bundler seperti Vite untuk pengelolaan aset dan optimasi build.
-🎨 **Modern UI/UX – Menggunakan Tailwind CSS untuk tampilan antarmuka yang bersih, modern, dan efisien.
-📤 **Deployed & Accessible** – Aplikasi web telah di-deploy menggunakan layanan hosting seperti Vercel.


---

## 📋 Tech Stack

<div align="center">
  
| Category | Technology |
|----------|------------|
| **Frontend** | Express JS, Vite, Tailwind CSS |
| **Authentication** | Cookie-based session management |
| **Deployment** | Vercel Platform |
| **Package Manager** | Bun (recommended) / npm |
| **Development** | ESLint, Prettier |

</div>

---

## 📌 Prerequisites

Pastikan sistem kamu sudah memiliki:
- **Node.js** (v18.0.0 atau lebih baru)
- **Bun** (recommended) / npm / yarn / pnpm
- **Git** untuk version control

---

## 📥 Installation

### 1. Clone Repository
```bash
git clone https://github.com/hibnastiar27/final_project.git
cd frontend
```

### 2. Install Dependencies
```bash
# Menggunakan Bun (recommended)
bun install

# Atau menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

### 3. Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Edit file .env.local sesuai konfigurasi
nano .env.local
```

### 4. Development Server
```bash
# Menggunakan Bun
bun dev

# Atau menggunakan npm
npm run dev

# Atau dengan auto-open browser
npm run dev -- --open
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

---

## 🛡️Building for Production

### Build Application
```bash
# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Deploy ke Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📁 Project Structure

```
final_project/
├── public/                 # Static assets (favicon, background, logos)
├── src/                    # Source code
│   ├── api/                # API functions (auth, data handling)
│   ├── assets/             # Images & static resources
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Page layout templates
│   ├── pages/              # Route-based pages (home, detail, auth, survey)
│   ├── utils/              # Utility/helper functions
│   ├── App.jsx             # Root React component
│   ├── main.jsx            # App entry point
│   ├── App.css             # Global styles
│   ├── index.css           # Tailwind/reset styles
├── .env                    # Environment variables
├── .gitignore              # Git ignore config
├── index.html              # HTML entry for Vite
├── eslint.config.js        # ESLint configuration
├── package.json            # Project metadata & dependencies
├── package-lock.json       # NPM lockfile
├── tailwind.config.js      # Tailwind CSS config
├── vite.config.js          # Vite bundler config
├── vercel.json             # Vercel deployment config
└── README.md               # Project documentation
```

---

## 🗺️ App Architecture

<div align="center">
  <img width="297" alt="Destinara-Architecturefix" src="https://github.com/user-attachments/assets/30733e16-b0a2-4f96-a128-0dbbe3ff0d70" />
  
  *Arsitektur sistem Destinara menunjukkan alur utama data dari FrontEnd menuju BackEnd  yang kemudian berinteraksi dua arah dengan Database dan model Machine Learning.Hasil dari proses tersebut dikembalikan ke FrontEnd sebagai respon yang telah diproses.*
</div>

### Architecture Components:
- **Frontend Layer**: React.js dengan Vite untuk user interface
- **API Layer**: RESTful APIs untuk komunikasi data
- **Authentication**: Middleware-based security system berbasis Hapi
- **ML Integration**: Machine learning models untuk rekomendasi destinasi
- **Database**: Data storage untuk profil, hasil survey, dan output model ML

---

## ♾️ Usage

### 1. Authentication Flow
```typescript
// Login process
const handleLogin = async (credentials) => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
  if (data.status === 'success') {
    localStorage.setItem('token', data.data.token);
    // Redirect to dashboard
  }
};
```

### 2.Submit Survey
```typescript
// Submit user survey
const submitSurvey = async (answers) => {
  const response = await fetch('/survey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(answers),
  });

  return response.json();
};
```

###3. Get Rekomendasi Destinasi
```typescript
// Get recommended destinations by user_id
const getDestinations = async (userId) => {
  const response = await fetch(`/destinations/?user_id=${userId}`);
  return response.json();
};
```

###4. Get Detail Destinasi dan Kuliner
```typescript
// Get detail destination and list of kuliner
const getDestinationDetails = async (id) => {
  const response = await fetch(`/destinations/?id=${id}`);
  return response.json();
};
```

### 🧼 Code Quality
- **ESLint**: Automated code linting
- **Prettier**: Code formatting
- **Vite + React Plugin**: front-end development
- **React Router**: To navigate between pages

---

## 🤝 Contributing

Kami sangat terbuka terhadap kontribusi dari developer community! 🚀

### Getting Started:
1. **Fork** repository ini
2. **Create** feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** perubahan (`git commit -m 'Add: AmazingFeature'`)
4. **Push** ke branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

### Contribution Guidelines:
- Follow existing code style dan conventions
- Write clear commit messages
- Add tests untuk new features
- Update documentation jika diperlukan
- Ensure code passes all linting checks

---

## 🔒 License

Distributed under the **MIT License**. See `LICENSE` file for more information.

---

## 🧩 Team

<div align="center">
  
**Capstone Team Destinara**

This project was made possible by a strong collaborative effort from our dedicated team:

</div>

### ✨ Team Members

| Name | Student ID | Role | Track | Connect |
|------|------------|------|--------|---------|
| **Nur Aria Hibnastiar** | MC401D5Y0574 | Machine Learning Engineer | Machine Learning | [LinkedIn](https://www.linkedin.com/in/hibnastiar/) |
| **Difa Fisabilillah** | MC401D5X0255  | Machine Learning Engineer | Machine Learning | [LinkedIn](https://www.linkedin.com/in/difa-fisabilillah/) |
| **M. Ariyo Syahraza** | MC319D5Y0337  | Machine Learning Engineer | Machine Learning | [LinkedIn](https://www.linkedin.com/in/muhammad-ariyo-syahraza/) |
| **Daniel Kurniawan Lianto** | FC005D5Y1858  | Fullstack Developer | Frontend Development | [LinkedIn](https://www.linkedin.com/in/daniel-kurniawan-lianto/) |
| **Ulfiyah Nahdi Pratista** | FC211D5X0905  | Fullstack Developer | Frontend Development | [LinkedIn](https://www.linkedin.com/in/ulfiyah-n-pratista/) |

<div align="center">
  
**Special Thanks** 🙏

Terima kasih kepada para mentor, dosen pembimbing, dan semua pihak yang telah mendukung pengembangan Destinara.

Proyek ini dibuat dengan sepenuh hati ❤️ untuk mendukung pariwisata dan kuliner lokal Indonesia.

</div>

---

<div align="center">
  
🎗️ Star this repository if Destinara inspires your travel and culinary journey! 🎗️

[⬆ Back to Top](#destinara)

</div>

