import React from 'react';
import { Card, Statistic, Row, Col, Typography } from 'antd';
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

const { Title } = Typography;

const ResultCard = ({ results }) => {
  if (!results) return null;

  // Custom colors for different card types
  const cardColors = {
    characters: '#4285f4',
    charactersNoSpace: '#34a853',
    words: '#ea4335',
    sentences: '#fbbc05',
    paragraphs: '#673ab7',
    tokens: '#ff6d00',
    readingTime: '#2196f3'
  };

  return (
    <div className="result-section">
      <Title level={4} style={{ color: '#333', marginTop: '8px', marginBottom: '24px' }}>
        <BarChartOutlined style={{ marginRight: '8px', color: '#4285f4' }} />
        Analysis Results
      </Title>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Statistic 
              title="Characters (with spaces)" 
              value={results.characterCount} 
              prefix={<FileTextOutlined style={{ color: cardColors.characters }} />} 
              valueStyle={{ color: cardColors.characters }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Statistic 
              title="Characters (no spaces)" 
              value={results.characterCountNoSpaces} 
              prefix={<FontSizeOutlined style={{ color: cardColors.charactersNoSpace }} />} 
              valueStyle={{ color: cardColors.charactersNoSpace }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Statistic 
              title="Words" 
              value={results.wordCount} 
              prefix={<SplitCellsOutlined style={{ color: cardColors.words }} />} 
              valueStyle={{ color: cardColors.words }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Statistic 
              title="Sentences" 
              value={results.sentenceCount} 
              prefix={<OrderedListOutlined style={{ color: cardColors.sentences }} />} 
              valueStyle={{ color: cardColors.sentences }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Statistic 
              title="Paragraphs" 
              value={results.paragraphCount} 
              prefix={<ReadOutlined style={{ color: cardColors.paragraphs }} />} 
              valueStyle={{ color: cardColors.paragraphs }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Statistic 
              title="Estimated Tokens" 
              value={results.tokenCount} 
              prefix={<BarcodeOutlined style={{ color: cardColors.tokens }} />} 
              valueStyle={{ color: cardColors.tokens }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Statistic 
              title="Reading Time" 
              value={results.readingTime} 
              prefix={<ClockCircleOutlined style={{ color: cardColors.readingTime }} />} 
              valueStyle={{ color: cardColors.readingTime }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ResultCard;