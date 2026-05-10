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

## Canlı demo

`/generator` sayfası satış görüşmesinde kullanılacak canlı teklif taslağı üretir:

- müşteri, hizmet, hedef, fiyat, süre ve güven unsurunu alır
- teklif iskeleti + 24 saat / 72 saat / 7 gün takip mesajları üretir
- yazdırma ile PDF çıktısı alınabilir
- CTA, ₺499 pilot özelleştirmesine yönlendirir

`/sample` sayfası prospect’e pilotta teslim edilecek örnek PDF/Doc içeriğini gösterir:

- kapsam, fiyat gerekçesi ve itiraz cevapları
- 24 saat / 72 saat / 7 gün takip mesajları
- doğrudan çalışan mailto CTA ile pilot başlatma

## İlk outreach mesajı

Selam, freelance/ajans tekliflerinde müşterinin cevap vermemesi problemini çözmek için TeklifJet’i kuruyorum. İlk 10 kişiye ₺499’a kendi teklif şablonunu + 3 takip mesajını birlikte hazırlıyorum. Ayda 3+ teklif gönderiyorsan sana 15 dakikada örnek çıkarayım mı?
