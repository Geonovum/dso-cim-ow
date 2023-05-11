## Overzicht kenmerken

Dit hoofdstuk geeft een overzicht van alle onderkende kenmerken van de in de vorige bladzijden genoemde objecttypes. Deze kenmerken zijn gemodelleerd als attribuutsoorten, gegevensgroepen en relaties. Verder is van elk kenmerk het datatype aangegeven (in geel, en zijn verder uitgelegd in <a href='#_Ref39048559'>0<a></a>). De objecttypen zijn gegroepeerd per bij elkaar horende objecttypen, vaak herkenbaar aan dezelfde kleur.

### Toelichting juridische kenmerken en verplichte informatie

Van alle beschreven kenmerken waarvan gegevens wordt bijgehouden is in dit informatiemode aangegeven of deze juridisch van aard zijn. Dit kan zijn Ja of Nee.

Dit wordt bijvoorbeeld aangegeven bij het kenmerk ‘Naam’ van een Activiteit. De oorsprong hiervan is te vinden in welke informatie juridisch opgenomen kan worden in de regelgeving rondom het bekendmaken van omgevingsdocumenten van de Omgevingswet. Deze informatie is aldaar aanwezig. Als deze informatie daar verplicht is, dan is deze informatie in dit CIMOW ook verplicht. Als deze informatie daar optioneel is, dan is deze informatie in dit CIMOW ook optioneel. Aanvullend kent dit CIMOW andere verplichte velden, die niet vanuit de juridische insteek verplicht zijn, maar welke wel altijd aanwezig (moet) zijn als informatie in het domein van de Omgevingswet<span class='noot'>[5]<span class='noottekst'> Voor gegevens die juridisch niet verplicht zijn maar informatiekundig wel: dit betekent <u>niet</u> <u>per</u> <u>se</u> dat deze informatie via het bekendmakingsproces van de LVBB <u>moet</u> worden geleverd, maar het is wel de bedoeling dát deze informatie wordt geleverd.<br/><br/></span></span>.

### <a name='_Ref37969091'></a>Context

Het contextmodel zit in het CIMOW om gegevens over de context zichtbaar te maken. Hier staan de objecten ‘BevoegdGezag’ en ‘Omgevingsdocument’ zodat de gehele keten van plan tot publicatie over deze gegevens beschikt. ‘Ambtsgebied’ is opgenomen in deze afbeelding om te duiden dat dit iets anders is dan het regelingsgebied.

<figure><img src='media/image4.svg' alt='media/image4.svg' style='width: 100%;'></img>
<figcaption>Figuur 2: Contextmodel</figcaption></figure>

#### <a name='_Ref53481494'></a><a name='_Ref37921963'></a><a name='_Ref39495243'></a><a name='_Ref42777772'></a>Objecttype BevoegdGezag

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De naam van het bevoegd gezag: bijvoorbeeld Gemeente Amsterdam.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort code

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>code

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De code van het bevoegd gezag; bijvoorbeeld gm0037. Deze worden landelijk vastgesteld. Tevens kunnen deze codes gebruikt worden bij de identificatie van OW-objecten.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

#### Objecttype Omgevingsdocument

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort officieleTitel

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>officieleTitel

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De volledige, officiële titel van het omgevingsdocument zoals die door het bevoegd gezag is vastgesteld.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Relatiesoort aangeleverd door een

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>aangeleverd door een

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het bevoegd gezag dat een bepaald omgevingsdocument aanlevert.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bevoegd gezag

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><span style='color: #auto;'<u>Een omgevingsdocument wordt aangeleverd door een bevoegd gezag. Deze relatie is aanwezig in het CIMOW zodat het stelsel deze gegevens kan uitleveren. (Dit wordt niet specifiek aangeleverd via IMOW.)</u></span>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>aangeleverdDoor

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

#### Objecttype Regeling

##### Attribuutsoort type

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Type

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het type Regeling dat aangeleverd wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bijvoorbeeld: omgevingsplan of omgevingsverordening.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Regelingsoort

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort citeertitel

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Citeertitel

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De titel van de Regeling zoals deze wordt gebruikt in aanhalingen.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bijvoorbeeld: Omgevingsplan Amsterdam.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort opschrift

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Opschrift

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het opschrift van de Regeling. Deze dient overeen te komen met de officiële titel van de Regeling.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort conditie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Conditie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het attribuut Conditie beschrijft wat de verhouding is tussen dit tijdelijk deel en de hoofdregeling.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Relatiesoort tijdelijkDeelVan

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>tijdelijkDeelVan

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Attribuut dat de relatie aangeeft tussen twee Regelingen, waarbij de Regeling die een tijdelijk deel is tijdelijk voorrang heeft boven de Regeling waarmee het deze relatie heeft.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Regeling

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><span style='color: #auto;'<u>Een voorbeeld van een omgevingsdocument dat tijdelijk deel uitmaakt van een ander omgevingsdocument is als er een voorbereidingsbesluit wordt getroffen op een omgevingsplan.</u></span>

<span style='color: #auto;'<u>In het DSO is dit uitgewerkt als oplossing voor het meervoudig bronhouderschap (het concept dat het ene omgevingsdocument invloed kan uitoefenen op een ander omgevingsdocument). Momenteel zijn er twee gevallen bekend waarbij een Omgevingsdocument invloed kan uitoefenen op een ander omgevingsdocument.</u></span>

<ul><li><span style='color: #auto;'<u>Een voorbereidingsbesluit kan voorbeschermingsregels opstellen die tijdelijk deel uitmaken van een omgevingsplan</u></span><span style='color: #auto;'<u>.</u></span></li>
<li><span style='color: #auto;'<u>Een reactieve interventie kan tijdelijk deel uitmaken van een omgevingsplan, doordat het een (deel van een) wijzigingsbesluit verwerpt.</u></span></li>
</ul>

<span style='color: #auto;'<u>In beide gevallen prevaleert het</u></span> <span style='color: #auto;'<u>tijdelijkdeel</u></span> <span style='color: #auto;'<u>boven het omgevingsplan.</u></span>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>isTijdelijkDeelVan

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### <a name='_Ref37969081'></a>Relatiesoort opvolgerVan

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>opvolgerVan

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De Regeling die een andere Regeling vervangt (en daarmee de opvolger van de oude Regeling is).

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Regeling

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><span style='color: #auto;'<u>Een</u></span> <span style='color: #auto;'<u>omgevingsdocument k</u></span><span style='color: #auto;'<u>an een ander omgevingsdocument</u></span> <span style='color: #auto;'<u>opvolgen</u></span><span style='color: #auto;'<u>. Hiermee wordt aangegeven dat dit gebeurd is.</u></span> 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>isOpvolgerVan

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Relatiesoort heeft regelingsgebied

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>heeft regelingsgebied

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Regeling heeft een regelingsgebied, het gebied waar de gehele regeling regels of beleid over stelt.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een regelingsgebied wordt expliciet meegeleverd met een aanlevering vanuit IMOW. In IMOW is dit een objecttype, in het CIMOW wordt dit gezien als relatie tussen het omgevingsdocument en de locatie.

<span style='color: #auto;'<u>Het regelingsgebied</u></span> <span style='color: #auto;'<u>is niet</u></span> <span style='color: #auto;'<u>altijd</u></span> <span style='color: #auto;'<u>hetzelfde als h</u></span><span style='color: #auto;'<u>et Ambtsgebied. Er zijn Regelingen, zoals bijv. een projectbesluit of een Instructie waarbij het</u></span> <span style='color: #auto;'<u>r</u></span><span style='color: #auto;'<u>egelingsgebied anders is dan</u></span> <span style='color: #auto;'<u>een Ambtsgebied.</u></span>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>locatieaanduiding

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OW

</td>
</tr>
</tbody>
</table>

#### Objecttype Omgevingsvergunning

##### Attribuutsoort referentienummer

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>referentienummer

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een waarde die door het bevoegd gezag toegekend is aan de omgevingsvergunning de t.b.v. het identificeren ervan.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort type

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Type

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het type Vergunning dat aangeleverd wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Op het moment van schrijven is er geen onderscheid gemaakt in typen omgevingsvergunningen. Echter zal dit nog komen.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Vergunningsoort

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort omschrijving

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Omschrijving

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De inhoudelijke omschrijving van de Omgevingsvergunning. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Op het moment van schrijven is er nog geen inhoudelijke omschrijving bij de omgevingsvergunningen voor het DSO. Echter zal dit nog komen.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort IMRO-planidentificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>IMRO-planidentificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het identificerende kenmerk van het IMRO-plan waar met de omgevingsvergunning van wordt afgeweken.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort publicatie-ID

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Publicatie-ID

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het ID van de kennisgeving van de omgevingsvergunning.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Relatiesoort heeft vergunningsgebied

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>heeft vergunningsgebied

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een omgevingsvergunning heeft een vergunningsgebied, het gebied waarvoor de omgevingsvergunning verleend is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een vergunningsgebied wordt expliciet meegeleverd bij de aanlevering van de Vergunning.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>locatieaanduiding

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

#### Objecttype Besluit

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort publicatie-ID

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>publicatie-ID

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het id van het publicatieblad waar het besluit in is vastgesteld.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Gegevensgroeptype BesluitStatus

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>BesluitStatus

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De status behorende bij het Besluit.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort onherroepelijkVanaf, van gegevensgroeptype BesluitStatus

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>onherroepelijkVanaf

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Datum die aangeeft vanaf welk moment een besluit onherroepelijk is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Date

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort geschorstVanaf, van gegevensgroeptype BesluitStatus

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>geschorstVanaf

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Datum die aangeeft vanaf welk moment een besluit geschorst is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Date

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort toelichtingURL, van gegevensgroeptype BesluitStatus

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>toelichtingURL

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De plek waar het bevoegd gezag een toelichting kan plaatsen omtrent de reden van schorsing van het Besluit.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Relatiesoort consolideert

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Consolideert

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het vanuit een besluit wijzigen of instellen van een Regeling. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Regeling

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Regeling wordt geconsolideerd door besluiten, dit betekent dat je een regeling kunt bijwerken door middel van het nemen van een besluit. Het bijwerken van zo’n regeling wordt ook wel ‘consolideren’ genoemd.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>is gewijzigd door

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

### Regels

Het hart van de Omgevingswet wordt gevormd door juridische regels. Hiervan worden volgende kenmerken bijgehouden, als volgt:

<figure><img src='media/image6.svg' alt='media/image6.svg' style='width: 100%;'></img>
<figcaption>left360890<div class='textbox'>Toelichting bij het diagram: objecttypen hebben vaak relaties naar andere objecttypen, te herkennen aan de pijl met de aanduiding «Relatiesoort». Soms betreft dit een relatie naar een objecttype in dezelfde groepering, zoals in dit geval in de groepering Regels, van Juridische Regel naar Regeltekst. Soms betreft dit een relatie naar een objecttype in een andere groepering, herkenbaar aan een andere kleur. Zo is in bovenstaande diagram te zien dat er een relatie naar een Locatie is, maar deze Locatie heeft in dit diagram geen kenmerken. Dat komt omdat Locatie is ondergebracht in een andere groepering, genaamd Locaties. Aldaar zijn de kenmerken van Locatie beschreven en ook zichtbaar gemaakt in het diagram aldaar. Regeltekst hoort wel bij de groepering van Regels, maar is een beetje anders is dan de andere regels, omdat Regeltekst ook de koppeling met het OP-domein verzorgt. Om dit aan te geven is Regeltekst donkerblauw gemaakt.

</div>

00<div class='textbox'>Toelichting bij het diagram: objecttypen hebben vaak relaties naar andere objecttypen, te herkennen aan de pijl met de aanduiding «Relatiesoort». Soms betreft dit een relatie naar een objecttype in dezelfde groepering, zoals in dit geval in de groepering Regels, van Juridische Regel naar Regeltekst. Soms betreft dit een relatie naar een objecttype in een andere groepering, herkenbaar aan een andere kleur. Zo is in bovenstaande diagram te zien dat er een relatie naar een Locatie is, maar deze Locatie heeft in dit diagram geen kenmerken. Dat komt omdat Locatie is ondergebracht in een andere groepering, genaamd Locaties. Aldaar zijn de kenmerken van Locatie beschreven en ook zichtbaar gemaakt in het diagram aldaar. Regeltekst hoort wel bij de groepering van Regels, maar is een beetje anders is dan de andere regels, omdat Regeltekst ook de koppeling met het OP-domein verzorgt. Om dit aan te geven is Regeltekst donkerblauw gemaakt.

</div>

Figuur 3: Regels</figcaption></figure>

#### <a name='_Ref37921451'></a><a name='_Ref37921951'></a>Objecttype Regeltekst

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Constraint</b><b>(s)</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>\{ <b>één type juridische regel per regeltekst</b>\}

Er zijn drie subtypen van Juridische regels onderkend, namelijk: Regel voor iedereen, instructieregel en omgevingswaarderegel. Het is niet toegestaan twee van deze typen Juridische regel te vermengen in hetzelfde Artikel (Regeltekst). Dit wordt gevalideerd door het stelsel. 

\{ <b>indien</b> <b>Artikel is onderverdeeld in L</b><b>eden,</b> <b>annotaties alleen op Leden</b>\}

Deze constraint houdt in dat als er een Juridische regel is die (via een Regeltekst) verwijst naar een Lid in een Artikel, er geen verwijzingen mogen voorkomen die verwijzen naar het Artikel waarin dat Lid voorkomt. Kortom indien het artikel is onderverdeeld in Leden, dan mag er alleen geannoteerd worden op Leden.

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort omschrijving

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>omschrijving

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De letterlijke tekst waarmee de Regeltekst is omschreven, in een artikel of een lid. Een Regeltekst is altijd één doorlopend stuk juridische tekst, welke juridische regels bevat. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Met één doorlopende tekst wordt bedoeld dat er geen sprake is van eerst een stuk tekst dat behoort tot de eerste Regeltekst, dan een stuk tekst dat behoort tot een andere Regeltekst, en dan weer een stuk tekst dat behoort tot de eerste Regeltekst. Een Regeltekst kan niet verspreid staan over meerdere stukken tekst, oftewel wordt niet afgewisseld door andere stukken tekst die niet tot dezelfde Regeltekst behoren.

Bepaalde juridische kenmerken, vooral details die niet in een lopende tekst passen zoals geometrie of een tabel met normwaarden, worden vanwege pragmatische redenen buiten de lopende tekst zelf vastgelegd. Deze juridische kenmerken behoren wél tot de juridische regel, waar de Regeltekst over gaat en daarmee tot de Regeltekst, ook al staan ze niet in de lopende tekst genoemd. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort thema 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 29.889746416758545%;'
<col id='col2' style='width: 69.88974641675854%;'
<col id='col3' style='width: 0.2205071664829107%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>thema

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Kernachtige weergave van de grondgedachte achter een regel. Een thema kent geen locatie.

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Thema (waardelijst) 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het thema is een categorisering, waar een juridische regel binnen valt. 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Afgeleid gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Ja</b>

Dit gegeven wordt afgeleid van het attribuutsoort Thema van de Juridische regels die zijn opgenomen in deze Regeltekst. 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

##### Relatiesoort heeft werking in 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>heeft werking in

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het werkingsgebied c.q. de locatie begrenst de juridische werking van de regeltekst, in juridische zin, te weten dat deze regeltekst alleen binnen dit werkingsgebied juridische werkingskracht heeft.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Elke Regeltekst heeft een werkingsgebied. Deze wordt niet aangeleverd door het bevoegd gezag maar afgeleid door het stelsel.

Hierbij maakt het stelsel gebruik van de volgende regel:

<i>de som van de locatie van de juridische regels die verwijzen naar dezelfde regeltekst</i> <i>is het werkingsgebied.</i>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>werkingsgebied

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OW

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

##### Relatiesoort gerelateerd 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>gerelateerd 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De verwijzing van een specifieke Regeltekst naar een andere Regeltekst die aangeeft dat er een bijzondere relatie bestaat tussen die twee Regelteksten.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Regeltekst 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De specifieke aard van de relatie is vooralsnog nog een punt van uitwerking. De relatie geeft tot die tijd aan dat er sprake is van “een” relatie, waarbij uit de context blijkt wat deze relatie is.

Niet te verwarren met Thema, welke veel breder is bedoeld (al zullen gerelateerde hoofdlijnen vaak prima onder hetzelfde thema kunnen vallen). 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OW 

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref39495553'></a>Objecttype Juridische regel (abstract)

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### <a name='detail_attribute_Regel_JuridischeRegel_r'></a><a name='detail_attribute_Regel_JuridischeRegel_n'></a>Attribuutsoort idealisatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>idealisatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Vastlegging van de manier de begrenzing van Locatie voor deze Juridische regel geïnterpreteerd moet worden en door het bevoegd gezag bedoeld is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Idealisatie (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Voorbeeld: exact, indicatief. Indicatief kan gebruikt worden wanneer een grens berekend is en mogelijk niet overal geheel rekening houdt met de fysieke situatie ter plaatse. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort omschrijving

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>omschrijving

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Één doorlopend stuk juridische tekst, van een artikel of een lid, die omschrijvingen van (een of meer) juridische regels bevat.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een regel wordt meestal omschreven met een of enkele volzinnen, in één doorlopend stuk tekst. Echter, in precies welk deel van de tekst een specifieke juridische regel omschreven wordt, oftewel waar in de tekst de regel precies begint en ophoudt, is soms lastig te bepalen. Dit is bijvoorbeeld zo bij een opsomming, waarbij de aanhef van de opsomming bij elk onderdeel van de opsomming hoort. Wat precies allemaal wel tot de tekst van één regel behoort is niet iets wat vastgesteld wordt in dit CIM. De regel is informatiekundig gewoon een van de tekstuele onderdelen van een artikel of lid (of …). De regel is daarom aldaar terug te vinden in de tekst van het artikel of lid, deze regel bevattende tekst wordt in dit CIMOW de <u>regeltekst</u> genoemd. In deze regeltekst zal de omschrijving in tekst van de juridische regel gevonden kunnen worden.

Bepaalde juridische kenmerken die niet goed in een lopende tekst passen, zoals informatie van een geometrie of een tabel met normwaarden, worden vanwege pragmatische redenen buiten de lopende tekst zelf vastgelegd. In de tekst wordt dan een verwijzing aangebracht naar deze informatie. De informatie van juridische kenmerken zijn er een onderdeel van de juridische regel en zijn juridisch van belang, ook al staan ze buiten de lopende tekst.

Als er sprake is van een (informatiekundige, als object bijgehouden) omgevingsnorm of omgevingswaarde, dan zijn de (informatiekundige) normwaarden altijd buiten de tekst opgenomen. Vanuit de tekst wordt daar dan naar verwezen. In dit CIM komt dit overeen met een relatie naar het objecttype omgevingswaarde of omgevingsnorm. Het is ook mogelijk om de normstelling alleen in de Juridische regel op te nemen, dus zonder gebruik te maken van het informatiekundige object omgevingsnorm of omgevingswaarde. Bijvoorbeeld, er geldt een algemeen rookverbod in de openbare ruimtes die geopend zijn voor publiek. Er is dan geen sprake van een verwijzing naar een buiten de tekst aanwezige normwaarde én er is dan in informatiekundige zin geen sprake van een omgevingsnorm of omgevingswaarde.

Bij het koppelen van een juridische regel aan een functie, activiteit, omgevingsnorm, omgevingswaarde of beperkingengebied kan er gebruik gemaakt worden van een standaardfrase. Dit maakt het duidelijk dat er een verwijzing, naar een informatiekundig object wordt gelegd, oftewel de ‘geldt voor’ relatie. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort thema 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 29.889746416758545%;'
<col id='col2' style='width: 69.88974641675854%;'
<col id='col3' style='width: 0.2205071664829107%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>thema

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Kernachtige weergave van de grondgedachte achter een regel. Een thema kent geen locatie.

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Thema (waardelijst) 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het thema is een categorisering, waar een juridische regel binnen valt. De waardelijst is dezelfde als voor Tekstdeel, om thematisch informatie, over alle objecten heen, te kunnen zoeken.

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

##### Relatiesoort definieert

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>definieert

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Juridische regel definieert een locatie, die bestaansrecht heeft doordat de regel ernaar verwijst. De locatie begrenst de werking van de regel in juridische zin, te weten dat deze regel alleen voor deze locatie werkingskracht heeft. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>In spreektaal kent elke Juridische regel een locatie, die aangeduid wordt vanuit de regel. Informatiekundig wordt geduid dat de regel een relatie heeft met deze Locatie, oftewel een verwijzing is die locatieaanduiding heet, en dat deze Locatie een Gebied kan zijn, of een Gebiedengroep, of een Punt, of een Puntengroep, of een Lijn of een lijnengroep.

Het feit dat er naar een locatie verwezen wordt vanuit een Juridische regel geeft bestaansrecht aan de locatie. Daarom <b>definieert</b> de regel de locatie en hierna kan er naar deze locatie verwezen worden. Uiteraard gebeurd dit vanuit de regel, maar er kan ook naar verwezen worden vanuit andere regels of vanuit andere objecttypes, zoals vanuit de activiteit waar de regel over gaat. De regel en de activiteit verwijzen dan naar dezelfde locatie. De locatie wordt niet anders als gevolg van dat ernaar verwezen wordt. De verwijzing gebeurt altijd met de betekenis zoals bedoeld in de regel die naar de locatie verwijst. Daarom verwijst de regel naar de locatie, en niet andersom.

Let wel, er kan sprake zijn dat een activiteit in meerdere regels wordt beschreven. Als Juridische regel 1 de Activiteit A definieert op Locatie 1 en Juridische regel 2 dezelfde Activiteit A definieert op Locatie 2 dan resulteert dit erin dat activiteit A verbonden is met Locatie 1 én Locatie 2. Ditzelfde geldt ook voor andere objecten, zoals gebiedsaanwijzingen en normen.

In spreektaal worden de locaties waar de regel naar verwijst tezamen ook wel eens het werkingsgebied van de regel genoemd. Echter, de term werkingsgebied in CIMOW is gereserveerd voor de regeltekst, omdat alleen de regeltekst werking geeft, aan de regels <u>in</u> de regeltekst<span class='noot'>[6]<span class='noottekst'> <span style='color: #auto;'<u>Er is een bijzondere verhouding tussen het werkingsgebied van de juridische regels in een regeltekst en het werkingsgebied van de regeltekst. Deze verhouding is beschreven in het</u></span> <span style='color: #auto;'<u>OP-domein</u></span> <span style='color: #auto;'<u>\[OP\] en bij de Regeltekst.</u></span> Uitgangspunt is dat het werkingsgebied van de Regeltekst dekkend is voor de Juridische regels die in de Regeltekst zijn opgenomen. Vanuit informatiekundig perspectief hebben Juridische regels die geometrisch buiten het werkingsgebied van de Regeltekst vallen, voor het deel dat erbuiten valt, geen werking.<br/><br/></span></span>. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>locatieaanduiding

</td>
</tr>
</tbody>
</table>

##### Relatiesoort is opgenomen in 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>is opgenomen in

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De regeltekst waarin de juridische regel te vinden is en waarin de tekstuele omschrijving van de regel te lezen is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><a href='#0FC28A10'>Regeltekst</a>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bij elkaar behorende juridische regels behoren als één groep bij elkaar, die als geheel beschouwd en gelezen moet worden. Deze worden bij elkaar opgenomen in één Regeltekst. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Artikel of lid

</td>
</tr>
</tbody>
</table>

##### Relatiesoort beschrijft een gebiedsaanwijzing

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>beschrijft een gebiedsaanwijzing

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bij een regel die een gebiedsaanwijzing vastlegt geeft deze relatie aan om welke gebiedsaanwijzing het gaat. De bijbehorende locatie(s) waar het om gaat is/zijn bij de gebiedsaanwijzing zelf te vinden.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Gebiedsaanwijzing

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een juridische regel kan een of meerdere activiteiten, normen, gebiedsaanwijzingen en/of een beperkingengebied beschrijven. Als de regel geen enkele van deze beschrijft, dan is de regel een op zichzelf staande normstellende regel.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Gebiedsaanwijzing

</td>
</tr>
</tbody>
</table>

#### Objecttype Instructieregel

##### Attribuutsoort instructieregel instrument 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Instructieregel instrument 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De naam van het instrument waartoe de instructieregel zich richt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>InstructieregelInstrument (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><span style='color: #000000;'Bijvoorbeeld: Omgevingsverordening, projectbesluit.</span>

Dit kenmerk geeft nadere informatie in aanvulling op het type instructieregel, in het geval dat de regel gericht is op een bepaald instrument.

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort instructieregel taakuitoefening

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Instructieregel taakuitoefening 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het bestuursorgaan dat of de organisatie die de taak waarover de juridische regel gaat, moet uitvoeren.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Adressaat (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bijvoorbeeld gemeentebestuur, wildbeheereenheid.

Dit kenmerk geeft nadere informatie in aanvulling op het type instructieregel, in het geval dat de regel gericht is aan een bepaald uitvoeringsorgaan.

</td>
</tr>
</tbody>
</table>

##### Relatiesoort beschrijft een gebiedsaanwijzing

Zie definitie bij Juridische regel.

##### Relatiesoort beschrijft een omgevingsnorm

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>beschrijft een omgevingsnorm

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bij een regel die een omgevingsnorm vastlegt geeft deze relatie aan om welke het gaat. De bijbehorende locatie(s) waar het om gaat is/zijn bij de normwaardes van de omgevingsnorm zelf te vinden.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Norm 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een juridische regel kan een of meerdere activiteiten, normen, gebiedsaanwijzingen en/of een beperkingengebied beschrijven. Als de regel geen enkele van deze beschrijft, dan is de regel een op zichzelf staande normstellende regel.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>omgevingsnorm aanduiding

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref42777735'></a><a name='_Ref42777743'></a>Objecttype Regel voor iedereen

##### Relatiesoort beschrijft een gebiedsaanwijzing

Zie definitie bij Juridische regel.

##### Relatiesoort beschrijft een omgevingsnorm

Zie definitie bij instructieregel.

##### Relatiesoort normeert een activiteit

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>normeert een activiteit

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een regel voor iedereen normeert (stelt regels over) een activiteit.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Activiteit 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Regel voor iedereen normeert een activiteit, dit betekent dat deze regels stelt over de activiteit en waar deze mag voorkomen. Dit gebeurt middels een verwijzing naar de specifieke activiteit (activiteitaanduiding) en de relatieklasse ActiviteitLocatieaanduiding, die ervoor zorgt dat de regel die iets zegt over de activiteit geïnstantieerd kan worden.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>activiteitaanduiding

</td>
</tr>
</tbody>
</table>

##### <a name='_Ref38293928'></a><a name='detail_attribute_Regel_JuridischeRegel_o'></a>Gegevensgroeptype ActiviteitLocatieaanduiding

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>ActiviteitLocatieaanduiding

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het voorkomen van een activiteit vanuit een Juridische regel. Hiermee wordt een activiteit op een bepaalde locatie gereguleerd.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een gegevensgroeptype is geen object. Het is een apart type modelelement om een groep van kenmerken in onder te brengen, te weten de beschrijving van de activiteitlocatieaanduiding, de kwalificatie en de locatie waarvoor deze geldt. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort identificatie, van gegevensgroeptype ActiviteitLocatieaanduiding

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort activiteitregelkwalificatie, van gegevensgroeptype ActiviteitLocatieaanduiding 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>activiteitregelkwalificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De naam van de kwalificatie van de Juridische regel over een activiteit. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Activiteitregelkwalificatie (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bijvoorbeeld: gebod, verbod.

Dit gebod of verbod wordt gesteld vanuit de juridische regel, maar geldt voor de activiteit op een bepaalde locatie.

</td>
</tr>
</tbody>
</table>

##### Relatiesoort kwalificeert, van gegevensgroeptype ActiviteitLocatieaanduiding

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Kwalificeert

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De locatie die gekwalificeerd wordt door de regel die aangeeft of een activiteit daar plaats mag vinden of niet, en welke voorwaarden hier aan verbonden zijn.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een ActiviteitLocatieaanduiding geeft aan welke kwalificatie geldt met betrekking tot een activiteit op een bepaalde locatie. Dit attribuut bevat de verwijzing naar deze locatie.

Bijvoorbeeld: fietsen (activiteit) is toegestaan (kwalificatie) in het stiltegebied (locatie).

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatieaanduiding

</td>
</tr>
</tbody>
</table>

#### Objecttype Omgevingswaarderegel

##### Relatiesoort beschrijft een omgevingswaarde

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>beschrijft een omgevingswaarde

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bij een regel die een omgevingswaarde vastlegt geeft deze relatie aan om welke omgevingswaarde het gaat. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Norm 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De bijbehorende normwaardes (en locatie(s) waar het per normwaarde over gaat) zijn bij de normwaardes van de omgevingswaarde zelf te vinden.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>omgevingswaarde aanduiding

</td>
</tr>
</tbody>
</table>

##### <a name='detail_attribute_Regel_JuridischeRegel_t'></a><a name='_Objecttype_Regeltekst_2'></a>Relatiesoort beschrijft een gebiedsaanwijzing

Zie definitie bij Juridische regel.

### Locaties

De inrichting van de leefomgeving is gebaseerd op geografische gebieden. Hiervan worden volgende kenmerken bijgehouden, als volgt:

<figure><img src='media/image8.svg' alt='media/image8.svg' style='width: 100%;'></img>
<figcaption>Figuur 4: Locaties</figcaption></figure>

#### <a name='_Objecttype_Locatie_1'></a>Objecttype Locatie (abstract)

Het modelelement Locatie beschrijft de kenmerken die het Gebied en de Gebiedengroep (informatiekundig en modelmatig) gemeenschappelijk hebben.<a name='detail_attribute_RegelsOpLocatie_Locatie'></a>

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een uniek identificerend gegeven. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het identificerende gegeven is functioneel en vaststaand. Deze is altijd te gebruiken als hét uniek identificerende gegeven van een object, met zijn kenmerken. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort noemer

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>noemer

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Tekstuele beschrijving van een Locatie, zodat er als zodanig over deze locatie gesproken kan worden. De beschrijving kan een functionele naam zijn of bepaalde naam zijn waaronder de Locatie bekend staat, maar (lang) niet elke Locatie heef een naam. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De noemer is geen categorisering, maar een uitleg of toelichting die de locatie nader beschrijft.

Bijvoorbeeld: het kustfundament van Nederland, het Natuurnetwerk, Centrumgebied, of een naamloos gebied. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

#### <a name='_Objecttype_Gebied'></a>Objecttype Gebied

Een Gebied heeft alle eigenschappen van een Locatie, aangevuld met de volgende:<a name='detail_attribute_RegelsOpLocatie_Gebied_'></a>

##### Attribuutsoort geometrie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>geometrie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De geometrische begrenzing van het gebied. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>GM_Surface of een GM MultiSurface. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Voorbeeld: Nederland. Nederland heeft bij Baarle-Nassau enclaves en Baarle-Nassau zelf is een multisurface in de BAG. Nederland is functioneel één geheel, en dus één MultiSurface (en is niet een Gebiedengroep).

Een Multisurface wordt gebruikt als één functioneel gebied uit meerdere vlakken bestaat (multi keer een vlak), waarbij elk vlak een gescheiden ligging heeft (niet aangrenzend en niet overlappend). 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort hoogte

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>hoogte

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De hoogte waarop de geometrie ligt, in meters. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>WaardeEenheid (gestructureerd datatype) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De eenheid heeft altijd te maken met meters. Dit kan zijn:

<ul><li>meter - er wordt dan standaard bedoeld, meters boven NAP.</li>
<li>meters boven maaiveld - er wordt dan niet bedoeld meters boven NAP, maar meters t.o.v. het maaiveld.</li>
</ul>

Niet te verwarren met bijvoorbeeld de hoogte van een geluidshoogteplafond, die opgesteld wordt in decibel.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort bron

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>bron

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De bron die is gebruikt voor de geometrie, dan wel de wijze van inwinning van de geometrie. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bron (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De bron geeft de herkomst aan van de geometrie, en geeft hiermee een nadere duiding aan de wijze waarop de geometrie tot stand is gekomen en is vastgesteld. De geometrie kan zelf ingewonnen zijn, via een bepaalde methode van inwinning, zoals ingemeten of berekend (bijvoorbeeld een cirkel). De geometrie kan ook afkomstig zijn van een externe bron, zoals van een basisregistratie (met geometrie).

De bron is met name van belang bij juridische kwesties, wanneer het van belang is om te weten op basis van welke referentieondergrond is dit besluit genomen. Bronnen zoals een basisregistratie (met geometrie) kennen zelf een bepaalde nauwkeurigheid. Deze nauwkeurigheid wordt dan bedoeld. 

</td>
</tr>
</tbody>
</table>

#### Objecttype Gebiedengroep

Een Gebiedengroep heeft alle eigenschappen van een Locatie, aangevuld met de volgende:

##### Relatiesoort omvat

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Omvat

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De gebieden in een gebiedengroep. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Gerelateerd ob</b><b>j</b><b>ecttype</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Gebied 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een Gebiedengroep omvat Gebieden, en kan geen Gebiedengroep omvatten. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Relatie rol</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Groepselement

</td>
</tr>
</tbody>
</table>

#### <a name='detail_class_RegelsOpLocatie_LocatieGroe'></a><a name='detail_class_RegelsOpLocatie_Norm'></a>Objecttype Punt

Een Punt heeft alle eigenschappen van een Locatie, aangevuld met de volgende:

##### Attribuutsoort geometrie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>geometrie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De geometrische bepaling van de punt door middel van coördinaten.

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort hoogte

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>hoogte

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Zie Gebied. 

</td>
</tr>
</tbody>
</table>

#### Objecttype Puntengroep

Een Puntengroep heeft alle eigenschappen van een Locatie, aangevuld met de volgende:

##### Relatiesoort omvat

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>omvat

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De punten in een puntengroep. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>GM_Point

</td>
</tr>
</tbody>
</table>

#### Objecttype Lijn

Een Lijn heeft alle eigenschappen van een Locatie, aangevuld met de volgende:

##### Attribuutsoort geometrie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>geometrie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Zie Gebied. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>GM_Curve

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort hoogte

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>hoogte

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Zie Gebied. 

</td>
</tr>
</tbody>
</table>

#### Objecttype Lijnengroep

Een Lijnengroep heeft alle eigenschappen van een Locatie, aangevuld met de volgende:

##### Relatiesoort omvat

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>omvat

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De lijnen in een lijnengroep. 

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref52980809'></a>Objecttype Ambtsgebied

##### Attribuutsoort geometrie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Geometrie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een vlak met een externe buitengrens, en optioneel interne uitsneden. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>VlakOfMultivlak

</td>
</tr>
</tbody>
</table>

##### Gegevensgroeptype BestuurlijkeGrenzenVerwijzing

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>BestuurlijkeGrenzenVerwijzing

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De bron van het object, in het geval van het Ambtsgebied zal de bron het BestuurlijkGebied zijn uit de Bestuurlijke Indeling.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>bestuurlijkegrenzen-voorziening

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort BestuurlijkeGrenzenID van gegevensgroeptype BestuurlijkeGrenzenVerwijzing

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>BestuurlijkeGrenzenID

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De identificatie zoals het ambtsgebied c.q. openbare lichaam heeft in de bestuurlijkegrenzen-voorziening

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>bestuurlijkegrenzen-voorziening

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort domein van gegevensgroeptype BestuurlijkeGrenzenVerwijzing

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>domein

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het domein waar het ambtsgebied te vinden is, doorgaans zal dit gevuld zijn met een verwijzing naar de bestuurlijkegrenzen-voorziening.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>bestuurlijkegrenzen-voorziening

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort geldigOp van gegevensgroeptype BestuurlijkeGrenzenVerwijzing

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>geldigOp

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Datum van het ambtsgebied waar het bevoegd gezag naar wil verwijzen.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Date

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>bestuurlijkegrenzen-voorziening

</td>
</tr>
</tbody>
</table>

### Regels op locatie

Als je regels en locaties bij elkaar brengt dan is af te leiden dat regels voor een bepaald gebied gelden. Regels kunnen op zichzelf gelden, maar gaan veelal over een activiteit, een functie, een beperkingengebied, een omgevingswaarde of een omgevingsnorm. In dit hoofdstuk worden de objecten vanuit regels op locatie toegelicht (dit zijn de groene objecten in Figuur 5).

<figure><img src='media/image10.svg' alt='media/image10.svg' style='width: 100%;'></img>
<figcaption>Figuur 5: Regels op Locatie</figcaption></figure>

#### <a name='global_package_Regel'></a><a name='graph_EAID_1DACE941_091C_491d_8A87_CFA8A'></a><a name='global_class_Regel_JuridischeRegel'></a><a name='detail_class_Regel_JuridischeRegel'></a><a name='_Objecttype_Regeltekst_1'></a><a name='_Objecttype_Activiteit'></a><a name='_Ref37921418'></a>Objecttype Activiteit

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### <a name='detail_attribute_RegelsOpLocatie_Activit'></a>Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van de activiteit.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bijvoorbeeld: het exploiteren van een horeca-inrichting.

Elk bevoegd gezag kan eigen activiteiten beschrijven, voor het eigen grondgebied. Let wel, het kan voorkomen dat twee bevoegde gezagen, die elk een eigen activiteit beschrijven, hun activiteit dezelfde naam geven. Dit betekent niet (per se) dat er hetzelfde bedoeld wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder een activiteit valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Activiteitengroep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een activiteit kan gecategoriseerd worden tot een beperkte lijst van activiteitengroepen.

Een groep is niet een juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype.

</td>
</tr>
</tbody>
</table>

##### <a name='detail_association_RegelsOpLocatie_Activ'></a>Relatiesoort is gereguleerd voor

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>is gereguleerd voor

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Deze specifieke activiteit is gereguleerd voor deze specifieke locatie(s). 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>In spreektaal: voor deze activiteit zijn er regels op de volgende locaties. Een activiteit wordt gereguleerd in ActiviteitLocatieaanduidingen, daar wordt immers bepaald of een activiteit wel of niet is toegestaan op een bepaalde locatie. Vanuit alle juridische regels die iets zeggen over de activiteit kun je afleiden voor welke locaties de activiteit is gereguleerd (zoals: verbod, gebod, meldingsplicht, etc.).

Dit attribuut wordt niet meegegeven door het bevoegd gezag, maar wordt afgeleid door het stelsel. Hierbij maakt het stelsel gebruik van de volgende regel:

<i>de som van de locatie</i><i>aanduidingen</i> <i>van de</i> <i>A</i><i>ctiviteit</i><i>L</i><i>ocatieaanduidingen</i> <i>die dezelfde</i> <i>activiteit</i> <i>kwalificeren</i> <i>is</i> <i>de locatie waar de activiteit voor gereguleerd is</i><i>.</i>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Relatie rol</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>locatieaanduiding

</td>
</tr>
</tbody>
</table>

##### <a name='detail_class_RegelsOpLocatie_Functie'></a>Relatiesoort is

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>is

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Deze activiteit is van hetzelfde type als de bovenliggende activiteit en de regels die gelden voor de bovenliggende activiteit zijn contextueel relevant voor deze activiteit. 

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'>Activiteit

</td>
</tr>
<tr><td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><b><span style='color: #000000;'Toelichting</span></b>

</td>
<td align='left' style='border-top: 0.5pt solid #000000; border-left: 0.5pt solid #000000; border-bottom: 0.5pt solid #000000; border-right: 0.5pt solid #000000; background-color: none;'><span style='color: #000000;'De structuur van activiteiten is een taxonomie en deze opzet is nodig voor structurering van activiteiten, beheersbaarheid van activiteiten en voor de uitvoering door de gebruikerstoepassingen. De activiteit waarmee hier een relatie wordt gelegd is de bovenliggende activiteit. Met “is (een)” wordt een bepaalde activiteit rechtstreeks verbonden met een meer generieke activiteit. Deze constructie is van belang om een activiteit geschikt te maken voor gebruik in regelgeving, waarbij aangegeven is hoe deze activiteit zich verhoudt tot bovenliggende activiteiten uit dezelfde of andere regelgeving.</span>

<span style='color: #000000;'Bijvoorbeeld: de activiteit ‘het opslaan van motorbrandstoffen’ is een ‘milieubelastende activiteit’.</span>

<span style='color: #000000;'Met contextueel relevant wordt bedoeld dat de regels die gelden voor de bovenliggende activiteit, binnen die gegeven context ook gelden voor deze (onderliggende) activiteit.</span>

<span style='color: #000000;'<u>Dit heeft als gevolg dat activiteiten pas getoond worden in de functionele structuur bij het uitklappen van de bovenliggende activiteit. Daarnaast kan een bovenliggende activiteit gebruikt worden als niveau waarop een vergunning aangevraagd kan worden. (Zo vraag je bijvoorbeeld om een vergunning voor ‘een milieubelastende activiteit’ en niet om het opslaan van brandstoffen aangezien de</u></span> <span style='color: #000000;'<u>milieubelastende</u></span> <span style='color: #000000;'<u>activiteit</u></span> <span style='color: #000000;'<u>de activiteit is waarvoor ingediend wordt en dus een bovenliggende activiteit is van het ‘het opslaan van motorbrandstoffen’.)</u></span>

</td>
</tr>
</tbody>
</table>

##### Relatiesoort gerelateerd

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>gerelateerd

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De activiteit heeft een relatie met een (of meerdere) andere activiteit(en) en de regels die gelden voor de gerelateerde activiteit zijn van toepassing bij uitvoering van de activiteit.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Activiteit 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>In tegenstelling tot de ‘is relatie, is de gerelateerde activiteit <u>niet</u> per se van hetzelfde type. Gerelateerde activiteiten kunnen van hetzelfde type zijn, bijvoorbeeld twee milieubelastende activiteiten, maar dat hoeft niet. Bij een gerelateerde activiteit is sprake van een sterke relatie.

<span style='color: #000000;'Bijvoorbeeld: de activiteit</span> <span style='color: #000000;'het</span> <span style='color: #000000;'‘</span><span style='color: #000000;'lassen van metalen</span><span style='color: #000000;'’</span> <span style='color: #000000;'heeft een sterke relatie met</span> <span style='color: #000000;'de activiteit</span> <span style='color: #000000;'‘</span><span style='color: #000000;'handeling in het kader van de metaalproductenindustrie</span><span style='color: #000000;'’</span><span style='color: #000000;'. Deze</span> <span style='color: #000000;'laatste</span> <span style='color: #000000;'activiteit</span> <span style='color: #000000;'is</span> <span style='color: #000000;'altijd</span> <span style='color: #000000;'aan de orde als er sprake is van</span> <span style='color: #000000;'een activiteit</span> <span style='color: #000000;'‘</span><span style='color: #000000;'lassen van metalen’.</span> <span style='color: #000000;'Dit betekent dat als je een</span> <span style='color: #000000;'vergunningcheck</span> <span style='color: #000000;'uitvoert voor het ‘</span><span style='color: #000000;'lassen van metalen’</span><span style='color: #000000;' je automatisch ook een</span> <span style='color: #000000;'vergunningcheck</span> <span style='color: #000000;'uitvoert voor de gerelateerde activiteit ‘</span><span style='color: #000000;'handeling in het kader van de m</span><span style='color: #000000;'etaalproductenindustrie’.</span> <span style='color: #000000;'(</span><span style='color: #000000;'Bij het uitvoeren van een</span> <span style='color: #000000;'vergunningcheck</span> <span style='color: #000000;'voor ‘</span><span style='color: #000000;'handeling in het kader van de m</span><span style='color: #000000;'etaalproductenindustrie' voer je in dit geval niet automatisch een check uit voor '</span><span style='color: #000000;'lassen van metalen</span><span style='color: #000000;'’.</span><span style='color: #000000;')</span> <span style='color: #000000;'Deze relatie is een uitwerking van de sterke relatie van activiteiten in hoofdstuk 3 en 4 van het Besluit Activiteiten Leefomgeving.</span>

De relatie is niet bedoeld voor situaties waarin bij uitvoering van een activiteit, zoals 'graven', <u>eventueel</u> sprake kan zijn van uitvoering van een andere activiteit (zoals 'verharding opbreken') c.q. van desbetreffende regels. Hierbij is geen sprake van een sterke relatie. 

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref37969161'></a>Objecttype Norm (abstract)

Het modelelement norm beschrijft de kenmerken die de omgevingsnorm en de omgevingswaarde (informatiekundig en modelmatig) gemeenschappelijk hebben.

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een uniek identificerend gegeven. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De vaste identificatie van een norm, zodat er naar een specifieke norm gerefereerd kan worden, gebruik makende van deze identificatie.

Er wordt altijd direct verwezen naar ofwel de Omgevingsnorm, ofwel de Omgevingswaarde, en niet naar een “Norm”. Daarom is er niet zoiets als een “Norm” identificatie. 

</td>
</tr>
</tbody>
</table>

##### <a name='detail_attribute_RegelsOpLocatie_Norm_ve'></a><a name='detail_class_RegelsOpLocatie_Normwaarde'></a>Attribuutsoort type

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>type

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het type van de norm.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>typenorm (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het type/soort norm, zoals bijvoorbeeld een maximumbouwhoogte. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort eenheid

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Eenheid

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De eenheid van de waarde, voluit geschreven. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Eenheid (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bijvoorbeeld: decibel, meter. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Constraint</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De eenheid mag alleen ingevuld worden bij kwantitatieve waarden.

</td>
</tr>
</tbody>
</table>

##### Gegevensgroep waarde

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>waarde

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Één van de kwantitatieve of kwalitatieve waarden van een norm. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een norm kan uit meerdere normerende waarden bestaan. Samen vormen deze de norm. Anders gezegd, één normwaarde op zichzelf is geen norm.

De waarde zelf bestaat uit een aantal kenmerken, gedefinieerd in het gegevensgroeptype Normwaarde.

De Omgevingswet kent ook normstellende regels in bredere zin, welke niet als een omgevingswaarde of omgevingsnorm zijn opgenomen.

</td>
</tr>
</tbody>
</table>

##### <a name='detail_attribute_RegelsOpLocatie_Normwaa'></a>Gegevensgroeptype Normwaarde 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Normwaarde

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Één van de kwantitatieve of kwalitatieve waarden van een norm. De normwaarde geeft aan wat de specifieke kwantitatieve of kwalitatieve eisen zijn, inclusief de toewijzing ervan aan de specifieke locatie(s) waar de normwaarde voor geldt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een gegevensgroeptype is geen object. Het is een apart type modelelement om een groep van kenmerken in onder te brengen, te weten de beschrijving van de normwaarde, de waarde zelf en de locatie waarvoor deze geldt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Constraint</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>\{ waarde is kwantitatief of kwalitatief of waardeInRegeltekst\}

Een van beide, kwalitatieve waarde of kwantitatieve waarde of waardeInRegeltekst, moet gevuld worden. (Bij waardeInRegeltekst dient de omschrijving van de Regeltekst bekeken te worden om de inhoud van de norm te interpreteren.)

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort kwalitatieve waarde, van gegevensgroeptype Normwaarde

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>kwalitatieve waarde

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De toewijzing van een normerende waarde aan een locatie in de vorm van een beschrijving in woorden. De beschrijving geeft tekstueel de betekenis weer van de normwaarde. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bijvoorbeeld: de geluidsbelasting op de gevel van een woning mag de aangegeven waarde niet overschrijden. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort kwantitatieve waarde, van gegevensgroeptype Normwaarde 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>kwantitatieve waarde

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De numerieke waarde van een norm. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Real

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Deze waarde is alleen ingevuld als er sprake is van een kwantitatieve norm, met kwantitatieve normwaarden. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### <a name='detail_association_RegelsOpLocatie_Normw'></a>Attribuutsoort waardeInRegeltekst, van gegevensgroeptype Normwaarde 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>waardeInRegeltekst

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een waarde waarmee wordt geduid dat de Norm genoemd wordt in de tekst van de regel. Hierdoor dient de normwaarde gevuld te worden met de waarde: ‘waarde staat in regeltekst’. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Deze waarde is alleen ingevuld als de waarde expliciet benoemd is in de tekst van het artikel of het lid. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Constraint</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>\{ mag alleen gevuld worden met ‘waarde staat in regeltekst’ \} 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Relatiesoort geldt voor, van gegevensgroeptype Normwaarde 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>geldt voor

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De specifieke locatie(s) waarvoor een specifieke normwaarde geldt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Elke normwaarde geldt voor minimaal één locatie. Als er geen locatie bestaat bij een normwaarde, dan heeft het normwaarde weinig zin. Als er geen regel is die over een norm gaat die deze normwaarde gebruikt, dan heeft deze norm per definitie ook geen juridische werking en daarmee ook de normwaarde niet. Er is dus altijd sprake een locatie bij een normwaarde en bij een norm. Let hierbij goed op het volgende:

Het komt vaak voor dat een Norm uit meerdere Normwaarden bestaat, met voor elke afzonderlijke Normwaarde een toegewezen locatie waarvoor de Normwaarde geldt.

De toekenning van een normwaarde aan de locatie(s) heeft een sterke relatie met het werkingsgebied van de regel waarin de norm, waar de normwaarde een onderdeel van uitmaakt, gevat is. Te weten: de locaties moeten zich op juiste wijze verhouden tot het werkingsgebied van deze regel. In principe geldt dat de locatie van een beperkingengebied gelijk moet zijn aan, of gelegen moet zijn binnen, het werkingsgebied van de Regeltekst waarin de regel is opgenomen. Anders gezegd, het werkingsgebied van de Regeltekst is dekkend voor de locaties van de erin opgenomen regels.

</td>
</tr>
</tbody>
</table>

#### Objecttype Omgevingsnorm

Een Omgevingsnorm heeft alle eigenschappen van een Norm, aangevuld met de volgende:<a name='detail_attribute_RegelsOpLocatie_Omgevin'></a>

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De (korte) naam van een norm. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bv. maximum bouwhoogte.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder een omgevingsnorm valt.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>OmgevingsnormGroep (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een omgevingsnorm kan gecategoriseerd worden tot een beperkte lijst van omgevingsnorm groepen.

Een groep is niet een juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype.

</td>
</tr>
</tbody>
</table>

#### Objecttype Omgevingswaarde

Een Omgevingsnorm heeft alle eigenschappen van een Norm, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De (korte) naam van een norm.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bijvoorbeeld: ten hoogste toelaatbare concentratie zwaveldioxide.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder een omgevingswaarde valt.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>OmgevingswaardeGroep (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een omgevingswaarde kan gecategoriseerd worden tot een beperkte lijst van omgevingswaarde groepen.

Een groep is niet een juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype.

</td>
</tr>
</tbody>
</table>

### Gebiedsaanwijzing

Een gebiedsaanwijzing is een term die past bij de Juridische Regel of het Tekstdeel die wat zegt over een specifiek type gebied. Dit perspectief kan dus regelgericht zijn, of beleidsgericht. Oftewel, beperkt zich tot niet alleen de regels op een locatie. Daarom is de gebiedsaanwijzing in een apart onderdeel van dit informatiemodel opgenomen.

<figure><img src='media/image12.svg' alt='media/image12.svg' style='width: 100%;'></img>
<figcaption>Figuur 6: Gebiedsaanwijzing</figcaption></figure>

#### Objecttype Gebiedsaanwijzing (abstract)

#####  Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### Relatiesoort wijst aan

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>wijst aan

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De locatie is het aangewezen gebied, voor de functie of het beperkingengebied.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><a name='_Hlk19007086'></a><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Elke functie en beperkingengebied wijst minimaal één locatie aan. Deze locatie is altijd een Gebied of een Gebiedengroep.

De toewijzing van een locatie aan een functie of beperkingengebied heeft een sterke relatie met de locatieaanduiding van de regel die het gebied definieert. Te weten: de locaties moeten zich op juiste wijze verhouden tot de locatieaanduiding van de regel. In principe geldt dat de locatie van een functie of een beperkingengebied gelijk moet zijn aan de locatieaanduiding van de regel, en gelegen moet zijn binnen het werkingsgebied van de Regeltekst waarin de regel is opgenomen. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Constraint</b><b>(s)</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>\{ Alleen een Gebied of een Gebiedengroep \} <br/>De locatie is een Gebied of een Gebiedengroep. Niet een Lijn of een Punt of een Lijnengroep of een Puntengroep. 

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref39495749'></a><a name='_Ref39495767'></a>Objecttype Beperkingengebied

Een Beperkingengebied heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het beperkingengebied. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bijvoorbeeld: luchthaven, spoorweg, snelweg, waterstaatswerk. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder een beperkingengebied valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Beperkingengebiedgroep (Waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een beperkingengebied kan gecategoriseerd worden tot een beperkte lijst van beperkingengroepen.

Een groep is niet een juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype.

</td>
</tr>
</tbody>
</table>

##### <a name='_Ref39495763'></a>Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Beperkingengebieden

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref65858457'></a>Objecttype Functie

Een Functie heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van de functie.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Voorbeeld: centrumgebied Apeldoorn, bedrijventerrein 2.

Elk bevoegd gezag kan eigen functies beschrijven, voor het eigen grondgebied. Let wel, het kan voorkomen dat twee bevoegde gezagen, die elk een eigen functie beschrijven, hun functie dezelfde naam geven. Dit betekent niet (per se) dat er hetzelfde bedoeld wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ja

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder een functie regel valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Functiegroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een functie kan gecategoriseerd worden tot een beperkte lijst van functiegroepen.

Een groep is niet een juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Functies

</td>
</tr>
</tbody>
</table>

#### Objecttype Bodem

Bodem heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bodemgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Bodemgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Bouw

Bouw heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bouwgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Bodemgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Defensie

Defensie heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Defensiegroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Defensiegebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Energievoorziening

Energievoorziening heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Energievoorzieninggroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Energievoorzieninggebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Erfgoed

Erfgoed heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Erfgoedgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Erfgoedgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Externe veiligheid

Externe veiligheid heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Externeveiligheidgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Externeveiligheidgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Geluid

Geluid heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Geluidgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Geluidgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Geur

Geur heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Geurgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Geurgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Landschap

Landschap heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Landschapgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Landschapgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Leiding

Leiding heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Leidinggroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: \<labelhier\>

</td>
</tr>
</tbody>
</table>

#### Objecttype Lucht

Lucht heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Luchtgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Luchtgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Mijnbouw

Mijnbouw heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Mijnbouwgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Mijnbouwgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Natuur

Natuur heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Natuurgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Natuurgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Recreatie

Recreatie heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Recreatiegroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Recreatiegebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Ruimtelijk gebruik

Ruimtelijk gebruik heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Ruimtelijkgebruikgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Ruimtelijkgebruikgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Verkeer

Verkeer heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Verkeergroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Verkeergebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

#### Objecttype Water en watersysteem

Water en watersysteem heeft alle eigenschappen van een Gebiedsaanwijzing, aangevuld met de volgende:

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een (korte) omschrijving van het object.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De naam is bedoeld om te zorgen dat het object herkenbaar is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Juridisch gegeven</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Nee

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort groep

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>groep

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een categorie, of groep, waaronder het object valt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>WaterEnWatersysteemgroep (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De groep is geen juridische term. De groep bepaalt mede hoe een kaartbeeld (standaard) wordt opgebouwd, voor objecten van dit objecttype. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Het label waarmee de gebiedsaanwijzing geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit veld wordt vast ingevuld met het label: Water-en-watersysteemgebiedsaanwijzingen

</td>
</tr>
</tbody>
</table>

### Informatie in vrije tekst (zonder Juridische regels)

De informatie in onderdelen van de tekst van een omgevingsvisie, of een projectbesluit, of uit andere typen omgevingsdocumenten.

<figure><img src='media/image14.svg' alt='media/image14.svg' style='width: 100%;'></img>
<figcaption>Figuur 7: Vrije tekst</figcaption></figure>

#### Objecttype Divisie

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort omschrijving

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>omschrijving

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De letterlijke tekst die in een Divisie staat. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Divisie is een structurerend element uit OP waarmee je teksten kunt structureren in omgevingsdocumenten met een vrijetekststructuur. De omschrijving van een Divisie is de inhoud van de divisietekst die onder deze Divisie valt. 

</td>
</tr>
</tbody>
</table>

##### Relatiesoort heeft werking in 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30.19845644983462%;'
<col id='col2' style='width: 69.80154355016538%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>heeft werking in

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het werkingsgebied c.q. de locatie begrenst de juridische werking van de tekst onder een bepaalde Divisie.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Divisie heeft veelal een werkingsgebied. Deze wordt niet aangeleverd door het bevoegd gezag maar afgeleid door het stelsel.

Hierbij maakt het stelsel gebruik van de volgende regel:

<i>de som van de locatie van de</i> <i>Tekstdelen</i> <i>die verwijzen naar dezelfde</i> <i>Divisie</i> <i>is het werkingsgebied.</i>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>werkingsgebied

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OW

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref42777760'></a>Objecttype Divisietekst

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort omschrijving

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>omschrijving

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De letterlijke tekst die in een Divisietekst staat. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Divisie is een structurerend element uit OP waarmee je teksten kunt structureren in omgevingsdocumenten met een vrijetekststructuur. De omschrijving van een Divisie is de inhoud van de divisietekst die onder deze Divisie valt. 

</td>
</tr>
</tbody>
</table>

##### Relatiesoort heeft werking in 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30.19845644983462%;'
<col id='col2' style='width: 69.80154355016538%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>heeft werking in

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het werkingsgebied c.q. de locatie begrenst de juridische werking van de tekst onder een bepaalde Divisietekst.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Divisietekst heeft veelal een werkingsgebied. Deze wordt niet aangeleverd door het bevoegd gezag maar afgeleid door het stelsel.

Hierbij maakt het stelsel gebruik van de volgende regel:

<i>de som van de locatie van de</i> <i>Tekstdelen</i> <i>die verwijzen naar dezelfde</i> <i>Divisie</i> <i>is het werkingsgebied.</i>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>werkingsgebied

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OW

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

#### Objecttype Tekstdeel

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort thema 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 100%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 28.789724283025137%;'
<col id='col2' style='width: 71.21027571697486%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>thema

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Kernachtige weergave van de grondgedachte achter een tekstdeel. Een thema kent geen locatie.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Thema (waardelijst) 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het thema is een categorisering, waar een tekstdeel binnen valt. De waardelijst is dezelfde als voor Regeltekst, om thematisch informatie, over alle objecten heen, te kunnen zoeken. 

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort omschrijving

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>omschrijving

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een deel van de tekst waar een bepaalde annotatie gedaan wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een tekstdeel is de equivalent van een Juridische regel aan de vrijetekststructuur-kant. Middels een Tekstdeel is het mogelijk om aan te geven dat een bepaald deel van de tekst een bepaalde locatie, hoofdlijn of gebiedaanwijzing duidt. 

</td>
</tr>
</tbody>
</table>

##### Relatiesoort definieert

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>definieert

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Tekstdeel definieert een locatie, die bestaansrecht heeft doordat het Tekstdeel ernaar verwijst. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>In spreektaal hebben de Tekstdelen een locatie, waar het Tekstdeel op betrekking heeft. Informatiekundig heeft Tekstdeel een relatie met deze Locatie, oftewel is een verwijzing die locatieaanduiding heet, deze Locatie kan een Gebied zijn, of een Gebiedengroep, of een Punt, of een Puntengroep, of een Lijn of een lijnengroep.

Het feit dat er naar een locatie verwezen wordt vanuit een Tekstdeel geeft bestaansrecht aan de locatie. Daarom <b>definieert</b> het tekstdeel de locatie en hierna kan er naar deze locatie verwezen worden. Uiteraard gebeurt dit vanuit het tekstdeel zelf, maar er kan ook naar verwezen worden vanuit andere objecttypes, zoals vanuit de Gebiedsaanwijzing waar het tekstdeel over gaat. Het tekstdeel en de gebiedsaanwijzing verwijzen dan naar dezelfde locatie. De locatie wordt niet anders als gevolg van dat ernaar verwezen wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>locatieaanduiding

</td>
</tr>
</tbody>
</table>

##### Relatiesoort bevat

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>bevat

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Tekstdeel bevat een Hoofdlijn, waarmee geduid wordt wat de belangrijkste duiding van het tekstdeel is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Hoofdlijn

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Hoofdlijnen kunnen naar gestructureerd worden zoals het Bevoegd gezag dit graag zou doen. Middels een verwijzing vanuit Tekstdeel kan aangegeven worden in welk deel van de tekst een bepaalde hoofdlijn geduid wordt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>hoofdlijnaanduiding

</td>
</tr>
</tbody>
</table>

##### Relatiesoort is opgenomen in

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>is opgenomen in

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Tekstdeel is opgenomen in een Divisie of een Divisietekst, waar de inhoudelijke tekst van een bepaalde regeling staat (mits de regeling een vrijetekststructuur heeft).

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Divisie of Divisietekst

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De werking van Tekstdeel en Divisie/Divisietekst is vergelijkbaar aan de werking van Juridische regel en Regeltekst. Hiertoe is een tekstdeel opgenomen in een bepaalde Divisie, die zijn herkomst in OP heeft.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>is opgenomen in

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Constraint</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Tekstdeel kan altijd maar naar één object verwijzen, of een Divisie of een Divisietekst.

</td>
</tr>
</tbody>
</table>

##### Relatiesoort wijst een gebied aan

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>wijst een gebied aan

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Tekstdeel wijst een bepaald gebied aan. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Gebiedsaanwijzing

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een tekstdeel kan gebruik maken van een gebiedsaanwijzing om hiermee een specifiek gebied aan te geven. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Gebiedsaanwijzing

</td>
</tr>
</tbody>
</table>

#### <a name='_Ref42777762'></a>Objecttype Hoofdlijn

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een (korte) omschrijving van de hoofdlijn.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bijvoorbeeld: de gezonde stad; de circulaire stad; klimaatbestendige delta, duurzame energiehuishouding. Dit kan de titel van een paragraaf in een tekstdeel zijn, die een hoofdlijn aanduid. 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort soort

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>soort

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een aanduiding om aan te geven hoe de hoofdlijn beleidsmatig bedoeld is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bijvoorbeeld: een perspectief, ambitie, doel, opgave, toekomstperspectief, prioriteiten of beleidskeuze wordt aangegeven. 

</td>
</tr>
</tbody>
</table>

##### Relatiesoort gerelateerd 

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>gerelateerd

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De verwijzing van een specifieke hoofdlijn naar een andere hoofdlijn die aangeeft dat er een bijzondere relatie bestaat tussen die twee hoofdlijnen.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Hoofdlijn

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De specifieke aard van de relatie is vooralsnog nog een punt van uitwerking. De relatie geeft tot die tijd aan dat er sprake is van “een” relatie, waarbij uit de context blijkt wat deze relatie is.

Niet te verwarren met Thema, welke veel breder is bedoeld (al zullen gerelateerde hoofdlijnen vaak prima onder hetzelfde thema kunnen vallen). 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>gerelateerdeHoofdlijn

</td>
</tr>
</tbody>
</table>

### <a name='_Ref37969171'></a><a name='_Ref39055050'></a>Kaart

De informatie<span class='noot'>[7]<span class='noottekst'> De verbeelding van de kaart vereist aanvullende technische specificaties, welke niet in dit CIM worden beschreven en buiten het functionele object worden beheerd en gespecificeerd.<br/></span></span> die bijgehouden wordt rondom het objecttype Kaart.

<img src='media/image16.svg' alt='media/image16.svg' style='width: 100%;'></img>
Figuur 8: Kaart

#### Objecttype Kaart

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De naam zoals de kaart is genoemd in de tekst die deze kaart benoemt. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Voorbeeld: natuurbeheertype kaart 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort nummer

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>nummer

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De referentie van de gevisualiseerde kaart, waarmee deze opgevraagd kan worden, in de vorm van een nummer. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Voorbeeld: Kaartnummer-1

Het gaat hierbij niet om de Kaart zoals bedoeld in het objecttype, maar om de kaart in gevisualiseerde vorm, zoals een plaatje. Het kaartnummer is identificerend, maar niet landelijk identificerend. Het kaartnummer is identificerend binnen de context van het omgevingsdocument waarbinnen de kaart is opgenomen. 

</td>
</tr>
</tbody>
</table>

##### Gegevensgroeptype Kaartextent

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Kaartextent

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De randen van de kaart, die bepalen wat de minimale en maximale X- en Y-coördinaten zijn die getoond dienen te worden. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>minX (Real), maxX (Real), minY (Real), maxY (Real)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Dit bepaalt tot waar de kaart rijkt, bijvoorbeeld:

minX: 121096.2

maxX: 122329.1

minY: 486179.7

maxY: 487971.1 

</td>
</tr>
</tbody>
</table>

##### Relatiesoort bevat

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>bevat

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De relatie tussen de kaart en de kaartlagen (die gezamenlijk zorgen dat ze een kaart opbouwen). 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een kaart wordt doorgaans opgebouwd door middel van het opstapelen van kaartlagen. Door middel van de relatie naar kaartlagen kan een kaart één of meerdere kaartlagen bevatten.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>kaartlagen

</td>
</tr>
</tbody>
</table>

#### Objecttype Kaartlaag

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort naam

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>naam

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De naam van de kaartlaag. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Voorbeeld: rivieren, of ondergrond 

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort niveau

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>niveau

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het niveau dat de Kaartlaag heeft binnen de Kaart.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Integer

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een kaart wordt opgestapeld door middel van kaartlagen, hierbij is 1 het laagste niveau, en zal ieder getal dat hoger is betekenen dat de kaartlaag hier bovenop gestapeld zal worden.

</td>
</tr>
</tbody>
</table>

##### <a name='_Ref19200652'></a>Relatiesoort toont een norm

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>toont een norm

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De relatie tussen de kaartlaag en de norm die getoond wordt in deze kaartlaag. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bij deze relatie bepaalt de specifiekeSymbolisatie die vastgelegd is op het object hoe het object wordt weergeven in de kaart.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>normweergave

</td>
</tr>
</tbody>
</table>

##### Relatiesoort toont een gebiedsaanwijzing

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>toont een gebiedsaanwijzing

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De relatie tussen de kaartlaag en de gebiedsaanwijzing die getoond wordt in deze kaartlaag. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bij deze relatie bepaalt de specifiekeSymbolisatie die vastgelegd is op het object hoe het object wordt weergeven in de kaart.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>gebiedsaanwijzingweergave

</td>
</tr>
</tbody>
</table>

##### Relatiesoort toont een activiteit

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>toont een activiteit

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De relatie tussen de kaartlaag en de instantie van de activiteit die getoond wordt in deze kaartlaag.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Bij deze relatie bepaalt de specifiekeSymbolisatie die vastgelegd is op het object hoe het object wordt weergeven in de kaart.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>activiteitlocatieweergave

</td>
</tr>
</tbody>
</table>

### Pons

De Pons is informatie die wordt vastgelegd bij een omgevingsplan om te duiden of de oude bestemmingsplannen getoond moeten worden.

<figure><img src='media/image18.svg' alt='media/image18.svg' style='width: 100%;'></img>
<figcaption>Figuur 9: Pons</figcaption></figure>

#### <a name='_Ref42777765'></a>Objecttype Pons

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De unieke identificatie waaronder elk object van dit type bekend is. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Identificatie

</td>
</tr>
</tbody>
</table>

##### Relatiesoort definieert

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>bevat

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Pons bevat een locatie, die bestaansrecht heeft doordat het een bepaalde locatie duidt waar de oude regeling niet meer getoond dient te worden door het DSO-LV. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Locatie 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De Pons is zoals nu beoogd een tijdelijk construct voor de overgangsfase richting de Omgevingswet. Zodra de overgangsfase voorbij is zal dit object waarschijnlijk niet meer gebruikt worden.

</td>
</tr>
</tbody>
</table>

### <a name='_Ref52980796'></a><a name='_Ref39054520'></a>Symbolisatie

Het symboliseren kan gedaan worden op basis van een SymbolisatieItem, hiermee kan een bepaalde stijl voor verschillende annotatie-objecten gebruikt worden.

<figure><img src='media/image20.svg' alt='media/image20.svg' style='width: 100%;'></img>
<figcaption>Figuur 10: Symbolisatie</figcaption></figure>

#### Objecttype SymbolisatieItem

##### Attribuutsoort symboolcode

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Symboolcode

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De symboolcode is een code waarmee de gewenste stijl geduid wordt.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString (die overeenkomt met een symboolcode uit de symbolenbibliotheek).

</td>
</tr>
</tbody>
</table>

##### Relatiesoort symboliseertNormwaarde

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>symboliseertNormwaarde

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De normwaarde die gesymboliseerd wordt met een bepaalde code.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een symbolisatieItem bevat de symbolisatie die gehanteerd moet worden voor specifieke objecten, zoals in dit geval een normwaarde. Dit stelt een bevoegd gezag in staat om binnen één Norm (bijv. bouwhoogte) de afzonderlijke normwaarden (bouwhoogten) met verschillende kleuren te verbeelden.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>normwaardeSymbolisatie

</td>
</tr>
</tbody>
</table>

##### Relatiesoort symboliseertActiviteit

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>symboliseertActiviteit

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De activiteit die gesymboliseerd wordt met een bepaalde code.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een symbolisatieItem bevat de symbolisatie die gehanteerd moet worden voor specifieke objecten, zoals in dit geval een activiteitlocatieaanduiding. Dit stelt een bevoegd gezag in staat om voor één Activiteit (bijv. wonen) de afzonderlijke ActiviteitLocatieaanduidingen met verschillende kleuren te verbeelden.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>activiteitLocatieaanduidingSymbolisatie

</td>
</tr>
</tbody>
</table>

##### Relatiesoort symboliseertGebiedsaanwijzing

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>symboliseertGebiedsaanwijzing

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De gebiedsaanwijzing die gesymboliseerd wordt met een bepaalde code.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een symbolisatieItem bevat de symbolisatie die gehanteerd moet worden voor specifieke objecten, zoals in dit geval een Gebiedsaanwijzing. Dit stelt een bevoegd gezag in staat om voor dezelfde Gebiedsaanwijzinggroep (bijv. Natura2000-gebied) de afzonderlijke Gebiedsaanwijzingen (Natura2000-gebieden) met verschillende kleuren te verbeelden.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatierol</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>gebiedsaanwijzingSymbolisatie

</td>
</tr>
</tbody>
</table>

### <a name='_Ref52980856'></a>DocumentComponent

De DocumentComponent is een object waarmee het mogelijk wordt om OP-elementen uit te drukken in het CIMOW.

<figure><img src='media/image22.svg' alt='media/image22.svg' style='width: 100%;'></img>
<figcaption>Figuur 11: Objecttype DocumentComponent</figcaption></figure>

#### Objecttype DocumentComponent

##### Attribuutsoort identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een identificerend element vanuit OP, waarbij de identificatie in de vorm van de wId uniek identificerend is over alle omgevingsdocumenten heen.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>wId 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort eId

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Expressie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De expressie is een identificerend element vanuit OP, waarbij een expressie in de vorm van een eId uniek identificerend is binnen één omgevingsdocument.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>eId

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'></td>
</tr>
</tbody>
</table>

##### Attribuutsoort type

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Type

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het type OP-element dat gebruikt wordt.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Er zijn meerdere OP-elementen die gebruikt kunnen worden.

Interessante typen zijn: Aanhef, Afdeling, AlgemeneToelichting, Artikel, ArtikelsgewijzeToelichting, Begrip, Begrippenlijst, Bijlage, Boek, Conditie, Deel, Divisie, DivisieTekst, Kadertekst, Lichaam, Lid, Hoofdstuk, Paragraaf, Sluiting, Subparagraaf, Subsubparagraaf, Toelichting.

Het CIMOW laat in het midden welke typen uit OP daadwerkelijk gebruikt dienen te worden in de voorziening.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort volgordeNummer

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>volgordeNummer

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het volgordeNummer geeft aan in welke volgorde de documentcomponenten staan ten opzichte van het omgevingsdocument.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Integer

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het volgordeNummer geeft aan in welke volgorde de componenten van een omgevingsdocument bekeken moeten worden.

Zo zal bijvoorbeeld het Lichaam doorgaans volgordeNummer 1 hebben, waarna Hoofdstuk 1 meestal volgNummer 2 zal hebben, etc.

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort inhoud

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>inhoud

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De symboolcode is een code waarmee de gewenste stijl geduid wordt.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De inhoud vanuit OP kan op meerdere manieren ingevuld worden, namelijk middels één of meerdere voorkomens van: een Al(inea), een Citaat, een Groep, een Begrippenlijst, een Lijst, een Figuur, een Tussenkop, een Tabel, of een Formule.

In het CIMOW wordt dit beschouwd als CharacterString.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort gereserveerd

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>gereserveerd

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een DocumentComponent kan inhoudsloos zijn, in dat geval is er gebruik gemaakt van de attribuutsoort ‘gereserveerd’. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Boolean

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort vervallen

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>vervallen

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Hiermee wordt aangeduid of een bepaald DocumentComponent vervallen is. (Deze kan alleen voorkomen bij een Artikel.)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Boolean

</td>
</tr>
</tbody>
</table>

##### Gegevensgroeptype Kop

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Kop

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een titel die de inhoud van de DocumentComponent beschrijft.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelicht</b><b>i</b><b>ng</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Kop komt voor zodra een DocumentComponent structuur geeft aan het Omgevingsdocument.

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort label, van gegevensgroeptype Kop

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Label

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het label dat getoond wordt bij de desbetreffende Kop.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort nummer, van gegevensgroeptype Kop

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Nummer

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het nummer dat hoort bij de desbetreffende Kop.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
</tbody>
</table>

##### Attribuutsoort opschrift, van gegevensgroeptype Kop

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>activiteitregelkwalificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Het opschrift dat hoort bij de desbetreffende Kop. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>CharacterString

</td>
</tr>
</tbody>
</table>

##### Relatiesoort is onderdeel van

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Is onderdeel van

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De verwijzing van een DocumentComponent naar het Omgevingsdocument waar het een integraal onderdeel van is.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Omgevingsdocument

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een Omgevingsdocument (Regeling) bestaat uit veel verschillende (Document)Componenten. Deze DocumentComponenten tezamen vormen het Omgevingsdocument. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>onderdeelVan

</td>
</tr>
</tbody>
</table>

##### Relatiesoort Verwijst naar

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Verwijst naar

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De verwijzing die gedaan wordt van een DocumentComponent naar een ander DocumentComponent.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>DocumentComponent

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><span style='color: #auto;'<u>Een</u></span> <span style='color: #auto;'<u>DocumentComponent</u></span> <span style='color: #auto;'<u>van een bepaald type kan een verwijzing doen naar een ander</u></span> <span style='color: #auto;'<u>DocumentComponent</u></span><span style='color: #auto;'<u>.</u></span>

<span style='color: #auto;'<u>Bijvoorbeeld: een artikel kan verwijzen naar een Begrip</u></span><span style='color: #auto;'<u>, of een Bijlage.</u></span>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>verwijzingNaar

</td>
</tr>
</tbody>
</table>

##### Relatiesoort Valt onder

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Valt onder

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>De verwijzing van een DocumentComponent naar een ander DocumentComponent waar het een onderdeel van uit maakt.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Gerelateerd objecttype</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>DocumentComponent

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>Een DocumentComponent van een bepaald type kan een onderdeel zijn van een ander DocumentComponent.

Voorbeelden:

<ul><li>een Begrip valt onder de Begrippenlijst</li>
<li>een Artikel valt onder een Paragraaf</li>
<li>een Artikel valt onder een Hoofdstuk</li>
<li>een Subparagraaf valt onder een Paragraaf</li>
</ul>

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'><b>Relatie rol</b> 

</td>
<td align='left' style='border-top: 0pt none #; border-left: 0pt none #; border-bottom: 0pt none #; border-right: 0pt none #; background-color: none;'>heeftBovenliggendComponent

</td>
</tr>
</tbody>
</table>

### Datatypen overzicht

<span style='color: #auto;'Deze paragraaf beschrijft de datatypen die gebruikt zijn in het</span> <span style='color: #auto;'informatiemodel</span><span style='color: #auto;'. Een datatype</span> beschrijft de structuur van de data en kan aanvullend aangeven aan welke eisen de data zelf moet voldoen.<a name='_Ref39048559'></a>

#### Waardelijsten

Het informatiemodel maakt veelvuldig gebruik van waardelijsten, te weten d<span style='color: #auto;'e volgende</span> <span style='color: #auto;'waardelijsten</span><span style='color: #auto;':</span>

<figure><img src='media/image23.png' alt='media/image23.png' style='width: 100%;'></img>
<figcaption>Figuur 12: <a name='graph_EAID_1BBF2542_A489_4825_867C_00C8A'></a><a name='global_class_RegelsOpLocatie_WaardeEenhe'></a>Overzicht waardelijsten</figcaption></figure>

Een waardelijst is een datatype waarin de mogelijke waarden expliciet zijn opgesomd in een lijst. De waarde van een attribuutsoort moet één van de waarden zijn uit de gespecificeerde waardelijst, oftewel wordt gekozen uit deze lijst. Er zijn verschillende types waardelijsten, dit informatiemodel maakt gebruik van een referentielijst. Dit betekent dat de toegestane waarden buiten het model in een externe waardelijst worden beheerd en de erin opgenomen waarden aldaar te vinden zijn. Zie Stelselcatalogus<span class='noot'>[8]<span class='noottekst'> https://stelselcatalogus.omgevingswet.overheid.nl/waardelijstenpagina<br/></span></span>.

De meeste waardelijsten worden maar één keer gebruikt. Thema is hierin een uitzondering, en is een algemene waardelijst die voor meerdere kenmerken van objecttypen gebruikt wordt.

#### Extern gedefinieerde Datatypen

<figure><img src='media/image24.png' alt='media/image24.png' style='width: 86.18678866905695%;'></img>
<figcaption>Figuur 13: Extern gedefinieerde datatypen</figcaption></figure>

##### Datatype Identificatie

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Identificatie

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b> 

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een uniek en vaststaand gegeven. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een identificatie dient te voldoen aan specifieke regels, deze worden gedefinieerd in het IMOW-document.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit datatype is bedoeld om objecten uniek te kunnen identificeren c.q. objecten die in dit CIMOW \<\<objecttype\>\> toegekend hebben gekregen. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>IMOW

</td>
</tr>
</tbody>
</table>

##### <a name='global_package_DatatypenAlgemeen'></a><a name='detail_class_RegelsOpLocatie_WaardeEenhe'></a>Datatype wId

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>wId

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b> 

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een uniek en vaststaand gegeven uit het OP-domein. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een identificatie dient te voldoen aan specifieke regels, deze worden gedefinieerd in de OP-standaard.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit datatype is bedoeld om officiële-publicatie-componenten uniek te kunnen identificeren c.q. elementen uit de OP-standaard. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

##### Datatype eId

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>eId

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b> 

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een uniek en vaststaand gegeven binnen één Omgevingsdocument. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een identificatie dient te voldoen aan specifieke regels, deze worden gedefinieerd in de OP-standaard.

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Dit datatype is bedoeld om objecten binnen één Omgevingsdocument uniek te kunnen identificeren. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Herkomst</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>OP

</td>
</tr>
</tbody>
</table>

#### CIMOW-gedefinieerde datatypen

Het informatiemodel heeft een aantal datatypen gedefinieerd, dit zijn:

<figure><img src='media/image25.emf' alt='media/image25.emf' style='width: 58.05592547899539%;'></img>
<figcaption>Figuur 14: Gedefinieerde datatypen</figcaption></figure>

##### Gestructureerd datatype WaardeEenheid

<p class='heading6'><a name='detail_attribute_RegelsOpLocatie_WaardeE'></a>Data element waarde</p>

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>waarde

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een numerieke waarde. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>REAL

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bijvoorbeeld: 10

</td>
</tr>
</tbody>
</table>

<p class='heading6'>Data element eenheid</p>

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Eenheid

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>De eenheid van de waarde, voluit geschreven. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Eenheid (waardelijst)

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Bijvoorbeeld: decibel, meter. 

</td>
</tr>
</tbody>
</table>

##### Gestructureerd datatype VlakOfMultivlak

<p class='heading6'>Data element vlak</p>

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>vlak

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een vlak met een externe buitengrens, en optioneel interne uitsneden. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>GM Surface

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een GM Surface, zoals bedoeld in de ISO standaard van OGC.

De Polygon is ook toegestaan als implementatie van een Surface. 

</td>
</tr>
</tbody>
</table>

<p class='heading6'>Data element multivlak</p>

<table style='width: 100%;'><caption></caption>
<colgroup><col id='col1' style='width: 30%;'
<col id='col2' style='width: 70%;'
</colgroup>
<tbody valign='top'><tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Naam</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>multivlak

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Definitie</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Meerdere vlakken, die elkaar aanvullen, zonder elkaar te overlappen. 

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Formaat</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>CharacterString

</td>
</tr>
<tr><td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'><b>Toelichting</b>

</td>
<td align='left' style='border-top: 0pt none #000000; border-left: 0pt none #000000; border-bottom: 0pt none #000000; border-right: 0pt none #000000; background-color: none;'>Een GM Surface, zoals bedoeld in de ISO standaard van OGC.

</td>
</tr>
</tbody>
</table>

