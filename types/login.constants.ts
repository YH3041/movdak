import { IMG_GOOGLE_LOGO, IMG_KAKAO_LOGO, IMG_NAVER_LOGO } from '@constants/images/images.constants';

export const SOCIAL_LOGINS: { type: LOGIN_TYPES; logo: string }[] = [
    { type: 'google', logo: IMG_GOOGLE_LOGO },
    { type: 'naver', logo: IMG_NAVER_LOGO },
    { type: 'kakao', logo: IMG_KAKAO_LOGO }
];

//? login
const LoginType = {
    normal: 'normal',
    google: 'google',
    naver: 'naver',
    kakao: 'kakao'
} as const;

export type LOGIN_TYPES = (typeof LoginType)[keyof typeof LoginType];
