import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import GameController from './controllers/GameController';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Room from './pages/Room';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>

      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1"><Link to='/2048/'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/2048/2048'>2048</Link></Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <div className="App">
              <Switch>
                <Route exact path='/2048/room/:id' component={Room} />
                <Route exact path='/2048/' component={Main} />
                <Route exact path='/2048/2048' component={GameController} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>  Видеочат. Создатель Григорян Андраник. ВГТУ/ИД-181</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
