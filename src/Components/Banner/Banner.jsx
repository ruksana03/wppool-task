/* eslint-disable react/no-unknown-property */
import Logo from '../Logo/Logo';
import './Banner.css'
import BannerBtn from './BannerBtn';
import downArrow from '../../assets/svgImages/downArrow.svg'


const Banner = () => {

    return (
        <div className="h-[564px] lg:min-h-screen banner w-11/12 mx-auto mt-4">
            <div className="overlay"></div>
            <div className='absolute inset-0 flex justify-center items-center'>
                <svg width="579" height="515" viewBox="0 0 579 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_759)">
                        <path d="M44.9268 470.5L324.841 44.5H534.073L254.159 470.5H44.9268Z" stroke="white" shape-rendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_759" x="0" y="0" width="579" height="515" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="22" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.66 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_759" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_759" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className='absolute inset-0 text-white  w-11/12 mx-auto mt-8'>
                <div>
                    <div className='mb-12  flex flex-col  md:flex-row justify-between '>
                        <Logo />
                        <BannerBtn />
               
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 space-y-6 lg:mt-10 mb-6'>
                            <div>
                                <h1 className='text-lg md:text-xl lg:text-5xl'>60</h1>
                                <p className='text-xs md:text-sm lg:text-base'>Companies</p>
                            </div>
                            <div>
                                <h1 className='text-lg md:text-xl lg:text-5xl'>$100B</h1>
                                <p>Market cap</p>
                            </div>
                            <div>
                                <h1 className='text-lg md:text-xl lg:text-5xl'>3.5x</h1>
                                <p>Revenue multiple</p>
                            </div>
                            <div>
                                <h1 className='text-lg md:text-xl lg:text-5xl'>60%</h1>
                                <p>LTM avg. revenue growth rate</p>
                            </div>
                        </div>
                        <div className=' mt-12 lg:mt-36'>
                            <h1 className='text-center text-2xl md:text-4xl lg:text-6xl text-white'>The WPPOOL Index</h1>
                            <p className='text-center text-xs md:text-sm lg:text-base'>Monitor the performance of emerging, publicly traded, financial technology companies</p>
                        </div>
                        <div className='mx-auto lg:mx-0 mt-12 lg:mt-96'>
                            <img src={downArrow} alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;
