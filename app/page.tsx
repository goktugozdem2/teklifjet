"use client";

import { FormEvent, useMemo, useState } from "react";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teklifjet.vercel.app";

export default function Home() {
  const [notice, setNotice] = useState("");
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("TeklifJet ₺499 pilot başvurusu");
    const body = encodeURIComponent(
      "Merhaba, TeklifJet pilotuna katılmak istiyorum.\n\nİsim:\nİş türü:\nAylık teklif sayısı:\nEn büyük problem:\n"
    );
    return `mailto:goktug@datrick.com?subject=${subject}&body=${body}`;
  }, []);
  const whatsappText = useMemo(
    () => encodeURIComponent(
      `Merhaba, TeklifJet ₺499 pilotuna katılmak istiyorum. 1 teklif şablonu + takip sistemi için görüşelim. Demo: ${siteUrl}/generator/`
    ),
    []
  );

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Başvuru gönderiliyor...");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Lead destination missing");
      setNotice("Başvuru alındı. 24 saat içinde pilot kurulum mesajı gidecek.");
      form.reset();
    } catch {
      setNotice("Otomatik kayıt henüz bağlı değil. E-posta taslağı açılıyor.");
      window.location.href = mailtoHref;
    }
  }

  return (
    <main className="page">
      <nav className="container nav" aria-label="Ana menü">
        <div className="brand"><span className="logo">TJ</span> TeklifJet</div>
        <div className="nav-links">
          <a href="#neden">Neden</a>
          <a href="#pilot">Pilot</a>
          <a href="#basvur">Başvur</a>
        </div>
      </nav>

      <section className="container hero">
        <div>
          <span className="badge">₺499 ilk pilot hedefi • yeni proje</span>
          <h1>Teklif gönderip unutma. TeklifJet ile kapat.</h1>
          <p className="lede">
            Türk freelancer ve küçük ajanslar için 10 dakikada profesyonel teklif PDF’i,
            müşteri itiraz cevapları ve takip planı. İlk ödeme hedefi: manuel kurulumla
            1 pilot müşteri kapatmak.
          </p>
          <div className="cta-row">
            <a className="button primary" href={mailtoHref}>E-posta ile pilotu başlat</a>
            <a className="button secondary" href={`${siteBasePath}/generator/`}>Canlı demo oluştur</a>
            <a className="button secondary" href={`https://wa.me/?text=${whatsappText}`}>WhatsApp metnini aç</a>
          </div>
          <p className="microcopy">GitHub Pages üzerinde de çalışır: doğrudan e-posta taslağı açar, ₺499 pilotu manuel fatura/EFT ile kapatmaya uygundur.</p>
        </div>

        <aside className="panel" aria-label="Örnek teklif önizleme">
          <div className="proposal-card">
            <header>
              <div>
                <h2>Web Sitesi Yenileme</h2>
                <p>Hazır teklif • güven artıran kapsam • takip planı</p>
              </div>
              <span className="status">Gönderime hazır</span>
            </header>
            <div className="price">₺24.500</div>
            <div className="line"><span>Strateji + sayfa yapısı</span><strong>3 gün</strong></div>
            <div className="line"><span>Landing + form + SEO temel</span><strong>7 gün</strong></div>
            <div className="line"><span>Revizyon + yayın desteği</span><strong>2 gün</strong></div>
            <p><strong>Takip:</strong> 24. saat değer hatırlatma, 72. saat itiraz cevabı, 7. gün son tarih mesajı.</p>
          </div>
        </aside>
      </section>

      <section id="neden" className="container">
        <h2 className="section-title">Para kazanma hipotezi</h2>
        <div className="grid3">
          <article className="feature">
            <h3>Acı net</h3>
            <p>Ajans/freelancer teklif hazırlarken vakit kaybediyor, takip yapmadığı için sıcak işi kaçırıyor.</p>
          </article>
          <article className="feature">
            <h3>Satış kolay</h3>
            <p>“1 teklif şablonunu birlikte kuralım” diye manuel pilot satılır; ürün tam bitmeden gelir doğrulanır.</p>
          </article>
          <article className="feature">
            <h3>Hızlı teslim</h3>
            <p>İlk müşteriye Notion/Google Doc + TeklifJet formu ile aynı gün çıktı verilebilir.</p>
          </article>
        </div>
      </section>

      <section id="pilot" className="container offer">
        <div className="pricing">
          <h3>Pilot paket</h3>
          <div className="amount">₺499 <span>/ tek sefer</span></div>
          <p>İlk 10 müşteri için manuel onboarding. Amaç ürün değil, ödeme sinyali.</p>
          <ul>
            <li>1 sektör için teklif şablonu</li>
            <li>3 takip mesajı: 24 saat, 72 saat, 7 gün</li>
            <li>İtiraz cevapları: pahalı, düşüneyim, sonra konuşalım</li>
            <li>PDF/Doc çıktısı ve müşteriye gönderim metni</li>
          </ul>
          <a className="button primary" href="#basvur">Pilot alıcısı bul</a>
        </div>

        <div id="basvur" className="form-card">
          <h3>Pilot başvurusu</h3>
          <form onSubmit={submitLead}>
            <label>İsim / şirket<input name="name" required placeholder="Örn. Ahmet / Studio X" /></label>
            <label>E-posta<input type="email" name="email" required placeholder="mail@site.com" /></label>
            <label>İş türü<select name="segment" required defaultValue="">
              <option value="" disabled>Seç</option>
              <option>Freelancer geliştirici</option>
              <option>Tasarım ajansı</option>
              <option>Performans pazarlama ajansı</option>
              <option>Danışman / koç</option>
              <option>Diğer</option>
            </select></label>
            <label>Aylık kaç teklif gönderiyorsun?<input name="volume" placeholder="Örn. 5-10" /></label>
            <label>En büyük teklif problemi<textarea name="pain" placeholder="Müşteri cevap vermiyor, fiyat pahalı diyor, kapsam dağılıyor..." /></label>
            <button type="submit">₺499 pilot için başvur</button>
            <p className="notice">{notice}</p>
          </form>
        </div>
      </section>

      <section className="container script-card">
        <h3>İlk outreach mesajı</h3>
        <p>
          “Selam, freelance/ajans tekliflerinde müşterinin cevap vermemesi problemini çözmek için TeklifJet’i kuruyorum.
          İlk 10 kişiye ₺499’a kendi teklif şablonunu + 3 takip mesajını birlikte hazırlıyorum. Ayda 3+ teklif gönderiyorsan
          sana 15 dakikada örnek çıkarayım mı?”
        </p>
      </section>

      <footer className="container footer">
        TeklifJet © 2026 • Yeni proje MVP’si • Veri destinasyonu bağlanana kadar form e-posta fallback kullanır.
      </footer>
    </main>
  );
}
