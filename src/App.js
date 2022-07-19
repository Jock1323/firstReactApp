import React,{useState} from 'react';
import '../src/css/styles.css'
import Button from './components/buttons';
import { Icon } from 'react-icons-kit'
import {alignJustify} from 'react-icons-kit/feather/alignJustify'
import Accordion from './components/accordion';
import Slider from './components/slider';

function App() {
  let [initialMenu,setToggle]=useState(false);
  let toggleMenu=()=>{
    setToggle(!initialMenu);
  }

  let [accordionData,SetData]=useState([
    {
      title:'1. Choose a room and date',
      text:'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    },
    {
      title:'2. Check for room availability',
      text:'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    },
    {
      title:'3. Enjoy your room',
      text:'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    }
  ]);
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
              <div className='rooms__inner'>
                    <article className='rooms-card'>
                      <div className='rooms-card__img'>
                        <img src="./images/room1.png" alt="single room"/>
                      </div>
                      <div className='rooms-card__info'>
                        <h4 className='rooms-card__title'>
                        Single Room
                        </h4>
                        <p className='rooms-card__text'>
                        Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.
                        </p>
                        <a href="#" className='rooms-card__link'>
                          Learn more
                          <img src="./images/arrow-right.svg" alt="an arrow-right"/>
                        </a>
                      </div>
                    </article>
                    <article className='rooms-card'>
                      <div className='rooms-card__img'>
                        <img src="./images/room2.png" alt="double room"/>
                      </div>
                      <div className='rooms-card__info'>
                        <h4 className='rooms-card__title'>
                        Double Room
                        </h4>
                        <p className='rooms-card__text'>
                        Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two.
                        </p>
                        <a href="#" className='rooms-card__link'>
                          Learn more
                          <img src="./images/arrow-right.svg" alt="an arrow-right"/>
                        </a>
                      </div>
                    </article>
                    <article className='rooms-card'>
                      <div className='rooms-card__img'>
                        <img src="./images/room3.png" alt="cootage"/>
                      </div>
                      <div className='rooms-card__info'>
                        <h4 className='rooms-card__title'>
                        Cootage
                        </h4>
                        <p className='rooms-card__text'>
                        Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends
                        </p>
                        <a href="#" className='rooms-card__link'>
                          Learn more
                          <img src="./images/arrow-right.svg" alt="an arrow-right"/>
                        </a>
                      </div>
                    </article>
                </div>
          </div>
        </section>
        <section className='get-room'>
            <div className='container get-room__container'>
              <div className='get-room__info'>
                <span className='get-room__info-span'>
                Start your journey!
                </span>
                  <h4 className='get-room__info-title'>
                  How to Get My Room?
                  </h4>
                  <p className='get-room__info-text'>
                  You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point  
                  </p>
                  <div className='get-room__info-btns'>
                      <Button className='btn'>
                        contact us
                      </Button>
                      <Button className="get-room__info-explore">
                        Explore more room
                      </Button>
                  </div>
              </div>
              <ul className='get-room__accordion'>
               {
                accordionData.map((item,index)=>{
                  return <Accordion data={item} key={index+1}/>
                })
               }
              </ul>
            </div>
        </section>
        <section className='clients'>
          .<div className='container'>
            <h3 className='clients__title'>
            Hear From Our Happy Customers
            </h3>
            <Slider/>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className='container footer__container'>
          <aside className='footer-left'>
            <a href='#' className='footer__logo'>
            Cootels
            </a>
            <p className='footer__text'>
            Your Best Private Hideway From Crowd. Back to Nature.
            </p>
            <div className='footer-icons'>
              <a href="#">
              <img src="./images/twitter.svg" alt="twitter logo"/>
              </a>
              <a href="#">
              <img src="./images/instagram-logo.svg" alt="twitter logo"/>
              </a>
              <a href="#">
              <img src="./images/facebook.svg" alt="twitter logo"/>
              </a>
            </div>
          </aside>
          <aside className='footer-right'>
            <div className='footer-rooms'>
              <h4 className='footer-rooms__title'>Rooms</h4>
              <a href="#" className='footer-rooms__text'>Single Room</a>
              <a href="#" className='footer-rooms__text'>Double Room</a>
              <a href="#" className='footer-rooms__text'>Cabin</a>
              <a href="#" className='footer-rooms__text'>Custom Room</a>
            </div>
            <div className='footer-rooms'>
              <h4 className='footer-rooms__title'>Reservation</h4>
              <a href="#" className='footer-rooms__text'>See the Steps</a>
              <a href="#" className='footer-rooms__text'>Best Time</a>
            </div>
            <div className='footer-rooms'>
              <h4 className='footer-rooms__title'>Contact</h4>
              <a href="#" className='footer-rooms__text'>Our Number</a>
              <a href="#" className='footer-rooms__text'>Our Email</a>
              <a href="#" className='footer-rooms__text'>Our Location</a>
            </div>
          </aside>
          <div className='footer-icons-hidden'>
              <a href="#">
              <img src="./images/twitter.svg" alt="twitter logo"/>
              </a>
              <a href="#">
              <img src="./images/instagram-logo.svg" alt="twitter logo"/>
              </a>
              <a href="#">
              <img src="./images/facebook.svg" alt="twitter logo"/>
              </a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
