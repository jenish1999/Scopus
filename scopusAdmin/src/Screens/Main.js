import React from 'react';
import { Route } from 'react-router-dom';

import ViewBorrower from '../components/borrower/viewBorrower';
import AddBorrower from '../components/borrower/addBorrower';
import ViewBorrowerGroup from '../components/borrower/viewBorrowerGroup';
import HomeBranch from '../components/branches/homeBranch';
import AddBorrowerGroup from '../components/borrower/addBorrowerGroup';
import SMStoBorrower from '../components/borrower/smsToBorrower';
import EmailtoBorrower from '../components/borrower/emailToBorrower';
import InviteBorrower from '../components/borrower/inviteBorrower';
import SearchBar from '../components/searchbar/searchbar';
import ViewBranch from '../components/branches/viewbranch';
import ViewLoans from '../components/loan/viewloan';
import AddLoan from '../components/loan/addloan';
import DueLoan from '../components/loan/dueloan';
import MissedRepayment from '../components/loan/missedRepayment';
import ArrearsLoan from '../components/loan/arrearsLoan';
import PaymentNone from '../components/loan/noPayment';
import PastMaturity from '../components/loan/pastMaturity';
import PrincipalOutstanding from '../components/loan/principalOutstanding';
import LateLoanOne from '../components/loan/lateLoan1';
import LateLoanThree from '../components/loan/lateLoan3';
import LoanClaculator from '../components/loan/loanCalc';
import Guarantors from '../components/loan/guarantors';
import AddGuarantor from '../components/loan/addGuarantor';
import LoanComments from '../components/loan/loanComments';
import ApproveLoans from '../components/loan/approveLoan';
import ViewRepayment from '../components/repayment/viewRepayments';
import AddBulkRepayment from '../components/repayment/addBulkPayments';
import ApproveRepayments from '../components/repayment/approveRepayment';
import Collateral from '../components/collateral/collateral';
import Calender from '../components/calender/calender';
import AddCalenderEvent from '../components/calender/addCalenderEvent';
import DailyCollectionSheet from '../components/collectionsheets/dailyCollectionSheet';
import MissedRepaymentSheet from '../components/collectionsheets/missedRepaymentSheet';
import PastMaturityLoans from '../components/collectionsheets/pastMaturityLoans';
import ViewSavingAccount from '../components/savings/viewSavingsAccount';
import AddSavingsAcc from '../components/savings/addSavingsAccount';
import SavingsReport from '../components/savings/savingsReport';
import SavingsProductReport from '../components/savings/savingsProductReport';
import CashSafeManagement from '../components/savings/cashSafeManagement';
import ViewSavingsTrans from '../components/savingstransaction/viewSavingsTransactions';
import AddBulkTransactions from '../components/savingstransaction/addBulkTransactions';
import StaffTransactionReport from '../components/savingstransaction/staffTransactionReport';
import ApproveTransactions from '../components/savingstransaction/approveTransactions';
import ViewInvestors from '../components/investors/viewInvestors';
import AddInvestor from '../components/investors/addInvestors';
import InviteInvestors from '../components/investors/inviteInvestors';
import ViewInvestorsAcco from '../components/investorsacco/viewInvestorsAccount';
import AddInvestorsAcco from '../components/investorsacco/addInvestorAccount';
import ViewAllLoanInvestments from '../components/investorsacco/viewAllLonaInvestments';
import ApproveLoanInvestments from '../components/investorsacco/approveLoanInvestments';
import ViewInvestorsTransactions from '../components/investorsacco/viewInvestorTransactions';
import ESignature from '../components/esignature/esignature';

const Main = () => {
	return (
		<section className='content'>
			<div className='container-fluid'>
				<React.Fragment>
					<SearchBar />
					{/* Branch */}
					<Route path='/branch/view-branch' component={ViewBranch} />
					<Route path='/branch/home-branch' component={HomeBranch} />
					{/* Borrower */}
					<Route path='/borrower/view-borrower' component={ViewBorrower} />
					<Route path='/borrower/add-borrower' component={AddBorrower} />
					<Route path='/borrower/view-borrower-group' component={ViewBorrowerGroup} />
					<Route path='/borrower/add-borrower-group' component={AddBorrowerGroup} />
					<Route path='/borrower/sms-to-borrower' component={SMStoBorrower} />
					<Route path='/borrower/email-to-borrower' component={EmailtoBorrower} />
					<Route path='/borrower/invite-borrower' component={InviteBorrower} />
					{/* Loans */}
					<Route path='/loan/all-loans' component={ViewLoans} />
					<Route path='/loan/add-loan' component={AddLoan} />
					<Route path='/loan/due-loan' component={DueLoan} />
					<Route path='/loan/missed-repayments' component={MissedRepayment} />
					<Route path='/loan/loan-arrears' component={ArrearsLoan} />
					<Route path='/loan/no-repayments' component={PaymentNone} />
					<Route path='/loan/past-maturity-date' component={PastMaturity} />
					<Route path='/loan/principal-outstanding' component={PrincipalOutstanding} />
					<Route path='/loan/late-loan-1' component={LateLoanOne} />
					<Route path='/loan/late-loan-3' component={LateLoanThree} />
					<Route path='/loan/loan-calculator' component={LoanClaculator} />
					<Route path='/loan/guarantors' component={Guarantors} />
					<Route path='/loan/guarantor/add-guarantor' component={AddGuarantor} />
					<Route path='/loan/loan-comment' component={LoanComments} />
					<Route path='/loan/approve-loan' component={ApproveLoans} />
					{/* Repayment */}
					<Route path='/repayment/view-repayments' component={ViewRepayment} />
					<Route path='/repayment/add-bulk-repayment' component={AddBulkRepayment} />
					<Route path='/repayment/approve-repayment' component={ApproveRepayments} />
					{/* Collacteral */}
					<Route path='/collateral/collateral_register' component={Collateral} />
					{/* Calender */}
					<Route path='/plan/calendar' component={Calender} />
					<Route path='/add_event/calendar' exact component={AddCalenderEvent} />
					{/* Collections */}
					<Route path='/collections/daily-collection' component={DailyCollectionSheet} />
					<Route path='/collections/missed-repayment' component={MissedRepaymentSheet} />
					<Route path='/collections/past-maturity-loans' component={PastMaturityLoans} />
					<Route path='/collections/send-sms' component={SMStoBorrower} />
					<Route path='/collections/send-email' component={EmailtoBorrower} />
					{/* Savings */}
					<Route path='/savings/view-savings-accounts' component={ViewSavingAccount} />
					<Route path='/savings/add-savings-account' component={AddSavingsAcc} />
					<Route path='/savings/savings-report' component={SavingsReport} />
					<Route path='/savings/savings-products-report' component={SavingsProductReport} />
					<Route path='/savings/cash-safe-management' component={CashSafeManagement} />
					{/* Savings Transactions */}
					<Route path='/savings-transactions/view-savings-transactions' component={ViewSavingsTrans} />
					<Route path='/savings-transactions/add-bulk-transactions' component={AddBulkTransactions} />
					<Route path='/savings-transactions/staff-transactions-report' component={StaffTransactionReport} />
					<Route path='/savings-transactions/approve-transactions' component={ApproveTransactions} />
					{/* Investors */}
					<Route path='/investors/view-investors' component={ViewInvestors} />
					<Route path='/investors/add-investor' component={AddInvestor} />
					<Route path='/investors/send-sms' component={SMStoBorrower} />
					<Route path='/investors/send-email' component={EmailtoBorrower} />
					<Route path='/investors/invite-investors' component={InviteInvestors} />
					{/* Investors Account */}
					<Route path='/investors-account/view-investor-accounts' component={ViewInvestorsAcco} />
					<Route path='/investors-account/add-investor-account' component={AddInvestorsAcco} />
					<Route path='/investors-account/all-loan-investments' component={ViewAllLoanInvestments} />
					<Route path='/investors-account/investor-transactions' component={ViewInvestorsTransactions} />
					<Route path='/investors-account/approve-loan-investments' component={ApproveLoanInvestments} />
					{/* E-Signature */}
					<Route path='/e-signature' component={ESignature} />
				</React.Fragment>
			</div>
		</section>
	);
};

export default Main;
