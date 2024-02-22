import React from 'react';
import './Recommender.css';
import { Item } from './item.interface';


interface RecommenderProps {
  title: string;
  items: Item[];
}

const Recommender: React.FC<RecommenderProps> = ({ title, items }) => {
  const recommendedItems = items.filter(item => !item.isBookmarked && !item.isTrending);

  return (
    <div className="recommender">
      <h2 className="recommender-title">{title}</h2>
      <div className="recommender-items">
        {recommendedItems.map((item, index) => (
          <div key={index} className="recommender-item">
            <div className="xuina">
            <img className='foto' src={item.thumbnail.regular.small} alt={item.title} />
            <div className='rame1'>
                <div className='ramesrame1'>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommender;
