import React from 'react';
import './search.scss';
import searchIcon from '../../../assets/images/search-icon.svg';
import apartmentIcon from '../../../assets/images/apartmentIcon.svg';

const SearchContainer = (props) => {
  return (
    <div className='search__container'>
      <div className='select__area'>
        <select className='select'>
          <option>For buy</option>
        </select>
      </div>
      <div className='search__area'>
        <div className='search__input__area'>
          <div className='apartment__icon'>
            <img src={apartmentIcon} alt='apartment input icon' />
          </div>
          <div className='input__area'>
            <input
              className='input'
              type='text'
              name='searchHouseInput'
              placeholder='Search by city.zip or Address'
            />
          </div>
        </div>
        <div className='search__button__area'>
          <button className='search__button'>
            <div className='search__image'>
              <img
                src={searchIcon}
                alt='search icon'
                className='search__icon__image'
              />
            </div>{' '}
            <div className='button__text'>Search</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
