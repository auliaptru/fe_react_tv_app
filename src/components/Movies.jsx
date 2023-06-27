import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

import Scroll from './scroll';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import './movies.scss';

const Movies = ({ data, handleSelect, selectMovie }) => {
    const {
        ref,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleNextBtnClick,
        handlePrevBtnClick,
        handleWheel,
        scroll,
    } = Scroll();

    useEffect(() => {
        const element = ref.current;
        element.addEventListener('wheel', handleWheel);

        return () => {
            element.removeEventListener('wheel', handleWheel);
        };
    }, [handleWheel, ref]);

    Movies.propTypes = {
        data: PropTypes.array.isRequired,
        handleSelect: PropTypes.func.isRequired,
        selectMovie: PropTypes.number.isRequired,
    };

    return (
        <div className='movies'>
            <h3>Next Movies</h3>
            <div className='movies__wrapper'>
                {scroll && (
                    <div className='movies__next left'>
                        <SlArrowLeft
                            className='arrowIcon'
                            onClick={handlePrevBtnClick}
                        />
                    </div>
                )}
                <div
                    className='movies__list'
                    ref={ref}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {data.map((movie, i) => (
                        <div
                            className={`movie__box ${
                                selectMovie === i ? 'active' : ''
                            }`}
                            key={i}
                            onClick={() => handleSelect(i, movie.bg)}
                        >
                            <img src={movie.img} alt='' />
                        </div>
                    ))}
                </div>
                <div className='movies__next right'>
                    <SlArrowRight
                        className='arrowIcon'
                        onClick={handleNextBtnClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default Movies;
