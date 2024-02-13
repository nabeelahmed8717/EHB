import React, { useState } from 'react'
import '../franchises.scss'
import { Button, Checkbox, Col, Form, Input, Modal, Row, Select } from 'antd';
import { countryOptions } from '../../../mock/listCountries';
import mapWrapperOneImage from '../../../assets/wrapper/map-wrapper-1.png'
import mapWrapperTwoImage from '../../../assets/wrapper/map-wrapper-2.png'
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

const BookFranchise = () => {
    const navigate = useNavigate()
    const [isViewPackages, setIsViewPackages] = useState(false)
    const [selectedFranchiseDetails, setSelectedFranchiseDetails] = useState<any>({})
    const [isFormInstructions, setIsFormInstructions] = useState(true)


    const onFinish = async (values: any) => {
        console.log(values)
    };
    const onFinishFailed = (errorInfo: any) => {
    };


    const pricingFranchise = [
        {
            level: "01",
            price: "200,000",
            registerShops: '50',
            monthlyIncome: '375000',
            capping: '375000',
            dailyOrders: '100',

        },
        {
            level: "02",
            price: "350,000",
            registerShops: '80',
            monthlyIncome: '600,000',
            capping: '600,000',
            dailyOrders: '100',
        },
        {
            level: "03",
            price: "500,000",
            registerShops: '110',
            monthlyIncome: '825,000',
            capping: '825,000',
            dailyOrders: '100',
        },
        {
            level: "04",
            price: "650,000",
            registerShops: '150',
            monthlyIncome: '1,125,000',
            capping: '1,125,000',
            dailyOrders: '100',
        },
        {
            level: "05",
            price: "800,000",
            registerShops: '200',
            monthlyIncome: '1,500,000',
            capping: '1,500,000',
            dailyOrders: '100',
        },
        {
            level: "06",
            price: "1,000,000",
            registerShops: '250',
            monthlyIncome: '1,875,000',
            capping: '1,875,000',
            dailyOrders: '100',
        },
        {
            level: "07",
            price: "1,150,000,",
            registerShops: '300',
            monthlyIncome: '2,250,000',
            capping: '2,250,000',
            dailyOrders: '100',
        },
        {
            level: "08",
            price: "1,250,000",
            registerShops: '350',
            monthlyIncome: '2,625,000',
            capping: '2,625,000',
            dailyOrders: '100',
        },
        {
            level: "09",
            price: "1,450,000",
            registerShops: '400',
            monthlyIncome: '3,000,000',
            capping: '3,000,000',
            dailyOrders: '100',
        },
        {
            level: "10",
            price: "1,600,000",
            registerShops: '450',
            monthlyIncome: '3375000',
            capping: '3375000',
            dailyOrders: '100',
        },
        {
            level: "11",
            price: "1,800,000",
            registerShops: '500',
            monthlyIncome: '3750000',
            capping: '3750000',
            dailyOrders: '100',
        },
    ]

    return (
        <>
            <div className='main-wrapper-franchise'>
                <h3 style={{ color: "#fff", paddingTop: "20px", marginLeft: "20px", cursor: "pointer" }} onClick={() => navigate('/franchises')}>Go Back</h3>
                {/* <NavBar /> */}
                <img src={mapWrapperOneImage} className='main-map-wrapper-one' alt="" />
                <img src={mapWrapperTwoImage} className='main-map-wrapper-two' alt="" />
                <div className='wrapper-centered'>
                    <Row gutter={[20, 20]}>
                        <Col sm={24} md={6} lg={6}>
                            <div className='side-opt-wb'>
                                <p onClick={() => navigate('/franchise-details')}>ROI Details & Franchise Value</p>
                                <p onClick={() => navigate('/franchise-details')}>Seller Registration Capacity Details</p>
                                <p onClick={() => navigate('/franchise-details')}>Income On Delivery</p>
                            </div>
                        </Col>
                        <Col sm={24} md={18} lg={18}>
                            <div className='m-w-inset-book'>
                                <div className="wrap-set-form ">
                                    <h3 style={{ marginBottom: "30px" }}>Book a Franchise</h3>

                                    {isFormInstructions &&
                                        <div className="instructions-booking">
                                            <h4>Instructions</h4>
                                            <ul>
                                                <li>Please ensure all fields are completed with accurate information</li>
                                                <li>Double-check your entries for any errors before submission</li>
                                                <li>Verify the accuracy of spellings to avoid any communication issues</li>
                                                <li>Select the franchise level that aligns with your preferences and requirements</li>
                                                <li>If you have questions or need assistance, don't hesitate to reach out to our customer support</li>
                                            </ul>
                                            <br />
                                            <Button className='common-btn-dull' onClick={() => setIsFormInstructions(false)}>I have read instructions, Continue</Button>
                                        </div>
                                    }

                                    {!isFormInstructions &&
                                        <div className='stroller scroll-s '>
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
                                                            label="Franchise City"
                                                            name="city"
                                                            rules={[{ required: true, message: 'Required field' }]}
                                                        >
                                                            <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                                        </Form.Item>
                                                    </Col>


                                                    {Object.keys(selectedFranchiseDetails).length === 0 &&
                                                        <Col xs={24} sm={24} md={12} lg={12}>
                                                            <p style={{ color: "#999", fontSize: "14px", fontWeight: "600" }}>Select franchise level</p>
                                                            <Button style={{ background: "#6c5ce7", border: "none", borderRadius: "30px", color: "#fff", marginTop: "10px", marginBottom: "10px" }} onClick={() => setIsViewPackages(true)}>Select</Button>
                                                        </Col>
                                                    }


                                                    {Object.keys(selectedFranchiseDetails).length > 0 &&
                                                        <Col xs={24} sm={24} md={12} lg={12}>
                                                            <div className="selected-f-city">
                                                                <h4 style={{ color: "rgb(173 173 173)", marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>You Selected <span className='hover-change' onClick={() => setIsViewPackages(true)}>Change Package</span></h4>
                                                                <div className='flex-scf'><p className='label-d'>Franchise Level</p><p>{selectedFranchiseDetails?.level}</p></div>
                                                                <div className='flex-scf'><p className='label-d'>Franchise Price</p><p>{selectedFranchiseDetails?.price}</p></div>
                                                            </div>
                                                        </Col>}

                                                    <br />
                                                    <br />
                                                    <Col xs={24} sm={24} md={24} lg={24}>
                                                        <Form.Item
                                                            label=""
                                                            name="readTerms"
                                                            rules={[{ required: true, message: 'Required field' }]}
                                                        >
                                                            <div>
                                                                <Checkbox> <span style={{ color: "rgb(152 152 152)" }}>I have read terms and conditions</span></Checkbox>
                                                            </div>
                                                        </Form.Item>
                                                    </Col>
                                                </Row>

                                                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                                    <Button className='common-btn-tr' style={{ marginTop: "30px" }}>Go Back</Button>
                                                    <Button htmlType='submit' className='common-btn-dull' style={{ marginTop: "30px" }}>Submit</Button>
                                                </div>
                                            </Form>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Modal title="Select Sub Franchise Package" width={1300} centered className='packages-modal' open={isViewPackages} footer={false} onCancel={() => setIsViewPackages(false)}>
                <div className="packages-wrapper scroll-s">
                    <Row gutter={[20, 20]}>
                        {
                            pricingFranchise.map((item: any) => (
                                <Col lg={8}>
                                    <div className={`${selectedFranchiseDetails?.level === item.level ? "selected-package-card" : ""} package-card `} onClick={() => { setIsViewPackages(false); setSelectedFranchiseDetails(item) }}>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginBottom: "20px"
                                        }}>
                                            <h3>License Level: <span style={{ fontSize: "20px", color: "#3498db" }}>{item.level}</span></h3>
                                            <p className='pcF' >Value :&nbsp; <span>__</span></p>
                                        </div>
                                        <div className='pcF' style={{ marginBottom: "10px" }}><p>Price : </p> <span style={{ color: "#e67e22", fontWeight: "500" }}>Rs.{item.price}</span> </div>
                                        <p style={{ fontSize: "10px" }}>Passive & Delivery</p>
                                        <div className='pcF' style={{ marginBottom: "10px" }}><p>Monthly Income : </p> <span>{item.monthlyIncome}</span> </div>
                                        <div className='pcF' style={{
                                            margin: '10px 0px 0px 0px',
                                            borderTop: '1px solid rgb(231 231 233 / 37%)',
                                            paddingTop: '10px',
                                        }}><p>Daily Orders limit : </p> <span>{item.dailyOrders}</span> </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </div>
            </Modal>
        </>


    )
}

export default BookFranchise