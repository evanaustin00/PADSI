import Pagination from '/home/felix_sebastian/padsi1/PADSI/app/ui/pelanggan/pagination';
import Search from '/home/felix_sebastian/padsi1/PADSI/app/ui/search';
import Table from '/home/felix_sebastian/padsi1/PADSI/app/ui/pelanggan/table';
import { CreatePelanggan } from '/home/felix_sebastian/padsi1/PADSI/app/ui/pelanggan/buttons';
import { inter } from '/home/felix_sebastian/padsi1/PADSI/app/ui/fonts';
import { InvoicesTableSkeleton } from '/home/felix_sebastian/padsi1/PADSI/app/ui/skeletons';
import { Suspense } from 'react';
import React from 'react';
import { fetchpelangganPages } from '/home/felix_sebastian/padsi1/PADSI/app/lib/data';

 
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchpelangganPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${inter.className} text-2xl`}>Pelanggan</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Pelanggan..." />
        <CreatePelanggan />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}