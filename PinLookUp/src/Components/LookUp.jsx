import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from './Cards';

const LookUp = () => {
    const { pin } = useParams();
    const [msg, setMsg] = useState('');
    const [POs, setPOs] = useState([]);
    const [updatedPOs, setUpdatedPOs] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [pinFound, setPinFound] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
            const json = await data.json();
            setMsg(json[0].Message);

            if (json[0].Message !== "No records found")
            {
                setPOs(json[0].PostOffice);
                setUpdatedPOs(json[0].PostOffice);
                setPinFound(true);
            }
            else
            {
                setPinFound(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        setUpdatedPOs(
            POs.filter((PO) => PO.Name.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search]);
    
    return (
        <div id='look-up'>
            <div id='heading'>
                <h1>Pincode: {pin}</h1>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            <h2>Message: <span>{msg}</span></h2>
            <div id='search-div'>
                <img src='https://www.svgrepo.com/show/532551/search-alt-1.svg' width={20} />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Filter'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div id='card-container'>
                {
                    pinFound ? (
                        updatedPOs && (
                            updatedPOs.map((PO) => (
                                <Card
                                    key={PO.Name}
                                    name={PO.Name}
                                    branchType={PO.BranchType}
                                    deliveryStatus={PO.DeliveryStatus}
                                    state={PO.State}
                                    district={PO.District}
                                    division={PO.Division}
                                />
                            ))
                        )
                    ) : (
                        <h5  style={{ position: 'relative', left: '76%', paddingTop: '20%' }} className='warning'>Couldn’t find the postal data you’re looking for…</h5>
                    )
                }
            </div>
        </div>
    );
}

export default LookUp;