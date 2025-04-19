import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Input, Alert, Button, Divider } from 'antd';
import { CopyOutlined, FileTextOutlined, InfoCircleOutlined } from '@ant-design/icons';
import ResultCard from './ResultCard';
import { 
  countWords, 
  countCharacters, 
  countCharactersWithoutSpaces,
  countPhrases,
  countTokens
} from '../utils/textAnalysis';

const { Title } = Typography;
const { TextArea } = Input;

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    tokens: 0
  });
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  // Update the analysis whenever the text changes
  useEffect(() => {
    try {
      if (!text.trim()) {
        setResults({
          words: 0,
          characters: 0,
          charactersNoSpaces: 0,
          sentences: 0,
          tokens: 0
        });
        return;
      }

      const wordCount = countWords(text);
      const charCount = countCharacters(text);
      const charNoSpaceCount = countCharactersWithoutSpaces(text);
      const sentenceCount = countPhrases(text);
      const tokenCount = countTokens(text);

      setResults({
        words: wordCount,
        characters: charCount,
        charactersNoSpaces: charNoSpaceCount,
        sentences: sentenceCount,
        tokens: tokenCount
      });
      
      setError(null);
    } catch (err) {
      setError(`Error analyzing text: ${err.message}`);
    }
  }, [text]);

  const handleCopyResults = () => {
    const resultsText = `
      Text Analysis Results:
      - Words: ${results.words}
      - Characters (with spaces): ${results.characters}
      - Characters (without spaces): ${results.charactersNoSpaces}
      - Sentences: ${results.sentences}
      - Tokens: ${results.tokens}
    `;

    navigator.clipboard.writeText(resultsText.trim())
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        setError('Failed to copy results to clipboard');
      });
  };

  return (
    <div className="text-analyzer">
      <Card>
        <div className="text-input-section">
          <div className="text-area-header">
            <Title level={4}>
              <FileTextOutlined /> Enter Your Text
            </Title>
            <span className="character-count">{results.characters} characters</span>
          </div>

          <TextArea
            placeholder="Type or paste your text here..."
            autoSize={{ minRows: 6, maxRows: 12 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            data-testid="text-input"
          />

          {error && (
            <Alert
              message="Error"
              description={error}
              type="error"
              showIcon
              style={{ marginTop: '1rem' }}
              closable
              onClose={() => setError(null)}
            />
          )}
        </div>

        <Divider />

        <div className="results-section">
          <div className="results-header">
            <Title level={4}>Text Analysis Results</Title>
            <Button 
              type="primary" 
              icon={<CopyOutlined />} 
              onClick={handleCopyResults}
              disabled={results.words === 0}
            >
              {copied ? 'Copied!' : 'Copy Results'}
            </Button>
          </div>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <ResultCard 
                title="Word Count" 
                value={results.words} 
                icon="🔤"
                description="Total number of words in text"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ResultCard 
                title="Character Count" 
                value={results.characters} 
                icon="📝"
                description="Total characters (with spaces)"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ResultCard 
                title="Characters (No Spaces)" 
                value={results.charactersNoSpaces} 
                icon="📋"
                description="Characters excluding spaces"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ResultCard 
                title="Sentence Count" 
                value={results.sentences} 
                icon="📜"
                description="Number of sentences/phrases"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <ResultCard 
                title="Token Count" 
                value={results.tokens} 
                icon="🔖"
                description="Total tokens (words, symbols, etc.)"
              />
            </Col>
          </Row>
        </div>
      </Card>

      <div className="info-box">
        <Alert
          message="All calculations are performed client-side"
          description="Your text never leaves your browser. No data is sent to any server."
          type="info"
          showIcon
          icon={<InfoCircleOutlined />}
        />
      </div>
    </div>
  );
};

export default TextAnalyzer;

<style jsx>{`
  .text-analyzer {
    margin: 0 auto;
    max-width: 900px;
  }
  
  .text-input-section {
    margin-bottom: 1rem;
  }
  
  .text-area-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .character-count {
    color: #888;
    font-size: 0.9rem;
  }
  
  .results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .info-box {
    margin-top: 2rem;
  }
  
  @media (max-width: 576px) {
    .results-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .results-header button {
      margin-top: 0.5rem;
    }
  }
`}</style>
