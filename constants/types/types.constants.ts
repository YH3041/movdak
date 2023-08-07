//? login
const LoginType = {
    normal: 'normal',
    google: 'google',
    naver: 'naver',
    kakao: 'kakao'
} as const;

export type LOGIN_TYPES = (typeof LoginType)[keyof typeof LoginType];

//? posts
export interface IPost {
    id: number;
    title: string;
    thumbnailUrl: string;
    description: string;
    category: string;
}
