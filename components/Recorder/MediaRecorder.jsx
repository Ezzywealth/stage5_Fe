import React, { useState, useRef, useEffect } from 'react';
import useScreenRecorder from 'use-screen-recorder';
import Controls from './Controls';

const MediaRecorder = () => {
	const videoRef = useRef(null);
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const { pauseRecording, resetRecording, resumeRecording, startRecording, status, stopRecording, blobUrl } = useScreenRecorder({
		audio: true,
		video: true,
		blobOptions: {
			type: 'video/webm;codecs=vp8,opus',
		},
	});

	// Start the camera when the component mounts
	useEffect(() => {
		startCamera();
	}, []);

	const startCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });
			if (videoRef.current) {
				videoRef.current.srcObject = stream; // Set the camera stream as the srcObject
			} else {
				// Handle the case where videoRef is undefined
				console.error('videoRef is undefined');
			}
		} catch (error) {
			console.error('Error accessing camera:', error);
		}
	};

	function stopCamera() {
		if (videoRef.current) {
			const tracks = videoRef.current.srcObject?.getTracks();
			tracks?.forEach((track) => {
				track.stop();
			});
			videoRef.current.srcObject = null;
		}
	}

	const handleStopRecording = () => {
		if (status === 'recording') {
			stopRecording();
			stopCamera();
			return;
		}
	};

	const handleStartRecording = () => {
		startRecording();
		startCamera();
	};
	console.log(blobUrl);
	return (
		<div>
			<div>
				{blobUrl && <video src={blobUrl} controls className='w-full ' />}
				<button onClick={handleStartRecording}>Start Recording</button>
				<button onClick={handleStopRecording}>Stop Recording</button>
				<div className='video-container'>{videoRef && <video ref={videoRef} autoPlay playsInline className='video-element'></video>}</div>
				{status === 'recording' && <Controls handleStartRecording={handleStartRecording} handleStopRecording={handleStopRecording} pauseRecording={pauseRecording} resumeRecording={resumeRecording} resetRecording={resetRecording} status={status} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} hours={hours} setHours={setHours} isRunning={isRunning} setIsRunning={setIsRunning} />}
			</div>
		</div>
	);
};

export default MediaRecorder;
