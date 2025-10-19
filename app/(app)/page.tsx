import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { SubmitButton } from '@/components/shared/SubmitButton';

// (Optional) small validator to keep things tidy
function sanitize(input: unknown, max = 500) {
  const value = String(input ?? '').trim();
  if (!value) throw new Error('Required field missing');
  if (value.length > max) throw new Error(`Max length ${max} exceeded`);
  return value;
}

export default async function Page() {
  async function createShoutout(formData: FormData) {
    'use server';

    try {
      const name = sanitize(formData.get('name'), 100);
      const message = sanitize(formData.get('message'), 1000);

      await prisma.shoutout.create({
        data: { name, message }, // createdAt defaults in schema
      });

      // Revalidate any path where shoutouts render
      revalidatePath('/');
    } catch (err) {
      // You can surface a toast or return a formState in a more advanced setup
      console.error('createShoutout failed', err);
      // Optionally, rethrow to let Next.js show a route error boundary
      // throw err
    }
  }

  // Fetch existing shoutouts to render on first load (Server Component)
  const shoutouts = await prisma.shoutout.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  return (
    <main>
      <h1>Send a Shoutout</h1>

      <form action={createShoutout}>
        <label>
          Name
          <input name="name" required maxLength={100} />
        </label>

        <label>
          Message
          <textarea name="message" required maxLength={1000} />
        </label>

        {/* <button type="submit">Send</button> */}
        <SubmitButton>Send</SubmitButton>
      </form>

      <section>
        <h2>Recent Shoutouts</h2>
        <ul>
          {shoutouts.map((s) => (
            <li key={s.id}>
              <strong>{s.name}:</strong> {s.message}{' '}
              <small>({s.createdAt.toLocaleString()})</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
