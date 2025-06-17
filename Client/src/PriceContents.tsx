import { Component } from "react";
import React from "react";
import title from "./assets/Rates title.png"
import X from "./assets/X symbol.png"
import montly from "./assets/Asset 11 new.svg"
// import montly from "./assets/Asset 8.svg"
import dropIn from "./assets/Asset 13 new.svg"
// import dropIn from "./assets/Asset 7.svg"
import student from "./assets/StudentSpecial.svg"
// import student from "./assets/Asset 9.svg"
// import studentMonthly from "./assets/price box.png"
// import studentMonthly from "./assets/Asset 15 new.svg"
import studentMonthly from "./assets/Asset 25.svg"
// import regularMontly from "./assets/Asset 44.png"
import regularMontly from "./assets/Asset 24.svg"

import studentDropIn from "./assets/stud.svg"
import regularDropIn from "./assets/reg.svg"
// import studentSpecial from "./assets/Asset 46.png"
import studentSpecial from "./assets/Asset 26.svg"

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
                <div className="tier" style={{ marginBottom: '60px' }} >
                    <img className="tierTitle" src={montly} style={{ marginBottom: '60px'}} />
                    <div className="innerTier">
                        <img src={regularMontly}/>
                        <img src={studentMonthly} />
                    </div>
                    <div>
                        <li>access to 40+ yoga classes & events</li>
                        <li>lounge access to study/hangout</li>
                        <li>includes yoga mat rentals</li>
                        <li>plant-based food & drinks</li>
                        <li>first week = FREE buddy pass</li>
                        
                        {/* <li>special in-store discounts</li>
                        <li>less than $4/class for regulars</li>
                        <li>refer a friend & get $10 off</li> */}
                    </div>
                </div>
                <div className="tier">
                    <img className="tierTitle" src={dropIn} style={{ marginBottom: '60px' }} />
                    <div className="innerTier">
                        <img src={regularDropIn}/>
                        <img src={studentDropIn}/>
                    </div>
                </div>

                <div className="tier" style={{ marginBottom: '60px' }} >
                    <img className="tierTitle" src={student} style={{ marginBottom: '60px'}} />
                    <div className="innerTier">
                        <img src={studentSpecial} style={{ marginBottom: '60px'}}/>
                    </div>
                    <div>
                            <li>access to 120+ classes & events</li>
                            <li>lounge access to study/hangout</li>
                            <li>plant-based food</li>
                    </div>
                </div>



            </div>
        </div>;
    }  
}