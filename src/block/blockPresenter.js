import React from 'react';
import BlockView from './blockView';

function Block(props){
    const name = props.name;
    const category = props.category;
    const select = props.select;
    const [bgcolor, setBgColor] = React.useState('');
    const [brcolor, setBrColor] = React.useState('');
    
    React.useEffect(
        function(){
            setColor();
        }, []); 


    function setColor() {
        
        if(category === 'move') {
            setBgColor('#f55688');
            setBrColor('#e02062');
        } else if(category === 'if' || category === 'ifEnd') {
            setBgColor('#FBBB40');
            setBrColor('#CF931E');
        } else if(category === 'loop' || category === 'loopEnd') {
            setBgColor('#51ceff');
            setBrColor('#5a9cff');
        } 
    }

    function onDragStart(ev, id) {
            ev.dataTransfer.setData("id", id);
    }


    return (
        <BlockView 
        name = {name} 
        category = {category}
        select = {select}
        bgcolor = {bgcolor}
        brcolor = {brcolor}
        onDragStart = {(ev, id) => onDragStart(ev, id)}
        />
    ); 

}

export default Block;