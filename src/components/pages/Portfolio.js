import React from 'react';
import '../../App.css';
import photo1 from '../../images/CSCI3840_Isometric_Design.png';
import photo2 from '../../images/CSCI3840_Vector_Art.png';
import photo3 from '../../images/BAGPTammyHusnetdinova.png';


function Portfolio() {
    return (
        <div>
            <div class="row">
                <div class="col">
                    <div class="card portfolio-card mx-auto mb-3">
                        <img class="card-img-top" src={photo3} />
                            <div class="card-body">
                                <h5 class="card-title">Be A Good Person Made By You Sticker Design</h5>
                                <p class="card-text">
                                    Be A Good Person is a local Denver brand developed based on a passion for positivity and 
                                    a brighter future within our society; the brand promotes this simple message on their clothing,
                                    stickers, flags, floormats, and other accessories. 
                                    This piece was my submission for Be A Good Person's Made by You sticker design contest in 2021.
                                    In light of reaching 50,000+ organic followers on Instagram, they were proud to reveal
                                    'Made By You',  a project focused on collaborating with the community and inviting all 
                                    to design the next BAGP sticker. The idea was to create a unique illustration or design of a BAGP sticker. 
                                    No matter the shape, orientation or style, the sticker's purpose is to promote what it means to me to 'BE A GOOD PERSON' 
                                    or express anything positive in the past, present, or future. I came up with this colorful octopus wrapping around the logo
                                    and holding a flower; the color palette and soft, curved features of my art symbolized peace and positivity to me.
                                    I'm absolutely obsessed with octopi; they're incredibly intelligent and peculiar creatures,
                                    and they tend to stay to themselves and observe their surroundings. Octopi are very
                                    peaceful and introspective, and they like to collect little trinkets; hence the existence of the 
                                    "octopus's garden" trope often referenced in art. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            <div class="row">
                <div class="col">
                    <div class="card portfolio-card mx-auto mb-3">
                        <img class="card-img-top" src={photo2} />
                            <div class="card-body">
                                <h5 class="card-title">Adobe Illustrator: Vector Art</h5>
                                <p class="card-text">
                                    For this mini-project, I wanted to try my hand at vector art with Adobe Illustrator. 
                                    I found a photo of myself that I traced over in Illustrator to create this digital piece.
                                    The idea was to make something for my personal brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                <div class="col">
                    <div class="card portfolio-card mx-auto mb-3">
                        <img class="card-img-top" src={photo1} />
                            <div class="card-body">
                                <h5 class="card-title">Adobe Illustrator: Isometric Design</h5>
                                <p class="card-text">
                                    I made this isometric piece with Adobe Illustrator, following along with a tutorial on youtube.
                                    Source: https://www.youtube.com/watch?v=eFHxknDs4Mk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Portfolio