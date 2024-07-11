/* eslint-disable react/prop-types */

import './DataTable.css';

const Table = ({ data }) => {
  return (
    <div className="table-container h-[460px]">
      
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Ticker</th>
            <th>Vertical</th>
            <th>Price</th>
            <th>Market Cap ($B)</th>
            <th>Revenue Growth</th>
            <th>Gross Margin</th>
            <th>EV/Revenue</th>
            <th>YTD Performance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.company}</td>
              <td>{row.ticker}</td>
              <td>{row.vertical}</td>
              <td>{row.price}</td>
              <td>{row.marketCap}</td>
              <td>{row.revenueGrowth}</td>
              <td>{row.grossMargin}</td>
              <td>{row.evRevenue}</td>
              <td>{row.ytdPerformance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
