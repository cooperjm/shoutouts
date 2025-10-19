
export default function Main({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
      <main className="max-w-7xl w-full px-4 xl:px-0">{children}</main>
   );
}
