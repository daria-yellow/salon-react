import type React from 'react';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { InfoCard, TitleText } from '../../components';
import { useHttpClient } from '../../hooks/http-hook';
import { type InfoCardType } from '../../types';

const AboutUs: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [managers, setManagers] = useState<InfoCardType[]>([]);

  useEffect(() => {
    const fetchManagers: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest('/staff/managers');
        setManagers(responseData);
      } catch (err) {}
    };
    fetchManagers();
  }, [sendRequest]);

  return (
    <div className="about">
      <div className="about__text">
        <div className="text__t2">
          <FormattedMessage id="page.about.text.first" />
        </div>
        <div className="text__t2">
          <FormattedMessage id="page.about.text.second" />
        </div>
      </div>
      <div className="about__managers">
        <TitleText text={<FormattedMessage id="page.about.title" />} />
        <div className="about__cards">
          {managers.map((person) => (
            <InfoCard info={person} key={person.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
