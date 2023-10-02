import Image from 'next/image';
import React from 'react';

const data = [
	{
		id: 1,
		title: 'Simple Screen Recording',
		description: 'Effortless screen recording for everyone. Record with ease, no tech expertise required.',
		icon: '/assets/images/feat_1.png',
	},
	{
		id: 2,
		title: 'Easy-to-Share URL',
		description: 'Share your recordings instantly with a single link. No attachments, no downloads.',
		icon: '/assets/images/feat_@.png',
	},
	{
		id: 3,
		title: 'Revisit Recordings',
		description: 'Access and review your past content effortlessly. Your recordings, always at your fingertips.',
		icon: '/assets/images/feat_3.png',
	},
];

const FeaturesSection = () => {
	return (
		<section id='features' className='py-16 px-4 lg:px-16 xl:px-48'>
			<div className='max-w-screen-xl mx-auto text-center mb-10'>
				<h2 className='text-3xl lg:text-4xl font-bold text-[#141414] mb-2'>Our Features</h2>
				<p className='text-lg text-[#616163]'>Explore the amazing features of our product.</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
				<section>
					{data.map((item) => (
						<div key={item.id} className='bg-white rounded-lg gap-4 p-6 flex items-start '>
							<Image src={item.icon} alt={item.title} width={50} height={50} className='' />
							<section className='space-y-2'>
								<h3 className='text-xl font-semibold text-[#1B233D] mb-2'>{item.title}</h3>
								<p className='text-[#616163] font-normal'>{item.description}</p>
							</section>
						</div>
					))}
				</section>

				<div className='bg-white rounded-lg p-6 flex items-center '>
					<div className=''>
						<Image src='/assets/images/video_rep.png' alt='Feature 3' width={400} height={400} className='w-full h-auto' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
