import React from 'react';
import { Card, Statistic, Row, Col, Typography } from 'antd';
import {
  FileTextOutlined,
  ClockCircleOutlined,
  SplitCellsOutlined,
  ReadOutlined,
  FontSizeOutlined,
  OrderedListOutlined,
  BarcodeOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const ResultCard = ({ results }) => {
  if (!results) return null;

  return (
    <div className="result-section">
      <Title level={4} style={{ marginTop: '24px', marginBottom: '16px' }}>Analysis Results</Title>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic 
              title="Characters (with spaces)" 
              value={results.characterCount} 
              prefix={<FileTextOutlined />} 
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic 
              title="Characters (no spaces)" 
              value={results.characterCountNoSpaces} 
              prefix={<FontSizeOutlined />} 
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic 
              title="Words" 
              value={results.wordCount} 
              prefix={<SplitCellsOutlined />} 
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic 
              title="Sentences" 
              value={results.sentenceCount} 
              prefix={<OrderedListOutlined />} 
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic 
              title="Paragraphs" 
              value={results.paragraphCount} 
              prefix={<ReadOutlined />} 
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic 
              title="Estimated Tokens" 
              value={results.tokenCount} 
              prefix={<BarcodeOutlined />} 
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic 
              title="Reading Time" 
              value={results.readingTime} 
              prefix={<ClockCircleOutlined />} 
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ResultCard;