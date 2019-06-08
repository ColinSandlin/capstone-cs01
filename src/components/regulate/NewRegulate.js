import React, { Component } from "react";
import { withRouter, Redirect } from 'react-router'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from "react-icons";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { Form, Container, Grid, Header, Message, Segment } from 'semantic-ui-react';
import Regulatecss from "./Regulate.css"
import Select from 'react-select';


export default class NewRegulate extends Component {

    state = {
        dropdownOpen: false,
        moods: [],
        label: "I'm feeling...",
        labelCategory: "",
        selectedMood: "",
        description: "",
        loader: false,
        check: false
    }

    getTimestamp = () => {
        const date = new Date()
        const date2 = date.toLocaleDateString()
        const timestamp = date.toLocaleTimeString()
        return <p>{`${date2}  at  ${timestamp}`}</p>
    }

    select = (event) => {
        this.setState({
            label: event.target.innerText,
            selectedMood: event.target.innerText
        })
    }

    toggle = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }



    render() {
        const username = this.props.user.username;

        return (

            <>
                <h2 className="colin-heading">How are you feeling?</h2>
                <div className="main-container">
                    <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle}
                        className="dropdown-container"
                        style={{ marginTop: '20vh' }}
                    >
                        <DropdownToggle className="regulate-dropdown" style={{ display: 'flex', color: "#4F6D74", flexDirection: 'row', backgroundColor: 'transparent', padding: '10px', width: '50%', justifySelf: 'center', margin: 'auto', marginTop: '30px', border: '1px solid #4F6D74' }}>
                            <div className="button-container">
                                <div style={{ justifySelf: 'flex-start' }}>
                                    <p style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{this.state.label}</p>
                                </div>
                                <IconContext.Provider value={{ size: "2.2em" }}>
                                    <FiChevronDown style={{ color: "#2A404A", marginLeft: '20px' }} />
                                </IconContext.Provider>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu
                            className="dropdown-actual"
                            right={true}
                            // style={{ backgroundColor: '#CCE4DE', border: 'none', marginLeft: '25%', maxHeight: '100' }}
                            onChange={(e) => this.setState({ selectedMood: e.target.value })}
                            modifiers={{
                                setMaxHeight: {
                                    enabled: true,
                                    order: 890,
                                    fn: (data) => {
                                        return {
                                            ...data,
                                            styles: {
                                                ...data.styles,
                                                overflow: 'auto',
                                                maxHeight: 300,
                                                backgroundColor: '#9AC4BB',
                                                border: 'none',
                                                marginLeft: '23%',
                                                borderRadius: 'none',
                                                width: '50%',
                                                fontFamily: 'Montserrat'
                                            },
                                        };
                                    },
                                },
                            }}>
                            <DropdownItem header>Great</DropdownItem>
                            {
                                (this.props.greatMoods) ? (this.props.greatMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Good</DropdownItem>
                            {
                                (this.props.goodMoods) ? (this.props.goodMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Okay</DropdownItem>
                            {
                                (this.props.okayMoods) ? (this.props.okayMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Not So Great</DropdownItem>
                            {
                                (this.props.notSoGreatMoods) ? (this.props.notSoGreatMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Bad</DropdownItem>
                            {
                                (this.props.badMoods) ? (this.props.badMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select} style={{ fontFamily: 'Montserrat', marginTop: '7px', marginLeft: '8px' }}>{mood.name}</DropdownItem>
                                })) : null
                            }
                        </DropdownMenu>
                    </Dropdown>

                    <input className="colin-input" type="text" placeholder="Notes, keep it shorter than a tweet" onChange={(e) => this.setState({ description: e.target.value })}></input>
                    <div className="main">
                        <button
                            style={{ outline: 0 }}
                            className="button"
                            onClick={() => this.setState({ loader: true })}
                        >Submit</button>


                        <div
                            className={["loader", (this.state.loader ? "active" : '')].join(' ')}
                            onAnimationEnd={() => this.setState({ check: true })}
                        >
                            <div
                                className={["check", (this.state.check ? "active" : '')].join(' ')}
                                onAnimationEnd={() => this.setState({ check: true })}
                            >
                                <FiCheck className="check-one" />
                            </div>
                        </div>

                    </div>
                </div>
            </>


        )
    }
}