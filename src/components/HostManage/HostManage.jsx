import { Table, Checkbox, message } from 'antd';
import React ,{useState}from 'react';
import copyIcon from "../../Assets/copyIcon.svg"
import editIcon from "../../Assets/editIcon.svg"
import delIcon from "../../Assets/delIcon.svg"

const HostManage = () => {
  const [current, setCurrent] = useState(1);
  const pageSize = 10; // N
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };


  const dataSource = [
    {
      key: '1',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ada@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '2',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'arham@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '3',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'umair@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '4',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'waqar@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '5',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '6',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '7',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '8',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '9',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '10',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },    {
      key: '11',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
    {
      key: '12',
      AccountCreated: '05/05/2024 ',
      SubscriptionType: 'Premium',
      EmailAddress: 'ad@gmail.com ',
      NumberofEvents: '25 ',
      FutureEvents: '60',
      MonthlyViews: '1000 ',
      TotalViews: '10,000 ',
      CreditLeft: '25',
    },
  ];

  const columns = [
    {
      title: '',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <Checkbox />,
    },
    {
      title: 'Account Created',
      dataIndex: 'AccountCreated',
      key: 'AccountCreated',
    },
    {
      title: 'Subscription Type',
      dataIndex: 'SubscriptionType',
      key: 'SubscriptionType',
    },
    {
      title: 'Email Address',
      dataIndex: 'EmailAddress',
      key: 'EmailAddress',
    },
    {
      title: 'Number of Events',
      dataIndex: 'NumberofEvents',
      key: 'NumberofEvents',
    },
    {
      title: 'Future Events',
      dataIndex: 'FutureEvents',
      key: 'FutureEvents',
    },
    {
      title: 'Monthly Views',
      dataIndex: 'MonthlyViews',
      key: 'MonthlyViews',
    },
    {
      title: 'Total Views',
      dataIndex: 'TotalViews',
      key: 'TotalViews',
    },
    {
      title: 'Credit Left',
      dataIndex: 'CreditLeft',
      key: 'CreditLeft',
    },
    {
        title: 'Copy Email',
        dataIndex: 'copyemail',
        key: 'CreditLeft',
        render: (_, record) => (
              <img src={copyIcon} alt="" srcset="" className='cursor-pointer hover:scale-[1.1] ease-in-out duration-300'           onClick={() => handleCopyEmail(record.EmailAddress)} 
              />
          ),
      },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <div className='flex gap-[5px] items-center'>
            <img src={editIcon} alt="" srcset="" className='hover:scale-[1.1] cursor-pointer ease-in-out duration-300'/>
            <img src={delIcon} alt="" srcset="" className='hover:scale-[1.1] cursor-pointer ease-in-out duration-300'/>
        </div>
      ),
    },
  ];

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        messageApi.open({
          type: 'success',
          content: 'Email Copied',
        });
      })
      .catch(err => {
        messageApi.open({
          type: 'error',
          content: 'Email not copied ',
        });
      });
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
      {contextHolder}
      <div className="flex justify-end mb-[30px]">
        <button className="px-4 py-2 text-[#ffff] font-poppins bg-[#ff0000] rounded-lg">
          Download CSV File
        </button>
      </div>
<Table
        dataSource={dataSource}
        columns={columns}
        className='bg-white'
        pagination={{ pageSize, current, onChange: onPaginationChange }}
      />
    <div className='font-poppins text-[#19191A] font-[500] text-[14px] mt-[-40px] ml-[20px]'>
    {renderFooter()}
      </div>
    </div>
  );
};

export default HostManage;
