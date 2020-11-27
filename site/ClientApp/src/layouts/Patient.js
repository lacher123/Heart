import React, { Component } from 'react';
import Button from "../components/CustomButtons/Button";

export class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = { patient: {}, loading: true };
    }

    componentDidMount() {
        this.fetchPatientData();
    }

    render() {
        let patient = this.state.patient;
        return (
            <div>
                <h1>
                    {patient.firstName}
                </h1>
                <Button color="primary" round onClick={() => { this.fetchPatientData() }}>Следующий пациент</Button>
            </div>
        );
    }

    async fetchPatientData() {
        const response = await fetch('patient');
        const data = await response.json();
        this.setState({ patient: data, loading: false });
    }
}
