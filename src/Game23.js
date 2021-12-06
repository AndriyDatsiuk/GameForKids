
import React, {useState} from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
import SimpleDialog from './dialog';
function Game23(props) {
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
            <h2 className='mainTitle'>Level 3</h2>

            <div className='quest'>
                1. Part of the program is written in the  Java
            </div>
            <div className='questCase'>
                <button >
                    <img src="https://i.stack.imgur.com/AZUmQ.jpg" alt="display image" className='qi' />
                </button>
                <button onClick={()=> setColor1(!color1)}>
                    <img src="https://beginnersbook.com/wp-content/uploads/2019/07/Java_program_simple_interest.jpg" alt="display image" className={`qi ${color1 ? 'cb' : 'cb2'}`} />
                </button>
                <button >
                    <img src="https://image.winudf.com/v2/image1/Y29tLmt2YXNzeXUuY29kaW5nLmNwcF9zY3JlZW5fMV8xNTc3ODg1NTE3XzA3OA/screen-1.jpg?fakeurl=1&type=.jpg" alt="display image" className='qi' />
                </button>
            </div>

            <div className='quest'>
                2. Part of the program is written in the JavaScript
            </div>
            <div className='questCase'>
                <button onClick={()=> setColor2(!color2)}>
                    <img src="https://i.stack.imgur.com/AZUmQ.jpg" alt="display image" className={`qi ${color2 ? 'cb' : 'cb2'}`} />
                </button>
                <button >
                    <img src="https://beginnersbook.com/wp-content/uploads/2019/07/Java_program_simple_interest.jpg" alt="display image" className='qi' />
                </button>
                <button >
                    <img src="https://image.winudf.com/v2/image1/Y29tLmt2YXNzeXUuY29kaW5nLmNwcF9zY3JlZW5fMV8xNTc3ODg1NTE3XzA3OA/screen-1.jpg?fakeurl=1&type=.jpg" alt="display image" className='qi' />
                </button>
            </div>

            <div className='quest'>
                3. Part of the program is written in the C++
            </div>
            <div className='questCase'>
                <button >
                    <img src="https://i.stack.imgur.com/AZUmQ.jpg" alt="display image" className='qi' />
                </button>
                <button >
                    <img src="https://beginnersbook.com/wp-content/uploads/2019/07/Java_program_simple_interest.jpg" alt="display image" className='qi' />
                </button>
                <button onClick={()=> setColor3(!color3)}>
                    <img src="https://image.winudf.com/v2/image1/Y29tLmt2YXNzeXUuY29kaW5nLmNwcF9zY3JlZW5fMV8xNTc3ODg1NTE3XzA3OA/screen-1.jpg?fakeurl=1&type=.jpg" alt="display image" className={`qi ${color3 ? 'cb' : 'cb2'}`} />
                </button>
            </div>
            <div style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 40 }}>
                <div onClick={handleClickOpen} style={{ backgroundColor: 'rgb(245, 86, 136)', padding: 10, color: 'white', fontSize: 22, borderWidth: 2, borderColor: 'rgb(224, 32, 98)', width: 200, textAlign: 'center' }} >
                    Show score
                </div>
            </div>
            <SimpleDialog
                open={open}
                onClose={onClose}
                stars={counter}
                level={level}
                model={props.model}
                va3={true}
            />
        </div>
    )
}

export default Game23
