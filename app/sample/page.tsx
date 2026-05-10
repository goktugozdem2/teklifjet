"use client";

import { useMemo } from "react";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SamplePage() {
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("TeklifJet ₺499 pilot - örnek teslimat istiyorum");
    const body = encodeURIComponent(
      "Merhaba, TeklifJet pilotuyla kendi hizmetim için bu örnekteki gibi teklif PDF/Doc + takip mesajları hazırlatmak istiyorum.\n\nİsim/şirket:\nHizmet türü:\nAylık teklif sayısı:\nÖrnek müşteri tipi:\n"
    );
    return `mailto:goktug@datrick.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <main className="page generator-page">
      <nav className="container nav" aria-label="Ana menü">
        <a className="brand" href={`${siteBasePath}/`}><span className="logo">TJ</span> TeklifJet</a>
        <div className="nav-links">
          <a href={`${siteBasePath}/`}>Landing</a>
          <a href={`${siteBasePath}/generator/`}>Canlı demo</a>
          <a href={mailtoHref}>Pilot al</a>
        </div>
      </nav>

      <section className="container generator-hero">
        <div>
          <span className="badge">Örnek teslimat • ₺499 pilot</span>
          <h1>Örnek TeklifJet teslimatı</h1>
          <p className="lede">
            Prospect’e “tam olarak ne alacağım?” sorusunu cevaplamak için hazırlanmış örnek çıktı:
            teklif iskeleti, kapsam, fiyat gerekçesi, itiraz cevapları ve takip mesajları.
          </p>
          <div className="cta-row">
            <a className="button primary" href={mailtoHref}>E-posta ile pilotu başlat</a>
            <a className="button secondary" href={`${siteBasePath}/generator/`}>Kendi teklifini oluştur</a>
          </div>
        </div>
      </section>

      <section className="container sample-layout">
        <article className="proposal-paper sample-paper">
          <p className="eyebrow">PDF/Doc örnek çıktısı</p>
          <h2>Acme Klinik için Google Ads + Landing Page Teklifi</h2>
          <p>
            Bu teklif, Acme Klinik’in estetik danışmanlık taleplerini artırması için Google Ads kampanyası,
            dönüşüm odaklı landing page ve 14 günlük optimizasyon döngüsünü kapsar.
          </p>

          <div className="proposal-metrics">
            <span><strong>₺32.000</strong><small>Kurulum + ilk ay yönetim</small></span>
            <span><strong>12 iş günü</strong><small>Teslim süresi</small></span>
            <span><strong>2 revizyon</strong><small>Güven unsuru</small></span>
          </div>

          <h3>Kapsam</h3>
          <ul>
            <li>Hedef kitle ve teklif açısı netleştirme</li>
            <li>1 adet dönüşüm odaklı landing page metni ve sayfa akışı</li>
            <li>Google Ads kampanya yapısı, anahtar kelime grupları ve negatif kelime listesi</li>
            <li>Form/WhatsApp dönüşüm takibi için kurulum checklist’i</li>
            <li>14 günlük optimizasyon planı ve haftalık sonuç raporu</li>
          </ul>

          <h3>Fiyat gerekçesi</h3>
          <p>
            Projenin amacı yalnızca reklam yayına almak değil, kliniğin ölçülebilir danışmanlık talebi almasını sağlamaktır.
            Bu nedenle teklif; kampanya, landing page ve takip sistemini tek paket halinde ele alır.
          </p>

          <h3>İtiraz cevapları</h3>
          <ol>
            <li><strong>“Pahalı geldi.”</strong> Bütçeyi korumak için ilk ayı tek hizmete değil, ölçülebilir hasta talebi sistemine ayırıyoruz.</li>
            <li><strong>“Düşünelim.”</strong> Takvimi korumak için bu hafta hedef işlem ve bütçeyi netleştirirsek kampanyayı 12 iş günü içinde yayına alabiliriz.</li>
            <li><strong>“Sonra konuşalım.”</strong> Uygunsa kapsamı küçültüp tek landing + tek kampanya ile başlayabiliriz; ilk sonuçlara göre genişletiriz.</li>
          </ol>

          <h3>Takip mesajları</h3>
          <div className="message-pack">
            <p><strong>24 saat takip mesajı:</strong> Merhaba, teklif üzerinden geçme şansınız oldu mu? Danışmanlık talebi hedefi için ilk kampanyayı bu hafta netleştirirsek yayın takvimini koruyabiliriz.</p>
            <p><strong>72 saat takip mesajı:</strong> Aklınıza takılan kapsam veya bütçe noktası varsa birlikte sadeleştirebiliriz. Önceliğim gereksiz kalem değil, ölçülebilir başvuru akışı kurmak.</p>
            <p><strong>7 gün takip mesajı:</strong> Bu haftaki planı kapatıyorum. Eğer klinik için danışmanlık talebi hâlâ öncelikse bugün kısa bir onayla başlangıç tarihini ayırabilirim.</p>
          </div>
        </article>

        <aside className="sample-side-card">
          <h3>₺499 pilotta ne teslim edilir?</h3>
          <ul>
            <li>1 hizmete özel teklif PDF/Doc metni</li>
            <li>Fiyat gerekçesi ve kapsam netleştirme</li>
            <li>3 takip mesajı: 24 saat, 72 saat, 7 gün</li>
            <li>3 itiraz cevabı: pahalı, düşüneyim, sonra</li>
            <li>Müşteriye gönderilecek kısa e-posta/DM metni</li>
          </ul>
          <a className="button primary" href={mailtoHref}>E-posta ile pilotu başlat</a>
        </aside>
      </section>
    </main>
  );
}
