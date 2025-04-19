import React, { useState, useEffect } from 'react';
import { Typography, Input, Button, Space, Alert, Divider } from 'antd';
import { 
  ClearOutlined, 
  CopyOutlined, 
  FileTextOutlined, 
  HighlightOutlined 
} from '@ant-design/icons';
import { analyzeText } from '../utils/textAnalysis';
import ResultCard from './ResultCard';
import './TextAnalyzer.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState(null);
  const [copied, setCopied] = useState(false);

  // Analyze text whenever it changes
  useEffect(() => {
    const result = analyzeText(text);
    setResults(result);
  }, [text]);

  // Handle text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
    setCopied(false);
  };

  // Clear the text input
  const handleClearText = () => {
    setText('');
    setCopied(false);
  };

  // Copy analysis results to clipboard
  const handleCopyResults = () => {
    if (!results) return;

    const resultText = `
Text Analysis Results:
---------------------
Characters (with spaces): ${results.characterCount}
Characters (no spaces): ${results.characterCountNoSpaces}
Words: ${results.wordCount}
Sentences: ${results.sentenceCount}
Paragraphs: ${results.paragraphCount}
Estimated Tokens: ${results.tokenCount}
Reading Time: ${results.readingTime}
    `.trim();

    navigator.clipboard.writeText(resultText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="text-analyzer">
      <div className="input-section">
        <Title level={4} style={{ color: '#333', marginBottom: '16px' }}>
          <HighlightOutlined style={{ marginRight: '8px', color: '#4285f4' }} />
          Enter or Paste Your Text
        </Title>
        
        <Paragraph type="secondary" style={{ marginBottom: '16px' }}>
          Type or paste any text to instantly analyze word count, character count, sentences, paragraphs and more.
        </Paragraph>
        
        <TextArea
          placeholder="Type or paste your text here to analyze..."
          value={text}
          onChange={handleTextChange}
          autoSize={{ minRows: 8, maxRows: 14 }}
          className="text-input"
        />
        
        <Space className="action-buttons">
          <Button 
            icon={<ClearOutlined />} 
            onClick={handleClearText}
            disabled={!text}
          >
            Clear
          </Button>
          
          <Button 
            type="primary" 
            icon={<CopyOutlined />} 
            onClick={handleCopyResults}
            disabled={!text}
            style={{ backgroundColor: '#4285f4', borderColor: '#4285f4' }}
          >
            Copy Results
          </Button>
        </Space>
        
        {copied && (
          <Alert
            message="Results copied to clipboard!"
            type="success"
            showIcon
            className="copy-alert"
          />
        )}
      </div>
      
      <Divider style={{ margin: '24px 0' }} />
      
      {results && results.characterCount > 0 ? (
        <ResultCard results={results} />
      ) : (
        <div className="empty-results">
          <FileTextOutlined style={{ fontSize: '32px', color: '#d9d9d9', marginBottom: '16px' }} />
          <Text type="secondary" style={{ display: 'block' }}>
            Enter some text to see the analysis results
          </Text>
        </div>
      )}
    </div>
  );
};

export default TextAnalyzer;