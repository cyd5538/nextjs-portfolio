import PROJECT1 from '../public/assets/study.png'
import PROJECT2 from '../public/assets/momentum.png'
import PROJECT3 from '../public/assets/project3.png'
import TypeScript from '../public/assets/typescript.png'
import TAILWIND from '../public/assets/tailwind.png'
import FIREBASE from '../public/assets/firebase.png'
import VITE from '../public/assets/vite.png';
import NEXTJS from '../public/assets/nextjs.png'

const ProjectData = [
    {
        title : "스터디와 프로젝트 구하는 사이트",
        main : PROJECT1.src,
        stack1 : NEXTJS.src,
        stack2 : FIREBASE.src,
        stack3 : TAILWIND.src,
        description : "1.  Firebase를 이용하여 만든 구글로그인, 깃허브로그인\n2.  닉네임 바꾸기, 프로필 이미지 바꾸기\n3.  기술 스택에 따라 검색하기\n4.  crud 기능과 더불어 댓글 기능\n5.  다크모드 ",
        deploy : "https://nextjs-firebase-app-barv-k2qo7273f-cyd5538.vercel.app/",
        code : "https://github.com/cyd5538/nextjs-firebase-app",
        subtitle : "개발자와 취준생을 위한 스터디와 프로젝트 구하는 사이트입니다."
    },
    {
        title : "Momentum 클론 코딩",
        main : PROJECT2.src,
        stack1 : VITE.src,
        stack2 : TypeScript.src,
        stack3 : TAILWIND.src,
        description : "1. 현재 위치와 날씨API를 연결해서 날씨 보여주기\n2.  LocalStorage를 이용한 todolist\n3.   unsplash api 사용한 배경과 배경 바꾸기 기능\n4. 구글과 네이버 검색\n5.  다크모드 ",
        deploy : "https://fluffy-florentine-46c11a.netlify.app/",
        code : "https://github.com/cyd5538/momentum-clone",
        subtitle : "나만의 기능을 추가한 Momentum "
    },
    {
        title : "포트폴리오 사이트",
        main : PROJECT3.src,
        stack1 : NEXTJS.src,
        stack2 : TypeScript.src,
        stack3 : TAILWIND.src,
        description : "1. Framer-motion 애니메이션 \n2.  반응형 디자인\n3. email api 사용\n  ﾠ \n ﾠ",
        deploy : "https://fluffy-florentine-46c11a.netlify.app/",
        code : "https://github.com/cyd5538/momentum-clone",
        subtitle : "Nextjs 13을 사용해 만든 포트폴리오 사이트"
    },

]

export default ProjectData;