import type React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import FacebookLogo from '../../images/socials/Facebook.svg';
import InstagramLogo from '../../images/socials/Instagram.svg';
import TwitterLogo from '../../images/socials/Twitter.svg';
import YouTubeLogo from '../../images/socials/YouTube.svg';
import { textInfo } from '../../info/TextInfo';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="text-footer">
        <FormattedMessage id="footer.privacy" />
      </div>
      <div className="footer-icons">
        <Link to={textInfo['footer.facebook']} target="_blank">
          <img src={FacebookLogo} alt="Facebook"></img>
        </Link>
        <Link to={textInfo['footer.instagram']} target="_blank">
          <img src={InstagramLogo} alt="Instagram"></img>
        </Link>
        <Link to={textInfo['footer.instagram']} target="_blank">
          <img src={TwitterLogo} alt="Twitter"></img>
        </Link>
        <Link to={textInfo['footer.instagram']} target="_blank">
          <img src={YouTubeLogo} alt="YouTube"></img>
        </Link>
      </div>
    </div>
  );
};
