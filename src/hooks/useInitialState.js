import {useState} from 'react';
import initialState from '../../initialState'

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addTodataSensores = payload => {
        setState({
            ...state,
            dataSensores: [...state.dataSensores, payload]
        })
    }
    
    return {
        addTodataSensores,
        state,
    }
}


export default useInitialState;