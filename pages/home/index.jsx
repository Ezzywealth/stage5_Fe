import React, { useState } from 'react';
import AuthNav from '../../components/AuthNav';
import Image from 'next/image';
import VideoList from '../../components/Video/Videos';
const videos = [
	{
		videoUrl: 'https://example.com/video1.mp4',
		title: 'How to create Facebook Ad listing',
		date: 'SEPTEMBER 23, 2023',
	},
	{
		videoUrl: 'https://example.com/video2.mp4',
		title: 'How to create Facebook Ad listing',
		date: 'SEPTEMBER 23, 2023',
	},
	{
		videoUrl: 'https://example.com/video3.mp4',
		title: 'How to create Facebook Ad listing',
		date: 'SEPTEMBER 23, 2023',
	},
	// Add more video objects as needed
];

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<AuthNav />
			<main className=' w-full '>
				<section className='flex w-full items-center justify-between border-b-2 py-4 border-[rgba(0,0,0,0.1)]  p-4 px-4 lg:px-16 xl:px-36 '>
					<div>
						<h1 className='text-[32px] font-bold text-[#141414]'>Hello, John Mark</h1>
						<p className='text-[#141414]/70 text-lg font-normal'>Here are your recorded videos</p>
					</div>
					<div>
						<form action='' onSubmit={handleSubmit} className='flex items-center  bg-[#E7E7ED]/20 rounded-md py-4 w-[300px] px-6'>
							<Image src='/assets/images/search-normal.png' alt='Logo' width={20} height={20} className=' mr-2' />
							<input type='text' className='w-full placeholder:text-sm focus:outline-none bg-transparent' value={searchQuery} onChange={(e) => setSearchQuery(e?.target?.value)} placeholder='Search for a particular video' />
						</form>
					</div>
				</section>
				<section className='p-4 px-4 lg:px-16 xl:px-36 '>
					<VideoList videos={videos} />
				</section>
			</main>
		</>
	);
};

export default Home;
