import Page from '@/components/page'
import Section from '@/components/section'

//import QRCodeScanner from "../components/QRCodeReader";
import QRCodeScanner from "../components/QRCodeScanner";
import CarCard from '@/components/CarCard';
import img1 from "../assets/getImage.webp"
import img2 from "../assets/2image.webp"
import img3 from "../assets/3image.webp"
import img4 from "../assets/4image.webp"
import img5 from "../assets/5image.webp"
import img6 from "../assets/6image.webp"
import img7 from "../assets/7image.webp"
import img8 from "../assets/8image.webp"
import img9 from "../assets/9image.webp"
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
const carlist =[
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img1},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img2},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img3},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img4},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img5},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img6},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img7},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img8},
	{model:"",speed:"",usageGas:"",isOutomat:false,img:img9},
]
const Story = () => {
	useEffect(()=>{
		AOS.init();
	},[])
	return(
	<Page>
		<Section>
			<div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:xl:grid-cols-4 xl:xl:grid-cols-4'>
				{carlist?.map((i)=>{
					return <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><CarCard car={i} /></div>
				})}
				{carlist?.map((i)=>{
					return <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><CarCard car={i} /></div>
				})}
				
				</div>
				</Section>
	</Page>)
}
export default Story
