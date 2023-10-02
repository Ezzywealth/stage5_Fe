import Image from 'next/image';
import React from 'react';
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai';
import { BsPin, BsThreeDotsVertical } from 'react-icons/bs';
const ExtensionModal = () => {
	const data = [
		{
			id: 1,
			name: 'HelpMeOut',
			icon: '/assets/images/helpmeout.png',
		},
		{
			id: 2,
			name: 'MetaMask',
			icon: '/assets/images/meta.png',
		},
		{
			id: 3,
			name: 'Binance Wallet',
			icon: '/assets/images/binance.png',
		},
		{
			id: 4,
			name: 'Zoom',
			icon: '/assets/images/zoom.png',
		},
		{
			id: 5,
			name: 'Framer',
			icon: '/assets/images/framer.png',
		},
	];

	const handleClick = (name) => {
		alert(`${name} extension is clicked`);
	};

	return (
		<main className='flex rounded-2xl  justify-center font-[Work Sans]'>
			<section className='shadow-2xl w-[410px] divide-y-2'>
				<section className=' p-4'>
					<div className='flex justify-between mb-6'>
						<h2 className='text-xl font-normal  text-[#585858]'>Extensions</h2>
						<span className='text-lg font-normal text-[#878787]'>
							<AiOutlineClose size={25} />
						</span>
					</div>
					<div className='mb-6'>
						<h3 className='text-[#141414] font-semibold'>Full Access</h3>
						<p className='text-[#626262]'>These extensions can see and change information on this site</p>
					</div>
					<div className='flex flex-col gap-6'>
						{data.map((item) => (
							<div key={item.id} className='flex justify-between items-center'>
								<button onClick={() => handleClick(item.name)} className='flex items-center gap-4 cursor-pointer'>
									<Image width={25} height={25} src={item.icon} alt={item.name} />
									<h3 className='text-[#141414] font-semibold text-base'>{item.name}</h3>
								</button>
								<div className='flex gap-4 text-gray-500 items-center'>
									<BsPin />
									<BsThreeDotsVertical />
								</div>
							</div>
						))}
					</div>
				</section>
				<div className='flex gap-4 p-4 text-gray-500'>
					<AiOutlineSetting size={30} />
					<p className='text-[#141414] text-base'>Manage Extension</p>
				</div>
			</section>
		</main>
	);
};

export default ExtensionModal;
