import { Project, BlogPost, Skill } from './types';
import youtubeShortsImg from '@/assets/youtube-shorts.png';

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'backend' },
  { name: 'C#', category: 'backend' },
  { name: 'Yazılım Geliştirme', category: 'frontend' },
  { name: 'Otomasyon', category: 'automation' },
  { name: 'Video Kurgu', category: 'video' },
  { name: 'HTML', category: 'frontend' },
  { name: 'Premiere Pro', category: 'video' },
  { name: 'Photoshop', category: 'design' },
  { name: 'MS Office', category: 'tools' },
  { name: 'FL Studio', category: 'video' },
];

export const PROJECTS: Project[] = [
  {
    id: 'pengu-autocut',
    title: 'Pengu Autocut (Yapay Zeka)',
    description: 'Video kurgu süreçlerini yapay zeka destekli algoritmalarla otomatikleştirerek saatler süren sessizlik veya hata kesme (cut) işlemlerini saniyelere indiren akıllı bir araç.',
    longDescription: 'Pengu Autocut, özellikle video üreticileri ve podcast yayıncılarının en çok zamanını alan "sessizlikleri kesme" safhasını otomatikleştirir. Ses dalgalarını analiz ederek tanımlanan dB eşiğinin altındaki gürültüsüz bölümleri milisaniye hassasiyetinde tespit eder. Gelişmiş dikey kesim algoritmasıyla geçişleri yumuşatır ve video akışında atlama (jump-cut) estetiğini korur. FFMPEG entegrasyonu sayesinde render işlemlerini kayıpsız ve son derece hızlı gerçekleştirir.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', // Beautiful abstract dark waveform graphic
    tags: ['Yapay Zeka (AI)', 'Python', 'Video Otomasyonu', 'FFMPEG'],
    category: 'yapay-zeka',
    githubLink: 'https://github.com/pengueniniz/pengu-autocut',
    featured: true
  },
  {
    id: 'youtube-shorts-factory',
    title: 'YouTube Shorts Otomasyonu',
    description: 'Yazılım ve kodlama yeteneklerini, içerik üretimiyle birleştiren; ses ve video prodüksiyon süreçlerini uçtan uca otomatize eden yenilikçi bir sistem.',
    longDescription: 'Bu proje, belirlenen konu başlıkları üzerine internetten trend verileri toplar, yapay zeka diliyle video senaryoları hazırlar, ses sentezleme (TTS) motorlarıyla natürel seslendirmeler üretir ve ilgili telifsiz videoları dinamik olarak kesip biçerek alt yazılarla birlikte dikey formata dönüştürür. n8n entegrasyonu ve YouTube API\'leri eşliğinde, her gün belirli saatlerde otomatik olarak kanalınıza video yükleyen tam otonom bir fabrikadır.',
    image: youtubeShortsImg, // Minimalist UI/Graph background
    tags: ['Python', 'Otomasyon', 'API Entegrasyonları', 'n8n', 'YouTube API'],
    category: 'otomasyon',
    githubLink: 'https://github.com/pengueniniz/youtube-shorts-factory',
    featured: true
  },
  {
    id: 'advanced-logger',
    title: 'C# ile Gelişmiş Log Analizörü',
    description: 'Sunucu ve uygulama log dosyalarını anlık tarayarak hata şablonlarını yakalayan, anormallik analizi yapan ve e-posta/Telegram raporları sunan kurumsal seviyede araç.',
    longDescription: 'Büyük ölçekli uygulamaların ürettiği devasa .log veya .json log verilerini hızlı şekilde işler. Multithreading yapısıyla saniyede 100.000 log satırını analiz edebilecek kapasitededir. Regex eşleme kütüphanesi ve makine öğrenimi tabanlı kümeleme algoritmaları kullanarak benzer hataları gruplar ve sistem yöneticisinin dikkat etmesi gereken kritik anomalileri anında tespit eder.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Code-related imagery
    tags: ['C#', 'Yazılım Geliştirme', 'Otomasyon', '.NET Core'],
    category: 'otomasyon',
    githubLink: 'https://github.com/pengueniniz/csharp-log-analyzer',
    featured: false
  },
  {
    id: 'discord-ai-moderator',
    title: 'Yapay Zeka Destekli Topluluk Yönetim Botu',
    description: 'Discord topluluklarında huzuru korumak amacıyla doğal dil işleme kullanan, küfür, hakaret, reklam ve spam tehditlerini anlık engelleyen gelişmiş bot.',
    longDescription: 'Topluluk içi mesaj akışlarını anlık denetleyen, geleneksel kelime filtrelerinden farklı olarak cümlenin bağlamını (sentimant analiz) anlayıp toksikliği tespit eden API entegrasyonu mevcuttur. Python ve discord.py kütüphanesi üzerine kurulmuş olup, PostgreSQL veritabanında kullanıcıların itibar skorlarını (reputation) saklar ve otonom uyarı/susturma süreçlerini yönetir.',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop', // Tech neon background
    tags: ['Python', 'Yapay Zeka (AI)', 'Discord API', 'NLP'],
    category: 'yapay-zeka',
    githubLink: 'https://github.com/pengueniniz/discord-moderator-ai',
    featured: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'autocut-seruveni',
    title: 'Yapay Zeka ile Video Kurgusunda Devrim: Pengu Autocut Nasıl Doğdu?',
    excerpt: 'Saatlerce süren video kesme işlemlerini 5 saniyeye indirebilir miyiz? Geliştirdiğim Python tabanlı algoritmanın arka plan hikayesi.',
    content: `Video düzenleme ile ilgileniyorsanız, ham bir kaydı alıp içerisindeki duraksama, öksürme ve hatalı kısımları tek tek dinleyip "kesme" (cutting) işleminin ne kadar yorucu olduğunu çok iyi bilirsiniz. Bazen 15 dakikalık bir konuşma videosunu temizlemek 1 saate kadar sürebiliyor.\n\n### Problemin Keşfi\nİstanbul Bilgi Üniversitesi'ndeki ilk dönem projelerimi geliştirirken aynı zamanda dijital içerik üretimiyle de yakından ilgileniyordum. Bir gün, montaj yaparken kendime şu soruyu sordum: "Ben bu işi kod yazarak neden otomatize etmiyorum?" Sonuçta ses dalgalarında "sessiz" olan veya fısıltı seviyesinde kalan yerler matematiksel olarak belirli bir genliğin (dB) altındadır.\n\n### Teknik Çözüm ve Algoritma\nProjenin kalbini Python'daki ses analizi kütüphaneleri ve FFMPEG oluşturuyor.\n\n1. Ses Dalgalarını Ayrıştırma: Video dosyasının ses kanalı geçici bir WAV dosyasına aktarılıyor.\n2. Enerji Analizi (RMS): Ses dosyası küçük zaman pencerelerine (chunk) bölünüp, her bir pencerenin ses yoğunluğu ölçülüyor. Belirlediğimiz sınır değerin altındaki tüm pencereler "silinecekler listesi" (silent intervals) olarak işaretleniyor.\n3. Doğal Geçiş Maskesi: Eğer sessizlikleri milisaniyelere kadar tam kesersek, konuşmada anksiyete uyandıracak kadar hızlı ve mekanik bir ton oluşur. Bunun önüne geçmek için sessizlik aralıklarının başına ve sonuna 100-200ms opsiyonel boşluk (padding) ekleyen bir "tampolama algoritması" geliştirdim.\n4. Kesintisiz Birleştirme (Merging): FFMPEG'in concat filtresiyle, sesli olan parçalar sırasıyla kesilip boşluksuz şekilde birleştiriliyor ve orijinal video kalitesi korunarak çıktı alınıyor.\n\n### Sonuç ve Kazanımlar\nOrtaya çıkan Pengu Autocut, 1 saatlik ham bir video kaydını sadece 10.3 saniye içerisinde tamamen temizleyebiliyor! Bu sayede içerik üreticileri vakitlerini mekanik kesme işlemlerine değil, videonun hikayesine ayırabiliyorlar.\n\nDijital dünyada otomasyonun gücü tam olarak bu: İnsan zihnini rutin işlerden kurtarıp yaratıcılığa alan açmak.`,
    date: '24 Mayıs 2026',
    readTime: '4 dk okuma',
    category: 'Yapay Zeka',
    tags: ['Python', 'Yapay Zeka', 'Video Otomasyonu', 'FFMPEG'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'n8n-youtube-fabrikasi',
    title: 'n8n ve Python ile Uçtan Uca YouTube Otomasyonu',
    excerpt: 'Her gün tam zamanında, insan eli değmeden video hazırlayıp yükleyen bir otomasyon kanalı tasarlamak mümkün mü?',
    content: `Teknolojiyle üretimi birleştirmek benim için her zaman büyük bir tutku oldu. Bu yazıda, n8n iş akışları ile Python betiklerini birbirine nasıl bağlayarak otomatik bir YouTubeShorts kanalı kurduğumu anlatacağım.\n\n### Neden n8n?\nZapier veya Make gibi araçlar harika olsalar da ücretsiz planlarındaki sınırlandırmalar ve bulut bağımlılıkları bütçemi aşıyordu. n8n ise açık kaynaklı, sunucunuzda barındırabileceğiniz ve son derece esnek olan bir iş akışı otomasyon platformudur. JavaScript/Python entegrasyonu sayesinde her türlü mantıksal şemayı çizebiliyorsunuz.\n\n### Kurduğum Otonom İş Akışı\nOtomasyonumuz 4 ana adımdan oluşuyor:\n\n1. Fikir/Senaryo Oluşturma: n8n her gün saat 10:00'da tetiklenir. Google Sheets API veya API sistemleri üzerinden o günün trend başlıklarından biri alınır ve yapay zeka entegrasyonuyla 50 saniyelik yaratıcı, dinamik bir YouTube Shorts senaryosu oluşturulur.\n2. Ses Sentezleme (Text-to-Speech): Üretilen senaryo, Python'da yazmış olduğum bir microservice API'ye gönderilir. Program, Edge-TTS veya Google TTS kullanarak insan sesine en yakın, akıcı bir ses dosyası üretir.\n3. Video Montajı ve Altyazı: Python kütüphanesi (MoviePy) kullanılarak arka plan için yüksek kaliteli hazır videolardan biri seçilir. Ses dosyası üzerine biner. Ses dalgalarından kelime zamanlamaları (Word-level timestamps) okunarak videonun tam ortasına yüksek kontrastlı, kelime kelime değişen alt yazılar eklenir.\n4. Yükleme ve Optimizasyon: Video render edildikten sonra n8n, YouTube API'si ile yetkilendirme (OAuth) yapar. Başlık, açıklama ve SEO etiketleriyle birlikte videoyu yayın takvimine göre yükler.\n\n### Sonuç\nBu sistem, hiç bilgisayar açmanıza dahi gerek kalmadan, arka planda tıkır tıkır çalışan kendi mikro-şirketiniz gibi davranıyor. Entegrasyon ve yazılım yeteneklerinin birleşerek yeni nesil dijital varlıklar oluşturabildiği harika bir döneme tanıklık ediyoruz!`,
    date: '10 Mayıs 2026',
    readTime: '5 dk okuma',
    category: 'Otomasyon',
    tags: ['Python', 'Otomasyon', 'n8n', 'YouTube API'],
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'minimalizm-ve-tasarim',
    title: 'Neden Sadelik (Minimalizm) En İyi Dijital Kartvizittir?',
    excerpt: 'Web portfolyonuzu karmaşadan arındırıp sadece odaklanılması gereken detaylara yönlendirmek neden daha prestijlidir?',
    content: `Bir yazılımcı veya dijital üretici olarak portfolyonuzu hazırlarken genellikle her şeyi göstermek istersiniz. 10 farklı renk, her köşeden fırlayan animasyonlar, 3D çizimler, karmaşık grafikler... Ancak günümüzün yoğun dikkat dağınıklığı çağında en büyük lüks ve prestij sadeliktir (minimalizm).\n\n### "Quiet luxury" (Sessiz Lüks) Tasarım Nedir?\n"Quiet luxury" modada şatafatsız ama aşırı kaliteli kıyafetleri betimlerken kullanılır. Tasarım dünyasında ise bu, reklam ve gürültü yapmayan, sade ama kusursuz yapılandırılmış bir arayüz demektir.\n\n* Monokrom Odak: Arka planda saf siyahlar ve hafif antrasit tondaki katmanlar, gözü yormaz. Bir renk cümbüşü yerine beyazın ve gri tonlarının kontrastından faydalanmak, içeriğin kendisini ön plana çıkarır.\n* Derinlik ve Gölgeler Yerine "Tonal Layering": Eski tasarımlarda pencerelere verilen büyük gölgeler yerine, sadece incecik (1px) sınır çizgileri ve tatlı kontrastta katmanlar (Örn: #000000 üzerinde duran #0A0A0A kartı) kullanmak çok daha teknik ve pürüzsüz görünür.\n* Tipografinin Gücü: Yazı karakteri olarak Inter, Space Grotesk gibi geometrik, mükemmel aralıklı fontlar seçildiğinde, devasa puntolar ve kalın başlıklar tıpkı modern bir müzedeki sergi panosu gibi hissettirir.\n\n### Minimalist Portfolyonun Etkisi\nBir işe alım yöneticisi veya potansiyel iş ortağı sitenize girdiğinde, aradığını 5 saniye içerisinde bulabilmelidir. Göz yorucu animasyonlar beklemek yerine, doğrudan projelerinize ve yaptığınız işin kalitesine odaklanmalarını sağlamak performansı katlar. \n\nSiz de tasarımlarınızda element eklemek yerine "neyi silebilir ve burayı nasıl daha temiz bırakabilirim?" sorusunu sorduğunuzda, işlerinizin hak ettiği prestije ulaştığını göreceksiniz.`,
    date: '18 Nisan 2026',
    readTime: '3 dk okuma',
    category: 'Tasarım',
    tags: ['Tasarım', 'Kullanıcı Deneyimi', 'Minimalizm', 'Tipografi'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'
  }
];
