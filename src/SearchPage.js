import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearcjPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button
                variant = "outlined"
                >
                  Cancellation Flexibility
                </Button>
                <Button
                variant = "outlined"
                >
                  Type of place
                </Button>
                <Button
                variant = "outlined"
                >
                  Price
                </Button>
                <Button
                variant = "outlined"
                >
                  Rooms and Beds
                </Button>
                <Button
                variant = "outlined"
                >
                  More filters
                </Button>
            </div>
            <SearchResult
            img='https://a.cdn-hotels.com/cos/hotelsnearme/type_hotel.jpg'
            location='Private room in cemter of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine'
            star={4.73}
            price='€30'
            total = '€117 total'
            />
             <SearchResult
            img='https://a0.muscache.com/im/pictures/951af71a-2cdb-45b5-9255-f341b3a8c82a.jpg?im_w=1200'
            location='Entire cabin in Saint Malo'
            title='Peaceful, Whimsical Retreat - Cabin 17'
            description='4 guest · 2 bedroom · 2 beds · 1 bathroom · Wifi · Air conditioning · Kitchen · Free parking'
            star={4.87}
            price='€109'
            total = '€109 total'
            />
              <SearchResult
            img='https://a0.muscache.com/im/pictures/c73356a5-1354-4ab0-ba3f-b47cf1c6cec6.jpg?im_w=1200'
            location='Entire guest house in Floyd'
            title='Tiny House @ TinyHouseFamily'
            description='2 guest · Studio · 1 bed · 1 bathroom · Wifi · Air conditioning · Kitchen · Free parking'
            star={4.99}
            price='€64.80'
            total = '€89.59 total'
            />

            <SearchResult
            img='https://a0.muscache.com/im/pictures/47ec810a-5454-4aae-94ec-24445eca322f.jpg?im_w=1200'
            location='Entire flat in Florence'
            title='Kuker Carriage House-Downtown/Near 195&100'
            description='4 guest · 1 bedroom · 2 beds · 1 bathroom · Wifi · Air conditioning · Kitchen · Free parking'
            star={5.0}
            price='€81.57'
            total = '€83 total'
            />

            <SearchResult
            img='https://a0.muscache.com/im/pictures/78d8f5b6-676d-4662-ad6e-de049e87cdba.jpg?im_w=1200'
            location='Entire flat in Laurinburg'
            title="Chaffeur's Apartment on History Property "
            description='2 guests · 1 bedroom · 1 beds · 1 bathroom · Wifi · Air conditioning · Kitchen · Free parking'
            star={4.99}
            price='€51.86'
            total = '€51.86 total'
            />
        </div>
    )
}

export default SearcjPage
