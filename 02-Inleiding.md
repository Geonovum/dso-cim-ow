# Inleiding

In een stelsel van samenhangende voorzieningen, zoals het Digitaal Stelsel
Omgevingswet (DSO), is semantische interoperabiliteit essentieel om de
verschillende stelselonderdelen in staat te stellen relevante informatie op een
betekenisvolle manier met elkaar uit te wisselen. Voor de dienstverlening
rondom de Omgevingswet moet altijd duidelijk zijn welke betekenis wordt
toegekend aan woorden (begrippenkader) en wat de relatie is tussen begrippen,
vanuit de inhoud van die begrippen (semantische relaties).  Dit modelleren we
in conceptuele informatiemodellen (CIM) die een relatief stabiel raamwerk voor
het werken onder architectuur en de basis voor de implementatie biedt.

> Conceptuele informatiemodellen (CIMs) – Definitie volgens MIM [[MIM]]
> Een conceptueel informatiemodel beschrijft de modellering van de werkelijkheid
> binnen het beschouwde domein door middel van de beschrijving van welke
> informatie (data met betekenis en structuur) een rol speelt. Een conceptueel
> informatiemodel is hierbij onafhankelijk van het ontwerp van en de
> implementatie in systemen. Het geeft een zo getrouw mogelijke beschrijving van
> die werkelijkheid en is in natuurlijke taal geformuleerd.
>
> Een dergelijk model definieert het ‘wat’: welke 'onderwerpen van gesprek'
> ('concepten', 'dingen’) worden onderscheiden in de beschouwde werkelijkheid.
> Wat betekenen zij, hoe verhouden ze zich tot elkaar en welke informatie is
> daarvan relevant. Deze informatie wordt gemodelleerd als informatieobjecten
> met eigenschappen/kenmerken, oftewel waarvoor data beschikbaar is (of zal
> zijn) en wordt ondergebracht in een informatiemodel. Dit informatiemodel
> dient als taal waarmee domeinexperts kunnen communiceren met
> informatieanalisten en verschaft een eenduidige interpretatie van die
> werkelijkheid ten behoeve van deze communicatie.
>
> Met conceptueel wordt niet bedoeld abstract of hoog over, de beschrijvingen
> van de informatie die beschikbaar is zijn heel precies en concreet.
>
> Een conceptueel informatiemodel wordt opgesteld voor gebruik door mensen,
> zodat ‘de business’ en de ICT-specialisten elkaar (gaan) begrijpen voor wat
> betreft de informatie die in het domein wordt geregistreerd en/of kan worden
> uitgewisseld.

Binnen DSO worden verschillende informatiedomeinen onderkend: elk
informatiedomein groepeert informatieobjecten met maximale samenhang en vormt
logische bouwblokken voor de informatievoorziening van DSO.  

De informatiedomeinen zijn de basis voor de indeling van de informatiemodellen.
Elk informatiedomein wordt op conceptueel niveau beschreven door een
conceptueel informatiemodel (CIM) dat richting geeft aan de uitwerking van het
informatiedomein en de samenhang met aanpalende domeinen borgt.

<figure id="Figure-CIM-Overzicht">
<img src="media/CIM-Overzicht.png" alt="">
<figcaption>Overzicht van alle Conceptuele Informatiemodellen in het DSO</figcaption>
</figure>

De onderstaande conceptuele informatiemodellen zijn beschikbaar¬. De modellen
zijn in verschillende stadia van ontwikkeling en de links kunnen zowel naar
ontwikkel- als publicatieversies verwijzen.

- [CIM-AM](https://geonovum.github.io/dso-cim-am/): Conceptueel Informatiemodel Aanvragen en  meldingen.
- [CIM-HLP](https://geonovum.github.io/dso-cim-hlp/): Conceptueel Informatiemodel Help en ondersteuning.
- [CIM-MAC](https://geonovum.github.io/dso-cim-mac/) Conceptueel Informatiemodel Machtigen.
- [CIM-OI](https://geonovum.github.io/dso-cim-oi/): Conceptueel Informatiemodel Omgevingsinformatie.
- [CIM-OP](https://docs.geostandaarden.nl/dso/dso-cim-op/): Conceptueel Informatiemodel Officiële publicaties.
- [CIM-ORG](https://geonovum.github.io/dso-cim-org/): Conceptueel Informatiemodel (Overheids-)Organisaties.
- [CIM-OW](https://docs.geostandaarden.nl/dso-cim-ow/): Conceptueel Informatiemodel Omgevingswet.
- [CIM-PDC](https://geonovum.github.io/dso-cim-pdc/): Conceptueel Informatiemodel Producten- en Dienstencatalogus.
- [CIM-SWF](https://docs.geostandaarden.nl/dso/dso-cim-swf/): Conceptueel Informatiemodel Samenwerken.
- [CIM-TR](https://geonovum.github.io/dso-cim-tr/): Conceptueel Informatiemodel Toepasbare regels.

Hoewel elk conceptueel informatiemodel één informatiedomein afbeeldt, zijn er
dwarsverbanden en afhankelijkheden tussen de verschillende domeinen. De
conceptuele informatiemodellen worden derhalve in samenhang beheert en
ontwikkelt, teneinde de semantische interoperabiliteit in en met het DSO te
kunnen waarborgen.

## Conceptueel Informatiemodel Omgevingswet.

Het motto van de Omgevingswet is ‘Ruimte voor ontwikkeling, waarborgen voor kwaliteit’. De Omgevingswet staat voor een goede balans tussen het benutten en beschermen van de fysieke leefomgeving. Met benutten wordt bedoeld het doelmatig beheren, gebruiken en ontwikkelen van de fysieke leefomgeving om maatschappelijke behoeften te vervullen. Bij beschermen gaat het over het bereiken en in stand houden van een veilige en gezonde fysieke leefomgeving en een goede omgevingskwaliteit.

## Nieuw stelsel omgevingsrecht

De Omgevingswet bundelt de wetgeving en regels voor ruimte, wonen, infrastructuur, milieu, natuur en water. Met de Omgevingswet wordt het huidige stelsel van ruimtelijke regels volledig herzien en wordt het fundament van het nieuwe stelsel voor het omgevingsrecht gelegd. Bij dit nieuwe stelsel hoort een digitale omgeving waar de dienstverlening efficiënt en gedigitaliseerd kan plaatsvinden, dit wordt ook wel het Digitaal Stelsel Omgevingswet (DSO) genoemd.

Dit document duidt de verschillende onderwerpen en kenmerken die in de Omgevingswet een rol spelen. "*Een conceptueel informatiemodel structureert het begrippenkader en definieert het ‘wat’: welke ‘concepten’ (‘dingen’) worden onderscheiden (in de beschouwde werkelijkheid), wat betekenen zij, hoe verhouden ze zich tot elkaar en welke informatie (eigenschappen) is daarvan relevant*" [[MIM]]. Deze informatie wordt beschreven in de taal, terminologie en definities van dit domein. De informatie in het DSO betreft o.a. juridische regels over activiteiten, functies, omgevingsnormen, omgevingswaarden, beperkingengebieden, en de gebieden waar deze regels van toepassing zijn. Het conceptuele informatiemodel (CIM) in dit document beschrijft daarmee dat deze gegevens beschikbaar zijn vanuit het DSO.

Er is een sterke relatie met dit conceptuele informatiemodel omgevingswet (CIM-OW) en het informatiemodel van het domein van officiële publicaties (CIM-OP). De tekst van een artikel of lid in een regeling die tot het domein van de Omgevingswet behoort gaat inhoudelijk over de in de vorige alinea genoemde informatie. Deze informatie is van belang voor het DSO.

Dit CIM bestaat uit een beschrijving van de informatie, in tekst en UML en is object-georiënteerd. De beschrijving volgt hierbij een standaard voor het beschrijven van informatiemodellen, te weten het metamodel voor informatiemodellen [[MIM]].

## Toelichting bij informatiekundig perspectief

De Omgevingswet is een domein waarin juridische teksten, met juridische regels, en hun werkingsgebieden centraal staan. Dit CIM-OW beschouwt de informatie die hierin aanwezig is in een informatiekundig opzicht. Hiermee wordt bedoeld dat het gaat om welke informatie aanwezig is in deze tekst. 

Bijvoorbeeld, wanneer in de juridische tekst een juridische regel aanwezig is die over een functie gaat en over een aantal activiteiten, zoals:

> Ter plaatse van het werkingsgebied van de functie 'Centrumgebied' is het verrichten van de activiteit wonen toegestaan.

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

Er wordt in het CIM-OW een verschil gemaakt tussen de activiteit met de naam ‘wonen’ en het woord ‘wonen’ dat voorkomt in de tekst van de juridische regel. Zo is ook het centrumgebied uit de tekst van de juridische regel een ander object dan de gebiedsaanwijzing van het centrumgebied.
