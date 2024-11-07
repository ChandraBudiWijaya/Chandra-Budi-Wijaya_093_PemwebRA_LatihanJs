// Mendefinisikan persentase bobot untuk setiap komponen penilaian
const BOBOT_TUGAS = 0.3; // Bobot tugas adalah 30%
const BOBOT_UTS = 0.3;   // Bobot UTS adalah 30%
const BOBOT_UAS = 0.4;   // Bobot UAS adalah 40%
const BATAS_LULUS = 60;  // Batas kelulusan adalah nilai akhir minimal 60

// Fungsi untuk menghitung rata-rata tertimbang nilai akhir
function hitungNilaiAkhir(tugas, uts, uas) {
    // Memastikan bahwa nilai input berada antara 0 dan 100
    if (tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Nilai harus antara 0 dan 100."); // Menampilkan peringatan jika ada input tidak valid
        return null; // Menghentikan perhitungan jika ada input tidak valid
    }
    
    // Menghitung nilai akhir dengan bobot yang sudah ditentukan
    let nilaiAkhir = (tugas * BOBOT_TUGAS) + (uts * BOBOT_UTS) + (uas * BOBOT_UAS);
    return nilaiAkhir; // Mengembalikan nilai akhir untuk ditampilkan
}

// Fungsi untuk menentukan nilai huruf berdasarkan nilai akhir
function tentukanNilaiHuruf(nilaiAkhir) {
    // Logika kondisional untuk menentukan nilai mutu berdasarkan rentang nilai
    if (nilaiAkhir >= 90) return 'A';
    else if (nilaiAkhir >= 80) return 'B';
    else if (nilaiAkhir >= 70) return 'C';
    else if (nilaiAkhir >= 60) return 'D';
    else return 'E'; // Nilai di bawah 60 diberi mutu 'E'
}

// Fungsi utama yang mengelola input dan menampilkan hasil akhir
function tampilkanHasil() {
    // Mengambil nilai input dari pengguna melalui elemen di halaman
    let tugas = parseFloat(document.getElementById("inputTugas").value);
    let uts = parseFloat(document.getElementById("inputUTS").value);
    let uas = parseFloat(document.getElementById("inputUAS").value);

    // Memanggil fungsi untuk menghitung nilai akhir
    let nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    if (nilaiAkhir === null) return; // Menghentikan proses jika ada input yang tidak valid

    // Menentukan nilai huruf berdasarkan nilai akhir
    let nilaiHuruf = tentukanNilaiHuruf(nilaiAkhir);

    // Menentukan status lulus atau gagal
    let status = nilaiAkhir >= BATAS_LULUS ? "Lulus" : "Gagal";

    // Menampilkan hasil akhir di halaman
    document.getElementById("hasilNilai").innerText = `Nilai Akhir: ${nilaiAkhir}`;
    document.getElementById("hasilHuruf").innerText = `Nilai Huruf: ${nilaiHuruf}`;
    document.getElementById("hasilStatus").innerText = `Status: ${status}`;
    
    // Mengubah warna teks status sesuai dengan hasil (hijau untuk lulus, merah untuk gagal)
    document.getElementById("hasilStatus").style.color = (status === "Lulus") ? "green" : "red";
}
