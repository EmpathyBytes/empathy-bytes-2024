// Standard import statement needed for all React components
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import pic from "/src/images/husna.jpeg"


// TODO 1.0: Read the followin instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0


export default function HusnaCard() {

    return (

        // TODO 1.1: Add your own code here
        // I'm returning a div here because you need to return something, or else you'll get an error. 
        // You should replace this with your own code/delete the div when you're done
        // Visit https://mui.com/material-ui/all-components/ to see all the components you can use
        // You can also look at joshCard.js for an example of how to use MUI components
        // Have fun! Spice up your card however you want!
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    src = {pic}
                    alt="husna_img"
                />
                <CardContent style={{ backgroundColor: "#f0c9f2" }} >
                    <Typography gutterBottom variant="h5" component="div">
                    Husna Jakeer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    I am a second year CS Major :D
                    </Typography>
                </CardContent>
            </CardActionArea>
         </Card>
    );
}