import CustomLineChart from "../../Dashboard/CustomLineChart";


const TabOne = () => {
    return (
        <div>
            <div className="flex gap-4 items-center px-4 mb-4">
                <svg width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.914491 40.5L26.5591 0.5H45.0855L19.4409 40.5H0.914491Z" stroke="#191618" />
                </svg>
                <h1 className="text-4xl">The WPPOOL Index</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex gap-4 bg-[#f3f3f3] py-2 px-4 rounded-md">
                    <h1 className="text-4xl text-[#fc714d]">+66.2%</h1>
                    <div className="flex items-center gap-2">
                        <p className="text-xs text-end">WPPOOL Index</p>
                        <hr className="h-8 w-1 bg-[#FC714D]" /></div>
                </div>
                <div className="flex gap-4 bg-[#f3f3f3] py-2 px-4 rounded-md">
                    <h1 className="text-4xl text-[#615de3]">+26.6%</h1>
                    <div className="flex items-center gap-2">
                        <p className="text-xs text-end">Google Index</p>
                        <hr className="h-8 w-1 bg-[#615de3]" /></div>
                </div>
                <div className="flex gap-4 bg-[#f3f3f3] py-2 px-4 rounded-md">
                    <h1 className="text-4xl text-[#7ca63a]">+34.1%</h1>
                    <div className="flex items-center gap-2">
                        <p className="text-xs text-end">Microsoft</p>
                        <hr className="h-8 w-1 bg-[#7ca63a]" /></div>
                </div>
                <div className="flex gap-4 bg-[#f3f3f3] py-2 px-4 rounded-md">
                    <h1 className="text-4xl text-[#6f34a1]">+17%</h1>
                    <div className="flex items-center gap-2">
                        <p className="text-xs text-end">Twitter Index</p>
                        <hr className="h-8 w-1 bg-[#6f34a1]" /></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-4">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <button className="bg-[#2042B6] flex justify-between items-center gap-6 px-4 py-1 rounded-full text-white text-sm">
                        <span>Sectors</span>
                        <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.4177 3.91732L0.251037 1.75065C-0.0128516 1.48676 -0.0718794 1.18468 0.0739539 0.844401C0.219787 0.504123 0.480204 0.333984 0.855204 0.333984H5.14687C5.52187 0.333984 5.78229 0.504123 5.92812 0.844401C6.07395 1.18468 6.01493 1.48676 5.75104 1.75065L3.58437 3.91732C3.50104 4.00065 3.41076 4.06315 3.31354 4.10482C3.21632 4.14648 3.11215 4.16732 3.00104 4.16732C2.88993 4.16732 2.78576 4.14648 2.68854 4.10482C2.59132 4.06315 2.50104 4.00065 2.4177 3.91732Z" fill="white" />
                        </svg>
                    </button>
                    <button className="bg-[#2042B6] flex justify-between items-center gap-6 px-4 py-1 rounded-full text-white text-sm">
                        <span>Types of IPO</span>
                        <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.4177 3.91732L0.251037 1.75065C-0.0128516 1.48676 -0.0718794 1.18468 0.0739539 0.844401C0.219787 0.504123 0.480204 0.333984 0.855204 0.333984H5.14687C5.52187 0.333984 5.78229 0.504123 5.92812 0.844401C6.07395 1.18468 6.01493 1.48676 5.75104 1.75065L3.58437 3.91732C3.50104 4.00065 3.41076 4.06315 3.31354 4.10482C3.21632 4.14648 3.11215 4.16732 3.00104 4.16732C2.88993 4.16732 2.78576 4.14648 2.68854 4.10482C2.59132 4.06315 2.50104 4.00065 2.4177 3.91732Z" fill="white" />
                        </svg>
                    </button>
                </div>

                <div className="bg-[#eff3f6] px-6 py-1 rounded-full space-x-4 text-sm">
                    <button>1Y</button>
                    <button>YTD</button>
                    <button>6M</button>
                    <button>1M</button>
                    <button>1W</button>
                </div>
            </div>
            <div className="mt-6">
                <CustomLineChart />
            </div>
        </div>
    );
};

export default TabOne;