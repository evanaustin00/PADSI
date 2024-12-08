import Form from '/home/felix_sebastian/padsi1/PADSI/app/ui/pegawai/create-form';
import Breadcrumbs from '/home/felix_sebastian/padsi1/PADSI/app/ui/pegawai/breadcrumbs';
import { fetchPegawai } from '/home/felix_sebastian/padsi1/PADSI/app/lib/data';
import React from 'react';
export default async function Page() {
  const pegawai = await fetchPegawai();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pegawai', href: '/dashboard/pegawai' },
          {
            label: 'Create Pegawai',
            href: '/dashboard/pegawai/create',
            active: true,
          },
        ]}
      />
      {/* Update to stokList prop */}
      <Form pegawai={pegawai} />
    </main>
  );
}
