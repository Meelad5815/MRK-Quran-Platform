import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="text-sm">Signed in as: {session?.user?.email ?? 'Guest'}</p>
    </section>
  );
}
