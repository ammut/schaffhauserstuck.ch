import { Component } from 'react';
import { Map, View } from 'ol';
import Projection from 'ol/proj/Projection';
import {Image, Tile} from 'ol/layer'
import { ImageStatic } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid'

export default class CeilingMap extends Component{

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        const imageExtent = [0, 0, 1200, 1200];
        const projection = new Projection({
            code: 'sample',
            units: 'pixels',
            extent: imageExtent
        });

        // Create an Openlayer Map instance with two tile layers
        const map = new Map({
            //  Display the map in the div with the id of map
            target: 'map',
            layers: [
                // new Image({
                //     source: new ImageStatic({
                //         url: '/maps/samplemap.jpg',
                //         projection,
                //         imageExtent
                //     })
                // }),
                new Tile({
                    projection: 'PIXELS',
                    tileGrid: new TileGrid({
                        extent: imageExtent,
                        minZoom: 0,
                        maxZoom: 4,
                        resolutions: [0, 1, 2, 3, 4].map(z => Math.pow(2, 4 - z))
                    }),
                    tilePixelRatio: 1.,
                    url: 'maps/tiles/{z}/{x}/{-y}.png',
                }),
            ],
            // Render the tile layers in a map view with a Mercator projection
            view: new View({
                projection,
                center: [600, 600],
                zoom: 3,
                maxZoom: 8
            })
        })
    }

    render(){
        const style = {
            width: '100%',
            height: '100%',
            backgroundColor: '#cccccc',
        }
        return (
            <div id="map" style={style}/>
        )
    }
}















