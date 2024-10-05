import Image from "next/image"
import { CardObj } from "@/lib/types"
import React from "react"

export const heroCarouselImg = [
    {
        src: '/img/home/whatweprovide1.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide2.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide.svg',
        size: 300
    },

    {
        src: '/img/home/whatweprovide3.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide1.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide2.svg',
        size: 300
    },

]
export const serviceIntroImg = [
    {
        src: '/img/home/serviceintro.svg',
        size: 200
    },

    {
        src: '/img/home/serviceintro2.svg',
        size: 200
    },

    {
        src: '/img/home/serviceintro3.svg',
        size: 200
    },
    {
        src: '/img/home/serviceintro4.svg',
        size: 200
    },
    {
        src: '/img/home/serviceintro5.svg',
        size: 200
    },
    {
        src: '/img/home/serviceintro6.svg',
        size: 200
    },
    {
        src: '/img/home/serviceintro7.svg',
        size: 200
    },
    {
        src: '/img/home/serviceintro8.svg',
        size: 200
    },

]




export const cardData: CardObj[] = [
    {
        title: 'Personalized Solutions',
        description: 'We understand that every business is unique. Our team takes the time to thoroughly understand your specific needs, challenges, and goals. We tailor our services to provide customized solutions that drive your business forward.',
        icon: '/icon/Idea.svg'
    },
    {
        title: 'Expert Guidance',
        description: `With years of industry experience, our team of seasoned professionals offers expert guidance at every step of your business journey. We combine deep knowledge with practical insights to help you make informed decisions, optimize processes, and achieve sustainable growth. Our goal is to empower you with the tools and strategies needed to navigate challenges and seize opportunities with confidence. `,
        icon: '/icon/Guidance.svg'
    },
    {
        title: 'Proactive Risk Management',
        description: `We help you identify and mitigate potential risks before they become issues. Our proactive approach to risk
         management ensures that your business remains compliant and resilient in the face of uncertainties.`,
        icon: '/icon/Identify.svg'
    },
    {
        title: 'Transparent Communication',
        description: `We believe in open and clear communication. Throughout our engagement, 
        we keep you informed with regular updates and detailed reports. Our transparent processes build trust and ensure
         you are always aware of our progress and findings.`,
        icon: '/icon/Promotion.svg'
    },
    {
        title: 'Cutting-Edge Technology',
        description: `We leverage the latest advancements in technology to deliver innovative solutions that keep your business ahead of the curve. Our team utilizes state-of-the-art tools and platforms to streamline processes, enhance efficiency, and provide real-time insights. By embracing cutting-edge technology, we help you stay competitive in an ever-evolving marketplace, ensuring your business operates with the highest level of precision and agility.`,
        icon: '/icon/Touch.svg'
    },
    {
        title: 'Continuous Improvement',
        description: `We are committed to continuous improvement and staying ahead of industry trends.
         Our methodologies and training programs are regularly updated to incorporate the latest best practices and 
         regulatory changes, ensuring you receive the best possible service.`,
        icon: '/icon/Touch.svg'
    },
    {
        title: 'Collaborative Partnership',
        description: `We view our relationship with clients as a partnership. We work closely with your team, offering support,
         guidance, and expertise every step of the way. Your success is our priority, and we are dedicated to helping you achieve 
         your business objectives.`,
        icon: '/icon/Support.svg'
    },
    {
        title: 'Measurable Results',
        description: `Our approach is results-driven. We focus on delivering measurable improvements in compliance, efficiency,
         and financial performance. The tangible benefits we provide reflect our commitment to your business’s success.`,
        icon: '/icon/Graphic-design.svg'
    },
    {
        title: 'Unwavering Integrity',
        description: `Integrity is the cornerstone of our business. We adhere to the highest standards of ethics
         and professionalism, ensuring that our services are reliable, credible, and trustworthy.`,
        icon: '/icon/Graphic-design.svg'
    },
]

export const faqData = [
    {
        question: 'What services do you offer?',
        answer: `We offer a wide range of services to meet your business needs. Our services include business consulting, tax audit, assurance, and more.
            We tailor our services to provide customized solutions that drive your business forward.`,
    },
    {
        question: 'How do I get started?',
        answer: `Getting started is easy! Simply contact us to schedule a consultation. Our team will work with you to understand your specific needs, challenges, and goals.
            We will then develop a customized plan to address your unique requirements and help you achieve your business objectives.`,
    },
    {
        question: 'What industries do you specialize in?',
        answer: `We work with businesses across a wide range of industries, including manufacturing, retail, healthcare, technology, and more.
            Our team has the expertise and experience to provide specialized services tailored to your industry’s unique requirements.`,
    },
    {
        question: 'How can VOG Global help my business?',
        answer: `VOG Global can help your business by providing expert guidance, personalized solutions, and proactive risk management.
            Our team will work closely with you to identify and mitigate potential risks, improve compliance, and drive your business forward.`,
    },
]
export const teamData = [
    {
        image: '/img/home/meettheteam5.svg',
        title: 'UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI.',
        position: 'CEO, VOG Global',
        description: `Udo is a graduate of Economics from the University of Calabar,
         MSc in international finance and account from the University of Liverpool.
          PHD in finance from the Walden University, USA. 
          He is a practicing licenced member of the Association of National Accountants of Nigeria (ANAN), 
        a practicing licenced member of the Chartered Institute of Taxation of Nigeria (CITN) and a Fellow 
        of the Association of Chartered System Accountants (ACSA), USA.`
    },
    // {
    //     image: '/img/home/meettheteam.svg',
    //     title: 'EMMANUEL UDUMA GEORGE BSc, ACA.',
    //     position: 'Head Auditor in the Audit and Accounting Service Department, VOG Global Consult',
    //     description: `Emmanuel Uduma George is a graduate of Government and Public Administration, Abia State University, where he obtained a Bachelor of Science Degree. He is also an Associate member of the institute of Chartered Accountants of Nigeria (ICAN). He has a profound knowledge in audit system and taxation...`
    // },
    {
        image: '/img/home/meettheteam1.svg',
        title: 'ANGELA ADAMU, BSc, ACA.',
        position: 'Head the Audit and Accounting Service department, VOG Global Consult',
        description: `Angela Adamu is a graduate of Economics from Ambrose Ali University, Edo state. She is also an associate member of the Institute of Chartered Accountants of Nigeria (ICAN). She has in dept knowledge and skills in accounting system...`
    },
    {
        image: '/img/home/meettheteam2.svg',
        title: 'AJAYIOLUWANIYIMOSES, MBA, ACA, CISA, CAMS, CFLT.',
        position: 'Manager, Corporate Services and Business Development Department, VOG Global Consult',
        description: `Ajayi Oluwaniyi Moses is a young and dynamic self-motivated and result oriented person that is committed to producing result in any area or field of empowerment and high core value. He is an associate of the institute of chartered accountants of Nigeria (ICAN),a certified Anti money Laundry Specialist (CAMS), a certified Information System Auditor (CISA) and a Certified Financial Literacy Trainer (CFLT)...`
    },
    {
        image: '/img/home/meettheteam3.svg',
        title: 'IDIKA KALU IBE, FCIIN, MPA, BSc, CILRM.',
        position: 'Head of Insurance & Risk Assessment Team, VOG Global ',
        description: `Idika is a graduate of Government and Public Administration (B.Sc) Abia State University, Master of Public and International Affairs (MPIA) from the University of Lagos, Fellow Chartered Institute of Insurance Nigeria (CIIN), Associate member Chartered Institute of Loan and Risk Management (CILRM). Insurance Loss Adjuster and management expert, Train communication and Control Room professional. Idika loves God and things of the Kingdom.`
    },
    {
        image: '/img/home/meettheteam.svg',
        title: 'KALU UCHE EME, NSA, MPA, HND..',
        position: 'Head of Actuary, VOG Global Consult',
        description: `Kalu Uche Eme is an astute Statistician, he is an associate of the Nigerian Statistical Association (NSA) and having worked with several international organizations including the British Council, UNODC and others. He comes over with above 22 years of experience with statistics.`
    },
    {
        image: '/img/home/meettheteam4.svg',
        title: 'BENEDICT O. UWAOKHONYE BSc, Msc, ACIHRM.',
        position: 'Admin Officer and Head Of ICT Department, VOG Global Consult',
        description: `Benedict Uwaokhonye is a graduate of Applied Mathematics from the University of Benin, Edo state, he also is an Associate of the Chartered institute of Human Resource Managers (ACIHRM). He has Msc. in Financial Mathematics, and is in the final stage of being an associate member of the Institute of chartered accountant in Nigeria (ICAN).`
    },
   
    {
        image: '/img/home/meettheteam6.svg',
        title: 'GRACE BAIYE ONYIENEOIZA (ACA, ANIM, MBA)',
        position: 'Head of Public Relations, VOG Global Consult',
        description: `Ogbe, Esther Mofe is a graduate of Applied Microbiology and Brewing from Nnamdi Azikiwe University, Awka,Anambra State.
She is a professional accountant who is tenacious, detail-oriented and result-driven. `
    },
    {
        image: '/img/home/meettheteam6.svg',
        title: 'GRACE BAIYE ONYIENEOIZA (ACA, ANIM, MBA)',
        position: 'Head of Public Relations, VOG Global Consult',
        description: `Grace Baiye is a Chartered Accountant  with the Institute of Chartered Accountant of Nigeria(ICAN), an Associate member of Nigeria Institute of Management (NIM) with more than 5 years of experience in internal auditing, accounting, taxation, and business management across diverse industries. 

She holds her first degree in Entrepreneurship and Business Management  from Federal University of Technology(FUT) Minna Niger State and hold an MBA focusing on Entrepreneurship and Venture Creation from Bayero University Kano, Dangote Business School. 
Grace has also taken several short professional courses inorder to sharpen her as a go to expert in financial management, strategic planning, financial analysis, budgeting, internal controls and taxation.
 `
    },
    {
        image: '/img/home/meettheteam6.svg',
        title: 'Benedict Onosereme Uwaokhonye, ACA, MSc, ACIHRM',
        position: 'Head of Public Relations, VOG Global Consult',
        description: `Benedict Uwaokhonye is a highly skilled professional with a strong academic background in Applied Mathematics from the University of Benin, Edo State. He is a Chartered Accountant and an Associate member of both the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Human Resource Managers (ACIHRM). In addition, he holds a Master’s degree in Financial Mathematics, equipping him with advanced analytical and quantitative skills. With extensive expertise in computer programs and accounting software, Benedict combines technical proficiency with excellent critical thinking and problem-solving abilities. His professional development is further strengthened by a range of technology-focused certifications. Currently, he serves as the Administrative Officer and Head of the ICT Department, where he applies his knowledge to drive efficiency and innovation.`
    },
    {
        image: '/img/home/meettheteam6.svg',
        title: 'GRACE AMARACHI WILLIE – B-Tech, CNA, BDA.',
        position: 'Accountant and Tax Consultant, VOG Global Consult',
        description: `Grace is a Certified Accountant and Tax Consultant at VOG GLOBAL CONSULT with over 10 years’ experience. A Graduate of Entrepreneurship and Management Studies (B.Tech) at Federal University of Technology Minna, Niger State. A member of the Certified National Accountants of Nigeria, ANAN, Diploma in Business Development Academy HUB (BDA) and several other short professional courses.
Grace, is an enthusiastic person ready to leverage her strong analytical skills, attention to detail, knowledge of accounting principles, and practice in a challenging and dynamic environment. My drive is to contribute to the financial health of an organization by providing accurate financial record. 
`
    },
    // {
    //     image: '/img/home/meettheteam.svg',
    //     title: 'VIVIAN ENEOKAFOR BSc, CNA.',
    //     position: 'Audit and Accounting Department, VOG Global Consult',
    //     description: `Vivian Eneokafor holds a Bsc in Accounting. She is also a Certified National Accountant a certificate earned from the Association of National Accountants (ANAN). She is also a member of the Audit and Accounting Department.`
    // },
]
export const reviews = [
    {
        image: "/img/home/review.svg",
        review: "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner",
        rating: 3,
        name: "John Doe",
        reviewertitle: "CEO",
    },
    {
        image: "/img/home/review.svg",
        review: "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner",
        rating: 5,
        name: "Jane Doe",
        reviewertitle: "COO",
    },
    {
        image: "/img/home/review.svg",
        review: "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner",
        rating: 4,
        name: "Michael Smith",
        reviewertitle: "CTO",
    },
];

export const teamMembers = [
    {
        img: "/img/home/coreteam.svg",
        title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
        pos: "CEO",
    },
    {
        img: "/img/home/coreteam1.svg",
        title: "EMMANUEL UDUMA GEORGE BSc,ACA.",
        pos: "Head Auditor in the Audit and Accounting Service Department",
    },
    {
        img: "/img/home/coreteam2.svg",
        title: "ANGELA ADAMU, BSc,ACA",
        pos: "Chief Executive Officer",
    },
    // {
    //     img: "/img/home/coreteam.svg",
    //     title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
    //     pos: "CEO",
    // },
    // {
    //     img: "/img/home/coreteam.svg",
    //     title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
    //     pos: "CEO",
    // },
]