import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex justify-between absolute bottom-0 p-4 w-full bg-gray-700 text-white">
      {/* 2 columns */}
      <div className="grid grid-cols-3 gap-2 text-sm md:gap-8 md:text-lg">
        <ul className="border-r p-1 md:p-4">
          <li>About</li>
          <li>Career</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="border-r p-1 md:p-4">
          <li>Contact Us</li>
          <li>Build</li>
          <li>File Structure</li>
        </ul>
        <ul className="border-r p-1 md:p-4">
          <li>Prefix</li>
          <li>Others</li>
          <li>Folders</li>
        </ul>
      </div>

      {/* socials */}
      <div className="flex flex-col gap-2 md:gap-3">
        <a href="/twitter">
          <FontAwesomeIcon icon={faTwitter} size={"2x"} />
        </a>
        <a href="https://github.com/belliott15">
          <FontAwesomeIcon icon={faGithub} size={"2x"} />
        </a>
        <a href="/instagram">
          <FontAwesomeIcon icon={faInstagramSquare} size={"2x"} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
