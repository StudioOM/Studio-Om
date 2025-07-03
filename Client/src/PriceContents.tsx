import { Component } from "react";
import React from "react";
import title from "./assets/Rates title.png"
import X from "./assets/X symbol.png"
import regularMonthly from './assets/Asset 24.svg';
import studentMonthly from './assets/Asset 25.svg';
import regularDropIn from './assets/reg.svg';
import studentDropIn from './assets/stud.svg';
import studentSpecial from './assets/Asset 26.svg';

type PriceContentsProps = {
    onBackClick: () => void
}

type PriceContentsState = {
    openTiers: {
        [key: string]: boolean;
    }
};

export class PriceContents extends Component<PriceContentsProps, PriceContentsState> {
    state: PriceContentsState = {
        openTiers: {}
    };

    toggleTier = (tierKey: string) => {
        this.setState(prevState => ({
            openTiers: {
                ...prevState.openTiers,
                [tierKey]: !prevState.openTiers[tierKey]
            }
        }));
    };

    constructor(props: PriceContentsProps) {
        super(props);
    }

    render = (): JSX.Element => {
        return (
            <div className="page-contents">
                <div className="pageHeader">
                    <div className="empty"></div>
                    <img className="ratesTitle" src={title} />
                    <img className="close" src={X} onClick={this.props.onBackClick} />
                </div>
                <div className="questions">
                    <div onClick={() => this.toggleTier('monthly')} className="question" style={{ margin: '1rem 0' }}>MONTHLY PASSES</div>
                    {this.state.openTiers['monthly'] && (
                        <div className="answer">
                          <div style={{ display: 'flex', flexDirection: window.innerWidth <= 768 ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                            <img src={regularMonthly} alt="Regular Monthly" style={{ maxWidth: window.innerWidth <= 768 ? '80%' : '45%', marginLeft: '6%' }} />
                            <img src={studentMonthly} alt="Student Monthly" style={{ maxWidth: window.innerWidth <= 768 ? '80%' : '45%', marginLeft: '6%' }} />
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ul style={{
                                listStyleType: 'disc',
                                paddingLeft: '1.5rem',
                                textAlign: 'left',
                                fontSize: window.innerWidth > 768 ? '2.5rem' : '1rem',
                                lineHeight: window.innerWidth > 768 ? '2.5rem' : '1.4rem',
                                fontFamily: '"Courier Prime"',
                                color: '#e0e4d8',
                                maxWidth: window.innerWidth > 768 ? '60rem' : '30rem'
                            }}>
                                <li>Access to 40+ yoga classes & events</li>
                                <li>Lounge access to study/hangout</li>
                                <li>Includes yoga mat rentals</li>
                                <li>Plant-based food & drinks</li>
                                <li>First week = FREE buddy pass</li>
                            </ul>
                          </div>
                        </div>
                    )}

                    <div onClick={() => this.toggleTier('dropin')} className="question" style={{ margin: '1rem 0' }}>DROP IN</div>
                    {this.state.openTiers['dropin'] && (
                        <div className="answer">
                          <div style={{ display: 'flex', flexDirection: window.innerWidth <= 768 ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                            <img src={regularDropIn} alt="Regular Drop-in" style={{ maxWidth: window.innerWidth <= 768 ? '80%' : '45%', marginLeft: '6%' }} />
                            <img src={studentDropIn} alt="Student Drop-in" style={{ maxWidth: window.innerWidth <= 768 ? '80%' : '45%', marginLeft: '6%' }} />
                          </div>
                        </div>
                    )}

                    <div onClick={() => this.toggleTier('student')} className="question" style={{ margin: '1rem 0' }}>STUDENT SPECIAL</div>
                    {this.state.openTiers['student'] && (
                        <div className="answer">
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={studentSpecial} alt="Student Special" style={{ maxWidth: window.innerWidth <= 768 ? '80%' : '45%', marginLeft: '6%' }} />
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ul style={{
                                listStyleType: 'disc',
                                paddingLeft: '1.5rem',
                                textAlign: 'left',
                                fontSize: window.innerWidth > 768 ? '2.5rem' : '1rem',
                                lineHeight: window.innerWidth > 768 ? '2.5rem' : '1.4rem',
                                fontFamily: '"Courier Prime"',
                                color: '#e0e4d8',
                                maxWidth: window.innerWidth > 768 ? '60rem' : '30rem'
                            }}>
                                <li>Access to 120+ classes & events</li>
                                <li>Lounge access to study/hangout</li>
                                <li>Plant-based food</li>
                            </ul>
                          </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}