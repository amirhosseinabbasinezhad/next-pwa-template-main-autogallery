import { useState } from "react";
import Image from "next/image";

//import type { CarProps } from "@/types";
//import { calculateCarRent, generateCarImageUrl } from "@/utils";
import logo from "../assets/getImage.webp"
import speed from "../assets/speed.png";
import gas from "../assets/TSD-Petrol_Pump.svg"
import automatic from "../assets/automatic-transmission.png"
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

//interface CarCardProps {
//    car: CarProps;
//}

const CarCard = ({ car }: any) => {
    const { city_mpg, year, make, model, transmission, drive } = { city_mpg:"", year:"", make:"", model:"", transmission:"", drive:"" };

    const [isOpen, setIsOpen] = useState(false);

    //const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className="car-card group max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl p-4"
        
        onClick={() => setIsOpen(true)}>
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {1000}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={car.img} alt='car model' layout="fill"  priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex  w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={speed} width={60} height={60} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="car-card__icon mt-3">
                        <Image src={automatic} width={35} height={35} alt="seat" />
                        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon mt-2 ">
                        <Image src={gas} width={40} height={40} alt="seat" />
                        <p className="car-card__icon-text">{city_mpg} MPG</p>
                    </div>
                </div>

               
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;