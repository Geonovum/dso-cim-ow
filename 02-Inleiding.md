# Inleiding

Het motto van de Omgevingswet is ‘Ruimte voor ontwikkeling, waarborgen voor kwaliteit’. De Omgevingswet staat voor een goede balans tussen het benutten en beschermen van de fysieke leefomgeving. Met benutten wordt bedoeld het doelmatig beheren, gebruiken en ontwikkelen van de fysieke leefomgeving om maatschappelijke behoeften te vervullen. Bij beschermen gaat het over het bereiken en in stand houden van een veilige en gezonde fysieke leefomgeving en een goede omgevingskwaliteit.

## Nieuw stelsel omgevingsrecht

De Omgevingswet bundelt de wetgeving en regels voor ruimte, wonen, infrastructuur, milieu, natuur en water. Met de Omgevingswet wordt het huidige stelsel van ruimtelijke regels volledig herzien en wordt het fundament van het nieuwe stelsel voor het omgevingsrecht gelegd. Bij dit nieuwe stelsel hoort een digitale omgeving waar de dienstverlening efficiënt en gedigitaliseerd kan plaatsvinden, dit wordt ook wel het Digitaal Stelsel Omgevingswet (DSO) genoemd.

Dit document duidt de verschillende onderwerpen en kenmerken die in de Omgevingswet een rol spelen. "*Een conceptueel informatiemodel structureert het begrippenkader en definieert het ‘wat’: welke ‘concepten’ (‘dingen’) worden onderscheiden (in de beschouwde werkelijkheid), wat betekenen zij, hoe verhouden ze zich tot elkaar en welke informatie (eigenschappen) is daarvan relevant*" [[MIM]]. Deze informatie wordt beschreven in de taal, terminologie en definities van dit domein. De informatie in het DSO betreft o.a. juridische regels over activiteiten, functies, omgevingsnormen, omgevingswaarden, beperkingengebieden, en de gebieden waar deze regels van toepassing zijn. Het conceptuele informatiemodel (CIM) in dit document beschrijft daarmee dat deze gegevens beschikbaar zijn vanuit het DSO.

Er is een sterke relatie met dit conceptuele informatiemodel omgevingswet (CIM-OW) en het informatiemodel van het domein van officiële publicaties (CIM-OP). De tekst van een artikel of lid in een regeling die tot het domein van de Omgevingswet behoort gaat inhoudelijk over de in de vorige alinea genoemde informatie. Deze informatie is van belang voor het DSO.

Dit CIM bestaat uit een beschrijving van de informatie, in tekst en UML en is object-georiënteerd. De beschrijving volgt hierbij een standaard voor het beschrijven van informatiemodellen, te weten het metamodel voor informatiemodellen [[MIM]].

## Scope

CIM-OW bevat minimaal alle Omgevingswet-gerelateerde informatie die uitgewisseld wordt in de keten van plan tot publicatie.

Buiten scope:

- CIM-OW beschrijft niet het domein van officiële overheidspublicaties (OP) zelf. Concepten zoals <i>artikel</i> of <i>lid</i> zijn wel relevant voor het DSO, maar staan in IMOP gedefinieerd en niet in CIM-OW.
- Gegevens ten behoeve van de implementatie van het informatiemodel, zoals een aanlevermanifest.

## Toelichting bij informatiekundig perspectief

De Omgevingswet is een domein waarin juridische teksten, met juridische regels, en hun werkingsgebieden centraal staan. Dit CIM-OW beschouwt de informatie die hierin aanwezig is in een informatiekundig opzicht. Hiermee wordt bedoeld dat het gaat om welke informatie aanwezig is in deze tekst. 

Bijvoorbeeld, wanneer in de juridische tekst een juridische regel aanwezig is die over een functie gaat en over een aantal activiteiten, zoals:

> Ter plaatse van het werkingsgebied van de functie 'Centrumgebied' is het verrichten van de activiteit wonen toegestaan.

In informatiekundig opzicht betekent dit:

-   een juridische regel – te weten de tekst van de juridische regel
    -   een relatie naar een locatie/gebied, in de fysieke leefomgeving, waar de regel in werking is
-   een gebied (in de fysieke leefomgeving) met een geometrie (van het centrumgebied)
-   een gebiedsaanwijzing van het type functie – centrumgebied
    -   een relatie tussen de juridische regel en de gebiedsaanwijzing
    -   een relatie naar een locatie/gebied, in de fysieke leefomgeving, waar de functie voor geldt
-   een activiteit – wonen
    -   een relatie tussen de juridische regel en de activiteit
    -   een relatie naar een locatie/gebied, in de fysieke leefomgeving, waar de activiteit voor geldt.

Er wordt in het CIM-OW een verschil gemaakt tussen de activiteit met de naam ‘wonen’ en het woord ‘wonen’ dat voorkomt in de tekst van de juridische regel. Zo is ook het centrumgebied uit de tekst van de juridische regel een ander object dan de gebiedsaanwijzing van het centrumgebied.
