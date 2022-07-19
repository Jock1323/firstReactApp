import React,{useState} from 'react';
import '../src/css/styles.css'
import Button from './components/buttons';
import { Icon } from 'react-icons-kit'
import {alignJustify} from 'react-icons-kit/feather/alignJustify'

function App() {
  let [initialMenu,setToggle]=useState(false);
  let toggleMenu=()=>{
    setToggle(!initialMenu);
  }
  return (
    <div>
      <header className="header">
          <div className='container'>
            <nav className='nav'>
              <a href="#" className='nav__logo'>Cootels</a>
                <div onClick={toggleMenu} className='nav__toggle'>
              <Icon icon={alignJustify} size={32} className="nav__bars" />
              </div>
              <ul className={initialMenu ? 'nav__list nav__list-active':'nav__list'}>
                <li className='nav__item'><a href="#" className='nav__link'>Rooms</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Reservation</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Contacs</a></li>
                <Button className="btn nav__btn nav__btn-mobile">
                get started
              </Button>
              </ul>
              <Button className="btn nav__btn nav__btn-desktop">
                get started
              </Button>
            </nav>
          </div>
      </header>
      <main className='main'>
        <section className='hero'>
          <div className='container hero-container'>
              <div className='hero-info'>
                <h2 className='hero-info__title'>
                Nature, Warmth, and Beauty in One Space
                </h2>
                <p className='hero-info__text'>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.
                </p>
                <Button className='btn hero-info__btn'>
                Reservation
                </Button>
              </div>
              <div className='hero-image'>
                <img src="./images/hero-left.png" alt="a home"/>
                <img src="./images/hero-center.png" alt="a home"/>
                <img src="./images/hero-right.png" alt="a home"/>
              </div>
          </div>
        </section>
        <section className='hotel'>
          <div className='container hotel-container'>
              <div className='hotel-info'>
                <h2 className='hero-info__title hotel-info__title'>
                Cozy and Down to Earth Cootage Hotel in Norway.
                </h2>
                <p className='hero-info__text'>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.
                </p>
                <p className='hero-info__text hotel-info__text'>
                Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.
                </p>
                <Button className='btn hero-info__btn'>
                Learn more
                </Button>
              </div>
              <div className='hotel-image'>
                <img src="./images/hotel.png" alt="a hotel"/>
              </div>
          </div>
        </section>
        <section className='services'>
          <div className='container services-container'>
              <div className='hotel-info services-info'>
                <h2 className='hero-info__title hotel-info__title'>
                Cabin Activities
                </h2>
                <p className='hero-info__text'>
                Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.
                </p>
              </div>
              <div className='hotel-image'>
                <img src="./images/wine.png" alt="a wine"/>
              </div>
          </div>
        </section>
        <section className='hotel'>
          <div className='container hotel-container'>
              <div className='hotel-info'>
                <h2 className='hero-info__title hotel-info__title'>
                100% Organic Food
                </h2>
                <p className='hero-info__text'>
                We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.
                </p>
              </div>
              <div className='hotel-image'>
                <img src="./images/organic-food.png" alt="a food"/>
              </div>
          </div>
        </section>
        <section className='rooms'>
          <div className='container'>
              <div className='rooms-info'>
                <h3 className='rooms-info__title'>
                Many Rooms to Choose
                </h3>
                <p className='rooms-info__text'>
                There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience
                </p>
                <Button className='btn hero-info__btn'>
                  Explore more
                </Button>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
