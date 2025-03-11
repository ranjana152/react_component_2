import React from 'react';
function Card2({ image1, head1, icon1, text1, text2 }) {
    return (
        <div className='card2'>
            <i style={{ textAlign: 'center' }}>{image1}</i>
            <h5 className='card1h5'>{head1}</h5>
            <div className='card2flex'>
                <div className='iconp'>
                    <i>{icon1}</i>
                    <p className='card2p'>{text1}</p>
                </div>
                <div className='rangevalue'>
                    <input className='inputrange2' type='range' min='0' max='100'></input>
                    <p className='card1p'>{text2}</p>
                </div>
            </div>
            <div className='card2flex'>
                <div className='iconp'>
                    <i>{icon1}</i>
                    <p className='card2p'>{text1}</p>
                </div>
                <div className='rangevalue'>
                    <input className='inputrange2' type='range' min='0' max='100'></input>
                    <p className='card1p'>{text2}</p>
                </div>
            </div>
            <div className='card2flex'>
                <div className='iconp'>
                    <i>{icon1}</i>
                    <p className='card2p'>{text1}</p>
                </div>
                <div className='rangevalue'>
                    <input className='inputrange2' type='range' min='0' max='100'></input>
                    <p className='card1p'>{text2}</p>
                </div>
            </div>
        </div>
    );
}

export default Card2;