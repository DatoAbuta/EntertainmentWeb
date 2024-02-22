import './home.css';
import Data from './data.json';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Recommender from '../Recommender';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Home() {

  const handleClick = (title: string) => {
      Data.map((item) => {
        if (item.title === title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      })
  };

  return (
    <div className="div">
    <h1 className='trend'>Trending</h1>
    <div className='splide-container'>
      <Splide options={{ perPage: 1, gap: '1rem', arrows: false }}> 
        {Data.filter((item) => item.isTrending).map((item) => (
          <SplideSlide key={item.title}>
            <div className='main'>
              <img className='pimg' src={item.thumbnail.regular.small} alt={item.title} />
              <div className='bkmrk' onClick={() => handleClick(item.title)}>
                {item.isBookmarked ? (
                  <img src='assets/icon-bookmark-full.svg' alt='Bookmarked' />
                ) : (
                  <img src='assets/icon-bookmark-empty.svg' alt='Not Bookmarked' />
                )}
              </div>
              <div className='play'>
                <img src='assets/icon-play.svg' alt='Play' />
                <h1 className='ptitle'>Play</h1>
              </div>
              <div className='rame'>
                <div className='ramesrame'>
                  <h1 className='year'>{item.year}</h1>
                  <div className='dot'></div>
                  <img className='iimg' src='assets/icon-nav-movies.svg' alt='Movies' />
                  <h1 className='categ'>{item.category}</h1>
                  <div className='dot'></div>
                  <h1 className='rating'>{item.rating}</h1>
                </div>
                <h1 className='tit'>{item.title}</h1>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
    <Recommender title="Recommended For You" items={Data} />
    </div>
  );
}
