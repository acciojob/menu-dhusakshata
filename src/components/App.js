import React, {useEffect, useState} from 'react'
import "../styles/App.css"
import Card from './Card'
let objArr = 
    [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: './images/item-1.jpeg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: './images/item-2.jpeg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: './images/item-3.jpeg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: './images/item-4.jpeg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: './images/item-5.jpeg',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: './images/item-6.jpeg',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: './images/item-7.jpeg',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: './images/item-8.jpeg',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: './images/item-9.jpeg',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ]
  const App = () => {
    const [currentCatagory, setCurrentCatagory] = useState('')
    function setCatagoryValue(value) {
      setCurrentCatagory(value);
    }
    const filteredMenuItems = currentCatagory
    ? objArr.filter((item) => item.category === currentCatagory)
    : objArr;
    return (
      <div  id='main'>
      <div className='heading-div'>
          <h1 className='heading'>Out Menu</h1>
          <div className='hrline'></div>
      </div>

      <div className='filter-row'>
            <p onClick={() => setCatagoryValue('')}
            id='filter-btn-0' 
            >All</p>

            <p onClick={() => setCatagoryValue('breakfast')} 
           // id='filter-btn-1'
            id="filter-btn-1"
            data-test-id="menu-item-breakfast"
            >Breakfast</p>

            <p onClick={() => setCatagoryValue('lunch')} 
           // id='filter-btn-2'
            id="filter-btn-2"
            data-test-id="menu-item-lunch"
            >Lunch</p>

            <p onClick={() => setCatagoryValue('shakes')} 
           // id='filter-btn-3'
            id="filter-btn-3"
            data-test-id="menu-item-shakes"
            >Shakes</p>

          </div>


      <div className="cardsContainer">
        {/* <div className="single-card">
          <div className="left">
            <img src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" alt="dish img" />
          </div>
          <div className="right">
            <div className="top-row">
              <div className="title">Buttery Panckakes</div>
              <div className="Price">$12</div>
            </div>
            <div className="description">
            skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.
            </div>
          </div>
        </div> */}
        {
            filteredMenuItems.map((singleObj) => {
              return (
            <Card
            imgUrl={singleObj.img}
            Title={singleObj.title}
            price={singleObj.price}
            description={singleObj.desc}
            key={singleObj.id} 
            />
              )
            })
        }
      </div>
      </div>
    )
  }
  
  export default App