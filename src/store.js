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
    ]
});