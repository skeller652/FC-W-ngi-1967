FC WÄNGI APP V3 – INSTALLATION
==============================

Neu in V3
---------
- Aufgeräumte, ausklappbare Live-Ranglisten
- Kommentar-Melden-Funktion
- Stärkerer Spam-Schutz: 20 Sekunden Pause + max. 5 Kommentare / 10 Minuten pro IP
- Admin-Bereich: gemeldete Kommentare + Aktivitätsprotokoll
- Admin-Aktionen werden teilweise protokolliert
- Uploads nur noch JPG, PNG oder WEBP, maximal 8 MB
- Verschärfte Firestore- und Storage-Regeln
- Neuer Service-Worker-Cache v8
- Vorhandene News, Teams, Matchberichte, Kommentare, 2FA, Push, Kalender und Sponsoren bleiben erhalten

Installationsreihenfolge
------------------------
1. GitHub: index.html komplett ersetzen und committen.
2. GitHub: sw.js komplett ersetzen und committen.
3. Mac: functions/index.js im Ordner ~/Desktop/fcw-functions/functions ersetzen.
4. Optional package.json nur ersetzen, wenn dein lokales package.json älter/anders ist.
5. Im Terminal:
   cd ~/Desktop/fcw-functions
   firebase deploy --only functions
6. Prüfen:
   firebase functions:list
   Erwartet: registerPushToken, sendPush, submitComment, deleteComment, reportComment, getAdminModeration
7. Firebase Console > Firestore Database > Regeln: firestore.rules komplett einsetzen und veröffentlichen.
8. Firebase Console > Storage > Regeln: storage.rules komplett einsetzen und veröffentlichen.
9. App vollständig schließen und neu öffnen. Bei altem Cache einmal privates Safari-Fenster testen.

Wichtig
-------
- Vor dem Veröffentlichen der neuen Firestore-Regeln zuerst die neuen Functions deployen.
- Bestehende Daten werden nicht gelöscht.
- Für Live-Ranglisten weiterhin pro Team die OFV-/football.ch-URL im Adminbereich hinterlegen.
