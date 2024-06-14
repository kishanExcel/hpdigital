"use client";
import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface StatsChartCardProps {
    dataSent: { name: string; value: number }[];
    label: string;
    text2: string;

}

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '',
        },
    },
};

const StatsChartCard: React.FC<StatsChartCardProps> = ({
    dataSent,
    label,
    text2

}) => {
    const dataSentChart = {
        labels: dataSent.map((item) => item.name),
        datasets: [
            {
                label: label,
                data: dataSent.map((item) => item.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };
    return (
        <>
            <Card sx={{ boxShadow: 3, borderRadius: "20px", margin: "0px 20px 0px 20px" }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: "flex", alignItems: "end", flexDirection: "column" }}>
                                <Typography variant="h6" textAlign="center">
                                    {label}
                                </Typography>
                                <Typography variant="h6" textAlign="center" color={"#631363"}>
                                    5000
                                </Typography>
                            </Box>
                            <Line options={options} data={dataSentChart} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ marginBottom: 2, boxShadow: 3, borderRadius: "20px", margin: "10px 20px 10px 20px" }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6">
                        {text2}
                    </Typography>
                    <Typography variant="h6" color={"#631363"}>
                        $2500.00
                    </Typography>
                </CardContent>
            </Card>
        </>

    );
};

export default StatsChartCard;