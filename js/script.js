// JavaScript untuk mengganti tampilan berdasarkan menu yang dipilih
function showPage(pageId) {
    // Sembunyikan semua bagian
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan bagian yang dipilih
    document.getElementById(pageId).style.display = 'block';
}

// Tampilkan halaman "About" secara default
showPage('about');
