import Form from '/home/felix_sebastian/padsi1/PADSI/app/ui/detailpembelian/create-form.tsx';
import Breadcrumbs from '/home/felix_sebastian/padsi1/PADSI/app/ui/detailpembelian/breadcrumbs.tsx';
import { fetchDetail } from '@/app/lib/data';
 import React from 'react';
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}