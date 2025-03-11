import React from 'react';
function Card1({ image1, head1, text1, icon1, icon2, icon3, icon4, icon5 }) {
    return (
        <div className='card1'>
            <img src={image1} className='profilecard1'></img>
            <h5 className='card1h5'>{head1}</h5>
            <p className='card1p'>{text1}</p>
            <input className='inputrange' type='range' min='0' max='100'></input>
            <div className='timerange'>
                <p className='timerangep'>1:21</p>
                <p className='timerangep'>-2.36</p>
            </div>
            <div className='flexicons'>
                <i>{icon1}</i>
                <i>{icon2}</i>
                <div className='playbutton'>
                    <i>{icon3}</i>
                </div>
                <i>{icon4}</i>
                <i>{icon5}</i>
            </div>
        </div>
    );
}

export default Card1;