
import React, {useState} from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
import { borderColor, width } from '@mui/system';
import SimpleDialog from './dialog';
function Game2(props) {
    const [mouse, setMouse] = useState(false);
   
    const [color1, setColor1] = useState(false);
    const [color2, setColor2] = useState(false);
    const [color3, setColor3] = useState(false);
    const [exel, setExel] = useState('');
    const [point, setPoint] = useState('');
    const [open, setOpen] = React.useState(props.open);
    const [star, setStar] = React.useState(3);
    const [level, setLevel] = React.useState(1);
    const [counter, setCounter] = useState(0);
    const handleClickOpen = () => {
        setOpen(true);
        setCounter(document.querySelectorAll('.cb').length)
     
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='wrapper'>
            <h1 className='mainTitle'>Help Panda find words to image</h1>
            <Link to='/change' style={{ textDecoration: 'none', }}>
                <div style={{ backgroundColor: 'rgb(245, 86, 136)', padding: 10, color: 'white', fontSize: 22, borderWidth: 2, borderColor: 'rgb(224, 32, 98)', width: 200 , textAlign: 'center', position: 'absolute', top: 20, left: 20}} >
                    Go back
                </div>
            </Link>
            <h2 className='mainTitle'>Level 1</h2>

            <div className='quest'>
                1. Comp mouse is on image
            </div>
            <div className='questCase'>
            <div className='questCase'>
                <button onClick={()=> setColor1(!color1)}>
                    <img src="https://lube.ua/files/uploads/HP-USB-Fingerprint-Mouse_1.jpg" alt="display image" className={`qi ${color1 ? 'cb' : 'cb2'}`}
                    />
                </button>
                <button >
                    <img src="https://images.ua.prom.st/2450148059_w640_h640_2450148059.jpg" alt="display image" className='qi' />
                </button>
                <button >
                    <img src="https://consumerhm.gov.ua/images/cache/62115c9ce62e8b1c5baf44ee4067e369_h376.jpg" alt="display image" className='qi' />
                </button>
            </div>
            </div>

            <div className='quest'>
                2. Keyboard is on image
            </div>
            <div className='questCase'>
                <button onClick={()=> setColor2(!color2)}>
                    <img src="https://itc.ua/wp-content/uploads/2018/05/0.jpg" alt="display image" className={`qi ${color2 && 'cb'}`}
                    

                    />
                </button>
                <button >
                    <img src="https://images.adsttc.com/media/images/5c46/7e12/284d/d15f/c100/0425/newsletter/35.jpg?1548123658" alt="display image" className='qi' />
                </button>
                <button >
                    <img src="http://i.otzovik.com/objects/b/1710000/1706095.png" alt="display image" className='qi' />
                </button>
            </div>

            <div className='quest'>
                3. Part of compucter is on image
            </div>
            <div className='questCase'>
                <button >
                    <img src="https://consumerhm.gov.ua/images/cache/62115c9ce62e8b1c5baf44ee4067e369_h376.jpg" alt="display image" className='qi' />
                </button>
                <button >
                    <img src="http://i.otzovik.com/objects/b/1710000/1706095.png" alt="display image" className='qi' />
                </button>
                <button onClick={()=> setColor3(!color3)}>
                    <img src="https://lube.ua/files/uploads/HP-USB-Fingerprint-Mouse_1.jpg" alt="display image" className={`qi ${color3 && 'cb'}`} />
                </button>
            </div>
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
                va={true}
            />
            
        </div>
        
    )
}

export default Game2
