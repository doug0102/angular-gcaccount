interface IUserData {
    sub: string;
    name: string; 
    nickname: string;
}

export class UserData {
    public sub: string | undefined;
    public name: string | undefined; 
    public nickname: string | undefined;

    constructor();
    constructor(userData: IUserData);
    constructor(userData?: IUserData) {
        this.sub = userData?.sub;
        this.name = userData?.name;
        this.nickname = userData?.nickname;
    }
}
