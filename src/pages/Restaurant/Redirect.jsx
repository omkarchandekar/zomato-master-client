import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom'

function Redirect() {
    const {id} = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/restaurant/${id}/overview`);
      });

    return (
        <div>
        </div>
    )
}

export default Redirect;
