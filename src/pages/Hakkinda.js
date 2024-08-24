import React from "react";
import Navbar from "../components/Navbar";
import "../css/hakkinda.css"; // CSS dosyasını unutmayın
import Footer from "../components/Footer";

const Hakkinda = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>Hakkımızda</h1>
          <p>
            <strong>Moda Dünyası</strong> olarak, stil ve kaliteyi bir araya
            getirerek sizlere en iyi alışveriş deneyimini sunmayı amaçlıyoruz.
            2024 yılında kurulan markamız, sektördeki yenilikleri takip ederek
            her zaman trendlerin öncüsü olmayı hedefliyor.
          </p>
          <p>
            Misyonumuz, her yaştan ve her zevkten kullanıcıya hitap eden geniş
            bir ürün yelpazesi sunmak. Kadın, erkek ve çocuk giyimi başta olmak
            üzere, geniş bir kategori yelpazesi ile her mevsim ve her ihtiyaç
            için ideal seçenekler sunuyoruz. Ürünlerimiz, kalitesinden ödün
            vermeden şıklığı ve rahatlığı bir arada sunar.
          </p>
          <p>
            <strong>Vizyonumuz</strong>, müşteri memnuniyetini ön planda
            tutarak, sektördeki en güvenilir ve tercih edilen markalardan biri
            olmaktır. Bunu başarmak için sürekli olarak müşteri geri
            bildirimlerini dikkate alıyor, yenilikçi yaklaşımlar geliştiriyoruz.
            Moda dünyasındaki en son trendleri takip ederken, klasik ve zamansız
            parçalarla da koleksiyonumuzu çeşitlendiriyoruz.
          </p>
          <p>
            Ekibimiz, her biri alanında uzman kişilerden oluşur. Modadan
            tasarıma, müşteri hizmetlerinden lojistiğe kadar her aşamada
            profesyonellik ve kaliteyi ön planda tutarak çalışıyoruz. Amacımız,
            alışverişinizi hem keyifli hem de sorunsuz bir deneyim haline
            getirmektir.
          </p>
          <p>
            Sizi mağazamızda görmekten mutluluk duyarız. Moda Dünyası ailesi
            olarak, her zaman yanınızdayız ve en iyi alışveriş deneyimini sunmak
            için buradayız. Bizimle iletişime geçmekten çekinmeyin ve size nasıl
            yardımcı olabileceğimizi öğrenin.
          </p>
          <p>
            <strong>Moda Dünyası</strong> - Stilinizi Keşfedin, Farkınızı
            Yaratın!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Hakkinda;
