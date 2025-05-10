import {Accordion, AccordionItem} from "@heroui/accordion";
import {Card, CardBody, CardHeader} from "@heroui/card";


export const Gallery = () => {
      return (
        <section className="justify-center">
        <h1 className="text-xl font-bold text-center">Some of my Photos</h1>
        {/* Photo Gallery */}
        <div className="flex grid grid-cols-2">
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/Profile.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="1" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">
                            <p className="text-sm font-light">After a week in Alaska with only a small taste of the Northern Lights, on the last night of the trip we saw the most spectacular
                                showing of the Northern Lights. The Aurora Borealis lit up the sky from horizon to horizon moving and waving with incredible speed and fluidity. Sitting 
                                on that frozen lake was truely one of the most beautiful things I have experienced.   
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/IMG_9788.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="2" aria-label="Northern Lights at Fairbanks, Alaska" title="Northern Lights at Fairbanks, Alaska">
                            <p className="text-sm font-light">The first night in Alaska had a small hint of the Aurora Borealis with small and faint bursts. The next
                                4 nights were cloudy wih no visibility. We tried chasing clear skies around Fairbanks but ultimantly didn't see anything until the last
                                night of the trip. The small taste of the Northern Lights made the last night of the trip even sweeter.  
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/IMG_0027.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="3" aria-label="Ice Cave at Castner Glacier, Alaska" title="Ice Cave at Castner Glacier, Alaska">
                            <p className="text-sm font-light">After a small flat walk across the snowy glacier, you can reach an ice cave within Castner Glacier. The ice inside the cave 
                                feels like glass and was not cool to the touch. The ice itself was a deep blue on the walls mixed with clear sections. Large chunks of ice big enough to make a 
                                comfortable seat were scattered around the center floor of the cave. It was slightly unnerving realize that those several hundred pound chunks of ice came from the 
                                ceiling of the ice cave itself. It was even more unnerving to see the large cracks and gouges present on the ceiling. I swear I heard a lound crack above my head at one
                                point, left that cave promptly following that.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/IMG_0241.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="4" aria-label="Lynx in Denali National Park, Alaska" title="Lynx in Denali National Park, Alaska">
                            <p className="text-sm font-light">Aftr a long drive south to Denali National Park, we learned that the park was only open for 13 miles due to the winter weather. This limited our plan 
                                for the day, but we decieded to explore what we could at a nice relxing pace. On the way out of the park, I spotted a wierled cat shaped rock. A quick stop and a little bit of reversing
                                allowed us to get a second look and it was a lynx! The lynx was sitting still with closed eyes, so we assumed it was asleep. We took as many pictures as we could and enjoyed one of our first
                                wildlife spottings. As our excitment died down, the lynx sprung into action and rushed forward towards a previously hidden rabbits den. Two snow whtie rabbits bolted out of the den in two 
                                different directions, narrowly avoiding the lynx. Seeing the lynx hunt was a pleasent surpise and was the best wildife action we saw on the trip.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/IMG_0380.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="5" aria-label="Snowshoe hare at Denali National Park, Alaska" title="Snowshoe hare at Denali National Park, Alaska">
                            <p className="text-sm font-light">Shortly after spotting the lynx, after getting back on the road, I was able to spot a snowshoe hare that was slightly off the road. I was lucky enough to spot
                                the lynx, but the rabbit was purely looking at the right spot at the right time. The snowshoe hare was relaxing in the cover of a bush, unconcerned by the car 40 feet away, posing nicely for the 
                                camera.    
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/DSC_0573.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="6" aria-label="Bumblebee, Redondo Beach, California" title="Bumblebee, Redondo Beach, California">
                            <p className="text-sm font-light">Whenever I walk around with my camera, I try to be observant for small moments to capture. While I was talking pictures of some 
                                seagulls and crows, I spotted the perfect shot of a bumblebee. I was able to get close up with a long lense to get a highly detailed shot of such a small creature.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2  h-fit">
                <CardBody>
                    <img src="/src/img/C33.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="7" aria-label="Caldwell 33 - Veil Nebula" title="Caldwell 33 - Veil Nebula">
                            <p className="text-sm font-light">Caldwell 33 is a supernova remnant knowns as the Eastern Veil Nebula. It is located close to a similar nebula created by the same supernova.</p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/NGC6888.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="8" aria-label="NG6888 - Crecent Nebula" title="NG6888 - Crecent Nebula">
                            <p className="text-sm font-light">The Crecent Nebula is an emmission nebula that is relativly faint. I was not able to captrue the nebula in its entirety, however
                                this photo is one of the more dense collection of stars I have captrued.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2  h-fit">
                <CardBody>
                    <img src="/src/img/M51.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="9" aria-label="Messier 51 - Whirlpool Galaxy" title="Messier 51 - Whirlpool Galaxy">
                            <p className="text-sm font-light">Messier 51, also knowns as the Whirlpool Galaxy is one of my favorite objects in the night sky. It is on the limit of what my scope and camera can 
                                comfortably photograph, but it one of my favorites to capture.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2 h-fit">
                <CardBody>
                    <img src="/src/img/M101_2023_05_fast_attempt.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="10" aria-label="Messier 101 - Pinwheel Galaxy" title="Messier 101 - Pinwheel Galaxy">
                            <p className="text-sm font-light">Another interesting Galaxy. It is similar to the Whirlpool Galaxy, but it lacks the giant molecular cloud which gives the 
                                Whirlpool its unique look. The Pinwheel Galaxy is very photogenic though with its uniform shape.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
        </div>
        </section>
    );
};