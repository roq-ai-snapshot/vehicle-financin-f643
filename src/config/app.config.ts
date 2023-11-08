interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Finance Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Finance Manager', 'Loan Officer'],
  tenantName: 'Organization',
  applicationName: 'Vehicle Financing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read vehicle information',
    'Apply for a loan',
    'Read loan status',
    'Update personal information',
  ],
  ownerAbilities: ['Manage finance_manager data', 'Manage loan data', 'Read user data', 'Read organization data'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/f9857944-09fe-485e-9425-5cd71cb34374',
};
