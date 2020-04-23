import React from 'react';
import Ferntransport from '../../../assets/ferntransport.jpg'
import Unilogo from '../../../assets/unilogo.jpg'
import ContentClasses from '../Content.module.css';

const Ziel = () => {
    return (
        <div className={ContentClasses.ziel}>
            <h1>Hauptziel des Projekts</h1>
            <div>
                <h3>CamCube (Cloud Aerosol Monitoring Cube Mission) </h3>
                <p>Das wissenschaftliche Hauptziel der CamCube-Mission (Cloud Aerosol Monitoring Cube Mission) ist die Erstellung einer Datenbank mit genauen Beobachtungsdaten zur Verteilung der grundlegenden mikro- und makrophysikalischen Eigenschaften von Aerosolen.</p>
                <p>Ebenso wichtig ist es, dass die Bildung eines der Ziele dieses Projekts ist. Das Projekt wird von einem interdisziplinären Team durchgeführt, das sich aus Studenten und Professoren der folgenden FSU Jena-Institute zusammensetzt:</p>
                <ul>
                    <li>Institut für Angewandte Physik</li>
                    <li>Astrophysikalisches Institut und Universitätssternwarte</li>
                    <li>Institut für Fernerkundung (Lehrstuhl für Fernerkundung, Lehrstuhl für Geoinformatik, Lehrstuhl für Physische Geographie).</li>
                </ul>
                <div>
                    <img src={Unilogo} />
                </div>
                <p>Von großem Interesse ist die Untersuchung der Rolle von Aerosolen bei der Verschmutzung der Arktischen Ozean, seiner Meere und angrenzender Abschnitte des Einzugsgebiets. Gerade die Arktis ist aufgrund ihrer besonderen Strahlungsbedingungen (Polartag, bzw. Polarnacht. teilweise hohe Bodenalbedo) eine Region, wo Aerosole in vielfältige Form wirken können. Im Vergleich zu anderen Klimazonen gibt es spezielle Bedingungen, die Menge, Eigenschaften und Zusammensetzung des Aerosolmaterials bestimmen.</p>
                <div>
                    <img src={Ferntransport} />
                    <p>Abb.1. Ferntransport von Aerosolen in die Arktis</p>
                </div>
            </div>
        </div>
    )
}

export default Ziel;