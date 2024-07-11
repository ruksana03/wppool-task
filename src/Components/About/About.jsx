import about from '../../assets/images/about.png'
const About = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between bg-white my-12'>
            <div className='w-2/3 p-12'>
                <h1 className='text-4xl my-2'>About WPPOOL</h1>
                <h3 className='text-2xl text-[#7D7F81] my-2'>Investing in wppool for over 50 years</h3>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum umquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                <button className='px-4 py-2 rounded-full bg-[#2042B6] text-white my-4'>Contact WPPOOL</button>
            </div>
            <div className='w-1/3'><img src={about} className='h-full w-full' alt="" /></div>

           
        </div>
    );
};

export default About;