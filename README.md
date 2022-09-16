# Lets Meet Halfway

Lets Meet Halfway gibt den benutzenden die Möglichkeit Treffpunkte auszusuchen, die für beide eine faire Anfahrtszeit bedeutet. Diese Software ist als studentisches Projekt im Rahmen des Kurses Software Engeneering im Wintersemester 2022/2023 an der HWR Berlin entstanden.

## Stakeholder
- **Auftraggeberin** *Der VBB braucht einen Weg die öffentlichen Verkehrsmittel attraktiver zu machen. Da ihm das Knowhow dafür fehlt beauftragt er Halfway.*
- **Zulieferer VBB Open Data Team** *Der VBB stellt die benötigten Fahrplandaten bereit. Hierum kümmert sich das Open Data Team, die unter anderem aktuelle Fahrplandaten zur Verfügung stellen.*
- **Entwickelnde** *Entwickelnde sind bei Halfway angestellt. Diese möchten einfach wartbaren Code und hoffen auf einen unkomplizierten Projektverlauf. Sie sind für die technische Umsetzung verantwortlich.*
- **UI-Designer** *UI-Designer wollen ein möglichst einfach zu bedienendes User-Interface entwickeln, so dass Halfway einfach und niederschwellig benutzt werden kann.*
- **Interne Projektleiterin** *Die interne Projektleiterin arbeitet für Halfway und möchte einen vollumfänglichen Projekterfolg sowie möglichst geringe Kosten.*
- **Qualitätssicherung** *Die Qualitätssicherung sorgt für die Compliance des Projekts nach ISO-Standards ISO/IEC 9126. Sie sorgt durch Reviews und Inspections dafür, dass die Vorgaben an das Projekt eingehalten werden.*
- **Testende** *Die Testenden sind eine repräsentativ ausgewählte Gruppe aus Benutzenden. Sie haben die gleichen Interessen wie die Benutzenden aber liefern den Entwickelnden wertvolles Feedback.*
- **Werbepartner: innen** *Die Werbepartner:innen erhoffen sich mehr Kunden für ihre Unternehmen, indem sie Locations als potenzielle Treffpunkte um die ermittelte Haltestelle bewerben können.*
- **Benutzende** *Die Benutzenden wollen auf einfach Art und Weise Treffen mit Anderen in Berlin/Brandenburg organisieren. Dabei ist die Örtlichkeit des Treffens ist flexibel, aber die Anfahrtszeit soll für alle möglichst gleich lang sein.*
- **Konkurrenz VBB App und andere ÖPNV-Apps**. *Die VBB-App möchte, dass Halfway möglichst wenige Features bekommt, so dass diese keinen Verlust an Benutzenden fürchten muss. Vor allem die Navigationssparte der App befürchtet Einbußen.*

## Persona
Auftraggeberin:
  - Auftraggeberin ist die VBB Verkehrsverbund Berlin-Brandenburg GmbH
  - als Ansprechpartner tritt der Projekt Koordinator Lukas Knopf auf
  - er ist 5% seiner Arbeitszeit verfügbar
  - Herr Knopf nimmt an den wöchentlichen Meetings mit Status Report und Feedback teil
  - die Auftraggeberin hat eine hohe Relevanz, denn sie finanziert das Projekt und hat damit auch viele Befugnisse
  - der Ansprechpartner hat keine technischen Kompetenzen, kennt aber die Produkte des VBB und kann dort Expertise bieten
  - der VBB will ein gutes Produkt für VBB Kund:innen entwickeln und veröffentlichen um den ÖPNV des VBB zu stärken 

Benutzerin X:
- hat einem weit gestreuten Freundeskreis
- sie versucht regelmäßig Treffen zu planen aber die langen Fahrzeiten schrecken sie ab
- Benutzerin X will ein einfach zu bedienendes Produkt, dass es ihr ermöglicht schnell herauszufinden wo sie sich mit ihren Freund:innen treffen kann damit die Anfahrtszeit für alle möglichst gleich lang ist
- sie kommuniziert mit dem Entwickler-Team über das Kontaktformular und das Forum und gibt so Feedback zum Produkt
- sie ist aber keine Testerin, die Zugang zu Beta-Versionen hat
- Benutzerin X hat keine Kompetenzen die die Interna des Projekts (Software, Routing, ÖPNV) betreffen, nutzt aber regelmäßig Halfway und kennt die Benutzenden Sicht gut
- als einzelne Benutzerin hat sie keine hohe Relevanz und keine Befugnisse, aber spricht für eine Gruppe mit hoher Relevanz, alle Benutzenden, die zwar auch keine Befugnisse hat, aber trotzdem zufriedengestellt werden muss, denn ohne Benutzende kein Produkt  

## Projektziele
- Personen die sich treffen wollen sollen schnell und einfach herausfinden zu welcher Haltestelle beide die gleiche Anfahrtszeit haben (Quelle: Stakeholder/Benutzende)
- Steigerung der Attraktivität der ÖPNV (Quelle: Stakeholder/VBB)
- hoch qualitative, wartbare Software (Quelle: Stakeholder/Entwickler)
- Datensparsame Anwendung (Quelle: Dokumente/DSVGO)

## Kontext
- Einschränkung: kurze Ladezeiten und wenig Datenverbrauch (Quelle: Systeme/Funknetz)
- Einschränkung: lokales Endgerät mit modernem Browser und Internetverbindung wird benötigt (Quelle: Systeme/Endgerät)
- Kompatibilität: Verlinkung zur VBB-App zum Ticketkauf
