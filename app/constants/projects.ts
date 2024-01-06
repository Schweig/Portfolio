export interface Project {
    title: string,
    description: string,
    link: string,
    image: string,
}


export const projects: Array<Project> = [
    {
        title: 'FlySense',
        description: 'A patented IoT vape detector deployed in 50 states and 22 countries',
        link: 'https://www.sotertechnologies.com/solutions/flysense/',
        image: '/flysense.png.webp'
    },
    {
        title: 'Breakfast Ball',
        description: 'A golf iOS app where you can track your rounds from your Apple Watch',
        link: 'https://apps.apple.com/us/app/breakfast-ball/id6447217023',
        image: '/breakfastball.png'
    },
    {
        title: 'This Portfolio',
        description: 'An open source NextJs project for any data driven individual',
        link: 'https://www.github.com/schweig',
        image: '/portfolio.png'
    },
]
