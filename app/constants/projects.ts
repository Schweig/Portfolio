export interface Project {
    title: string,
    description: string,
    link: string,
    image: string,
}


export const projects: Array<Project> = [
    {
        title: 'FlySense',
        description: 'An IoT vape detector deployed in 50 states and 22 countries',
        link: 'https://www.sotertechnologies.com/solutions/flysense/',
        image: 'https://www.sotertechnologies.com/wp-content/uploads/2022/03/flysense-286-2022.png.webp'
    },
    {
        title: 'This Portfolio',
        description: 'An open source NextJs project for any sort of developer',
        link: 'https://www.github.com/schweig',
        image: 'https://www.sotertechnologies.com/wp-content/uploads/2022/03/flysense-286-2022.png.webp'
    },
    {
        title: 'Sample Project',
        description: 'Some sample project ive worked really really hard on and care a lot about so Im putting it last of course',
        link: 'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg',
        image: 'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg'
    }
]
