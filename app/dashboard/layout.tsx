import SideNav from '/home/felix_sebastian/padsi1/PADSI/app/ui/dashboard/sidenav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 bg-gradient-to-r from-green-100 to-green-300 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}