import Head from 'next/head';
import HeroSection from '../components/HomePage/HeroSection';
import FeaturesSection from '../components/HomePage/Features';
import HowItWorks from '../components/HomePage/HowItWorks';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Help me out</title>
				<link rel='icon' href='/assets/images/logo' />
			</Head>
			<Layout>
				<section className='divide-y-[60px] divide-[#F4F6F8] '>
					<HeroSection />
					<FeaturesSection />
					<HowItWorks />
				</section>
			</Layout>
		</div>
	);
}
