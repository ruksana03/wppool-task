/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import search from '../../assets/svgImages/search.svg'
import './DataTable.css';
import Table from './Table';

const DataTable = ({ data }) => {


  return (
    <div className=" w-11/12 mx-auto mt-12 bg-white rounded-md p-6">
      <div className='flex flex-col lg:flex-row justify-between mb-8'>
        <h1 className='text-4xl font-semibold w-1/2'>All Companies</h1>
        <div className="flex items-center border-b border-purple-500 py-2 mt-4 lg:mt-0 w-full lg:w-1/2">
          <img className="w-4 h-4 mr-2" src={search} alt="Search icon" />
          <input
            type="text"
            placeholder="Search Companies"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
        </div>
      </div>
      <Table data={data} />
    </div>
  );
};

export default DataTable;
