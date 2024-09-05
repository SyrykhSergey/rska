import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu } from 'antd'; // eslint-disable-next-line import/no-extraneous-dependencies
import './SideNavBar.css';

const Index = () => {
    return (
        <div className="sidebar">
            <Menu mode="vertical" theme="dark" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="services">Services</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
        </div>
    );
};

export default Index;
