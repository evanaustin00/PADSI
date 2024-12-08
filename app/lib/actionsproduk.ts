'use server';
 
import { signIn } from '/home/felix_sebastian/padsi1/PADSI/auth';
import { AuthError } from 'next-auth';
import { z } from '/home/felix_sebastian/padsi1/PADSI/node_modules/.pnpm/zod@3.23.8/node_modules/zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  id_produk: z.string(),
  nama_produk: z.coerce.string(),
  harga_produk: z.coerce.number(),
});

const CreateProduk = FormSchema.omit({ id: true});

export async function createProduk(formData: FormData) {
  const { id_produk, nama_produk, harga_produk } = CreateProduk.parse({
  
    id_produk: formData.get('id_produk'),
    nama_produk: formData.get('nama_produk'),
    harga_produk: formData.get('harga_produk')  
    
  });
  const amountInCents = harga_produk * 100;
  const date = new Date().toISOString().split('T')[0];
  await sql`
  INSERT INTO produk (nama_produk, harga_produk)
  VALUES (${nama_produk}, ${harga_produk})
`;
;
  // Test it out:
  revalidatePath('/dashboard/produk');
  redirect('/dashboard/produk');
}


export async function updateProduk(id: string, formData: FormData) {
  const { nama_produk, harga_produk } = CreateProduk.parse({
    id_produk: formData.get('id_produk'),
    nama_produk: formData.get('nama_produk'),
    harga_produk: formData.get('harga_produk'),
  });

  const date = new Date().toISOString().split('T')[0];
  await sql`
    UPDATE produk 
    SET nama_produk = ${nama_produk}, harga_produk = ${harga_produk}
    WHERE id_produk = ${id}
  `;

  revalidatePath('/dashboard/produk');
  redirect('/dashboard/produk');
}


export async function deleteProduk(id: string) {
  await sql`DELETE FROM detail_penjualan WHERE id_produk = ${id}`;
  await sql`DELETE FROM produk WHERE id_produk = ${id}`;
  revalidatePath('/dashboard/produk');
}

export async function tampilProduk(id: string) {
  await sql`SELECT * FROM produk WHERE id_produk = ${id}`;
  revalidatePath('/dashboard/produk');
}
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}