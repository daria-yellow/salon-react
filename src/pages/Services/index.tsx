import type React from "react";
import { useEffect, useState } from "react";
import { ServiceTable } from "../../components";
import { useHttpClient } from "../../hooks/http-hook";
import { type Service, type ServiceTitle } from "../../types";

const Services: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [prices, setPrices] = useState<Service[]>([]);
  const [services, setServices] = useState<ServiceTitle[]>([]);

  useEffect(() => {
    const fetchPrices: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest("/prices");
        setPrices(responseData);
      } catch (err) {}
    };
    const fetchServices: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest("/services");
        setServices(responseData);
      } catch (err) {}
    };
    fetchPrices();
    fetchServices();
  }, [sendRequest]);

  return (
    <div className="services">
      {services &&
        prices &&
        services.map((service) => (
          <ServiceTable service={service} prices={prices} key={service.name} />
        ))}
    </div>
  );
};

export default Services;
