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
        link: 'https://github.com/Schweig/Portfolio',
        image: '/portfolio.png'
    },
    {
        title: 'Anti-Clickbait',
        description: 'An chrome extension replacing click bait titles with information about the article',
        link: 'https://github.com/Schweig/Anti-Clickbait-Chrome/tree/master',
        image: '/anticlickbait.png'
    },
    {
        title: 'Github Game Off 2016',
        description: 'A RTS strategy game themed as computers going to war against each other',
        link: 'https://github.com/Schweig/game-off-2016',
        image: '/computerwarfare.png'
    },
]
