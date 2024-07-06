import { Table, Checkbox, Button } from 'antd';
import React,{useState} from 'react';
import copyIcon from "../../Assets/copyIcon.svg"
import editIcon from "../../Assets/editIcon.svg"
import delIcon from "../../Assets/delIcon.svg"

const EventManage = () => {
  const [current, setCurrent] = useState(1);
  const pageSize = 10; // N

  const dataSource = [
    {
      key: '1',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'David',
      EmailAddress: '25000 ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '2',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'David',
      EmailAddress: '25000 ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '3',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'David',
      EmailAddress: '25000 ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '4',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'David',
      EmailAddress: '25000 ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '5',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'David',
      EmailAddress: '25000 ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
  ];

  const columns = [
    {
      title:  <Checkbox />,
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <Checkbox />,
    },
    {
      title: 'Event Creation Date',
      dataIndex: 'AccountCreated',
      key: 'AccountCreated',
    },
    {
      title: 'Host Name',
      dataIndex: 'SubscriptionType',
      key: 'SubscriptionType',
    },
    {
      title: 'Total Views',
      dataIndex: 'EmailAddress',
      key: 'EmailAddress',
    },
    {
      title: 'Disable Event',
      dataIndex: 'DisableEvent',
      key: 'DisableEvent',
      render: (_, record) => (
        <button className='bg-[#FF8C001A] px-2 py-1 rounded-lg text-[#FF8C00] font-poppins'>Disable Event</button>
    ),
    },
    {
      title: 'Delete Events',
      dataIndex: 'DeleteEvents',
      key: 'DeleteEvents',
      render: (_, record) => (
        <button className='bg-[#F5392A1A] px-2 py-1 rounded-lg text-[#F5392A] font-poppins'>Delete Event</button>
    ),
}
  ];

  const handleActionClick = (key) => {
    // Define your action logic here
    console.log(`Action clicked for record key: ${key}`);
  };

  const onPaginationChange = (page) => {
    setCurrent(page);
  };

  const renderFooter = () => {
    const start = (current - 1) * pageSize + 1;
    const end = Math.min(current * pageSize, dataSource.length);
    return `Showing ${start}-${end} of ${dataSource.length}`;
  };

  return (
    <div>

      <Table dataSource={dataSource} columns={columns} className='bg-[#ffff]'         pagination={{ pageSize, current, onChange: onPaginationChange }}
/>
<div className='font-poppins text-[#19191A] font-[500] text-[14px] mt-[-40px] ml-[20px]'>
    {renderFooter()}
      </div>
    </div>
  );
};

export default EventManage;
