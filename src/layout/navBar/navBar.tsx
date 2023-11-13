import { Button, Drawer, Dropdown, MenuProps} from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./navBar.scss"
import menu from "../../assets/icons/fi-rr-menu-burger.svg"

import ehbCompSwitch from "../../assets/icons/company-switch.svg"
import document from "../../assets/icons/document.svg"
import signOut from "../../assets/icons/fi-rs-sign-out.svg"

import settingsIcon from "../../assets/icons/settings.svg"
import packagesIcon from "../../assets/icons/packages.svg"
import marketingIcon from "../../assets/icons/marketing.svg"
import manageUsersIcon from "../../assets/icons/user-gear.svg"

import Switch from "../../assets/icons/fi-rr-refresh.svg"
import notificationIcon from "../../assets/icons/notification.svg"
import EHBIcon from "../../assets/icons/ehb-companies/ehb-main-dark.svg"

import { CloseOutlined } from '@ant-design/icons';
import UserProfileCard from './userProfileCard/userProfileCard';
import { ehbCompaniesData } from '../../mock/ehbCompanies'

const NavBar = () => {

    const location = useLocation();
    const route = location.pathname;
    const routeArray = route.split('/');

    console.log("routeArray", routeArray)

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [isDrawerOpen, setisDrawerOpen] = useState(false);

    const [isCompaniesDrawer, setIsCompaniesDrawer] = useState(false)

    const [isMobile, setIsMobile] = useState(false);

    // scrollnav 
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // scrollnav 

    const navigate = useNavigate()

    const handleSignOut = () => {
        localStorage.clear();
        navigate('/sign-in')
    };


    //   const token:any = localStorage.getItem('token');

    


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <UserProfileCard />
            ),
        },
        {
            key: '2',
            label: (
                <div className="drp-items-nav" style={{ marginTop: '10px' }}>
                    <img src={document} alt="" /> <p>Upload KYC</p>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className="drp-items-nav">
                    <img src={Switch} alt="" /> <p>Switch Dashboards</p>
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
            label: 'Manage Profile',
            icon: settingsIcon,
            link: './manage-profile'
        },
        {
            key: '2',
            label: 'Marketing',
            icon: marketingIcon,
            link: './marketing'
        },
        {
            key: '6',
            label: "Packages",
            icon: packagesIcon,
            link: './packages'
        },
        {
            key: '9',
            label: "Manage Users",
            icon: manageUsersIcon,
            link: './manage-users'
        },
        {
            key: '3',
            label: 'Switch Dashboards',
            icon: Switch,
            link: './home'
        },
        {
            key: '1',
            label: 'Upload KYC',
            icon: document,
            link: './home'
        },
        {
            key: '5',
            label: 'Sign out',
            icon: signOut,
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

    const navStylesCheckExcept = [
        {
            route: "home"
        },
        {
            route: "services"
        },
    ]
    const matchingRoute = navStylesCheckExcept.some(item => item.route === routeArray[1]);
    const classToRender = `main-header-wrapper ${matchingRoute ? "" : "main-header-fr-wh"
        } d-flex justify-between align-center anim-low-to-high`;


    return (
        <div
            // className={classToRender}
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
            {isAuthenticated ?
                <div className="nav-menu d-flex align-items-center">

                    {!isMobile &&
                        <>
                            {/* <Button className="rounded-buttons-nav" onClick={() => navigate('./home')}><img src={homeIcon} width={20} height={20} alt="" /></Button> */}
                            {/* <Button className="rounded-buttons-nav" onClick={() => navigate('./services')}><img src={services} width={20} height={20} alt="" /></Button> */}
                            {/* <Button className="rounded-buttons-nav" onClick={() => navigate('./chat')}><img src={chat} width={20} height={20} alt="" /><div className='sp-only-chat'>5</div></Button> */}
                            <Button className="rounded-buttons-nav" onClick={() => navigate('./cart')}><img src={notificationIcon} width={20} height={20} alt="" /><div className='sp-only-chat'>2</div></Button>
                            <div className="user-profile-wrapper">
                                <Dropdown menu={{ items }} placement="bottomRight" arrow overlayClassName='pro-drp'>
                                    <div className="user-profile">
                                        <div className="user-img-wrapper"><img src="https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_man_beard_brown_hair_boy_people_icon_159121.png" alt="" /></div>
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
                        <UserProfileCard isMobile={isMobile}/>
                        {
                            respMenuItems.map((item: any) => (
                                <div className="drp-items-nav" onClick={() => { item.link && navigate(`${item.link}`); setisDrawerOpen(false) }} style={{ marginTop: '10px' }} key={item.key}>
                                    <img src={item.icon} alt="" /> <p>{item.label}</p>
                                </div>
                            ))
                        }

                    </Drawer>

                </div>
                :
                <div>
                    <Button className='login-btn' onClick={() => navigate('./sign-in')} >Sign In</Button>
                </div>
            }



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