import React, { useState } from 'react'
import './franchises.scss'
import NavBar from '../../layout/navBar/navBar'
import { Button, Checkbox, Col, Form, Input, Modal, Row, Select } from 'antd'


import noDataImg from '../../assets/wrapper/fr-nf.png'
import storeImg from '../../assets/images/store.png'
import locationImage from '../../assets/icons/location.svg'
import mapWrapperOneImage from '../../assets/wrapper/map-wrapper-1.png'
import mapWrapperTwoImage from '../../assets/wrapper/map-wrapper-2.png'
import { countryOptions } from '../../mock/listCountries'
import { listAvailableFranchiseCity } from '../../mock/listAvailableFranchiseCity'

const { Option } = Select;

const Franchises = () => {

    const [isBookingModal, setIsBookingModal] = useState(true)
    const [selectedFranchise, setSelectedFranchise] = useState<any>()
    console.log("selectedFranchise", selectedFranchise)

    const onFinish = async (values: any) => {
        console.log(values)
    };
    const onFinishFailed = (errorInfo: any) => {
    };

    const handleChange = (value:any) => {
        // Find the selected object based on the value
        const selectedObject = listAvailableFranchiseCity.find((option) => option.value === value);

        // Set the entire object in the state
        setSelectedFranchise(selectedObject);

        // Log the selected object
        console.log('Selected object:', selectedObject);
    };


    return (
        <div className='main-wrapper-franchise'>
            {/* <NavBar /> */}
            <img src={mapWrapperOneImage} className='main-map-wrapper-one' alt="" />
            <img src={mapWrapperTwoImage} className='main-map-wrapper-two' alt="" />

            {!isBookingModal ?
                <div className="m-w-inset">
                    <Row gutter={[40, 40]}>
                        <Col lg={6}>
                            <div className="my-franchise">
                                <h3>My Franchise</h3>
                                <div className='no-data-ff'>
                                    <img src={noDataImg} alt="" />
                                    <h3>No Bookings Found</h3>
                                    <Button onClick={() => setIsBookingModal(true)}>Book Franchise</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={18}>
                            <div className="inset-18">
                                <div className="adver-wrapper">
                                    <h2>GoSellr Franchise</h2>
                                    <p>
                                        Welcome to the gateway of endless possibilities! We are thrilled to offer you the chance to become a part of the EHB - <strong>Gosellr</strong> family and embark on a rewarding entrepreneurial journey. Dive into the world of e-commerce success with our proven business model and innovative solutions
                                    </p>
                                </div>
                                <div className="wrapper-booked-franchise">
                                    <h3>Booked Franchises</h3>
                                    <div className="wrapper-franchise-card">
                                        <Row gutter={[20, 20]}>

                                            <Col lg={8}>
                                                <div className="franchise-card">
                                                    <div className='d-flex ' style={{ gap: "10px" }}>
                                                        <img src={storeImg} width={25} height={25} alt="" />
                                                        <p className='fs-15 fw-600'>Dummy Franchise</p>
                                                    </div>
                                                    <div style={{ marginTop: "20px" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                            <img src={locationImage} style={{ filter: "invert(1) brightness(1)" }} width={15} alt="" />
                                                            <p>Sargodah</p>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                            <span style={{ fontSize: "15px" }}>#</span>
                                                            <p>D7SDNS8</p>
                                                        </div>
                                                        <div className="franchise-tags">
                                                            <div className="tag-s tag-sub">
                                                                Sub Franchise
                                                            </div>
                                                            <div className="tag-s">
                                                                C.Soon
                                                            </div>
                                                            <div className="tag-s">
                                                                C.Soon
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={8}>
                                                <div className="franchise-card">
                                                    <div className='d-flex ' style={{ gap: "10px" }}>
                                                        <img src={storeImg} width={25} height={25} alt="" />
                                                        <p className='fs-15 fw-600'>Test Franchise</p>
                                                    </div>
                                                    <div style={{ marginTop: "20px" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                            <img src={locationImage} style={{ filter: "invert(1) brightness(1)" }} width={15} alt="" />
                                                            <p>Karachi</p>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                            <span style={{ fontSize: "15px" }}>#</span>
                                                            <p>D7SDNS8</p>
                                                        </div>
                                                        <div className="franchise-tags">
                                                            <div className="tag-s tag-sub">
                                                                Sub Franchise
                                                            </div>
                                                            <div className="tag-s">
                                                                C.Soon
                                                            </div>
                                                            <div className="tag-s">
                                                                C.Soon
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={8}>
                                                <div className="franchise-card">
                                                    <div className='d-flex ' style={{ gap: "10px" }}>
                                                        <img src={storeImg} width={25} height={25} alt="" />
                                                        <p className='fs-15 fw-600'>Dummy Franchise</p>
                                                    </div>
                                                    <div style={{ marginTop: "20px" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                            <img src={locationImage} style={{ filter: "invert(1) brightness(1)" }} width={15} alt="" />
                                                            <p>Lahore</p>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                            <span style={{ fontSize: "15px" }}>#</span>
                                                            <p>D7SDNS8</p>
                                                        </div>
                                                        <div className="franchise-tags">
                                                            <div className="tag-s tag-sub">
                                                                Sub Franchise
                                                            </div>
                                                            <div className="tag-s">
                                                                C.Soon
                                                            </div>
                                                            <div className="tag-s">
                                                                C.Soon
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                :
                <div className='m-w-inset-book'>
                    <div className="wrap-set-form">
                        <h2 style={{ marginBottom: "30px" }}>Book a Franchise</h2>


                        <Form
                            name="basic"
                            initialValues={{ remember: false }}
                            // initialValues={{}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical"
                            className='bookings-form'>
                            <Row gutter={[20, 0]}>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <Form.Item
                                        label="First Name"
                                        name="firstName"
                                        rules={[{ required: true, message: 'Required field' }]}
                                    >
                                        <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <Form.Item
                                        label="Last Name"
                                        name="lastName"
                                        rules={[{ required: true, message: 'Required field' }]}
                                    >
                                        <Input placeholder="Type here" rootClassName='styled-input' />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'Please enter a valid email address!',
                                            },
                                            {
                                                required: true,
                                                message: 'Email is required!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12}>
                                    <Form.Item
                                        label="Select Country"
                                        name="country"
                                        rules={[{ required: true, message: 'Required field' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Select a country"
                                            rootClassName='selector-c'
                                        >
                                            {countryOptions.map((option) => (
                                                <Option key={option.value} value={option.value}>
                                                    {option.label}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12}>
                                    <Form.Item
                                        label="Select Franchise City"
                                        name="city"
                                        rules={[{ required: true, message: 'Required field' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Select a city"
                                            className='selector-c'
                                            onChange={handleChange}
                                            optionFilterProp="children"
                                            // filterOption={(input:any, option:any) =>
                                            //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            // }
                                        >
                                            {listAvailableFranchiseCity.map((option) => (
                                                <Option key={option.value} value={option.value}>
                                                    {option.label} - Price : {option.price}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>

                                {selectedFranchise && <Col xs={24} sm={24} md={12} lg={12}>
                                    <div className="selected-f-city">
                                        <h4 style={{ color: "rgb(173 173 173)", marginBottom: "10px" }}>You Selected</h4>
                                        <div className='flex-scf'><p className='label-d'>City</p><p>{selectedFranchise?.label}</p></div>
                                        <div className='flex-scf'><p className='label-d'>Price</p><p style={{ color: "#e67e22" }}>Rs.{selectedFranchise?.price}</p></div>
                                    </div>
                                </Col>}




                                <br />
                                <br />
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label=""
                                        name="readTerms"
                                        rules={[{ required: false, message: 'Required field' }]}
                                    >
                                        <div>
                                            <Checkbox> <span style={{ color: "rgb(152 152 152)" }}>I have read terms and conditions</span></Checkbox>
                                        </div>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <div style={{ display: "flex", gap: "10px" }}>
                                <Button onClick={() => setIsBookingModal(false)} className='common-btn-tr' style={{ marginTop: "30px" }}>Go Back</Button>
                                <Button htmlType='submit' className='common-btn-dull' style={{ marginTop: "30px" }}>Submit</Button>
                            </div>
                        </Form>

                    </div>
                </div>
            }



        </div>
    )
}

export default Franchises