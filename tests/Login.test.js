import {test,expect} from '@playwright/test';
import { Loginpage } from '../Pages/login.spec';



test('Login_Test', async({page})=>{

    const login = new Loginpage(page);

    await page.goto('https://the-internet.herokuapp.com/login');
    await login.Login('tomsmith', 'SuperSecretPassword!');
    await page.close();
   
});
