# ss20-team-4

Repo für Team 4

Um diese App bearbeiten und starten zu können werden folgende Tools benötigt:

* Maven
* Spring Tool Suite (STS) - basiert auf Eclipse (IntelliJ sollte auch gehen, ob andere IDEs gehen weiß ich nicht)
    * Hinweiß: Ihr müsst ein JDK installiert haben
* Xampp


Wenn ihr STS installiert habt startet es und legt euer Workspace an.
Danach klickt auf den Reiter Help 
und dann auf Eclipse Marketplace sucht nach "React" nun sollten alle Erweiterungen
die für ein React linting sorgen angezeigt werden. Installiert CodeMix und startet STS neu.

Nun müsst ihr das Projekt in euren workspace klonen. 

Um das Projekt zu importieren klickt hierzu in STS auf "File" dann auf "open Projects from Filesystem"
und wählt "directory" aus sucht nun den Ordner "ss20-team-4" klickt auf ihn drauf und klickt "Ordner auswählen"
nun checkt STS den Ordner nach einem Projekt sobald es fertig ist kreuzt das Projekt an und klickt auf "Finish".
STS importiert nun das Projekt - dauert ein wenig.
Bevor das Backend gestartet werden kann muss mysql laufen (es kann sonst wegen jdbc exceptions nicht starten).
Wenn mysql gestartet wurde, das Backend entweder mit `mvn spring-boot:run` starten oder wenn das nicht geht sucht in dem Package "com.ss20-team-4.lernix" nach "LernixApplication"
und macht einen rechts klick und startet die Anwendung mit "run as" und wählt "Spring Boot App" aus.

Das Backend sollte selbstständig in mysql eine Datenbank erstellen und diese mit ein paar Testdaten befüllen.
Falls das nicht geschieht muss die Datenbank "lernix" evt. via phpmyadmin händisch angelegt werden.

Im Idealfall ist das backend nun gestartet jetzt brauchen wir noch das frontend.
Um dies zu starten macht einen rechts klick auf den Ordner "lernix-frontend" und dann "show in local terminal"
wählt git bash aus oder console je nach dem was besser gefällt ;)
Nun öffnet sich ein Tab mit einer console die schon in dem React ordner ist.
Abhänigkeiten installieren mit `yarn install`
Startet das frontend wie gewohnt mit `yarn start`.