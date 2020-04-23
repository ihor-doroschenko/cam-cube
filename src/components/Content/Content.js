import React from 'react';
import ContentClasses from './Content.module.css';
import Ziel from './Ziel/Ziel';
import Zeitplan from './Zeitplan/Zeitplan';
import Infrastruktur from './Infrastruktur/Infrastruktur';
import Geschichte from './Geschichte/Geschichte';

const Content = (props) => {
    const components = {
        "Ziel": <Ziel />,
        "Zeitplan": <Zeitplan />,
        "Infrastruktur": <Infrastruktur />,
        "Geschichte": <Geschichte />
    }
    return(
        <div className={ContentClasses.content}>
            {components[props.actualComponent]}
        </div>
    )
}

export default Content;