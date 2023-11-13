import React from 'react'
import "./sideBar.scss"
import { Menu } from 'antd';
import newsIcon from "../../assets/icons/news.svg"
import comingSoonIcon from "../../assets/icons/hourglass-end.svg"
import analysisIcon from "../../assets/icons/analysis.svg"
import performanceIcon from "../../assets/icons/speed.svg"
import gripDotsIcon from "../../assets/icons/grip-dots.svg"
import EHBIcon from "../../assets/icons/ehb-companies/ehb-main-dark.svg"

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

  const items: MenuItem[] = [
    getItem(<div onClick={() => navigate('./home')}>Dashboard</div>, '1', <PieChartOutlined />),
    getItem(<div>EHB Services</div>, 'sub1', <img src={gripDotsIcon} width={15} height={15} alt="" />, [
      getItem(<div>GoSellr</div>, '6'),
      getItem(<div>Affiliate Program</div>, '8'),
    ]),
    getItem(<div onClick={() => navigate('./home')}>Performance</div>, '5', <img src={performanceIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./home')}>Coming.s Companies </div>, '3', <img src={comingSoonIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./home')}>News</div>, '2', <img src={newsIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./home')}>Reports</div>, '4', <img src={analysisIcon} width={15} height={15} alt="" />),
  ];

  return (
    <div className='main-sidebar-wrapper'>
      <div className="logo-main-area" style={{color:"#fff"}}>
        <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"5px"}}>
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

    </div>
  )
}

export default SideBar