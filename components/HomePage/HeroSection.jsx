import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const HeroSection = () => {
	return (
		<div id='home' className=' py-32  flex flex-col-reverse justify-center lg:flex-row items-center px-4 lg:px-16 xl:px-48'>
			<div className='w-full lg:w-1/2 text-center lg:text-left lg:pr-8'>
				<h1 className='text-4xl lg:text-[64px] leading-none font-bold text-[#141414] mb-4'>
					Show Them <br /> Don’t Just Tell
				</h1>
				<p className='text-lg font-normal text-[#000000]/75 mb-8'>
					Help your friends and loved ones by creating and sending <br /> videos on how to get things done on a website.
				</p>
				<button className='bg-[#120B48] mt-4 text-white  text-lg font-semibold px-6 py-3 rounded-[8px] flex items-center gap-2'>
					Install HelpMeOut <BsArrowRightShort size={35} />
				</button>
			</div>

			<div className='w-full lg:w-1/2 grid grid-cols-2 gap-6'>
				<section className='flex flex-col justify-between relative'>
					<Image src='/assets/images/stage5_1.png' width={500} height={500} alt='Hero Image 1' className='w-full h-auto rounded-[8px]' />
					<Image src='/assets/images/stage5_2.png' width={500} height={500} alt='Hero Image 2' className='w-full h-auto rounded-[8px]' />
					<Image src='/assets/images/frame2.png' width={400} height={500} alt='Hero Image 3' className='w-full h-auto rounded-[8px] absolute -bottom-[70px] -left-[50px] -z-30' />
				</section>
				<section className='relative'>
					<Image src='/assets/images/stage5_3.png' width={400} height={500} alt='Hero Image 3' className='w-full h-auto rounded-[8px]' />
					<Image src='/assets/images/frame.png' width={400} height={500} alt='Hero Image 3' className='w-full h-auto rounded-[8px] absolute -top-[57px] -right-[50px] -z-30' />
				</section>
			</div>
		</div>
	);
};

export default HeroSection;
