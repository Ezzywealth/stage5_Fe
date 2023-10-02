import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginPage = () => {
	const { register, handleSubmit, errors } = useForm();
	const router = useRouter();
	const onSubmit = (data) => {
		// Handle form submission here
		console.log(data);
		router.push('/home');
	};

	return (
		<>
			<div className='min-h-screen flex flex-col  '>
				<div className='flex items-center m-12 mx-20 mb-0 '>
					<Link href='/'>
						<Image src='/assets/images/logo.png' alt='Logo' width={160} height={70} className=' mr-2' />
					</Link>
				</div>
				<div className=' flex flex-col items-center justify-center '>
					<div className='bg-white p-8 rounded-lg w-full md:w-[500px]'>
						<div className='w-full flex justify-center'>
							<div className='w-[80%] mb-4'>
								<h2 className='text-[32px] font-bold text-center'>Log in or Sign up</h2>
								<p className='text-center text-[#434343]'>Join millions of others in sharing successful moves on HelpMeOut.</p>
							</div>
						</div>
						<div className='flex w-full flex-col justify-center items-start  gap-4 mt-4'>
							<button className=' text-[#141414]  border border-[#141414]/20 w-full justify-center font-semibold py-3 px-4 rounded-md flex items-center space-x-2 m-0 focus:outline-none '>
								<Image src='/assets/images/Gmail.png' alt='Logo' width={22} height={70} className=' ' />
								<span>Continue with Google</span>
							</button>
							<button className=' text-[#141414] border border-[#141414]/20 w-full justify-center font-semibold py-3 px-4 rounded-md flex items-center space-x-2 m-0 focus:outline-none '>
								<Image src='/assets/images/Facebook svg.png' alt='Logo' width={22} height={70} className=' mr-2' />
								<span>Continue with Facebook</span>
							</button>
						</div>
						<div className='mt-4 flex items-center gap-2 px-4 text-[#B9C2C8]'>
							<hr className='border-t w-1/2 border-gray-300' />
							or
							<hr className='border-t w-1/2 border-gray-300' />
						</div>
						<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
							<div className='mb-4'>
								<label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
									Email
								</label>
								<input type='email' id='email' name='email' placeholder='Enter your email address' className={`w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none ${errors?.email ? 'border-red-500' : 'focus:outline-none'}`} {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
								{errors?.email && <p className='text-red-500 text-sm mt-1'>Please enter a valid email.</p>}
							</div>
							<div className='mb-6'>
								<label htmlFor='password' className='block text-gray-700 font-medium mb-2'>
									Password
								</label>
								<input type='password' id='password' name='password' placeholder='Enter your password' className={`w-full border border-gray-300 rounded-md py-3 px-3 focus:outline-none `} {...register('password', { required: true, minLength: 6 })} />
								{errors?.password && <p className='text-red-500 text-sm mt-1'>Password must be at least 6 characters long.</p>}
							</div>
							<div className='flex w-full justify-between items-center'>
								<button type='submit' className='w-full bg-[#120B48] text-white font-semibold py-4 text-[1.2rem] px-5 rounded-md focus:outline-none '>
									Sign Up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
