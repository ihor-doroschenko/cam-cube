import React from 'react';
import first from '../../../assets/Pictures_for_application/first.jpg';
import second from '../../../assets/Pictures_for_application/second.png';
import third from '../../../assets/Pictures_for_application/third.jpg';
import fourth from '../../../assets/Pictures_for_application/fourth.jpg';
import fifth from '../../../assets/Pictures_for_application/fifth.jpg';
import sixth from '../../../assets/Pictures_for_application/sixth.jpg';
import Mission from './Mission/Mission';
import ContentClasses from '../Content.module.css';

class Geschichte extends React.Component {

    state = {
        images: [
            {id:1, image: first, year: 1970, details: {
                name: "Ozone monitoring instrument (OMI)",
                text: ["An Bord des Aura-Raumfahrzeugs der NASA gibt es ein UV-Spektrum mit hoher spektraler Auflösung und ein sichtbares Spektrum (270–500 nm)",
                "Dieses Instrument kann Aerosoltypen kategorisieren und auch den Wolkendruck und die Bedeckung messen"]
            }},
            {id:2, image: second, year: 1990, details: {
                name: "Moderate resolution imaging spectroradiometer (MODIS)",
                text: ["Ein Schlüsselinstrument an Bord des Satelliten Terra und Aqua ",
                "Misst verschiedene optische Aerosoleigenschaften, z. B. AOD, Aerosoltypen, Aerosolgrößenverteilung, die es uns ermöglichen, komplexe atmosphärische Prozesse und unterschiedliche Klimadynamiken über Land und Ozeanen zu verstehen"]
            }},
            {id:3, image: third, year: 1999, details: {
                name: "Multi-angle imaging spectroradiometer (MISR)",
                text: ["An Bord des Terra-Satelliten der NASA",
                "9 verschiedene Digitalkameras mit jeweils vier Spektralbändern (blau, grün, rot, nahes Infrarot) und Blick auf die Erde in neun verschiedenen Winkeln", 
                "Messung die Menge und Art der Aerosolpartikel, die aufgrund natürlicher und anthropogener Aktivitäten entstehen"]
            }},
            {id:4, image: fourth, year: 2006, details: {
                name: "CALIPSO",
                text: ["Cloud-Aerosol Lidar with Orthogonal Polarization (CALIOP) - ein Lidar, das hochauflösende vertikale Profile von Aerosolen und Wolken liefert",
                "Imaging Infrared Radiometer (IIR)-erfasst Emissionsgrad und Partikelgröße der Zirruswolke"]
            }},
            {id:5, image: fifth, year: 2017, details: {
                name: "Sentinel 5 TROPOMI",
                text: ["Konzentriert sich auf die Überwachung von Spurengaskonzentrationen und Aerosolen, um betriebliche Dienste zu unterstützen, die die Überwachung des Luftqualitätsprotokolls und die Überwachung des Klimaprotokolls abdecken",
                "Ein hochauflösendes Spektrometersystem, das im ultravioletten bis kurzwelligen Infrarotbereich mit 7 verschiedenen Spektralbändern arbeitet"]
            }},
            {id:6, image: sixth, year: 2021, details: {
                name: "EarthCARE",
                text: ["Konzentriert sich auf die Überwachung von Spurengaskonzentrationen und Aerosolen, um betriebliche Dienste zu unterstützen, die die Überwachung des Luftqualitätsprotokolls und die Überwachung des Klimaprotokolls abdecken",
                "Ein hochauflösendes Spektrometersystem, das im ultravioletten bis kurzwelligen Infrarotbereich mit 7 verschiedenen Spektralbändern arbeitet"]
            }}]
    }
    
    imagesElements = this.state.images.map( i => <Mission id={i.id} key={i.id} source={i.image} year={i.year} details={i.details}/>);
    render () {
        return(
            <div className={ContentClasses.geschichte}>
                <h1>Geschichte der Aerosolbeobachtungen</h1>
                <div>
                    {this.imagesElements}
                </div>
            </div>
        )
    }
}

export default Geschichte;