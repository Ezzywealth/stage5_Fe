import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthNav = () => {
	return (
		<nav className=' p-4 px-4 lg:px-16 xl:px-36 flex items-center justify-between '>
			<div className='flex items-center'>
				<Link href='/'>
					<Image src='/assets/images/logo.png' alt='Logo' width={160} height={70} className=' mr-2' />
				</Link>
			</div>

			<section className='flex items-center gap-2'>
				<Image src='/assets/images/profile-circle.png' alt='Logo' width={30} height={30} className='' />
				<h3>John Mark</h3>
				<Image src='/assets/images/arrow-down.png' alt='Logo' width={20} height={20} className=' ' />
			</section>
		</nav>
	);
};

export default AuthNav;
