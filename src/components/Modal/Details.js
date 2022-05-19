import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

function Details({ eventDetails }) {
    return (
        <div className='event-details'>
        <div>
            <h3>{ eventDetails.title }</h3>
        </div>
        <div className='width80'>
            <h4>
                Description
            </h4>
            <label >
            { eventDetails.description}
            </label>
        </div>
            <div className="width80">
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                >
                    <Typography>Rules</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {
                        eventDetails.rules.map((rule)=> <div>{rule}</div>)
                    }
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            <div id="submit-button">
            <Button href={ eventDetails.formLink } target={'_blank'}  variant="outlined">Submit Entry</Button>
            </div>
            
        </div>
    )
}

export default Details