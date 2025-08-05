import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function InfoBox() {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1683141081466-29239d3b4838?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Info = {
        city: "Delhi",
        feelslike: 2.84,
        temp: 25.05,
        tempMin: 25.5,
        humidity: 47,
        weather : "haze",
    };
    return (
        <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={INIT_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {Info.temp}&deg;C</p>
          <p>Humidity = {Info.humidity}</p>
          <p>Min Temp = {Info.tempMin}&deg;C</p>
          <p>Max Temp = {Info.tempMax}&deg;C</p>
          <p>The weather can be describe as <i>{Info.weather}</i> and feels like {Info.feelslike}&deg;C </p>
          </Typography>
        </CardContent>
    </Card>
        </div>
    );
} 