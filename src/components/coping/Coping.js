import React, { Component } from "react";
import Carousel from 're-carousel'
import IndicatorDots from './indicator-dots'
import GreatCmCard from './GreatCmCard'
import GoodCmCard from './GoodCmCard'
import OkayCmCard from './OkayCmCard'
import NotSoGreatCmCard from './NotSoGreatCmCard'
import BadCmCard from './BadCmCard'
import AllCmCard from './AllCmCard'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import cardCss from './cardCss.css'
import { getUserFromLocalStorage } from '../login/LoginHandler'

import API from "../db/API"

import { FiPlus } from "react-icons/fi"


const theUserIdIs = getUserFromLocalStorage()

export default class Coping extends Component {

    state = {
        userId: theUserIdIs.id
    }




    render() {
        return (
            <>
                {
                    // Pulls up the "add new coping mech" entry form modal
                    (this.props.moodCategoryId === "" || this.props.moodCategoryId === undefined) ? (<p onClick={this.props.toggleAddModal}><FiPlus />Add</p>) : null
                }
                <Carousel widgets={[IndicatorDots]} showArrows={true} >

                    {
                        (this.props.moodCategoryId === 5) ? (
                            this.props.greatCopingMechs.map(copingMech => {
                                return <GreatCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                            })
                        ) :
                            (this.props.moodCategoryId === 4) ? (
                                this.props.goodCopingMechs.map(copingMech => {
                                    return <GoodCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                                })
                            ) :
                                (this.props.moodCategoryId === 3) ? (
                                    this.props.okayCopingMechs.map(copingMech => {
                                        return <OkayCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                                    })
                                ) :
                                    (this.props.moodCategoryId === 2) ? (
                                        this.props.notSoGreatCopingMechs.map(copingMech => {
                                            return <NotSoGreatCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                                        })
                                    ) :
                                        (this.props.moodCategoryId === 1) ? (
                                            this.props.badCopingMechs.map(copingMech => {
                                                return <BadCmCard key={copingMech.id} copingMechId={copingMech.id} copingMechUrl={copingMech.url} copingMechTitle={copingMech.title} copingMechInfo={copingMech.info} copingMechInfo2={copingMech.info2} selectedMood={this.props.selectedMood} />
                                            })
                                        ) : (this.props.moodCategoryId === "" || this.props.moodCategoryId === undefined) ? (
                                            this.props.allCopingMechs.map(copingMech => {
                                                return <AllCmCard
                                                    key={copingMech.id}
                                                    copingMechId={copingMech.id}
                                                    copingMechUrl={copingMech.url}
                                                    copingMechTitle={copingMech.title}
                                                    copingMechInfo={copingMech.info}
                                                    copingMechInfo2={copingMech.info2}
                                                    copingMechMoodCategory={copingMech.moodCategoryId}
                                                    moodCategoryId={this.props.moodCategoryId}
                                                    handleFieldChange={this.props.handleFieldChange}
                                                    toggleDropdown={this.props.toggleDropdown}
                                                    copingLabel={this.props.copingLabel}
                                                    dropdownOpen={this.props.dropdownOpen}
                                                    editCopingLabel={this.props.editCopingLabel}
                                                    loadCms={this.props.loadCms} />
                                            })
                                        ) : null
                    }
                </Carousel>
                <Modal size="lg" isOpen={this.props.addModal} className={this.props.className} centered={true}>
                    <ModalHeader charCode="Y">
                        Add New Coping Mechanism
                        </ModalHeader>
                    <ModalBody>
                        < Form >
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input type="text" name="title" id="addTitle" placeholder="Add a title" onChange={this.props.handleFieldChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="info">Description</Label>
                                <Input type="text" name="info" id="addInfo" placeholder="Add a description" onChange={this.props.handleFieldChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="additionalInfo">Additional Information</Label>
                                <Input type="text" name="additionalInfo" id="addInfo2" placeholder="Add any additional information" onChange={this.props.handleFieldChange} />
                            </FormGroup>
                            {/* Replace below with a firebase upload button */}
                            <FormGroup>
                                <Label for="url">Image Url</Label>
                                <Input type="text" name="url" id="addUrl" placeholder="Add a URL" onChange={this.props.handleFieldChange} />
                            </FormGroup>
                            <Dropdown isOpen={this.props.dropdownOpen} toggle={this.props.toggleDropdown} id="addCopingMoodCategoryId">
                                <DropdownToggle caret>
                                    {this.props.copingLabel}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={(e) => this.props.selectMoodCat(e, 5)} > Great</DropdownItem>
                                    <DropdownItem onClick={(e) => this.props.selectMoodCat(e, 4)} > Good</DropdownItem>
                                    <DropdownItem onClick={(e) => this.props.selectMoodCat(e, 3)} > Okay</DropdownItem>
                                    <DropdownItem onClick={(e) => this.props.selectMoodCat(e, 2)} > Not So Great</DropdownItem>
                                    <DropdownItem onClick={(e) => this.props.selectMoodCat(e, 1)} > Bad</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Form >
                    </ModalBody>
                    <ModalFooter>
                        <button className="colin-button" onClick={this.props.submitNewCmEntry}>Add to the Arsenal</button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}