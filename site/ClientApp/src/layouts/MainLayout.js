import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "components/Sidebar/Sidebar.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import DescriptionIcon from '@material-ui/icons/Description';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

export default function MainLayout(props) {

    const classes = useStyles();

    const { NextPatientCallback, Patient } = props;

    return (
        <div className={classes.wrapper}>
            <Sidebar Patient={Patient} NextPatientCallback={NextPatientCallback} />
            <div className={classes.mainPanel}>
                <CustomTabs
                    title={`${Patient.lastName} ${Patient.firstName[0]}.${Patient.middleName[0]}.`}
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: "Карточка",
                            tabIcon: DescriptionIcon,
                            tabContent: (

                                <Grid container className={classes.fullWidthGrid} spacing={2}>
                                    <Grid item xs={3}>
                                        <Grid container spacing={5}>
                                            <Grid item className={classes.fullWidthGrid}>
                                                <TextField
                                                    label="Пол"
                                                    fullWidth={true}
                                                    value={((Patient.gender === "m") ? "Мужчина" : "Женщина")}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    />
                                            </Grid>
                                            <Grid item className={classes.fullWidthGrid}>
                                                <TextField
                                                    label="Наличие сахарного диабета"
                                                    value={(Patient.diabetic) ? "Да" : "Нет"}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (Patient.diabetic) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item className={classes.fullWidthGrid}>
                                                <TextField
                                                    label="Курение"
                                                    value={(Patient.smoker) ? "Да" : "Нет"}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (Patient.smoker) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item className={classes.fullWidthGrid}>
                                                <TextField
                                                    label="Рост"
                                                    value={`${Patient.height} см`}
                                                    fullWidth={true}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item className={classes.fullWidthGrid}>
                                                <TextField
                                                    label="Вес"
                                                    value={`${Patient.weight} кг`}
                                                    fullWidth={true}
                                                    InputProps={
                                                        ((Patient.height - Patient.weight - 110) < 0) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                        }}
                                                />
                                            </Grid>
                                            <Grid item className={classes.fullWidthGrid}>
                                                <TextField
                                                    label="Артериальное давление"
                                                    value={`${Patient.sbp} / ${Patient.dbp}`}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (((Patient.sbp) > 130) || ((Patient.dbp) > 85)) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>
                                            <Grid item className={classes.fullWidthGrid}>
                                                <TextField
                                                    label="Общий холестерин"
                                                    value={`${Patient.cholesterol.toString()[0]},${Patient.cholesterol.toString()[1]} ммоль/л`}
                                                    fullWidth={true}
                                                    InputProps={
                                                        (Patient.cholesterol > 45) ? {
                                                            readOnly: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <WarningIcon color="error" />
                                                                </InputAdornment>
                                                            )
                                                        } : {
                                                                readOnly: true
                                                            }}
                                                />
                                            </Grid>                                            
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={7}>

                                    </Grid>
                                </Grid>
                            )
                        },
                        {
                            tabName: "Оценка физической активности (IPAQ)",
                            tabIcon: DirectionsBikeIcon,
                            tabContent: (
                                <p>Оценка физической активности (IPAQ)</p>
                            )
                        },
                        {
                            tabName: "Социальные факторы",
                            tabIcon: SentimentVeryDissatisfiedIcon,
                            tabContent: (
                                <p>Социальные факторы</p>
                            )
                        },
                        {
                            tabName: "Риск",
                            tabIcon: WarningIcon,
                            tabContent: (
                                <p>Риск</p>
                            )
                        },
                        {
                            tabName: "Рекомендации",
                            tabIcon: InfoIcon,
                            tabContent: (
                                <p>Рекомендации</p>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    );
}