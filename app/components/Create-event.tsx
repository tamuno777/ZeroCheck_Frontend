import React, {useRef} from "react";
import Image from "next/image";
import location from "../../public/images/Group.png";
import book from "../../public/images/book.png";
import {Poppins} from "next/font/google";
import {poppins} from "../layout";

//
const CreateEvent = () => {
   return (
      <div className={`bg-[#ffffff] text-black h-auto min-h-[100vh] py-[38px] space-y-5 px-4 md:px-10 lg:px-16 xl:px-32  ${poppins.className}`}>
         {/* title */}
         <h3 className="font-[600] text-[24px] text-[#000000]">Manage Events</h3>
         {/* image */}
         <div className="bg-[#000000] min-h-[280px] md:min-h-[315px] w-full rounded-[8px]"></div>

         {/* form */}
         <form className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className=" space-y-3">
               <input
                  type="text"
                  name="name"
                  id="Event_Nmae"
                  className="h-[3.3rem] sm:h-[6.5rem] w-full text-[50px] lg:text-[64px] font-[300] outline-none border-none"
                  placeholder="Event Name"
               />
               <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div>
                     <label htmlFor="startDate" className="font-500 text-[14px]">
                        Start Date
                     </label>{" "}
                     <br />
                     <input type="date" name="startDate" id="startDate" className="h-[42px] border-[1px] border-solid border-[#DDDDDD] w-full rounded-[8px] px-4 outline-none" />
                  </div>
                  <div>
                     <label htmlFor="startDate" className="font-500 text-[14px]">
                        {" "}
                        End Date
                     </label>{" "}
                     <br />
                     <input type="date" id="startDate" name="startDate" className="h-[42px] border-[1px] border-solid border-[#DDDDDD] w-full rounded-[8px] px-4 outline-none" />
                  </div>
               </section>
               <section className=" flex flex-row items-center pl-4 gap-5 border-[1px] border-solid border-[#dddddd] rounded-[8px] py-5">
                  <Image src={location} alt="location-icon" className="w-[20px] h-[23px]" />
                  <div>
                     <label htmlFor="Location" className="font-500 text-[14px]">
                        Add Event Location
                     </label>{" "}
                     <br />
                     <input type="text" name="Location" id="Location" className="border-none outline-none w-80 text-[14px]" placeholder="add physical address or virtual link " />
                  </div>
               </section>
            </section>
            {/*  */}

            <section className=" space-y-4">
               <div className="relative">
                  <input
                     type="text"
                     name="Description"
                     id="Description"
                     placeholder="Add Description"
                     className="h-[42px] border-[1px] border-solid border-[#DDDDDD] w-full rounded-[8px] px-4 outline-none pl-14"
                  />
                  <Image src={book} alt="book" className="absolute left-[19px] top-3" />
               </div>
               <h3 className="font-[500] text-[14px] text-[#000000]">Event Settings</h3>

               <div className="border-solid border-[1px] border-[#dddddd] rounded-[8px]">
                  <div className="relative">
                     <input type="text" name="Ticktets" id="Ticktets" placeholder="Tickets" className="h-[42px] border-none  w-full rounded-[8px] px-4 outline-none pl-14" />
                     <Image src={book} alt="book" className="absolute left-[19px] top-3" />
                  </div>
                  <div className="relative">
                     <input type="text" name="Capacity" id="Capacity" placeholder="Capacity" className="h-[42px] border-none  w-full rounded-[8px] px-4 outline-none pl-14" />
                     <Image src={book} alt="book" className="absolute left-[19px] top-3" />
                  </div>
                  <div className="relative">
                     <input type="text" name="AddTags" id="AddTags" placeholder="Add Tags" className="h-[42px] border-none  w-full rounded-[8px] px-4 outline-none pl-14" />
                     <Image src={book} alt="book" className="absolute left-[19px] top-3" />
                  </div>
               </div>
               <button className="w-full h-[43px] bg-[#110000] rounded-[4px] text-white mt-5">Create Event</button>
            </section>
         </form>
      </div>
   );
};

export default CreateEvent;
