import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import RecentShoutouts from './_components/RecentShoutouts';
import { ShoutoutForm } from './_components/ShoutoutForm';
import Main from '@/components/shared/main';

function sanitize(input: unknown, max = 500) {
  const value = String(input ?? '').trim();
  if (!value) throw new Error('Required field missing');
  if (value.length > max) throw new Error(`Max length ${max} exceeded`);
  return value;
}

export default async function Page() {
  async function createShoutout(formData: FormData) {
    'use server';
    const name = sanitize(formData.get('name'), 100);
    const message = sanitize(formData.get('message'), 1000);
    await prisma.shoutout.create({ data: { name, message } });
    revalidatePath('/');
  }

  return (
    <Main>
      <h1>Send a Shoutout</h1>
      <ShoutoutForm action={createShoutout} />
      <RecentShoutouts />
    </Main>
  );
}
