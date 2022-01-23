import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

// Redux Actions
import {getRestaurant} from '../redux/reducers/restaurant/restaurant.action';

// Components
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/NightLife'
import Nutrition from '../components/Nutrition';

function HomePage() {
    const {type} = useParams();
    const dispatch = useDispatch ();

    useEffect(()=>{
        dispatch(getRestaurant());
    },[]);

    return (
        <>
            <div className='my-5'>
                {type === "delivery" && <Delivery />}
                {type === "dining" && <Dining />}
                {type === "night" && <NightLife />}
                {type === "nutri" && <Nutrition />}
            </div>    

        </>
    )
}

export default HomePage
