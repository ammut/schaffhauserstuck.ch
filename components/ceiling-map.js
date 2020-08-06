import {useEffect, useRef} from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import Projection from 'ol/proj/Projection'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import styles from '../styles/Home.module.css'
import {addProjection} from 'ol/proj'
import {defaults} from 'ol/interaction'

export default function CeilingMap() {
    const target = useRef()
    useEffect(() => {
        const width = 21267
        const height = 15500
        const extent = [0, 0, width, height]
        const initExtent = [12739, 2360, 16260, 5610]

        const projection = 'stuckdecke'

        addProjection(new Projection({
            code: projection,
            units: 'pixels',
            extent: extent,
        }))

        let view
        let map = new Map({
            target: target.current,
            layers: [
                new TileLayer({
                    extent: extent,
                    preload: Infinity,

                    source: new XYZ({
                        projection: projection,
                        url: '/maps/{z}/{x}/{y}.png',
                        maxResolution: 128,
                    }),
                })
            ],
            view: view = new View({
                enableRotation: false,
                projection: projection,
                extent: extent,
                minResolution: 1,
                maxResolution: 16,
                resolution: 8, // zoom 4
            }),
            controls: [],
            interactions: defaults({
                mouseWheelZoom: false,
                pinchZoom: false,
            })
        })

        view.fit(initExtent)

        return () => {
            map.setTarget(null)
            map = null
        }
    })

    return (
        <div ref={target} className={styles.map} />
    )
}















