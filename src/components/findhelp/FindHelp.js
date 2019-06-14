import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { IconContext } from "react-icons";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import FindHelp from "./FindHelp.css";
import Map from "./Map";



export default class Contact extends Component {

    state = {
        collapse: false,
        modal: false,
        chevron: false,
    }

    toggleDrop = () => {
        this.setState({ collapse: !this.state.collapse, chevron: !this.state.chevron });
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }


    render() {
        return (
            <>
                <div className="safetyplan-container">
                    <div className="safetyplan-title-container" onClick={this.toggleDrop}>
                        <h3>My Safety Plan</h3>
                        <IconContext.Provider value={{ size: "2em" }}>
                            <FiChevronDown style={{ color: "#2A404A", marginLeft: '20px' }} className={(this.state.chevron) ? ("collapse-chevron") : ("")} />
                        </IconContext.Provider>
                    </div>
                    <Collapse isOpen={this.state.collapse} id="collapse-container">
                        <Card>
                            <CardBody id="collapse" >
                                <h4>1. Use your own coping strategies – without contacting another person:</h4>
                                <p>What are some things that you can do on your own to help you not act on thoughts/urges to harm yourself?</p>
                                <hr></hr>
                                <h4>2. Socialize with others who may offer support as well as distraction from the crisis:</h4>
                                <p>Make a list of people (with phone numbers) and social settings that may help take your mind off things.</p>
                                <hr></hr>
                                <h4>3. Contact family members or friends who may help to resolve a crisis:</h4>
                                <p>Make a list of family members (with phone numbers) who are supportive and who you feel you can talk to when under stress.</p>
                                <hr></hr>
                                <h4>4. Contact mental health professionals or agencies:</h4>
                                <p> List names, numbers and/or locations of clinicians, local emergency rooms, crisis hotlines – carry the Lifeline number 1-800-273-8255</p>
                                <hr></hr>
                                <h4>5. Ensure your environment is safe: </h4>
                                <p>Have you thought of ways in which you might harm yourself? Work with your counselor to develop a plan to limit your access to these means.</p>
                                <hr></hr>
                                <h4>Last Resorts</h4>
                                <p>1-800-273-TALK (8255)</p>
                                <p>1-800-799-4TTY (4889)  TTY</p>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div className="main">
                    <button style={{ outline: 0 }} className="button" onClick={this.toggleModal} >Find A Therapist</button>
                </div>

                <Modal size="lg"
                    isOpen={this.state.modal}
                    toggle={this.toggleModal}
                    className={[this.props.className, "mapModal"].join(',')}
                    centered={true}
                    style={{ objectFit: "contain", overflow: "hidden" }}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Therapists Near Your Location
                    </ModalHeader>
                    <ModalBody>
                        <Map locationResults={this.props.locationResults} />
                    </ModalBody>
                </Modal>
            </>
        )
    }
}