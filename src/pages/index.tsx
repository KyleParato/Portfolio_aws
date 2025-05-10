import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {Image} from "@heroui/image"
import Profile from "../img/image0.jpg"
import {Gallery} from "@/components/gallery"

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Title */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About Me</h1>
        </div>
        {/* Grid Layout */}
        <div className="flex grid lg:grid-cols-2 grid-cols-1 m-4">
        {/* Photo Card */}
        <Card className="h-fit">
          <CardBody>
            <Image className="object-scale-down"
            src={Profile}
            alt="Me"
            />
          </CardBody>
        </Card>
        {/* SubGrid */}
        <div className="grid grid-row-3 gap-2 m-2">
        {/* Introduction Card */}
        <Card>
        <CardHeader>
            <h1 className="text-xl font-medium">Kyle Parato</h1>
        </CardHeader>
          <CardBody>
            <p className="text-sm font-light">Hello, my name is Kyle Parato. I am a software developer born and raised in Los Angeles. 
              I am currently pursuing a degree in Computer Sciecne at California State University, Fullerton. I was drawn to computer science
              due to the abstract nature of the organization and concepts within the subject. I find the whole system to be facinating. 
              There are few fields that can match the scaliability and impact of software development and computer science. I enjoy the 
              way of thinking it requires to design, develop, and maintain software.   
            </p>
          </CardBody>
        </Card>
        {/* Education Card */}
        <Card className="h-fit">
          <CardHeader>
            <h1 className="text-xl font-medium">Education</h1>
          </CardHeader>
          <CardBody>
            <p className="text-xl text-clip">California State University, Fullerton</p>
            <p className="text-xs font-light pb-2">May 2025</p>
            <p>Bachelor of Science - Computer Science </p>
          </CardBody>
        </Card>
        
        {/* Hobbies Card */}
        <Card>
          <CardHeader>
            <h1 className="text-xl font-medium">Hobbies/Interests</h1>
          </CardHeader>
          <CardBody>
            <p className="font-light">I have dabbled in a few different creative hobbies, but I always get drawn back to photography.
              I love capturing a moment or trying to reveal what is impossible to see with the naked eye. I do both conventional photography 
              with a preference for landscape and wildlife and I do astorphotography. I also enjoy traveliing in pursiut of my photography. 
              To stay healthy and focused, I also powerlift. Powerlifting has helped my build a strong work ethic towards goals that seem far off.
              </p>
          </CardBody>
        </Card>
        </div>
        
        </div>
        <Gallery/>
      </section>
    </DefaultLayout>
  );
}
