import React from 'react';
import { Row, Col, Typography } from 'antd';
import {
  FileTextOutlined,
  ClockCircleOutlined,
  SplitCellsOutlined,
  ReadOutlined,
  FontSizeOutlined,
  OrderedListOutlined,
  BarcodeOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import StatCard from './StatCard';

const { Title } = Typography;

const ResultCard = ({ results }) => {
  if (!results) return null;

  // Definizione delle card di statistica
  const statsConfig = [
    {
      id: 'characters',
      title: 'Characters (with spaces)',
      value: results.characterCount,
      icon: <FileTextOutlined />,
      color: '#4285f4'
    },
    {
      id: 'charactersNoSpace',
      title: 'Characters (no spaces)',
      value: results.characterCountNoSpaces,
      icon: <FontSizeOutlined />,
      color: '#34a853'
    },
    {
      id: 'words',
      title: 'Words',
      value: results.wordCount,
      icon: <SplitCellsOutlined />,
      color: '#ea4335'
    },
    {
      id: 'sentences',
      title: 'Sentences',
      value: results.sentenceCount,
      icon: <OrderedListOutlined />,
      color: '#fbbc05'
    },
    {
      id: 'paragraphs',
      title: 'Paragraphs',
      value: results.paragraphCount,
      icon: <ReadOutlined />,
      color: '#673ab7'
    },
    {
      id: 'tokens',
      title: 'Estimated Tokens',
      value: results.tokenCount,
      icon: <BarcodeOutlined />,
      color: '#ff6d00'
    },
    {
      id: 'readingTime',
      title: 'Reading Time',
      value: results.readingTime,
      icon: <ClockCircleOutlined />,
      color: '#2196f3'
    }
  ];

  return (
    <div className="result-section">
      <Title level={4} style={{ color: '#333', marginTop: '8px', marginBottom: '24px' }}>
        <BarChartOutlined style={{ marginRight: '8px', color: '#4285f4' }} />
        Analysis Results
      </Title>
      
      <Row gutter={[24, 24]}>
        {statsConfig.map(stat => (
          <Col key={stat.id} xs={24} sm={12} md={8} lg={6}>
            <StatCard 
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ResultCard;