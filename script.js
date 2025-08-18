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
      
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  // Ambil nilai input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value;

  // Nomor WhatsApp tujuan (ganti dengan nomor admin kamu, format 62 untuk Indonesia)
  const whatsappNumber = "6287771953376";

  // Susun pesan
  let whatsappMessage = `Halo Admin Teman Pensiun,%0ASaya ingin mendaftar pelatihan.%0A%0A`;
  whatsappMessage += ` Nama: ${name}%0A`;
  whatsappMessage += ` Email: ${email}%0A`;
  whatsappMessage += ` Telepon: ${phone ? phone : "-"}%0A`;
  whatsappMessage += ` Usia: ${age ? age : "-"}%0A`;
  whatsappMessage += ` Alasan Ikut: ${interest}%0A`;
  whatsappMessage += ` Pesan Tambahan: ${message ? message : "-"}%0A`;

  // Redirect ke WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
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
            title: " Strategi Keuangan Pensiun yang Berkelanjutan",
            image: "aset/artikel-1.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Masa pensiun sering kali menjadi masa di mana pendapatan aktif berhenti, sehingga perencanaan keuangan menjadi lebih penting dari sebelumnya. Langkah pertama adalah memetakan semua sumber pendapatan yang akan Anda miliki, seperti dana pensiun dari perusahaan, tabungan pribadi, hasil investasi, atau penghasilan pasif dari properti dan usaha. Setelah itu, buatlah anggaran bulanan yang realistis dengan memprioritaskan kebutuhan pokok, biaya kesehatan, dan dana darurat. Jangan lupa untuk memperhitungkan inflasi yang dapat menggerus nilai uang di masa depan, serta mempersiapkan dana untuk pengeluaran tak terduga seperti perawatan medis.</p>
                <p>Selain itu, diversifikasi sumber pendapatan sangat disarankan agar Anda tidak bergantung pada satu sumber saja. Misalnya, kombinasikan dana pensiun dengan investasi pada instrumen berisiko rendah seperti obligasi pemerintah, deposito, atau reksa dana pasar uang. Lakukan evaluasi keuangan secara rutin setiap 6–12 bulan untuk memastikan rencana Anda tetap relevan. Dengan strategi yang terstruktur, masa pensiun bisa dijalani dengan tenang tanpa khawatir kehabisan dana.</p>
            `
        },
        {
            title: "Menjadi Pengusaha di Masa Pensiun",
            image: "aset/artikel-3.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Pensiun tidak harus berarti berhenti bekerja total. Justru, ini bisa menjadi kesempatan untuk memulai usaha yang sesuai passion tanpa tekanan seperti saat bekerja penuh waktu. Banyak pensiunan sukses menjalankan bisnis kuliner rumahan, usaha kerajinan, jasa konsultasi, hingga penyewaan properti. Kelebihannya, Anda bisa mengatur jam kerja sesuai kondisi fisik dan tetap merasa produktif. Modal usaha tidak selalu harus besar; yang penting adalah memanfaatkan keterampilan dan jaringan yang sudah dimiliki.</p>
                <p>Untuk memulai, lakukan riset pasar sederhana agar tahu apa yang dibutuhkan orang di sekitar Anda. Manfaatkan media sosial untuk promosi, karena biayanya minim tetapi jangkauannya luas. Jika memungkinkan, ikut program pelatihan kewirausahaan agar mendapat bimbingan dan jaringan baru. Usaha yang dikelola dengan baik tidak hanya memberi penghasilan tambahan, tetapi juga menjaga semangat hidup di masa pensiun.</p>
            `
        },
        {
            title: "Pentingnya Investasi untuk Pensiun Nyaman",
            image: "aset/artikel-4.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Investasi tetap relevan meskipun Anda sudah memasuki masa pensiun. Bedanya, fokus investasi sebaiknya beralih dari pertumbuhan agresif ke perlindungan aset. Instrumen seperti obligasi pemerintah, reksa dana pendapatan tetap, atau properti sewa dapat memberikan penghasilan pasif yang stabil. Jangan lupa untuk menyesuaikan portofolio dengan profil risiko Anda; di masa pensiun, keamanan modal menjadi prioritas utama dibandingkan mengejar keuntungan besar.</p>
                <p>Selain itu, selalu waspadai tawaran investasi yang menjanjikan keuntungan besar dalam waktu singkat. Banyak pensiunan menjadi target penipuan karena tergiur iming-iming return tinggi. Sebelum berinvestasi, lakukan pengecekan legalitas dan konsultasi dengan perencana keuangan atau pihak berpengalaman. Investasi yang tepat akan membantu menjaga kestabilan keuangan Anda hingga akhir hayat.</p>
            `
        },
        {
            title: "Menjaga Kesehatan Fisik dan Mental di Masa Pensiun",
            image: "aset/artikel-2.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Kesehatan adalah modal utama untuk menikmati masa pensiun. Jaga tubuh tetap bugar dengan olahraga ringan seperti jalan kaki, berenang, atau yoga yang dapat meningkatkan kebugaran tanpa membebani sendi. Perhatikan pola makan sehat dengan memperbanyak sayuran, buah, protein tanpa lemak, dan mengurangi gula serta garam. Pemeriksaan kesehatan rutin juga penting untuk mendeteksi penyakit sejak dini.</p>
                <p>Kesehatan mental pun tidak boleh diabaikan. Setelah pensiun, beberapa orang merasa kehilangan tujuan atau menjadi kesepian. Aktiflah di komunitas, ikuti kegiatan sosial, atau kembangkan hobi baru. Aktivitas sosial dapat mengurangi risiko depresi dan menjaga otak tetap aktif. Dengan tubuh yang sehat dan pikiran yang positif, masa pensiun akan terasa lebih bermakna.</p>
            `
        },
        {
            title: "Mempersiapkan Warisan untuk Keluarga",
            image: "aset/artikel-7.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Warisan adalah salah satu cara untuk memastikan kesejahteraan keluarga setelah Anda tiada. Persiapkan dokumen legal seperti surat wasiat atau akta hibah untuk memastikan pembagian aset berjalan lancar. Tentukan penerima warisan secara jelas dan pastikan mereka memahami prosesnya. Langkah ini penting untuk mencegah konflik keluarga di kemudian hari.</p>
                <p>Selain aset fisik, pertimbangkan juga untuk meninggalkan asuransi jiwa atau dana investasi yang dapat digunakan keluarga untuk melanjutkan kehidupan mereka. Warisan yang terencana bukan hanya soal harta, tetapi juga meninggalkan rasa aman dan kedamaian bagi orang-orang yang Anda cintai.</p>
            `
        },
        {
            title: "Menghadapi Tantangan Psikologis Pensiun",
            image: "aset/artikel-6.jpg",
            category: "Artikel",
            date: "28 Juli 2025",
            content: `
                <p>Pensiun membawa perubahan besar dalam kehidupan. Perubahan rutinitas dan hilangnya peran profesional bisa memicu stres atau depresi. Untuk mengatasinya, penting memiliki rencana aktivitas harian yang memberi makna, seperti berkebun, belajar hal baru, atau terlibat di kegiatan sosial. Menjaga hubungan dengan teman dan keluarga juga sangat membantu.</p>
                <p>Jika merasa kesulitan beradaptasi, jangan ragu untuk mencari bantuan profesional seperti psikolog atau konselor. Ingat, masa pensiun adalah kesempatan untuk membangun babak baru yang penuh kebebasan dan pilihan. Dengan sikap positif, Anda bisa menghadapi tantangan psikologis ini dan menjadikannya fase hidup yang memuaskan.</p>
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
            document.body.classList.add('popup-open');
        }
    }

    function closeArticlePopup() {
        const popup = document.getElementById('article-popup');
        popup.classList.remove('active');
        document.body.classList.remove('popup-open');
        
        // Reset any inline styles that might have been applied
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
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