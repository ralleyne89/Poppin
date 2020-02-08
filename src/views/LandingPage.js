import React, { useEffect } from 'react';
import {FaCode} from 'react-icons/fa'
import {APIKey, APIUrl} from '../API'

function LandingPage() {

    useEffect(() => {
        fetch(`${APIUrl}movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    }, [])

    return(
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem'}} /><br/>
        </div>
        </>
    )

}

export default LandingPage;