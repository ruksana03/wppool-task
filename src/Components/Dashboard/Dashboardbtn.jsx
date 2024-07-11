import share from '../../assets/svgImages/shareBlack.svg'
import menu from '../../assets/svgImages/Menu-black.svg'

const Dashboardbtn = () => {
    return (
        <div className="mt-4 md:mt-0"> 
         <div className='flex justify-end items-center gap-4'>
          <img className='border border-[#afcd80] p-4 rounded-full' src={share} alt="" />
          <button className='px-4 py-2 border border-[#115cd9] rounded-full'>Download the 2024 Report</button>
          <img src={menu} alt="" />
        </div>
        </div>
    );
};

export default Dashboardbtn;