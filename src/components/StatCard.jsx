import React from 'react';
import { Card, Statistic } from 'antd';

/**
 * Component per una card singola di statistica
 * 
 * @param {object} props - Proprietà del componente
 * @param {string} props.title - Titolo della statistica
 * @param {React.ReactNode} props.icon - Icona da mostrare
 * @param {string|number} props.value - Valore della statistica
 * @param {string} props.color - Colore principale
 * @returns {React.ReactElement} Componente Card
 */
const StatCard = ({ title, icon, value, color }) => {
  return (
    <Card hoverable>
      <Statistic 
        title={title} 
        value={value} 
        prefix={React.cloneElement(icon, { style: { color } })}
        valueStyle={{ color }}
      />
    </Card>
  );
};

export default StatCard;