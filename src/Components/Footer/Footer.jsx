

const Footer = () => {
    return (
        <div className="w-11/12 mx-auto bg-[#E6E6E6] flex flex-col lg:flex-row p-12 rounded-md lg:h-[600px]">
            <div className="w-6/12 ">
                <h1 className="text-xl font-semibold lg:mb-60">Experience remarkable <br />
                    WordPress products with a <br />
                    new level of power, beauty, <br />
                    and human-centered designs.</h1>

                <p className="text-[#9FA0A1] space-x-4 text-xs my-2"><span>©2024 </span>   <span>Terms of Use </span>   <span>Privacy Policy</span></p>

                <p className=" text-sm lg:mr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaera </p>
            </div>
            <div className="w-2/12 flex flex-row space-x-4 lg:space-x-0 lg:flex-col text-left space-y-2">
                <button className="text-[#9FA0A1]  text-left">Jump to</button>
                <button className="text-[#115CD9]  text-left">About Us</button>
                <button className="text-[#115CD9]  text-left">Portfolio</button>
                <button className="text-[#115CD9]  text-left">News</button>
                <button className="text-[#115CD9]  text-left">Stories</button>
                <button className="text-[#115CD9]  text-left">Jobs</button>
                <button className="text-[#115CD9]  text-left">About Us</button>
            </div>
            <div className="w-4/12">
                <div>
                    <h1 className="font-bold">Cambridge</h1>
                    <p className=" mb-4">70728 Yost Burg, <br />
                        North Magdaleneview, <br />
                        UT 97952-2814</p>
                    <hr className="bg-[#9FA0A1] h-[2px]" />
                </div>
                <div>
                    <h1 className="font-bold">London</h1>
                    <p className=" mb-4">Suite 292 903 Stehr Streets, <br />
                        Langworthtown, SC 94577-9465</p>
                    <hr className="bg-[#9FA0A1] h-[2px]" />
                </div>
                <div>
                    <h1 className="font-bold">San Francisco</h1>
                    <p className=" mb-4">19837 Gilberto Lodge, <br />
                        Lake Kendallville, <br />
                        Colorado - 97392, Bhutan</p>
                    <hr className="bg-[#9FA0A1] h-[2px]" />
                </div>
                <div className=" mt-2 flex gap-4">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.5 6.48529V29.5147C31.5 30.0412 31.2908 30.5462 30.9185 30.9185C30.5462 31.2908 30.0412 31.5 29.5147 31.5H6.48529C5.95876 31.5 5.45379 31.2908 5.08148 30.9185C4.70916 30.5462 4.5 30.0412 4.5 29.5147V6.48529C4.5 5.95876 4.70916 5.45379 5.08148 5.08148C5.45379 4.70916 5.95876 4.5 6.48529 4.5H29.5147C30.0412 4.5 30.5462 4.70916 30.9185 5.08148C31.2908 5.45379 31.5 5.95876 31.5 6.48529ZM12.4412 14.8235H8.47059V27.5294H12.4412V14.8235ZM12.7985 10.4559C12.8006 10.1555 12.7435 9.85773 12.6305 9.57945C12.5175 9.30117 12.3508 9.04787 12.1399 8.83402C11.929 8.62017 11.6781 8.44996 11.4014 8.3331C11.1247 8.21624 10.8277 8.15502 10.5274 8.15294H10.4559C9.8451 8.15294 9.25934 8.39557 8.82746 8.82746C8.39557 9.25934 8.15294 9.8451 8.15294 10.4559C8.15294 11.0667 8.39557 11.6524 8.82746 12.0843C9.25934 12.5162 9.8451 12.7588 10.4559 12.7588C10.7562 12.7662 11.0551 12.7143 11.3354 12.6062C11.6157 12.498 11.872 12.3357 12.0896 12.1285C12.3071 11.9212 12.4817 11.6732 12.6033 11.3984C12.725 11.1237 12.7913 10.8277 12.7985 10.5274V10.4559ZM27.5294 19.8106C27.5294 15.9909 25.0994 14.5059 22.6853 14.5059C21.8949 14.4663 21.1079 14.6347 20.4028 14.9942C19.6977 15.3537 19.0993 15.8917 18.6671 16.5547H18.5559V14.8235H14.8235V27.5294H18.7941V20.7715C18.7367 20.0793 18.9547 19.3925 19.4008 18.8602C19.8469 18.3279 20.485 17.9931 21.1765 17.9285H21.3274C22.59 17.9285 23.5271 18.7226 23.5271 20.7238V27.5294H27.4976L27.5294 19.8106Z" fill="#9FA0A2" />
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.9287 11.8801C29.947 12.1446 29.947 12.409 29.947 12.676C29.947 20.8088 23.7556 30.1884 12.4345 30.1884V30.1836C9.09019 30.1884 5.81536 29.2305 3 27.4243C3.48629 27.4828 3.97502 27.512 4.46496 27.5132C7.23644 27.5157 9.9287 26.5858 12.1091 24.8734C9.47532 24.8234 7.16575 23.1062 6.35893 20.5992C7.28154 20.7771 8.23218 20.7405 9.13772 20.4931C6.2663 19.913 4.20049 17.3901 4.20049 14.4602C4.20049 14.4334 4.20049 14.4078 4.20049 14.3822C5.05606 14.8588 6.01402 15.1232 6.99391 15.1525C4.28946 13.3451 3.45582 9.74725 5.08897 6.93433C8.21389 10.7795 12.8245 13.1171 17.7739 13.3646C17.2779 11.2268 17.9555 8.98674 19.5545 7.48399C22.0335 5.15371 25.9324 5.27315 28.2626 7.7509C29.6411 7.47912 30.9622 6.97333 32.1712 6.25669C31.7118 7.68143 30.7502 8.89167 29.4656 9.66072C30.6856 9.5169 31.8775 9.19027 33 8.69179C32.1737 9.93006 31.1328 11.0087 29.9287 11.8801Z" fill="#9FA0A2" />
                    </svg>


                </div>
            </div>
        </div>
    );
};

export default Footer;