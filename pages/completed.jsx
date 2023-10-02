import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LuCopy } from 'react-icons/lu';
import Navbar from '../components/Navbar';
import { BiEdit } from 'react-icons/bi';
import Footer from '../components/Footer';
import Privacy from '../components/Privacy';
import SaveModal from '../components/saveModal';
import Image from 'next/image';

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
const VideoDetails = () => {
	const [receiver, setReceiver] = useState('');
	const [videoName, setVideoName] = useState('Untitled_Video_20232509');
	const [edit, setEdit] = useState(true);
	const url = 'https://example.com/video1.mp4';
	const id = '123456789';
	const [sent, setSent] = useState(false);

	const fetchVideo = async (id) => {
		try {
			const { data } = await axios.post(`https://chrome-extension-y2lb.onrender.com/upload?${id}`);
			console.log(data);
			return data;
		} catch (error) {}
	};

	useEffect(() => {
		fetchVideo(id);
	}, [id]);

	const handleSubmit = () => {
		console.log('submit');
	};
	return (
		<>
			<Navbar />
			<main className='p-4 mt-12 px-4 lg:px-16 xl:px-36 pb-20 grid grid-cols-2 gap-4 divide-x-2 divide-gray-200'>
				{sent && (
					<section className='w-screen z-[201020202] bg-[#00000052] fixed top-0 left-0 h-screen flex justify-center items-center'>
						<SaveModal setSent={setSent} email={receiver} />
					</section>
				)}
				<section className='px-8'>
					<h1 className='text-[2rem] font-bold mb-8'>Your Video is ready</h1>
					<form action='' className='flex items-center'>
						<div>
							<label htmlFor='name' className='text-[#727272] font-semibold'>
								Name
							</label>
							<input disabled={edit} className='text-[#413C6D] font-semibold text-xl w-full placeholder:text-[14px] focus:outline-none bg-transparent p-4 border-none' type='text' value={videoName} onChange={(e) => setVideoName(e.target.value)} />
						</div>
						<BiEdit onClick={() => setEdit(true)} />
					</form>
					<section className='flex flex-col gap-12 items-center mt-8 justify-between'>
						<section onSubmit={handleSubmit} className='flex items-center  bg-[#B6B3C680]/20 rounded-md py-2 w-full px-6'>
							<input type='text' className='w-full placeholder:text-[14px] focus:outline-none bg-transparent' value={receiver} onChange={(e) => setReceiver(e?.target?.value)} placeholder='enter email or receiver' />
							<button className='bg-[#605C84] py-2 px-4 text-white rounded-[8px] w-auto' onClick={() => setSent(true)}>
								Send
							</button>
						</section>
						<div className='w-full'>
							<form action='' onSubmit={handleSubmit} className='w-full '>
								<label htmlFor='url' className='text-[#141414] font-semibold text-lg'>
									Video Url
								</label>
								<div className='flex items-center gap-6  bg-[#B6B3C680]/20 rounded-md py-2 w-full px-6'>
									<input type='text' className='w-full placeholder:text-[14px] text-[#4B4B4B] focus:outline-none bg-transparent' disabled value={url} />
									<button className='bg-transparent text-[#120B48] border border-[#120B48] text-base py-1 px-2  flex items-center justify-center  rounded-[8px] w-[150px] gap-2'>
										<LuCopy /> copy url
									</button>
								</div>
							</form>
						</div>
					</section>
					<section className='mt-12 px-4'>
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
				</section>
				<section className='px-8'>
					<section className='mt-8 shadow-md p-4 rounded-xl'>
						<video controls className='w-full h-auto my-4 rounded-xl'>
							<source src='https://example.com/video1.mp4' type='video/mp4' />
							Your browser does not support the video tag.
						</video>
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
			</main>
			<Privacy />
			<Footer />
		</>
	);
};

export default VideoDetails;
