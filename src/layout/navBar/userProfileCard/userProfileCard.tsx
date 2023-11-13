import React, { useEffect, useState } from 'react'
import userIcon from "../../../assets/raw/userIconOne.svg"
import verified from "../../../assets/icons/verified.svg"


// {
//     "_id": "6550ac277033820018292e29",
//     "email": "newreop@gmail.com",
//     "firstName": "test new rep",
//     "lastName": "repo",
//     "referralCode": "AGGSTRTBD",
//     "phoneNumber": "0000000000",
//     "iat": 1699786534
// }

const UserProfileCard = ({isMobile}:any) => {

    const decodeToken = (token: string) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
    };
    const [decodedToken, setDecodedToken] = useState<any | null>(null);

    const token = localStorage.getItem('token');
    useEffect(() => {

        if (token) {
            const decoded = decodeToken(token);
            setDecodedToken(decoded);
        }
    }, []);

    console.log("decodedToken", decodedToken)
    return (
        <div className='user-profile-lower-widet-card' style={{width:`${isMobile ? "100%" : "300px"}`}}>
            <div className="d-flex align-center" style={{ gap: '10px' }}>
                <div className="user-profile">
                    <div className="user-img-wrapper"><img src={userIcon} alt="" /></div>
                </div>
                <div className="d-flex flex-column">
                    <h2 className='fs-14 fw-600'>{decodedToken?.firstName} {decodedToken?.lastName}</h2>
                    <p className='fs-12 d-flex align-center' style={{ gap: '5px' }}>Verified <img src={verified} alt="" width={15} height={15} /></p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard