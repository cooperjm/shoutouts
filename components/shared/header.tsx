import Link from 'next/link';

export default function Header() {
	return (
		<header className='bg-white dark:bg-black shadow-sm max-w-7xl w-full py-7 px-4 xl:px-0'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo/Brand */}
					<div className='flex items-center'>
						<Link
							href='/'
							className='flex items-center space-x-2'
						>
							<div className=' text-white rounded-lg p-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='currentColor'
									className='bi bi-megaphone'
									viewBox='0 0 16 16'
								>
									<path d='M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z' />
								</svg>
							</div>
							<span className='font-bold text-xl text-gray-900 dark:text-white'>
								Shoutouts
							</span>
						</Link>
					</div>

					{/* Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						<Link
							href='/'
							className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'
						>
							Home
						</Link>
						<Link
							href='/browse'
							className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'
						>
							Browse
						</Link>
						<Link
							href='/create'
							className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'
						>
							Create
						</Link>
					</nav>

					{/* Actions */}
					<div className='flex items-center space-x-4'>
						{/* Search (hidden on small screens) */}
						<div className='hidden lg:block'>
							<div className='relative'>
								<input
									type='text'
									placeholder='Search shoutouts...'
									className='w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								/>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<svg
										className='h-5 w-5 text-gray-400'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* User Actions */}
						<div className='flex items-center space-x-2'>
							<button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors'>
								Sign In
							</button>
						</div>

						{/* Mobile menu button */}
						<div className='md:hidden'>
							<button
								type='button'
								className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:text-blue-600'
								aria-label='Open menu'
							>
								<svg
									className='h-6 w-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Navigation (hidden by default) */}
			<div className='md:hidden border-t border-gray-200 dark:border-gray-700'>
				<div className='px-4 pt-2 pb-3 space-y-1'>
					<Link
						href='/'
						className='block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md'
					>
						Home
					</Link>
					<Link
						href='/browse'
						className='block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md'
					>
						Browse
					</Link>
					<Link
						href='/create'
						className='block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md'
					>
						Create
					</Link>

					{/* Mobile Search */}
					<div className='px-3 py-2'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Search shoutouts...'
								className='w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							/>
							<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
								<svg
									className='h-5 w-5 text-gray-400'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
