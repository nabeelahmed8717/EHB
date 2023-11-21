import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './navBar/navBar'

import "./mainLayout.scss"
import { Col, Row } from 'antd'

import SideBar from './sideBar/sideBar'


const MainLayout = () => {

    const [isMobile, setIsMobile] = useState<any>(false);
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
        <>
            <Row>
                {!isMobile &&
                    <Col xs={6} sm={6} md={6} lg={4}>
                        <SideBar />
                    </Col>
                }
                <Col xs={24} sm={24} md={18} lg={20} >
                    <NavBar />
                    <div className="wrapper-after-outlet">
                        <div className="wrapper-layout-outlet">
                            <Outlet />
                        </div>
                    </div>

                </Col>
            </Row>

        </>
    )
}

export default MainLayout