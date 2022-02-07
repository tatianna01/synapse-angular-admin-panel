import { User } from "src/app/models/user.model";
import { v4 as uuidv4 } from 'uuid';

export interface AuthStateModel {
    users: User[],
    loggedInUser: User
}
export const authState: AuthStateModel = {
    users: [
        {
            id: uuidv4(),
            firstName: 'Masha',
            lastName: 'Zaruzhko',
            phoneNumber: '0508384567',
            nickname: 'maria05',
            email: 'maria@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/default.png',
            country: 'Ukraine',
            city: 'Kyiv'
        },
        {
            id: uuidv4(),
            firstName: 'Nastya',
            lastName: 'Krasii',
            phoneNumber: '0508245667',
            nickname: 'nasttia',
            email: 'nastia@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/default.png',
            country: 'Ukraine',
            city: 'Kharkiv'
        },
        {
            id: uuidv4(),
            firstName: 'Dima',
            lastName: 'Zalushni',
            phoneNumber: '0957884567',
            nickname: 'dimaa33',
            email: 'dima@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/default.png',
            country: 'Ukraine',
            city: 'Lviv'
        },
        {
            id: uuidv4(),
            firstName: 'Kostya',
            lastName: 'Starodub',
            phoneNumber: '0508484547',
            nickname: 'kosttia23',
            email: 'kostia@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/default.png',
            country: 'Ukraine',
            city: 'Chernivtsi'
        },
        {
            id: uuidv4(),
            firstName: 'Lena',
            lastName: 'Fisun',
            phoneNumber: '0663284567',
            nickname: 'lisa09',
            email: 'lisa@gmail.com',
            createdAt: new Date(),
            password: '123456',
            icon: 'assets/default.png',
            country: 'Ukraine',
            city: 'Kyiv'
        }
    ],
    loggedInUser: null
 }