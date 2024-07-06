import React from "react";

const Subscription = () => {
  return (
    <div>
      <h2 className="font-raleway font-[600] text-[35px] leading-[75px]">
        Pricing
      </h2>
      <p className="text-[#767C8C] font-manrope font-[500] text-[14px] leading-[28.86px] mt-[-10px]">
        Choose your pricing plan
      </p>
      <div className="flex w-[100%] gap-[20px] mt-[15px]">
        <div
          className="p-4 rounded-lg sub-bg bg-[#fff] w-[24%] box-container"
          style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
        >
          <p className="font-montserat font-[700] text-[16px] leading-[24px] text-[#ff0000]">
            Free
          </p>
          <h2 className="font-monserat text-[#353535] my-[10px] text-[40px] leading-[57px] tracking-[0.2]">
            £0.00
          </h2>
          <div className="border-[3px] my-[15px] border-[#FF0000] w-[70px] rounded-full"></div>
          <p className="font-poppins my-[10px] text-[#505050] font-[500] text-[16px] leading-[18px]">
            Up to 2 events per month
          </p>
          <button className="text-[#ffff] font-montserat font-[700] my-[10px] text-[14px] leading-[28px] w-[100%] text-center py-2 bg-[#ff0000] rounded-lg">
            Choose Plan
          </button>
        </div>

        <div
        className="p-4 rounded-lg sub-bg bg-[#fff] w-[24%] box-container "
        style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
      >
        <p className="font-montserat font-[700] text-[16px] leading-[24px] text-[#ff0000]">
        Basic
        </p>
        <h2 className="font-monserat text-[#353535] my-[10px] text-[40px] leading-[57px] tracking-[0.2] ">
        £19.99 <span className="text-[#353535] font-montserat text-[16px] font-[700]">/mon</span>
        </h2>
        <div className="border-[3px] my-[15px] border-[#FF0000] w-[70px] rounded-full"></div>
        <p className="font-poppins my-[10px] text-[#505050] font-[500] text-[16px] leading-[18px]">
        Less than £4 per event
        </p>
        <button className="text-[#ffff] font-montserat font-[700] my-[10px] text-[14px] leading-[28px] w-[100%] text-center py-2 bg-[#ff0000] rounded-lg">
          Choose Plan
        </button>
      </div>

        <div
          className="p-4 rounded-lg sub-bg bg-[#fff] w-[24%] box-container"
          style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
        >
          <p className="font-montserat font-[700] text-[16px] leading-[24px] text-[#ff0000]">
          Premium
          </p>
          <h2 className="font-monserat text-[#353535] my-[10px] text-[40px] leading-[57px] tracking-[0.2]">
          £34.99 <span className="text-[#353535] font-montserat text-[16px] font-[700]">/mon</span>
          </h2>
          <div className="border-[3px] my-[15px] border-[#FF0000] w-[70px] rounded-full"></div>
          <p className="font-poppins my-[10px] text-[#505050] font-[500] text-[16px] leading-[18px]">
          Less than £3.50 per event
          </p>
          <button className="text-[#ffff] font-montserat font-[700] my-[10px] text-[14px] leading-[28px] w-[100%] text-center py-2 bg-[#ff0000] rounded-lg">
            Choose Plan
          </button>
        </div>

        <div
          className="p-4 rounded-lg sub-bg bg-[#fff] w-[24%] box-container"
          style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
        >
          <p className="font-montserat font-[700] text-[16px] leading-[24px] text-[#ff0000]">
          Elite
          </p>
          <h2 className="font-monserat text-[#353535] my-[10px] text-[40px] leading-[57px] tracking-[0.2]">
          £49.99 <span className="text-[#353535] font-montserat text-[16px] font-[700]">/mon</span>
          </h2>
          <div className="border-[3px] my-[15px] border-[#FF0000] w-[70px] rounded-full"></div>
          <p className="font-poppins my-[10px] text-[#505050] font-[500] text-[16px] leading-[18px]">
          Less than £2.50
          </p>
          <button className="text-[#ffff] font-montserat font-[700] my-[10px] text-[14px] leading-[28px] w-[100%] text-center py-2 bg-[#ff0000] rounded-lg">
            Choose Plan
          </button>
        </div>
      </div>

      <div
        className="p-4 rounded-lg sub-bg bg-[#fff] w-[24%] box-container mt-[20px]"
        style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
      >
        <p className="font-montserat font-[700] text-[16px] leading-[24px] text-[#ff0000]">
        Unlimited
        </p>
        <h2 className="font-monserat text-[#353535] my-[10px] text-[40px] leading-[57px] tracking-[0.2]">
        £74.99 <span className="text-[#353535] font-montserat text-[16px] font-[700]">/mon</span>
        </h2>
        <div className="border-[3px] my-[15px] border-[#FF0000] w-[70px] rounded-full"></div>
        <p className="font-poppins my-[10px] text-[#505050] font-[500] text-[16px] leading-[18px]">
        Unlimited events per month
        </p>
        <button className="text-[#ffff] font-montserat font-[700] my-[10px] text-[14px] leading-[28px] w-[100%] text-center py-2 bg-[#ff0000] rounded-lg">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default Subscription;
