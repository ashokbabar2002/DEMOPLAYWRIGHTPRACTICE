import{test,expect} from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';
import { AccountCreatedPage } from './Pages/AccountCreatedPage';
import { AccountInfoPage } from './Pages/AccountInfoPage';

test("Accountcreation", async({page})=>{

const Loginpgobject = new LoginPage(page);
await Loginpgobject.Launchpp();
await Loginpgobject.LogintoApplication("ashok3","ashokbabar3@gmail.com");

const AccountInfoPageobj = new AccountInfoPage(page);
await AccountInfoPageobj.signupPersonalInfo("ashok2");

const AccountCreatedPageobj = new AccountCreatedPage(page);
await AccountCreatedPageobj.verifyaccountcreated();



}
)