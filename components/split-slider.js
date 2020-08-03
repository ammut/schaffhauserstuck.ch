import styles from '../styles/Home.module.css'
import {useEffect, useRef, useState, Component, createRef} from 'react'

function clamp(value) {
    return value < 0 ? 0 : value > 1 ? 1 : value;
}

function preventDefault(event) {
    event.preventDefault()
}

export default class SplitSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sliderPos: 0.25
        }

        this.slider = createRef()
        this.start = 0
        this.width = 0

        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
    }

    onMouseMove(event) {
        const offset = event.clientX - this.start
        const ratio = clamp(offset / this.width)
        this.setState({sliderPos: ratio})
    }

    onMouseDown() {
        // this.setState({active: true})
        const {left, right} = this.slider.current.getBoundingClientRect()
        this.start = left
        this.width = right - left

        document.addEventListener('mousemove', this.onMouseMove)
        document.addEventListener('mouseup', () =>
            document.removeEventListener('mousemove', this.onMouseMove)
        )
    }

    render() {
        // const [sliderPos, setSliderPos] = useState(0.25)
        // const [active, setActive] = useState(false)
        // const slideDiv = useRef(null)
        const {sliderPos} = this.state
        const {right, left} = this.props

        return (
            <div className={styles.splitSlider}>
                <div className={styles.splitSliderOuter} ref={this.slider}>
                    <img onMouseDown={preventDefault} className={styles.splitSliderImg} src={right} alt='' />
                    <div className={styles.splitSliderInner} style={{width:`${sliderPos * 100}%`}}>
                        <img onMouseDown={preventDefault} className={`${styles.splitSliderImgFg}`} src={left} alt='' />
                    </div>

                </div>
                <div
                    className={styles.splitSliderHandle}
                    style={{left:`calc(${sliderPos * 100}% - 7px)`}}
                    onMouseDown={this.onMouseDown}
                />
            </div>
        )
    }

}
