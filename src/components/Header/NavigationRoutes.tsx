import { FormattedMessage } from 'react-intl';

interface navigationRoutesType {
  name: React.ReactNode;
  path: string;
}

export const navigationRoutes: navigationRoutesType[] = [
  { name: <FormattedMessage id="navigation.about.us" />, path: '/about' },
  {
    name: <FormattedMessage id="navigation.services" />,
    path: '/services',
  },
  {
    name: <FormattedMessage id="navigation.staff" />,
    path: '/staff',
  },
  { name: <FormattedMessage id="navigation.contacts" />, path: '/contacts' },
  { name: <FormattedMessage id="navigation.gallery" />, path: '/gallery' },
];
