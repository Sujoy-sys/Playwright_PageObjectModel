import {test,expect} from '@playwright/test';
import {logoutpage} from '../Pages/logout.spec';

test('Logout_Test', async({page})=>{

    const logout = new logoutpage(page);
    
    await page.goto('https://the-internet.herokuapp.com/login');
    await login.Login('tomsmith', 'SuperSecretPassword!');
    await logout.Logout();
    await page.close();
   
});

