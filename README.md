# 📊 HCI & Data Visualization Studio

> **Implementasi Praktikum Kuliah Tamu Informatika Seri 4**  
> **Tema:** *Human-Computer Interaction (HCI) dan Data Visualization*  
> **Narasumber:** Arafat Febriandirza – *Badan Riset dan Inovasi Nasional (BRIN)*  
> **Penyelenggara:** Program Studi Informatika, Universitas Bengkulu (UNIB)  
> **Prinsip Utama:** *"You are not your user — pahami pengguna sebelum menulis kode."*

---

## 📖 1. Latar Belakang & Konsep Kunci Materi

Dalam pengembangan perangkat lunak modern, aplikasi yang memiliki fitur canggih akan sia-sia jika pengguna kesulitan berinteraksi dengannya. Bidang **HCI (Human-Computer Interaction)** mempelajari cara manusia berinteraksi dengan sistem komputer untuk meminimalkan beban kognitif (*cognitive load*) dan menghadirkan antarmuka yang intuitif.

Aplikasi ini mendemonstrasikan secara langsung prinsip-prinsip utama yang dipaparkan oleh narasumber dari BRIN:

1. **Mantra Visualisasi Ben Shneiderman:**  
   * *"Overview first, zoom and filter, then details on demand."*
2. **Psikologi Kognitif (Miller's Law):**  
   * Memori kerja (*working memory*) manusia terbatas (~7 item). Desain antarmuka harus memprioritaskan **pengenalan daripada mengingat (*recognition over recall*)**.
3. **Prinsip Data-Ink Ratio (Edward Tufte):**  
   * Menghilangkan dekorasi berlebihan (*chartjunk*), sehingga tinta/piksel visual fokus menyampaikan data esensial.
4. **Penggunaan Warna yang Bijak:**  
   * Warna merah hanya digunakan untuk menandai **status anomali atau peringatan**, bukan sekadar hiasan.
5. **5 Prinsip Desain Don Norman:**  
   * *Visibility, Feedback, Constraint, Consistency, dan Affordance*.

---

## 🎯 2. Fitur-Fitur Aplikasi

* 📈 **1. Overview First:** Menampilkan 4 kartu ringkasan metrik utama (Total Riset, Sitasi, Normal, dan Anomali) sebelum masuk ke detail data.
* 🔍 **2. Zoom & Filter Interaktif:** Memfilter data dan grafik berdasarkan bidang penelitian (*Informatika, Energi Terbarukan, Kesehatan Hayati*).
* 📊 **3. Pemilihan Grafik Tepat (Chart.js):**
  * **Bar Chart:** Untuk perbandingan jumlah proyek antar bidang.
  * **Line Chart:** Untuk melihat tren publikasi riset selama 5 tahun.
* 📋 **4. Details-on-Demand:** Mengklik tombol "Lihat Detail" pada tabel akan memunculkan rincian peneliti dan abstrak tanpa membebani memori pengguna.
* 🔄 **5. Mode Eksperimen "Good UI vs Bad UI" (HCI Showcase):**
  * Tombol sakelar untuk melihat perbedaan nyata antara **Desain Standar HCI** dengan **Desain Buruk (Extraneous Cognitive Load & Chartjunk)**.

---

## 📁 3. Struktur Berkas Proyek

```text
hci-data-visualization-studio/
├── index.html     # Halaman utama antarmuka berbasis 3 tahap Shneiderman
├── style.css      # CSS terstruktur (tema Good UI bersih vs Bad UI kontras tinggi)
├── app.js         # Logika JS sederhana (KPI overview, filter, update grafik Chart.js, details-on-demand)
├── .gitignore     # Konfigurasi proteksi repositori Git
└── README.md      # Laporan dokumentasi tugas kuliah
```

---

## 💻 4. Teknologi yang Digunakan

* **HTML5:** Struktur semantik dokumen web.
* **CSS3:** Tata letak *Flexbox* & *CSS Grid* yang rapi mengikuti prinsip Gestalt (*Proximity & Enclosure*).
* **JavaScript (Vanilla JS):** Pengolahan data array objek dan fungsi interaksi filter sederhana.
* **Chart.js (CDN):** Pustaka visualisasi grafik berbasis kanvas yang ringan dan responsif.

---

## 🚀 5. Cara Menjalankan Aplikasi

Aplikasi ini bersifat murni *client-side* tanpa perlu setup server yang rumit:

1. Buka folder:
   ```
   C:\Users\user\Documents\.gemini\antigravity\scratch\hci-data-visualization-studio
   ```
2. **Klik dua kali (*double click*)** pada file `index.html`.
3. Aplikasi akan langsung terbuka di browser Anda (Google Chrome / Edge / Firefox).

---

## 👨‍💻 6. Refleksi Pembelajaran Mahasiswa

Webinar ini menegaskan bahwa keahlian teknis menulis kode (*coding*) harus diimbangi dengan pemahaman mendalam tentang kebutuhan pengguna (*user needs*). Sebagai calon sarjana Informatika, kemampuan merancang visualisasi data yang jujur, bersih dari *chartjunk*, dan mudah dipahami adalah kunci utama agar solusi teknologi dapat diadopsi dengan sukses di masyarakat dan industri riset.
