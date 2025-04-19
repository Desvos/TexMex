import React from 'react';
import { Card, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const ResultCard = ({ title, value, icon, description }) => {
  return (
    <Card className="result-card">
      <div className="card-content">
        <div className="card-icon">
          <span>{icon}</span>
        </div>
        <div className="card-data">
          <div className="card-header">
            <h3>{title}</h3>
            <Tooltip title={description}>
              <InfoCircleOutlined className="info-icon" />
            </Tooltip>
          </div>
          <div className="card-value">{value.toLocaleString()}</div>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;

<style jsx>{`
  .result-card {
    height: 100%;
    transition: transform 0.2s;
  }
  
  .result-card:hover {
    transform: translateY(-3px);
  }
  
  .card-content {
    display: flex;
    align-items: center;
  }
  
  .card-icon {
    font-size: 2rem;
    margin-right: 1rem;
    opacity: 0.8;
  }
  
  .card-data {
    flex: 1;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
  }
  
  .info-icon {
    color: #999;
    cursor: help;
  }
  
  .card-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #1890ff;
  }
  
  @media (prefers-color-scheme: dark) {
    .card-header h3 {
      color: #aaa;
    }
    
    .info-icon {
      color: #777;
    }
  }
`}</style>
