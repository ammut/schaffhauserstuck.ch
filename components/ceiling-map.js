import {useEffect, useRef} from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import Projection from 'ol/proj/Projection'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import style from '../styles/Home.module.css'
import {addProjection} from 'ol/proj'
import {defaults} from 'ol/interaction'

// todo: make hidpi
export default function CeilingMap({enableZoom = false}) {
    const target = useRef()
    useEffect(() => {
        const width = 21267
        const height = 15500
        const extent = [0, 0, width, height]
        // const initExtent = [12739, 2360, 16260, 5610]
        const initExtent = [14285, 3272, 15271, 4741]

        const projection = 'stuckdecke'

        const dpr = window.devicePixelRatio > 1 ? 2 : 1
        const url = dpr === 2 ? '/Front/2x/{z}/{x}/{y}.jpg' : '/Front/{z}/{x}/{y}.jpg'

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
                        url: url,
                        maxResolution: 128, // resolution at zoom:0
                        tilePixelRatio: dpr,
                    }),
                })
            ],
            view: view = new View({
                enableRotation: false,
                projection: projection,
                extent: extent,
                minResolution: 1, // zoom:7
                maxResolution: 16, // zoom:3
            }),
            controls: [], // hide default controls
            interactions: defaults({
                mouseWheelZoom: enableZoom,
                pinchZoom: enableZoom,
                doubleClickZoom: false,
                shiftDragZoom: false,
            }),
        })

        view.fit(initExtent)

        return () => {
            map.setTarget(null)
            map = null
        }
    })

    return (
        <div ref={target} className={style.map} />
    )
}















