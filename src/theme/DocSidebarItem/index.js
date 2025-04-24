import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import * as MdIcons from 'react-icons/md';

export default function DocSidebarItemWrapper(props) {
  const { item } = props;
  const Icon = item.customProps && item.customProps.icon ? MdIcons[item.customProps.icon] : null;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {Icon && <Icon style={{ marginRight: 8 }} />}
      <DocSidebarItem {...props} />
    </div>
  );
}