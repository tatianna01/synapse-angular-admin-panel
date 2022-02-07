export class User {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email: string;
    createdAt: Date;
    password: string;
    icon?: string;
    nickname?: string;
    country?: string;
    city?: string;

    constructor(id: string, info: any, createdAt: Date, password: string, icon?: string) {
        this.id = id,
        this.firstName = info.firstName,
        this.lastName = info.lastName,
        this.phoneNumber = info.phoneNumber,
        this.email = info.email,
        this.createdAt = createdAt,
        this.password = password,
        this.icon = icon,
        this.nickname = info.nickname,
        this.country = info.country,
        this.city = info.city
    }
}
