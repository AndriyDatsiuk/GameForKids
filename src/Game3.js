
import React, { useState } from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
import './Main.css'
import SimpleDialog from './dialog';




function Game3(props) {
    const [word, setWord] = useState('');
    const [exel, setExel] = useState('');
    const [point, setPoint] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = React.useState(props.open);
    const [star, setStar] = React.useState(0);
    const [level, setLevel] = React.useState(1);
    const [counter, setCounter] = useState(0);
    const handleClickOpen = () => {
        setOpen(true);
        setCounter(document.querySelectorAll('.quest2').length)
     
    };
    const onClose = () => {
        setOpen(false);
    };

   

    return (
        <div className='wrapper'>
            <h1 className='mainTitle'>Help Panda find answers</h1>
            <Link to='/change' style={{ textDecoration: 'none', }}>
                <div style={{ backgroundColor: 'rgb(245, 86, 136)', padding: 10, color: 'white', fontSize: 22, borderWidth: 2, borderColor: 'rgb(224, 32, 98)', width: 200, textAlign: 'center', position: 'absolute', top: 20, left: 20 }} >
                    Go back
                </div>
            </Link>
            <h2 className='mainTitle'>Level 1</h2>

            <div className='quest'>
                1. If you want to write text you use
            </div>
            <input
                className='inputClass'
                name="word"
                value={word}
                onChange={(e) => setWord(e.target.value)} />
            {word === 'word' &&
                <div className='quest2'>
                    thats true
                </div>

            }
            {console.log(star)}
            <div className='quest'>
                2. If you want to do electronic tablet you use
            </div>
            <input
                className='inputClass'
                name="exel"
                value={exel}
                onChange={(e) => setExel(e.target.value)} />
            {exel === 'excel' &&
                <div className='quest2'>
                    thats true
                </div>

            }
            <div className='quest'>
                3. If you want to do presentation you use
            </div>
            <input
                className='inputClass'
                name="poin"
                value={point}
                onChange={(e) => setPoint(e.target.value)} />
            {point === 'power point' &&
                <div className='quest2'>
                    thats true
                </div>
            }
            <div className='quest'>
                4. If you want to send a letter you use
            </div>
            <input
                className='inputClass'
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            {email === 'email' &&
                <div className='quest2'>
                    thats true
                </div>
            }



            <div style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 40 }}>
                <div onClick={handleClickOpen} style={{ backgroundColor: 'rgb(245, 86, 136)', padding: 10, color: 'white', fontSize: 22, borderWidth: 2, borderColor: 'rgb(224, 32, 98)', width: 200, textAlign: 'center' }} >
                    Next Level
                </div>
            </div>
            <SimpleDialog
                open={open}
                onClose={onClose}
                stars={counter}
                level={level}
                model={props.model}
                val={true}
            />
        </div>
        
    )
}

export default Game3
