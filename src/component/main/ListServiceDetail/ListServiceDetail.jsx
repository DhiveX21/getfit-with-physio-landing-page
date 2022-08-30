import React, { useState, useRef } from "react";
import CardFullImageTitle from "../../../_micro/CardFullImageTitle/CardFullImageTitle";
import ProductHighlight from "../../../_micro/ProductHighlight/ProductHighlight";
import parse from "html-react-parser";

import "./ListServiceDetail.css";

const dataService = [
  {
    serviceId: "1",
    serviceName: "Physiotherapy for infertility",
    desc: `<p style="margin-left:66px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Infertilitas adalah ketidakmampuan sepasang suami istri untuk memiliki keturunan dimana wanita belum mengalami kehamilan setelah bersenggama tanpa proteksi selama 12 bulan atau lebih. Kondisi ini dapat dikatakan bukan hal yang langka, karena nyatanya terdapat sekitar 10-18% pasangan suami istri di dunia yang mengalami infertilitas tersebut.</span></span></span></p>

    <p style="margin-left:66px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Infertilitas diklasifikasikan sebagai infertilitas primer dan sekunder. Infertilitas primer adalah kondisi dimana pasangan suami istri belum mampu dan belum pernah memiliki anak. Infertilitas sekunder adalah kondisi dimana pasangan suami istri pernah memiliki anak sebelumnya, namun saat ini belum mampu anak lagi, atau pernah terjadi pernah hamil namun mengalami keguguran.</span></span></span></p>
    
    <p>&nbsp;</p>
    
    <p>&nbsp;
    <p style="margin-left:66px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENYEBAB</strong></span></span></span></p>
    </p>
    
    <ol>
      <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pada Wanita</span></span></span></li>
    </ol>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; PCOS</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Penyumbatan tuba falopi</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Kelainan struktur rahim</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Endometriosis</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Gangguan ovulasi, yang mempengaruhi pelepasan sel telur dari ovarium. Ini termasuk gangguan hormonal seperti sindrom ovarium polikistik. Hiperprolaktinemia, suatu kondisi di mana Anda memiliki terlalu banyak prolaktin &ndash; hormon yang merangsang produksi ASI &ndash; juga dapat mengganggu ovulasi. Terlalu banyak hormon tiroid (hipertiroidisme) atau terlalu sedikit (hipotiroidisme) dapat mempengaruhi siklus menstruasi atau menyebabkan kemandulan. Penyebab lain yang mendasari mungkin termasuk terlalu banyak olahraga, gangguan makan atau tumor.</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Insufisiensi ovarium primer (menopause dini), ketika ovarium berhenti bekerja dan menstruasi berakhir sebelum usia 40 tahun. Meskipun penyebabnya sering tidak diketahui, faktor-faktor tertentu terkait dengan menopause dini, termasuk penyakit sistem kekebalan, kondisi genetik tertentu seperti sindrom Turner atau pembawa penyakit. Sindrom Fragile X, dan pengobatan radiasi atau kemoterapi.</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Perlengketan panggul, pita jaringan parut yang mengikat organ yang dapat terbentuk setelah infeksi panggul, radang usus buntu, endometriosis atau operasi perut atau panggul.</span></span></span></p>
    
    <p>&nbsp;
    <ol start="2">
      <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pada Pria</span></span></span></li>
    </ol>
    </p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Produksi atau fungsi sperma yang tidak normal karena testis yang tidak turun, cacat genetik, masalah kesehatan seperti diabetes, atau infeksi seperti klamidia, gonore, gondok, atau HIV. Pembesaran pembuluh darah di testis (varikokel) juga bisa mempengaruhi kualitas sperma.</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Masalah pengiriman sperma karena masalah seksual, seperti ejakulasi dini; penyakit genetik tertentu, seperti cystic fibrosis; masalah struktural, seperti penyumbatan di testis; atau kerusakan atau cedera pada organ reproduksi.</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Paparan berlebihan terhadap faktor lingkungan tertentu, seperti pestisida dan bahan kimia lainnya, dan radiasi. Merokok, alkohol, ganja, steroid anabolik, dan minum obat untuk mengobati infeksi bakteri, tekanan darah tinggi, dan depresi juga dapat memengaruhi kesuburan. Paparan panas yang sering, seperti di sauna atau bak air panas, dapat meningkatkan suhu tubuh dan dapat mempengaruhi produksi sperma.</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&gt; Kerusakan yang berhubungan dengan kanker dan pengobatannya, termasuk radiasi atau kemoterapi. Pengobatan untuk kanker dapat mengganggu produksi sperma, terkadang sangat parah.</span></span></span></p>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
    
    <ol>
      <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Manual Terapi</span></span></span></li>
    </ol>
    
    <p style="margin-left:96px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Manuak terapi seringkali dapat digunakan sebagai pengobatan untuk orang-orang dengan infertilitas. Manual terapi dapat membantu meminimalkan keterbatasan, pembatasan, dan imobilitas dalam tubuh (melalui banyak metode, termasuk manipulasi visceral). Jika tidak ditangani, hal ini sering dapat menyebabkan ovarium terpelintir. Terputarnya indung telur ini dapat membuat sperma dan sel telur lebih sulit untuk jatuh di tempat yang mereka butuhkan sehingga mereka dapat ditanamkan di dalam rahim.</span></span></span></p>
    
    <p>&nbsp;
    <p>&nbsp;</p>
    </p>
    `,
    image: "/images/homevisit.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Physiotherapy%20for%20infertility,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
  {
    serviceId: "2",
    serviceName: "Physiotherapy for Pain Management",
    desc: `<ol>
    <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>Nyeri Pelvis Kronis</strong></span></span></span></li>
  </ol>
  
  <p style="margin-left:94px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Nyeri Pelvis Kronik (NPK) adalah suatu kondisi di mana episode nyeri persisten atau berulang dialami di perut, daerah panggul, dasar panggul atau organ panggul. Telah hadir selama lebih dari 6 bulan, sering dikaitkan dengan ketidaknyamanan pada kandung kemih atau usus, pengosongan, nyeri seksual dan biasanya tanpa adanya etiologi organik.</span></span></span></p>
  
  <p style="margin-left:94px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">NPK dapat menjadi kondisi yang melemahkan yang mempengaruhi 15-20% wanita usia 18-50 di seluruh dunia. NPK bersifat multifaktorial oleh karena itu penyebab yang mendasari dapat disebabkan oleh beberapa mekanisme:</span></span></span></p>
  
  <ul>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Mekanisme nyeri akut yang sedang berlangsung (peradangan/infeksi)</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Meningkatkan regulasi sistem saraf perifer atau pusat</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Faktor psikososial (emosi, perilaku, respons kognitif) atau faktor predisposisi (genetik, kesehatan umum, pengalaman masa lalu)</span></span></span></li>
  </ul>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:94px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">CPP mencakup beragam gejala dan tanda oleh karena itu penilaian dan evaluasi sangat penting untuk membantu diagnosis dan pengobatan.</span></span></span></p>
  
  <p style="margin-left:94px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kondisi Nyeri Panggul Kronis yang umum adalah endometriosis, sindrom nyeri kandung kemih, sistitis interstisial, nyeri otot dasar panggul, coccydynia, vulvodynia, sindrom nyeri anal, neuralgia pudendal.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong><img src="https://lh6.googleusercontent.com/hlgPcDfp5xhZssGjtiaxHrl2vkIvYWaCQFxeJkqyl_wN7ocU-lT_kNPnU-GM1HeEYRY-Cdnq5jWpec4JEIdNCAG3B1CfTexvM4lERL61WkohrWYcreaY-oREeheZ0tdCrIpk7N_MsjI" style="height:140px; width:624px" /></strong></span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Karena sifat kompleks dari pendekatan pengobatan NPK sangat bervariasi. Pendekatan kami adalah melakukan penilaian yang sangat menyeluruh dengan mempertimbangkan semua peristiwa yang mungkin menyebabkan seorang wanita mengalami NPK dan semua faktor biomekanik dan psikososial yang telah mencegah rasa sakit untuk sembuh.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Setelah kami memiliki gagasan yang baik tentang sifat rasa sakit, pemicu dan penghasil rasa sakit, kami kemudian akan membuat rencana perawatan terperinci untuk membantu wanita tersebut melalui fisioterapi dan perubahan gaya hidup.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Teknik pengobatan fisioterapi yang sering digunakan antara lain:</span></span></span></p>
  
  <ul>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Mengoptimalkan pola pernapasan</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pelatihan dasar panggul dan desensitisasi</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pelepasan dasar panggul secara bertahap dan terapi manual.</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Terapi dilator terpandu</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Dinamika buang air besar</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Menurunkan regulasi driver sistem saraf pusat</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian dan pengobatan muskuloskeletal, khususnya melihat dada, perut dan panggul</span></span></span></li>
  </ul>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Dalam banyak kasus, kami akan bekerja sama dengan praktisi kesehatan lain dan merujuk untuk pemindaian, pengobatan, atau dalam beberapa kasus untuk intervensi lebih lanjut seperti suntikan Botox atau pembedahan jika dianggap perlu.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perawatan konservatif dengan spesialis kesehatan wanita Fisioterapis dengan pengalaman dalam merawat NPK sangat efektif dan harus menjadi manajemen lini pertama sebelum intervensi diujicobakan.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <ol start="2">
    <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>Lower Back and Pelvic Girdle Pain</strong></span></span></span></li>
  </ol>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Nyeri punggung bawah adalah penyebab utama kecacatan dengan 25% orang Australia mengalami nyeri punggung bawah pada satu waktu. Nyeri korset panggul adalah bentuk spesifik dari nyeri punggung bawah yang dapat terjadi secara terpisah atau bersamaan dengan nyeri punggung bawah dan terutama sering terjadi pada masa kehamilan atau setelah melahirkan.</span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Nyeri korset panggul termasuk nyeri tulang kemaluan (Nyeri Simfisis Pubis) dan nyeri sendi sakroiliaka. Tahukah Anda bahwa nyeri korset panggul lebih sering terjadi pada wanita dan pada akhir trimester ketiga 60% wanita hamil akan mengalami korset panggul atau nyeri punggung? Kabar baiknya adalah perawatan dengan ahli kesehatan khusus dapat memberikan bantuan yang signifikan.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:66px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>ANATOMI PELVIS DAN LUMBAR</strong></span></span></span></p>
  
  <p style="margin-left:66px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pelvis adalah penghubung tulang antara tulang belakang lumbal dan tungkai bawah yang berfungsi untuk mengirimkan kekuatan antara tulang belakang dan tungkai bawah, memberikan perlekatan untuk 35 otot dan perlindungan organ panggul. Sendi panggul disebut sebagai simfisis pubis di depan, dan dua sendi sakroiliaka di belakang.</span></span></span></p>
  
  <p style="margin-left:66px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Punggung bawah (tulang belakang lumbar) terdiri dari lima tulang vertebra, cakram intervertebralis di antara masing-masing, dan otot serta ligamen yang melekat untuk memberikan stabilitas pada tulang belakang. Jauh di dalam kanal tulang belakang duduk sumsum tulang belakang dan saraf yang bertanggung jawab untuk gerakan dan sensasi di seluruh tubuh. Salah satu dari struktur ini dapat menyebabkan rasa sakit, dengan disfungsi umum termasuk iritasi pada saraf tulang belakang, hipomobilitas atau hipermobilitas sendi, cedera diskus, ligamen, atau ketegangan otot.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong><img src="https://lh6.googleusercontent.com/hlgPcDfp5xhZssGjtiaxHrl2vkIvYWaCQFxeJkqyl_wN7ocU-lT_kNPnU-GM1HeEYRY-Cdnq5jWpec4JEIdNCAG3B1CfTexvM4lERL61WkohrWYcreaY-oREeheZ0tdCrIpk7N_MsjI" style="height:140px; width:624px" /></strong></span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pendekatan kami selalu mengidentifikasi apa yang menyebabkan masalah daripada hanya mengobati gejalanya. Teknik pengobatan yang digunakan kemudian dapat mencakup:</span></span></span></p>
  
  <ul>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian biomekanik seluruh tubuh untuk menilai setiap penggerak potensial dari anggota badan atau dada (terapi hubung/model ISM)</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Teknik Energi Otot (MET) dari tulang belakang lumbar, panggul, dada</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pijat jaringan lunak untuk mengendurkan otot yang tegang atau terlalu aktif</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Mobilisasi sendi untuk memperbaiki sendi hipomobil (kaku).</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Tusuk jarum kering</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Latihan rehabilitasi menggunakan RTUS untuk biofeedback</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Rehabilitasi latihan berdasarkan resep latihan fungsional dan pilates klinis</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Teknik saraf meluncur untuk mengatasi iritasi saraf</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Saran dan koreksi postural</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perekaman</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Saran gaya hidup termasuk modifikasi aktivitas apa pun</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Resep penopang dan alat bantu pelepasan fasia jika diperlukan</span></span></span></li>
  </ul>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENYEBAB</strong></span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penyebab LBP dan PGP bervariasi, faktor yang berkontribusi umum meliputi:</span></span></span></p>
  
  <ul>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Postur tidak optimal atau posisi berkelanjutan</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Gaya hidup menetap</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Teknik mengangkat yang salah</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">BMI tinggi atau obesitas</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Menekankan</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kehamilan</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kelahiran</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Tumor tulang belakang</span></span></span></li>
  </ul>
  
  <p>&nbsp;</p>
  
  <ol start="3">
    <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Nyeri Leher dan Sakit Kepala</span></span></span></li>
  </ol>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Nyeri leher atau gerakan terbatas terutama dari otot, ligamen dan sendi di sekitar tulang belakang leher, tetapi dalam banyak kasus dapat didorong dari lokasi lain seperti dada, tulang rusuk dan panggul. Sakit kepala tegang atau tekanan di dasar tengkorak biasanya dialami dengan adanya disfungsi tulang belakang leher dan bisa sangat melemahkan.</span></span></span></p>
  
  <p><br />
  &nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong><img src="https://lh6.googleusercontent.com/hlgPcDfp5xhZssGjtiaxHrl2vkIvYWaCQFxeJkqyl_wN7ocU-lT_kNPnU-GM1HeEYRY-Cdnq5jWpec4JEIdNCAG3B1CfTexvM4lERL61WkohrWYcreaY-oREeheZ0tdCrIpk7N_MsjI" style="height:133px; width:595px" /></strong></span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Di GET Physio kami akan mengambil riwayat terperinci dari Anda, menyelesaikan penilaian fisik menyeluruh dan memberi Anda rencana perawatan berdasarkan kebutuhan pribadi Anda.</span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Rencana perawatan fisioterapi kami untuk Anda dapat mencakup:</span></span></span></p>
  
  <ul>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Mobilisasi sendi atau teknik traksi lembut untuk meningkatkan sendi leher hipomobil (kaku)</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Teknik Energi Otot (MET)</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penguatan otot leher dalam untuk menstabilkan dan mengontrol sendi leher hypermobile</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pijat jaringan lunak untuk mengendurkan otot leher dan suboksipial yang tegang atau terlalu aktif</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian toraks, tulang rusuk, dan panggul untuk mengidentifikasi pemicu potensial lainnya</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penguatan otot postural termasuk tulang belikat dan otot leher</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Saran dan koreksi postural termasuk latihan dan/atau teknik perekaman</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Tusuk jarum kering</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Teknik saraf meluncur untuk mengatasi iritasi saraf</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pengaturan kerja ergonomis yang membantu dan saran gaya hidup</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Teknik relaksasi</span></span></span></li>
  </ul>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perawatan fisioterapi telah terbukti efektif dalam mengelola dan mencegah nyeri leher dan mengoptimalkan kesehatan fisik Anda secara keseluruhan.</span></span></span></p>
  
  <p>&nbsp;</p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENYEBAB</strong></span></span></span></p>
  
  <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penyebab umum sakit leher dan sakit kepala:</span></span></span></p>
  
  <ul>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Memegang leher dan kepala dalam postur yang buruk untuk waktu yang lama (yaitu posisi menyusui atau menyusui yang berkepanjangan, komputer atau SMS di ponsel)</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Ergonomi tempat kerja yang buruk</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Gerakan kepala berulang</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Stres atau kecemasan yang berlebihan</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Tidur dalam posisi canggung</span></span></span></li>
    <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Trauma (seperti cedera whiplash)</span></span></span></li>
  </ul>
  
  <p>&nbsp;</p>
  `,
    image: "/images/servicelist_4.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Physiotherapy%20for%20Pain%20Management%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
  {
    serviceId: "3",
    serviceName: "Physiotherapy for Urinary Incontinence",
    desc: `<p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Inkontinensia urin adalah kondisi hilangnya kontrol kandung kemih. Ada banyak penyebab dan jenis inkontinensia urin yang berbeda, dan Fisioterapi yang ditargetkan oleh Fisioterapis Kesehatan Wanita sangat efektif pada 60 &ndash; 90% kasus.</span></span></span></p>

    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Dua jenis inkontinensia urin yang paling umum termasuk </span></span></span><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><em>Stress Urinary incontinence</em></span></span></span><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"> dan </span></span></span><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><em>Overactive Bladder Syndrome</em></span></span></span><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"> (OAB), atau inkontinensia urin campuran yang merupakan kombinasi keduanya.</span></span></span></p>
    
    <p>&nbsp;</p>
    
    <ol>
      <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>Stress Urinary incontinence (SUI)</strong></span></span></span></li>
    </ol>
    
    <p style="margin-left:94px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">SUI adalah hilangnya urin pada ketegangan, pengerahan tenaga, atau usaha. Ini adalah jenis UI yang paling umum dan biasanya terjadi sebagai akibat dari kelemahan otot dasar panggul dan atau kerusakan jaringan ikat yang mendukung kandung kemih. Dalam situasi di mana ada peningkatan beban seperti saat berolahraga, batuk, dan bersin, jaringan yang rusak atau melemah memiliki ketidakmampuan untuk memberikan dukungan yang diperlukan ke uretra, dan akibatnya urin bocor keluar.</span></span></span></p>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Fisioterapi dianggap sebagai pengobatan lini pertama untuk inkontinensia stres dengan 70 - 90% wanita melaporkan gejala mereka membaik secara signifikan atau sembuh total mengikuti program yang ditargetkan.</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Fisioterapis kami akan melakukan penilaian menyeluruh untuk melihat bagian mana dari anatomi panggul Anda yang mengecewakan dan mendidik Anda serta membuat program khusus seputar hal ini.</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kami juga dapat menilai dan mengobati faktor lain yang berkontribusi seperti teknik pernapasan, atau biomekanik perut, punggung, panggul, dan tulang rusuk.</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Dalam beberapa kasus, penggunaan Pessaries akan disarankan sebagai tambahan untuk rezim pengobatan sementara bekerja pada faktor-faktor lain</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    
    <ol start="2">
      <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>Overactive Bladder Syndrome (OAB)</strong></span></span></span></li>
    </ol>
    
    <p style="margin-left:94px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">OAB mengacu pada urgensi dan frekuensi buang air kecil, keinginan luar biasa yang tiba-tiba untuk buang air kecil, yang mungkin atau mungkin tidak terkait dengan inkontinensia urin. Dorongan mendesak yang tiba-tiba adalah spasme kandung kemih yang tidak disengaja karena pengisian kandung kemih yang tidak normal. Urgensi dapat memburuk atau datang dengan pemicu seperti air mengalir, kunci di pintu saat Anda tiba di rumah.</span></span></span></p>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>GEJALA</strong></span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Sulit untuk menahan keinginan untuk buang air kecil</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Frekuensi pergi ke toilet lebih sering daripada yang lain</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kebocoran urin yang terkait dengan desakan</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Takut kencing bocor, padahal mungkin belum pernah bocor</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perlu pergi ke toilet lebih dari dua kali per malam (Nocturia)</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>STATISTIK &amp; PENYEBAB</strong></span></span></span></p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penelitian memberi tahu kita bahwa OAB mempengaruhi hingga 25% pria dewasa dan hingga 40% wanita dewasa.</span></span></span></p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penyebab OAB termasuk kelemahan dasar panggul dan sesak/overaktivitas dasar panggul, sembelit kronis, prolaps organ panggul, estrogen rendah, iritasi kandung kemih &ndash; termasuk kafein, pemanis buatan, minuman berkarbonasi, konsumsi cairan &ndash; urin yang terlalu banyak atau terlalu pekat.</span></span></span></p>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Fisioterapi terbukti menjadi pengobatan lini pertama terbaik untuk OAB, dan di WIF kami senang membantu wanita dengan OAB mereka karena hasilnya dapat mengubah hidup.</span></span></span></p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Dalam perawatan awal Anda, kami akan mengajukan banyak pertanyaan tentang kebiasaan kandung kemih Anda, menilai otot-otot dasar panggul Anda, menjelaskan kepada Anda tentang fungsi kandung kemih Anda dan bagaimana mulai berpikir tentang pelatihan ulang kandung kemih. Kami akan meminta Anda untuk mengisi buku harian kandung kemih untuk menilai kandung kemih &amp; urgensi Anda, melakukan USG perut untuk melihat kandung kemih Anda Ukuran, bentuk dan kemampuan pengosongan, serta menilai otot-otot dasar panggul Anda.</span></span></span></p>
    
    <p style="margin-left:85px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Berdasarkan temuan kami, pendekatan pengobatan kami mungkin termasuk:</span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Melatih dan menenangkan kandung kemih</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Latihan kandung kemih</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pendidikan kandung kemih</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Latihan dasar panggul</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Stimulasi listrik dan TENS</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pelatihan pernapasan</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perawatan muskuloskeletal untuk merawat pengemudi lain yang kami rasa mungkin berkontribusi pada urgensinya</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Berhubungan dengan Dokter mengenai obat-obatan untuk membantu proses menenangkan kandung kemih.</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    `,
    image: "/images/Physiotherapy for Urinary Incontinence.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Physiotherapy%20for%20Urinary%20Incontinence%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
  {
    serviceId: "4",
    serviceName: "Physiotherapy for Diastasis Recti",
    desc: `<p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Diastasis rekti adalah suatu kondisi dimana kedua otot di sisi kanan dan kiri perut mengalami pemisahan karena adanya tekanan yang terjadi di dalam perut. Diastasis rekti adalah salah satu masalah yang kerap dikeluhkan ibu setelah melahirkan atau di masa nifas. Dampak pada ibu yang mengalami diastasis rectus abdominis adalah timbulnya rasa sakit, melemahnya dinding perut, mengurangi kontraksi kekuatan otot perut dan kestabilan pelvis</span></span></span></p>

    <p>&nbsp;</p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENYEBAB</strong></span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Peregangan otot-otot rektus abdominis yang berlebihan</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Koordinasi otot perut bagian dalam, depan, dan samping yang buruk atau kurang berjalan dengan baik sehingga saling tarik-menarik.</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Peningkatan berat badan yang terlalu berlebihan saat hamil</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Mekanisme tubuh kurang optimal dalam mengembalikan perut ke ukuran semula setelah melahirkan karena penambahan berat badan saat hamil.</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Proses pengencangan otot-otot perut sulit kembali normal.</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Otot perut kita memainkan peran penting dalam kontrol postural, stabilitas tubuh dan panggul, gerakan tubuh, dan pernapasan.</span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Latihan sebelum melahirkan dapat membantu mempertahankan tonus dan kontrol otot perut untuk mengurangi beberapa tekanan pada linea alba. Kejadian dan ukuran diaktasis rekti lebih besar pada wanita hamil yang tidak berolahraga.</span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penguatan otot otot stabilitas inti</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Latihan pernapasan diafragma, kontraksi dasar panggul, papan, kontraksi perut isometrik</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Latihan difokuskan pada penguatan dasar panggul, tetapi juga relaksasi dan peregangan, serta penguatan perut, punggung, lengan, dan paha.</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    `,
    image: "/images/Physiotherapy for Diastasis Recti.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Physiotherapy%20for%20diastasis%20recti%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
  {
    serviceId: "5",
    serviceName: "Physiotherapy for Pre dan Post Natal Program",
    desc: `<p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Dalam waktu yang relatif singkat, tubuh wanita mengalami perubahan fisik dan hormonal yang signifikan dan dampak pada tubuh dari kehamilan dan kelahiran terlalu sering diremehkan.</span></span></span></p>

    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perubahan fisik yang terjadi selama masa kehamilan dan pascakelahiran adalah beberapa perubahan terbesar jika bukan perubahan terbesar yang pernah dilakukan tubuh. Ini termasuk perubahan postural karena gerakan maju dari pusat gravitasi, pelunakan jaringan ikat di panggul, pelebaran tulang rusuk, pemanjangan otot perut, pelunakan dasar panggul, penurunan dan kompresi saluran pencernaan dan panggul. organ dan mengurangi nada di pembuluh darah. Belum lagi perubahan-perubahan yang terjadi pada tubuh saat melahirkan baik itu persalinan pervaginam maupun operasi caesar.</span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perubahan yang terjadi mempengaruhi setiap sistem dalam tubuh, sehingga tidak heran jika tubuh mulai terasa berbeda, dengan rasa sakit atau ketidaknyamanan baru yang dipuji seperti sakit punggung, nyeri tulang kemaluan dan korset panggul, nyeri pinggul, nyeri tulang rusuk, pergelangan tangan. rasa sakit dan gejala lain seperti inkontinensia, berat vagina atau hubungan seksual yang menyakitkan umum.</span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kabar baiknya adalah bahwa ada banyak hal yang dapat dilakukan selama masa kehamilan atau setelah melahirkan untuk membantu mengobati area yang sakit atau tidak nyaman, atau lebih baik lagi mencegah timbulnya masalah. Kami bersemangat memastikan wanita mengoptimalkan fungsi tubuh mereka yang hamil dan setelah melahirkan, itulah sebabnya kami menjalankan klinik Bump to Baby kami. Kami di sini untuk membantu Anda menavigasi petualangan yang disebut keibuan ini dan dampaknya terhadap tubuh Anda. Baik kami menemui Anda saat hamil atau setelah melahirkan untuk masalah yang berkaitan dengan sistem muskuloskeletal, dasar panggul, perawatan pencegahan, atau olahraga, kami siap membantu.</span></span></span></p>
    
    <p>&nbsp;</p>
    
    <ol>
      <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perawatan saat masa kehamilan (pre-natal)</span></span></span></li>
    </ol>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Program Fisioterapi yang diberikan berupa:</span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian muskuloskeletal kehamilan dan pengobatan nyeri korset panggul, disfungsi tulang rusuk, punggung bawah, dan nyeri leher</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian dasar panggul untuk mengajarkan aktivasi dasar panggul yang benar untuk pengobatan dan pencegahan inkontinensia dan prolaps</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Skrining dan pengobatan daerah nada tinggi (ketat) di dasar panggul yang dapat berdampak pada kelahiran</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Resep latihan khusus untuk tubuh hamil</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kelas Pilates dan Latihan Kehamilan</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Edukasi dan diskusi seputar posisi persalinan, pilihan kelahiran, dan pemulihan pascakelahiran dini</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penyewaan perangkat TENS untuk modulasi nyeri persalinan</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    
    <ol start="2">
      <li style="list-style-type:lower-alpha"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Perawatan saat masa setelah melahirkan (post-natal)</span></span></span></li>
    </ol>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Program Fisioterapi yang diberikan berupa:</span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian RTUS pasca-kelahiran awal dari fungsi dasar panggul dan aktivasi dinding perut</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian dan pengobatan pemisahan otot perut</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Program rehabilitasi dasar panggul khusus</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kelas ibu dan bayi pasca melahirkan atau kelas rehabilitasi klinis</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pengobatan nyeri punggung, nyeri korset panggul, nyeri leher, nyeri tulang rusuk, dan kondisi pergelangan tangan.</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pelepasan bekas luka</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penilaian ergonomis postural, menyusui, dan gendongan bayi</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Mastitis dan saluran tersumbat</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pengobatan kondisi terkait dasar panggul seperti inkontinensia, prolaps, hubungan seksual yang menyakitkan, robekan sfingter anal, pemulihan episiotomi</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Kembali ke panduan latihan</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    `,
    image: "/images/Physiotherapy for Pre dan Post Natal Program.png",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Physiotherapy%20for%20Pre%20dan%20Post%20Natal%20Program%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
  {
    serviceId: "6",
    serviceName: "Physiotherapy for Endometriosis",
    desc: `<p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Endometriosis adalah penyakit umum di mana jaringan yang mirip dengan lapisan rahim tumbuh di luarnya di bagian lain dari tubuh. Mereka dapat ditemukan terutama di panggul, tetapi tidak terbatas pada dan ditemukan di bagian tubuh lainnya.</span></span></span></p>

    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Etiologinya tidak sepenuhnya dipahami dan masih dalam penelitian lebih lanjut. Mempengaruhi 2-10% wanita di seluruh dunia.</span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Endometriosis adalah salah satu penyebab utama nyeri panggul, histerektomi, infertilitas, dan rawat inap. Luasnya endometriosis telah terbukti tidak berkorelasi dengan pengalaman gejala. Gejala endometriosis sangat bervariasi yang merupakan salah satu alasan utama keterlambatan diagnosis. Gejala umum dapat mencakup tetapi tidak terbatas pada periode yang semakin menyakitkan, nyeri yang dalam saat berhubungan seksual, nyeri siklik yang berkembang menjadi konstan, buang air besar yang menyakitkan, kesulitan untuk hamil, atau nyeri punggung.</span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Penatalaksanaan endometriosis memerlukan penanganan medis untuk membantu mengontrol hormonal dan menghilangkan perlengketan. Penatalaksanaan non-bedah meliputi penilaian fisioterapi dan tatalaksana yang tepat yang bertujuan untuk memperbaiki disfungsi saluran kemih, usus, seksual, dan panggul.</span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Di GET Physio, penilaian muskuloskeletal yang terperinci akan mengidentifikasi strategi dan fungsi diafragma yang tidak optimal. Penilaian dasar panggul internal akan mengidentifikasi disfungsi dasar panggul. Skrining seluruh tubuh ini memungkinkan kami untuk menetapkan faktor-faktor yang berkontribusi dan merencanakan jalur yang disesuaikan untuk Anda.</span></span></span></p>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong>PENANGANAN FISIOTERAPI</strong></span></span></span></p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000"><strong><img src="https://lh6.googleusercontent.com/hlgPcDfp5xhZssGjtiaxHrl2vkIvYWaCQFxeJkqyl_wN7ocU-lT_kNPnU-GM1HeEYRY-Cdnq5jWpec4JEIdNCAG3B1CfTexvM4lERL61WkohrWYcreaY-oREeheZ0tdCrIpk7N_MsjI" style="height:140px; width:624px" /></strong></span></span></span></p>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Program Fisioterapi yang diberikan antara lain:</span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pelatihan dasar panggul dan desensitisasi</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Dinamika buang air besar</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Terapi manual</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Pola pernapasan yang optimal</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">resep latihan</span></span></span></li>
      <li style="list-style-type:disc"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Mobilisasi jaringan saraf dan pengaturan ke bawah dari penggerak sistem saraf pusat</span></span></span></li>
    </ul>
    
    <p>&nbsp;</p>
    
    <p style="margin-left:76px; text-align:justify"><span style="font-size:12pt"><span style="font-family:Calibri,sans-serif"><span style="color:#000000">Sementara Fisioterapi tidak dapat mengurangi atau &#39;menyembuhkan&#39; wanita dari Endometriosis, itu dapat membuat perbedaan yang signifikan terhadap rasa sakit, ketidaknyamanan, fungsi, dan kualitas hidup.</span></span></span></p>
    
    <ul>
      <li style="list-style-type:disc">&nbsp;</li>
    </ul>
    
    <p>&nbsp;</p>
    `,
    image: "/images/Physiotherapy for Endometriosis.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Physiotherapy%20for%20Endometriosis%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
];

export default function ListServiceDetail() {
  const [activeHighlight, setActiveHighlight] = useState("1");
  const highlightRef = useRef(null);
  const executeScroll = () =>
    document.querySelector("#highlightContent").scrollIntoView();
  return (
    <>
      <section
        className="our-services"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="d-flex  container extra-container">
          {dataService.map((item, key) => (
            <CardFullImageTitle
              key={key}
              rowsGap="5vw"
              title={item.serviceName}
              image={item.image}
              button={() => {
                setActiveHighlight(item.serviceId);
                executeScroll();
              }}
            />
          ))}
        </div>
        <div ref={highlightRef}>
          <ProductHighlight
            mainTitle="Service Highlight"
            title={
              dataService.find((item) => item.serviceId === activeHighlight)
                .serviceName
            }
            description={parse(
              dataService.find((item) => item.serviceId === activeHighlight)
                .desc
            )}
            image={
              dataService.find((item) => item.serviceId === activeHighlight)
                .image
            }
            button={() => {
              window.open(
                dataService.find((item) => item.serviceId === activeHighlight)
                  .url,
                "_blank"
              );
            }}
          />
        </div>
      </section>
    </>
  );
}
