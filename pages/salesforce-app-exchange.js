import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LeadForm from "../components/leadForm";
//import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import Head from "next/head";
import {
  FcMultipleDevices,
  FcOvertime,
  FcSafe,
  FcStatistics,
  FcWebcam,
} from "react-icons/fc";
import MyIcon from "../public/images/wave.svg";
import {
  FcAbout,
  FcBullish,
  FcCheckmark,
  FcOnlineSupport,
  FcServices,
} from "react-icons/fc";
import { SiGoogletagmanager, SiLeetcode, SiTimescale } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import ScheduleCallButton from '../components/callSchedule/ScheduleCallButton';
import CallScheduleModal from '../components/callSchedule/CallScheduleModal';

function SalesforceAppExchange() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="relative">
      <Head>
        <title>
          Trusted Salesforce AppExchange Development Company in Singapore,
          Malaysia, and India
        </title>
        <meta
          name="description"
          content="Looking for a reliable Salesforce AppExchange development company? We offer expert Salesforce AppExchange app development services in Singapore, Malaysia & India. Our certified developers can help you build custom solutions and integrations to meet your business needs."
        />
        <meta
          name="keywords"
          content="Salesforce AppExchange Development Company, Salesforce AppExchange Development Company in Singapore, Salesforce AppExchange Development Company in Malaysia, Salesforce AppExchange Development Company in India, Salesforce Appexchange App Development Services in Singapore, Salesforce Appexchange App Development Services in Malaysia, salesforce appexchange partners, Salesforce AppExchange Developers, Salesforce AppExchange Developers in Singapore, Salesforce AppExchange Developers in Malaysia"
        />
        <link
          rel="canonical"
          href="https://infodrive-solutions.com/salesforce-app-exchange.html"
        />

        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPS8R594');`,
          }}
        />
      </Head>
      <Header />
      <ScheduleCallButton text="Schedule a Call" onClick={handleOpen} />
      <CallScheduleModal open={open} handleClose={handleClose} setOpen={setOpen} />
      <motion.div
        className="sliderBox"
        initial={{ opacity: 0, scale: 0.5, left: "-100%" }}
        animate={{ opacity: 1, scale: 1, left: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="images/saas-concept-collage-min.jpg"
          alt="Android App Development Company"
        />
        <Box sx={{ flexGrow: 1 }} className="sliderContent">
          <Grid container spacing={0}>
            <Typography gutterBottom variant="h1" component="div">
              We are one of the leading <br /> Application development <br />{" "}
              companies offering <br /> unmatched business <br /> results.
            </Typography>
            <Button
              href="/contact-us.html"
              className="readmore white normalCase"
              variant="text"
            >
              Let's Talk <ArrowRightAltIcon />
            </Button>
            <nav className="socical-network">
              <List>
                <ListItem>
                  <ListItemButton
                    component="a"
                    href="https://www.facebook.com/InfoDrivesolutions/"
                  >
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component="a"
                    href="https://in.linkedin.com/company/infodrive-solutions/"
                  >
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    component="a"
                    href="https://www.instagram.com/infodrivesolutions/"
                  >
                    <ListItemIcon>
                      <InstagramIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
        </Box>
      </motion.div>
      <section className="  ">
        <div className=" w-screen h-full   text-gray-700 mx-auto md:p-10 text-sm font-medium leading-7 max-w-6xl p5">
          <p>
            As a leading{" "}
            <strong>Salesforce AppExchange App Development Company,</strong>{" "}
            infoDrive Solutions offers a wide range of services to help
            businesses leverage the power of Salesforce and drive business
            growth. Our team of Salesforce developers, designers, and project
            managers have years of experience in developing custom applications
            for businesses across a range of industries. We have successfully
            delivered projects of all sizes and complexities, from simple
            Salesforce integrations to complex custom application development.
            Our team is equipped with the skills and expertise needed to handle
            any project, big or small.
          </p>
          <br />
          <p>
            In addition to our technical expertise, we also understand the
            importance of effective communication and project management. Our
            project managers work closely with clients to ensure that projects
            are delivered on time, within budget, and to the highest standards
            of quality. We also provide regular updates and progress reports,
            ensuring that clients are always kept informed throughout the
            project lifecycle. At infoDrive Solutions, we are committed to
            providing our clients with the highest levels of customer service
            and support. Our team is always available to answer any questions or
            concerns that clients may have, and we go above and beyond to ensure
            that our clients are completely satisfied with the solutions we
            provide.
          </p>
          <br />
          <p>
            Whether you are looking to develop a custom Salesforce application,
            integrate Salesforce with other systems, or simply need expert
            advice on how to leverage the power of Salesforce to drive business
            growth, infoDrive Solutions is here to help. Contact us today to
            learn more about our services and how we can help your business
            achieve its goals.
          </p>
        </div>
      </section>
      <div className="relative ">
        {" "}
        <div class="custom-shape-divider-top-1682658498">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <section
          className=" h-[1300px] md:h-auto   bg-white pt-10 "
          style={{
            background: "linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)",
          }}
        >
          <div className=" w-screen h-full md:p-10  text-gray-700 mx-auto max-w-6xl p5">
            <h3 className="font-bold text-pink-600 text-lg ">
              Why Choose infoDrive Solutions for Salesforce AppExchange
              Development Services?
            </h3>
            <p className=" text-gray-700 mt-1 p-2 text-sm leading-7 font-medium">
              When it comes to Salesforce AppExchange Development, businesses
              need a partner they can trust to deliver high-quality
              <br /> solutions that meet their specific requirements. Here are
              just a few reasons why businesses choose infoDrive Solutions:
            </p>
            <div className="card flex md:flex-row flex-col md:gap-10 gap-5 mt-10 md:w-[100%]  text-base ">
              <div className="cardSale p-7 md:leading-7 text-sm">
                Experienced Salesforce Developers: Our team of Salesforce
                developers has a wealth of experience in developing custom
                applications on the Salesforce platform. We have worked on
                projects of all sizes and complexities, and are equipped to
                handle any project, big or small.
              </div>
              <div className="cardSale p-7 md:leading-7 text-sm">
                Customized Solutions: We believe that every business is unique,
                which is why we take a customized approach to Salesforce
                AppExchange development. We work closely with clients to
                understand their specific business needs and create tailored
                solutions that meet their exact requirements.
              </div>
              <div className="cardSale p-7 md:leading-7 text-sm">
                Proven Track Record: Our team has a proven track record of
                delivering high-quality Salesforce AppExchange solutions that
                drive business growth. We have worked with businesses of all
                sizes, from small startups to large enterprises, and have helped
                them to achieve their business goals
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="heroParagraph  h-max">
        <div
          className="outerdrid grid grid-cols-1 gap-16 md:p-10 text-white p5"
          style={{ background: "rgb(42, 40, 42)" }}
        >
          <div className=" w-screen h-full md:p-10 p-5  text-yellow-100 mx-auto max-w-6xl ">
            <p>
              We offer a comprehensive range of Salesforce AppExchange app
              development services to help businesses leverage the power of the
              Salesforce platform. Here are just a few of the services we offer:
            </p>
          </div>
          <div className="inner  h-max grid md:grid-cols-2 grid-cols-1 gap-x-5 ">
            <div className="content  h-1/2">
              <h3 className="text-pink-600 mb-2">
                Custom Salesforce App Development:{" "}
              </h3>
              <div className="shadow-lg  p-10 ">
                Our team of experienced Salesforce developers can help you
                create custom applications on the Salesforce platform that meet
                your specific business needs.
              </div>
              <div className=" mt-20">
                <h3 className="text-pink-600 mb-2">
                  {" "}
                  Salesforce Integration Services:
                </h3>
                <div className="shadow-lg  p-10">
                  We can help you integrate Salesforce with other systems and
                  applications to streamline your business processes and improve
                  operational efficiency.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-8 grid-rows-8 row gap-0 mb-10 mt-5 md:mt-0">
              <img
                className="img4 h-full w-full rounded-md shadow-md object-cover"
                src="/images/cloud-computing-concept_24908-55295.jpeg"
                alt="saleforce"
              />
              <img
                className="img h-full w-full rounded-md shadow-md object-cover"
                src="/images/hand-drawn-flat-design-crm-illustration_23-2149379498.jpeg"
                alt="Saleforce"
              />
              <img
                className="img5 h-full w-full z-10 rounded-md shadow-md object-cover"
                src="images/img3.png"
                alt="saleforce"
              />
            </div>
          </div>
          <div className="inner  h-max  grid md:grid-cols-2 grid-cols-1 gap-x-5 object-cover">
            <div className="content  h-1/2">
              <h3 className="text-pink-600 mb-2">
                Salesforce Consulting Services:{" "}
              </h3>
              <div className="shadow-lg  p-10 ">
                Our team of Salesforce experts can provide you with expert
                advice on how to leverage the power of Salesforce to drive
                business growth.
              </div>
              <div className=" mt-20">
                <h3 className="text-pink-600 mb-2">
                  {" "}
                  Salesforce Support and Maintenance Services:
                </h3>
                <div className="shadow-lg  p-10">
                  We offer ongoing support and maintenance services to ensure
                  that your Salesforce applications are always up-to-date and
                  running smoothly.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-8 grid-rows-8 row gap-0 md:-mt-36 mt-5">
              <img
                className="img4 h-full w-full rounded-md shadow-md object-cover"
                src="images/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpeg"
                alt="customer releationship management"
              />
              <img
                className="img h-full w-full rounded-md shadow-md object-cover"
                src="images/customer-relationship-management-concept_23-2150038418.jpeg"
                alt="CRM"
              />
              <img
                className="img5 h-full w-full rounded-md shadow-md object-cover"
                src="images/html-css-collage-concept-with-person_23-2150061967.jpeg"
                alt="saleforce"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="feature p5">
        <h2 className="text-center font-bold text-blue-950 text-2xl mt-20 max-w-5xl mx-auto">
          Why Choose infoDrive Solutions for Salesforce AppExchange Development
          ?
        </h2>

        <p className="mt-5 text-gray-400 text-center mx-auto max-w-6xl">
          At infoDrive Solutions, we are committed to providing high-quality
          Salesforce AppExchange app development services to businesses in
          Singapore, Malaysia, and India. Here are just a few reasons why you
          should choose us as your Salesforce AppExchange development partner:
        </p>
        <hr className="hover:max-w-3xl border mx-auto mt-3 border-blue-700 rounded-md shadow-sm max-w-lg transition-all ease-linear " />
        <div className="max-w-6xl mx-auto mt-10 mb-5">
          <div className="flexbox md:grid grid-cols-2 items-center gap-y-5 gap-x-3">
            <article className="item mb-5">
              <div className="item1 flex flex-col gap-5 text-gray-800 ">
                <div className="flex gap-2 items-center">
                  <FcOvertime size={32} />
                  <h3 className="text-pink-600 font-bold">Experienced Team:</h3>
                </div>

                <p className="content">
                  Our team of Salesforce developers has a wealth of experience
                  in developing custom applications on the Salesforce platform.
                  We have worked with businesses across a wide range of
                  industries, and have the expertise to deliver solutions that
                  meet your specific requirements.
                </p>
              </div>
            </article>
            <article className="item mb-5">
              <div className="item1 flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                  <FcMultipleDevices size={32} />
                  <h3 className="text-pink-600 font-bold">
                    Customized Solutions:
                  </h3>
                </div>

                <p className="content">
                  We take a customized approach to Salesforce AppExchange
                  development, working closely with clients to understand their
                  unique business needs and create tailored solutions that meet
                  their exact requirements.
                </p>
              </div>
            </article>
            <article className="item mb-5">
              <div className="item1 flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                  <FcWebcam size={32} />
                  <h3 className="text-pink-600 font-bold">
                    Proven Track Record:
                  </h3>
                </div>

                <p className="content ">
                  Our team has a proven track record of delivering high-quality
                  Salesforce AppExchange solutions that drive business growth.
                  We have helped businesses of all sizes to achieve their
                  business goals, and we can do the same for you.
                </p>
              </div>
            </article>
            <article className="item mb-5">
              <div className="item1 flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                  <FcStatistics size={32} />
                  <h3 className="text-pink-600 font-bold">
                    Competitive Pricing:
                  </h3>
                </div>

                <p className="content">
                  Ready to get started on your Salesforce AppExchange
                  development project? Contact us today to learn more about our
                  services and how we can help your business grow. Our team is
                  here to answer any questions you may have and provide you with
                  a customized solution that meets your specific needs.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </div>
  );
}

export default SalesforceAppExchange;
