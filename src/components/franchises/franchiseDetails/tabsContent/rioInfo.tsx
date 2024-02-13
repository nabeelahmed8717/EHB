import { Table } from 'antd';
import React from 'react'

const RioInfo = () => {
    const columns = [
        {
            title: 'FL Packages',
            dataIndex: 'flPackages',
            key: 'flPackages',
        },
        {
            title: 'Capping Monthly',
            dataIndex: 'cappingMonthly',
            key: 'cappingMonthly',
        },
        {
            title: 'Daily Orders Limit',
            dataIndex: 'dailyOrdersLimit',
            key: 'dailyOrdersLimit',
        },
        {
            title: 'Monthly Order Limit',
            dataIndex: 'monthlyOrderLimit',
            key: 'monthlyOrderLimit',
        },
        {
            title: 'Monthly Income In PKR',
            dataIndex: 'monthlyIncomeInPkr',
            key: 'monthlyIncomeInPkr',
        },
        {
            title: 'Monthly Income In USD',
            dataIndex: 'monthlyIncomeInUSD',
            key: 'monthlyIncomeInUSD',
        },
    ];


    const dataSource = [
        {
            "flPackages": "L-01/1000$",
            "cappingMonthly": "1100$",
            "dailyOrdersLimit": 4000,
            "monthlyOrderLimit": 120000,
            "monthlyIncomeInPkr": 300000,
            "monthlyIncomeInUSD": "1100$"
        },
        {
            "flPackages": "L-02/2000$",
            "cappingMonthly": "1500$",
            "dailyOrdersLimit": 6000,
            "monthlyOrderLimit": 180000,
            "monthlyIncomeInPkr": 450000,
            "monthlyIncomeInUSD": "1500$"
        },
        {
            "flPackages": "L-03/3000$",
            "cappingMonthly": "2200$",
            "dailyOrdersLimit": 8000,
            "monthlyOrderLimit": 240000,
            "monthlyIncomeInPkr": 600000,
            "monthlyIncomeInUSD": "2200$"
        },
        {
            "flPackages": "L-04/4000$",
            "cappingMonthly": "2500$",
            "dailyOrdersLimit": 10000,
            "monthlyOrderLimit": 300000,
            "monthlyIncomeInPkr": 750000,
            "monthlyIncomeInUSD": "2500$"
        },
        {
            "flPackages": "L-05/5000$",
            "cappingMonthly": "2875$",
            "dailyOrdersLimit": 11500,
            "monthlyOrderLimit": 345000,
            "monthlyIncomeInPkr": 862500,
            "monthlyIncomeInUSD": "2875$"
        },
        {
            "flPackages": "L-06/6000$",
            "cappingMonthly": "3375$",
            "dailyOrdersLimit": 13500,
            "monthlyOrderLimit": 405000,
            "monthlyIncomeInPkr": 1012500,
            "monthlyIncomeInUSD": "3375$"
        },
        {
            "flPackages": "L-07/7000$",
            "cappingMonthly": "4000$",
            "dailyOrdersLimit": 16000,
            "monthlyOrderLimit": 480000,
            "monthlyIncomeInPkr": 1200000,
            "monthlyIncomeInUSD": "4000$"
        },
        {
            "flPackages": "L-08/8000$",
            "cappingMonthly": "4505$",
            "dailyOrdersLimit": 18000,
            "monthlyOrderLimit": 540000,
            "monthlyIncomeInPkr": 1350000,
            "monthlyIncomeInUSD": "4505$"
        },
        {
            "flPackages": "L-09/9000$",
            "cappingMonthly": "5005$",
            "dailyOrdersLimit": 21000,
            "monthlyOrderLimit": 630000,
            "monthlyIncomeInPkr": 1575000,
            "monthlyIncomeInUSD": "5005$"
        },
        {
            "flPackages": "L-10/10000$",
            "cappingMonthly": "6250$",
            "dailyOrdersLimit": 25000,
            "monthlyOrderLimit": 750000,
            "monthlyIncomeInPkr": 1875000,
            "monthlyIncomeInUSD": "6250$"
        }
    ]
  return (
    <div className="inner-content-tabs">
        <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: "max-content" }}/>
    </div>
  )
}

export default RioInfo