import React from 'react';
import { Avatar, Button, Layout } from 'antd';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import './TopNavBar.css';

const { Header } = Layout;

const Index = () => {
    return (
        <Header className="top-navbar">
            <div className="profile-section">
                <Avatar size="large" icon={<UserOutlined />} />
                <span className="username">Richard</span>
            </div>
            <Button
                type="primary"
                shape="round"
                icon={<PoweroffOutlined />}
                className="logout-button"
            >
                Logout
            </Button>
        </Header>
    );
};

export default Index;
