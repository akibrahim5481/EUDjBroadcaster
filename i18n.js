(function () {
  var KEY = "lang";
  var LOCALES = {
    tr: "tr_TR",
    en: "en_US",
    de: "de_DE",
    fr: "fr_FR"
  };
  var T = {
    tr: {
      "meta.title": "Radyo DJ — Icecast ve Shoutcast yayın stüdyosu",
      "meta.description": "Radyo DJ ile telefondan Icecast ve Shoutcast yayını yapın. Kütüphane, kuyruk, isimli listeler, canlı mikrofon ve mikser tek uygulamada.",
      "meta.titlePrivacy": "Gizlilik politikası — Radyo DJ",
      "meta.descriptionPrivacy": "Radyo DJ gizlilik politikası. Google Play listing için yasal metin.",
      "meta.titleSupport": "Destek — Radyo DJ",
      "meta.descriptionSupport": "Radyo DJ kurulum, bağlantı ve yayın sorunları için destek.",
      "nav.features": "Özellikler",
      "nav.screens": "Ekranlar",
      "nav.privacy": "Gizlilik",
      "nav.support": "Destek",
      "nav.themeLight": "Açık tema",
      "nav.themeDark": "Koyu tema",
      "nav.langLabel": "Dil",
      "hero.eyebrow": "Yayın stüdyosu",
      "hero.title": "Telefondan Icecast ve Shoutcast yayını",
      "hero.lede": "MP3 kütüphanenizi yönetin, kuyruğu ve isimli listeleri kurun, mikrofonu mikserle harmanlayın. Radyo DJ, canlı yayın için tasarlanmış koyu temalı bir stüdyo uygulamasıdır.",
      "hero.download": "Google Play’den indir",
      "hero.privacy": "Gizlilik politikası",
      "hero.pillMic": "Canlı mikrofon",
      "hero.pillMp3": "Yerel MP3",
      "hero.artAlt": "Radyo DJ stüdyo ekranı",
      "features.title": "Stüdyoda ne var",
      "features.liveTitle": "Canlı yayın",
      "features.liveBody": "Icecast ve Shoutcast sunucularına bağlanın. TLS, çoklu hedef, otomatik metadata ve yeniden bağlanma desteklenir.",
      "features.mixerTitle": "Mikser ve mikrofon",
      "features.mixerBody": "Deck, mikrofon ve master fader’lar. Mikrofon açıkken müzik otomatik kısılır.",
      "features.libraryTitle": "Kütüphane ve kuyruk",
      "features.libraryBody": "Dosya veya klasörden MP3 ekleyin. Kuyruğu sıralayın veya tek dokunuşla temizleyin.",
      "features.listsTitle": "İsimli listeler",
      "features.listsBody": "Slow, Pop, Arabesk gibi setler oluşturun; listeyi kuyruğa yükleyin veya ekleyin.",
      "shots.title": "Uygulama ekranları",
      "shots.lead": "Google Play için 9:16 telefon görselleri. Ham kareler <code>assets/screenshots/raw</code> klasöründe; Play Console JPEG’leri <code>play-store/phone-screenshots</code> içindedir.",
      "shots.studio": "Stüdyo",
      "shots.queue": "Kuyruk",
      "shots.library": "Kütüphane",
      "shots.lists": "Listeler",
      "shots.connection": "Bağlantı",
      "shots.profile": "Profil",
      "shots.metadata": "Metadata",
      "shots.general": "Genel",
      "shots.altStudio": "Stüdyo",
      "shots.altQueue": "Kuyruk",
      "shots.altLibrary": "Kütüphane",
      "shots.altLists": "Listeler",
      "shots.altConnection": "Bağlantı ayarları",
      "shots.altProfile": "Yayın profili",
      "shots.altMetadata": "Metadata",
      "shots.altGeneral": "Genel ayarlar",
      "footer.package": "Play Store paket adı:",
      "privacy.title": "Gizlilik politikası",
      "privacy.updated": "Son güncelleme: 30 Ağustos 2026",
      "privacy.intro": "Radyo DJ (<code>com.broadcast.app</code>) bir yayın stüdyosu uygulamasıdır. Hesap oluşturmaz, reklam ağı kullanmaz ve analitik SDK göndermez.",
      "privacy.collected": "Toplanan veriler",
      "privacy.itemMic": "<strong>Mikrofon sesi:</strong> Canlı konuşma için cihaz mikrofonu kullanılır. Ses yalnızca sizin başlattığınız yayına veya yerel kayda gider; geliştirici sunucusuna yüklenmez.",
      "privacy.itemMusic": "<strong>Müzik dosyaları:</strong> Seçtiğiniz MP3’ler uygulama depolamasına kopyalanır. Albüm kapağı gömülü etiketlerden yerelde çıkarılır.",
      "privacy.itemSettings": "<strong>Yayın ayarları:</strong> Sunucu adresi, port, mount, şifre ve profil alanları cihazda saklanır. Şifreler cihazın güvenli deposundadır.",
      "privacy.itemNetwork": "<strong>Ağ:</strong> Icecast / Shoutcast sunucunuza bağlanmak, metadata göndermek ve dinleyici sayısını okumak için internet kullanılır.",
      "privacy.sharing": "Paylaşım",
      "privacy.sharingBody": "Uygulama verilerinizi reklamcılarla veya veri aracılarıyla paylaşmaz. Yayın akışı ve metadata, sizin girdiğiniz yayın sunucusuna gider.",
      "privacy.retention": "Saklama ve silme",
      "privacy.retentionBody": "Kütüphane, kuyruk, listeler ve yedek dosyaları cihazda durur. Uygulamayı kaldırarak veya kütüphaneden parça silerek silebilirsiniz.",
      "privacy.permissions": "İzinler",
      "privacy.permMic": "Mikrofon — canlı DJ konuşması",
      "privacy.permNotify": "Bildirim — arka planda yayın durumu",
      "privacy.permNet": "İnternet — yayın sunucusuna bağlanma",
      "privacy.permBt": "Bluetooth (isteğe bağlı) — kulaklık bağlantısı",
      "privacy.contact": "İletişim",
      "privacy.contactBody": "Sorularınız için <a href=\"https://github.com/akibrahim5481/EUDjBroadcaster/issues\">GitHub Issues</a> veya <a href=\"support.html\">destek sayfasını</a> kullanın.",
      "privacy.enSummary": "English summary",
      "privacy.enSummaryBody": "Radyo DJ does not create accounts, serve ads, or ship analytics SDKs. Microphone audio and MP3 files stay on-device except when you start a stream to your own Icecast or Shoutcast server. Server passwords are stored in the device keystore. Uninstalling the app removes local library copies.",
      "support.title": "Destek",
      "support.intro": "Radyo DJ, Icecast ve Shoutcast kaynak bağlantısı, yerel MP3 kuyruğu ve canlı mikrofon karışımı için bir stüdyo uygulamasıdır.",
      "support.faq": "Sık sorunlar",
      "support.itemConnect": "<strong>Bağlanamıyorum:</strong> Telefondan PC sunucusuna giderken <code>localhost</code> yerine bilgisayarın LAN IP’sini yazın. Icecast mount ve şifreyi kontrol edin.",
      "support.itemPort": "<strong>Shoutcast port:</strong> Kaynak genelde 8001, admin/stats 8000’dir.",
      "support.itemArt": "<strong>Albüm kapağı yok:</strong> Kapak MP3 içindeki ID3 resminden okunur. Yalnızca oynatıcı önbelleğinde olan görseller görünmez; dosyayı yeniden ekleyin.",
      "support.itemMic": "<strong>Mikrofon duyulmuyor:</strong> Sistem mikrofon iznini ve stüdyodaki mikrofon düğmesini açın; mikserde mic fader’ı yükseltin.",
      "support.store": "Play Store",
      "support.package": "Paket adı: <code>com.broadcast.app</code>",
      "support.policy": "Gizlilik politikası URL’si olarak bu sitedeki <a href=\"privacy.html\">privacy.html</a> adresini kullanın."
    },
    en: {
      "meta.title": "Radyo DJ — Icecast and Shoutcast broadcast studio",
      "meta.description": "Broadcast to Icecast and Shoutcast from your phone with Radyo DJ. Library, queue, named lists, live mic, and mixer in one app.",
      "meta.titlePrivacy": "Privacy policy — Radyo DJ",
      "meta.descriptionPrivacy": "Radyo DJ privacy policy for the Google Play listing.",
      "meta.titleSupport": "Support — Radyo DJ",
      "meta.descriptionSupport": "Help with Radyo DJ setup, connection, and broadcasting issues.",
      "nav.features": "Features",
      "nav.screens": "Screens",
      "nav.privacy": "Privacy",
      "nav.support": "Support",
      "nav.themeLight": "Light theme",
      "nav.themeDark": "Dark theme",
      "nav.langLabel": "Language",
      "hero.eyebrow": "Broadcast studio",
      "hero.title": "Icecast and Shoutcast from your phone",
      "hero.lede": "Manage your MP3 library, build the queue and named lists, and blend the microphone with the mixer. Radyo DJ is a dark-themed studio app built for live broadcasting.",
      "hero.download": "Get it on Google Play",
      "hero.privacy": "Privacy policy",
      "hero.pillMic": "Live microphone",
      "hero.pillMp3": "Local MP3",
      "hero.artAlt": "Radyo DJ studio screen",
      "features.title": "What's in the studio",
      "features.liveTitle": "Live broadcast",
      "features.liveBody": "Connect to Icecast and Shoutcast servers. TLS, multiple targets, automatic metadata, and reconnection are supported.",
      "features.mixerTitle": "Mixer and microphone",
      "features.mixerBody": "Deck, microphone, and master faders. Music ducks automatically when the mic is open.",
      "features.libraryTitle": "Library and queue",
      "features.libraryBody": "Add MP3s from a file or folder. Reorder the queue or clear it in one tap.",
      "features.listsTitle": "Named lists",
      "features.listsBody": "Build sets like Slow, Pop, or Arabesk; load a list into the queue or append it.",
      "shots.title": "App screens",
      "shots.lead": "9:16 phone shots for Google Play. Raw frames are in <code>assets/screenshots/raw</code>; Play Console JPEGs are in <code>play-store/phone-screenshots</code>.",
      "shots.studio": "Studio",
      "shots.queue": "Queue",
      "shots.library": "Library",
      "shots.lists": "Lists",
      "shots.connection": "Connection",
      "shots.profile": "Profile",
      "shots.metadata": "Metadata",
      "shots.general": "General",
      "shots.altStudio": "Studio",
      "shots.altQueue": "Queue",
      "shots.altLibrary": "Library",
      "shots.altLists": "Lists",
      "shots.altConnection": "Connection settings",
      "shots.altProfile": "Broadcast profile",
      "shots.altMetadata": "Metadata",
      "shots.altGeneral": "General settings",
      "footer.package": "Play Store package name:",
      "privacy.title": "Privacy policy",
      "privacy.updated": "Last updated: 30 August 2026",
      "privacy.intro": "Radyo DJ (<code>com.broadcast.app</code>) is a broadcast studio app. It does not create accounts, use ad networks, or ship analytics SDKs.",
      "privacy.collected": "Data we collect",
      "privacy.itemMic": "<strong>Microphone audio:</strong> Used for live talk. Audio goes only to the stream or local recording you start; it is not uploaded to a developer server.",
      "privacy.itemMusic": "<strong>Music files:</strong> Selected MP3s are copied into app storage. Album art is extracted locally from embedded tags.",
      "privacy.itemSettings": "<strong>Broadcast settings:</strong> Server address, port, mount, password, and profile fields are stored on the device. Passwords stay in the device keystore.",
      "privacy.itemNetwork": "<strong>Network:</strong> Internet is used to connect to your Icecast / Shoutcast server, send metadata, and read listener counts.",
      "privacy.sharing": "Sharing",
      "privacy.sharingBody": "The app does not share your data with advertisers or data brokers. The stream and metadata go to the broadcast server you enter.",
      "privacy.retention": "Retention and deletion",
      "privacy.retentionBody": "Library, queue, lists, and backup files stay on the device. Uninstall the app or remove tracks from the library to delete them.",
      "privacy.permissions": "Permissions",
      "privacy.permMic": "Microphone — live DJ talk",
      "privacy.permNotify": "Notifications — background stream status",
      "privacy.permNet": "Internet — connecting to the broadcast server",
      "privacy.permBt": "Bluetooth (optional) — headset connection",
      "privacy.contact": "Contact",
      "privacy.contactBody": "For questions use <a href=\"https://github.com/akibrahim5481/EUDjBroadcaster/issues\">GitHub Issues</a> or the <a href=\"support.html\">support page</a>.",
      "privacy.enSummary": "English summary",
      "privacy.enSummaryBody": "Radyo DJ does not create accounts, serve ads, or ship analytics SDKs. Microphone audio and MP3 files stay on-device except when you start a stream to your own Icecast or Shoutcast server. Server passwords are stored in the device keystore. Uninstalling the app removes local library copies.",
      "support.title": "Support",
      "support.intro": "Radyo DJ is a studio app for Icecast and Shoutcast source connections, a local MP3 queue, and a live microphone mix.",
      "support.faq": "Common issues",
      "support.itemConnect": "<strong>Can't connect:</strong> When going from the phone to a PC server, use the computer's LAN IP instead of <code>localhost</code>. Check the Icecast mount and password.",
      "support.itemPort": "<strong>Shoutcast port:</strong> Source is usually 8001; admin/stats is 8000.",
      "support.itemArt": "<strong>No album art:</strong> Cover art is read from the ID3 picture inside the MP3. Images that exist only in a player cache will not appear; re-add the file.",
      "support.itemMic": "<strong>Microphone not heard:</strong> Enable system microphone permission and the studio mic button; raise the mic fader on the mixer.",
      "support.store": "Play Store",
      "support.package": "Package name: <code>com.broadcast.app</code>",
      "support.policy": "Use <a href=\"privacy.html\">privacy.html</a> on this site as the privacy policy URL."
    },
    de: {
      "meta.title": "Radyo DJ — Icecast- und Shoutcast-Sendestudio",
      "meta.description": "Senden Sie mit Radyo DJ vom Telefon an Icecast und Shoutcast. Bibliothek, Warteschlange, benannte Listen, Live-Mikrofon und Mixer in einer App.",
      "meta.titlePrivacy": "Datenschutz — Radyo DJ",
      "meta.descriptionPrivacy": "Datenschutzerklärung von Radyo DJ für den Google-Play-Eintrag.",
      "meta.titleSupport": "Support — Radyo DJ",
      "meta.descriptionSupport": "Hilfe zu Einrichtung, Verbindung und Sendung mit Radyo DJ.",
      "nav.features": "Funktionen",
      "nav.screens": "Bildschirme",
      "nav.privacy": "Datenschutz",
      "nav.support": "Support",
      "nav.themeLight": "Helles Thema",
      "nav.themeDark": "Dunkles Thema",
      "nav.langLabel": "Sprache",
      "hero.eyebrow": "Sendestudio",
      "hero.title": "Icecast und Shoutcast vom Telefon",
      "hero.lede": "Verwalten Sie Ihre MP3-Bibliothek, bauen Sie Warteschlange und benannte Listen auf und mischen Sie das Mikrofon. Radyo DJ ist eine dunkle Studio-App für Live-Sendungen.",
      "hero.download": "Bei Google Play laden",
      "hero.privacy": "Datenschutz",
      "hero.pillMic": "Live-Mikrofon",
      "hero.pillMp3": "Lokale MP3",
      "hero.artAlt": "Radyo DJ Studio-Bildschirm",
      "features.title": "Was im Studio steckt",
      "features.liveTitle": "Live-Sendung",
      "features.liveBody": "Verbinden Sie Icecast- und Shoutcast-Server. TLS, mehrere Ziele, automatische Metadaten und Neuverbindung werden unterstützt.",
      "features.mixerTitle": "Mixer und Mikrofon",
      "features.mixerBody": "Deck-, Mikrofon- und Master-Fader. Ist das Mikrofon offen, wird die Musik automatisch leiser.",
      "features.libraryTitle": "Bibliothek und Warteschlange",
      "features.libraryBody": "MP3s aus Datei oder Ordner hinzufügen. Die Warteschlange sortieren oder mit einem Tipp leeren.",
      "features.listsTitle": "Benannte Listen",
      "features.listsBody": "Sets wie Slow, Pop oder Arabesk anlegen; eine Liste in die Warteschlange laden oder anhängen.",
      "shots.title": "App-Bildschirme",
      "shots.lead": "9:16-Telefonbilder für Google Play. Rohbilder liegen in <code>assets/screenshots/raw</code>; Play-Console-JPEGs in <code>play-store/phone-screenshots</code>.",
      "shots.studio": "Studio",
      "shots.queue": "Warteschlange",
      "shots.library": "Bibliothek",
      "shots.lists": "Listen",
      "shots.connection": "Verbindung",
      "shots.profile": "Profil",
      "shots.metadata": "Metadaten",
      "shots.general": "Allgemein",
      "shots.altStudio": "Studio",
      "shots.altQueue": "Warteschlange",
      "shots.altLibrary": "Bibliothek",
      "shots.altLists": "Listen",
      "shots.altConnection": "Verbindungseinstellungen",
      "shots.altProfile": "Sendungsprofil",
      "shots.altMetadata": "Metadaten",
      "shots.altGeneral": "Allgemeine Einstellungen",
      "footer.package": "Play-Store-Paketname:",
      "privacy.title": "Datenschutzerklärung",
      "privacy.updated": "Zuletzt aktualisiert: 30. August 2026",
      "privacy.intro": "Radyo DJ (<code>com.broadcast.app</code>) ist eine Sendestudio-App. Sie erstellt keine Konten, nutzt keine Werbenetze und enthält keine Analyse-SDKs.",
      "privacy.collected": "Erhobene Daten",
      "privacy.itemMic": "<strong>Mikrofon-Audio:</strong> Wird für Live-Moderation genutzt. Audio geht nur in den von Ihnen gestarteten Stream oder die lokale Aufnahme; es wird nicht auf einen Entwickler-Server hochgeladen.",
      "privacy.itemMusic": "<strong>Musikdateien:</strong> Ausgewählte MP3s werden in den App-Speicher kopiert. Cover werden lokal aus eingebetteten Tags gelesen.",
      "privacy.itemSettings": "<strong>Sendeeinstellungen:</strong> Serveradresse, Port, Mount, Passwort und Profilfelder bleiben auf dem Gerät. Passwörter liegen im sicheren Speicher des Geräts.",
      "privacy.itemNetwork": "<strong>Netzwerk:</strong> Internet wird genutzt, um Ihren Icecast-/Shoutcast-Server zu erreichen, Metadaten zu senden und Hörerzahlen zu lesen.",
      "privacy.sharing": "Weitergabe",
      "privacy.sharingBody": "Die App teilt Ihre Daten nicht mit Werbetreibenden oder Datenhändlern. Stream und Metadaten gehen an den von Ihnen eingegebenen Sendeserver.",
      "privacy.retention": "Speicherung und Löschung",
      "privacy.retentionBody": "Bibliothek, Warteschlange, Listen und Sicherungen bleiben auf dem Gerät. Sie können sie durch Deinstallieren der App oder Entfernen von Titeln löschen.",
      "privacy.permissions": "Berechtigungen",
      "privacy.permMic": "Mikrofon — Live-DJ-Moderation",
      "privacy.permNotify": "Benachrichtigungen — Stream-Status im Hintergrund",
      "privacy.permNet": "Internet — Verbindung zum Sendeserver",
      "privacy.permBt": "Bluetooth (optional) — Headset-Verbindung",
      "privacy.contact": "Kontakt",
      "privacy.contactBody": "Fragen richten Sie an <a href=\"https://github.com/akibrahim5481/EUDjBroadcaster/issues\">GitHub Issues</a> oder die <a href=\"support.html\">Support-Seite</a>.",
      "privacy.enSummary": "English summary",
      "privacy.enSummaryBody": "Radyo DJ does not create accounts, serve ads, or ship analytics SDKs. Microphone audio and MP3 files stay on-device except when you start a stream to your own Icecast or Shoutcast server. Server passwords are stored in the device keystore. Uninstalling the app removes local library copies.",
      "support.title": "Support",
      "support.intro": "Radyo DJ ist eine Studio-App für Icecast- und Shoutcast-Quellen, eine lokale MP3-Warteschlange und Live-Mikrofonmischung.",
      "support.faq": "Häufige Probleme",
      "support.itemConnect": "<strong>Keine Verbindung:</strong> Vom Telefon zum PC-Server statt <code>localhost</code> die LAN-IP des Computers verwenden. Icecast-Mount und Passwort prüfen.",
      "support.itemPort": "<strong>Shoutcast-Port:</strong> Quelle meist 8001, Admin/Stats 8000.",
      "support.itemArt": "<strong>Kein Cover:</strong> Das Cover kommt aus dem ID3-Bild in der MP3. Bilder nur aus einem Player-Cache erscheinen nicht; Datei erneut hinzufügen.",
      "support.itemMic": "<strong>Mikrofon nicht hörbar:</strong> Systemberechtigung und Studio-Mikrofontaste aktivieren; Mic-Fader am Mixer anheben.",
      "support.store": "Play Store",
      "support.package": "Paketname: <code>com.broadcast.app</code>",
      "support.policy": "Verwenden Sie <a href=\"privacy.html\">privacy.html</a> auf dieser Website als Datenschutz-URL."
    },
    fr: {
      "meta.title": "Radyo DJ — studio Icecast et Shoutcast",
      "meta.description": "Diffusez vers Icecast et Shoutcast depuis le téléphone avec Radyo DJ. Bibliothèque, file, listes nommées, micro live et mixeur dans une seule app.",
      "meta.titlePrivacy": "Confidentialité — Radyo DJ",
      "meta.descriptionPrivacy": "Politique de confidentialité de Radyo DJ pour la fiche Google Play.",
      "meta.titleSupport": "Assistance — Radyo DJ",
      "meta.descriptionSupport": "Aide pour l’installation, la connexion et la diffusion avec Radyo DJ.",
      "nav.features": "Fonctionnalités",
      "nav.screens": "Écrans",
      "nav.privacy": "Confidentialité",
      "nav.support": "Assistance",
      "nav.themeLight": "Thème clair",
      "nav.themeDark": "Thème sombre",
      "nav.langLabel": "Langue",
      "hero.eyebrow": "Studio de diffusion",
      "hero.title": "Icecast et Shoutcast depuis le téléphone",
      "hero.lede": "Gérez votre bibliothèque MP3, construisez la file et les listes nommées, et mélangez le micro. Radyo DJ est une app studio sombre conçue pour le direct.",
      "hero.download": "Télécharger sur Google Play",
      "hero.privacy": "Politique de confidentialité",
      "hero.pillMic": "Micro en direct",
      "hero.pillMp3": "MP3 local",
      "hero.artAlt": "Écran studio Radyo DJ",
      "features.title": "Dans le studio",
      "features.liveTitle": "Diffusion en direct",
      "features.liveBody": "Connectez des serveurs Icecast et Shoutcast. TLS, cibles multiples, métadonnées automatiques et reconnexion sont pris en charge.",
      "features.mixerTitle": "Mixeur et micro",
      "features.mixerBody": "Faders platine, micro et master. La musique baisse automatiquement lorsque le micro est ouvert.",
      "features.libraryTitle": "Bibliothèque et file",
      "features.libraryBody": "Ajoutez des MP3 depuis un fichier ou un dossier. Réordonnez la file ou videz-la d’un toucher.",
      "features.listsTitle": "Listes nommées",
      "features.listsBody": "Créez des sets Slow, Pop ou Arabesk ; chargez une liste dans la file ou ajoutez-la.",
      "shots.title": "Écrans de l’app",
      "shots.lead": "Visuels téléphone 9:16 pour Google Play. Les images brutes sont dans <code>assets/screenshots/raw</code> ; les JPEG Play Console dans <code>play-store/phone-screenshots</code>.",
      "shots.studio": "Studio",
      "shots.queue": "File",
      "shots.library": "Bibliothèque",
      "shots.lists": "Listes",
      "shots.connection": "Connexion",
      "shots.profile": "Profil",
      "shots.metadata": "Métadonnées",
      "shots.general": "Général",
      "shots.altStudio": "Studio",
      "shots.altQueue": "File",
      "shots.altLibrary": "Bibliothèque",
      "shots.altLists": "Listes",
      "shots.altConnection": "Réglages de connexion",
      "shots.altProfile": "Profil de diffusion",
      "shots.altMetadata": "Métadonnées",
      "shots.altGeneral": "Réglages généraux",
      "footer.package": "Nom du paquet Play Store :",
      "privacy.title": "Politique de confidentialité",
      "privacy.updated": "Dernière mise à jour : 30 août 2026",
      "privacy.intro": "Radyo DJ (<code>com.broadcast.app</code>) est une app de studio de diffusion. Elle ne crée pas de comptes, n’utilise pas de réseaux publicitaires et n’embarque pas de SDK d’analyse.",
      "privacy.collected": "Données collectées",
      "privacy.itemMic": "<strong>Audio du micro :</strong> Utilisé pour le talk en direct. L’audio va uniquement vers le flux ou l’enregistrement local que vous lancez ; il n’est pas envoyé vers un serveur du développeur.",
      "privacy.itemMusic": "<strong>Fichiers musicaux :</strong> Les MP3 choisis sont copiés dans le stockage de l’app. Les pochettes sont extraites localement des balises intégrées.",
      "privacy.itemSettings": "<strong>Réglages de diffusion :</strong> Adresse du serveur, port, mount, mot de passe et champs de profil restent sur l’appareil. Les mots de passe sont dans le coffre de l’appareil.",
      "privacy.itemNetwork": "<strong>Réseau :</strong> Internet sert à joindre votre serveur Icecast / Shoutcast, envoyer les métadonnées et lire le nombre d’auditeurs.",
      "privacy.sharing": "Partage",
      "privacy.sharingBody": "L’app ne partage pas vos données avec des publicitaires ou des courtiers en données. Le flux et les métadonnées vont vers le serveur de diffusion que vous saisissez.",
      "privacy.retention": "Conservation et suppression",
      "privacy.retentionBody": "Bibliothèque, file, listes et sauvegardes restent sur l’appareil. Désinstallez l’app ou retirez des pistes de la bibliothèque pour les supprimer.",
      "privacy.permissions": "Autorisations",
      "privacy.permMic": "Microphone — talk DJ en direct",
      "privacy.permNotify": "Notifications — état du flux en arrière-plan",
      "privacy.permNet": "Internet — connexion au serveur de diffusion",
      "privacy.permBt": "Bluetooth (facultatif) — casque",
      "privacy.contact": "Contact",
      "privacy.contactBody": "Pour toute question, utilisez <a href=\"https://github.com/akibrahim5481/EUDjBroadcaster/issues\">GitHub Issues</a> ou la <a href=\"support.html\">page d’assistance</a>.",
      "privacy.enSummary": "English summary",
      "privacy.enSummaryBody": "Radyo DJ does not create accounts, serve ads, or ship analytics SDKs. Microphone audio and MP3 files stay on-device except when you start a stream to your own Icecast or Shoutcast server. Server passwords are stored in the device keystore. Uninstalling the app removes local library copies.",
      "support.title": "Assistance",
      "support.intro": "Radyo DJ est une app studio pour les sources Icecast et Shoutcast, une file MP3 locale et un mix micro en direct.",
      "support.faq": "Problèmes fréquents",
      "support.itemConnect": "<strong>Impossible de se connecter :</strong> Du téléphone vers un serveur PC, utilisez l’IP LAN de l’ordinateur au lieu de <code>localhost</code>. Vérifiez le mount Icecast et le mot de passe.",
      "support.itemPort": "<strong>Port Shoutcast :</strong> La source est en général 8001, admin/stats 8000.",
      "support.itemArt": "<strong>Pas de pochette :</strong> La pochette vient de l’image ID3 dans le MP3. Les images seulement dans un cache lecteur n’apparaissent pas ; réajoutez le fichier.",
      "support.itemMic": "<strong>Micro inaudible :</strong> Activez l’autorisation micro système et le bouton micro du studio ; montez le fader micro sur le mixeur.",
      "support.store": "Play Store",
      "support.package": "Nom du paquet : <code>com.broadcast.app</code>",
      "support.policy": "Utilisez <a href=\"privacy.html\">privacy.html</a> de ce site comme URL de confidentialité."
    }
  };

  function pageKey() {
    var page = document.documentElement.getAttribute("data-page") || "index";
    if (page === "privacy") return { title: "meta.titlePrivacy", desc: "meta.descriptionPrivacy" };
    if (page === "support") return { title: "meta.titleSupport", desc: "meta.descriptionSupport" };
    return { title: "meta.title", desc: "meta.description" };
  }

  function readLang() {
    try {
      var params = new URLSearchParams(location.search);
      var query = (params.get("lang") || "").toLowerCase();
      if (T[query]) return query;
      var stored = localStorage.getItem(KEY);
      if (stored && T[stored]) return stored;
    } catch (e) { /* ignore */ }
    var nav = ((navigator.language || navigator.userLanguage || "tr") + "").slice(0, 2).toLowerCase();
    return T[nav] ? nav : "tr";
  }

  function t(lang, key) {
    var table = T[lang] || T.tr;
    return table[key] != null ? table[key] : (T.tr[key] || key);
  }

  function apply(lang) {
    if (!T[lang]) lang = "tr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(lang, el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(lang, el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-visible-lang]").forEach(function (el) {
      el.hidden = el.getAttribute("data-visible-lang") !== lang;
    });

    var meta = pageKey();
    var title = t(lang, meta.title);
    var desc = t(lang, meta.desc);
    document.title = title;
    var descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", desc);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", desc);
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", LOCALES[lang] || "tr_TR");

    document.querySelectorAll('a[href*="play.google.com"]').forEach(function (a) {
      try {
        var url = new URL(a.getAttribute("href"), location.href);
        url.searchParams.set("hl", lang);
        a.setAttribute("href", url.toString());
      } catch (e) { /* ignore */ }
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      var theme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      toggle.textContent = t(lang, theme === "light" ? "nav.themeDark" : "nav.themeLight");
    }

    document.documentElement.classList.remove("i18n-pending");
  }

  window.I18N = {
    t: function (key) {
      return t(readLang(), key);
    },
    getLang: readLang,
    setLang: function (lang) {
      if (!T[lang]) lang = "tr";
      try {
        localStorage.setItem(KEY, lang);
      } catch (e) { /* ignore */ }
      try {
        var url = new URL(location.href);
        url.searchParams.set("lang", lang);
        history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) { /* ignore */ }
      apply(lang);
    }
  };

  function boot() {
    apply(readLang());
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.I18N.setLang(btn.getAttribute("data-set-lang"));
      });
    });
  }

  if (document.body) {
    boot();
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }
})();
