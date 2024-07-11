/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const StoryCard = ({ image, author, title, content }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start mb-12">
        <div className="w-full items-start ">
            <img src={image} alt={author} className="w-16 h-16 mr-4 relative -top-12" />
            <div className="-mt-10">
                <div className="text-[#2042B6] font-medium">By: {author}</div>
                <p className="text-gray-600 text-sm">{content}</p>
            </div>
        </div>
        <button className="mt-4 bg-[#2042B6] text-white py-2 px-4 rounded-full">Read More</button>
    </div>
);

export default StoryCard;