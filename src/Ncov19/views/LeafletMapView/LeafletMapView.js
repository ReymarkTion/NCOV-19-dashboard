import React, { Component, useSwr, fetcher } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from './skateboard-sparks.json';
import '../../../_css/leaflet_style.css';
import HeatmapLayer from './HeatmapLayer';

const addressPoints = [
  [9.1732, 124.7299, "100A"],
];

class LeafletMapView extends Component {

  render() {
    return (
      <>


        <Map 
          center={this.props.mapData.pos} 
          zoom={this.props.mapData.zoom} 
        >
          <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={addressPoints}
            longitudeExtractor={m => m[1]}
            latitudeExtractor={m => m[0]}
            intensityExtractor={m => parseFloat(m[2])} />

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={this.props.mapData.pos}>
            <Popup>
              {this.props.mapData.name}
            </Popup>
          </Marker>

        </Map>
      </>
    );
  }
}

export default LeafletMapView;