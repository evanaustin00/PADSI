import  PencilIcon from '/home/felix_sebastian/padsi1/PADSI/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline/PencilIcon.js';
 import PlusIcon from '/home/felix_sebastian/padsi1/PADSI/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline/PlusIcon.js';
 import {TrashIcon, EyeIcon} from '/home/felix_sebastian/padsi1/PADSI/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { deletePelanggan } from '/home/felix_sebastian/padsi1/PADSI/app/lib/actionspelanggan';


export function CreatePelanggan() {
  return (
    <Link
      href="/dashboard/pelanggan/create"
      className="flex h-10 items-center rounded-lg bg-slate-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Pelanggan</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePelanggan({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/pelanggan/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePelanggan({ id }: { id: string }) {
  const deletePelangganWithId = deletePelanggan.bind(null, id);
 
  return (
    <form action={deletePelangganWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}

export function TampilPelanggan({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/pelanggan/${id}/tampil`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}




