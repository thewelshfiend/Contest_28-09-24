import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [pincode, setPincode] = useState('');
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (pincode.length === 6 && (Number(pincode) == pincode))
        {
            navigate(`/${pincode}`);
        }
        else
        {
            setShowError(true);
        }
    }

    return (
        <div id='pin-search'>
            <h1>Enter Pincode</h1>
            <form action="" method='GET' onSubmit={handleSubmit}>
                <input type="text" name="pincode" id="pincode" placeholder='Pincode' value={pincode} onChange={(e) => {
                    setPincode(e.target.value)
                    setShowError(false);
                }} />
                <button id='submit'>Lookup</button>
            </form>
            {showError ? <Warning /> : null}
        </div>
    )
}

export default Search

const Warning = () => {
    return (
        <div className='warning'>Error! Invalid Pincode</div>
    )
}