import share from '../../assets/svgImages/share.svg'
import shareBlack from '../../assets/svgImages/shareBlack.svg'
import menu from '../../assets/svgImages/menu.svg'
import cross from '../../assets/svgImages/cross.svg'
import { useState } from 'react';

const BannerBtn = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };
  return (
    <>
      <button className='flex justify-end items-center gap-4' onClick={toggleDropdown}>
        <img className='border p-4 rounded-full' src={share} alt="" />
        <span className='px-4 py-2 border rounded-full'>Download the 2024 Report</span>
        <img src={menu} alt="" />
      </button>
      {isDropdownVisible && (
        <div className='absolute right-0 top-0  bg-white border rounded shadow-lg'>
          <div className='flex justify-end items-center gap-4 pt-6 px-6'>
            <img className='border p-4 rounded-full' src={shareBlack} alt="" />
            <span className='px-4 py-2 bg-[#2042B6] rounded-full '>Download the 2024 Report</span>
            <button onClick={closeDropdown}><img src={cross} alt="" /></button>
          </div>
          <div className='space-y-2'>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>The WPPOOL Index</a>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>All Companies</a>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Potential Future Listings</a>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>State of USA</a>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Stories & Ideas</a>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>About WPPOOL</a>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>WPPOOL Portfolio Companies</a>
            <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Visit WPPOOL</a>
          </div>
        </div>
      )}

    </>
  );
};

export default BannerBtn;