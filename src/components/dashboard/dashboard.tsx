import { useEffect, useState } from 'react'
import "./dashboard.scss"
import { Button, Col, Image, Modal, Row } from 'antd'

import earningsIcon from "../../assets/images/earnings.png"
import briefcaseIcon from "../../assets/images/briefcase.png"
import performanceIcon from "../../assets/images/bullseye-arrow.png"
import serviceIcon from "../../assets/images/grip-dots.png"
import edrIcon from "../../assets/icons/ehb-companies/edr-dark.svg"
import pssIcon from "../../assets/icons/ehb-companies/pss-dark.svg"
import jpsIcon from "../../assets/icons/ehb-companies/jps-dark.svg"
import emoIcon from "../../assets/icons/ehb-companies/emo-dark.svg"
import mlmWorld from "../../assets/images/online-world.gif"
import serviceImage from "../../assets/images/award.png"
import wrapperWall from "../../assets/wrapper/main-wall.png"
import wrapperWallRes from "../../assets/wrapper/main-wall-res.png"
import TimerComponent from './timerRefPros/timerRefPros'


const ehbDapartmentsData = [
  {
    icon: edrIcon,
    label: "EDR",
    disp: "Exams Decisions and Registrations",
  },
  {
    icon: pssIcon,
    label: "PSS",
    disp: "Personal Security Service",
  },
  {
    icon: jpsIcon,
    label: "JPS",
    disp: "Job Providing Service",
  },
  {
    icon: emoIcon,
    label: "EMO",
    disp: "Easy management Office",
  },
]

const serviceStatsData = [
  {
    service: 'Seller',
    reference: "goSellr",
    dateStarted: "2023-05-02",
    dateEnd: "2023-05-15T17:30:00Z"
  },
  {
    service: 'Franchiser',
    reference: "Ehb-franchise",
    dateStarted: "2023-07-02",
    dateEnd: "2023-05-15T17:30:00Z"
  },
]

const quickLinksData = [
  {
    label: "gosellr",
    link: "",
  },
  {
    label: "selling dashboard - gosellr",
    link: "",
  },
  {
    label: "pss dashboard",
    link: "",
  },
  {
    label: "riders dashboard",
    link: "",
  },
]

const recentJoinedUserData = [
  {
    image: "https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg",
    name: "James Robinson",
  },
  {
    image: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg",
    name: "Benjamin Davis",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    name: "Charlotte Allen",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU",
    name: "Ethan Harris",
  },
]

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isViewRefillStats, setIsViewRefillStats] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
      setIsMobile(event.matches);
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);


  return (
    <div className="dashboard-main-wrapper tex-w" >
      <div className="wrapper-wall">
        <img src={isMobile ? wrapperWallRes : wrapperWall} alt="" />
      </div>
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between", flexWrap: "wrap", gap: "15px" }}>
          <h3>Dashboard</h3>
          <div className="SQ-verb">
            SQ Level : <span>3</span> <Button>Upgrade</Button>
          </div>
        </div>
      </div>
      <br />

      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className="main-cards-hd account-bx">
            <div className='card-icon account-icon'>
              <img src={earningsIcon} width={15} height={15} alt="" />
            </div>
            <h5 className='fig-card-head'>Account Balance</h5>
            <h2 className='fig-card-num'>$ <span>2,763.82</span></h2>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <div className="main-cards-hd dark-card">
            <div className='card-icon designation-icon'>
              <img src={briefcaseIcon} width={15} height={15} alt="" />
            </div>
            <h5 className='fig-card-head'>EHB Designation</h5>
            <h2 className='fig-card-num'><span>--</span></h2>
            <div className='rib-coming-soon'>Coming soon</div>
            <div className="badge badge-pss">PSS</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <div className="main-cards-hd dark-card">
            <div className='card-icon performance-icon'>
              <img src={performanceIcon} width={15} height={15} alt="" />
            </div>
            <h5 className='fig-card-head'>Performance</h5>
            <h2 className='fig-card-num'>--%</h2>
            <div className='rib-coming-soon'>Coming soon</div>
            <div className="badge badge-edr">EDR</div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className="main-cards-hd dark-card">
            <div className='card-icon service-icon'>
              <img src={serviceIcon} width={15} height={15} alt="" />
            </div>
            <h5 className='fig-card-head'>Active Services</h5>
            <h2 className='fig-card-num'>5/33</h2>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }} gutter={[20, 20]}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="ehb-departments">
            <h4 className='tex-dull'>EHB Departments</h4>
            {
              ehbDapartmentsData.map((item: any) => (
                <div className="dept-cards-wrapper">
                  <div className="cards dark-card">
                    <div className="crd-lef">
                      <img src={item.icon} width={40} height={40} alt="" />
                      <h4>{item.label} <span>{item.disp}</span></h4>
                    </div>
                    <Button className='common-btn-tr'>Coming Soon</Button>
                  </div>
                </div>
              ))
            }
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className='Adver-affilate-program'>
            <div className="flex-wrp">
              <img src={mlmWorld} alt="" />
              <div className="contents">
                <h3>EHB Auto Plan</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum iusto a magni, possimus nisi explicabo, voluptate esse accusantium sint dicta numquam repudiandae delectus quibusdam similique.</p>
              </div>
            </div>
            <Button className="common-btn">Join Now</Button>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }} gutter={[20, 20]}>
        <Col xs={24} sm={24} md={24} lg={10}>
          <div className="upper-wrp-quick-links">
            <h4 className='tex-dull'>Quick Links <span style={{ fontSize: "12px", fontWeight: "500" }}>(You most visited)</span></h4>
            <div className="wrapper-quick-links scroll-s">
              {
                quickLinksData.map((item: any) => (
                  <div className="box-quick-links dark-card">
                    <p><em>{item.label}</em></p>
                    <a href={item.link}>
                      <span>Navigate</span>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <div className="upgrage-sq">
            <h4 className='tex-dull'>Refill Service Quality</h4>
            <div className="current-quality dark-card">
              <img src={serviceImage} width={100} alt="" />
              <Button style={{ width: "100%" }} block className='common-btn-tr' onClick={() => setIsViewRefillStats(true)}>View</Button>
            </div>
            <div className="notify-sql">
              2 Actions required
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <div className="upper-wrp-Join-after">
            <h4 className='tex-dull'>Recent Joins</h4>
            <div className="wrapper-Join-after scroll-s">
              {
                recentJoinedUserData.map((item: any) => (
                  <div className="box-Join-after dark-card">
                    <Image src={item.image} width={35} height={35} style={{ borderRadius: "50%" }} alt="" />
                    <p>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </Col>
      </Row>

      <br />

      <br />
      <br />
      <br />

      <Modal width={700} title={<div className='tex-w'>Stats Service Refill <span style={{ color: "#e74c3c", fontWeight: "400", fontSize: "12px" }}>Actions Required</span></div>} rootClassName='view-refill-stats-modal' open={isViewRefillStats} footer={false} onCancel={() => setIsViewRefillStats(false)}>
        <h4 className='tex-dull'>Services You are using</h4>

        <div className="box-list-services">
          <Row gutter={[20, 20]}>
            {
              serviceStatsData.map((item: any) => (
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div className="bx-service">
                    <h2 className='title'>Service Title</h2>
                    <p className='ser'>{item.service} - {'('} {item.reference} {')'}</p>
                    <TimerComponent startProp={item.dateStarted} />
                    <Button className='common-btn-tr' style={{ width: "100%", marginTop: "10px" }}>Refill </Button>
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
      </Modal>

    </div>
  )
}

export default Dashboard