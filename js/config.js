let respecConfig = {
  useLogo: true,
  useLabel: true,

  // title is verplicht! Neem hieronder de titel van het document op
  title: "Conceptueel Informatiemodel Omgevingswet",
  //-- specStatus is verplicht! (activeer 1 van de volgende)
  specStatus: "wv",                 // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document

  //-- specType is verplicht bij alle andere dan BASIS
  specType: "IM",                 // Informatie Model

  //-- pubDomain is verplicht! (komt in de URL)
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "dso",

  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  license: "cc-by",                 // Attribution, met bronvermelding

  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)
  //-- Regel: shortName mag geen hoofdletters bevatten.
  shortName: "dso-cim-ow",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht. Als je werkversie gekozen hebt  dan pakt Respec
  //-- de pushdate maar de publishDate is nog steeds verplicht.
  publishDate: "2026-01-09",
  
  //-- publishVersion is verplicht. Hij mag wel leeg zijn [], maar niet de lege string zijn "".
  publishVersion: "3.0",
 
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beide aan/uit! 
  previousPublishDate: "2026-01-09",
  previousMaturity: "def",

  //-- de namen van de Editor(s) / Redacteur(en)
  //-- vul in: per Editor: name:, company:, companyURL:
  editors:
    [
      {
        name: "TPOD team",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],

  //-- de namen van de auteur(s) 
  //-- vul in: per auteur: name:, company:, companyURL: 
  authors:
    [
      {
        name: "TPOD team",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],

  //-- Vul de github URL in.
  //-- neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/dso-cim-ow",


  
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    Basisgeometrie: {
      id: "Basisgeometrie",
      title: "Basisgeometrie",
      href: "https://docs.geostandaarden.nl/nen3610/def-st-basisgeometrie-20200930/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "30 september 2020"
    },
    MIM: {
      id: "MIM",
      title: "MIM - Metamodel Informatie Modellering",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20220217/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2022-02-17"
    },
    CIMOW: {
      id: "CIMOW",
      title: "Conceptueel Informatiemodel Omgevingswet (CIMOW)",
      href: "https://geonovum.github.io/TPOD/CIMOW/CIMOW_v2.1.0.pdf",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2022-01-07"
    },
    IMOW: {
      id: "IMOW",
      title: "Informatiemodel Omgevingswet (IMOW)",
      href: "https://geonovum.github.io/TPOD/CIMOW/IMOW_v2.0.2.pdf",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2023-01-09"
    },
    STOP20: {
      id: "STOP20",
      title: "Standaard Officiële Publicaties",
      href: "https://koop.gitlab.io/STOP/standaard/2.0.0-rc/index.html",
      status: "Release Candidate",
      publisher: "KOOP",
      date: "2023-02-17"
    },
  }
};
