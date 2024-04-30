import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/components/landingInfo.css"
import Icon from "../images/homepage/next-page-icon.png"
import { Link } from "gatsby"

function LandingCardInfo(props) {
    return (
      <div className="card-wrapper">
        <Box>
          <React.Fragment>
            <Card className="card">
              <CardContent className="card-content">
                  <Typography variant="h1" component="div" className="header">
                      {props.title}
                  </Typography>
                  <Typography variant="body1" className="content">
                      {props.body}
                  </Typography>
      
                  <CardActions>
                  <Link style={{ textDecoration: 'none' }} to={props.link}>
                    <Button className="button">
                      {props.btnTitle}
                      <img src={Icon} alt="View Page"></img>
                    </Button>
                    </Link>
                      
                      
                  </CardActions>
                  
              </CardContent>
            </Card>
          </React.Fragment>
        </Box>
      </div>
    );
  }
  export default LandingCardInfo