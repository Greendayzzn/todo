import React from 'react';
import { Link } from "react-router-dom";
import "./TabBar.less";
import { HomeOutlined,UserOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
function TabBar() {
  return (
    <div className="tabbar">
      <Link className="tabbar-item" to="/home"><Button shape="circle" icon={<HomeOutlined />} /></Link>
      <Link className="tabbar-item" to="/me"><Button shape="circle" icon={<UserOutlined />} /></Link>
      {/* <Link className="tabbar-item" to="/hooks">Hooks</Link>
      <Link className="tabbar-item" to="/test">Test</Link> */}
    </div>
  )
}

export default TabBar;