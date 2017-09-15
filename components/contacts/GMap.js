import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import FeedBack from './FeedBack';

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={13}
        defaultCenter={{ lat: 51.505163, lng: -0.188110}}
    >
        {props.markers.map(marker => (
            <Marker
                {...marker}
            />
        ))}
    </GoogleMap>
));

export default class GMap extends Component {
    constructor(props){
        super(props);
        this.state = {
                markers: [{
                    position: {
                        lat: 51.505163,
                        lng: -0.188110,
                    },
                    key: `England`,
                    defaultAnimation: 2,
                }],

        }
    }
    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            // console.log(map.getZoom());
        }
    }

    render(){
        const { feedback } = this.props;

        return (
            <div id="GMAP">
                <GettingStartedGoogleMap
                    containerElement={
                        <div style={{ height: `100%`, width : '100%'}} />
                    }
                    mapElement={
                        <div style={{ height: `100%`, width : '100%'}} />
                    }
                    onMapLoad={this.handleMapLoad.bind(this)}
                    markers={this.state.markers}
                />
            </div>
        );
    }
}

