import React, { useState } from "react";
import locationIcon from "../../Assets/LocationEventIcon.svg";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Checkbox, Select, Space } from "antd";
import uploadIcon from "../../Assets/Upload-icon.svg";
import claenderIcon from "../../Assets/createCalendarIcon.svg"
import TimeIcon from "../../Assets/createTimeIcon.svg"
import RadiusIcon from "../../Assets/createRadiusIcon.svg"

const CreateEvent = () => {
  const [age, setAge] = useState("");
  const [file, setFile] = useState();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const CustomSelectIcon = (props) => {
    return (
      <Select
        placeholder={
          <div className="flex gap-[10px]">
            <img src={props.icon} alt="" />
            <p className="w-[100%] font-poppins text-[#7377914D] text-[14px] font-[500] text-[15px] focus:outline-none">
              {props.title}
            </p>
          </div>
        }
        style={{ height: 56 }}
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
  const CustomSelect = (props) => {
    return (
      <Select
        placeholder={
          <div className="flex gap-[10px]">
            <p className="w-[100%] font-poppins text-[#7377914D] text-[14px] font-[500] text-[15px] focus:outline-none">
              {props.title}
            </p>
          </div>
        }
        style={{ height: 56 }}
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
  const handleUpload = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <h2 className="font-raleway font-[600] text-[35px] leading-[75px]">
        Create Event
      </h2>
      <p className="text-[#767C8C] font-manrope font-[500] text-[14px] leading-[28.86px] mt-[-10px]">
        Add your Event Detail
      </p>
      <div
        className="p-4 bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <form>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Event Title
            </label>
            <input
              type="text"
              placeholder="write your event title here..."
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[60%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Add your Event Venue
            </label>
            <div
              className="flex items-center gap-[10px] border-[0.5px] border-[#9491A1] w-[60%] rounded-md"
              style={{boxShadow: '1px 1px 2px 0px #0000000D',padding: "15.5px 14px"}}
            >
              <img src={locationIcon} alt="" />
              <input
                type="text"
                placeholder="Location"
                className="w-[100%] placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex mb-[15px] w-[100%] w-[60%] gap-[10px]">
            <div className="w-[50%] flex gap-[10px] flex-col">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
              >
                Event Date
              </label>
              <CustomSelectIcon icon={claenderIcon} title={"select your date"}/>
            </div>
            <div className="w-[50%] flex gap-[10px] flex-col">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px] "
              >
                Event Time
              </label>
              <CustomSelectIcon icon={TimeIcon} title="Select event date"/>
            </div>
          </div>
          <div className="flex mb-[15px] w-[100%] w-[60%] gap-[10px]">
            <div className="w-[50%] flex gap-[10px] flex-col">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
              >
                Frequency
              </label>
              <CustomSelectIcon title="Select frequency"/>
            </div>
            <div className="w-[50%] flex gap-[10px] flex-col">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px] "
              >
                Custom Repetition
              </label>
              <CustomSelectIcon title="select dates"/>
            </div>
          </div>
          <div className="w-[60%] flex gap-[10px] flex-col mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Booking Recommendation and Ticking
            </label>
            <CustomSelect  title="Select......"/>
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Event Price
            </label>
            <input
              type="text"
              placeholder="add event price"
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[60%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
Add event ticket link
            </label>
            <input
              type="text"
              placeholder="add event ticket link"
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[60%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Add your website link
            </label>
            <input
              type="text"
              placeholder="website link here"
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[60%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
            />
          </div>
          <div className="w-[60%] flex gap-[10px] flex-col mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Select Event Category
            </label>
            <CustomSelect title="select category"/>
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Event Description
            </label>
            <textarea
              type="text"
              placeholder="write your event detail here "
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none resize-none h-[200px]"
            />
          </div>
          <div className="flex flex-col gap-[5px] mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Important information
            </label>
            <textarea
              type="text"
              placeholder="write your important information about event here..."
              style={{ padding: "15.5px 14px" }}
              className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none resize-none h-[200px]"
            />
          </div>
          <div className="flex mb-[15px] w-[100%]  gap-[10px]">
            <div className="w-[50%] flex gap-[10px] flex-col">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
              >
                Tag other hosts
              </label>
              <input
                type="text"
                placeholder="tag other hosts"
                style={{ padding: "15.5px 14px" }}
                className="border-[0.5px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#7377914D] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
              />
            </div>
            <div className="w-[50%] flex gap-[10px] flex-col">
              <label
                htmlFor=""
                className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px] "
              >
                Facility
              </label>
              <Select
                placeholder={
                  <div className="flex gap-[10px]">
                    <p className="w-[100%] font-poppins text-[#7377914D] text-[14px] font-[500] text-[15px] focus:outline-none">
                      Select Facility
                    </p>
                  </div>
                }
                style={{ height: 56 }}
                onChange={handleChange}
              >
                <Option
                  value="jack"
                  className="flex item-center gap-[10px] pt-[10px]"
                >
                  <Checkbox className="font-poppins text-[#404040] text-[16px] font-[500] mb-[15px]">
                    Jack{" "}
                  </Checkbox>
                </Option>
                <Option value="1" className="flex item-center gap-[10px]">
                  <Checkbox className="font-poppins text-[#404040] text-[16px] font-[500] mb-[15px]">
                    Jack{" "}
                  </Checkbox>
                </Option>
                <Option value="2" className="flex item-center gap-[10px]">
                  <Checkbox className="font-poppins text-[#404040] text-[16px] font-[500] mb-[15px]">
                    Jack{" "}
                  </Checkbox>
                </Option>
              </Select>
            </div>
          </div>
          <div className="">
            <Checkbox className="font-poppins text-[#404040] text-[16px] font-[500] mb-[15px]">
              Make it a featured Event
            </Checkbox>
          </div>
          <div className="bg-[#FF914D0A] p-2 rounded-[4px] flex w-[100%] gap-[10px] mb-[15px]">
            <div className="w-[50%]">
              <div className="flex mb-[15px] w-[100%]  gap-[10px]">
                <div className="w-[50%] flex gap-[10px] flex-col">
                  <label
                    htmlFor=""
                    className="font-poppins font-[500] text-[#19191A] text-[18px] leading-[32.5px]"
                  >
                    Campaign Duration
                  </label>
                  <CustomSelectIcon title="select duration " icon={TimeIcon}/>
                </div>
                <div className="w-[50%] flex gap-[10px] flex-col">
                  <label
                    htmlFor=""
                    className="font-poppins font-[500] text-[#19191A] text-[18px] leading-[32.5px]"
                  >
                    Start Date
                  </label>
                  <CustomSelectIcon title="select duration " icon={claenderIcon}/>
                </div>
              </div>
              <div className="flex mb-[15px] w-[100%]  gap-[10px]">
                <div className="w-[50%] flex gap-[10px] flex-col">
                  <label
                    htmlFor=""
                    className="font-poppins font-[500] text-[#19191A] text-[18px] leading-[32.5px]"
                  >
Radius                  </label>
                  <CustomSelectIcon icon={RadiusIcon} title="select the radius"/>
                </div>
                <div className="w-[50%] flex gap-[10px] flex-col">
                  <label
                    htmlFor=""
                    className="font-poppins font-[500] text-[#19191A] text-[18px] leading-[32.5px]"
                  >
                    End Date
                  </label>
                  <CustomSelectIcon title="select end date" icon={claenderIcon}/>
                </div>
              </div>
              <div className="flex justify-end mt-[100px]">
                <div className="w-[65%]">
                  <h2 className="font-poppins font-[500] text-[#19191A] text-[18px] leading-[32.5px]">
                    Price Calculator
                  </h2>
                  <p className="font-poppins text-[#404040] text-[16px] font-[400] leading-[26px]">
                    This campaign will cost £24.99 per week. The total cost of
                    this campaign x.xx per day.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <h2 className="font-poppins font-[500] text-[#19191A] text-[18px] leading-[32.5px]">
                What is a featured event?
              </h2>
              <p className="font-poppins text-[#404040] text-[16px] font-[400] leading-[26px]">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available
              </p>
              <h2 className="font-poppins font-[500] text-[#19191A] text-[18px] leading-[32.5px] mt-[50px]">
                Pricing?
              </h2>
              <p className="font-poppins text-[#404040] text-[16px] font-[400] leading-[26px]">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available
                <br />
                <br />
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available
              </p>
            </div>
          </div>
          <div className="mb-[15px]">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[18px] leading-[32.5px]"
            >
              Add your event image
            </label>
            <div className="w-[60%] bg-[#FF914D0A] border-dashed border-[2px]	border-[#FF914D4D] rounded-[4px] flex py-8 flex-col items-center mt-[6px]">
              {file ? <img src={file} alt="" srcset="" />
              :<><img src={uploadIcon} />
              <h2 className="font-poppins font-[600] text-[16px] text-[#454545] my-[5px]">
                Drag & drop files or{" "}
                  <label
                    htmlFor="file-upload"
                    className="text-[#ff0000] hover:underline cursor-pointer"
                  >
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={(e) => handleUpload(e)}
                    />
                    Browse
                  </label>
              </h2>
              <p className="font-poppins font-[400] text-[#676767] text-[12px] leading-[18px]">
                Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p></>}
            </div>
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

export default CreateEvent;
