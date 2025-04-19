import React from 'react';
import { Layout, Typography, Card } from 'antd';
import TextAnalyzer from './components/TextAnalyzer';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="layout">
      <Header className="header">
        <Title level={3} style={{ color: 'white', margin: '0' }}>
        TexMex
        </Title>
      </Header>
      <Content className="content">
        <Card className="main-card">
          <TextAnalyzer />
        </Card>
      </Content>
      <Footer className="footer">
        TexMex ©{new Date().getFullYear()} Created with React and Ant Design
      </Footer>
    </Layout>
  );
}

export default App;