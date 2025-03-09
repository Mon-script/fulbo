import React, { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const busqueda= () => {
  const [searchText, setSearchText] = useState('');
  const onSearch = (value: string) => console.log('Search input:', value);

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Space direction="vertical">
      <Input
        placeholder="input search text"
        allowClear
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
    </Space>
  );
};

export default busqueda;