const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      title: 'অসাধারন কোর্স',
      content: "আমি ২০২৩ সালে এই কোর্সে ভর্তি হয়েছিলাম, ডিজিটাল মার্কেটিং শিখে আমি এখন বই প্রিয় নামে একটি পেইজ বুক পেইজ নিয়ে কাজ করছি এবং এই কোর্সের প্রতিটি বিষয় আমার কাজে লাগতেছে। আমার মতে, saiful sarkar স্যার একজন দুর্দান্ত প্রশিক্ষক এবং আমি একটি রিভিউ দিয়ে তার সম্পর্কে বলে শেষ করতে পারবো না । শুভকামনা এবং আপনার সুন্দর কোর্সের জন্য আপনাকে ধন্যবাদ.",
      author: 'Mobarok Hossain',
      designation: 'Owner বই প্রিয়',
      imageUrl: 'https://imgur.com/GqL8zQj.jpg'
    },
    {
      id: 2,
      title: 'জীবন বদলে দেওয়া কোর্স',
      content: "আমি ডিজিটাল মার্কেটিং শিখে এখন সন্ধিপ এর একটা সরকারী প্রতিষ্ঠানে ডিজিটাল মাকের্টিং এর শিক্ষক হিসাবে কাজ করছি। এই কোর্স না করলে আমি এই জায়গায় আসতে পারতাম না। saiful sarkar স্যার একজন মোটিবেটর, প্রশিক্ষক, যে কোন বিষয়ে নক করে খুবই তারাতারী স্যারের কাছ থেকে সহযেগীতা পেয়েছি। শুভকামনা এবং আপনার সুন্দর কোর্সের জন্য আপনাকে ধন্যবাদ.",
      author: 'Md Sultanul Arifin',
      designation: 'Instructor Sandwip Technical Training Center',
      imageUrl: 'https://imgur.com/eJYoE16.jpg'
    },
    {
      id: 3,
      title: 'উপকারী একটা কোর্স',
      content: "আমি ডিজিটাল মার্কেটিং শিখে Harbour IT & Training Institute এ Assistant Sales Manager হিসাবে কাজ করছি। এই কোর্স করার কারনে আমার ডিপ্লোমাতে ইন্টার্ন করার খরচ বেছে গেছে। saiful sarkar স্যার থেকে অনেক সহযেগীতা পেয়েছি। আপনার সুস্থ্যতা কামনা করছি। ধন্যবাদ দিয়ে আপনাকে ছোট করতে চাই না।",
      author: 'Sajal Islam Rabbi',
      designation: 'ASM, Harbour IT & Training Institute ',
      imageUrl: 'https://imgur.com/5ETwTnQ.jpg'
    },
    {
      id: 4,
      title: 'সময় উপযোগী কোর্স',
      content: "ডিজিটাল মার্কেটিং বর্তমান ও ভবিষ্যতের জন্য অনেক প্রয়োজনীয় একটি স্কিল। ডিজিটাল মার্কেটিং শিখে আমি নিজের চাকরী জীবনে কাজে লাগিয়েছি। সেই সাথে saiful sarkar স্যার এর সাথে Harbour IT তে কাজ করে নিজের Soft Skill ডেভেলপ হয়েছে। বর্তমানে এই ডিজিটাল মার্কেটিং কে কাজে লাগিয়ে চাকরি ক্ষেত্রে উন্নতি করেছি এবং পাশাপাশি ফ্রিল্যান্সিং করে যাচ্ছি। স্যারকে অসংখ্য ধন্যবাদ এভাবে পাশে থেকে আমাদের ক্যারিয়ার গড়তে সাহায্য করার জন্য।",
      author: 'Anika Khanam',
      designation: "Radiant School and College, Assistant Teacher",
      imageUrl: 'https://imgur.com/wzHsryU.jpg'
    },
    {
      id: 5,
      title: 'খুবই উপকারী কোর্স',
      content: "আমি ডিজিটাল মার্কেটিং শিখে বর্তমানে বাংলাদেশ রেডক্রিসেন্ট সোসাইটি, চট্টগ্রাম সিটি ইউনিট এর ICT Media publication Department এ কাজ করছি। saiful sarkar স্যার একজন মেন্টর, মোটিভেটর ও প্রশিক্ষক। স্যার এর কাছে সকল প্রবলেম এর সমাধান পেয়েছি, ইনশাআল্লাহ আরো পাবো। স্যার এর জন্য অনেক অনেক শুভ কামনা।",
      author: 'Shajidul Ridoy',
      designation: "বাংলাদেশ রেডক্রিসেন্ট সোসাইটি, ICT Media publication Department",
      imageUrl: 'https://imgur.com/zNtjFfY.jpg'
    }
    ,
    {
      id: 6,
      title: 'বেকার থেকে মুক্তি পাওয়ার কোর্স।',
      content: "কত মানুষ সার্টিফিকেট নিয়েও জবের জন্য ঘুরছে। সেখানে আমি ছাত্র অবস্থায় ডিজিটাল মার্কেটিং কোর্স করে স্কিল ডেভেলপমেন্ট করছি, Harbour IT এর Sales Officer পদে আছি। আলহামদুলিল্লাহ আমি আন্তরিকভাবে ধন্যবাদ জানাচ্ছি saiful sarkar স্যারকে আমাকে এই সিস্টেমে কাজ করার সুযোগ দিয়েছে",
      author: 'Mohammad Nazim Uddin',
      designation: "Student",
      imageUrl: 'https://imgur.com/BwUW8iZ.jpg'
    }
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-4"> ছাত্র/ছাত্রীদের অনুভূতি</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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