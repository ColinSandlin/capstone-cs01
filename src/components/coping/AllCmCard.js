import React, { Component } from "react";
import { FiEdit, FiXSquare } from "react-icons/fi";
import { IconContext } from "react-icons";
import API from "../db/API";
import { getUserFromLocalStorage } from '../login/LoginHandler'

import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { thisTypeAnnotation } from "@babel/types";

const theUserIdIs = getUserFromLocalStorage()

export default class AllCmCard extends Component {

    state = {
        showinfo: false,
        userId: theUserIdIs.id,
        title: this.props.copingMechTitle,
        url: this.props.copingMechUrl,
        info: this.props.copingMechInfo,
        info2: this.props.copingMechInfo2,
        moodCategoryId: this.props.moodCategoryId
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    toggleExpansion = () => {
        this.setState({ showinfo: !this.state.showinfo })
    }


    render() {
        return (
            <article key={this.props.copingMechId} className="card" onDoubleClick={this.props.toggleEditModal}>
                <div className="thumb" style={{ backgroundImage: `url(${this.props.copingMechUrl})` }}></div>
                <div className="infos">
                    <h2 className="title">{this.props.copingMechTitle}</h2><h4 className="flag">{this.props.moodCategoryId}</h4>
                    <h3 className="date">{this.props.copingMechInfo}</h3>
                    <p className="txt">{this.props.copingMechInfo2}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Modal size="lg" isOpen={this.props.editModal} className={this.props.className} centered={true}>
                        <ModalHeader charCode="Y">
                            Edit Coping Mechanism
                        </ModalHeader>
                        <ModalBody>
                            < Form >
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input type="text" name="title" id="title" placeholder="Title" defaultValue={this.props.copingMechTitle} onChange={this.handleFieldChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="info">Description</Label>
                                    <Input type="text" name="info" id="info" placeholder="Description" defaultValue={this.props.copingMechInfo} onChange={this.handleFieldChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="additionalInfo">Additional Information</Label>
                                    <Input type="text" name="additionalInfo" id="info2" placeholder="Additional Information" defaultValue={this.props.copingMechInfo2} onChange={this.handleFieldChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="url">Image Url</Label>
                                    <Input type="text" name="url" id="url" placeholder="www.website.com" defaultValue={this.props.copingMechUrl} onChange={this.handleFieldChange} />
                                </FormGroup>
                            </Form >
                        </ModalBody>
                        <ModalFooter>
                            <button className="colin-button" onClick={this.props.updateCmForm}>Submit Edited Coping Mechanism</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </article>
        )
    }
}
