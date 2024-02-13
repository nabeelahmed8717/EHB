import React from 'react'
import '../franchises.scss'
import mapWrapperOneImage from '../../../assets/wrapper/map-wrapper-1.png'
import mapWrapperTwoImage from '../../../assets/wrapper/map-wrapper-2.png'
import { useNavigate } from 'react-router-dom'
import { Tabs, TabsProps } from 'antd'
import RioInfo from './tabsContent/rioInfo'

const FranchiseDetails = () => {
    const navigate = useNavigate()

    const onChange = (key: string) => {
        console.log(key);
    };
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'ROI Details & Franchise Value',
            children: <RioInfo/>,
        },
        {
            key: '2',
            label: 'Seller Registration Capacity Details',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Income On Delivery',
            children: 'Content of Tab Pane 3',
        },
    ];

   

    return (
        <div className='main-wrapper-franchise'>
            <h3 style={{ color: "#fff", paddingTop: "20px", marginLeft: "20px", cursor: "pointer" }} onClick={() => navigate('/book-franchise')}>Go Back</h3>
            {/* <NavBar /> */}
            <img src={mapWrapperOneImage} className='main-map-wrapper-one' alt="" />
            <img src={mapWrapperTwoImage} className='main-map-wrapper-two' alt="" />


            <div className="wrapper-tabs">
                <Tabs rootClassName='details-tabs' defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

            <br />
            <br />

        </div>
    )
}

export default FranchiseDetails