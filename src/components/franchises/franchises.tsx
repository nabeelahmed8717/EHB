import './franchises.scss'
import { Button, Col, Row } from 'antd'


import noDataImg from '../../assets/wrapper/fr-nf.png'
import storeImg from '../../assets/images/store.png'
import locationImage from '../../assets/icons/location.svg'
import mapWrapperOneImage from '../../assets/wrapper/map-wrapper-1.png'
import mapWrapperTwoImage from '../../assets/wrapper/map-wrapper-2.png'
import { useNavigate } from 'react-router-dom'



const Franchises = () => {
    const navigate = useNavigate()

    return (
        <div className='main-wrapper-franchise'>
            <h3 style={{ color: "#fff", paddingTop: "20px", marginLeft: "20px", cursor: "pointer" }} onClick={() => navigate('/home')}>Go Back</h3>
            <img src={mapWrapperOneImage} className='main-map-wrapper-one' alt="" />
            <img src={mapWrapperTwoImage} className='main-map-wrapper-two' alt="" />


            <div className="m-w-inset">
                <Row gutter={[40, 40]}>
                    <Col lg={6}>
                        <div className="my-franchise">
                            <h3>My Franchise</h3>
                            <div className='no-data-ff'>
                                <img src={noDataImg} alt="" />
                                <h3>No Bookings Found</h3>
                                <Button onClick={() => navigate('/book-franchise')}>Book Franchise</Button>
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
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                    <h3>Booked Franchises</h3>
                                   
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

        </div>
    )
}

export default Franchises