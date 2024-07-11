import './App.css'
import About from './Components/About/About';
import Banner from './Components/Banner/Banner'
import Companies from './Components/Companies/Companies';
import Dashboard from './Components/Dashboard/Dashboard'
import DataTable from './Components/DataTable/DataTable';
import Footer from './Components/Footer/Footer';
import Listings from './Components/Listings/Listings';
import ReportComponent from './Components/ReportComponent/ReportComponent';
import StoriesAndIdeas from './Components/StoriesAndIdeas/StoriesAndIdeas';

function App() {


  const data = [
    { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
    { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
    { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
    { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
    { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$9.12', marketCap: '1.1', revenueGrowth: '30.0%', grossMargin: '65.0%', evRevenue: '5.2', ytdPerformance: '15.0%' },
    { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
    { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
    { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
    { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
    { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
    { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$9.12', marketCap: '1.1', revenueGrowth: '30.0%', grossMargin: '65.0%', evRevenue: '5.2', ytdPerformance: '15.0%' },
    { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
    { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: '$17.15', marketCap: '50.5', revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: '6.3', ytdPerformance: '24.3%' },
    { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: '$16.12', marketCap: '4.7', revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: '4.9', ytdPerformance: '77.1%' },
    { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: '$16.27', marketCap: '1.5', revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: '7.0', ytdPerformance: '10.0%' },
    { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: '$10.21', marketCap: '2.0', revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: '6.0', ytdPerformance: '10.5%' },
    { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: '$9.12', marketCap: '1.1', revenueGrowth: '30.0%', grossMargin: '65.0%', evRevenue: '5.2', ytdPerformance: '15.0%' },
    { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: '$17.0', marketCap: '3.1', revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: '2.6', ytdPerformance: '-17.8%' },
  ];


  return (
    <>
      <Banner />
      <Dashboard />

      <div>
        <DataTable data={data} />
        <div className="flex flex-col lg:flex-row justify-center gap-4 items-center mt-6">
          <button className="download-btn rounded-full">Download All Companies Data</button>
          <button className="view-methodology-btn  rounded-full">View Methodology</button>
        </div>
      </div>

      <Listings/>
      <ReportComponent/>
      <StoriesAndIdeas/>
      <About/>
      <hr className="bg-[#90B8F0] h-[2px] w-11/12 mx-auto"/>
      <Companies/>
      <Footer/>

    </>
  )
}

export default App
