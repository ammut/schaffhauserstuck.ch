import styles from '../styles/Home.module.css'
import {useEffect, useRef, useState, Component, createRef} from 'react'

function clamp(value) {
    return value < 0 ? 0 : value > 1 ? 1 : value;
}

function preventDefault(event) {
    event.preventDefault()
}

// todo: make functional
export default class SplitSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sliderPos: 0.25,
            active: false,
        }

        this.slider = createRef()
        this.start = 0
        this.width = 0

        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onTouchStart = this.onTouchStart.bind(this)
        this.onTouchMove = this.onTouchMove.bind(this)
    }

    onMouseMove(event) {
        const offset = event.clientX - this.start
        const ratio = clamp(offset / this.width)
        this.setState({sliderPos: ratio})
    }

    onMouseDown() {
        this.setState({active: true})
        const {left, right} = this.slider.current.getBoundingClientRect()
        this.start = left
        this.width = right - left

        document.addEventListener('mousemove', this.onMouseMove)
        document.addEventListener('mouseup', () => {
            this.setState({active: false})
            document.removeEventListener('mousemove', this.onMouseMove)
        })
    }

    onTouchStart() {
        this.setState({active: true})
        const {left, right} = this.slider.current.getBoundingClientRect()
        this.start = left
        this.width = right - left

        document.addEventListener('touchmove', this.onTouchMove)
        document.addEventListener('touchend', () => {
            this.setState({active: false})
            document.removeEventListener('touchmove', this.onTouchMove)
        })
    }

    onTouchMove(event) {
        const offset = event.touches[0].clientX - this.start
        const ratio = clamp(offset / this.width)
        this.setState({sliderPos: ratio})
    }

    render() {
        // const [sliderPos, setSliderPos] = useState(0.25)
        // const [active, setActive] = useState(false)
        // const slideDiv = useRef(null)
        const {sliderPos} = this.state
        const {right, left} = this.props

        return (
            <div className={`${styles.splitSlider} ${this.state.active ? styles.splitSliderActive: ''}`}>
                <div className={styles.splitSliderOuter} ref={this.slider}>
                    <img onMouseDown={preventDefault} className={styles.splitSliderImg} src={right} alt='' />
                    <div className={styles.splitSliderInner} style={{width:`${sliderPos * 100}%`}}>
                        <img onMouseDown={preventDefault} className={`${styles.splitSliderImgFg}`} src={left} alt='' />
                    </div>

                </div>
                <div
                    className={styles.splitSliderHandle}
                    style={{left: sliderPos * 100 + '%'}}
                    onMouseDown={this.onMouseDown}
                    onTouchStart={this.onTouchStart}>
                    <div className={styles.splitSliderHandleBar}>
                        <div className={styles.splitSliderHandleRidge} />
                    </div>
                </div>
            </div>
        )
    }

}
