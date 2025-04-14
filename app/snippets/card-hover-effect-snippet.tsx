// import { HoverEffect } from "@/components/ui/card-hover-effect";
// import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

// export function CardHoverEffectDemo() {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
// export const projects = [
//     {
//         icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
//         title: "Website Devlopment",
//         description:
//           "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
      
//       },
//       {
//         icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
//         title: "E-commerce Store",
//         description:
//           "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
       
//       },
//       {
//         icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
//         title: "Authentication",
//         description:
//           "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
      
//       },
//       {
//         icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
//         title: "Digital Marketing",
//         description:
//           "We offer AI-powered social media management and ad creation services — using intelligent AI tools to craft high-converting ads, engaging descriptions, and data-driven strategies to help you grow 10x and reach your ideal audience faster.",
      
//       },
//       {
//         icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
//         title: "App Development",
//         description:
//           "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
      
//       },
//       {
//         icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
//         title: "Support",
//         description:
//           "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
     
//       },
// ];






import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Devlopment",
    description: (
      <>
        We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.{" "}
        <a
        href="https://makeover-web-2.onrender.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-red-600 px-2 py-0.8 rounded hover:bg-red-700 transition"
        >
          Visit Site

        </a>
      </>
    ),
    link: "https://makeover-web-2.onrender.com", // External link for Website Development
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Digital Marketing",
    description:
      "We offer AI-powered social media management and ad creation services — using intelligent AI tools to craft high-converting ads, engaging descriptions, and data-driven strategies to help you grow 10x and reach your ideal audience faster.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
  },
];
