export const SideMenuItem = [
	{
		key: 0,
		icon: 'fa fa-circle-o text-aqua',
		value: 'Branch #1',
		extended: false,
		to: '/branch/home-branch',
	},
	{
		key: 1,
		icon: 'fas fa-home',
		value: 'Home Branch',
		extended: false,
		to: '/branch/home-branch',
	},
	{
		key: 2,
		icon: 'bx bxs-user',
		value: 'Borrowers',
		extended: true,
		extendedValue: [
			{
				Key: 'view_borrowers',
				exdValue: 'View Borrowers',
				to: '/borrower/view-borrower',
			},
			{
				Key: 'add_borrower',
				exdValue: 'Add Borrower',
				to: '/borrower/add-borrower',
			},
			{
				Key: 'view_borrower_group',
				exdValue: 'View Borrower Groups',
				to: '/borrower/view-borrower-group',
			},
			{
				Key: 'add_borrowers_group',
				exdValue: 'Add Borrowers Group',
				to: '/borrower/add-borrower-group',
			},
			{
				Key: 'send_sms_to_add_borrower',
				exdValue: 'Send SMS to all Borrower',
				to: '/borrower/sms-to-borrower',
			},
			{
				Key: 'send_email_to_all_borrower',
				exdValue: 'Send Email to all Borrower',
				to: '/borrower/email-to-borrower',
			},
			{
				Key: 'invire_borrower',
				exdValue: 'Invite Borrower',
				to: '/borrower/invite-borrower',
			},
		],
	},
	{
		key: 3,
		icon: 'fas fa-balance-scale',
		value: 'Loans',
		extended: true,
		extendedValue: [
			{
				Key: 'all-loans',
				exdValue: 'View All Loans',
				to: '/loan/all-loans',
			},
			{
				Key: 'add-loans',
				exdValue: 'Add Loan',
				to: '/loan/add-loan',
			},
			{
				Key: 'due-loans',
				exdValue: 'Due Loans',
				to: '/loan/due-loan',
			},
			{
				Key: 'missed-repayments',
				exdValue: 'Missed Repayments',
				to: '/loan/missed-repayments',
			},
			{
				Key: 'loan-arrears',
				exdValue: 'Loans in Arrears',
				to: '/loan/loan-arrears',
			},
			{
				Key: 'no-repayments',
				exdValue: 'No Repayments',
				to: '/loan/no-repayments',
			},
			{
				Key: 'past-maturity',
				exdValue: 'Past Maturity Date',
				to: '/loan/past-maturity-date',
			},
			{
				Key: 'principal-outstanding',
				exdValue: 'Principal Oustanding',
				to: '/loan/principal-outstanding',
			},
			{
				Key: '1-month-extended-loan',
				exdValue: '1 Month Late Loans',
				to: '/loan/late-loan-1',
			},
			{
				Key: '3-month-extended-loan',
				exdValue: '3 Month Late Loans',
				to: '/loan/late-loan-3',
			},
			{
				Key: 'loan-calculator',
				exdValue: 'Loan Calculator',
				to: '/loan/loan-calculator',
			},
			{
				Key: 'guarantors',
				exdValue: 'Guarantors',
				to: '/loan/guarantors',
			},
			{
				Key: 'loan-comments',
				exdValue: 'Loan Comments',
				to: '/loan/loan-comment',
			},
			{
				Key: 'Approve-oans',
				exdValue: 'Approve Loans',
				to: '/loan/approve-loan',
			},
		],
	},
	{
		key: 4,
		icon: 'fas fa-dollar-sign',
		value: 'Repayments',
		extended: true,
		extendedValue: [
			{
				Key: 'view-repayments',
				exdValue: 'View Repayments',
				to: '/repayment/view-repayments',
			},
			{
				Key: 'add-repayment',
				exdValue: 'Add bulk repayment',
				to: '/repayment/add-bulk-repayment',
			},
			{
				Key: 'upload-repayment',
				exdValue: 'Upload Repayments - CSV file',
				to: '/repayment/upload-repayment',
			},
			{
				Key: 'repayment-chart',
				exdValue: 'Repayment Charts',
				to: '/repayment/repayment-chart',
			},
			{
				Key: 'approve-repayments',
				exdValue: 'Approve Repayments',
				to: '/repayment/approve-repayment',
			},
		],
	},
	{
		key: 5,
		icon: 'fas fa-bars',
		value: 'Collateral Register',
		extended: false,
		to: '/collateral/collateral_register',
	},
	{
		key: 6,
		icon: 'bx bxs-calendar',
		value: 'Calender',
		extended: false,
		to: '/plan/calendar',
	},
	{
		key: 7,
		icon: 'bx bxs-spreadsheet',
		value: 'Collection Sheets',
		extended: true,
		extendedValue: [
			{
				key: 'daily_collection_sheet',
				exdValue: 'Daily Collection Sheet',
				to: '/collections/daily-collection',
			},
			{
				key: 'missed_repayment_sheet',
				exdValue: 'Missed Repayment Sheet',
				to: '/collections/missed-repayment',
			},
			{
				key: 'past_maturity_date_loans',
				exdValue: 'Past Maturity Date Loans',
				to: '/collections/past-maturity-loans',
			},
			{
				key: 'send_sms_collections',
				exdValue: 'Send SMS',
				to: '/collections/send-sms',
			},
			{
				key: 'send_email_collections',
				exdValue: 'Send Email',
				to: '/collections/send-email',
			},
		],
	},
	{
		key: 8,
		icon: 'bx bxs-bank',
		value: 'Savings',
		extended: true,
		extendedValue: [
			{
				key: 'view_savings_accounts',
				exdValue: 'View Savings Accounts',
				to: '/savings/view-savings-accounts',
			},
			{
				key: 'add_savings_account',
				exdValue: 'Add Savings Account',
				to: '/savings/add-savings-account',
			},
			{
				key: 'savings_chart',
				exdValue: 'Savings Chart',
				to: '/savings/savings-chart',
			},
			{
				key: 'savings_report',
				exdValue: 'Savings Report',
				to: '/savings/savings-report',
			},
			{
				key: 'savings_products_reports',
				exdValue: 'Savings Products Report',
				to: '/savings/savings-products-report',
			},
			{
				key: 'cash_safe_management',
				exdValue: 'Cash Safe Management',
				to: '/savings/cash-safe-management',
			},
		],
	},
	{
		key: 9,
		icon: 'bx bx-link bx-rotate-90',
		value: 'Saving Transactions',
		extended: true,
		extendedValue: [
			{
				key: 'view_savings_transactions',
				exdValue: 'View Savings Transactions',
				to: '/savings-transactions/view-savings-transactions',
			},
			{
				key: 'add_bulk_transactions',
				exdValue: 'Add Bulk Transaction',
				to: '/savings-transactions/add-bulk-transactions',
			},
			{
				key: 'upload_transactions-savnigs-9',
				exdValue: 'Upload Transactions-CSV file',
				to: '/savings-transactions/upload-transactions',
			},
			{
				key: 'staff_transactions_report',
				exdValue: 'Staff Transactions Report',
				to: '/savings-transactions/staff-transactions-report',
			},
			{
				key: 'approve_transactions',
				exdValue: 'Approve Transactions',
				to: '/savings-transactions/approve-transactions',
			},
		],
	},
	{
		key: 10,
		icon: 'fas fa-user-plus',
		value: 'Investors',
		extended: true,
		extendedValue: [
			{
				key: 'view_investors',
				exdValue: 'View Investor',
				to: '/investors/view-investors',
			},
			{
				key: 'add_investors',
				exdValue: 'Add Investors',
				to: '/investors/add-investor',
			},
			{
				key: 'send_sms_all_investors',
				exdValue: 'Send SMS to All Investors',
				to: '/investors/send-sms',
			},
			{
				key: 'send_email_all_investors',
				exdValue: 'Send Email to All Investors',
				to: '/investors/send-email',
			},
			{
				key: 'invite_investors',
				exdValue: 'Invite Investors',
				to: '/investors/invite-investors',
			},
		],
	},
	{
		key: 11,
		icon: 'fas fa-briefcase',
		value: 'Investor Accounts',
		extended: true,
		extendedValue: [
			{
				key: 'view_all_investors_account',
				exdValue: 'View All Investor Accounts',
				to: '/investors-account/view-investor-accounts',
			},
			{
				key: 'add_invstor_account',
				exdValue: 'Add Investor Account',
				to: '/investors-account/add-investor-account',
			},
			{
				key: 'view_all_loan_investments',
				exdValue: 'View All Loan Investments',
				to: '/investors-account/all-loan-investments',
			},
			{
				key: 'view_investor_transactions',
				exdValue: 'View Investor Transactions',
				to: '/investors-account/investor-transactions',
			},
			{
				key: 'approve_loan_investments',
				exdValue: 'Approve Loan Investments',
				to: '/investors-account/approve-loan-investments',
			},
		],
	},
	{
		key: 12,
		icon: 'fas fa-gavel',
		value: 'E-Signatures',
		extended: false,
		to: '/e-signature',
	},
	{
		key: 13,
		icon: 'fab fa-paypal',
		value: 'Payroll',
		extended: false,
	},
	{
		key: 14,
		icon: 'fas fa-share',
		value: 'Expenses',
		extended: false,
	},
	{
		key: 15,
		icon: 'bx bx-plus',
		value: 'Other Income',
		extended: false,
	},
	{
		key: 16,
		icon: 'fas fa-suitcase',
		value: 'Asset Management',
		extended: false,
	},
	{
		key: 17,
		icon: 'fas fa-industry',
		value: 'Reports',
		extended: false,
	},
	{
		key: 18,
		icon: 'bx bxs-book-bookmark bx-flip-vertical',
		value: 'Accounting',
		extended: false,
	},
];
