import React, { useState } from 'react'
import "./sideBar.scss"
import { Button, Menu, Modal } from 'antd';
import newsIcon from "../../assets/icons/news.svg"
import comingSoonIcon from "../../assets/icons/hourglass-end.svg"
import analysisIcon from "../../assets/icons/analysis.svg"
import performanceIcon from "../../assets/icons/speed.svg"
import gripDotsIcon from "../../assets/icons/grip-dots.svg"
import EHBIcon from "../../assets/icons/ehb-companies/ehb-main-dark.svg"
import underConstruction from "../../assets/images/under-construction.png"

import {
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {

  const navigate = useNavigate()
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const [isDemoIndicator, setIsDemoIndicator] = useState(false);
  const [isDemoIndicatorContent, setIsDemoIndicatorContent] = useState<any>();

  const items: MenuItem[] = [
    getItem(<div onClick={() => navigate('./home')}>Dashboard</div>, '1', <PieChartOutlined />),
    getItem(<div>EHB Services</div>, 'sub1', <img src={gripDotsIcon} width={15} height={15} alt="" />, [
      getItem(<a href="https://ehb.com.co/affiliate/dashboard"><div>Affiliate Program</div></a>, '8'),
      getItem(<div onClick={() => {setIsDemoIndicator(true); setIsDemoIndicatorContent({label:"Gosellr", link:"https://gosellr.vercel.app"})}}>GoSellr</div>, '6'),
      getItem(<div onClick={() => {setIsDemoIndicator(true); setIsDemoIndicatorContent({label:"Gosellr - Seller", link:"https://gosellr-selling-dashboard.vercel.app"})}}>GoSellr Seller</div>, '7'),
      getItem(<div onClick={() => {setIsDemoIndicator(true); setIsDemoIndicatorContent({label:"Gosellr - Franchise", link:"https://ehb-franchise.vercel.app"})}}>GoSellr Franchise</div>, '8'),
      getItem(<div onClick={() => {setIsDemoIndicator(true); setIsDemoIndicatorContent({label:"Gosellr - Rider", link:"https://ehb-riders.vercel.app"})}}>GoSellr Rider</div>, '9'),
    ]),
    getItem(<div onClick={() => navigate('./home')}>Performance</div>, '5', <img src={performanceIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./home')}>Coming.s Companies </div>, '3', <img src={comingSoonIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./home')}>News</div>, '2', <img src={newsIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./home')}>Reports</div>, '4', <img src={analysisIcon} width={15} height={15} alt="" />),
  ];

  return (
    <div className='main-sidebar-wrapper'>
      <div className="logo-main-area" style={{ color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
          <img src={EHBIcon} width={70} alt="" />
          <h2>EHB</h2>
        </div>
        <p>Education Health Business</p>
      </div>
      <div className="user-utils-wrapper">
        {/* <div className="user-utils-main-inner">
          <Avatar size={64} icon={<UserOutlined />} />
          <h3>Apex Limited</h3>
        </div> */}

        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="light"
          items={items}
        />
      </div>


      <Modal open={isDemoIndicator} rootClassName='info-un-c-modal' footer={false} onCancel={() => setIsDemoIndicator(false)}>
        <div className='info-un-c tex-w'>
          <img src={underConstruction} className='op-unds' width={200} alt="" />
          <h3>Information</h3><br />
          <p style={{ marginBottom: "10px", position: "relative" }}><strong>{isDemoIndicatorContent?.label}</strong> {isDemoIndicatorContent?.disp && <span>{isDemoIndicatorContent?.disp}</span>} </p>
          <p style={{ position: "relative" }} >This is a demonstration of our under development plan</p>
          <br />
            <a href={isDemoIndicatorContent?.link} target='_blank'>
              <Button className='common-btn'>Visit Demo Site</Button>
            </a>
        </div>
      </Modal>

    </div>


  )
}

export default SideBar