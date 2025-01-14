import { Component } from "react";
import React from "react";
import title from "./assets/Rates title.png"
import X from "./assets/X symbol.png"
import montly from "./assets/monthly2.png"
import dropIn from "./assets/drop in2.png"
import student from "./assets/student special2.png"
import studentMonthly from "./assets/price box.png"
import regularMontly from "./assets/Asset 44.png"
import studentDropIn from "./assets/Student drop in.png"
import regularDropIn from "./assets/Regular drop in.png"
import studentSpecial from "./assets/Asset 46.png"

type PriceContentsProps = {
    onBackClick: () => void
}

export class PriceContents extends Component<PriceContentsProps, {}> {
    constructor(props: PriceContentsProps) {
        super(props);
    }

    render = (): JSX.Element => {
        return <div className="page-contents">
            <div className = "pageHeader">
                <div className="empty"></div>
                <img className="ratesTitle" src={title}/>
                <img className="close" src={X} onClick={this.props.onBackClick}/>
            </div>
            <div className="allTiers">
                <div className="tier">
                    <img className="tierTitle" src={montly}/>
                    <div className="innerTier">
                        <img src={regularMontly}/>
                        <img src={studentMonthly} style={{ transform: 'scale(1.125) translateY(10px)'}}/>
                    </div>
                    <div>
                        <li>access to 40+ yoga classes & events</li>
                        <li>lounge access to study/hangout</li>
                        <li>plant-based food & drinks</li>
                        <li>first week = FREE buddy pass</li>
                        <li>special in-store discounts</li>
                        <li>less than $4/class for regulars</li>
                        <li>refer a friend & get $10 off</li>
                    </div>
                </div>
                <div className="tier">
                    <img className="tierTitle" src={dropIn}/>
                    <div className="innerTier">
                        <img src={regularDropIn}/>
                        <img src={studentDropIn}/>
                    </div>
                </div>
                <div className="tier">
                    <img className="tierTitle" src={student}/>
                    <div className="innerTier">
                        <img src={studentSpecial}/>
                        <div className="studentList">
                            <li>access to 120+ classes & events</li>
                            <li>lounge access to study/hangout</li>
                            <li>plant-based food</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }  
}