# ss20-team-4

Repo für Team 4

Um diese App bearbeiten und starten zu können werden folgende Tools benötigt:

* Maven
* Spring Tool Suite (STS) - basiert auf Eclipse
    * Hinweiß: Ihr müsst ein JDK installiert haben
* Xampp


Wenn ihr STS installiert habt startet es und legt euer Workspace an.
Danach klickt auf den Reiter Help 
und dann auf Eclipse Marketplace sucht nach "React" nun sollten alle Erweiterungen
die für ein React linting sorgen angezeigt werden. Installiert CodeMix und startet STS neu.

Nun müsst ihr das Projekt in euren workspace klonen. 
Wenn ihr das gemacht habt müsst ihr auf diesen branch auschecken `git checkout prototype-boot-react`.

Um das Projekt zu importieren klickt hierzu in STS auf "File" dann auf "open Projects from Filesystem"
und wählt "directory" aus sucht nun den Ordner "ss20-team-4" klickt auf ihn drauf und klickt "Ordner auswählen"
nun checkt STS den Ordner nach einem Projekt sobald es fertig ist kreuzt das Projekt an und klickt auf "Finish".
STS importiert nun das Projekt - dauert ein wenig.
Sobald es fertig ist öffnet Xampp und startet "mysql" und "apache" legt mithilfe von phpmyadmin (gebt `http://localhost/phpmyadmin/` in euren Browser ein)
die Datenbank "lernix" an mit den encding "latin1_german1_ci".
Dann sucht in eurem STS Projekt in dem Package "com.ss20-team-4.lernix" nach "LernixApplication" 
macht ein rechts klick und startet die Anwendung mit "run as" und wählt "Spring Boot App" aus.
Nun habt ihr unser backend gestartet jetzt brauchen wir noch das frontend.
Um dies zu starten macht einen rechts klick auf den Ordner "lernix-frontend" und dann "show in local terminal"
wählt eins aus was euch gefällt. Nun öffnet sich ein Tab mit einer console die schon in dem React ordner ist.
Startet das frontend wie gewohnt mit `yarn start`.