import { type ReactNode } from "react";
import type React from "react";
import { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { textInfo } from "../../info/TextInfo";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useWindowWidth } from "@react-hook/window-size";
import { FormattedMessage } from "react-intl";

const Contacts: React.FC = () => {
  const windowWidth = useWindowWidth();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const center = useMemo(() => ({ lat: 50.376485, lng: 30.38021 }), []);

  const renderInfoBlock = useCallback(
    (title: ReactNode, content: ReactNode) => {
      return (
        <div className="contacts__info-block">
          {windowWidth < 568 ? <h2>{title}:</h2> : <h3>{title}:</h3>}
          <div className="text__t2">{content}</div>
        </div>
      );
    },
    [windowWidth]
  );

  return (
    <div className="contacts">
      <div className="contacts__map">
        {isLoaded ? (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={18}
          >
            <MarkerF position={center} />
          </GoogleMap>
        ) : (
          <div>Loading map...</div>
        )}
      </div>
      <div className="contacts__info">
        {renderInfoBlock(
          <FormattedMessage id="page.contacts.address.title" />,
          <FormattedMessage id="page.contacts.address.value" />
        )}
        {renderInfoBlock(
          <FormattedMessage id="page.contacts.phones.title" />,
          <FormattedMessage id="page.contacts.phones.value" />
        )}
        <div className="contacts__info-socials">
          <h3>
            <Link to={textInfo["footer.facebook"]} target="_blank">
              <FormattedMessage id="page.contacts.facebook" />
            </Link>
          </h3>
          <h3>
            <Link to={textInfo["footer.instagram"]} target="_blank">
              <FormattedMessage id="page.contacts.instagram" />
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
