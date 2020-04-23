import React from 'react';
import Rakete from '../../../assets/Rakete.gif'
import Polarimeter from '../../../assets/Polarimeter.png'
import AERONET from '../../../assets/AERONET.png'

const Infrastruktur = () => {
    return (
        <div>
            <h1>Infrastruktur</h1>
            <div>
                <h3>CubeSat Platform</h3>
                <p>Dieses Projekt wird auf Basis einer Open Source Architektur „CubeSat“ realisiert. Das Motto der Entwickler von "CubeSat": «Smaller, Cheaper, Faster, Better» ("Kleiner, billiger, schneller und besser").<br />
                    Die vorläufigen Kosten für die Installation betragen nach Angaben des Raumfahrtunternehmens Endorosat 23.500 Euro.
                </p>
            </div>
            <div>
                <h3>Trägerraketen</h3>
                <p>Aufgrund der hohen Kosten, die durch den Start in den Orbit entstehen, wird CamCube als sekundäre Nutzlast für anderen Mission gestartet, die über Masse und Platz verfügen. Dafür wäre am sinnvollsten, die CamCube Mission mit einem Vega – Träger zu transportieren. Vega besitzt gegenüber den meisten anderen Kleinraketen einen entscheidenden Vorteil: Mit jedem Start können gleich mehrere Satelliten in unterschiedliche Orbits gebracht werden.<br />
                    CamCube wird in Low Earth Orbit (LEO) gestartet.
                </p>
                <div>
                    <img src={Rakete} />
                    <p>Abb.2. Vega - Trägerrakete</p>
                </div>
            </div>
            <div>
                <h3>Polarimeter</h3>
                <p>Das vorgeschlagene optische Schema des Polarimeters der CamCube-Mission enthält vier Teleskopsysteme, von denen das erste Paar funktioniert im nahen ultravioletten und sichtbaren Bereich des Spektrums (370-410 nm), und das zweite Paar deckt den Spektralbereich von 865-2200 nm ab.
                </p>
                <div>
                    <img src={Polarimeter} />
                    <p>Abb.3. Polarimeter von verschiedenen CubaSat Missionen</p>
                </div>
            </div>
            <div>
                <h3>Bodengestützten Beobachtungen</h3>
                <p>Es wird davon ausgegangen, dass im Rahmen dieses Projekts die Bodenunterstützung für die Aerosolmessung an Punkten des internationalen AERONET-Netzwerks organisiert wird. Ein Vergleich der mit dem CamCube - Instrument und den CIMELCE318-Solarphotometern aus dem AERONET-Netzwerk erzielten Ergebnisse verbessert die Genauigkeit der Satellitendatenbank.<br />
                    Deutsches Zentrum für Luft- und Raumfahrt berichtet, ESA verfügt Vega, die kleinste der drei ESA-Trägerraketen, mit rund 30 Metern Länge und einem Durchmesser von drei Metern. VEGA wurde konzipiert, um vor allem kleinere Forschungs- und Erdbeobachtungssatelliten in polare oder niedrige Erdumlaufbahnen zu transportieren. Dabei besitzt Vega gegenüber den meisten anderen Kleinraketen einen entscheidenden Vorteil: Mit jedem Start können gleich mehrere Satelliten in unterschiedliche Orbits gebracht werden.
                </p>
                <div>
                    <img src={AERONET} />
                    <p>Abb.4. AERONET Data Display Interface
                    </p>
                    <p>
                        <small>Quelle: The AERONET (AErosol RObotic NETwork) https://aeronet.gsfc.nasa.gov/cgi-bin/draw_map_display_aod_v3?long1=-180&long2=180&lat1=-90&lat2=90&multiplier=2&what_map=4&nachal=1&formatter=0&level=3&place_code=10&place_limit=0</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Infrastruktur;