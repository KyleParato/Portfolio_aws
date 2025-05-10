import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import { Divider } from "@heroui/divider";
import {Link} from "@heroui/link"
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, useDisclosure,} from "@heroui/modal";
import {ScrollShadow} from "@heroui/scroll-shadow";

export default function DocsPage() {
  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()
  const modal5 = useDisclosure()
  const modal6 = useDisclosure()
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-9/10">
        <div className="inline-block max-w-9/10 text-center justify-center ">
          <h1 className={title()}>Projects</h1>
          
        <div className="flex grid grid-cols-2 jsutify-center">
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Incoming Work Order Managment System - Edwards Lifesciences</h1>
                  <p className="card-date">May 2025</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">A two semester business project working with Edwards Lifescienes to help them improve their work 
                    order managment system for three of their teams.
                  </p>
              </CardBody>
              <Divider/>
              <CardFooter className="justify-between">
                  <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal1.onOpen}>Learn More</Button>
                  <Modal className="max-h-[90%] overflow-scroll" size="4xl" isOpen={modal1.isOpen} onClose={modal1.onClose}>
                    <ModalContent>
                      <ScrollShadow className="w-[100%] h-[40%]" size={50}>
                          <ModalHeader className="flex flex-col gap-1">Incoming Work Order Managment System - Edwards Lifesciences</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">The task given to our group was to develop and update the work order system for a machine 
                              shop, a material testing lab, and a prototyping team. We were able to update existing systems and infrastrcture to 
                              be a modern and uniform system across the teams.
                            </p>
                            <p className=""><b>Tools used:</b><br/>Microsoft SharePoint<br/>Microsoft PowerApps
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/edwards.png"/>
                            <img className="w-full max-w-3xl" src="/src/img/edwards-form.png"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                          <Link className="overflow-hidden text-ellipsis" isExternal showAnchorIcon href="https://github.com/KyleParato/491">Edwards Lifesciences </Link>
                          </ModalFooter>
                        </ScrollShadow>
                    </ModalContent>
                  </Modal>
                  <Link className="overflow-hidden text-ellipsis" isExternal showAnchorIcon href="https://github.com/KyleParato/491">Edwards Lifesciences </Link>
                </CardFooter>
        </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">AWS Real Time Cloud Document Collaboration</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">A basic real time document collaboration web app. Project focused on designing the microservices and 
                  security.</p>
              </CardBody>
              <Divider/>
              <CardFooter className="justify-between">
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal2.onOpen}>Learn More</Button>
                  <Modal className="max-h-[90%] overflow-scroll" size="4xl"isOpen={modal2.isOpen} onClose={modal2.onClose}>
                    <ModalContent>
                      <ScrollShadow className="w-[100%] h-[40%]" size={50}>
                          <ModalHeader className="flex flex-col gap-1">AWS Real Time Cloud Document Collaboration</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">A basic real time document collaboration web app. Project focused on designing the microservices and 
                              security. Using AWS Amplify to host the front end, AWS DynamoDB to host the database, and AWS Appsync to sync the 
                              documents durning collaboration.
                            </p>
                            <p className=""><b>Tools used:</b><br/>AWS<br/>Vite
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/RTDCCollaborationPage.png"/>
                            <img className="w-full max-w-3xl" src="/src/img/RTDCDocPage.png"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/rtde">AWS Real Time Document Collaboration</Link>
                            </ModalFooter>
                      </ScrollShadow>
                  </ModalContent>
                </Modal>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/rtde">AWS Real Time Document Collaboration</Link>
                </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Chess AI - Alpha Beta Pruning</h1>
                  <p className="card-date">December 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Chess AI using alpha beta pruning implemented in Python. This was a final project for my AI course but I 
                    decieded to add a few extra features as my intrest in the project grew.
                  </p>
              </CardBody>
              <Divider/>
              <CardFooter className="justify-between">
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal3.onOpen}>Learn More</Button>
                  <Modal className="max-h-[90%] overflow-scroll" size="4xl"isOpen={modal3.isOpen} onOpenChange={modal3.onOpenChange}>
                    <ModalContent>
                      <ScrollShadow className="w-[100%] h-[40%]" size={50}>
                          <ModalHeader className="flex flex-col gap-1">Chess AI - Alpha Beta Pruning</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">I created a basic chess AI using alpha beta pruning. I chose alpha beta pruning due to its speed and limiting the 
                    search space while giving an optimal move. I limited the depth due to the high branching factor of chess, so the AI relied heavily on my 
                    heuristics. In this sense it is closer to a pruning limited depth greedy algorithm. I was successfully run a game between two of these AI 
                    algorithms, but they would produce the same output due to both choosing the 'best' option avalible.
                            </p>
                            <p className=""><b>Tools used:</b><br/>Python3<br/>
                            </p>
                            
                            <img className="object-scale-down w-full max-w-3xl" src="/src/img/chessai-table.png"/>
                            <img className="object-scale-down w-full max-w-sm" src="/src/img/chessai-result.png"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/481Final">Chess AI</Link>
                            </ModalFooter>
                      </ScrollShadow>
                  </ModalContent>
                </Modal>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/481Final">Chess AI</Link>
                </CardFooter>
            </Card>
          
          {/* Project */}
            <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">SFT - Simple Fitness Tracker</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">The final project for my software development course. This course was focused on the process
                    and design of the software rather than the final outcome.
                  </p>
              </CardBody>
              <Divider/>
              <CardFooter className="justify-between">
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal4.onOpen}>Learn More</Button>
                  <Modal className="max-h-[90%] overflow-scroll" size="4xl"isOpen={modal4.isOpen} onClose={modal4.onClose}>
                    <ModalContent>
                      <ScrollShadow className="w-[100%] h-[40%]" size={50}>
                          <ModalHeader className="flex flex-col gap-1">SFT - Simple Fitness Tracker</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">A simple fitness tracker for IOS was the project my group chose as the course long design project. We kept the 
                              application simple as to focus on the goal of the course. We developed many design documents such as database schema, UML diagrams, and 
                              use case diagrams.
                            </p>
                            <p className=""><b>Tools used:</b><br/>XCode<br/>SwiftUI<br/>Core Data
                            </p>
                            <img className="object-scale-down max-h-[50%]" src="/src/img/SFT_Graph.png"/>
                            <img className="object-scale-down w-full max-h-xl" src="/src/img/SFT_Page.png"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/SFT">SFT - Simple Fitness Tracker</Link>
                            </ModalFooter>
                      </ScrollShadow>
                  </ModalContent>
                </Modal>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/SFT">SFT - Simple Fitness Tracker</Link>
                </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Basic FTP Server</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">A file transfer server allowing for uploading and downloading.</p>
              </CardBody>
              <Divider/>
              <CardFooter className="justify-between">
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal5.onOpen}>Learn More</Button>
                  <Modal className="max-h-[90%] overflow-scroll" size="4xl"isOpen={modal5.isOpen} onClose={modal5.onClose}>
                    <ModalContent>
                      <ScrollShadow className="w-[100%] h-[40%]" size={50}>
                          <ModalHeader className="flex flex-col gap-1">Basic FTP Server</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">A file transfer server created for the final of a network communications course. The server handles all file types and 
                              tries maximum data throughput with tcp packets. The server also has error handling.
                            </p>
                            <p className=""><b>Tools used:</b><br/>Python3<br/>
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/ftp_server.png"/>
                            <p className="text-center"><i>Sever</i></p>
                            <img className="w-full max-w-3xl" src="/src/img/ftp_client.png"/>
                            <p className="text-center"><i>Client</i></p>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/471_Group_Project">Basic FTP Sever</Link>
                            </ModalFooter>
                      </ScrollShadow>
                  </ModalContent>
                </Modal>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/471_Group_Project">Basic FTP Sever</Link>
                </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Basic Compiler</h1>
                  <p className="card-date">May 2023</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">A basic compiler that translates text into c++ readable code. I designed a predictive parsing table 
                              to translate this text. </p>
              </CardBody>
              <Divider/>
              <CardFooter className="justify-between">
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal6.onOpen}>Learn More</Button>
                  <Modal className="max-h-[90%] overflow-scroll" size="4xl"isOpen={modal6.isOpen} onClose={modal6.onClose}>
                    <ModalContent>
                      <ScrollShadow className="w-[100%] h-[40%]" size={50}>
                          <ModalHeader className="flex flex-col gap-1">Basic Compiler</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">A basic compiler that translates text into c++ readable code. I designed a predictive parsing table 
                              to translate this text. The original language only used the letters p, q, r, and s. The compiler removes comments and whitespace, 
                              then tokenizes the text. Then the tokens are pushed through the predictive parsing table to generate the equivalent C++ code. The 
                              compiler has basic error messages.
                            </p>
                            <p className=""><b>Tools used:</b><br/>C++<br/>
                            </p>
                            <img className="object-scale-down w-full max-w-3xl" src="/src/img/Compiler_before.png"/>
                            <p className="text-center"><i>Original Text</i></p>
                            <img className="object-scale-down w-full max-w-3xl" src="/src/img/Compiler_after.png"/>
                            <p className="text-center"><i>Translated to C++</i></p>
                            <img className="object-scale-down w-full max-w-3xl" src="/src/img/Compiler_grammr.png"/>
                            <p className="text-center"><i>Language Grammer</i></p>
                            <img className="object-scale-down w-full max-w-3xl" src="/src/img/Compiler_ppt.png"/>
                            <p className="text-center"><i>Predictive Parsing Table</i></p>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/CPSC323_Final">Basic Compiler</Link>
                            </ModalFooter>
                      </ScrollShadow>
                  </ModalContent>
                </Modal>
                <Link isExternal showAnchorIcon href="https://github.com/KyleParato/CPSC323_Final">Basic Compiler</Link>
                </CardFooter>
            </Card>
        </div>
        
        </div>
      </section>
    </DefaultLayout>
  );
}
