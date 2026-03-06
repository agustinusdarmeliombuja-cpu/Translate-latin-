// Fungsi utama untuk mengambil data dan mencocokkan kata
async function autoTranslate() {
    const inputField = document.getElementById('userInput');
    const outputField = document.getElementById('outputText');
    const word = inputField.value.toLowerCase().trim();

    // Jika input kosong, bersihkan tampilan hasil
    if (word === "") {
        outputField.innerText = "Hasil terjemahan akan muncul di sini.";
        outputField.style.color = "#34495e";
        return;
    }

    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("Database gagal dimuat");
        
        const dictionary = await response.json();

        // Logika pencarian otomatis
        if (dictionary[word]) {
            outputField.innerText = dictionary[word];
            outputField.style.color = "#27ae60"; // Hijau saat ditemukan
        } else {
            outputField.innerText = "..."; // Memberikan kesan sedang mencari/belum lengkap
            outputField.style.color = "#95a5a6";
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Menambahkan Listener 'input' agar aplikasi merespon tiap ketikan
document.getElementById('userInput').addEventListener('input', autoTranslate);
