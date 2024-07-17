import React from 'react';

const SReviewSection = () => {
  const reviews = [
    {
      id: 1,
      title: 'Excellent Digital Marketing Insights!',
      content: "I take these digital marketing tips from Saiful Sarkar's work he has given me practical strategies which I have implemented in my business and have got amazing results. Thanks to Saiful Sarkar and his team",
      author: 'John Doe',
      designation: 'Digital Marketing Consultant',
      imageUrl: 'https://imgur.com/Vxpf5FV.jpg'
    },
    {
      id: 2,
      title: 'Great Resource for Marketing Professionals',
      content: 'Saiful Sarkar and his team provide valuable insights into current digital marketing trends. This team is a must visit for anyone in the marketing field!',
      author: 'Jane Smith',
      designation: 'Marketing Manager',
      imageUrl: 'https://imgur.com/DWnpbYc.jpg'
    },
    {
      id: 3,
      title: 'Informative and Well-Organized',
      content: 'The work of this team is amazing. I want to take all services from them in the future.',
      author: 'David Johnson',
      designation: 'Content Strategist',
      imageUrl: 'https://imgur.com/RU8br2r.jpg'
    },
    {
      id: 4,
      title: 'Highly Recommended Digital Marketing Expertise!',
      content: 'Saiful Sarkar provides in-depth digital marketing expertise that has significantly improved our online presence. His strategies are cutting-edge and effective.',
      author: 'Emily Brown',
      designation: 'Business Owner',
      imageUrl: 'https://imgur.com/WFZAmwe.jpg'
    },
    {
      id: 5,
      title: 'Expert Guidance on Digital Marketing Strategies',
      content: 'I have learned invaluable digital marketing strategies from Saiful Sarkar that have enhanced my marketing campaigns. Highly recommended!',
      author: 'Michael Clark',
      designation: 'Digital Marketer',
      imageUrl: 'https://imgur.com/NsUosQO.jpg'
    },
    {
      id: 6,
      title: 'Practical and Insightful Digital Marketing Advice',
      content: 'Saiful Sarkar delivers practical and insightful digital marketing advice that is easy to implement. A great resource for marketers!',
      author: 'Sophia Lee',
      designation: 'Marketing Specialist',
      imageUrl: 'https://imgur.com/8D1s5ZJ.jpg'
    }
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Customer Reviews on Digital Marketing</h2>
      <div className="grid grid-cols-2 gap-6">
        {reviews.map(review => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src={review.imageUrl} alt={review.author} className="rounded-full h-12 w-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
              <p className="text-gray-700 mb-2">{review.content}</p>
              <p className="text-gray-600">
                <span className="text-blue-500">{review.author}</span>, <span className="text-green-500">{review.designation}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SReviewSection;
