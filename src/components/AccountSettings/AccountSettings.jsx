import React, { useState } from "react";
import imageHost from "../../Assets/HostImage.png";
import { EditOutlined } from "@ant-design/icons";

const AccountSettings = () => {
  const [file, setFile] = useState();

  const handleUpload = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <h2 className="font-raleway font-[600] text-[35px] leading-[75px]">
        Create a Profile
      </h2>
      <p className="text-[#767C8C] font-manrope font-[500] text-[14px] leading-[28.86px] mt-[-10px]">
        Add your profiledetail
      </p>
      <div className="flex my-[10px] items-end gap-[10px]">
        {file? <img src={file} className="rounded-lg" width={200} height={200}/>:<img src={imageHost} alt="" />}
        <label
          htmlFor="file-upload"
          className="flex gap-[10px] font-manrope text-[#19191A] font-[500] text-[18px] items-center gap-[10px] bg-[#fff] px-4 py-2 rounded-lg hover:text-[#ff0000] cursor-pointer"
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={(e) => handleUpload(e)}
          />
          <EditOutlined />
          Edit Profile Image
        </label>
      </div>
      <div
        className="p-4 bg-[#ffff] rounded-md w-[100%] mt-[20px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <h2 className="font-poppins text-[#19191A] font-[600] text-[18px] leading-[24px] ">
          Add your Profile detail
        </h2>
        <form>
        <div className="flex w-[100%] items-center gap-[20px] mt-[20px]">
            <div className="flex flex-col gap-[5px] mb-[15px] w-[50%]">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="write your name."
                style={{ padding: "15.5px 14px" }}
                className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px] mb-[15px] w-[50%]">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
              >
                Location
              </label>
              <input
                type="text"
                placeholder="write your location"
                style={{ padding: "15.5px 14px" }}
                className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex w-[100%] items-center gap-[20px] ">
            <div className="flex flex-col gap-[5px] mb-[15px] w-[50%]">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
              >
                Website Link
              </label>
              <input
                type="text"
                placeholder="add your website links."
                style={{ padding: "15.5px 14px" }}
                className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px] mb-[15px] w-[50%]">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
              >
                Add social media links
              </label>
              <input
                type="text"
                placeholder="Add social links here."
                style={{ padding: "15.5px 14px" }}
                className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px] w-[100%]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Important Information
            </label>
            <textarea
              type="text"
              placeholder="write your important information."
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none h-[150px] resize-none"
            />
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px] w-[100%]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Description
            </label>
            <textarea
              type="text"
              placeholder="write your description here "
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none h-[150px] resize-none"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-end w-[100%] gap-[20px] my-[20px]">
        <button className="border-[2px] border-[#ff0000] text-[#ff0000] text-[16px] font-[500] px-4 py-2 rounded-lg hover:scale-[1.02] ease-in-out duration-300">
          Cancel
        </button>
        <button className="border-[2px] border-[#ff0000] text-[#ffff] bg-[#ff0000] text-[16px] font-[500] px-8 py-2 rounded-lg hover:scale-[1.02] ease-in-out duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
