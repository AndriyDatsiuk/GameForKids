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
import { useNavigate } from 'react-router';
export default function SimpleDialog(props) {
  let navigate = useNavigate();
    function nextLevel(){
      if(props.va){
        navigate('/game22');
        onClose();
      }
      if(props.va2){
        navigate('/game23');
        onClose();
      }
      if(props.va3){
        navigate('/change');
        onClose();
      }
      if(props.val){
        navigate('/game32');
        onClose();
      }
      if(props.val2){
        navigate('/game33');
        onClose();
      }
      if(props.val3){
        navigate('/change');
        onClose();
      }
      if(props.level < props.model.levels.length - 1){
        props.model.setCurentLevel(props.level+1);
      }
      props.model.rocketPosition.bottom = 0;
      onClose();
    }

    function startLevel(){
      props.model.setCurentLevel(1);
      props.model.rocketPosition.bottom = 0;
      onClose();
    }

    const { onClose, open } = props;
    console.log("sss: " + props.stars)
  
    const handleClose = () => {
      onClose();
    };
  
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogContent style={{textAlign: 'center'}}>
          <div style={{marginTop:"-10px"}}>
            <img src={props.stars > 0 ? win : lose} width={100}/>
            <h1>{props.stars > 0 ? "Congratulations!" : "I am sorry, but you have to try again."}</h1>
          </div>
          {props.stars > 0 ?
          <div>
             {(props.level == props.model.levels.length - 1) &&
              <h3>That was the last level.</h3>
             }
            <h3>You succesfully complete this level with {props.stars} stars!</h3>
            <StarIcon fontSize="large" style={{color: '#FBBB40'}}/>
            {props.stars > 1 ? <StarIcon fontSize="large" style={{color: '#FBBB40'}}/> : <StarBorderIcon fontSize="large" style={{color: '#FBBB40'}}/> }
            {props.stars > 2 ? <StarIcon fontSize="large" style={{color: '#FBBB40'}}/> : <StarBorderIcon fontSize="large" style={{color: '#FBBB40'}}/> }
          </div>
          : 
          <div>

          </div>
          }
          <DialogActions style={{marginTop:"20px"}}>

          <Button variant="contained" autoFocus onClick={handleClose} style={{backgroundColor: "rgb(245, 86, 136)"}}>
            Try again
          </Button>
          {(props.stars > 0 && props.level < props.model.levels.length - 1) &&
              <Button variant="contained" autoFocus onClick={nextLevel} style={{backgroundColor: "#40FBD9"}}>
                  Next level
              </Button>
          }
          {(props.level == props.model.levels.length - 1) &&
              <Button variant="contained" autoFocus onClick={startLevel} style={{backgroundColor: "#40FBD9"}}>
                  Start again the challenges
              </Button>
          }
          
        </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };