
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import slide1 from '../../assets/images/wordpress-table.png';
import slide2 from '../../assets/images/wordpress-plugins.png';
import slide3 from '../../assets/images/google-sheets.png';
import background from '../../assets/images/bg.png'
import parallalogram from '../../assets/svgImages/perallalogram.svg'


const ReportComponent = () => {
    return (
        <div className="w-11/12 mx-auto mt-24 relative ">
            <div
                className="absolute top-0 right-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${background})`, height: '550px', width: '50%' }}
            >
                <img src={parallalogram} alt="" />
            </div>
            <div className=" mb-6">
                <h1 className="text-4xl font-semibold">State of USA</h1>
                <div className=" inline-block mt-4">
                    <button className="bg-[#2042B6] text-white py-2 px-4 rounded-full flex items-center  space-x-4">
                        <span className='text-2xl'> 2024</span>
                        <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7L0 0H14L7 7Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <p className="mt-4 text-gray-600 text-sm">Click through the slides or download the report to view natively on your device.</p>
            </div>

            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={2.5}
                pagination={{ clickable: true }}
                className="w-full"
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide 1" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
            </Swiper>

            <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
                <div className='flex flex-col md:flex-row gap-4'>
                    <button className="bg-white border rounded-full p-4 shadow">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.92437 7.99881L8.0013 0.921875L8.9449 1.86548L3.47824 7.33214L16.668 7.33214L16.668 8.66548L3.47824 8.66547L8.9449 14.1321L8.0013 15.0757L0.92437 7.99881Z" fill="#2042B6" />
                        </svg>

                    </button>

                    <button className="bg-white border rounded-full p-4 shadow">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0756 7.99881L8.9987 0.921875L8.0551 1.86548L13.5218 7.33214L0.332032 7.33214L0.332032 8.66548L13.5218 8.66547L8.0551 14.1321L8.9987 15.0757L16.0756 7.99881Z" fill="#2042B6" />
                        </svg>
                    </button>
                    <div className="text-gray-500 flex justify-start items-center my-4 md:my-0">
                        Pages <span className="font-semibold flex items-center gap-4 bg-white rounded-full px-4 py-2 mx-2">1 and 2 <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00192 6.53841L0.130188 0.666672H11.8737L6.00192 6.53841Z" fill="#2042B6" />
                        </svg>
                        </span> of 37
                    </div>
                </div>


                <div>
                    <button className='bg-[#2042B6] text-white text-sm px-4 py-2 rounded-full '>Download the 2023 Report</button>
                </div>
            </div>
        </div>
    );
};

export default ReportComponent;
