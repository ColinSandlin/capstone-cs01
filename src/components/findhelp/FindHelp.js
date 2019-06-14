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
    }

    toggleDrop = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }


    render() {
        return (
            <>
                <div className="safetyplan-container">
                    <div className="safetyplan-title-container" onClick={this.toggleDrop}>
                        <h2>My Safety Plan</h2>
                        <IconContext.Provider value={{ size: "2em" }}>
                            <FiChevronDown style={{ color: "#2A404A", marginLeft: '20px' }} />
                        </IconContext.Provider>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <h3>Know When to Get Help.</h3>
                                <p></p>
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