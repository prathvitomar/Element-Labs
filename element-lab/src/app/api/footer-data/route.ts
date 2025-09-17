import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "Element Labs",
        tagline: "and Engineering Services.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/in"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com"
            }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" },
            // { name: "Work", url: "/#work" },
            { name: "Services", url: "/#services" },
            // { name: "Pricing", url: "/#pricing" }
        ]
    },
    // otherPages: {
    //     name: "Other Pages",
    //     links: [
    //         { name: "Error 404", url: "/not-found" },
    //         { name: "Terms & Conditions", url: "/terms-and-conditions" },
    //         { name: "Privacy Policy", url: "/privacy-policy" },
    //         { name: "Documentation", url: "/documentation" }
    //     ]
    // },
    contactDetails: {
        name:"Contact Details",
        address: "Office number : 307, 308 - 3rd floor Unitech Business Zone, Nirvana Country Sector 50, Gurugram Haryana",
        email: "sarang.sharma@elementlabs.in",
        phone: "+91 9589977911"
    },
    copyright: "©2025 Element Labs. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};