import React from 'react';
import { BsPauseFill, BsMic, BsStop } from 'react-icons/bs';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BiVideo, BiCopy } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';
import Timer from './Timer';

const Controls = ({ pauseRecording, resetRecording, resumeRecording, startRecording, status, handleStopRecording, seconds, setSeconds, minutes, setMinutes, hours, setHours, isRunning, setIsRunning }) => {
	const data = [
		{
			id: 1,
			name: status === 'recording' ? 'pause' : 'play',
			icon: status === 'recording' ? <BsPauseFill size={25} /> : <AiOutlinePlayCircle size={25} />,
		},
		{
			id: 2,
			name: 'stop',
			icon: <BsStop size={25} />,
		},
		{
			id: 3,
			name: 'camera',
			icon: <BiVideo size={25} />,
		},
		{
			id: 4,
			name: 'mic',
			icon: <BsMic size={25} />,
		},
	];

	return (
		<main className='fixed bottom-20 left-[300px]'>
			<section className='bg-[#141414] flex items-center px-12 rounded-full divide-y-2 divide-white'>
				<div className='text-white flex items-center gap-2 text-2xl'>
					<Timer seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} hours={hours} setHours={setHours} isRunning={isRunning} setIsRunning={setIsRunning} />
					<Image src='/assets/images/record.png' alt='red_icon' height={30} width={30} />
				</div>
				<div className='flex gap-2 items-start'>
					{data.map((item) => (
						<button key={item.id} onClick={() => (item.name === 'stop' ? handleStopRecording() : item.name === 'pause' ? pauseRecording() : item.name === 'play' ? resumeRecording() : item.name === 'camera' ? console.log('camera') : item.name === 'mic' ? console.log('mic') : console.log('no action'))} className='flex items-center flex-col  p-4  '>
							<span className='bg-white rounded-full p-2'>{item.icon}</span>
							<h3 className='text-lg font-semibold text-[#fff]'>{item.name}</h3>
						</button>
					))}

					<span className='p-2 m-4 rounded-full bg-[#4B4B4B] text-[#BEBEBE]'>
						<RiDeleteBin6Line size={25} className='text-[#fff]' onClick={resetRecording} />
					</span>
				</div>
			</section>
		</main>
	);
};

export default Controls;
