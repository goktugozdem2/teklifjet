"use client";

import { FormEvent, useMemo, useState } from "react";

type Proposal = {
  client: string;
  service: string;
  outcome: string;
  price: string;
  timeline: string;
  guarantee: string;
};

const defaults: Proposal = {
  client: "Örnek Müşteri",
  service: "Landing page yenileme",
  outcome: "daha fazla demo talebi almak",
  price: "24.500",
  timeline: "10 iş günü",
  guarantee: "2 tur revizyon ve yayına alma desteği",
};

function formatCurrency(value: string) {
  const clean = value.replace(/[^0-9]/g, "");
  if (!clean) return "₺0";
  return `₺${Number(clean).toLocaleString("tr-TR")}`;
}

function buildFollowUps(client: string, outcome: string) {
  return [
    `24 saat: Merhaba ${client}, teklif üzerinden geçme şansınız oldu mu? ${outcome} hedefi için ilk adımı bu hafta netleştirirsek takvimi koruyabiliriz.`,
    `72 saat: Merhaba ${client}, aklınıza takılan kapsam/fiyat noktası varsa birlikte sadeleştirebiliriz. Önceliğim gereksiz kalem değil, ölçülebilir sonucu hızlı almak.`,
    `7 gün: Merhaba ${client}, bu haftaki planı kapatıyorum. Eğer ${outcome} hâlâ öncelikse bugün kısa bir onayla başlangıç tarihini ayırabilirim.`,
  ];
}

export default function GeneratorPage() {
  const [proposal, setProposal] = useState<Proposal>(defaults);
  const [generated, setGenerated] = useState<Proposal>(defaults);

  const followUps = useMemo(() => buildFollowUps(generated.client, generated.outcome), [generated]);
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`TeklifJet pilot: ${generated.service}`);
    const body = encodeURIComponent(
      `Merhaba, TeklifJet pilotuyla bu teklif taslağını profesyonel PDF/Doc haline getirmek istiyorum.\n\nMüşteri: ${generated.client}\nHizmet: ${generated.service}\nHedef: ${generated.outcome}\nBütçe: ${formatCurrency(generated.price)}\nSüre: ${generated.timeline}\n`
    );
    return `mailto:goktug@datrick.com?subject=${subject}&body=${body}`;
  }, [generated]);

  function update<K extends keyof Proposal>(key: K, value: Proposal[K]) {
    setProposal((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenerated(proposal);
  }

  return (
    <main className="page generator-page">
      <nav className="container nav" aria-label="Ana menü">
        <a className="brand" href="/"><span className="logo">TJ</span> TeklifJet</a>
        <div className="nav-links">
          <a href="/">Landing</a>
          <a href="#teklif">Teklif</a>
          <a href={mailtoHref}>Pilot al</a>
        </div>
      </nav>

      <section className="container generator-hero">
        <div>
          <span className="badge">Demo değer • satış görüşmesinde göster</span>
          <h1>Canlı teklif taslağı oluşturucu</h1>
          <p className="lede">
            Prospect görüşmesinde 2 dakikada kişiselleştirilmiş teklif iskeleti üret.
            Sonrasında “bunu senin markana göre PDF/Doc yapalım, pilot ₺499” diye kapat.
          </p>
        </div>
      </section>

      <section className="container generator-grid">
        <form className="form-card" onSubmit={submit}>
          <h3>Teklif girdileri</h3>
          <label>Müşteri adı<input value={proposal.client} onChange={(event) => update("client", event.target.value)} /></label>
          <label>Hizmet<input value={proposal.service} onChange={(event) => update("service", event.target.value)} /></label>
          <label>Müşterinin istediği sonuç<textarea value={proposal.outcome} onChange={(event) => update("outcome", event.target.value)} /></label>
          <label>Fiyat<input value={proposal.price} onChange={(event) => update("price", event.target.value)} /></label>
          <label>Teslim süresi<input value={proposal.timeline} onChange={(event) => update("timeline", event.target.value)} /></label>
          <label>Güven unsuru<input value={proposal.guarantee} onChange={(event) => update("guarantee", event.target.value)} /></label>
          <button type="submit">Teklif taslağını üret</button>
        </form>

        <article id="teklif" className="proposal-output">
          <div className="proposal-paper">
            <p className="eyebrow">TeklifJet teklif taslağı</p>
            <h2>{generated.client} için {generated.service}</h2>
            <p>
              Bu çalışma, {generated.client} için <strong>{generated.outcome}</strong> hedefini
              daha net kapsam, daha hızlı karar ve takip edilebilir teslim planıyla çözmek üzere hazırlanmıştır.
            </p>
            <div className="proposal-metrics">
              <span><strong>{formatCurrency(generated.price)}</strong><small>Toplam yatırım</small></span>
              <span><strong>{generated.timeline}</strong><small>Teslim süresi</small></span>
              <span><strong>{generated.guarantee}</strong><small>Güven unsuru</small></span>
            </div>
            <h3>Kapsam</h3>
            <ul>
              <li>Mevcut durum ve hedef netleştirme</li>
              <li>{generated.service} için uygulanabilir teslim planı</li>
              <li>Revizyon, yayın ve sonraki adım desteği</li>
            </ul>
            <h3>Takip mesajları</h3>
            <ol>
              {followUps.map((message) => <li key={message}>{message}</li>)}
            </ol>
            <div className="cta-row print-row">
              <button type="button" onClick={() => window.print()}>PDF olarak yazdır</button>
              <a className="button secondary" href={mailtoHref}>₺499 pilotla bunu özelleştir</a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
