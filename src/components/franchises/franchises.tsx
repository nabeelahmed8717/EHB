import './franchises.scss'
import { Button, Col, Drawer, Input, Popover, Row, Select, Tag } from 'antd'


import noDataImg from '../../assets/wrapper/fr-nf.png'
import storeImg from '../../assets/images/store.png'
import locationImage from '../../assets/icons/location.svg'
import mapWrapperOneImage from '../../assets/wrapper/map-wrapper-1.png'
import mapWrapperTwoImage from '../../assets/wrapper/map-wrapper-2.png'
import certificateBtn from '../../assets/icons/file-download.svg'
import arrowNavigate from '../../assets/icons/arrow-up-right-from-square.svg'
import { useNavigate } from 'react-router-dom'

import { FilterOutlined } from '@ant-design/icons';
import { countryOptions } from '../../mock/listCountries'
import { useState } from 'react'
import { CloseCircleOutlined } from '@ant-design/icons';
const { Option } = Select;


const Franchises = () => {
    const navigate = useNavigate()

    const [isFilterDrawer, setIsFilterDrawer] = useState(false)


    const [selectedFranchiseHierarchy, setSelectedFranchiseHierarchy] = useState('')
    const [selectedCountry, setSelectedCountry] = useState<any>(undefined)
    const [selectedPriceRange, setSelectedPriceRange] = useState<any>({ from: undefined, to: undefined })
    const [selectedLevel, setSelectedLevel] = useState(undefined)

    console.log("selectedCountry", selectedCountry)
    console.log("selectedPriceRange", selectedPriceRange)
    console.log("selectedLevel", selectedLevel)


    const content = (
        <div className='filters-wrapper'>
            <div style={{ marginBottom: '20px' }}>
                {selectedCountry &&
                    <Tag closeIcon={<CloseCircleOutlined style={{ color: 'red' }} />} onClose={() => setSelectedCountry(undefined)} color="#e6e6e6">
                        <span style={{ color: "#000" }}>{selectedCountry}</span>
                    </Tag>
                }
                {selectedLevel &&
                    <Tag closeIcon={<CloseCircleOutlined color='black' />} onClose={() => setSelectedLevel(undefined)} color="#e6e6e6">
                        <span style={{ color: "#000" }}>{selectedLevel}</span>
                    </Tag>
                }
                {(selectedPriceRange.from && selectedPriceRange.to) &&
                    <Tag closeIcon={<CloseCircleOutlined color='black' />} onClose={() => setSelectedPriceRange({ from: undefined, to: undefined })} color="#e6e6e6">
                        <span style={{ color: "#000" }}>{selectedPriceRange.from}-{selectedPriceRange.to}</span>
                    </Tag>
                }
            </div>
            <div className='btns-filters' style={{ display: "flex", gap: "10px" }}>
                <Button>Master Franchise</Button>
                <Button>Corporate Franchise</Button>
                <Button>Sub Franchise</Button>
            </div>
            <div style={{
                marginTop: "20px",

            }}>
                <p className='fw-600'>Select Country</p>
                <Select
                    style={{ width: "100%" }}
                    showSearch
                    defaultValue={null}
                    value={selectedCountry}
                    placeholder="Select a country"
                    rootClassName='selector-c'
                    onChange={(e: any) => setSelectedCountry(e)}
                >
                    {countryOptions.map((option) => (
                        <Option key={option.value} value={option.value}>
                            {option.label}
                        </Option>
                    ))}
                </Select>
            </div>
            <div
                style={{
                    marginTop: "20px",

                }}>
                <p className='fw-600'>City</p>
                <Input rootClassName='styled-input' placeholder="Outlined" />
            </div>
            <div
                style={{
                    marginTop: "20px",

                }}
            >
                <p style={{ marginBottom: "10px" }} className='fw-600'>Price Range</p>
                <Row gutter={20} >
                    <Col lg={12}>
                        <p style={{ color: "#c8c8c8" }}>From</p>
                        <Select
                            placeholder='Select'
                            style={{ width: '100%' }}
                            rootClassName='selector-c'
                            value={selectedPriceRange?.from}
                            onChange={(e: any) => setSelectedPriceRange({ from: e, to: '' })}
                            options={[
                                { value: '10,000', label: '10,000' },
                                { value: '20,000', label: '20,000' },
                                { value: '30,000', label: '30,000' },
                                { value: '40,000', label: '40,000' },
                                { value: '50,000', label: '50,000' },
                            ]}
                        />
                    </Col>
                    <Col lg={12}>
                        <p style={{ color: "#c8c8c8" }}>To</p>
                        <Select
                            placeholder='Select'
                            style={{ width: '100%' }}
                            disabled={selectedPriceRange.from ? false : true}
                            rootClassName='selector-c'
                            value={selectedPriceRange?.to}
                            onChange={(e: any) => setSelectedPriceRange((prevState: any) => ({ ...prevState, to: e }))}
                            options={[
                                { value: '20,000', label: '20,000' },
                                { value: '30,000', label: '30,000' },
                                { value: '30,000', label: '40,000' },
                                { value: '40,000', label: '40,000' },
                                { value: '50,000', label: '50,000' },
                                { value: '60,000', label: '60,000' },
                            ]}
                        />
                    </Col>
                </Row>
            </div>
            <div
                style={{
                    marginTop: "20px",

                }}>
                <p className='fw-600'>Level</p>
                <Select
                    placeholder='Select'
                    style={{ width: '100%' }}
                    rootClassName='selector-c'
                    value={selectedLevel}
                    onChange={(e: any) => setSelectedLevel(e)}
                    options={[
                        { value: 'level 01', label: 'level 01' },
                        { value: 'level 02', label: 'level 02' },
                        { value: 'level 03', label: 'level 03' },
                        { value: 'level 04', label: 'level 04' },
                        { value: 'level 05', label: 'level 05' },
                        { value: 'level 06', label: 'level 06' },
                        { value: 'level 07', label: 'level 07' },
                        { value: 'level 08', label: 'level 08' },
                        { value: 'level 09', label: 'level 09' },
                        { value: 'level 10', label: 'level 10' },
                        { value: 'level 11', label: 'level 11' },

                    ]}
                />
            </div>

        </div>
    );


    return (
        <div className='main-wrapper-franchise'>
            <h3 style={{ color: "#fff", paddingTop: "20px", marginLeft: "20px", cursor: "pointer" }} onClick={() => navigate('/home')}>Go Back</h3>
            <img src={mapWrapperOneImage} className='main-map-wrapper-one' alt="" />
            <img src={mapWrapperTwoImage} className='main-map-wrapper-two' alt="" />


            <div className="m-w-inset">
                <Row gutter={[40, 40]}>
                    <Col lg={6}>
                        <div className="my-franchise">
                            <div>
                                <h3>My Franchise</h3>

                            </div>

                            {/* <div className='no-data-ff'>
                                <img src={noDataImg} alt="" />
                                <h3>No Bookings Found</h3>
                                <Button onClick={() => navigate('/book-franchise')}>Book Franchise</Button>
                            </div> */}
                            <div className="booked-franchise-container">
                                <div className="head-content">
                                    <div className='b-f-content-flex'><p className='b-head'>Franchise Name</p><p>Dummy Franchise</p></div>
                                    <div className='b-f-content-flex'><p className='b-head'>Franchise Hierarchy</p><p>Sub Franchise</p></div>
                                    <div className='b-f-content-flex'><p className='b-head'>Franchise Level</p><p>Level 08</p></div>
                                    <div className='b-f-content-flex'><p className='b-head'>Franchise ID</p><p>GS-A01-L7</p></div>
                                </div>
                                <div className="nex-section">
                                    <div className='b-f-content-flex'><p className='b-head'>Status :</p><p style={{ color: "#27ae60" }}>Approved</p></div>
                                    <div className='b-f-content-flex'><p className='b-head'>Buying Price :</p><p >Rs. 20,0000</p></div>
                                    <br />
                                    <div className='b-f-content-flex'><p className='b-head'>Country :</p><p >Russia</p></div>
                                    <div className='b-f-content-flex'><p className='b-head'>City :</p><p >Moscow</p></div>
                                </div>
                            </div>
                            <div className='bottom-buttons'>
                                <Button className='download-certificate-button'> <img src={certificateBtn} width={15} alt="" style={{ filter: "invert(1) brightness(1)" }} /> Download Certificate</Button>
                                <Button className='download-certificate-button'> <img src={arrowNavigate} width={15} alt="" style={{ filter: "invert(1) brightness(1)" }} /> Franchise Dashboard</Button>
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
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <h3>Booked Franchises</h3>
                                    <Button onClick={() => setIsFilterDrawer(true)} className='button-filter'><FilterOutlined /> Filters</Button>
                                </div>
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
            <Drawer rootClassName='main-filters-drawer' width={600} title="Filters" onClose={() => setIsFilterDrawer(false)} open={isFilterDrawer}>
                <div>
                    {content}
                </div>
            </Drawer>
        </div>
    )
}

export default Franchises