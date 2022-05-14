import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

function Details() {
    const [open, setOpen] = useState(false)
    return (
        <div className='event-details'>
        <div>
            <h3>Event Name</h3>
        </div>
        <div className='width80'>
            <h4>
                Description
            </h4>
            <label >
            Participants should report at the workshop session before 10 mins of the scheduled time
- Participants will be eligible for certificate only if they are present for the whole session
 - Any inappropriate behaviour during the session will not be entertained
- Everyone should turn on camera
- Registration fes is INR 499
- Fill in the necessary details as shown in the form below and complete the payment
- All decisions taken by the committee will be final
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
                    1.sdfsdf
                    <br />
                    2.sdfsdfsdf
                    <br />
                    1.sdfofn sdfi dfiodjsiof hdsiofh dsoifhsfoisdfhdsoifhsf oisdfhoisdf hsdoifhdsoif doisdh fiosf soifs
                    <br />
                    2.sdfsdfsdf
                    <br />
                    1.sdfsdf
                    <br />
                    2.sdfsdsfdnskfnfj fldsf sdiofhsf oisdhfoids fdsfh siofh sfodsih fodsif hfoidshfiosddfsdf
                    <br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            <div id="submit-button">
            <Button variant="outlined">Submit Entry</Button>
            </div>
            
        </div>
    )
}

export default Details