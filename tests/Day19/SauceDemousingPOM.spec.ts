import{test,expect} from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';
import { CartPage } from './Pages/CartPage';
import Logincred from './Logincred.json';


test("Saucedemo", async({page})=>{
const Loginpgobject = new LoginPage(page);
await Loginpgobject.Lunchpp();
await Loginpgobject.LogintoApplication(Logincred.username1,Logincred.password1);

const cartpageobject = new CartPage(page);
await cartpageobject.addtocart();
await cartpageobject.Cart();
}
)