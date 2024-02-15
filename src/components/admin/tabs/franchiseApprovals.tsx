import { Button, Table, Tag } from 'antd';
import React from 'react'
import { EyeOutlined } from '@ant-design/icons';

const FranchiseApprovals = () => {

    const dataSource = [
        {
            id:"1",
            forBookingID: 'GS-A01-L1',
            userName: 'Mike',
            phone: '000 000000 0',
            country: 'Russia',
            city: 'Moscow',
            bookingStatus: 'pending',
            bookedPrice: '20,000',
        },
        {
            id:"2",
            forBookingID: 'GS-A03-L4',
            userName: 'Tyson',
            phone: '000 000000 0',
            country: 'Canada',
            city: 'Toronto',
            bookingStatus: 'approved',
            bookedPrice: '30,000',
        },
        {
            id:"3",
            forBookingID: 'GS-A03-L4',
            userName: 'Tyson',
            phone: '000 000000 0',
            country: 'Canada',
            city: 'Toronto',
            bookingStatus: 'closed',
            bookedPrice: '30,000',
        },


    ];

    const columns = [
        {
            title: 'For Booking ID',
            dataIndex: 'forBookingID',
            key: 'forBookingID',
            render: (forBookingID:any) => (
                <>
                # {forBookingID}
                </>
             ),
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Booking Status',
            dataIndex: 'bookingStatus',
            key: 'bookingStatus',
            render: (bookingStatus:any) => (
               <>
               {/* {bookingStatus} */}
               {bookingStatus === 'approved' && <Tag color='#27ae60'>Approved</Tag>}
               {bookingStatus === 'pending' && <Tag color='#f39c12'>Pending</Tag>}
               {bookingStatus === 'closed' && <Tag color='#e74c3c'>Closed</Tag>}
               </>
            ),
        },
        {
            title: 'Booked Price',
            dataIndex: 'bookedPrice',
            key: 'bookedPrice',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (id:any) => (
                <>
                <Button style={{outline:"none", border:"none", width:"30px", height:"30px", padding:"0", borderRadius:"50%"}}><EyeOutlined /></Button>
                </>
             ),
        },
    ];

    return (
        <>
            <Table dataSource={dataSource} columns={columns} /></>

    )
}

export default FranchiseApprovals