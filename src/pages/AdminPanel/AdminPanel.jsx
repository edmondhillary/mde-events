import './AdminPanel.css';
import { Layout, Space } from 'antd';

const AdminPanel = () => {
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    height: '100vh',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  
  const { Header, Sider, Content } = Layout;
  return (
    <>
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Sider style={siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            Header
          </Header>
          <Content style={contentStyle}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Space>
    </>
  );
}

export default AdminPanel;
