import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { AiTwotoneStar } from 'react-icons/ai';

import './hero.scss';

const Hero = ({ data }) => {
    console.log(data);
    return (
        <div className='hero'>
            <h1>{data.name}</h1>
            <h2>{data.subname && data.subname}</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam similique consequuntur adipisci velit tenetur unde
                sunt deleniti fuga voluptate, possimus porro facilis vero
                explicabo. Animi quos incidunt necessitatibus doloribus
                accusantium?
            </p>
            <div className='hero__stars'>
                {[...Array(5)].map((i) => {
                    return (
                        <span className='star' key={i}>
                            <AiTwotoneStar />
                        </span>
                    );
                })}
            </div>
            <div className='hero__buttons'>
                <button className='watch'>
                    <FaPlay />
                    Watch Now
                </button>
                <button className='trailer '>Trailer</button>
            </div>
        </div>
    );
};

export default Hero;
