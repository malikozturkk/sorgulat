import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarItem } from '@nextui-org/react';
import React from 'react';
import { DarkModeSwitch } from './darkmodeswitch';
import { useAuth } from '@/context/AuthContext';

export const UserDropdown = () => {
  const { logout } = useAuth();
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar as="button" color="secondary" size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu aria-label="User menu actions" onAction={actionKey => console.log({ actionKey })}>
        <DropdownItem key="profile" className="flex flex-col justify-start w-full items-start">
          <p>Signed in as</p>
          <p>zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger" className="text-danger" onClick={() => logout()}>
          Çıkış Yap
        </DropdownItem>
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
