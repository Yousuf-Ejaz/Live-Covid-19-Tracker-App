import React from 'react'

const Covid = () => {

    const getCovidData= ()  =>  {
        
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <h1>🔴 LIVE</h1>  
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </>
    )
}

export default Covid
