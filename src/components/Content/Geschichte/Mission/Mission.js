import React from 'react';
import linie from '../../../../assets/linie1.png';
import Details from './Details/Details';
import ContentClasses from '../../Content.module.css';

class Mission extends React.Component {
    state = {
        toogleDetails: false
    }
    showDetails = () => {
        this.setState({
            toogleDetails: true
        })
    }
    hideDetails = () => {
        this.setState({
            toogleDetails: false
        })
    }
    render() {
        return(
            <div onMouseOver={ this.showDetails }
            onMouseOut={ this.hideDetails }>
                {this.state.toogleDetails && <Details id={this.props.id} details={this.props.details} year={this.props.year} />}
                <img className={ContentClasses.satellite} 
                     src={this.props.source} />
                <img className={ContentClasses.linie} src={linie} />
                <p className={ContentClasses.year}>{this.props.year}</p>
            </div>
        )
    }
};

export default Mission;