import React from 'react';
import '../../App.css';

function Blog() {
    return (
        <div class="container-body mx-auto blog-card">
            <div class="container">
                <div class="card border-light">
                    <div class="card-header">5-16-2021</div>
                    <div class="card-body">
                        <h5 class="card-title">A little bit about this site</h5>
                        <p class="card-text"> The main goal of creating this site was to further explore and realize 
                        my creative side and my passion for full-stack development and design that makes sense. 
                        It's a Student Portfolio site that will support my resume by showcasing 
                        my Computer Science and Digital Design projects.
                        The works featured on the site will include my Senior Design project and a future Independent
                        Study in Game Development; I will make sure to include other accomplishments like hackathons
                        and smaller case studies as well. The most exciting and rewarding part is how hands-on and
                        practical the product of this independent study has been, rather than being something strictly
                        theory-based and intangible.
                        The goal of the project was to implement a robust website in Javascript and its many
                        frameworks, and go beyond the basics to explore advanced concepts related to the CSCI3916
                        Web API course I took with Shawn, who was also my faculty mentor throughout this project. 
                        We explored modern user experience design, from putting together a storyboard to a fully-fledged UI/UX
                        high-fidelity prototype. And from there, I implemented the visuals for the website using CSS
                        and elements created in Adobe’s Photoshop and Illustrator.The goal was to create a responsive
                        website that scales well between different devices and browsers. I got to explore
                        more advanced topics in Web Development and Design, like integration with headless CMS to
                        support content authoring, Search Engine Optimization, and metadata. And now, I have a pretty neat site!</p>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="container">
                <div class=" card border-light">
                    <div class="card-header">5-15-2021</div>
                    <div class="card-body">
                        <h5 class="card-title">Hello World!</h5>
                        <p class="card-text"> Hello! Welcome, and thank you for visiting my site! This is my first blogpost to see how things work. Stay tuned for the next post where I talk about the journey of building my portfolio website and all its trials and tribulations :)</p>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Blog