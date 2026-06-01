exports.Loginpage= class LoginPage{

    constructor(page){
        this.page=page;
        this.username = page.getByRole('textbox', { name: 'Username'});
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.login = page.getByRole('button', { name: ' Login' });

    }

    async Login(username, password){

        await this.username.fill(username);
        await this.password.fill(password);
        // await expect(this.page.locator('button', { name: ' Login' })).toBeVisible();
        await this.login.click();

    }
}