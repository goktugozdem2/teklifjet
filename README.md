# TeklifJet

Yeni proje: Türk freelancer ve küçük ajanslar için teklif PDF + takip mesajı + pilot satış landing page.

## Para kazanma hedefi

- İlk hedef: 1 adet ₺499 manuel pilot satışı.
- Segment: ayda 3+ teklif gönderen freelancer geliştirici, tasarım ajansı, performans ajansı, danışman.
- Teslimat: 1 teklif şablonu + 3 takip mesajı + itiraz cevapları.

## Lokal çalıştırma

```bash
npm install
npm run build
npm run dev
```

## Lead capture

`/api/leads` Telegram bot env varsa mesaj gönderir:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Env yoksa API 503 döner, landing formu mailto fallback açar.

## İlk outreach mesajı

Selam, freelance/ajans tekliflerinde müşterinin cevap vermemesi problemini çözmek için TeklifJet’i kuruyorum. İlk 10 kişiye ₺499’a kendi teklif şablonunu + 3 takip mesajını birlikte hazırlıyorum. Ayda 3+ teklif gönderiyorsan sana 15 dakikada örnek çıkarayım mı?
