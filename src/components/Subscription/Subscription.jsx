import { Select } from "antd";
import React, { useState } from "react";

const Subscription = () => {
  const [activeCard, setActiveCard] = useState(1);
  const {Option} = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const CustomSelect = (props) => {
    return (
      <Select
        placeholder={
          <div className="flex gap-[10px]">
            <p className="w-[100%] font-inter text-[#828282] text-[16px] font-[400] focus:outline-none">
              {props.title}
            </p>
          </div>
        }
        style={{ height: 53 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">Yiminghe</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
      </Select>
    );
  };
  const cards = [
    {
      id: 1,
      title: 'Pay-per-event',
      subtitle: 'Do you only occasionally host events?',
      description: 'List each of your events.',
      price: '£4.99',
      extra: '',
    },
    {
      id: 2,
      title: 'Basic Plan',
      subtitle: 'Do you host about 1 event per week?',
      description: 'List up to 5 events per month.',
      price: '£19.99',
      extra: 'Less than £4 per event.',
    },
    {
      id: 3,
      title: 'Premium Plan',
      subtitle: 'Do you host a couple of events per week?',
      description: 'List up to 10 events per month.',
      price: '£34.99',
      extra: 'Less than £3.50 per event.',
    },
    {
      id: 4,
      title: 'Elite Plan',
      subtitle: 'Do you host several of events per week?',
      description: 'List up to 20 events per month.',
      price: '£49.99',
      extra: 'Less than £2.50 per event.',
    },
    {
      id: 5,
      title: 'Unlimited Plan',
      subtitle: 'Do you host events almost every day?',
      description: 'List unlimited events per month.',
      price: '£74.99',
      extra: '',
    },
    {
      id: 6,
      title: 'Special Plan',
      subtitle: 'We offer special plans to our loyal customers',
      description: 'List unlimited ev2ents per month.',
      price: '£9.99',
      extra: '',
    },
    // Add other cards here as needed
  ];

  return (
    <div>
      <div className="mb-[20px]">
        <h2 className="font-raleway font-[600] text-[32px] leading-[40px] text-[#404580]">
          Subscriptions and pricing
        </h2>
        <p className="text-[#828282] font-manrope font-[500] text-[16px] leading-[21.86px] mt-[2px]">
          Track your events and manage your account
        </p>
      </div>
      <div className="flex w-[100%] gap-[44.5px] mt-[15px] flex-wrap">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`p-[20px] flex flex-col items-center justify-between rounded-[8px] bg-[#fff] w-[300px] h-[305px] cursor-pointer ${activeCard === card.id ? 'border-[5px] border-[#404580]' : 'border-[1px] border-[#D9D9D9]'}`}
          
          onClick={() => setActiveCard(card.id)}
        >
          <div className="flex flex-col items-center justify-between">
          <p className="font-poppins font-[400] text-[16px] leading-[24px] text-[#ff0000]">{card.title}</p>
          <h2 className="font-poppins font-[700] text-[16px] leading-[28px] text-center">{card.subtitle}</h2>
          <p className="font-poppins font-[400] text-[14px] leading-[28px]">{card.description}</p>
          <h2 className="font-poppins text-[#404580] text-[50px] leading-[28px] tracking-[0.2] my-[20px]">
            {card.price} <span className="text-[14px]">/mon</span>
          </h2>
          <p className="font-poppins text-[#000] font-[400] text-[14px] italic leading-[18px] h-[16px]">{card.extra}</p>
          </div>
          <button className={`text-[#ffff] font-montserat font-[700] my-[10px] text-[14px] leading-[28px] w-[100%] text-center py-2  ${activeCard === card.id ? "bg-[#828282] rounded-[8px]" : "bg-[#ff0000] rounded-[8px]"} " `}>
            Choose Plan
          </button>
        </div>
      ))}
      </div>
      <div
        className="px-[20px] py-[10px] bg-[#ffff] rounded-md w-[100%] mt-[20px]"
        
      >
        <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">Apply for charity status</h2>
        <div className="flex w-[100%] gap-[20px] mt-[20px]">
          <div className="w-[50%]">
            <p className="font-inter font-[400] text-[16px] leading-[24px]">We understand the importance of charity in our society.<br/><br/>

GetOut wants to show our gratitude by allowing charities to use the platform for free so that they can continue to do their important work.</p>
          </div>
          <div className="w-[50%]">
            <p className="font-inter font-[400] text-[16px] leading-[24px]">If you wish to register for charity status please e-mail us at:<br/><br/>

charity@getout.directory</p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#ffff] rounded-md w-[100%] mt-[20px] flex overflow-hidden h-[381px] "
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <div className="w-[380px] bg-[#404580] p-[20px]">
          <h2 className="font-poppins font-[700] text-[20px] leading-[28px] text-center text-[#fff] mb-[10px]">
            Need to promote your event in weeks advance?
          </h2>
          <h2 className="font-poppins font-[700] text-[20px] leading-[28px] text-center text-[#fff] mb-[10px]">
            Want to have a further outreach?
          </h2>
          <p className="font-poppins italic font-[400] text-[14px] text-center text-[#fff]">
            Less than £2.50 per event.
          </p>
        </div>
        <div className="w-[710px] p-[20px] gap-[20px]">
          <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580] mb-[10px]">
            Feature your event
          </h2>
          <div className="flex w-[100%] gap-[20px] items-center flex-row-reverse">
            <div className="w-[50%]">
              <form className="">
                <div className="flex flex-col gap-[5px] mb-[15px]">
                  <label
                    htmlFor=""
                    className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
                  >
                    Location
                  </label>
                  <CustomSelect title="Is your event part of a series?" />
                </div>
                <div className="flex flex-col gap-[5px] mb-[15px]">
                  <label
                    htmlFor=""
                    className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
                  >
                    Location
                  </label>
                  <CustomSelect title="Is your event part of a series?" />
                </div>
                <div className="flex flex-col gap-[5px] mb-[15px]">
                  <label
                    htmlFor=""
                    className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
                  >
                    Location
                  </label>
                  <CustomSelect title="Is your event part of a series?" />
                </div>
              </form>
            </div>
            <div className="w-[50%]">
              <p className="font-inter font-[400] text-[16px]">
                Our pricing model sits at £1.00 per mile per week.
              </p>
              <p className="font-inter font-[400] text-[16px] my-[40px]">
                To reach an audience within a 10 mile radius you will be
                spending £10.00 per week.
              </p>
              <p className="font-inter font-[400] text-[16px]">
                Compare this to other digital marketing platforms where you
                could easily be spending £10.00 per day on advertising your
                event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
