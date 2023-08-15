import type React from 'react';
import { type InfoCardType } from '../../types';
import { useWindowWidth } from '@react-hook/window-size';

export interface InfoCardProps {
  info: InfoCardType;
}

export const InfoCard: React.FC<InfoCardProps> = ({ info }: InfoCardProps) => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`info-card ${
        info.type === 'Manager' ? 'info-card-manager' : ''
      }`}
    >
      <div className="info-card__general">
        <img src={info.photo} alt={info.name}></img>
        <div className="info-card__general-description">
          {windowWidth < 568 ? <h2>{info.name}</h2> : <h3>{info.name}</h3>}
          <div className="info-card__general-description__skills">
            <div className="text__t1">
              {info.type === 'Manager' ? info.postition : info.age}
            </div>
            <div className="text__t2">
              {info.type === 'Manager' ? info.age : info.postition}
            </div>
          </div>
        </div>
      </div>
      <div className="info-card__content text__t2">{info.content}</div>
    </div>
  );
};
