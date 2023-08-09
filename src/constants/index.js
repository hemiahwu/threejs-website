import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "关于我们",
  },
  {
    id: "work",
    title: "工作经历",
  },
  {
    id: "contact",
    title: "联系我们",
  },
];

const services = [
  {
    title: "前端开发工程师",
    icon: web,
  },
  {
    title: "跨平台开发工程师",
    icon: mobile,
  },
  {
    title: "后端开发工程师",
    icon: backend,
  },
  {
    title: "AI智能开发",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    href: "https://study.163.com/course/courseMain.htm?share=2&shareId=400000000198054&courseId=1212312801&_trace_c_p_k2_=8a0bde46ee564b7599e6a5acaf1c1b23",
  },
  {
    name: "CSS 3",
    icon: css,
    href: "https://study.163.com/course/courseMain.htm?share=2&shareId=400000000198054&courseId=1212312801&_trace_c_p_k2_=8a0bde46ee564b7599e6a5acaf1c1b23",
  },
  {
    name: "JavaScript",
    icon: javascript,
    href: "https://study.163.com/course/courseMain.htm?share=2&shareId=400000000198054&courseId=1004901002&_trace_c_p_k2_=29b7c5a5943243f8a942db6ec4f1d9ee",
  },
  {
    name: "TypeScript",
    icon: typescript,
    href: "",
  },
  {
    name: "React JS",
    icon: reactjs,
    href: "",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    href: "",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    href: "",
  },
  {
    name: "Node JS",
    icon: nodejs,
    href: "",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    href: "",
  },
  {
    name: "Three JS",
    icon: threejs,
    href: "",
  },
  {
    name: "git",
    icon: git,
    href: "",
  },
  {
    name: "figma",
    icon: figma,
    href: "",
  },
  {
    name: "docker",
    icon: docker,
    href: "",
  },
];

const experiences = [
  {
    title: "前端开发工程师",
    company_name: "阿里巴巴",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2020.3 - 2021.4",
    points: [
      "使用React.js和其他相关技术开发和维护网络应用程序.",
      "与跨职能团队合作，包括设计师、产品经理和其他开发人员，共同创建高质量的产品.",
      "实现响应式设计并确保跨浏览器兼容性.",
      "参与代码审查，并向其他开发人员提供建设性的反馈.",
    ],
  },
  {
    title: "跨平台开发工程师",
    company_name: "腾讯",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021.1 - 2022.2",
    points: [
      "使用React.js和其他相关技术开发和维护网络应用程序.",
      "与跨职能团队合作，包括设计师、产品经理和其他开发人员，共同创建高质量的产品.",
      "实现响应式设计并确保跨浏览器兼容性.",
      "参与代码审查，并向其他开发人员提供建设性的反馈.",
    ],
  },
  {
    title: "前端开发工程师",
    company_name: "字节跳动",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022.1 - 2023.2",
    points: [
      "使用React.js和其他相关技术开发和维护网络应用程序.",
      "与跨职能团队合作，包括设计师、产品经理和其他开发人员，共同创建高质量的产品.",
      "实现响应式设计并确保跨浏览器兼容性.",
      "参与代码审查，并向其他开发人员提供建设性的反馈.",
    ],
  },
  {
    title: "全栈开发工程师",
    company_name: "京东",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023.1 - 至今",
    points: [
      "使用React.js和其他相关技术开发和维护网络应用程序.",
      "与跨职能团队合作，包括设计师、产品经理和其他开发人员，共同创建高质量的产品.",
      "实现响应式设计并确保跨浏览器兼容性.",
      "参与代码审查，并向其他开发人员提供建设性的反馈.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "我曾以为要做出一个和我们的产品一样美丽的网站是不可能的，但是老吴证明了我错了.",
    name: "李老板",
    designation: "技术总监",
    company: "阿里巴巴",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "我从未见过像老吴这样真心关心客户用户体验的网页开发者.",
    name: "宋老板",
    designation: "技术总监",
    company: "腾讯",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "在老吴优化我们的网站后，我们的流量增加了50%。我们对他们感激不尽!",
    name: "王老板",
    designation: "技术总监",
    company: "字节跳动",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "老张",
    description:
      "这是一个基于网络的平台，允许用户从多个提供商那里搜索、预订和管理租车服务，为满足交通需求提供了便捷高效的解决方案.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "老赵",
    description:
      "这是一个网络应用程序，使用户能够搜索职位空缺、查看职位的预估薪资范围，并根据当前位置找到可用的工作.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "老董",
    description:
      "这是一个综合性的旅行预订平台，允许用户预订航班、酒店和租车服务，并提供受欢迎目的地的精心推荐.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
