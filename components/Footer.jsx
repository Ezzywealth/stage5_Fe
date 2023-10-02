import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-[#120B48] text-white py-20 px-4 lg:px-16 xl:px-48 w-full'>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center'>
				<div className='w-full mb-4 md:mb-0'>
					<Image width={150} height={100} src='/assets/images/logo2.png' alt='Logo' className=' mr-2' />
				</div>

				<div className='w-full  mb-4 md:mb-0'>
					<h3 className='text-lg font-semibold mb-2'>Menu</h3>
					<ul className='space-y-4'>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								Converter
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								How it works
							</a>
						</li>
					</ul>
				</div>

				<div className='w-full  mb-4 md:mb-0'>
					<h3 className='text-lg font-semibold mb-2'>About us</h3>
					<ul className='space-y-4'>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								About us
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								Contact us
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								Privacy
							</a>
						</li>
					</ul>
				</div>

				<div className='w-full mb-4 md:mb-0'>
					<h3 className='text-lg font-semibold mb-2'>Screen Record</h3>
					<ul className='space-y-4'>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								Browser window
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								Desktop
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white transition duration-300'>
								Application
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
