import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'
import carimage from 'assets/9image.webp'
import { useEffect } from 'react'
import AOS from 'aos'
import img1 from "../assets/getImage.webp"
import img2 from "../assets/2image.webp"
import img3 from "../assets/3image.webp"
import img4 from "../assets/4image.webp"
import img5 from "../assets/5image.webp"
import img6 from "../assets/6image.webp"
import img7 from "../assets/7image.webp"
import img8 from "../assets/8image.webp"
import img9 from "../assets/9image.webp"
import 'aos/dist/aos.css'
const Index = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<Page>
			<Section>
				<div className='flex-col'>
					<div className='flex '>
						<div
							data-aos='fade-right'
							className='w-full md:w-3/6 lg:w-3/6 xl:w-3/6'
						>
							<h1 className='text-6xl font-extrabold italic text-blue-500'>
								Car Gallery
							</h1>
							<p className='mt-5 text-3xl font-bold italic sm:invisible md:visible lg:visible'>
								Lorem ipsum is placeholder text commonly used in the graphic,
								print, and publishing .
							</p>
						</div>
						<div
							data-aos='fade-left'
							className='polygan w-full bg-blue-500 md:w-3/6 lg:w-3/6 xl:w-3/6'
						>
							<Image
								style={{ overflowClipBox: 'content-box', overflow: 'clip' }}
								src={carimage}
							/>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:xl:grid-cols-4 xl:xl:grid-cols-4 mt-6'>
						<div
							data-aos='fade-right'
							className='p-3 bg-amber-300 rounded-lg'
						>
							<Image src={img7} />
							In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
						</div>
						<div
							data-aos='fade-right'
							className='p-3 bg-red-400 rounded-lg'
						>
							<Image src={img2} />
							In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
						</div>
						<div
							data-aos='fade-left'
							className='p-3 bg-green-400 rounded-lg'
						>
							<Image src={img4} />
							In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
						</div>

						<div
							className='p-3 bg-blue-400 rounded-lg'
							data-aos='fade-left'
						
						>
							<Image src={img5} />
							In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
						</div>
						
					</div>
				</div>
			</Section>
		</Page>
	)
}
export default Index
