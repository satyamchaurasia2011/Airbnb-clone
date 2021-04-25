import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
function Home() {
    return (
        <div className='home'>
         <Banner />
         <div className='home_section'>
             
             <Card src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
             title="Entire homes"
             description="Comfortable private places, with room for friends or family."
             
             />
             <Card src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
             title="Unique stays"
             description="Spaces that are more than just a place to sleep."
             />
             <Card src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720"
             title="Online Experiences"
             description="Unique activities we can do together, led by a world of hosts."
             />
         </div>
         <div className='home_section'>
             <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom FLat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="€138/night"
             />
             <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in london"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="€350/night"
             />
             <Card 
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amentities and a fabolous shopping complex nearby"
                price="€70/night"
             />
         </div>
         
        </div>
    );
}


export default Home;