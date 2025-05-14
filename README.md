# TrustDrop

**TrustDrop** ist eine datenschutzorientierte Open-Source-Plattform zur sicheren und anonymen Übermittlung von Hinweisen und vertraulichen Dokumenten. Entwickelt von [Kōbō Kitsune (工房狐)](#), vereint TrustDrop moderne Technologie mit ethischem Design – für Menschen, die etwas sagen möchten, ohne sich selbst zu gefährden.

-----

## 🚀 Features

- 🔐 **Clientseitige Verschlüsselung** (OpenPGP.js)
- 🕵️ **Absolute Anonymität** – kein Tracking, keine IP-Logs, keine Cookies
- 📎 **Dateiübertragung** – Anhänge werden ebenfalls verschlüsselt
- 🖥️ **Einfaches Web-Interface** – nutzbar auf Desktop & Mobile
- 🗃️ **Lokale Speicherung der verschlüsselten Daten** (z. B. im `storage/`-Ordner)

---

## 🛠️ Installation

```bash
git clone https://github.com/FabriceMru/trustdrop.git
cd trustdrop
npm install
npm run dev
```

> Stelle sicher, dass du `node`, `npm` und einen gültigen **OpenPGP Public Key** hast.

---

## 📄 Projektstruktur

```bash
/app
  page.tsx               # Frontend-Formular für Hinweisgeber
  /api/drop/route.ts     # API-Route zum Empfangen der verschlüsselten Nachricht
/lib
  encrypt.ts             # OpenPGP-basierte clientseitige Verschlüsselung
/storage                # Lokale Speicherung der Drops (JSON-Dateien)
/public/publicKey.asc      # Öffentlicher Schlüssel zum Verschlüsseln (optional)
```

---

## 🧪 Use Cases (Anwendungsbeispiele)

### 🏢 Unternehmen
**Interne Whistleblower-Stelle** für Mitarbeitende zur anonymen Meldung von:
- Compliance-Verstößen
- Diskriminierung am Arbeitsplatz
- Datenschutzverletzungen

### 🏫 Bildungseinrichtungen
**Anonyme Meldestelle** für Schüler, Studierende & Eltern:
- Mobbing
- Gewalt durch Lehrkräfte
- Missstände im Schulbetrieb

### 📰 Medien & NGOs
**Sicherer Kanal für Informanten und Whistleblower**:
- Insider-Dokumente
- Hinweise zu Korruption oder Machtmissbrauch
- Umweltvergehen

### 🏛️ Öffentliche Verwaltung
**Bürgerbriefkasten für digitale Hinweise**:
- Beschwerden zu Behördenverhalten
- Missstände in Kitas, Pflegeheimen, Ämtern
- Meldung von Korruption oder Betrug

---

## 🔐 Sicherheit & Datenschutz

- Alle Inhalte werden **im Browser** mit einem OpenPGP Public Key verschlüsselt
- Keine Speicherung personenbezogener Daten
- Der Server sieht **niemals den Klartext**
- Unterstützt DSGVO-konforme Implementierung in Organisationen

---

## ✨ Nächste Schritte / Roadmap

- [ ] Admin-Oberfläche zum Abrufen & Entschlüsseln von Nachrichten
- [ ] Rückkanal mit Drop-ID für Antworten
- [ ] Automatisches Löschen alter Nachrichten (z. B. nach 30 Tagen)
- [ ] Webhook / E-Mail-Benachrichtigung bei neuen Hinweisen
- [ ] Deployment auf Vercel oder VPS mit SSL & Sicherheitsheadern

---

## 🧠 Lizenz & Mitmachen

TrustDrop ist Open Source und steht unter der **MIT-Lizenz**. Pull Requests & Forks sind willkommen.

---

**TrustDrop** – Eine Marke von [Kōbō Kitsune](#)
> © 2025 TrustDrop – eine Marke von Kōbō Kitsune (工房狐).  
Eine datensichere Plattform für anonyme Hinweise im digitalen Zeitalter.
