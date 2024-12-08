import Pagination from '/home/felix_sebastian/padsi1/PADSI/app/ui/detailpenjualan/pagination';
import Search from '/home/felix_sebastian/padsi1/PADSI/app/ui/search';
import Table from '/home/felix_sebastian/padsi1/PADSI/app/ui/detailpenjualan/table';
import { ReportFilter } from '/home/felix_sebastian/padsi1/PADSI/app/ui/detailpenjualan/buttons';
import { inter } from '/home/felix_sebastian/padsi1/PADSI/app/ui/fonts';
import { InvoicesTableSkeleton } from '/home/felix_sebastian/padsi1/PADSI/app/ui/skeletons';
import { Suspense } from 'react';
import React from 'react';
import { fetchDetailpenjualanPages, fetchFiltereddetailpenjualan } from '/home/felix_sebastian/padsi1/PADSI/app/lib/data';
import { redirect } from 'next/navigation'; // Import redirect from next/navigation

export default async function Page(props: { 
  searchParams?: Promise<{ query?: string; page?: string }> | { query?: string; page?: string };
  userRole: string; // Menambahkan role pengguna
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // Cek apakah role adalah "pegawai"
  if (props.userRole === 'pegawai') {
    // Redirect pengguna ke halaman dashboard jika role adalah "pegawai"
    redirect('/dashboard'); // Menggunakan redirect dari next/navigation
    return; // Tidak ada yang akan dirender setelah redirect
  }

  // Mendapatkan total halaman untuk pagination
  const totalPages = await fetchDetailpenjualanPages(query);
const total_transaksi = await fetchFiltereddetailpenjualan(query, currentPage);

  // Mendapatkan data transaksi penjualan untuk halaman saat ini
  const detailpenjualan = await fetchFiltereddetailpenjualan(query, currentPage);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${inter.className} text-2xl`}>Laporan Penjualan</h1>
      </div>
      

      {/* Search and Filter Row */}
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 md:mt-8">
        <ReportFilter />
      </div>

      {/* Table */}
      <div className="mt-4 rounded-md p-4">
        <table className="min-w-full">
          <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
            {/* <Table query={query} currentPage={currentPage} /> */}
          </Suspense>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}