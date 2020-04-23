import React from 'react';
import MainClasses from './Main.module.css';
import MainPicture from '../../assets/CamCubeMain.png'

const Main = () => {
    return(
        <div className={MainClasses.main}>
            <img src={MainPicture} alt="Here would be a flying satellite..." />
        </div>
    )
}

export default Main;