# FC Wängi 1967 App

## Version 6.1

Die FC Wängi 1967 App ist eine Progressive Web App (PWA) für Fans, Spieler, Eltern, Mitglieder und Funktionäre des FC Wängi 1967.

Die App kombiniert Vereins-News, Spielbetrieb, Liveticker, Matchberichte, Kalender, Mannschaften, Spieler, Sponsoren, Push-Mitteilungen und einen geschützten Admin-Bereich in einer einzigen Anwendung.

---

## Aktuelle Version

**Version:** 6.1  
**Stand:** 17. November 2026

Version 6.1 basiert auf der V6.0 Club Suite und enthält zusätzlich einen Fix für die Kalender-Detailansicht.

### Änderung in Version 6.1

Beim Öffnen mehrerer Kalendereinträge wurden die Aktionsbuttons

- Zum Kalender
- Route
- Liveticker

mehrfach im selben Modal angehängt.

In Version 6.1 werden bestehende Kalender-Aktionsbuttons vor jedem Öffnen oder Schliessen des Modals entfernt. Dadurch wird jede Button-Zeile nur noch einmal angezeigt.

---

# Hauptfunktionen

## Home

Die Startseite bietet:

- aktuelle Vereins-News
- nächstes Spiel
- letztes Resultat
- Live-Hinweis bei aktivem Liveticker
- Schnellzugriffe
- Sponsor-Spotlight
- persönliche Einstellungen
- Favoriten-Team
- Push-Einstellungen

---

## Navigation

Die untere Taskleiste enthält:

- Home
- News
- Live
- Spiele
- Teams
- Mehr

Unter **Mehr** befinden sich unter anderem:

- Matchberichte
- Kalender
- Vorstand
- Sponsoren
- Kontakt
- Statistiken
- Galerie

---

# News

News können im Admin-Bereich erstellt, bearbeitet und veröffentlicht werden.

Funktionen:

- Titel
- Kategorie
- Text
- Bild
- Datum
- Kommentare
- Teilen
- Push-Mitteilung
- Entwurfsmodus
- geplante Veröffentlichung

Beim Öffnen eines News-Pushs wird direkt der entsprechende News-Beitrag geöffnet.

---

# Liveticker

Der Liveticker unterstützt unter anderem:

- Spielbeginn
- Tor
- Assist
- Gelbe Karte
- Rote Karte
- Wechsel
- Chance
- Parade
- Elfmeter
- Abseits
- Halbzeit
- Spielende
- Info

Zusätzlich können bei Ereignissen Spieler oder Torhüter ausgewählt werden.

Tor-Ereignisse verändern den Spielstand automatisch.

Der Liveticker zeigt:

- Heimteam
- Gastteam
- Spielstand
- Spielstatus
- Ereignis-Timeline
- Spielminute
- Live-Markierung

Push-Mitteilungen aus dem Liveticker öffnen direkt die Live-Seite.

---

# Matchberichte

Matchberichte können manuell erstellt oder direkt aus dem Liveticker vorbereitet werden.

Die Funktion **Matchbericht-Entwurf erstellen** übernimmt unter anderem:

- Heimteam
- Gastteam
- Resultat
- Torschützen
- Liveticker-Ereignisse
- Spielverlauf

Der Admin ergänzt danach nur noch den redaktionellen Text.

Matchberichte unterstützen:

- Bilder
- Kommentare
- Teilen
- Push-Mitteilungen
- Entwürfe
- geplante Veröffentlichung

---

# Spiele

Der Bereich Spiele verwendet die offiziellen OFV-/football.ch-Inhalte.

Enthalten sind unter anderem:

- Vereinsspielplan
- Resultate
- Tabellen / Ranglisten
- Mannschaftsübersicht

---

# Kalender

Der Kalender enthält:

- Spiele
- Turniere
- Vereinsanlässe
- weitere Termine

Ein Termin kann geöffnet werden und zeigt eine Detailansicht.

Je nach Termin stehen folgende Aktionen zur Verfügung:

- **Zum Kalender**
- **Route**
- **Liveticker**

Mit **Zum Kalender** wird eine ICS-Datei erstellt, die in einen Kalender importiert werden kann.

Die Route wird über Apple Maps geöffnet.

---

# Mannschaften und Spieler

Die App unterstützt:

- Mannschaften
- Trainer
- Staff
- Spieler
- Spielerbilder
- Position
- Rückennummer
- Sortierung

---

# Statistiken

Ab Version 6.0 können strukturierte Liveticker-Ereignisse Spielerstatistiken erzeugen.

Unterstützt werden unter anderem:

- Tore
- Assists
- Gelbe Karten
- Rote Karten
- Paraden
- Einsätze
- Gegentore
- Clean Sheets

Hinweis:

Ältere Liveticker-Ereignisse aus früheren Versionen können nicht zuverlässig rückwirkend in Statistiken umgewandelt werden.

---

# Torhüterstatistik

Bei Torhüter-Ereignissen können folgende Werte automatisch aufgebaut werden:

- Paraden
- Gegentore
- Clean Sheets
- Einsätze

Für eine vollständige Auswertung sollte der Torhüter auch beim Ereignis **Spielende** ausgewählt werden.

---

# Favoriten-Team

Nutzer können auf der Startseite ein Favoriten-Team auswählen.

Dadurch werden auf Home bevorzugt angezeigt:

- nächstes Spiel
- letztes Resultat
- passende Matchberichte

---

# Push-Mitteilungen

Die App verwendet Firebase Cloud Messaging.

Nutzer können einstellen, welche Push-Mitteilungen sie erhalten möchten:

- News
- Liveticker
- Kalender
- Matchberichte
- Spiele

Push-Mitteilungen öffnen direkt die passende App-Seite.

Beispiele:

- News → entsprechender News-Beitrag
- Liveticker → Live
- Matchbericht → entsprechender Bericht
- Kalender → Kalender
- Spiele → Spiele

---

# Galerie

Die Galerie verwendet bereits vorhandene Bilder aus:

- News
- Matchberichten
- Mannschaften
- Spielern
- Sponsoren

Dadurch wird keine zusätzliche öffentliche Upload-Sammlung benötigt.

---

# Sponsoren

Sponsoren können im Admin-Bereich verwaltet werden.

Die App zeigt:

- Sponsorenübersicht
- Sponsor-Logo
- Sponsor-Stufe
- Website
- Sponsor-Spotlight auf Home

---

# Kommentare

News und Matchberichte unterstützen öffentliche Kommentare.

Die Backend-Funktionen übernehmen unter anderem:

- Kommentar speichern
- Rate Limiting
- Kommentare melden
- Admin-Moderation
- Kommentar löschen

---

# Admin-Bereich

Der Admin-Bereich ist geschützt durch:

- Firebase Authentication
- E-Mail / Passwort
- TOTP Multi-Faktor-Authentifizierung
- feste Admin-UID
- Firebase App Check

Im Admin-Bereich können verwaltet werden:

- News
- Matchberichte
- Liveticker
- Teams
- Spieler
- Staff
- Vorstand
- Sponsoren
- Kalender
- Push-Nachrichten
- Kommentare
- Moderation
- Sicherheitsprotokolle

---

# Admin-Cockpit

Das Admin-Cockpit zeigt unter anderem:

- Anzahl News
- Anzahl Matchberichte
- Anzahl Teams
- Anzahl Spieler
- Anzahl Termine
- Push-Verlauf
- Sicherheits- und Moderationsinformationen

---

# Geplante Veröffentlichungen

News und Matchberichte können:

- sofort veröffentlicht
- als Entwurf gespeichert
- für später geplant

werden.

Die Cloud Function `publishScheduledContent` prüft regelmässig geplante Inhalte und veröffentlicht diese automatisch.

---

# Offline-Funktion

Die Anwendung ist als PWA aufgebaut.

Der Service Worker cached unter anderem:

- App-Grunddateien
- index.html
- Manifest
- Logo
- App-Icon
- bereits geladene Bilder

Dadurch können Teile der App auch bei schlechter oder fehlender Internetverbindung angezeigt werden.

---

# Technischer Aufbau

## Frontend

Die Hauptdateien sind:

```text
index.html
sw.js
manifest.json
logo.png
icon-512.png
```

Die App läuft über GitHub Pages.

Produktiv-URL:

```text
https://skeller652.github.io/FC-W-ngi-1967/
```

---

# Firebase

Firebase-Projekt:

```text
fc-waengi-1967
```

Verwendete Firebase-Dienste:

- Authentication
- Firestore
- Cloud Functions
- Cloud Messaging
- App Check
- Storage

Region der Cloud Functions:

```text
europe-west6
```

---

# Wichtige Firestore-Sammlungen

Die App verwendet unter anderem:

```text
news
spiele
matchberichte
teams
spieler
staff
vorstand
sponsoren
kalender
kommentare
liveticker
pushTokens
pushHistory
adminLogs
commentReports
commentRateLimits
commentReportRateLimits
pushRegistrationRateLimits
```

---

# Cloud Functions

Aktuell werden unter anderem folgende Functions verwendet:

```text
registerPushToken
submitComment
reportComment
deleteComment
getAdminModeration
recordAdminAction
sendPush
publishScheduledContent
cleanupExpiredSecurityData
```

---

# Installation / Update

## 1. GitHub aktualisieren

Folgende Dateien im GitHub-Repository ersetzen:

```text
index.html
sw.js
```

---

## 2. Cloud Functions aktualisieren

Die neue Functions-Datei auf dem Mac nach folgendem Pfad kopieren:

```text
~/Desktop/fcw-functions/functions/index.js
```

Die vorhandene Datei ersetzen.

---

## 3. Functions deployen

Terminal öffnen:

```bash
cd ~/Desktop/fcw-functions
```

Danach:

```bash
firebase deploy --only functions
```

Ein erfolgreicher Deploy endet mit:

```text
Deploy complete!
```

---

# PWA auf dem iPhone aktualisieren

Nach einem Update:

1. FC Wängi App vollständig schliessen.
2. App wieder öffnen.
3. Falls ein Update-Hinweis erscheint, aktualisieren.
4. Falls nötig, App nochmals vollständig schliessen und öffnen.

---

# Push-Mitteilungen aktivieren

Auf dem iPhone:

1. App als PWA über **Zum Home-Bildschirm** installieren.
2. App öffnen.
3. Auf **Mitteilungen aktivieren** drücken.
4. iOS-Benachrichtigungen erlauben.

---

# Sicherheit

Die App verwendet mehrere Sicherheitsmechanismen:

- Firebase App Check
- TOTP MFA für Admin
- UID-basierte Admin-Berechtigung
- Firestore Security Rules
- serverseitige Cloud Functions
- Rate Limits
- Input-Limits
- URL-Prüfung für Push-Links
- Admin-Aktionsprotokoll

---

# Versionshistorie

## Version 6.1

- Kalender-Modal-Fix
- Aktionsbuttons werden nicht mehr mehrfach angehängt
- basiert auf V6.0 Club Suite

## Version 6.0

- Favoriten-Team
- Push-Einstellungen
- erweiterter Liveticker
- Spielerstatistiken
- Torhüterstatistiken
- Matchbericht aus Liveticker
- Entwürfe
- geplante Veröffentlichung
- Kalender-ICS
- Karten-/Routenfunktion
- Galerie
- Sponsor-Spotlight
- Admin-Cockpit
- Push-Historie
- verbesserter Offline-Modus

## Version 5.14

- Ereignistyp Parade im Liveticker

## Version 5.13

- Spiele wieder in der unteren Taskleiste
- Taskleiste auf sechs Bereiche angepasst

## Version 5.11

- Push-Routing verbessert
- Push öffnet direkt die entsprechende App-Seite

## Version 5.9

- Push-System überarbeitet
- Liveticker-Pushs
- neuer Service Worker
- FCM Data Push

---

# Projektstruktur

Beispiel:

```text
FC-W-ngi-1967/
├── index.html
├── sw.js
├── manifest.json
├── logo.png
├── icon-512.png
├── datenschutz.html
└── README.md
```

Cloud Functions lokal:

```text
fcw-functions/
├── firebase.json
├── .firebaserc
└── functions/
    ├── index.js
    ├── package.json
    └── node_modules/
```

---

# Verein

**FC Wängi 1967**

9545 Wängi  
Schweiz

---

# Hinweis

Die App ist eine vereinsinterne / vereinsnahe Web-App und wird laufend weiterentwickelt.

Vor grösseren Änderungen sollten immer Backups der produktiven Dateien erstellt werden.

Besonders vor Änderungen an folgenden Bereichen ist Vorsicht notwendig:

- Firebase Authentication
- Firestore Security Rules
- App Check
- Cloud Functions
- Push-System
- TOTP MFA
