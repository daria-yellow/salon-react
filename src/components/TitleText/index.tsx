import type React from 'react';

export interface TitileTextProps {
  text: React.ReactNode;
}

export const TitleText: React.FC<TitileTextProps> = ({
  text,
}: TitileTextProps) => {
  return <h2 className="title-text">{text}</h2>;
};
