import React from 'react';
import ContentClasses from '../Content.module.css';

const Zeitplan = () => {
    const daten = ["06/2020", "07/2020", "08/2020", "10/2020", "01/2021", "02/2021", "03/2021", "04/2021", "05/2021", "05/2021", "11/2021"]
    const texts = ["Kritisches mechanisches Design",
        "Vorläufiges elektrisches / elektronisches Design",
        "Vorläufiges Software-Design",
        "Präsentation an die Gesellschaft für Technische Kommunikation zur Empfehlung",
        "Alle mechanischen Teile erhalten", "Alle elektrischen / elektronischen Teile erhalten",
        "Montage, Integration", "Testen", "Versand nach Kourou in Französisch-Guayana", "Inbetriebnahme", " Erste wissenschaftliche Beobachtungen (voraussichtlich Ende 2021 Vega-Raketenstart geplant"]
    const projektZeitPlan = texts.map( (t, i) => <li><b>{daten[i]}</b> - {t}</li>);
    return (
        <div className={ContentClasses.zeitplan}>
            <h1>Projekt- und Zeitplan</h1>
            <div>
                <ul>
                    {projektZeitPlan}
                </ul>
            </div>
        </div>
    )
}

export default Zeitplan;