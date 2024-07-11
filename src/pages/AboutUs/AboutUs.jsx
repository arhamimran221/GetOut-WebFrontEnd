import React from "react";
import PageLayout from "../layouts/page-layout";
import aboutImage from "../../Assets/aboutImage.jpg";
import aboutImage1 from "../../Assets/aboutImage1.jpg";

const AboutUs = () => {
  return (
    <PageLayout>
      <div className="container">
        <h2 className="text-center mt-[135px] font-poppins text-[#ff0000] font-[600] text-[60px] leading-[28px]">
          Uncover More
        </h2>
        <p className="font-poppins font-[600] text-[16px] leading-[28px] text-[#000] text-center my-[30px]">
          Uncover the events that are taking place in your area
        </p>
        <div className="flex gap-[30px] items-stretch  w-[100%] mt-[30px]">
          <div className="w-[50%]">
            <img
              src={aboutImage}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="w-[50%] flex justify-center">
            <div className="w-[500px]">
              <h2 className="text-[#404580] font-poppins font-[600] text-[32px] leading-[28px]">
                What is GetOut?
              </h2>
              <p className="font-poppins font-[400] text-[16px] leading-[28px] mt-[10px]">
                GetOut is a digital directory of events that is updated by hosts
                that are looking to promote their event effectively, easily and
                affordably. Our unique and intuitive format enables users to
                easily search for events based on location and category.
              </p>
              <h2 className="text-[#404580] font-poppins font-[600] text-[32px] leading-[28px] mt-[20px]">
                Our Vision
              </h2>
              <div className="flex w-[100%] gap-[20px] mt-[20px]">
                <div className="w-[10%]  mt-[6px]">
                  <span className="bg-[#ff0000] flex justify-center items-center rounded-full w-[50px] h-[50px] font-poppins font-[700] text-[16px] leading-[28px] text-[#fff]">
                    1
                  </span>
                </div>
                <div className="w-[90%]">
                  <h3 className="font-poppins font-[700] text-[16px] leading-[28px]">
                    Make it easier for everyone to uncover the events that are
                    available to them
                  </h3>
                  <p className="font-poppins font-[400] text-[16px] leading-[28px]">
                    We have built an intuitive and simple platform that enables
                    you to easily uncover the events that are available to you.
                    By simply entering your search area, you can easily discover
                    what is going on there in an easy-to-use format which can be
                    arranged by category and date.
                  </p>
                </div>
              </div>
              <div className="flex w-[100%] gap-[20px] mt-[10px]">
                <div className="w-[10%]  mt-[6px]">
                  <span className="bg-[#ff0000] flex justify-center items-center rounded-full w-[50px] h-[50px] font-poppins font-[700] text-[16px] leading-[28px] text-[#fff]">
                    2
                  </span>
                </div>
                <div className="w-[90%]">
                  <h3 className="font-poppins font-[700] text-[16px] leading-[28px]">
                    Support organisers of all sizes reach a wider audience{" "}
                  </h3>
                  <p className="font-poppins font-[400] text-[16px] leading-[28px]">
                    It is essential to be able to promote events digitally.
                    However, we understand the costs, time and skill it takes to
                    put together an effective digital marketing campaign. And so
                    we built an affordable, simple and effective platform that
                    empowers organisers to promote their events directly to
                    those actively looking for them, without the hassle and
                    costs of digital marketing campaigns.
                  </p>
                </div>
              </div>
              <div className="flex w-[100%] gap-[20px] mt-[10px]">
                <div className="w-[10%]  mt-[6px]">
                  <span className="bg-[#ff0000] flex justify-center items-center rounded-full w-[50px] h-[50px] font-poppins font-[700] text-[16px] leading-[28px] text-[#fff]">
                    3
                  </span>
                </div>
                <div className="w-[90%]">
                  <h3 className="font-poppins font-[700] text-[16px] leading-[28px]">
                    Improve our well-being, our communities and our society
                  </h3>
                  <p className="font-poppins font-[400] text-[16px] leading-[28px]">
                    By encouraging people to do and learn more, and interact
                    with new people, we hope our platform will enable us to
                    grow, be happier, strengthen our communities and build a
                    better and healthier society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="text-center mx-auto">
            <div className="border-1 border-[#ff0000] w-[274px] mx-auto rounded-full"></div>
            <div className="my-[60px]">
              <h2 className="font-poppins font-[600] text-[32px] leading-[28px] text-[#404580]">
                Our Mission
              </h2>
              <p className="font-poppins font-[300] text-[16px] leading-[28px] mt-[20px]">
                We are building the most extensive directory of events.
              </p>
            </div>
            <div className="border-1 border-[#ff0000] w-[274px] mx-auto rounded-full"></div>
          </div>
          <div className="flex mt-[20px] w-[100%]">
            <div className="w-[53%] flex justify-center">
              <div className="w-[550px]">
                <h2 className="text-[#404580] font-poppins font-[600] text-[32px] leading-[28px]">
                  How it works
                </h2>
                <p className="font-poppins font-[400] text-[16px] leading-[28px] mt-[20px]">
                  We learnt from old listings guides that people search for
                  events with three core factors: location, time and type. Our
                  intuitive platform enables you to search by location, browse
                  by time and filter by type. You can then find all the key
                  information that you need for the event.
                </p>
                <h3 className="font-poppins font-[400] text-[16px] leading-[28px] mt-[20px] text-[#ff0000]">
                  Simple search
                </h3>
                <p className="font-poppins font-[400] text-[16px] leading-[28px] ">
                  You can start uncovering events by simply entering your search
                  location and radius. This straightforward search criteria will
                  allow you to uncover all the events in that area and filter
                  them by category.
                </p>
                <h3 className="font-poppins font-[400] text-[16px] leading-[28px] mt-[20px] text-[#ff0000]">
                  Browse easily
                </h3>
                <p className="font-poppins font-[400] text-[16px] leading-[28px] ">
                  Our clear and simple calendar format arranges the results
                  chronologically so that you can easily find events within your
                  search area and category. You can also switch to our map
                  format that allows you to see where the events are located.
                </p>
                <h3 className="font-poppins font-[400] text-[16px] leading-[28px] mt-[20px] text-[#ff0000]">
                  Key information
                </h3>
                <p className="font-poppins font-[400] text-[16px] leading-[28px] ">
                  We want to ensure you have all the information you need for
                  each event including locations and timings, pricing, ticketing
                  sites and booking recommendations, organisers and contact
                  details and even the event’s facilities.
                </p>
              </div>
            </div>
            <div className="w-[47%]">
              <img src={aboutImage1} alt="" srcset="" className="" />
            </div>
          </div>
        </div>
        <div className="mt-[60px] flex w-[90%] mx-auto items-center gap-[20px]">
          <div className="w-[50%]">
            <h2 className="text-[#404580] font-poppins font-[600] text-[32px] leading-[28px]">
              Our Pricing
            </h2>
            <p className="font-poppins font-[400] text-[16px] leading-[28px] mt-[40px]">
              It is essential to be able to promote events digitally. However,
              we understand the costs, time and skill it takes to put together
              an effective digital marketing campaign. And so we built an
              affordable, simple and effective platform that empowers organisers
              to promote their events directly to those actively looking for
              them, without the hassle and costs of digital marketing campaigns.
              <br />
              <br />
              You can publish events individually or subscribe to one of our
              subscription plans. Each subscription starts with a 1-month free
              trial.
              <br />
              <br />
              You can also feature
            </p>
          </div>
          <div className="w-[50%]">
            <h3 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">
              Subscriptions
            </h3>
            <p className="font-inter font-[400] text-[16px] leading-[24px] mt-[10px]">
              For hosts that promote events regularly we have several monthly
              subscription plans depending on the number of events that you
              organise. Each plan will allocate an allowance of events per
              month. For recurring events, each occurrence will count towards
              the allowance. If you need to exceed your subscription plan, you
              can either publish events individually or upgrade to a more
              suitable plan.
            </p>
          </div>
        </div>
        <div className="mt-[20px] flex flex-wrap w-[90%] mx-auto gap-[50px]">
          <div className="px-[20px] py-[15px] rounded-[8px] border-[1px] border-[#D9D9D9] flex flex-col justify-between items-center w-[300px] h-[305px] cursor-pointer hover:scale-[1.04] ease-in-out duration-300">
            <div className="text-center">
              <p className="font-poppins font-[400] text-[16px] leading-[28px] text-[#ff0000]">
                Pay-per-event
              </p>
              <h2 className="font-poppins font-[700] text-[16px] leading-[28px] mt-[4px]">
                Do you only occasionally host events?
              </h2>
              <p className="font-poppins font-[400] text-[14px] leading-[28px]">
                List each of your events.
              </p>
              <p className="font-poppins font-[400] text-[50px] leading-[28px] text-[#404580] mt-[20px]">
                £4.99<span className="text-[16px]">/event</span>
              </p>
            </div>
            <div className="w-[100%]">
              <button className="w-[100%] bg-[#ff0000] text-[#ffff] font-inter font-[500] text-[16px]  py-[12px] rounded-[8px]">
                List an event
              </button>
            </div>
          </div>
          <div className="px-[20px] py-[15px] rounded-[8px] border-[1px] border-[#D9D9D9] flex flex-col justify-between items-center w-[300px] h-[305px] cursor-pointer hover:scale-[1.04] ease-in-out duration-300">
            <div className="text-center">
              <p className="font-poppins font-[400] text-[16px] leading-[28px] text-[#ff0000]">
                Basic Plan
              </p>
              <h2 className="font-poppins font-[700] text-[16px] leading-[28px] mt-[4px]">
                Do you host about 1 event per week?
              </h2>
              <p className="font-poppins font-[400] text-[14px] leading-[28px]">
                List up to 5 events per month.
              </p>
              <p className="font-poppins font-[400] text-[50px] leading-[28px] text-[#404580] my-[20px]">
                £19.99<span className="text-[16px]">/month</span>
              </p>
              <p className="font-poppins font-[400] text-[14px] leading-[28px] italic">
                Less than £4 per event.
              </p>
            </div>
            <div className="w-[100%]">
              <button className="w-[100%] bg-[#ff0000] text-[#ffff] font-inter font-[500] text-[16px]  py-[12px] rounded-[8px]">
                Start your free trial
              </button>
            </div>
          </div>
          <div className="px-[20px] py-[15px] rounded-[8px] border-[1px] border-[#D9D9D9] flex flex-col justify-between items-center w-[300px] h-[305px] cursor-pointer hover:scale-[1.04] ease-in-out duration-300">
            <div className="text-center">
              <p className="font-poppins font-[400] text-[16px] leading-[28px] text-[#ff0000]">
                Premium Plan
              </p>
              <h2 className="font-poppins font-[700] text-[16px] leading-[28px] mt-[4px]">
                Do you host a couple of events per week?
              </h2>
              <p className="font-poppins font-[400] text-[14px] leading-[28px]">
                List up to 10 events per month.
              </p>
              <p className="font-poppins font-[400] text-[50px] leading-[28px] text-[#404580] my-[20px]">
                £34.99<span className="text-[16px]">/month</span>
              </p>
              <p className="font-poppins font-[400] text-[14px] leading-[28px] italic">
                Less than £3.50 per event.
              </p>
            </div>
            <div className="w-[100%]">
              <button className="w-[100%] bg-[#ff0000] text-[#ffff] font-inter font-[500] text-[16px]  py-[12px] rounded-[8px]">
                Start your free trial
              </button>
            </div>
          </div>
          <div className="px-[20px] py-[15px] rounded-[8px] border-[1px] border-[#D9D9D9] flex flex-col justify-between items-center w-[300px] h-[305px] cursor-pointer hover:scale-[1.04] ease-in-out duration-300">
            <div className="text-center">
              <p className="font-poppins font-[400] text-[16px] leading-[28px] text-[#ff0000]">
                Elite Plan
              </p>
              <h2 className="font-poppins font-[700] text-[16px] leading-[28px] mt-[4px]">
                Do you host several of events per week?
              </h2>
              <p className="font-poppins font-[400] text-[14px] leading-[28px]">
                List up to 20 events per month.
              </p>
              <p className="font-poppins font-[400] text-[50px] leading-[28px] text-[#404580] my-[20px]">
                £49.99<span className="text-[16px]">/month</span>
              </p>
              <p className="font-poppins font-[400] text-[14px] leading-[28px] italic">
                Less than £2.50 per event.
              </p>
            </div>
            <div className="w-[100%]">
              <button className="w-[100%] bg-[#ff0000] text-[#ffff] font-inter font-[500] text-[16px]  py-[12px] rounded-[8px]">
                Start your free trial
              </button>
            </div>
          </div>
          <div className="px-[20px] py-[15px] rounded-[8px] border-[1px] border-[#D9D9D9] flex flex-col justify-between items-center w-[300px] h-[305px] cursor-pointer hover:scale-[1.04] ease-in-out duration-300">
            <div className="text-center">
              <p className="font-poppins font-[400] text-[16px] leading-[28px] text-[#ff0000]">
                Unlimited Plan
              </p>
              <h2 className="font-poppins font-[700] text-[16px] leading-[28px] mt-[4px]">
                Do you host events almost every day?
              </h2>
              <p className="font-poppins font-[400] text-[14px] leading-[28px]">
                List unlimited events per month.
              </p>
              <p className="font-poppins font-[400] text-[50px] leading-[28px] text-[#404580] mt-[20px]">
                £74.99<span className="text-[16px]">/month</span>
              </p>
            </div>
            <div className="w-[100%]">
              <button className="w-[100%] bg-[#ff0000] text-[#ffff] font-inter font-[500] text-[16px]  py-[12px] rounded-[8px]">
                Start your free trial
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[20px] w-[90%] mx-auto mb-[50px]">
          <div className="w-[610px]">
            <h2 className="text-[#404580] font-inter font-[600] text-[20px] leading-[30px] mt-[50px]">
              Featured Events
            </h2>
            <p className="font-inter font-[400] text-[16px] leading-[24px] mt-[10px]">
              For hosts that promote events regularly we have several monthly
              subscription plans depending on the number of events that you
              organise. Each plan will allocate an allowance of events per
              month. For recurring events, each occurrence will count towards
              the allowance. If you need to exceed your subscription plan, you
              can either publish events individually or upgrade to a more
              suitable plan.
            </p>
            <h2 className="text-[#404580] font-poppins font-[600] text-[20px] leading-[28px] mt-[60px]">
              Are you a charity?
            </h2>
            <p className="font-poppins font-[400] text-[16px] leading-[28px] mt-[30px] w-[493px]">
              We understand the important work that charities do and we want
              them to be able to promote their various fundraising and awareness
              events without any cost.
              <br />
              <br />
              If you are a charity please get in touch with:
              <br />
              charities@getout.directory{" "}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
