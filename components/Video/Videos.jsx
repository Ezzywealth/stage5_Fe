import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
	return (
		<main className='my-10'>
			<h2 className='text-[#141414CC] font-semibold text-lg mb-4'>Recent Videos</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				{videos.map((video, index) => (
					<VideoCard video={video} key={index} />
				))}
			</div>
		</main>
	);
};

export default VideoList;
