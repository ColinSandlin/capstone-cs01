import React, { Component } from "react";
import { withRouter, Redirect } from 'react-router'
import Moment, { moment } from "react-moment";
import timezone from 'moment-timezone'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thisTypeAnnotation } from "@babel/types";
import { IconContext } from "react-icons";
import { FiChevronDown } from "react-icons/fi";
import { Form, Button, Container, Grid, Header, Message, Segment } from 'semantic-ui-react';



export default class NewRegulate extends Component {

    state = {
        dropdownOpen: false,
        moods: [],
        label: "Select a feeling",
        selectedMood: ""
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

    getMoods

    render() {
        const username = this.props.user.username;

        return (

            <>
                <div className="main-container">
                    <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle}
                        className="dropdown-container"
                        style={{ marginTop: '40vh' }}
                    >
                        <DropdownToggle className="regulate-dropdown" style={{ display: 'flex', color: "white", flexDirection: 'row', backgroundColor: 'transparent', padding: '10px', width: '50%', justifySelf: 'center', margin: 'auto', border: '1px solid #4F6D74' }}>
                            <div className="button-container">
                                <div style={{ justifySelf: 'flex-start' }}>
                                    {this.state.label}
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
                                                backgroundColor: '#CCE4DE',
                                                border: 'none',
                                                marginLeft: '23%',
                                                borderRadius: 'none',
                                                width: '50%'
                                            },
                                        };
                                    },
                                },
                            }}>
                            <DropdownItem header>Great</DropdownItem>
                            {
                                (this.props.greatMoods) ? (this.props.greatMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Good</DropdownItem>
                            {
                                (this.props.goodMoods) ? (this.props.goodMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Okay</DropdownItem>
                            {
                                (this.props.okayMoods) ? (this.props.okayMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Not So Great</DropdownItem>
                            {
                                (this.props.notSoGreatMoods) ? (this.props.notSoGreatMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select}>{mood.name}</DropdownItem>
                                })) : null
                            }
                            <DropdownItem divider />
                            <DropdownItem header>Bad</DropdownItem>
                            {
                                (this.props.badMoods) ? (this.props.badMoods.map(mood => {
                                    return <DropdownItem key={mood.id} onClick={this.select}>{mood.name}</DropdownItem>
                                })) : null
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <Button onClick={this.newRegulateEntry}>New Entry</Button>
                </div>
            </>


        )
    }
}