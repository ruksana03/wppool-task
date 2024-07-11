import stripe from '../../assets/svgImages/stripe.svg'
import klarna from '../../assets/svgImages/klarna.svg'
import plaid from '../../assets/svgImages/plaid.svg'
import checkout from '../../assets/svgImages/checkout.svg'
import revolut from '../../assets/svgImages/revolut.svg'
import chime from '../../assets/svgImages/chime.svg'
import n26 from '../../assets/svgImages/n26.svg'
import brex from '../../assets/svgImages/brex.svg'
import deel from '../../assets/svgImages/deel.svg'
import gusto from '../../assets/svgImages/gusto.svg'

const Listings = () => {
    return (
        <div className="w-11/12 mx-auto mt-24">
            <h1 className="text-4xl">Potential Future Listings</h1>
            <p className="text-sm w-2/3 my-4">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <img src={stripe} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={klarna} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={plaid} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={checkout} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={revolut} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={chime} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={n26} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={brex} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={deel} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
                <img src={gusto} className='bg-white p-6 rounded-md h-[120px] w-[220px]' alt="" />
            </div>
        </div>
    );
};

export default Listings;