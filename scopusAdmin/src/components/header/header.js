import React from 'react';
// import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='main-header'>
			{/* Logo */}
			<Link className='logo'>
				<span className='logo-mini'></span>
				<span className='logo-lg'>
					<b>SCOPUS</b>Admin
				</span>
			</Link>

			{/* Header Navbar */}
			<nav className='navbar navbar-static-top' role='navigation'>
				{/* Sidebar toggle button*/}
				<Link className='sidebar-toggle' data-toggle='push-menu' role='button'>
					<span className='sr-only'>Toggle navigation</span>
				</Link>

				<div className='navbar-custom-menu'>
					<ul className='nav navbar-nav'>
						<li>
							<Link>
								<i className='bx bxs-user'></i> Admin
							</Link>
						</li>
						<li className='dropdown'>
							<Link className='dropdown-toggle' data-toggle='dropdown'>
								<i className='bx bx-link bx-rotate-90'></i> Settings
							</Link>
							<ul className='dropdown-menu'>
								<li>
									<Link>
										<i className='far fa-circle nav-icon'></i>
										<span className='float-right text-muted text-sm'>Billing</span>
									</Link>
								</li>
								<li>
									<Link>
										<i className='far fa-circle nav-icon'></i>
										<span className='float-right text-muted text-sm'>Change Password</span>
									</Link>
								</li>
								<li>
									<Link>
										<i className='far fa-circle nav-icon'></i>
										<span className='float-right text-muted text-sm'>Logout</span>
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link>
								<i className='far fa-life-ring'></i> Help
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>

		// <div>
		// 	<nav className='main-header navbar navbar-expand navbar-primary navbar-dark'>
		// 		{/* Left navbar links */}
		// 		<ul className='navbar-nav'>
		// 			<li className='nav-item'>
		// 				<Link className='nav-link' data-widget='pushmenu' href='#' role='button'>
		// 					<i className='fas fa-bars' /> Left Menu
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 		{/* Right navbar links */}
		// 		<ul className='navbar-nav ml-auto'>
		// 			<li className='nav-item dropdown'>
		// 				<Link className='nav-link' data-toggle='dropdown' to='#'>
		// 					<i className='bx bxs-user'></i> Admin
		// 				</Link>
		// 			</li>
		// 			<li className='nav-item dropdown'>
		// 				<Link className='nav-link' data-toggle='dropdown' to='#'>
		// 					<i className='bx bx-link bx-rotate-90'></i> Settings
		// 				</Link>
		// 				<div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
		// 					<div className='dropdown-divider' />
		// 					<Link href='#' className='dropdown-item'>
		// 						<i className='far fa-circle nav-icon'></i>
		// 						<span className='float-right text-muted text-sm'>Billing</span>
		// 					</Link>
		// 					<div className='dropdown-divider' />
		// 					<Link href='#' className='dropdown-item'>
		// 						<i className='far fa-circle nav-icon'></i>
		// 						<span className='float-right text-muted text-sm'>Change Password</span>
		// 					</Link>
		// 					<div className='dropdown-divider' />
		// 					<Link href='#' className='dropdown-item'>
		// 						<i className='far fa-circle nav-icon'></i>
		// 						<span className='float-right text-muted text-sm'>Logout</span>
		// 					</Link>
		// 				</div>
		// 			</li>
		// 			<li className='nav-item dropdown'>
		// 				<Link className='nav-link' data-toggle='dropdown' to='#'>
		// 					<i className='far fa-life-ring'></i> Help
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </div>
	);
};

export default Header;
