import {reactive} from "vue";
export const store = reactive({
    pages: [
        {
            name: "home",
            url: "",
            active: false
        },
        {
            name: "about",
            url: "",
            active: false
        },
        {
            name: "services",
            url: "",
            active: false
        },
        {
            name: "process",
            url: "",
            active: false
        },
        {
            name: "team",
            url: "",
            active: false
        },
        {
            name: "blog",
            url: "",
            active: false
        }
    ],
    services: [
        {
            name: "Audit & Assurance",
            icon: "fa-solid fa-diagram-project",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Financial Advisory",
            icon: "fa-solid fa-briefcase",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Analytics and M&A",
            icon: "fa-solid fa-chart-simple",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Middle Marketing",
            icon: "fa-solid fa-plane",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Legal Consulting",
            icon: "fa-solid fa-globe",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Regulatory Risk",
            icon: "fa-solid fa-inbox",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        }
    ],
    articles: [
        {   
            title : "Increasing creativity is possible for everyone",
            url: "",
            img: "../assets/img/news-1.jpg",
            active: true
        },
        {   
            title : "Because market research is part of the business plan",
            url: "",
            img: "../assets/img/news-2.jpg",
            active: true
        },
        {   
            title : "Working from home is now a trend",
            url: "",
            img: "../assets/img/news-3.jpg",
            active: true
        },
        {   
            title : "water boils to 100°C",
            url: "",
            img: "../assets/img/news-4.jpg",
            active: false      
        },
        {   
            title : "Where the middle seasone gone?",
            url: "",
            img: "../assets/img/news-5.jpg",
            active: false
        },
    ]
});