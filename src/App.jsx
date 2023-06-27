import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Movies from './components/Movies';

import './app.scss';

const movies = [
    {
        id: 1,
        name: 'Godzilla',
        subname: 'kings of the monster',
        img: 'https://ntvb.tmsimg.com/assets/p13796942_v_h8_ab.jpg?w=1280&h=720',
        bg: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/512e8cd3d9d182cc45791bfeaa008f8037c74f643b848f80adceb9ed25d79cdb._RI_TTW_.jpg',
    },
    {
        id: 2,
        name: 'Annihilation',
        subname: '',
        img: 'https://2.bp.blogspot.com/-IwBYutyEcyA/XRgsI0WBOXI/AAAAAAAAWLg/Smn4kZif4_wvNNp0NUJhEP5IjwjlcmL5wCLcBGAs/w1200-h630-p-k-no-nu/annihilation-wide.jpg',
        bg: 'https://images.jdmagicbox.com/comp/jd_social/news/2018aug08/image-232800-ch3jbu3do6.jpg',
    },
    {
        id: 3,
        name: 'Star Wars',
        subname: 'The Force Awakens',
        img: 'https://w0.peakpx.com/wallpaper/493/108/HD-wallpaper-star-wars-star-wars-episode-vii-the-force-awakens-star-wars-the-last-jedi-star-wars-the-rise-of-skywalker.jpg',
        bg: 'https://wallpapers.com/images/hd/star-wars-characters-hd-plzcoaffexgf4h81.webp',
    },
    {
        id: 4,
        name: 'The Avengers',
        subname: '',
        img: 'https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.webp',
        bg: 'https://wallpapers.com/images/hd/avengers-hd-n46ustf69mbhzv2r.webp',
    },
    {
        id: 5,
        name: 'The Batman',
        subname: '',
        img: 'https://wallpapers.com/images/high/the-batman-red-typography-xprud3ja1odeqzo8.webp',
        bg: 'https://wallpapers.com/images/high/the-batman-cast-omh18mhv80wyuowl.webp',
    },
    {
        id: 6,
        name: 'Spider-man',
        subname: 'Across the spider-verse',
        img: 'https://images.thedirect.com/media/article_full/spider-verse-posters.jpg?imgeng=cmpr_75/',
        bg: 'https://www.kakuchopurei.com/wp-content/uploads/2023/04/Spider-Man-Across-The-Spider-Verse-Poster-1.jpg',
    },
];

const App = () => {
    const [selectMovie, setSelectMovie] = useState(0);
    const [bg, setBg] = useState(
        'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/512e8cd3d9d182cc45791bfeaa008f8037c74f643b848f80adceb9ed25d79cdb._RI_TTW_.jpg'
    );

    const handleSelect = (id, bg) => {
        setSelectMovie(id);
        setBg(bg);
    };

    return (
        <div
            className='app__movie'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${bg})`,
            }}
        >
            <div className='app__movie-wrapper'>
                <div className='app__navbar'>
                    <Navbar />
                </div>
                <div className='app__hero'>
                    <Hero data={movies[selectMovie]} />
                </div>
                <div className='app__movies'>
                    <Movies
                        data={movies}
                        selectMovie={selectMovie}
                        handleSelect={handleSelect}
                    />
                </div>
            </div>
        </div>
    );
};
export default App;
