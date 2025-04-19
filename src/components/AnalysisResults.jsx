import React from 'react';
import { Row, Col, Statistic, Card, Tooltip } from 'antd';
import { 
  FontSizeOutlined,
  FileTextOutlined,
  ReadOutlined,
  BranchesOutlined,
  FormOutlined,
  AlignLeftOutlined
} from '@ant-design/icons';

const AnalysisResults = ({ analysis }) => {
  const { 
    characters, 
    charactersNoSpaces, 
    words, 
    sentences, 
    paragraphs, 
    tokens 
  } = analysis;

  // Item definitions with tooltips
  const items = [
    {
      title: "Characters",
      value: characters,
      icon: <FontSizeOutlined />,
      tooltip: "Total count of all characters including spaces and punctuation"
    },
    {
      title: "Characters (no spaces)",
      value: charactersNoSpaces,
      icon: <FileTextOutlined />,
      tooltip: "Character count excluding spaces"
    },
    {
      title: "Words",
      value: words,
      icon: <FormOutlined />,
      tooltip: "Groups of characters separated by spaces"
    },
    {
      title: "Sentences",
      value: sentences,
      icon: <AlignLeftOutlined />,
      tooltip: "Text segments ending with period, question mark, or exclamation mark"
    },
    {
      title: "Paragraphs",
      value: paragraphs,
      icon: <ReadOutlined />,
      tooltip: "Text blocks separated by line breaks"
    },
    {
      title: "Tokens",
      value: tokens,
      icon: <BranchesOutlined />,
      tooltip: "Words, numbers, and punctuation treated as separate units"
    }
  ];

  return (
    <Card title="Analysis Results" className="results-card">
      <Row gutter={[16, 16]}>
        {items.map((item, index) => (
          <Col xs={12} sm={8} md={8} lg={8} key={index}>
            <Tooltip title={item.tooltip}>
              <Card>
                <Statistic 
                  title={item.title}
                  value={item.value}
                  prefix={item.icon}
                  valueStyle={{ color: '#1677ff' }}
                />
              </Card>
            </Tooltip>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .results-card {
          margin-top: 20px;
        }
      `}</style>
    </Card>
  );
};

export default AnalysisResults;
