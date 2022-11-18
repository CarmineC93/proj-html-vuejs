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
        },
    ],
    services: [
        {
            name: "Audit & Assurance",
            icon: "",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Financial Advisory",
            icon: "",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Analytics and M&A",
            icon: "",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Middle Marketing",
            icon: "",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Legal Consulting",
            icon: "",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            name: "Regulatory Risk",
            icon: "",
            url: "",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing."
        }
    ]
});