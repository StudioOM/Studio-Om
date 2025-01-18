import React from "react";
import { Component } from "react";
import title from "./assets/Asset 32.png";
import X from "./assets/X symbol.png";
import tue from "./assets/Asset 34.png"
import wed from "./assets/Asset 35.png"
import fri from "./assets/THURSDAY.png"
// note that fri corresponds to thu
import sat from "./assets/Asset 37.png"
import sun from "./assets/Asset 5.png"


type ClassContentsProps = {
    onBackClick: () => void
}

type ClassContentsState = {
    day: "t" | "w" | "f" | "s" | "su"
}

export class ClassContents extends Component<ClassContentsProps, ClassContentsState> {
    constructor(props: ClassContentsProps) {
        super(props);
        this.state = {day: "t"}
    }

    render = (): JSX.Element => {
        return <div className="page-contents">
            <div className = "pageHeader">
                <div className="empty"></div>
                <img className="classesTitle" src={title}/>
                <img className="close" src={X} onClick={this.props.onBackClick}/>
            </div>
            {this.renderDay()}
        </div>;
    }  

    renderDay = (): JSX.Element => {
        if (this.state.day === "w") {
            return <div>
                <div className="days">
                    <img src={tue} onClick={this.doTClick} className="tue"/>
                    <img src={wed} onClick={this.doWClick} className="wed" id = "selected"/>
                    <img src={fri} onClick={this.doFClick} className="fri"/>
                    <img src={sat} onClick={this.doSClick} className="sat"/>
                    <img src={sun} onClick={this.doSuClick} className="sun"/>
                </div>
                <div className="classes">
                    <div className="classCard">
                        <div>
                            <p>6:30 PM</p>
                        </div>
                        <p>VINYASA FLOW YOGA</p>
                        <p>Flow with breath to movement in this all levels vinyasa yoga class</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>7:30 PM</p>
                        </div>
                        <p>CONSCIOUS WORKSHOP</p>
                        <p>Wisdom discussions on conscious topics to help you live your best life</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>8:30 PM</p>
                        </div>
                        <p>VEGAN DINNER</p>
                        <p>Plant-based and full of love, complimentary to the workshop or drop in for $10</p>
                    </div>
                </div>
            </div>
        }
    
        else if (this.state.day === "t") {
            return <div>
                <div className="days">
                    <img src={tue} onClick={this.doTClick} className="tue" id = "selected"/>
                    <img src={wed} onClick={this.doWClick} className="wed"/>
                    <img src={fri} onClick={this.doFClick} className="fri"/>
                    <img src={sat} onClick={this.doSClick} className="sat"/>
                    <img src={sun} onClick={this.doSuClick} className="sun"/>
                </div>
                <div className="classes">
                    <div className="classCard">
                        <div>
                            <p>6:30 PM</p>
                        </div>
                        <p>VINYASA FLOW YOGA</p>
                        <p>Flow with breath to movement in this all levels vinyasa yoga class</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>7:30 PM</p>
                        </div>
                        <p>SOUNDBATH</p>
                        <p>An immersive sound frequency healing experience, therapeutic to the body and mind</p>
                    </div>
                </div>
            </div>
        }
    
        else if (this.state.day === "f") {
            return <div>
                <div className="days">
                    <img src={tue} onClick={this.doTClick} className="tue"/>
                    <img src={wed} onClick={this.doWClick} className="wed"/>
                    <img src={fri} onClick={this.doFClick} className="fri" id = "selected"/>
                    <img src={sat} onClick={this.doSClick} className="sat"/>
                    <img src={sun} onClick={this.doSuClick} className="sun"/>
                </div>
                <div className="classes">
                    <div className="classCard">
                        <div>
                            <p>6:30 PM</p>
                        </div>
                        <p>VINYASA FLOW YOGA</p>
                        <p>Flow with breath to movement in this all levels vinyasa yoga class</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>6:30 PM</p>
                        </div>
                        <p>PHILOSOPHY NIGHT</p>
                        <p>Making wisdom relevant - discussions based on the preliminary yoga text Bhagavad Gita</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>7:30 PM</p>
                        </div>
                        <p>MANTRA BATH (KIRTAN)</p>
                        <p>A joyful, active and immersive group meditation practice, combining the power of mantra and music</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>8:30 PM</p>
                        </div>
                        <p>VEGAN DINNER</p>
                        <p>Plant-based and full of love, complimentary to the mantra bath or drop in for $10</p>
                    </div>
                </div>
            </div>
        }
        else if (this.state.day === "su") {
            return <div>
                <div className="days">
                    <img src={tue} onClick={this.doTClick} className="tue"/>
                    <img src={wed} onClick={this.doWClick} className="wed"/>
                    <img src={fri} onClick={this.doFClick} className="fri"/>
                    <img src={sat} onClick={this.doSClick} className="sat"/>
                    <img src={sun} onClick={this.doSuClick} className="sun" id = "selected"/>
                </div>
                <div className="classes">
                    <div className="classCard">
                        <div>
                            <p>6 PM</p>
                        </div>
                        <p>RESTORATIVE FLOW YOGA</p>
                        <p>Find deep muscle relaxation, release and balance to reset for the week</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>7:15 PM</p>
                        </div>
                        <p>SOULFEAST</p>
                        <p>Our weekly conscious party night - mantra music, wisdom talk and delicious plant-based dinner</p>
                    </div>
                </div>
            </div>
        }
        else {
            return <div>
                <div className="days">
                    <img src={tue} onClick={this.doTClick} className="tue"/>
                    <img src={wed} onClick={this.doWClick} className="wed"/>
                    <img src={fri} onClick={this.doFClick} className="fri"/>
                    <img src={sat} onClick={this.doSClick} className="sat" id = "selected"/>
                    <img src={sun} onClick={this.doSuClick} className="sun"/>
                </div>
                <div className="classes">
                    <div className="classCard">
                        <div>
                            <p>10 AM</p>
                        </div>
                        <p>YOGA X PILATES</p>
                        <p>A fusion of vinyasa and pilates to build strength, endurance and grace</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>11 AM</p>
                        </div>
                        <p>DEEP STRETCH DETOX YOGA</p>
                        <p>A restorative and detoxifying yoga class to reset and release tight muscles</p>
                    </div>
                    <div className="classCard">
                        <div>
                            <p>12 PM</p>
                        </div>
                        <p>YOGA SLOW FLOW</p>
                        <p>Vinyasa yoga class to help you slow down, breathe and find your inner peace</p>
                    </div>
                </div>
            </div>
        }
    }
    

    doTClick = (): void => {
        this.setState({day: "t"})
    }

    doWClick = (): void => {
        this.setState({day: "w"})
    }

    doFClick = (): void => {
        this.setState({day: "f"})
    }

    doSClick = (): void => {
        this.setState({day: "s"})
    }

    doSuClick = (): void => {
        this.setState({day: "su"})
    }
}