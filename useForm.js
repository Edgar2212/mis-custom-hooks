import { useState } from "react";


export const useForm = ( initianState = {}) => {
  
    const [values, setvalues] = useState(initianState);

    const reset = () => {
        setvalues( initianState );
    }

    const handleInputChange = ({ target }) => {
       
        setvalues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];

};
