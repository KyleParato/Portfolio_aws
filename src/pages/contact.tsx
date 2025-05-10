import React from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Snippet} from "@heroui/snippet";
import { Link } from "@heroui/link";
import {Form} from "@heroui/form";
import {Input, Textarea} from "@heroui/input";
import { Button } from "@heroui/button";

export default function DocsPage() {
  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
    console.log(data);
    e.target.reset();
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Title */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contact</h1>
        </div>
        {/* Gallery */}
        <div className="grid lg:grid-cols-2 grid-col-1">
          {/* Email Card */}
          <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 h-fit">
            <CardHeader>
              <div>
                <h1 className="card-title">Email</h1>
              </div>
            </CardHeader>
            <CardBody>
                <Snippet symbol="" color="undefined">KyleParato@gmail.com</Snippet>
            </CardBody>
          </Card>
          {/* Github Card */}
          <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 h-fit">
            <CardHeader>
              <div>
                <h1 className="card-title">GitHub</h1>
              </div>
            </CardHeader>
            <CardBody>
                <Snippet symbol="" color="undefined">KyleParato</Snippet>
            </CardBody>
            <CardFooter>
            <Link size="sm" isExternal showAnchorIcon href="https://github.com/KyleParato">https://github.com/KyleParato</Link>
            </CardFooter>
          </Card>
          {/* LinkedIn Card */}
          <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 h-fit">
            <CardHeader>
              <div>
                <h1 className="card-title">LinkedIn</h1>
              </div>
            </CardHeader>
            <CardBody>
                <Snippet symbol="" color="undefined">Kyle Parato</Snippet>
            </CardBody>
            <CardFooter>
            <Link size="sm" isExternal showAnchorIcon href="https://www.linkedin.com/in/kyle-parato-751bb92b7/">https://www.linkedin.com/in/kyle-parato-751bb92b7/</Link>
            </CardFooter>
          </Card>
        
        {/* Contact Form */}
        <Card className="mx-auto flex max-w items-center p-5 m-5 shadow-xl shadow-orange-300/40 h-fit">
          <CardHeader>
              <div>
                <h1 className="card-title">Contact Form</h1>
              </div>
            </CardHeader>
          <CardBody>
            <Form className="w-full max-w-xs" onSubmit={onSubmit} id="contact-form">
              <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                
                label="Why are you reaching out?"
                labelPlacement="outside"
                name="why"
                placeholder="Why are you reaching out?"
              />
              <Textarea 
                isClearable
                className="max-w-xs" 
                label="Questions/Comments" 
                placeholder="Enter your description" 
                name="questions-comments" />
              <Button type="submit" variant="bordered">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
