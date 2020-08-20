import style from '../styles/Home.module.css'
import {Component, createRef} from 'react'

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

    onTouchStart(event) {
        // event.preventDefault()
        this.setState({active: true})
        const {left, right} = this.slider.current.getBoundingClientRect()
        this.start = left
        this.width = right - left

        this.slider.current.addEventListener('touchmove', this.onTouchMove, {passive: false, capture: false})
        this.slider.current.addEventListener('touchend', () => {
            this.setState({active: false})
            this.slider.current.removeEventListener('touchmove', this.onTouchMove)
        })
    }

    onTouchMove(event) {
        event.preventDefault()
        const offset = event.touches[0].clientX - this.start
        const ratio = clamp(offset / this.width)
        this.setState({sliderPos: ratio})
    }

    render() {
        const {sliderPos} = this.state
        const {right, left} = this.props

        return (
            <div className={`${style.splitSlider} ${this.state.active ? style.splitSliderActive: ''}`} onMouseDown={this.onMouseDown} onTouchStart={this.onTouchStart} ref={this.slider}>
                <div className={style.splitSliderOuter}>
                    <img onMouseDown={preventDefault} className={style.splitSliderImg} src={right} alt='' height={897} width={1500} />
                    <div className={style.splitSliderInner} style={{width:`${sliderPos * 100}%`}}>
                        <img onMouseDown={preventDefault} className={`${style.splitSliderImgFg}`} src={left} alt='' height={897} width={1500} />
                    </div>

                </div>
                {/*<div*/}
                {/*    className={style.splitSliderHandle}*/}
                {/*    style={{left: sliderPos * 100 + '%'}}*/}
                {/*    onMouseDown={this.onMouseDown}*/}
                {/*    onTouchStart={this.onTouchStart}>*/}
                {/*    <div className={style.splitSliderHandleBar}>*/}
                {/*        <div className={style.splitSliderHandleRidge} />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }

}
