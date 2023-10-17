import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./dashboard.scss"
import { Avatar, Button, Col, Row } from 'antd'

import earningsIcon from "../../assets/images/earnings.png"
import briefcaseIcon from "../../assets/images/briefcase.png"
import performanceIcon from "../../assets/images/bullseye-arrow.png"
import serviceIcon from "../../assets/images/grip-dots.png"
import edrIcon from "../../assets/icons/ehb-companies/edr-dark.svg"
import pssIcon from "../../assets/icons/ehb-companies/pss-dark.svg"
import jpsIcon from "../../assets/icons/ehb-companies/jps-dark.svg"
import emoIcon from "../../assets/icons/ehb-companies/emo-dark.svg"


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


const Dashboard = () => {
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false);

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
      <div className="common-head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Dashboard</h3>
          {/* <div className='head-ins'>
            <Button className='service-quality'>PSS-SQ-level : <strong>High</strong></Button>
          </div> */}
        </div>

        <br />
        {/* <div className="card0sxsx dark-card"></div> */}

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
              <h2 className='fig-card-num'><span>Manager</span></h2>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="main-cards-hd dark-card">
              <div className='card-icon performance-icon'>
                <img src={performanceIcon} width={15} height={15} alt="" />
              </div>
              <h5 className='fig-card-head'>Performance</h5>
              <h2 className='fig-card-num'>60%</h2>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="main-cards-hd dark-card">
              <div className='card-icon service-icon'>
                <img src={serviceIcon} width={15} height={15} alt="" />
              </div>
              <h5 className='fig-card-head'>Active Services</h5>
              <h2 className='fig-card-num'>5/33</h2>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col sm={24} md={24} lg={12}>
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
          <Col sm={6} md={6} lg={12}>
          </Col>
        </Row>

      </div>
      <br />

      <br />
      <br />
      <br />

    </div>
  )
}

export default Dashboard