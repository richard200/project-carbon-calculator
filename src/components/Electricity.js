import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

function Electricity() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const API_URL = 'https://www.carboninterface.com/api/v1/estimates';
        const API_KEY = 'Q6iFLA4c4lwxp0gbwlKg';

        const headers = {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        };

        const data = {
            "type": "electricity",
            "electricity_unit": "mwh",
            "electricity_value": 42,
            "country": "us",
            "state": "fl"
        };

        setLoading(true);
        fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <div>
          <Navigation/>
           
        </div>
    );
}

export default Electricity;
