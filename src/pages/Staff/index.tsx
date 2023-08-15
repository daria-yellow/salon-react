import type React from 'react';
import { useEffect, useState } from 'react';
import { InfoCard } from '../../components';
import { useHttpClient } from '../../hooks/http-hook';
import { type InfoCardType } from '../../types';

const Staff: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [employees, setEmployees] = useState<InfoCardType[]>([]);

  useEffect(() => {
    const fetchEmployees: () => Promise<void> = async () => {
      try {
        const responseData = await sendRequest('/staff/employees');
        setEmployees(responseData);
      } catch (err) {}
    };
    fetchEmployees();
  }, [sendRequest]);

  return (
    <div className="staff">
      <div className="staff__cards">
        {employees.map((person) => (
          <InfoCard info={person} key={person.name} />
        ))}
      </div>
    </div>
  );
};

export default Staff;
