import React, { FC } from 'react';
import { Sidebar as SidebarUI } from '@stn-ui/sidebar';
import { SidebarUserMenu } from '@/modules/sidebar/components/sidebar-user-menu';
import { SidebarNavigation } from './sidebar-navigation';

export const Sidebar: FC = () => (
  <SidebarUI footer={<SidebarUserMenu />}>
    <SidebarNavigation />
  </SidebarUI>
);
