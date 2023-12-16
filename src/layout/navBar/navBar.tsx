import { Button, Drawer, Dropdown, MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./navBar.scss"
import menu from "../../assets/icons/fi-rr-menu-burger.svg"

import ehbCompSwitch from "../../assets/icons/company-switch.svg"
import document from "../../assets/icons/document.svg"
import signOut from "../../assets/icons/fi-rs-sign-out.svg"

import settingsIcon from "../../assets/icons/settings.svg"
import packagesIcon from "../../assets/icons/packages.svg"

import Switch from "../../assets/icons/fi-rr-refresh.svg"
import notificationIcon from "../../assets/icons/notification.svg"
import EHBIcon from "../../assets/icons/ehb-companies/ehb-main-dark.svg"

import { CloseOutlined } from '@ant-design/icons';
import UserProfileCard from './userProfileCard/userProfileCard';
import { ehbCompaniesData } from '../../mock/ehbCompanies'
import useNavBar from './useNavBar'
import userIcon from "../../assets/raw/user-default.png"

const NavBar = () => {

    const {
        handleSignOut,
    } = useNavBar()

    const [isDrawerOpen, setisDrawerOpen] = useState(false);
    const [isCompaniesDrawer, setIsCompaniesDrawer] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    // scrollnav 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // scrollnav 

    const navigate = useNavigate()

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <UserProfileCard />
            ),
        },
        // {
        //     key: '2',
        //     label: (
        //         <div className="drp-items-nav" style={{ marginTop: '10px' }}>
        //             <img src={document} alt="" /> <p>Upload KYC</p>
        //         </div>
        //     ),
        // },
        {
            key: '3',
            label: (
                <div className="drp-items-nav">
                    <img src={Switch} alt="" /> <a href="https://ehb.com.co/affiliate/dashboard"> <p style={{color:"#000"}}>Switch Dashboards</p></a>
                </div>
            ),
        },
        {
            key: '4',
            label: (
                <div className="drp-items-nav" onClick={handleSignOut}>
                    <img src={signOut} alt="" /> <p>Sign out</p>
                </div>
            ),
        }
    ]

    const respMenuItems = [

        {
            key: '2',
            label: 'Dashboard',
            icon: settingsIcon,
            link: './home'
        },
        {
            key: '2',
            label: 'Manage Profile',
            icon: settingsIcon,
            link: './home'
        },
        {
            key: '6',
            label: "Packages",
            icon: packagesIcon,
            link: './home'
        },

    ]

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


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);



    return (
        <div
            className={`main-header-wrapper d-flex justify-between align-center ${isMobile && visible ? "anim-high-to-low" : "anim-low-to-high"}`}
            style={{ top: visible ? 0 : '-100px', }}
        >
            <div className="brand-logo">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {isMobile && <img src={EHBIcon} alt="" />}
                    <p style={{
                        backgroundColor: "rgb(39 174 96 / 26%)",
                        color: "#27ae60", padding: "6px 10px",
                        borderRadius: "8px"
                    }} ><strong>EHB Future</strong></p>
                    <Button className='companie-switch' onClick={() => setIsCompaniesDrawer(true)}><img src={ehbCompSwitch} width={20} height={20} alt="" /></Button>
                </div>
            </div>

            <div className="nav-menu d-flex align-items-center">

                {!isMobile &&
                    <>
                        {/* <Button className="rounded-buttons-nav" onClick={() => navigate('./cart')}><img src={notificationIcon} width={20} height={20} alt="" /><div className='sp-only-chat'>2</div></Button> */}
                        <div className="user-profile-wrapper">
                            <Dropdown menu={{ items }} placement="bottomRight" arrow overlayClassName='pro-drp'>
                                <div className="user-profile">
                                    <div className="user-img-wrapper"><img src={userIcon} alt="" /></div>
                                </div>
                            </Dropdown>
                        </div>
                    </>}

                {/* {isMobile && <Button className="rounded-buttons-nav" onClick={() => navigate('./chat')}><img src={chat} width={20} height={20} alt="" /><div className='sp-only-chat'>5</div></Button>} */}
                {isMobile && <Button className="rounded-buttons-nav" onClick={() => navigate('./home')}><img src={notificationIcon} width={20} height={20} alt="" /><div className='sp-only-chat'>2</div></Button>}
                {isMobile && <Button className="rounded-buttons-nav" onClick={() => setisDrawerOpen(true)}><img src={menu} width={20} height={20} alt="" /></Button>}

                <Drawer
                    title={<div className="d-flex justify-between align-center"><span className='fs-15 fw-600'>Menu</span><span onClick={() => setisDrawerOpen(false)}><CloseOutlined /></span></div>}
                    placement="left"
                    closable={false}
                    onClose={() => setisDrawerOpen(false)}
                    open={isDrawerOpen}
                    key="left"
                >
                    <UserProfileCard isMobile={isMobile} />
                    {
                        respMenuItems.map((item: any) => (
                            <div className="drp-items-nav" onClick={() => { item.link && navigate(`${item.link}`); setisDrawerOpen(false) }} style={{ marginTop: '10px' }} key={item.key}>
                                <img src={item.icon} alt="" /> <p>{item.label}</p>
                            </div>
                        ))
                    }
                    <div className="drp-items-nav" onClick={handleSignOut} style={{ marginTop: '10px' }}>
                        <img src={signOut} alt="" /> <p>Sign out</p>
                    </div>

                </Drawer>
            </div>


            <Drawer title="Companies and Departments" rootClassName='companies-drawer-main' placement="left" onClose={() => setIsCompaniesDrawer(false)} open={isCompaniesDrawer}>
                <div className="wrapper-companies">
                    {
                        ehbCompaniesData.map((item: any) => (
                            <div className={` ${item?.comingSoon === true ? 'bx-companies bx-companies-coming-soon' : 'bx-companies'}`}>
                                <div className="logo">
                                    <img src={item.logo} width={40} height={40} alt="" />
                                    <div className='logo-hd-d'>
                                        <h4>{item.title}</h4>
                                        <p>{item.disp}</p>
                                    </div>
                                </div>
                                {item?.comingSoon === true && <div className='rib-coming-soon'>Coming soon</div>}
                            </div>
                        ))
                    }

                </div>
            </Drawer>

        </div>
    )
}

export default NavBar