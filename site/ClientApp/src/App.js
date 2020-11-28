import React, { Component } from 'react';
import MainLayout from './layouts/MainLayout';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            firstName: "",
            gender: "",
            lastName: "",
            middleName: "",
            cholesterol: 0,
            sugar: 0,
            prediction: {
                currentRisk: 0,
                tunedRisk: 0,
                features: []
            }
        };
        this.fetchPatientData = this.fetchPatientData.bind(this);
    }

    componentDidMount() {
        this.fetchPatientData();
    }

    render() {
        return (
            <MainLayout Patient={this.state} NextPatientCallback={this.fetchPatientData}></MainLayout>
        );
    }

    async fetchPatientData() {
        const patientResponse = await fetch('patient');
        const patient = await patientResponse.json();
        const predictionsResponse = await fetch('model/Predictions.json');
        const predictions = await predictionsResponse.json();
        const r = Math.floor(Math.random() * predictions.predictions.length);
        const rndPrediction = {
            ...{
                features: [...predictions.features],
                currentContributions: [...predictions.contributions[r]],
                currentRisk: predictions.predictions[r]
            }
        }
        var prediction = { currentRisk: rndPrediction.currentRisk, tunedRisk: rndPrediction.currentRisk, features: [] };
        for (let i = 0; i < rndPrediction.features.length; i++) {
            prediction.features.push({
                feature: rndPrediction.features[i],
                currentContribution: Math.floor(Math.abs(rndPrediction.currentContributions[i][0])*1000),
                tunedContribution: Math.floor(Math.abs(rndPrediction.currentContributions[i][0])*1000)
                });
        }
        prediction.features.sort(function (f1, f2) { return (f1.currentContribution < f2.currentContribution ) })
        const data = {
            ...patient, prediction: { ...prediction }
        };
        //console.log(data.prediction);
        this.setState(data);
    }
}
