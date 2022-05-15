import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import DonutChart from "react-donut-chart";
import useTransactions from '../../useTransaction';

import useStyles from './styles';
import "./styles.css";
import { ConditionalRender } from '../ReusableComponents';

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData, reactDonutChartBackgroundColor } = useTransactions(title);

    let reactDonutChartStrokeColor = "#FFFFFF";

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                {/* <Doughnut data={chartData} /> */}
                <div className="App">
                    <ConditionalRender condition={chartData.length > 0}>
                        <DonutChart
                            width={500}
                            data={chartData}
                            strokeColor={reactDonutChartStrokeColor}
                            colors={reactDonutChartBackgroundColor}
                            innerRadius={0.5}
                            selectedOffset={0.01} />
                    </ConditionalRender>

                </div>

            </CardContent>
        </Card>
    );
};

export default Details
