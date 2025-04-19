import React, { useState, useEffect } from 'react';
import { Input, Typography, Card, Row, Col, Button, Space, Alert } from 'antd';
import { CopyOutlined, ClearOutlined, InfoCircleOutlined } from '@ant-design/icons';
import AnalysisResults from './AnalysisResults';
import { analyzeText } from '../utils/textAnalysis';

const { TextArea } = Input;
const { Title } = Typography;

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    tokens: 0,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAnalysis(analyzeText(text));
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClearText = () => {
    setText('');
  };

  const copyResults = () => {
    // Format results as text
    const resultsText = `Text Analysis Results:
Characters (with spaces): ${analysis.characters}
Characters (without spaces): ${analysis.charactersNoSpaces}
Words: ${analysis.words}
Sentences: ${analysis.sentences}
Paragraphs: ${analysis.paragraphs}
Tokens: ${analysis.tokens}`;

    navigator.clipboard.writeText(resultsText).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div className="text-analyzer">
      <Card>
        <Title level={4}>Enter your text below:</Title>
        <TextArea
          value={text}
          onChange={handleTextChange}
          placeholder="Type or paste your text here..."
          autoSize={{ minRows: 8, maxRows: 15 }}
          style={{ marginBottom: '20px', fontSize: '16px' }}
        />
        
        <Space style={{ marginBottom: '20px' }}>
          <Button 
            type="primary" 
            icon={<ClearOutlined />} 
            onClick={handleClearText}
          >
            Clear Text
          </Button>
          <Button 
            type={copied ? "success" : "default"} 
            icon={<CopyOutlined />} 
            onClick={copyResults}
          >
            {copied ? "Copied!" : "Copy Results"}
          </Button>
        </Space>

        {text ? (
          <AnalysisResults analysis={analysis} />
        ) : (
          <Alert
            message="No text to analyze"
            description="Enter some text to see real-time analysis results."
            type="info"
            showIcon
            icon={<InfoCircleOutlined />}
          />
        )}
      </Card>

      <style jsx>{`
        .text-analyzer {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default TextAnalyzer;
