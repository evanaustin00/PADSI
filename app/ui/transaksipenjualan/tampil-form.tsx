'use client';
import Link from 'next/link';
import React from 'react';
import {transaksipenjualanForm } from '/home/felix_sebastian/padsi1/PADSI/app/lib/definitions';
// type TransaksiField = {
//   nama_pelanggan: string;
//   nomor_hp_pelanggan: string;
//   nama_karyawan: string;
//   total_transaksi?: number; // Ubah ke optional
//   waktu_transaksi: string;
//   detail_pesanan?: { item: string; harga: number }[]; // Ubah ke optional
// };

export default function TampilTransaksiForm({
  transaksipenjualan,
}: {
  transaksipenjualan: transaksipenjualanForm;
}) {
  return (
    <div className="rounded-md bg-white p-4 md:p-6">
      <h2 className="text-lg font-semibold mb-6">Detail Transaksi</h2>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Nama Pelanggan</label>
        <input
          value={transaksipenjualan.nama_pelanggan || ''}
          readOnly
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Nomor HP Pelanggan</label>
        <input
          value={transaksipenjualan.no_hp || ''}
          readOnly
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Nama produk</label>
        <input
          value={transaksipenjualan.nama_produk || ''}
          readOnly
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white"
        />
      </div>

      {/* <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Nama Karyawan</label>
        <input
          value={transaksipenjualan.nama_karyawan || ''}
          readOnly
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white"
        />
      </div> */}


      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Total transaksi penjualan</label>
        <input
          value={
            transaksipenjualan.total_transaksi !== undefined
              ? `Rp. ${transaksipenjualan.total_transaksi.toLocaleString('id-ID')}`
              : ''
          }
          readOnly
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Waktu Transaksi</label>
        <input
          value={transaksipenjualan.tanggal_transaksi || ''}
          readOnly
          className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white"
        />
      </div>

      {/* <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">Detail Pesanan</label>
        <div className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white">
          {transaksi.detail_pesanan && transaksi.detail_pesanan.length > 0 ? (
            transaksi.detail_pesanan.map((pesanan, index) => (
              <div key={index} className="flex justify-between">
                <span>{pesanan.item}</span>
                <span className="text-right">Rp. {pesanan.harga.toLocaleString('id-ID')}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Tidak ada detail pesanan.</p>
          )}
        </div>
      </div> */}

 {/* <div className="mb-4">
   <label className="mb-2 block text-sm font-medium">Detail Pesanan</label>
   <div className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 bg-white"> */}
    {/* {transaksi.detail_pesanan && transaksi.detail_pesanan.length > 0 ? (
//       transaksi.detail_pesanan.map((item, index) => (
//         <div key={index} className="flex justify-between">
//           <span>{item.nama_produk || 'Nama Produk Tidak Tersedia'}</span>
//           <span className="text-right">
//             Rp. {item.harga_produk ? item.harga_produk.toLocaleString('id-ID') : 'Harga Tidak Tersedia'}
//           </span>
//         </div>
//       ))
//     ) : ( */}
      {/* <p className="text-gray-600">nasi orak arik special - Rp34355</p> */}
    {/* )} */}
   {/* </div>
 </div> */}



 <div className="mt-6 flex justify-end">
         <Link
          href="/dashboard/transaksipenjualan"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

{/* <div className="rounded-md bg-white p-6 shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Detail Stok</h2>
          <div className="mb-2">
            <span className="font-medium text-gray-700">Id transaksi penjualan: </span>
            <span>{transaksipenjualan.id_transaksi_penjualan}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700">Nama pelanggan: </span>
            <span>{transaksipenjualan.nama_pelanggan}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700">Total transaksi: </span>
            <span>{transaksipenjualan.total_transaksi}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700">Tanggal transaksi: </span>
            <span>{transaksipenjualan.tanggal_transaksi}</span>
          </div>
        </div> */}