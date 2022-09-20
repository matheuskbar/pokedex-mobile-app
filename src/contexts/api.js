import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const ApiContext = createContext({});

export default function ApiProvider({children}) {
    const [types, setTypes] = useState([]);

    // https://pokeapi.co/api/v2/
    useEffect(() => {
        async function loadTypes() {
            setTypes([]);
            let response = await axios.get('https://pokeapi.co/api/v2/type/')
            response.data.results.forEach((item) => {
                setTypes(oldArray => [...oldArray, item])
            })
        }

        loadTypes();
    }, [])

    return (
        <ApiContext.Provider value={{ types }}>
            { children }
        </ApiContext.Provider>
    )
}
