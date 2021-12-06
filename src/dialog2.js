import * as React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import win from './img/Panda_win.png';
import lose from './img/Panda_lose.png';

export default function SimpleDialog2(props) {

  
    return (
      <Dialog  >
        <DialogContent style={{textAlign: 'center'}}>
          <div style={{marginTop:"-10px"}}>
            <img src={3 > 0 ? win : lose} width={100}/>
            <h1>{3 > 0 ? "Congratulations!" : "I am sorry, but you have to try again."}</h1>
          </div>
          {3 > 0 ?
          <div>
            
            <h3>You succesfully complete this level with {props.stars} stars!</h3>
            <StarIcon fontSize="large" style={{color: '#FBBB40'}}/>
            {3 > 1 ? <StarIcon fontSize="large" style={{color: '#FBBB40'}}/> : <StarBorderIcon fontSize="large" style={{color: '#FBBB40'}}/> }
            {3 > 2 ? <StarIcon fontSize="large" style={{color: '#FBBB40'}}/> : <StarBorderIcon fontSize="large" style={{color: '#FBBB40'}}/> }
          </div>
          : 
          <div>

          </div>
          }
          
        </DialogContent>
      </Dialog>
    );
  }
  
  