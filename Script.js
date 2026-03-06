async function translateAction() {
    const inputField = document.getElementById('userInput');
    const outputField = document.getElementById('outputText');
    const word = inputField.value.toLowerCase().trim();

    if (word === "") {
        outputField.innerText = "Silakan masukkan kata.";
        return;
    }

    try {
        // Mengambil data dari file JSON lokal
        const response = await fetch('data.json');
        
        if (!response.ok) throw new Error("Gagal memuat database.");
        
        const dictionary = await response.json();

        // Mencari kata dalam dictionary
        if (dictionary[word]) {
            outputField.innerText = dictionary[word];
            outputField.style.color = "#27ae60"; // Warna hijau jika ketemu
        } else {
            outputField.innerText = "Maaf, kata tidak ditemukan.";
            outputField.style.color = "#e74c3c"; // Warna merah jika tidak ada
        }
    } catch (error) {
        console.error(error);
        outputField.innerText = "Terjadi kesalahan sistem.";
    }
}

// Menambahkan fitur tekan 'Enter' untuk menerjemahkan
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        translateAction();
    }
});
