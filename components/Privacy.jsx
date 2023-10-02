import React, { useState } from 'react';
import SaveModal from './saveModal';

const Privacy = () => {
	return (
		<main className='bg-[#E7E7ED33] flex py-12 justify-center'>
			<section className='space-y-8 flex flex-col items-center'>
				<h2 className='text-[#141414] font-semibold'>To ensure the availability and privacy of your video, we recommend saving it to your account.</h2>
				<button className='bg-[#120B48] text-white py-2 px-4 rounded-md'>Save</button>
				<p className='text-[#7E7E7E] font-semibold text-[1rem]'>
					Don’t have an account? <span className='text-[#120B48]'> Create account</span>
				</p>
			</section>
		</main>
	);
};

export default Privacy;
