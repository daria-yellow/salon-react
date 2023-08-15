import type React from 'react';
import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import HairDyeLogo from '../../images/services/HairDye.svg';
import MakeUpLogo from '../../images/services/MakeUp.svg';
import ManicureLogo from '../../images/services/Manicure.svg';
import MassageLogo from '../../images/services/Massage.svg';
import ScissorsLogo from '../../images/services/Scissors.svg';
import ServicesBackground from '../../images/services/ServicesBackground.jpg';

export const ServicesDescription: React.FC = () => {
  const renderLogo = useCallback((logo: string) => {
    return (
      <div
        className="services-description__black-circle"
        style={{
          backgroundImage: `url(${ServicesBackground})`,
        }}
      >
        <div className="services-description__red-circle">
          <img src={logo} alt={`${logo.split('.')[0].split('/')[3]}`}></img>
        </div>
      </div>
    );
  }, []);

  return (
    <div className="services-description">
      <div className="services-description__icons">
        {renderLogo(ManicureLogo)}
        {renderLogo(ScissorsLogo)}
        {renderLogo(HairDyeLogo)}
        {renderLogo(MakeUpLogo)}
        {renderLogo(MassageLogo)}
      </div>
      <div className="text__t2 services-description__text">
        <FormattedMessage id="page.landing.services.description" />
        <ul>
          <li>
            <FormattedMessage id="page.landing.services.description.haircut" />
          </li>
          <li>
            <FormattedMessage id="page.landing.services.description.cosmetology" />
          </li>
          <li>
            <FormattedMessage id="page.landing.services.description.manicure" />
          </li>
          <li>
            <FormattedMessage id="page.landing.services.description.makeup" />
          </li>
          <li>
            <FormattedMessage id="page.landing.services.description.massage" />
          </li>
        </ul>
      </div>
    </div>
  );
};
