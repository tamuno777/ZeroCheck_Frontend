/** @format */

import React from "react";
import NftCertificationImage from "../images/Zero_check.png";
import Image from "next/image";

const NftCertification = () => {
	return (
		<>
			<div className='text-black bg-black/50 p-4'>
				<div className='h-screen w-full flex justify-center items-center'>
					<div className='bg-[#EDEDED] rounded-[4px] px-[24px] py-[26px] w-[279px]  h-[300px] relative max-w-[550px]'>
						<div className='mb-[18px]'>
							<Image
								src={NftCertificationImage}
								className='w-[231px] h-[195px] rounded-[5.63px]'
								alt=''
							/>
						</div>


						<div className="text-[#000000]">
							<h2 className='text-[14px] font-[600]'>
								Crypto Conference 2025
							</h2>
							<p className='font-[500] leading-[15px] text-[10px]'>2023-08-15</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NftCertification;
