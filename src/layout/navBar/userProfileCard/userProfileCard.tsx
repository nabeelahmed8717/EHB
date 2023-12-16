import { useEffect, useState } from 'react'
import userIcon from "../../../assets/raw/user-default.png"
import verified from "../../../assets/icons/verified.svg"


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
    }, [token]);

    return (
        <div className='user-profile-lower-widet-card' style={{width:`${isMobile ? "100%" : "300px"}`}}>
            <div className="d-flex align-center" style={{ gap: '10px' }}>
                <div className="user-profile">
                    <div className="user-img-wrapper"><img src={userIcon} alt="" /></div>
                </div>
                <div className="d-flex flex-column">
                    <h2 className='fs-14 fw-600'>{decodedToken?.firstName} {decodedToken?.lastName}</h2>
                    {/* <p className='fs-12 d-flex align-center' style={{ gap: '5px' }}>Verified <img src={verified} alt="" width={15} height={15} /></p> */}
                    <p className='fs-12 d-flex align-center' style={{ gap: '5px' }}>Non Verified </p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard