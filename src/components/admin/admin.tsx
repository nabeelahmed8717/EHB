import React from "react";
import "./admin.scss";
import adminIcon from "../../assets/images/admin.png";
import { Tabs, TabsProps } from "antd";
import PackagesSetting from "./tabs/packagesSetting";
import FranchiseApprovals from "./tabs/franchiseApprovals";



const AdminPanel = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Franchise Approvals",
            children: <FranchiseApprovals/>
        },
        {
            key: "2",
            label: "Packages Settings",
            children: <PackagesSetting/>
        },
        
    ];

    const searchsearch = (typeof window !== 'undefined' && window.location) ? window.location.search : null;

    console.log("__Search", searchsearch)

    return (
        <div>
            <div className="main-admin-wrapper">
                <div
                    style={{
                        marginTop: "10vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <img width={100} src={adminIcon} alt="" />
                    <h2>Admin EHB</h2>
                </div>

                <div style={{marginTop:'22px', width:"80%", margin:"0 auto"}}>
                    <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
