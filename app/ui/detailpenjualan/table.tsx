
import { formatDateToLocal, formatCurrency } from '/home/felix_sebastian/padsi1/PADSI/app/lib/utils';
import { fetchFilteredTransaksiPenjualan } from '/home/felix_sebastian/padsi1/PADSI/app/lib/data';
import React from 'react';

export default async function Transaksi_penjualanTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const transaksipenjualan = await fetchFilteredTransaksiPenjualan(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-green-100 p-4 shadow-md">
          {/* Tampilan Mobile */}
          <div className="md:hidden">
            {transaksipenjualan?.map((tp) => (
              <div
                key={tp.id_transaksi_penjualan}
                className="mb-4 w-full rounded-lg bg-white p-4 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-lg font-medium text-green-800">{tp.nama_pelanggan}</p>
                    <p className="text-sm text-gray-500">{tp.no_hp}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-bold text-green-700">
                      {(tp.total_transaksi)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatDateToLocal(tp.tanggal_transaksi)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                  
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tampilan Desktop */}
          <table className="hidden min-w-full md:table bg-green-50 rounded-lg">
            <thead className="bg-green-600 text-white text-sm font-medium rounded-t-lg">
              <tr>
                <th scope="col" className="px-4 py-3 text-left">Nama Pelanggan</th>
                <th scope="col" className="px-4 py-3 text-left">Nomor HP</th>
                <th scope="col" className="px-4 py-3 text-left">Total Transaksi</th>
                <th scope="col" className="px-4 py-3 text-left">Tanggal</th>
                <th scope="col" className="px-4 py-3 text-right"></th>
              </tr>
            </thead>
            <tbody className="text-green-900">
              {transaksipenjualan?.map((tp, idx) => (
                <tr
                  key={tp.id_transaksi_penjualan}
                  className={`border-b ${idx % 2 === 0 ? 'bg-green-50' : 'bg-white'}`}
                >
                  <td className="px-4 py-3">{tp.nama_pelanggan}</td>
                  <td className="px-4 py-3">{tp.no_hp}</td>
                  <td className="px-4 py-3">{(tp.total_transaksi)}</td>
                  <td className="px-4 py-3">{formatDateToLocal(tp.tanggal_transaksi)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
