// Page.tsx
import Form from '/home/felix_sebastian/padsi1/PADSI/app/ui/transaksipenjualan/edit-form';
import Breadcrumbs from '/home/felix_sebastian/padsi1/PADSI/app/ui/transaksipenjualan/breadcrumbs';
import { fetchtransaksipenjualanById } from '/home/felix_sebastian/padsi1/PADSI/app/lib/data';
import React from 'react';
import type { transaksipenjualanField } from '/home/felix_sebastian/padsi1/PADSI/app/lib/definitions';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  try {
    // Fetch stok by ID
    const transaksi_penjualan = await fetchtransaksipenjualanById(id);

    // Type check for stok
    if (!transaksi_penjualan || !('id_transaksi_penjualan' in transaksi_penjualan)) {
      return <p>transaksi penjualan not found</p>;
    }

    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Transaksi Penjualan', href: '/dashboard/transaksipenjualan' },
            {
              label: 'Edit Transaksi Penjualan',
              href: `/dashboard/transaksipenjualan/${id}/edit`,
              active: true,
            },
          ]}
        />
        <Form transaksi_penjualan={transaksi_penjualan as transaksipenjualanField} /> 
      </main>
    );  
  } catch (error) {
    console.error('Error fetching stok data:', error);
    return <p>Failed to load transaksi penjualan data. Please try again later.</p>;
  }
}
