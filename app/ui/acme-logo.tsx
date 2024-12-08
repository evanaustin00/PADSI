import { GlobeAltIcon } from '/home/felix_sebastian/padsi1/PADSI/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline/index.js';
import { inter } from '/home/felix_sebastian/padsi1/PADSI/app/ui/fonts';
import React from 'react';
export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
