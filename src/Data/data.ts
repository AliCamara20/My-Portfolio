import html from '../assets/html5.svg'
import css from '../assets/css3.svg'
import js from '../assets/js.svg'
import react_js from '../assets/Git.svg'
import typescript from '../assets/typescript.svg'
import git from '../assets/Git.svg'
import tailwind from '../assets/tailwind-icon.svg'
import accessories from '../assets/blog.png'
import cafe_img from '../assets/a-cafe.png'
import contact_view from '../assets/contact-view.png'
import house from '../assets/real-estate.png'
import justice_img from '../assets/law-firm.png'
import dashboard_img from '../assets/dashboard.png'



export interface Image{
    id: number,
    name: string,
    src: string
}

export interface Project{
    id: number, 
    name: string, 
    image: string,
    tools: string[];
    description: string
    siteLink: string,
    gitRepoLink: string
}

export const images: Image[] = [
    {id: 1, name: 'HTML5', src: html },
    {id: 2, name: 'CSS3', src: css },
    {id: 3, name: 'JS', src: js },
    {id: 4, name: 'REACT', src: react_js },
    {id: 5, name: 'TYPESCRIPT', src: typescript },
    {id: 6, name: 'TAILWIND', src: tailwind },
    {id: 7, name: 'GIT', src: git },
]

export const projects: Project[] = [
    {
        id: 1, name: 'Real Estate Website', 
        description: 'Designed and developed a fully responsive real estate website',
        image: house,
        tools: [react_js, css],
        siteLink: 'https://react-estate-website.vercel.app/',
        gitRepoLink: 'https://github.com/AliCamara20/Real-estate-website.git'

    }, 

    {
        id: 2, name: 'Law Firm Website', 
        description: 'Designed and developed a fully responsive real estate website',
        image: justice_img,
        tools: [react_js, css],
        siteLink: 'https://github.com/AliCamara20.github.io/Law-Firm/',
        gitRepoLink: 'https://github.com/AliCamara20/Law-Firm.git'
         
    }
    , 
    {
        id: 3, name: 'Admin Dashboard', 
        description: 'Designed and developed a fully responsive real estate website',
        image: dashboard_img,
        tools: [react_js, css],
        siteLink: 'https://github.com/AliCamara20.github.io/Dashboard/',
        gitRepoLink: 'https://github.com/AliCamara20/Dashboard.git'
         
    }, 

    {
        id: 4, name: 'Fashion Blog Website', 
        description: 'Designed and developed a fully responsive real estate website',
        image: accessories,
        tools: [html, css, js],
        siteLink: 'https://github.com/AliCamara20.github.io/Blog-website/Blog.html',
        gitRepoLink: 'https://github.com/AliCamara20/Blog-website.git'
         
    }, 

    {
        id: 5, name: 'Cafe Website', 
        description: 'Designed and developed a fully responsive real estate website',
        image: cafe_img,
        tools: [html, css, js],
        siteLink: 'https://github.com/AliCamara20.github.io/Cafe-website',
        gitRepoLink: 'https://github.com/AliCamara20/Cafe-website.git'
         
    },

    {
        id: 6, name: 'Contact Book', 
        description: 'Designed and developed a fully responsive real estate website',
        image: contact_view,
        tools:[react_js, css],
        siteLink: 'https://contact-book-flame.vercel.app/',
        gitRepoLink: 'https://github.com/AliCamara20/Contact-book.git'
         
    }
]