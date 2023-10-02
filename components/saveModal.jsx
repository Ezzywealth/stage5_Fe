import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const SaveModal = ({ setSent, email }) => {
	return (
		<main className='bg-white px-8 py-8 w-[320px] flex justify-center rounded-lg backdrop-blur-sm backdrop-[#00000052]'>
			<section className='space-y-4 relative flex flex-col items-center justify-center'>
				<RiCloseCircleLine size={25} className='absolute  top-4 right-4 text-[#120B48]' onClick={() => setSent(false)} />
				<img src='success-kite 1.png' alt='success' />
				<h2 className='text-[#141414] mt-8 font-semibold'>
					Your video link has been sent to <span className='text-[#120B48]'>{email}</span>
				</h2>
				<h4 className='text-[#141414] mt-12 text-center'>Would you need to view this video later? Save to your account now!</h4>
				<button className='bg-[#120B48] mb-8 w-[120px] text-white py-2 px-4 rounded-md'>Save</button>
				<p className='text-[#7E7E7E]  font-semibold text-[0.7rem]'>
					Don’t have an account? <span className='text-[#120B48]'> Create account</span>
				</p>
			</section>
		</main>
	);
};

export default SaveModal;
