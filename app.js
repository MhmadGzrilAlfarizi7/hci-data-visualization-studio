const dataRiset = [
    {
        id: 1,
        judul: "Implementasi AI untuk Deteksi Kualitas Udara Perkotaan",
        bidang: "Teknologi Informasi",
        tahun: 2024,
        sitasi: 38,
        status: "Normal",
        peneliti: "Dr. A. Febriandirza & Tim",
        abstrak: "Mengembangkan algoritma machine learning untuk memproses data sensor IoT polusi udara secara real-time."
    },
    {
        id: 2,
        judul: "Optimasi Jaringan Smart Grid dengan Komputasi Paralel",
        bidang: "Energi Terbarukan",
        tahun: 2023,
        sitasi: 52,
        status: "Normal",
        peneliti: "Ir. Hendra Kusuma",
        abstrak: "Menganalisis distribusi beban listrik tenaga surya menggunakan simulasi domain decomposition."
    },
    {
        id: 3,
        judul: "Analisis Metagenomik DNA Virus Menggunakan Superkomputer",
        bidang: "Kesehatan Hayati",
        tahun: 2024,
        sitasi: 85,
        status: "Normal",
        peneliti: "Dr. Maria Natalia",
        abstrak: "Mempercepat pemetaan sekuensing genomik patogen untuk mitigasi wabah penyakit menular."
    },
    {
        id: 4,
        judul: "Evaluasi Heuristik Antarmuka Aplikasi Layanan Publik Daerah",
        bidang: "Teknologi Informasi",
        tahun: 2022,
        sitasi: 19,
        status: "Normal",
        peneliti: "Tim Laboratorium HCI UNIB",
        abstrak: "Menerapkan 10 Nielsen Heuristics untuk meningkatkan usability portal pelayanan warga."
    },
    {
        id: 5,
        judul: "Anomali Efisiensi Sel Surya pada Suhu Ekstrem Pesisir",
        bidang: "Energi Terbarukan",
        tahun: 2023,
        sitasi: 12,
        status: "Anomali", // Anomali: sesuai materi, warna merah hanya untuk status khusus
        peneliti: "Fajar Pratama, M.T.",
        abstrak: "Ditemukan penurunan drastis daya panel surya akibat korosi garam laut yang memerlukan audit material."
    },
    {
        id: 6,
        judul: "Sistem Pemantauan Stunting Berbasis WebGIS & Data Demografi",
        bidang: "Kesehatan Hayati",
        tahun: 2024,
        sitasi: 44,
        status: "Normal",
        peneliti: "Rina Oktavia, S.Kom.",
        abstrak: "Menghubungkan data gizi balita dengan peta sebaran fasilitas kesehatan di tingkat kecamatan."
    }
];

// Variabel global untuk menyimpan objek Chart.js
let barChartInstance = null;
let lineChartInstance = null;

// Status tema saat ini
let isBadUI = false;

// -------------------------------------------------------------------------
// 2. FUNGSI OVERVIEW FIRST: MENGHITUNG STATISTIK KPI
// -------------------------------------------------------------------------
function updateOverviewKPI(data) {
    const total = data.length;
    const totalSitasi = data.reduce((acc, curr) => acc + curr.sitasi, 0);
    const normal = data.filter(d => d.status === "Normal").length;
    const anomali = data.filter(d => d.status === "Anomali").length;

    document.getElementById("kpiTotal").innerText = total;
    document.getElementById("kpiSitasi").innerText = totalSitasi;
    document.getElementById("kpiNormal").innerText = normal;
    document.getElementById("kpiAnomali").innerText = anomali;
}

// -------------------------------------------------------------------------
// 3. FUNGSI MENAMPILKAN TABEL DAFTAR DATA
// -------------------------------------------------------------------------
function renderTabel(data) {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    data.forEach(item => {
        const tr = document.createElement("tr");

        // Warna badge status (merah hanya untuk anomali sesuai kaidah HCI)
        const badgeClass = item.status === "Normal" ? "badge badge-good" : "badge badge-warn";

        tr.innerHTML = `
            <td><strong>${item.judul}</strong></td>
            <td>${item.bidang}</td>
            <td>${item.tahun}</td>
            <td><span class="${badgeClass}">${item.status}</span></td>
            <td>
                <button class="btn-action" onclick="lihatDetail(${item.id})">Lihat Detail</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// -------------------------------------------------------------------------
// 4. FUNGSI DETAILS-ON-DEMAND: MENAMPILKAN DETAIL SAAT DIKLIK
// -------------------------------------------------------------------------
function lihatDetail(id) {
    const item = dataRiset.find(d => d.id === id);
    if (!item) return;

    document.getElementById("detJudul").innerText = item.judul;

    const badgeClass = item.status === "Normal" ? "badge badge-good" : "badge badge-warn";

    document.getElementById("detContent").innerHTML = `
        <p><strong>Peneliti Utama:</strong> ${item.peneliti}</p>
        <p><strong>Bidang:</strong> ${item.bidang} | <strong>Tahun:</strong> ${item.tahun}</p>
        <p><strong>Total Sitasi:</strong> ${item.sitasi} sitasi ilmiah</p>
        <p><strong>Status Proyek:</strong> <span class="${badgeClass}">${item.status}</span></p>
        <p style="margin-top: 10px; background: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #e2e8f0;">
            <strong>Ringkasan Abstrak:</strong><br>${item.abstrak}
        </p>
    `;
}

// -------------------------------------------------------------------------
// 5. INISIALISASI GRAFIK CHART.JS (Visualisasi Data Tufte Standard)
// -------------------------------------------------------------------------
function initCharts() {
    // A. Bar Chart: Perbandingan Jumlah Proyek per Bidang
    const ctxBar = document.getElementById("barChart").getContext("2d");
    barChartInstance = new Chart(ctxBar, {
        type: "bar",
        data: {
            labels: ["Teknologi Informasi", "Energi Terbarukan", "Kesehatan Hayati"],
            datasets: [{
                label: "Jumlah Proyek Riset",
                data: [2, 2, 2],
                backgroundColor: ["#3b82f6", "#10b981", "#8b5cf6"],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false } // Menghilangkan elemen tidak penting (Data-Ink Ratio Tufte)
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });

    // B. Line Chart: Tren Publikasi 5 Tahun (2020 - 2024)
    const ctxLine = document.getElementById("lineChart").getContext("2d");
    lineChartInstance = new Chart(ctxLine, {
        type: "line",
        data: {
            labels: ["2020", "2021", "2022", "2023", "2024"],
            datasets: [{
                label: "Tren Publikasi",
                data: [12, 18, 25, 34, 48],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37, 99, 235, 0.1)",
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// -------------------------------------------------------------------------
// 6. FUNGSI ZOOM & FILTER: MENYARING DATA
// -------------------------------------------------------------------------
function filterData(bidang) {
    // 1. Ubah tombol filter aktif
    const buttons = document.querySelectorAll(".btn-pill");
    buttons.forEach(btn => {
        if (btn.innerText.includes(bidang) || (bidang === "Semua" && btn.innerText.includes("Semua"))) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // 2. Saring data berdasarkan bidang
    const dataHasilFilter = bidang === "Semua" 
        ? dataRiset 
        : dataRiset.filter(d => d.bidang === bidang);

    // 3. Perbarui tampilan tabel dan KPI
    renderTabel(dataHasilFilter);
    updateOverviewKPI(dataHasilFilter);

    // 4. Perbarui data Bar Chart
    if (barChartInstance) {
        if (bidang === "Semua") {
            barChartInstance.data.datasets[0].data = [
                dataRiset.filter(d => d.bidang === "Teknologi Informasi").length,
                dataRiset.filter(d => d.bidang === "Energi Terbarukan").length,
                dataRiset.filter(d => d.bidang === "Kesehatan Hayati").length
            ];
        } else {
            barChartInstance.data.datasets[0].data = [
                bidang === "Teknologi Informasi" ? dataHasilFilter.length : 0,
                bidang === "Energi Terbarukan" ? dataHasilFilter.length : 0,
                bidang === "Kesehatan Hayati" ? dataHasilFilter.length : 0
            ];
        }
        barChartInstance.update();
    }
}

// -------------------------------------------------------------------------
// 7. FITUR SAKELAR: PERBANDINGAN DESAIN BAIK VS DESAIN BURUK (HCI SHOWCASE)
// -------------------------------------------------------------------------
function toggleModeUI() {
    isBadUI = !isBadUI;
    const body = document.body;
    const btn = document.getElementById("btnToggleUI");
    const banner = document.getElementById("bannerPrinsip");

    if (isBadUI) {
        body.className = "theme-bad";
        btn.innerText = "✨ Kembalikan ke: Desain Baik (HCI Standard)";
        banner.innerHTML = "<strong>⚠️ Mode Desain Buruk Aktif:</strong> Warna kontras bertabrakan, font tidak terbaca, dan dekorasi berlebihan (Beban Kognitif / Extraneous Cognitive Load Tinggi).";
    } else {
        body.className = "theme-good";
        btn.innerText = "🔄 Coba Mode: Desain Buruk (Bad UI)";
        banner.innerHTML = "<strong>💡 Prinsip Desain Terpasang:</strong> Mantra Shneiderman (<em>Overview first, filter, details-on-demand</em>) | Data-Ink Ratio Edward Tufte | Psikologi Kognitif (Memori kerja otak manusia terbatas ~7 item).";
    }
}

// -------------------------------------------------------------------------
// 8. EKSEKUSI SAAT HALAMAN PERTAMA KALI DIBUKA
// -------------------------------------------------------------------------
window.onload = function() {
    updateOverviewKPI(dataRiset);
    renderTabel(dataRiset);
    initCharts();
};
