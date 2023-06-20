## Inleiding</a>

Het motto van de Omgevingswet is ‘Ruimte voor ontwikkeling, waarborgen voor kwaliteit’. De Omgevingswet staat voor een goede balans tussen het benutten en beschermen van de fysieke leefomgeving. Met benutten wordt bedoeld het doelmatig beheren, gebruiken en ontwikkelen van de fysieke leefomgeving om maatschappelijke behoeften te vervullen. Bij beschermen gaat het over het bereiken en in stand houden van een veilige en gezonde fysieke leefomgeving en een goede omgevingskwaliteit.

### Nieuw stelsel omgevingsrecht

De Omgevingswet bundelt de wetgeving en regels voor ruimte, wonen, infrastructuur, milieu, natuur en water. Met de Omgevingswet wordt het huidige stelsel van ruimtelijke regels volledig herzien en wordt het fundament van het nieuwe stelsel voor het omgevingsrecht gelegd. Bij dit nieuwe stelsel hoort een digitale omgeving waar de dienstverlening efficiënt en gedigitaliseerd kan plaatsvinden, dit wordt ook wel het Digitaal Stelsel Omgevingswet (DSO) genoemd.

Dit document duidt de verschillende onderwerpen en kenmerken die in de Omgevingswet een rol spelen. “<i>Een conceptueel</i> <i>informatiemodel</i> <i>structureert het begrippenkader en definieert het ‘wat’: welke ‘concepten’ (‘dingen’) worden onderscheiden (in de beschouwde werkelijkheid), wat betekenen zij, hoe verhouden ze zich tot elkaar en welke informatie (eigenschappen) is daarvan relevant</i>“ (NORA, 2019). Deze informatie wordt beschreven in de taal, terminologie en definities van dit domein. De informatie in het DSO betreft o.a. juridische regels over activiteiten, functies, omgevingsnormen, omgevingswaarden, beperkingengebieden, en de gebieden waar deze regels van toepassing zijn. Het conceptuele informatiemodel (CIM) in dit document beschrijft daarmee dat deze gegevens beschikbaar zijn vanuit het DSO.

Er is een sterke relatie met dit conceptuele informatiemodel omgevingswet (CIMOW) en het informatiemodel van het domein van officiële publicaties (IMOP). De tekst van een artikel of lid in een regeling die tot het domein van de Omgevingswet behoort gaat inhoudelijk over de in de vorige alinea genoemde informatie. Deze informatie is van belang voor het DSO.

Dit CIM bestaat uit een beschrijving van de informatie, in tekst en unified modeling language (UML) en is object-georiënteerd. De beschrijving volgt hierbij een standaard voor het beschrijven van informatiemodellen, te weten het metamodel voor informatiemodellen (MIM<span class='noot'>[1]<span class='noottekst'> https://docs.geostandaarden.nl/mim/mim10/ (versie 1.0.1 in 2019)<br/></span></span>).


### Toepassingsgebied

Het Conceptueel Informatiemodel voor de Omgevingswet (CIMOW) beschrijft het domein van de Omgevingswet. Dit beperkt zich tot de informatie die in dit domein wordt vastgelegd en vastgesteld en in ketens wordt uitgewisseld ten behoeve van het DSO.

Het CIMOW beschrijft sec de informatie, hoe en waar deze informatie precies gebruikt wordt is geen onderdeel van dit informatiemodel. De informatie zoals beschreven in dit model mag overal waar dit nuttig is gebruikt en toegepast worden. Het CIM is implementatieonafhankelijk en los van de techniek opgezet. Dit maakt het mogelijk om de informatie in verschillende ketens en in verschillende technieken met behoud van betekenis te implementeren.

In de context van Omgevingswet zijn, naast het CIMOW, ook de volgende informatiedomeinen aan de orde:

 - standaard officiële overheidspublicaties (STOP)
 - standaard toepasbare regels (STTR)
 - standaard aanvragen en meldingen (STAM)
 - de bestuurlijke indeling (BI) gerealiseerd door de ambtsgebiedenvoorziening/bestuurlijke grenzen API


Het rijk, de provincies, de gemeenten en de waterschappen zijn de partijen die gegevens beschikbaar stellen aan het DSO, deze partijen worden ook wel bevoegde gezagen genoemd. Bevoegde gezagen en het DSO gaan bij de Omgevingswet integreren op basis van de concepten beschreven in het CIMOW. Hiertoe speelt het CIMOW een centrale rol bij de inrichting van de informatievoorziening, door het bieden van centrale informatiedefinities.

### Scope

CIMOW bevat minimaal alle Omgevingswet-gerelateerde informatie die uitgewisseld wordt in de keten van plan tot publicatie.

Buiten scope

 - CIMOW beschrijft niet het domein van officiële overheidspublicaties (OP) zelf. Concepten zoals <i>artikel</i> of <i>lid</i> zijn wel relevant voor het DSO, maar staan in IMOP gedefinieerd en niet in CIMOW.
 - Gegevens ten behoeve van de implementatie van het informatiemodel, zoals een aanlevermanifest.

### Toelichting bij informatiekundig perspectief

De Omgevingswet is een domein waarin juridische teksten, met juridische regels, en hun werkingsgebieden centraal staan. Dit CIMOW beschouwt de informatie die hierin aanwezig is in een informatiekundig opzicht. Hiermee wordt bedoeld dat het gaat om welke informatie aanwezig is in deze tekst. Dus niet tekstgericht, maar informatiegericht.

Bijvoorbeeld, wanneer in de juridische tekst een juridische regel aanwezig is die over een functie gaat en over een aantal activiteiten, zoals:

<i>Ter plaatse van het</i> <i>werkings</i><i>gebied</i> <i>van</i> <i>de functie ‘</i><i>C</i><i>entrumgebied’</i> <i>is</i> <i>het verrichten van de activiteit wonen</i> <i>toegestaan</i><i>.</i>

In informatiekundig opzicht betekent dit:

 - een juridische regel – te weten de tekst van de juridische regel
     - een relatie naar een locatie/gebied, in de fysieke leefomgeving, waar de regel in werking is
 - een gebied (in de fysieke leefomgeving) met een geometrie (van het centrumgebied)
 - een gebiedsaanwijzing van het type functie – centrumgebied
     - een relatie tussen de juridische regel en de gebiedsaanwijzing
     - een relatie naar een locatie/gebied, in de fysieke leefomgeving, waar de functie voor geldt
 - een activiteit – wonen 
     - een relatie tussen de juridische regel en de activiteit
     - een relatie naar een locatie/gebied, in de fysieke leefomgeving, waar de activiteit voor geldt.

Er wordt in het CIMOW een verschil gemaakt tussen de activiteit met de naam ‘wonen’ en het woord ‘wonen’ dat voorkomt in de tekst van de juridische regel. Zo is ook het centrumgebied uit de tekst van de juridische regel een ander object dan de gebiedsaanwijzing van het centrumgebied.

