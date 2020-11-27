import React, { Component } from 'react';
import MainLayout from './layouts/MainLayout';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.fetchPatientData = this.fetchPatientData.bind(this);
    }

    componentDidMount() {
        this.fetchPatientData();
    }

    render() {
        return (
            <MainLayout Patient={this.state} NextPatient={this.fetchPatientData}></MainLayout>
        );
    }

    async fetchPatientData() {
        const response = await fetch('patient');
        const data = await response.json();
        this.setState(data);
    }
}
