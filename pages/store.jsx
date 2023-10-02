import Image from 'next/image';

const tabs = [
	{
		id: 1,
		name: 'Overview',
		active: true,
	},
	{
		id: 2,
		name: 'Privacy practices',
		active: false,
	},
	{
		id: 3,
		name: 'Review',
		active: false,
	},
	{
		id: 4,
		name: 'Related',
		active: false,
	},
];

function Store() {
	return (
		<div className='py-8 px-16'>
			<div className='w-full h-[0.125rem] bg-gray-200'></div>
			<div className='container mt-7 md:mt-14 flex flex-col lg:flex-row gap-y-5 md:gap-y-8 justify-between items-start'>
				<div className='flex flex-row gap-4'>
					<div>
						<Image height={100} width={100} src='/assets/images/Layer.png' alt='logo' />
					</div>
					<div className='mt-1'>
						<h1 className='sora text-3xl md:text-5xl font-semibold text-black'>HelpMeOut</h1>
						<div className='flex items-center gap-3 md:gap-6 mt-3 md:mt-5'>
							<div className='flex items-center gap-1 md:gap-2'>
								<div>
									<Image height={20} width={20} src='/assets/images/verify.png' alt='verify_icon' />
								</div>
								<p className='text-[#0E75C5] workSans text-base md:text-xl font-medium'>Helpmeout.com</p>
							</div>
							<div className='flex items-center gap-1 md:gap-2'>
								<div>
									<Image height={20} width={20} src='/assets/images/medal.svg' alt='medal_icon' />
								</div>
								<p className='text-[#0E75C5] workSans text-base md:text-xl font-medium'>Featured</p>
							</div>
						</div>
						<div className='mt-3 flex flex-wrap items-center gap-2'>
							<div className='flex items-center gap-1'>
								{Array.from({ length: 5 }, (_, i) => (
									<div key={i}>
										<Image height={20} width={20} src='/assets/images/Star 1.png' alt='star' />
									</div>
								))}
							</div>
							<p className='workSans text-base md:text-lg font-normal text-black'>252</p>
							<div>
								<Image width={20} height={20} src='/assets/images/info-circle.png' alt='info_circle_icon' />
							</div>
							<div className='bg-black h-6 w-[0.0625rem]'></div>
							<p className='workSans text-base md:text-lg font-normal text-[#0E75C5]'>Productivity</p>
							<div className='bg-black h-6 w-[0.0625rem]'></div>
							<p className='workSans text-base md:text-lg font-normal text-[#606060]'>80,000+ users</p>
						</div>
					</div>
				</div>
				<button className='bg-[#0E75C5] rounded-[0.25rem] px-4 py-2 md:py-3 workSans text-lg font-medium text-white ml-16 md:ml-[122px] lg:ml-0'>Add to Chrome</button>
			</div>
			<div className='container bg-gray-200 h-[0.05rem] mt-10'></div>
			<div className='container my-4 md:my-8 flex flex-wrap items-center gap-y-2 gap-x-5 md:gap-14 justify-center'>
				{tabs.map((tab) => (
					<div key={tab.id} className={`workSans text-sm md:text-xl font-medium cursor-pointer ${tab.active ? 'text-[#0E75C5] bg-white shadow-[4px,4px,40px,0px,rgba(20,20,20,0.10)] rounded-3xl px-3 md:px-4 py-2 md:py-3' : 'text-[#606060]'}`}>
						{tab.name}
					</div>
				))}
			</div>
			<div className='w-full bg-[#F0F0F0] pt-12'>
				<div className='container flex justify-center items-end gap-10'>
					<div className='mb-10 cursor-pointer'>
						<Image width={40} height={50} src='/assets/images/arrow.png' alt='arrow-left' />
					</div>
					<div className='flex items-start'>
						<Image height={700} width={700} src='/assets/images/now.png' alt='chrome_store_preview' />
						{/* <Image height={400} width={400} src='/assets/images/end.png' alt='mobile_preview' className='m' /> */}
					</div>
					<div className='mb-10 cursor-pointer'>
						<Image width={40} height={50} src='/assets/images/arrow2.png' alt='arrow-right' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Store;
