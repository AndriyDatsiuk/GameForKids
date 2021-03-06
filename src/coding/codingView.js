import '../Main.css';
import React, { Component } from 'react' ;
import Block from '../block/blockPresenter';
import Command from '../command/commandPresenter';
import SimpleDialog from '../dialog';
import {ReactComponent as HelpIcon} from '../help.svg';
import {ReactComponent as DeleteIcon} from '../delete.svg';
import {ReactComponent as PlayIcon} from '../play_arrow.svg';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { border, width } from '@mui/system';

function CodingView(props) {
  
    let blocks = []
    let commands = []

    const [open, setOpen] = React.useState(props.open);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
 

  props.blocks.forEach ((b, i) => {
    blocks.push(
      <div key={b.name + i} style={{marginBottom: 15}}>
        <Block name={b.name} category={b.category} select={b.select}/>
      </div>
    );
  });

  props.commands.forEach ((c) => {
    commands.push(
      <div key={c.id} 
      style={{top: c.top,  position: 'absolute'}}
      
      onDragOver={(e)=>props.onDragOverDelete(e)} 
      onDragStart={(e)=>props.onDragStartDelete(e, c.id)}>
  
        <div className={c.name === "If" || c.name === "loop" ? "command-select" : "command"} 
             id={props.insideCommand(c) ? "inside" : ""} 
             draggable
             style = {{backgroundColor: props.setBgColor(c.category), borderColor: props.setBrColor(c.category)}}>
                <span id="label">{c.name}</span>
                {c.select.length > 0 &&
                    <select id="select" onChange={(e) => props.selectChange(e, c.category)}>
                        {c.select.map((x,y) => 
                          <option key={y} value={y+1}>{x}</option>
                        )}
                     </select>
                }
            </div>
          </div>
    
    );
  });

  return (
    <div className="coding">
      <div className="sidebar">
      <Link to='/change' style={{textDecoration: 'none',}}>
        
      <div style={{ backgroundColor: 'rgb(245, 86, 136)', padding: 10, color: 'white', fontSize: 22, borderWidth: 2, borderColor: 'rgb(224, 32, 98)'}} 
                  >
                  Go back   
              </div>
        
         </Link>
        <h3>Actions</h3>
        <div className="wip">
          {blocks}
        </div>
      </div>
      <div className="coding-panel">
        <div className="description">
            <h3>Level {props.level}: {props.levelTitle}</h3>
            <p>{props.levelIstructions} </p>
            <p>Drag and drop the actions here:</p>
        </div>
        <div className="commands">
              <div className="droppable" 
                    onDrop={(e)=>props.onDrop(e)}>
                     {commands}
              </div>
        </div>
        <div className="buttons-panel">
          {props.errorMessage != "" && <Alert severity="error">{props.errorMessage}</Alert>}
          <div className="delete-panel" onDragOver={(e)=>props.onDragOver(e)} onDrop={(e)=>props.onDropDelete(e)}>
            <DeleteIcon id="delete"/>
          </div>
          <div className="action-panel">
            <button 
              onClick={handleClickOpen} 
              id="help-btn" 
              className="round-btn">
              <HelpIcon/>
            </button>
            <button onClick={props.myMove} id="play-btn" className="round-btn"><PlayIcon id="play-icon"/></button>
          </div>
        </div>
      </div>
      <SimpleDialog
        open={props.open}
        onClose={props.handleClose}
        stars={props.stars}
        level={props.level}
        model = {props.model} 
      />
    </div>
  );
}

export default CodingView;
