import type React from 'react';
import { useCallback, useState } from 'react';
import { Arrow } from '../../images/Arrow';
import { type Service, type ServiceTitle, type SubService } from '../../types';

export interface ServiceTableProps {
  service: ServiceTitle;
  prices: Service[];
}

export const ServiceTable: React.FC<ServiceTableProps> = ({
  service,
  prices,
}: ServiceTableProps) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const renderTable = useCallback(
    (services: Service[], subservice?: SubService) => {
      return (
        <div className="service-table__content">
          <div className="text__t1">{subservice?.name}</div>
          <div className="service-table__content-table">
            {services.map((item) => (
              <div
                className="service-table__content-table-item text__t3"
                key={services.indexOf(item).toString() + item.name}
              >
                <div>{item.name}</div>
                <div>{item.time} хв.</div>
                <div>{item.price} грн.</div>
              </div>
            ))}
          </div>
          {subservice?.addInfo && (
            <div className="service-table__content-add-info text__t4">
              {subservice.addInfo}
            </div>
          )}
          <div className="service-table__content-line"></div>
        </div>
      );
    },
    [],
  );

  const renderSubService = useCallback(
    (subservice: SubService) => {
      const currentSubServices = prices.filter(
        (item) =>
          item.subservice === subservice.name && item.service === service.name,
      );

      return renderTable(currentSubServices, subservice);
    },
    [prices, renderTable, service],
  );

  const renderService = useCallback(() => {
    const currentServices = prices.filter(
      (item) => item.service === service.name,
    );

    return renderTable(currentServices);
  }, [prices, renderTable, service]);

  return (
    <div className="service-table">
      <div
        className="service-table__title"
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
      >
        <h2>{service.name}</h2>
        <div className={`${menuOpened ? 'service-table__title-opened' : ''}`}>
          <Arrow width="20" heigth="20" />
        </div>
      </div>
      {menuOpened && (
        <div className="service-table__subservices">
          {service.subservices
            ? service.subservices.map((subservice) => (
                <div key={subservice.name}>{renderSubService(subservice)}</div>
            ))
            : renderService()}
        </div>
      )}
    </div>
  );
};
