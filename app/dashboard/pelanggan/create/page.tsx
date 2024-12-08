import Form from '/home/felix_sebastian/padsi1/PADSI/app/ui/pelanggan/create-form';
import Breadcrumbs from '/home/felix_sebastian/padsi1/PADSI/app/ui/pelanggan/breadcrumbs';
import { fetchPelanggan } from '/home/felix_sebastian/padsi1/PADSI/app/lib/data';
import React from 'react';
export default async function Page() {
  const pelanggan = await fetchPelanggan();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pelanggan', href: '/dashboard/pelanggan' },
          {
            label: 'Create Pelanggan',
            href: '/dashboard/pelanggan/create',
            active: true,
          },
        ]}
      />
      {/* Update to stokList prop */}
      <Form pelanggan={pelanggan} />
    </main>
  );
}
