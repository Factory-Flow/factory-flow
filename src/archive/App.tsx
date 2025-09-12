
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import {Accordion, AccordionItem} from "@heroui/accordion";
import { Chip } from "@heroui/chip";
import {Navbar} from './navbar';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
import { Input, Textarea }  from '@heroui/input';
import { Select, SelectItem } from '@heroui/select';
import { Check } from '@mui/icons-material';

import './App.css';


const factoryFlowURL = import.meta.env.VITE_APP_URL || "/";
const docsURL = import.meta.env.VITE_DOCUMENTATION_URL || "/";

export const requestTypes = [
  {key: "general", label: "General Inquiry"},
  {key: "tecnhical", label: "Technical Support"},
  {key: "feature", label: "Feature Request"},
  {key: "feedback", label: "Feedback/Bug Report"},
  {key: "demo", label: "Demo Request"},
  {key: "sales", label: "Pricing Inquiry"},
  {key: "zebra", label: "Other"},

];

async function createCheckoutSession(plan: string) {
  try {
    const res = await fetch(`/api/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    });
    console.log("Response from createCheckoutSession:", res);
    if (!res.ok) throw new Error("Failed to create checkout session");
    const data = await res.json();
    if (!data.url) throw new Error("No checkout URL returned");
    return data.url;
  } catch (err) {
    // Optionally log error or show a notification
    return null;
  }
}

function App() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col w-full justify-items-center">
      
      {/* Hero Section */}
      <header className="flex flex-col items-start justify-center py-20 pl-15">

        <div className="flex flex-col md:flex-row items-center gap-8 justify-between w-full md:pl-20">
          <div className='text-left md:w-2/4 '>
            <div className='flex flex-row items-center gap-2 mb-2'>
              <Chip size="sm" variant="dot" color="secondary">
                v0.0.1
              </Chip>
              <Link to="/" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                What's new in this version? &rarr;
              </Link>
            </div>
            
            <p className="text-4xl font-bold tracking-tight text-left">
              Visualize and Monitor Your Factory in <span className="text-secondary">3D</span>
            </p>
            <p className="max-w-lg text-sm text-gray-600 dark:text-gray-300 pt-4 text-left">
            Bring your factory floor to life with real-time machine data. Drag and drop digital twins of machines and workstations, and gain instant insight into status, cycle times, utilization, and more—all in your browser!
            </p>
            <div className="mt-8 flex gap-4">
              <Button 
              size="md" 
              color='secondary' 
              variant='flat'
              as={Link}
              to={factoryFlowURL}>
                Get Started
              </Button>
              <Button
                size="md"
                variant="light"
                as={Link}
                to={docsURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden w-full md:w-1/2 h-[200px] md:h-[600px] lg:h-[600px]">
            <Image
              removeWrapper
              alt="Card background"
              className="w-full h-full object-contain object-left-middle
                         rounded-t-3xl rounded-b-none md:rounded-l-3xl md:rounded-r-none "
              src="/hero-test-3.png"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="flex flex-col items-center justify-center py-5">
        <p className="text-4xl font-bold tracking-tight pb-4">
          Features
        </p>
        <div className="flex flex-col gap-4 w-full max-w-5xl">
          {/* First Card */}
          <Card className="w-full rounded-3xl">
            <CardBody className='p-0'>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 px-5 pt-5">View and visualize your factory layout</h2>
                  <p className="text-gray-600 px-5">
                    Create a digital twin of your factory floor with intuitive drag-and-drop tools. Visualize your workflows and optimize your layout in real-time.
                  </p>
                </div>
                <div className="w-full md:w-1/3 h-48 flex items-stretch">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="w-full h-full object-cover rounded-3xl"
                    src="https://heroui.com/images/card-example-1.jpeg"
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Second Row of Cards */}
          <div className="flex flex-wrap gap-4">
            <Card className="w-full sm:w-[calc(50%-0.5rem)] rounded-3xl">
              <CardBody className='p-0'>
                <div className="flex flex-col md:flex-row items-center gap-8 md:h-72">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4 px-5 pt-5">Pre-built 3D Models</h2>
                    <p className="text-gray-600 px-5">
                      Access a vast library of 30+ 3D models, including CNC's, Robots, and more. All assets can be customized to match your factory floor.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 h-48 md:h-full flex items-stretch">
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="w-full h-full object-cover rounded-3xl"
                      src="https://heroui.com/images/card-example-2.jpeg"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="w-full sm:w-[calc(50%-0.5rem)] rounded-3xl">
              <CardBody className='p-0'>
                <div className="flex flex-col md:flex-row items-center gap-8 md:h-72">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4 px-5 pt-5">Collaborate with your team</h2>
                    <p className="text-gray-600 px-5">
                      Create an organization and invite your team members to collaborate on your factory layout. Share your designs and get feedback in real-time.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 h-48 md:h-full flex items-stretch">
                  <Image
                      removeWrapper
                      alt="Card background"
                      className="w-full h-full object-cover rounded-3xl"
                      src="https://heroui.com/images/card-example-3.jpeg"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-7">
        <p className="text-4xl font-bold tracking-tight pb-4">
          Frequently Asked Questions
        </p>
        <div className="w-full max-w-5xl">
          <Accordion variant="shadow">
            <AccordionItem key="1" aria-label="Question 1" title="Do you have a mobile app?">
              <div className="text-left text-sm">
                No – We don't offer a mobile app as Factory Flow is a web-based application. Factory Flow was built to look great on mobile and can be accessed from any device with a web browser.
              </div>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Question 2" title="Can I host my own instance of Factory Flow?">
              <div className="text-left text-sm">
                Absolutley! Factory Flow was designed to be light-weight and can be hosted on your own server. Contact us to learn more about this option. We also offer a cloud version of Factory Flow for those who prefer not to self-host.
              </div>  
            </AccordionItem>
            <AccordionItem key="3" aria-label="Question 3" title="I can't find a 3D model of a machine I need. Can I request one?">
              <div className="text-left text-sm">
                Yes! We are constantly adding new 3D assets to our library. If you can't find a model you need, please contact us and we will do our best to add it.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-5">
        <p className="text-4xl font-bold tracking-tight pb-4">
          Pricing
        </p>
        <p className="text-sm font-light tracking-tight pb-4">
          Factory Flow is free to use for individuals and small teams. For larger teams, we offer a variety of pricing plans to fit your needs. Contact us to learn more about our pricing plans.
        </p>
        <Tabs aria-label="Tabs radius" radius="sm" color='secondary' className="pb-4">
          <Tab key="monthly" title="Monthly" />
          <Tab key="annually" title="Annually" />
        </Tabs>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Card className="w-full">
            <CardBody className='p-0'>
              <div className="px-5 py-5">
                <h2 className="text-xl font-semibold mb-4">Free</h2>
                <p className="text-gray-600">Free for individuals and small teams.</p>
                <p className='text-3xl font-semibold'>$0 <span className='text-xs font-normal'>/month</span></p>
                <Button
                  size="md"
                  color="secondary"
                  variant="flat"
                  as={Link}
                  to={"/"}
                  className="w-full my-4"
                >
                  Get Started
                </Button>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Check />
                    <span className="text-sm text-gray-600">Access to all features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <span className="text-sm text-gray-600">Access to all 3D models</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody className='p-0'>
              <div className="px-5 py-5">
                <h2 className="text-xl font-semibold mb-4">Pro</h2>
                <p className="text-gray-600">Perfect for growing teams.</p>
                <p className='text-3xl font-semibold'>$49 <span className='text-xs font-normal'>/month</span></p>
                <Button
                  size="md"
                  color="secondary"
                  variant="flat"
                  className="w-full my-4"
                  onClick={async () => {
                    try {
                      const url = await createCheckoutSession("pro");
                      console.log("Checkout URL:", url);
                      //window.location.href = url;
                    } catch (err) {
                      alert("Could not start checkout. Please try again.");
                    }
                  }}
                >
                  Get Started
                </Button>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Check />
                    <span className="text-sm text-gray-600">Access to all features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <span className="text-sm text-gray-600">Priority support</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody className='p-0'>
              <div className="px-5 py-5">
                <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
                <p className="text-gray-600">Tailored for large organizations.</p>
                <p className='text-3xl font-semibold'>Custom Pricing</p>
                <Button
                  size="md"
                  color="secondary"
                  variant="flat"
                  className="w-full my-4"
                  onClick={async () => {
                    try {
                      const url = await createCheckoutSession("enterprise");
                      window.location.href = url;
                    } catch (err) {
                      alert("Could not start checkout. Please try again.");
                    }
                  }}
                >
                  Contact Us
                </Button>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Check />
                    <span className="text-sm text-gray-600">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <span className="text-sm text-gray-600">Custom integrations</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>


      <section className="flex flex-col items-center justify-center py-7">
        <p className="text-4xl font-bold tracking-tight">
          Contact Us
        </p>
        <p className="text-sm font-light tracking-tight pb-4">
          Can't find the answer you're looking for? Get in touch with us and we'll be happy to help!
        </p>
        <form className="flex flex-col gap-4 w-full max-w-md">
          <div>
            <Input label="Name" placeholder="Enter your name" type="text" />
          </div>
          <div>
            <Input label="Company" placeholder="Enter your company name" type="text" />
          </div>
          <div>
            <Select label="Request Type" placeholder="Select a request type">
              {requestTypes.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Input label="Email" placeholder="Enter your email" type="email" />
          </div>
          <div>
            <Textarea label="Message" placeholder="Enter your email"  />
          </div>
          <Button
            size="md"
            color="secondary"
            variant="flat"
            onPress={() => {
              // Collect form data
              const name = (document.querySelector('input[placeholder="Enter your name"]') as HTMLInputElement)?.value || '';
              const company = (document.querySelector('input[placeholder="Enter your company name"]') as HTMLInputElement)?.value || '';
              const requestType = document.querySelector('select')?.value || '';
              const email = (document.querySelector('input[placeholder="Enter your email"]') as HTMLInputElement)?.value || '';
              const message = (document.querySelector('textarea[placeholder="Enter your email"]') as HTMLTextAreaElement)?.value || '';

              // Construct mailto link
              const subject = encodeURIComponent("Support Request: " + requestType + " from " + window.location.href);
              const body = encodeURIComponent(
                `Name: ${name}\nCompany: ${company}\nRequest Type: ${requestType}\nEmail: ${email}\nMessage: ${message}`
              );
              const mailtoLink = `mailto:support@factoryflow.com?subject=${subject}&body=${body}`;

              // Open mailto link
              window.location.href = mailtoLink;
            }}
          >
            Submit
          </Button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
}

export default App;
