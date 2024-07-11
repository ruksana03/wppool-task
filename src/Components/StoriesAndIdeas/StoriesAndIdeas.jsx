
import StoryCard from "./StoryCard";
import person1 from '../../assets/images/person-1.png';
import person2 from '../../assets/images/person-2.png';

const StoriesAndIdeas = () => {
    const stories = [
        {
            image: person1,
            author: 'Sahabuddin Sagor',
            title: 'Title 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
        },
        {
            image: person2,
            author: 'Nayeem Khan',
            title: 'Title 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            image: person1,
            author: 'Shagor Sahabuddin',
            title: 'Title 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
        },
        {
            image: person2,
            author: 'Sahabuddin Sagor',
            title: 'Title 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
        },
        {
            image: person1,
            author: 'Nayeem Khan',
            title: 'Title 5',
            content: 'Key Takeaways from Robotics Invest 2023',
        },
        {
            image: person2,
            author: 'Shagor Sahabuddin',
            title: 'Title 6',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
        },
    ];

    return (
        <div className="w-11/12 mx-auto mt-24">
            <h1 className="text-4xl font-semibold">Stories & Ideas</h1>
            <p className="text-gray-600 text-sm mt-2 mb-12">The latest news and updates</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {stories.map((story, index) => (
                    <StoryCard
                        key={index}
                        image={story.image}
                        author={story.author}
                        title={story.title}
                        content={story.content}
                    />
                ))}
            </div>

            <hr className="bg-[#90B8F0] h-[2px] "/>
        </div>
    );
};

export default StoriesAndIdeas;
