import html from '../assets/html5.svg'
import css from '../assets/css3.svg'
import js from '../assets/js.svg'
import react_js from '../assets/react_.svg'
import typescript from '../assets/typescript.svg'
import git from '../assets/Git.svg'
import tailwind from '../assets/tailwind-icon.svg'
import accessories from '../assets/blog.png'
import cafe_img from '../assets/a-cafe.png'
import contact_view from '../assets/contact-view.png'
import house from '../assets/real-estate.png'
import justice_img from '../assets/law-firm.png'
import dashboard_img from '../assets/dashboard.png'
import vercel from '../assets/vercel.svg'



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
        description: `This real estate website is a modern, responsive platform built 
            using React for a dynamic and interactive user experience, with custom CSS 
            styling to ensure a clean, professional design. It allows users to browse and filter property 
            listings, view details with images, and contact agents easily.
            The website also features a contact form for inquiries and a map 
            integration for location visualization. Hosted on Vercel, it ensures fast performance and 
            seamless deployment.`,
        image: house,
        tools: [react_js, css, vercel],
        siteLink: 'https://react-estate-website.vercel.app/',
        gitRepoLink: 'https://github.com/AliCamara20/Real-estate-website.git'

    }, 

    {
        id: 2, name: 'Law Firm Website', 
        description: `This law firm website is built with React and styled using CSS for a professional, 
            responsive design. It includes sections such as About, Practice Areas, Attorneys, Testimonials, 
            Blog, and Contact, providing clear and accessible information. Call-to-action buttons throughout 
            the site invite visitors to subscribe to the firm's newsletter.`,
        image: justice_img,
        tools: [react_js, css],
        siteLink: 'https://github.com/AliCamara20.github.io/Law-Firm/',
        gitRepoLink: 'https://github.com/AliCamara20/Law-Firm.git'
         
    }
    , 
    {
        id: 3, name: 'Admin Dashboard', 
        description: `This admin dashboard is built with React and styled using CSS, offering a clean and 
            intuitive interface. It allows you to view key metrics such as total customers, members, 
            and currently active customers. The customer table displays names, locations, 
            images, and emails, with sorting options by name and location. A pagination feature lets 
            you navigate through the customer list, showing ten entries per page for easier browsing.`,
        image: dashboard_img,
        tools: [react_js, css],
        siteLink: 'https://github.com/AliCamara20.github.io/Dashboard/',
        gitRepoLink: 'https://github.com/AliCamara20/Dashboard.git'
         
    }, 

    {
        id: 4, name: 'Fashion Blog Website', 
        description:   `This fashion blog is built with HTML, CSS, and JavaScript, 
            offering a sleek and visually engaging design. Each blog post displays a title, 
            release date, a like button for user engagement, and a comment section for replies. 
            The site also features dedicated sections such as Popular Posts, Inspirations, and Tags 
            to help users explore related content. Advertisements are seamlessly integrated, and a 
            subscription section invites visitors to sign up for the latest fashion updates, trends, 
            and new posts. The layout is responsive and designed to provide an enjoyable 
            reading experience across all devices.`,
        image: accessories,
        tools: [html, css, js],
        siteLink: 'https://github.com/AliCamara20.github.io/Blog-website/Blog.html',
        gitRepoLink: 'https://github.com/AliCamara20/Blog-website.git'
         
    }, 

    {
        id: 5, name: 'Cafe Website', 
        description: `This café website is built with HTML, CSS, and JavaScript, featuring a warm and 
            inviting design that reflects the café’s atmosphere. Visitors can explore the full menu for 
            food and drinks,  view the café’s location, and place orders directly through the site. 
            It also includes a section about the owner, sharing the story behind the café, along with 
            clearly displayed opening and closing hours. The layout is responsive and easy to navigate, 
            providing a smooth user experience on both desktop and mobile devices.
`,
        image: cafe_img,
        tools: [html, css, js],
        siteLink: 'https://github.com/AliCamara20.github.io/Cafe-website',
        gitRepoLink: 'https://github.com/AliCamara20/Cafe-website.git'
         
    },

    {
        id: 6, name: 'Contact Book', 
        description: `This contact app is built with React and styled using CSS, 
            offering a clean and responsive interface. Hosted on Vercel, it allows users to add 
            new contacts, view a list of saved contacts, and navigate to individual contact pages. 
            From there, users can easily edit or delete contact information, making contact management 
            simple and efficient.`,
        image: contact_view,
        tools:[react_js, css, vercel],
        siteLink: 'https://contact-book-flame.vercel.app/',
        gitRepoLink: 'https://github.com/AliCamara20/Contact-book.git'
         
    }
]