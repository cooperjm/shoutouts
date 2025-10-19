import { prisma } from '@/lib/db';

export default async function RecentShoutouts() {
  const shoutouts = await prisma.shoutout.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  return (
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
  );
}
