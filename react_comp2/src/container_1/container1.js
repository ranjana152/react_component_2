import React from 'react';
import '../style.css'
import Card1 from './card1';
import { FaStepBackward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { GoFileDirectoryFill } from "react-icons/go";
import profilecard from '../Assets/cardprofile.jpg'
import Card2 from './card2';
function Container1() {
    return (
        <div className='container1'>
            <Card1 image1={profilecard} head1='FIND MY' text1='Dababy' icon1={<FaStepBackward />} icon2={<FaBackward />} icon3={<FaPlay />} icon4={<FaForward />} icon5={<FaStepForward />} />
            <Card2 image1={<GoFileDirectoryFill />} head1='Files' icon1={<CiFileOn />} text1='design.ps' text2='50%' />
        </div>
    );
}
export default Container1;