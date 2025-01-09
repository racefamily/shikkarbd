import React from 'react';
import FacebookIcon from './assets/Facebook_Logo.png';
import YoutubeIcon from './assets/Youtube.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <p>Shikkar-শিকড়<br/>01869-296343 <br /> shikkarbd@gmail.com </p>
      </aside> 
      <nav className="flex flex-col items-center">
  <h6 className="footer-title text-center">Social link</h6> 
  <div className="flex gap-4 mt-2">
    <a href="https://www.facebook.com/shikkarbd" target="_blank" rel="noopener noreferrer">
      <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
    </a>
    <a href="https://www.youtube.com/channel/UCD9osIORinwZBNjHM8j46dQ" target="_blank" rel="noopener noreferrer">
      <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" />
    </a>
   </div>
</nav>
    </footer>
  );
};

export default Footer;
