import React, { Component } from "react";
import { withRouter, Redirect } from 'react-router'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from "react-icons";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import Regulatecss from "./Regulate.css"
import API from "../db/API"



class NewRegulate extends Component {

    state = {
        moods: [],
        description: ""
    }

    getTimestamp = () => {
        const date = new Date()
        const date2 = date.toLocaleDateString()
        const timestamp = date.toLocaleTimeString()
        return `{date2}  at  {timestamp}`
    }

    render() {
        const username = this.props.user.username;

        return (

            <>
                <div className="main-container">
                    <h2 className="colin-heading">How are you feeling?</h2>
                    <Dropdown isOpen={this.props.dropdownOpen} toggle={this.props.toggle} className="dropdown-container" style={{ marginTop: '20vh' }} >
                        <DropdownToggle className="regulate-dropdown" style={{ display: 'flex', color: "#4F6D74", flexDirection: 'row', backgroundColor: 'transparent', padding: '10px', width: '50%', justifySelf: 'center', margin: 'auto', marginTop: '30px', border: '1px solid #4F6D74' }}>
                            <div className="button-container">
                                <div style={{ justifySelf: 'flex-start' }}>
                                    <p style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{this.props.label}</p>
                                </div>
                                <IconContext.Provider value={{ size: "2.2em" }}>
                                    <FiChevronDown style={{ color: "#2A404A", marginLeft: '20px' }} />
                                </IconContext.Provider>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu
                            className="dropdown-actual"
                            right={true}
                            modifiers={{
                                setMaxHeight: { enabled: true, order: 890, fn: (data) => { return { ...data, styles: { ...data.styles, overflow: 'auto', maxHeight: 300, backgroundColor: '#9AC4BB', border: 'none', marginLeft: '23%', borderRadius: 'none', width: '50%', fontFamily: 'Montserrat', marginTop: '10px', overflowX: "hidden" }, }; }, },
                            }}>
                            <DropdownItem header>Great</DropdownItem>
                            {
                                (this.props.greatMoods) ? (this.props.greatMoods.map(mood => {
                                    return <DropdownItem key={`${mood.id}--${mood.moodCategoryId}`} onClick={(e) => this.props.select(e, 5)} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider style={{ borderColor: '#466E75' }} />
                            <DropdownItem header>Good</DropdownItem>
                            {
                                (this.props.goodMoods) ? (this.props.goodMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={(e) => this.props.select(e, 4)} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider style={{ borderColor: '#466E75' }} />
                            <DropdownItem header>Okay</DropdownItem>
                            {
                                (this.props.okayMoods) ? (this.props.okayMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={(e) => this.props.select(e, 3)} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider style={{ borderColor: '#466E75' }} />
                            <DropdownItem header>Not So Great</DropdownItem>
                            {
                                (this.props.notSoGreatMoods) ? (this.props.notSoGreatMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={(e) => this.props.select(e, 2)} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider style={{ borderColor: '#466E75' }} />
                            <DropdownItem header>Bad</DropdownItem>
                            {
                                (this.props.badMoods) ? (this.props.badMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={(e) => this.props.select(e, 1)} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                        </DropdownMenu>
                    </Dropdown>

                    <input className="colin-input" type="text" placeholder="Notes - try to keep it shorter than a tweet" onChange={(e) => this.props.changeDesc(e)} style={{ fontFamily: 'Montserrat', color: "#2A404A" }}></input>
                    <div className="main">
                        <button style={{ outline: 0 }} className="button" onClick={this.props.logNewEntry} >Submit</button>
                        <div className={["loader", (this.props.loader ? "active" : '')].join(' ')} onAnimationEnd={() => this.setState({ check: true })}>
                            <div className={["check", (this.state.check ? "active" : '')].join(' ')}>
                                <FiCheck className="check-one" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewRegulate