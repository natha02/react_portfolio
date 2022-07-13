import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/pictures/project1.jpeg'
import IMG2 from '../../assets/pictures/project2.jpeg'
import IMG3 from '../../assets/pictures/project3.jpeg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Project 1',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Project 2',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Project 3',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 4,
        image: IMG3,
        title: 'Project 4',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5,
        image: IMG2,
        title: 'Project 5',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6,
        image: IMG1,
        title: 'Project 6',
        github: 'https://github.com',
        demo: 'https://github.com'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio_item">

                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>

                                <h3>Available soon ...</h3>

                                <div className="portfolio_item-cta">
                                    <a href={github} className="btn">Github</a>
                                    <a href={demo} className="btn btn-primary">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    );
}

export default Portfolio;