exports.logoutpage= class LogoutPage{

    constructor(page){
        this.page=page;
        this.logout = page.getByRole('button', { name: ' Logout' });

    }
    async Logout(){
        await this.page.waitForURL('https://the-internet.herokuapp.com/secure');
        await this.logout.click();
        await this.page.waitForURL('https://the-internet.herokuapp.com/login');

    }
}