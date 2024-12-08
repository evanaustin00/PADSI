// Page.tsx
import Form from '/home/felix_sebastian/padsi1/PADSI/app/ui/transaksipembelian/edit-form';
import Breadcrumbs from '/home/felix_sebastian/padsi1/PADSI/app/ui/transaksipembelian/breadcrumbs';
import { fetchtransaksipembelianById } from '/home/felix_sebastian/padsi1/PADSI/app/lib/data';
import React from 'react';
import type { transaksipembelianField } from '/home/felix_sebastian/padsi1/PADSI/app/lib/definitions';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  try {
    // Fetch stok by ID
    const transaksi_pembelian = await fetchtransaksipembelianById(id);

    // Type check for stok
    if (!transaksi_pembelian || !('id_transaksi_pembelian' in transaksi_pembelian )) {
      return <p>transaksi pembelian not found</p>;
    }

    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Transaksi Pembelian', href: '/dashboard/transaksipembelian' },
            {
              label: 'Edit Transaksi Pembelian',
              href: `/dashboard/transaksipembelian/${id}/edit`,
              active: true,
            },
          ]}
        />
        <Form transaksi_pembelian={transaksi_pembelian as transaksipembelianField} /> {/* Only pass stok */}
      </main>
    );  
  } catch (error) {
    console.error('Error fetching stok data:', error);
    return <p>Failed to load transaksi pembelian data. Please try again later.</p>;
  }
}
