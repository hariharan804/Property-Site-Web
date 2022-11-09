import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Component } from 'react';
//  {* -------------mapping style-------------*} */}
class Mappping extends Component {
    render() {
        const style = this.props.style;
        return (
            // {* -------------mapping component-------------*}
            <Map
                zoom={16}
                google={this.props.google}
                containerStyle={style}
                //   initialCenter={{ lat:  this.props.latlog.lat , lng: this.props.latlog.log}}
                initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
                // center={{
                //     lat: this.props.latlog.lat,
                //     lng: this.props.latlog.log
                //   }}
                options={{  // <-- Use this
                    gestureHandling: "none", zoomControl: false
                }}
            >
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: this.props.lat, lng: this.props.lng }}
                />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: this.props.lat, lng: this.props.lng }} />
                <Marker />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    // {* -------------mapping access key-------------*} */}
    // this.props.apiKey
    apiKey: ('AIzaSyCA_KEgg4J5A3iQp435wTIGt5RR7Gb6fos'),
    version: 3.31
})(Mappping);