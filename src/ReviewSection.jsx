const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      title: 'অসাধারন কোর্স',
      content: "আমি ২০২৩ সালে এই কোর্সে ভর্তি হয়েছিলাম, ডিজিটাল মার্কেটিং শিখে আমি এখন বই প্রিয় নামে একটি পেইজ বুক পেইজ নিয়ে কাজ করছি এবং এই কোর্সের প্রতিটি বিষয় আমার কাজে লাগতেছে। আমার মতে, সাইফুল সরকার স্যার একজন দুর্দান্ত প্রশিক্ষক এবং আমি একটি রিভিউ দিয়ে তার সম্পর্কে বলে শেষ করতে পারবো না । শুভকামনা এবং আপনার সুন্দর কোর্সের জন্য আপনাকে ধন্যবাদ.",
      author: 'Mobarok Hossain',
      designation: 'Owner বই প্রিয়',
      imageUrl: 'https://imgur.com/GqL8zQj.jpg'
    },
    {
      id: 2,
      title: 'জীবন বদলে দেওয়া কোর্স',
      content: "আমি ডিজিটাল মার্কেটিং শিখে এখন সন্ধিপ এর একটা সরকারী প্রতিষ্ঠানে ডিজিটাল মাকের্টিং এর শিক্ষক হিসাবে কাজ করছি। এই কোর্স না করলে আমি এই জায়গায় আসতে পারতাম না। সাইফুল সরকার স্যার একজন মোটিবেটর, প্রশিক্ষক, যে কোন বিষয়ে নক করে খুবই তারাতারী স্যারের কাছ থেকে সহযেগীতা পেয়েছি। শুভকামনা এবং আপনার সুন্দর কোর্সের জন্য আপনাকে ধন্যবাদ.",
      author: 'Md Sultanul Arifin',
      designation: 'Instructor Sandwip Technical Training Center',
      imageUrl: 'https://imgur.com/eJYoE16.jpg'
    },
    {
      id: 3,
      title: 'উপকারী একটা কোর্স',
      content: "আমি ডিজিটাল মার্কেটিং শিখে Harbour IT & Training Institute এ Assistant Sales Manager হিসাবে কাজ করছি। এই কোর্স করার কারনে আমার ডিপ্লোমাতে ইন্টার্ন করার খরচ বেছে গেছে। সাইফুল সরকার স্যার থেকে অনেক সহযেগীতা পেয়েছি। আপনার সুস্থ্যতা কামনা করছি। ধন্যবাদ দিয়ে আপনাকে ছোট করতে চাই না।",
      author: 'Sajal Islam Rabbi',
      designation: 'ASM, Harbour IT & Training Institute ',
      imageUrl: 'https://imgur.com/5ETwTnQ.jpg'
    },
    {
      id: 4,
      title: 'খুবই উপকারী কোর্স',
      content: "আমি ডিজিটাল মার্কেটিং শিখে বর্তমানে বাংলাদেশ রেডক্রিসেন্ট সোসাইটি, চট্টগ্রাম সিটি ইউনিট এর ICT Media publication Department এ কাজ করছি। সাইফুল সরকার স্যার একজন মেন্টর, মোটিভেটর ও প্রশিক্ষক। স্যার এর কাছে সকল প্রবলেম এর সমাধান পেয়েছি, ইনশাআল্লাহ আরো পাবো। স্যার এর জন্য অনেক অনেক শুভ কামনা।",
      author: 'Shajidul Ridoy',
      designation: "বাংলাদেশ রেডক্রিসেন্ট সোসাইটি, ICT Media publication Department",
      imageUrl: 'https://imgur.com/zNtjFfY.jpg'
    }
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-4"> ছাত্র/ছাত্রীদের মন্তব্য</h2>
      <div className="grid grid-cols-2 gap-6">
        {reviews.map(review => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src={review.imageUrl} alt={review.author} className="rounded-full h-12 w-12 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
              <p className="text-gray-700 mb-2" style={{ textAlign: 'justify' }}>{review.content}</p>
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

export default ReviewSection;
