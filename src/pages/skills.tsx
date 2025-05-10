import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Title */}
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Skills</h1>
        </div>
        {/* Services */}
        <Card>
          <CardHeader>
            <h1 className="text-xl font-bold">Services</h1>
          </CardHeader>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <CardBody className="m-5">
              <p className="font-semibold">Amazon Web Services</p>
              <img src="/src/img/aws.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">PowerApps</p>
              <img src="/src/img/microsoft-power-apps.png" className="icon-img"/>
            </CardBody>
          </div>
        </Card>
        {/* Languages */}
        <Card>
          <CardHeader>
            <h1 className="text-xl font-bold">Languages</h1>
          </CardHeader>
          <div className="grid md:grid-cols-4 sm:grid-cols-1">
            <CardBody className="m-5">
              <p className="font-semibold">Python3</p>
              <img src="/src/img/python.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">C++</p>
              <img src="/src/img/C++.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">JavaScript</p>
              <img src="/src/img/JavaScript.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">Tailwind</p>
              <img src="/src/img/tailwind.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">HTML5</p>
              <img src="/src/img/HTML5.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">Swift</p>
              <img src="/src/img/swift.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">SQL</p>
              <img src="/src/img/SQL.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">C#</p>
              <img src="/src/img/csharp.png" className="icon-img"/>
            </CardBody>
          </div>
        </Card>
        {/* Programs */}
        <Card>
          <CardHeader>
            <h1 className="text-xl font-bold">Programs</h1>
          </CardHeader>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <CardBody className="m-5">
              <p className="font-semibold">Wireshark</p>
              <img src="/src/img/wireshark.png" className="icon-img"/>
            </CardBody>
            <CardBody className="m-5">
              <p className="font-semibold">Unity</p>
              <img src="/src/img/unity.png" className="icon-img"/>
            </CardBody>
          </div>
        </Card>
      </section>
    </DefaultLayout>
  );
}
