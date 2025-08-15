// Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', function(e){
          const href = this.getAttribute('href');
          if(href.length>1 && document.querySelector(href)){
            e.preventDefault();
            document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
            history.replaceState(null, null, href);
          }
        });
      });

      // Simple form handling (no backend) -> show friendly message
      document.getElementById('contactForm').addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const interest = document.getElementById('interest').value;
        if(!name || !email || !interest){
          alert('Mohon lengkapi data yang diminta.');
          return;
        }
        // Simulate submission
        this.reset();
        alert('Terima kasih ' + name + '! Tim Teman Pensiun akan menghubungi via email: ' + email + ' untuk langkah selanjutnya.');
      });

    const slideContainer = document.querySelector(".slide-container");
      console.log("Looking for slide-container:", slideContainer);
      console.log("Swiper library available:", typeof Swiper !== 'undefined');
            if (slideContainer && typeof Swiper !== 'undefined') {
        console.log("Swiper container found, initializing...");
        try {
          var swiper = new Swiper(".slide-container", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlides: true,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Responsive breakpoints
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25
          }
        }
            });
      
      console.log("Swiper initialized successfully!");
        } catch (error) {
          console.error("Error initializing Swiper:", error);
        }
      } else {
        if (!slideContainer) {
          console.log("Swiper container not found!");
        }
        if (typeof Swiper === 'undefined') {
          console.log("Swiper library not loaded!");
        }
      };

    //Artikel Coy
// ===== ARTICLE POPUP FUNCTIONALITY =====
    const articlesData = [
        {
            title: " AI: Mesin Pendorong Efisiensi Bisnis Modern",
            image: "Assets/Artikel Asset 1.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Di era bisnis yang bergerak cepat, kecepatan dan efisiensi menjadi kunci. Artificial Intelligence (AI) hadir sebagai solusi untuk mengotomatisasi tugas-tugas repetitif seperti input data, penjadwalan, hingga pelaporan. Dengan AI, perusahaan bisa memangkas waktu kerja yang biasanya memakan berjam-jam menjadi hitungan menit.</p>
                <p>MeContohnya, Coca-Cola memanfaatkan AI untuk memantau dan mengoptimalkan kampanye iklan secara real-time. Hasilnya, biaya pemasaran berkurang namun tingkat engagement meningkat signifikan. Teknologi ini mampu menganalisis ribuan kombinasi iklan dan memilih yang paling efektif tanpa campur tangan manusia.</p>
                <p>Efisiensi seperti ini memberi keuntungan besar bagi tim internal. Karyawan dapat fokus pada inovasi dan strategi, bukan tenggelam dalam pekerjaan administratif. AI bukan sekadar tren, tapi kebutuhan bagi bisnis yang ingin tetap kompetitif di tengah perubahan cepat pasar.</p>
            `
        },
        {
            title: "Prediksi Pasar Lebih Akurat dengan AI",
            image: "Assets/Artikel Asset 2.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Kesuksesan bisnis tidak hanya bergantung pada strategi, tetapi juga kemampuan memprediksi tren pasar. AI hadir sebagai alat analisis super cepat yang mampu mengolah data besar (big data) dalam hitungan detik. Dengan ini, perusahaan dapat melihat peluang bahkan sebelum pesaing menyadarinya.</p>
                <p>Sebagai contoh, Tokopedia menggunakan machine learning untuk memprediksi produk yang akan laris dalam beberapa minggu ke depan. Dengan informasi ini, penjual dapat menyesuaikan stok sebelum permintaan memuncak, sehingga penjualan meningkat dan kerugian karena stok mati bisa dihindari.</p>
                <p>Kecepatan dalam memahami pasar adalah keunggulan kompetitif yang tak ternilai. AI memberi bisnis kemampuan untuk bergerak lebih cepat, mengambil keputusan berbasis data, dan menguasai pasar sebelum orang lain sempat bereaksi.</p>
            `
        },
        {
            title: "Meningkatkan Pengalaman Pelanggan dengan Chatbot AI",
            image: "Assets/Artikel Asset 3.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Pelayanan pelanggan yang cepat dan responsif adalah salah satu faktor utama dalam membangun loyalitas. AI, melalui teknologi chatbot, memungkinkan bisnis memberikan jawaban instan selama 24 jam penuh. Tidak hanya cepat, chatbot juga mampu memahami konteks dan memberikan solusi yang relevan.</p>
                <p>Perusahaan besar seperti Bank BCA dan Gojek telah memanfaatkan chatbot AI untuk menangani ribuan pertanyaan pelanggan setiap hari. Hasilnya, waktu tunggu pelanggan berkurang drastis dan kepuasan meningkat. Chatbot juga membantu tim customer service fokus pada kasus yang lebih kompleks.</p>
                <p>Dengan AI, bisnis tidak hanya memangkas biaya operasional, tapi juga meningkatkan kualitas hubungan dengan pelanggan. Ini adalah kombinasi yang menghasilkan pertumbuhan jangka panjang dan reputasi positif di mata konsumen.</p>
            `
        },
        {
            title: "AI untuk Keamanan Data Perusahaan",
            image: "Assets/Artikel Asset 4.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Di tengah maraknya serangan siber, menjaga keamanan data menjadi prioritas. AI kini digunakan untuk mendeteksi ancaman lebih cepat dibandingkan metode manual. Teknologi ini mampu memindai ribuan pola dan menemukan anomali yang berpotensi menjadi ancaman sebelum terjadi kerusakan besar.</p>
                <p>Microsoft memanfaatkan AI untuk memantau jutaan data log setiap detik. Sistem akan langsung memberi peringatan dan memblokir aktivitas mencurigakan secara otomatis. Pendekatan ini terbukti mampu mengurangi risiko kebocoran data dan kerugian finansial.</p>
                <p>Keamanan berbasis AI bukan hanya melindungi data, tapi juga melindungi reputasi bisnis. Di era digital, satu kebocoran informasi saja bisa menghilangkan kepercayaan konsumen yang dibangun bertahun-tahun.</p>
            `
        },
        {
            title: "AI Mengubah Cara Kita Membuat Keputusan Bisnis",
            image: "Assets/Artikel Asset 5.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Keputusan bisnis yang cepat dan tepat adalah kunci memenangkan pasar. AI membantu perusahaan menganalisis data dalam jumlah besar, mengidentifikasi pola, dan memberikan rekomendasi berbasis fakta. Dengan ini, keputusan strategis bisa diambil tanpa mengandalkan intuisi semata.</p>
                <p>Unilever, misalnya, menggunakan AI untuk memantau tren konsumen di berbagai negara. Data ini membantu mereka meluncurkan produk yang tepat di waktu yang tepat, meningkatkan peluang sukses di pasar baru.</p>
                <p>Perusahaan yang memanfaatkan AI untuk pengambilan keputusan tidak hanya lebih gesit, tetapi juga lebih minim risiko. Data adalah bahan bakar, dan AI adalah mesin yang mengubahnya menjadi keuntungan nyata.</p>
            `
        },
        {
            title: "Otomatisasi Proses Produksi dengan AI",
            image: "Assets/Artikel Asset 6.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Proses produksi yang efisien adalah nyawa bagi industri manufaktur. AI memungkinkan pabrik mengotomatiskan hampir seluruh tahapan produksi, mulai dari perakitan hingga kontrol kualitas. Hasilnya, kecepatan meningkat, biaya berkurang, dan kualitas tetap konsisten.</p>
                <p>Tesla menjadi contoh nyata. Mereka menggunakan AI untuk mengendalikan robot produksi dan memantau kualitas secara real-time. Dengan ini, kesalahan produksi bisa ditekan seminimal mungkin, bahkan sebelum barang keluar dari jalur perakitan.</p>
                <p>Otomatisasi dengan AI memberi keuntungan ganda: mempercepat produksi sekaligus memastikan kualitas tetap tinggi. Ini adalah fondasi penting bagi perusahaan yang ingin tumbuh di pasar global.</p>
            `
        }
    ];

    // Article popup functions
    function openArticlePopup(index) {
        const popup = document.getElementById('article-popup');
        const article = articlesData[index];
        if (article) {
            document.getElementById('popup-hero-img').src = article.image;
            document.getElementById('popup-category').textContent = article.category;
            document.getElementById('popup-date').textContent = article.date;
            document.getElementById('popup-title').textContent = article.title;
            document.getElementById('popup-content-text').innerHTML = article.content;
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeArticlePopup() {
        const popup = document.getElementById('article-popup');
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function toggleAllArticles() {
        const hiddenArticles = document.getElementById('hidden-articles');
        const viewAllBtn = document.getElementById('view-all-btn');
        const btnText = viewAllBtn.querySelector('.btn-text');
        const btnIcon = viewAllBtn.querySelector('.btn-icon');
        
        if (hiddenArticles.classList.contains('hidden')) {
            hiddenArticles.classList.remove('hidden');
            btnText.textContent = 'Sembunyikan Artikel';
            btnIcon.textContent = '▲';
            viewAllBtn.classList.add('expanded');
        } else {
            hiddenArticles.classList.add('hidden');
            btnText.textContent = 'Lihat Semua Artikel';
            btnIcon.textContent = '▼';
            viewAllBtn.classList.remove('expanded');
        }
    }

    // Make functions globally available
    window.openArticlePopup = openArticlePopup;
    window.closeArticlePopup = closeArticlePopup;
    window.toggleAllArticles = toggleAllArticles;

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeArticlePopup();
        }
    }); 