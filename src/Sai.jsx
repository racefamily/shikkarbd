const Sai = () => {
    const saifulImgurLink = "https://imgur.com/p7sJMsh.jpg";
    const facebookURL = "https://www.facebook.com/shikkarbd/";

    // Function to calculate the image width and height dynamically
    const calculateImageSize = () => {
        // Get the device's screen width
        const screenWidth = window.innerWidth;
        // Set the default width and height
        let width = 300; // Default width
        let height = 300; // Default height

        // Calculate the width and height based on the screen width
        if (screenWidth >= 1024) {
            width = 500;
            height = 500;
        } else if (screenWidth >= 768) {
            width = 400;
            height = 400;
        }

        // Return an object with the width and height
        return { width, height };
    };

    // Call the function to get the image size dynamically
    const { width, height } = calculateImageSize();

    return (
        <div className="hero min-h-screen bg-transparent">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                <img src={saifulImgurLink} alt="Saiful Sarkar" className={`rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-8 mx-auto lg:ml-0 w-${width} h-${height}`} style={{ width: `${width}px`, height: `${height}px` }} />
                <div className="text-left lg:text-left ml-4 mr-20 lg:mr-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-fuchsia-600 font-bold leading-tight">Shikkar-শিকড়</h1>
                    <h1 className="text-lg md:text-xl lg:text-xl text-neutral-950 font-bold mb-4">একতা, উন্নয়ন, এবং সেবার প্রতীক</h1>
                    <p className="text-lg text-gray-700 mt-4">
                    Shikkar-শিকড় একটি অরাজনৈতিক, অলাভজনক সামাজিক সংগঠন, যা সমাজের কল্যাণ, মানব উন্নয়ন, এবং সামাজিক ঐক্য প্রতিষ্ঠার লক্ষ্যে কাজ করে। আমাদের মূল লক্ষ্য হলো "একতা এবং উন্নয়নের বন্ধন গড়ে তোলা"। আমরা সুবিধাবঞ্চিত শিশুদের জন্য শিক্ষা, স্বাস্থ্য সচেতনতা, বৃক্ষরোপণ, পরিবেশ সংরক্ষণ, এবং দুর্যোগকালীন সহায়তা প্রদান করে থাকি। Shikkar-শিকড় আপনাকে সমাজ পরিবর্তনে অংশগ্রহণের সুযোগ দেয়, যাতে আপনি মানবতার সেবায় গুরুত্বপূর্ণ ভূমিকা পালন করতে পারেন।
    <br />
    ফোন: ০১৮৬৯২৯৬৩৪৩ <br />
    ইমেইল: shikkarbd@mail.com <br />
    ওয়েবসাইট: shikkarbd.vercel.app</p>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">Facebook</a>
                </div>
            </div>
        </div>
    );
};

export default Sai;
