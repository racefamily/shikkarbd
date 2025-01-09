import React from 'react';

const Leader = () => {
    // Define arrays of images, titles, positions, and facebook IDs
    const leaders = [
        {
            name: "সাইফুল সরকার",
            position: "সদস্য",
            image: "https://imgur.com/Ol9aFrd.jpg",
            facebookId: "saifullahbd0"
        },
        {
            name: "মেহেদী হাসান হিরা",
            position: "সদস্য",
            image: "https://imgur.com/Lwk3dOh.jpg",
            facebookId: "profile.php?id=100087167029370"
        }
               // Add more leaders as needed
    ];

    // Function to generate Facebook link with user ID
    const generateFacebookLink = (facebookId) => {
        return `https://www.facebook.com/${facebookId}`;
    };

    const openFacebook = (facebookId) => {
        window.open(generateFacebookLink(facebookId), '_blank');
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-violet-800 text-white col-span-full flex justify-center">
                <h1 className="text-5xl font-bold my-8">Our Team</h1>
            </div>
            {leaders.map((leader, index) => (
                <div key={index} className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={leader.image} alt={leader.name} className="rounded-xl w-full h-auto" style={{ aspectRatio: '1 / 1' }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{leader.name}</h2>
                        <p>{leader.position}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={() => openFacebook(leader.facebookId)}>Facebook</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leader;