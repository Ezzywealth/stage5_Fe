import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AuthNav from '../../../../components/AuthNav';
import { usePathname } from 'next/navigation';
import { LuCopy } from 'react-icons/lu';
import Image from 'next/image';
import { BiEdit } from 'react-icons/bi';

const data = [
	{
		id: 1,
		name: 'Facebook',
		icon: '/assets/images/Facebook svg.png',
	},
	{
		id: 2,
		name: 'WhatsApp',
		icon: '/assets/images/WhatsApp svg.png',
	},
	{
		id: 3,
		name: 'Telegram',
		icon: '/assets/images/Artboard.png',
	},
];

const videoTranscript = [
	{
		id: 1,
		time: '0:00',
		transcript: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the.',
	},
	{
		id: 2,
		time: '0:30',
		transcript: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha',
	},
	{
		id: 3,
		time: '1:00',
		transcript: 'First step. Open Facebook on your desktop or mobile device and locate Marketplace in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate Marketplace in the left-ha',
	},
	{
		id: 4,
		time: '1:30',
		transcript: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the.',
	},
	{
		id: 5,
		time: '2:00',
		transcript: 'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha',
	},
	{
		id: 6,
		time: '2:35',
		transcript: 'First step. Open Facebook on your desktop or mobile device and locate Marketplace in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate Marketplace in the left-ha',
	},
];
const Index = () => {
	const [receiver, setReceiver] = useState('');
	const url = 'https://example.com/video1.mp4';
	const router = useRouter();
	const pathname = usePathname();
	const path = decodeURIComponent(pathname).split('/').slice(0, 3).join('/') + '/';
	console.log(path);
	const { category, slug } = router.query;

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<AuthNav />
			<section className='p-4 px-4 lg:px-16 xl:px-36 pb-20'>
				<h2 className=' text-xl flex items-center'>
					{path.replace(/\//g, ' / ')} <span className='text-[#413C6D] font-semibold ml-2'>{`${decodeURIComponent(slug)}`}</span>
				</h2>
				<h1 className='text-[#141414] font-bold flex items-center gap-2 text-2xl my-4'>
					{decodeURIComponent(slug)} <BiEdit className='rounded-md' />
				</h1>
				<section className='mt-8 shadow-md p-4 rounded-xl'>
					<video controls className='w-full h-auto my-4 rounded-xl'>
						<source src='https://example.com/video1.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</section>
				<section className='flex items-center mt-8 justify-between'>
					<div>
						<form action='' onSubmit={handleSubmit} className='flex items-center  bg-[#B6B3C680]/20 rounded-md py-4 w-[450px] px-6'>
							<input type='text' className='w-full placeholder:text-[14px] focus:outline-none bg-transparent' value={receiver} onChange={(e) => setSearchQuery(e?.target?.value)} placeholder='enter email or receiver' />
							<button className='bg-[#605C84] py-2 px-4 text-white rounded-[8px] w-auto'>Send</button>
						</form>
					</div>
					<div>
						<form action='' onSubmit={handleSubmit} className='flex items-center gap-6  bg-[#B6B3C680]/20 rounded-md py-4 w-full px-6'>
							<input type='text' className='w-full placeholder:text-[14px] text-[#4B4B4B] focus:outline-none bg-transparent' disabled value={url} onChange={(e) => setSearchQuery(e?.target?.value)} placeholder='enter email or receiver' />
							<button className='bg-transparent text-[#120B48] border border-[#120B48] text-base py-1 px-2  flex items-center justify-center  rounded-[8px] w-[200px] gap-2'>
								<LuCopy /> copy url
							</button>
						</form>
					</div>
				</section>
				<section className='mt-8'>
					<h3 className='text-xl font-semibold mb-4'>Share your video</h3>
					<div className='flex gap-4'>
						{data.map((item) => (
							<div className='flex items-center px-4 py-2 gap-2 border border-[#0A0628] rounded-md' key={item.id}>
								<Image src={item.icon} alt={item.name} width={20} height={20} />
								<p>{item.name}</p>
							</div>
						))}
					</div>
				</section>
				<section className='mt-8'>
					<h3 className='text-xl font-semibold mb-4'>Transcript</h3>
					<select className='border border-[#CFCFCF] text-[#9D9D9D] focus:outline-none rounded-[4px] px-4 py-2'>
						<option value='english'>English</option>
						<option value='french'>French</option>
					</select>

					<div className='mt-8 h-[360px] overflow-y-auto transcript'>
						{videoTranscript.map((item) => (
							<div className='flex items-start gap-8 mb-4' key={item.id}>
								<p className='text-[#141414] font-semibold'>{item.time}</p>
								<p className='text-[#000000] font-semibold'>{item.transcript}</p>
							</div>
						))}
					</div>
				</section>
			</section>
		</>
	);
};

export default Index;
