import React, { useState } from 'react';

const ToggleSwitch = () => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleSwitch = () => {
		setIsChecked(!isChecked);
	};
	console.log(isChecked);
	return (
		<label className='relative inline-block w-12 h-6'>
			<input type='checkbox' className='hidden' checked={isChecked} onChange={toggleSwitch} />
			<div className={`w-12 h-6 bg-gray-400 rounded-full absolute transition-transform transform ${isChecked ? 'bg-[#19143d]' : ''}`}></div>
			<div className={`w-6 h-6 bg-white rounded-full absolute transition-transform transform ${isChecked ? 'translate-x-6' : ''}`}></div>
		</label>
	);
};

export default ToggleSwitch;
