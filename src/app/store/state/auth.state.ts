import { User } from "src/app/models/user.model";

export interface Notifications {
    emailNotifications: boolean,
    pushNotifications: boolean,
    textMessages: boolean,
    phoneCalls: boolean,
    messagesEmailNotifications: boolean,
    messagesPushNotifications: boolean,
    messagesTextMessages: boolean
}
export interface AuthStateModel {
    users: User[],
    loggedInUser: User,
    notifications: Notifications
}
export const authState: AuthStateModel = {
    users: [
        {
            id: 'ceed5391-4941-4444-896c-c39c455bd9e2',
            firstName: 'Masha',
            lastName: 'Zaruzhko',
            phoneNumber: '0508384567',
            nickname: 'maria05',
            email: 'maria@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/images/default.png',
            country: 'Ukraine',
            city: 'Kyiv'
        },
        {
            id: '9bdb34e7-12dd-480c-97dd-ff7a03263116',
            firstName: 'Nastya',
            lastName: 'Krasii',
            phoneNumber: '0508245667',
            nickname: 'nasttia',
            email: 'nastia@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/images/default.png',
            country: 'Ukraine',
            city: 'Kharkiv'
        },
        {
            id: '2c8c50d4-6063-4952-a752-e6ffa6529b4d',
            firstName: 'Dima',
            lastName: 'Zalushni',
            phoneNumber: '0957884567',
            nickname: 'dimaa33',
            email: 'dima@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/images/default.png',
            country: 'Ukraine',
            city: 'Lviv'
        },
        {
            id: '9f48c89e-470c-4eec-a177-924094cb8740',
            firstName: 'Kostya',
            lastName: 'Starodub',
            phoneNumber: '0508484547',
            nickname: 'kosttia23',
            email: 'kostia@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/images/default.png',
            country: 'Ukraine',
            city: 'Chernivtsi'
        },
        {
            id: 'fb3e4c88-911a-4cfd-a264-fa78cbdb83f6',
            firstName: 'Lena',
            lastName: 'Fisun',
            phoneNumber: '0663284567',
            nickname: 'lisa09',
            email: 'lisa@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/images/default.png',
            country: 'Ukraine',
            city: 'Kyiv'
        }
    ],
    loggedInUser: null,
    notifications: {
        emailNotifications: false,
        pushNotifications: false,
        textMessages: false,
        phoneCalls: false,
        messagesEmailNotifications: false,
        messagesPushNotifications: false,
        messagesTextMessages: false
    }
 }