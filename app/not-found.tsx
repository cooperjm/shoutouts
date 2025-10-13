import Link from 'next/link';
import Header from '@/components/shared/header'; // Import your Header component
import "@/app/globals.css"

export default function NotFound() {
  return (
    <>
      <Header /> {/* Place your header here */}
      <div className="flex flex-col justify-center p-10 text-center h-[90svh]">
        <h2>404 - Page Not Found</h2>
        <p>Could not find the requested resource.</p>
        <Link href="/">Return Home</Link>
      </div>
      {/* You can also add a Footer component here if needed */}
    </>
  );
}