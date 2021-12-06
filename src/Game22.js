
import React, {useState} from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
import { width } from '@mui/system';
import SimpleDialog from './dialog';
function Game22(props) {
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
            <h2 className='mainTitle'>Level 2</h2>

            <div className='quest'>
                1. Emblem of Windows in the picture
            </div>
            <div className='questCase'>
                <button >
                    <img src="https://bestprogrammer.ru/wp-content/uploads/2020/09/linux-ili-mac-os-e1624520111169-240x400.jpg" alt="display image" className='qi' />
                </button>
                <button onClick={()=> setColor1(!color1)}>
                    <img src="https://media.kasperskydaily.com/wp-content/uploads/sites/90/2020/01/22135132/rip-windows-seven-featured.jpg" alt="display image" className={`qi ${color1 ? 'cb' : 'cb2'}`} />
                </button>
                <button >
                    <img src="https://info-comp.ru/wp-content/uploads/2018/10/What_is_Linux_1_NEW.jpg" alt="display image" className='qi' />
                </button>
            </div>

            <div className='quest'>
                2. Emblem of Linux in the picture
            </div>
            <div className='questCase'>
                <button >
                    <img src="https://bestprogrammer.ru/wp-content/uploads/2020/09/linux-ili-mac-os-e1624520111169-240x400.jpg" alt="display image" className='qi' />
                </button>
                <button >
                    <img src="https://media.kasperskydaily.com/wp-content/uploads/sites/90/2020/01/22135132/rip-windows-seven-featured.jpg" alt="display image" className='qi' />
                </button>
                <button onClick={()=> setColor2(!color2)}>
                    <img src="https://info-comp.ru/wp-content/uploads/2018/10/What_is_Linux_1_NEW.jpg" alt="display image" className={`qi ${color2 ? 'cb' : 'cb2'}`} />
                </button>
            </div>

            <div className='quest'>
                3. Emblem of Mac os in the picture
            </div>
            <div className='questCase'>
                <button onClick={()=> setColor3(!color3)}>
                    <img src="https://bestprogrammer.ru/wp-content/uploads/2020/09/linux-ili-mac-os-e1624520111169-240x400.jpg" alt="display image" className={`qi ${color3 ? 'cb' : 'cb2'}`} />
                </button>
                <button >
                    <img src="https://media.kasperskydaily.com/wp-content/uploads/sites/90/2020/01/22135132/rip-windows-seven-featured.jpg" alt="display image" className='qi' />
                </button>
                <button >
                    <img src="https://info-comp.ru/wp-content/uploads/2018/10/What_is_Linux_1_NEW.jpg" alt="display image" className='qi' />
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
                va2={true}
            />
        </div>
    )
}

export default Game22
