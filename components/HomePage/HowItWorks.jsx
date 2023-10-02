import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
	const steps = [
		{
			number: '1',
			title: 'Record Screen',
			description: 'Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.',
			imageSrc: '/assets/images/rec_1.png',
		},
		{
			number: '2',
			title: 'Share Your Recording',
			description: 'We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.',
			imageSrc: '/assets/images/rec_2.png',
		},
		{
			number: '3',
			title: 'Learn Effortlessly',
			description: 'Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.',
			imageSrc: '/assets/images/rec_3.png',
		},
	];

	return (
		<section id='works' className='py-16 px-4 lg:px-16 xl:px-48'>
			<div className='max-w-screen-xl mx-auto text-center mb-10'>
				<h2 className='text-3xl lg:text-4xl font-bold text-[#141414] mb-2'>How It Works</h2>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{steps.map((step, index) => (
					<div key={index} className='bg-white rounded-lg p-6 flex flex-col items-center'>
						<span className='text-2xl h-[45px] w-[45px] flex justify-center items-center font-semibold text-white bg-[#120B48] rounded-full mb-2'>{step.number}</span>
						<h3 className='text-2xl font-semibold text-[#1B233D] mb-2'>{step.title}</h3>
						<p className='text-[#616163] text-center'>{step.description}</p>
						<Image src={step.imageSrc} alt={`Step ${step.number}`} className=' mt-4' height={400} width={400} />
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
