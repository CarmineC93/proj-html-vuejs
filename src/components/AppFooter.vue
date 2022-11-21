<script>

export default{
    name : "AppFooter"
}
</script>

<template>
    <footer class="pt-5">
        <div class="ms_top_footer py-5">
            <div class="container">
                <div class="row">
                    <div class="col">

                        <div class="logo-footer mt-2">
                            <h6><span class="green_space">NEX</span><span>GEN</span></h6>
                         </div>
                         <p class="py-3">A Functional HTML Template for Corporate & Business</p>

                        <div class="contacts">
                            <div>
                                <p><i class="fa-solid fa-phone"></i> +1(305) 1234-5678</p>
                            </div>
                            <div>
                                <p><i class="fa-solid fa-envelope"></i> hello@example.com</p>
                            </div>
                            <div>
                                <p><i class="fa-solid fa-location-dot"></i> Main Avenue, 987</p>
                            </div>
                        </div>
                        
                        <button class="ms_btn ms_btn_void mt-3"><a href="">GET IN TOUCH</a></button>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h4>About</h4>
                            <ul>
                                <li> 
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>The Company
                                    </a>  
                                </li>
                                <li>
                                    <a href="">                                    
                                        <i class="fa-solid fa-chevron-right"></i>Institutional
                                        </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Social & Events
                                    </a> 
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Innovation
                                    </a> 
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Environment
                                    </a> 
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Technology
                                    </a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Audit & Assurance
                                    </a> 
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Financial Advisory
                                    </a> 
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Analytics M&A
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Middle Marketing
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Legal Consulting
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Regulatory Risk
                                    </a>  
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Responsability
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Terms of Use
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>About Coockies
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Privacy Policy
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Accessibility
                                    </a>  
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-chevron-right"></i>Information
                                    </a>  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ms_sub_footer">
            <div class="container row row-cols-2">
                <div class="col">
                    <p>Enjoy the low price. We are tracking any intention of piracy.</p>
                </div>
                <div class="col d-flex justify-content-end">
                    <p>© 2020 NEXGEN is Proudly Powered by <span class="ms_green">Codings</span> </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

footer{
    background-color: #111117;
    color: $text-color-soft;
    h4, h6{
        color: $text-color;
    }
     i{
        margin-right: 0.6rem;
     }  
    .ms_top_footer{
        .card{
            height: 100%;
            background-color: $bg-footer-box;
            padding: 2rem 2rem 2rem 2.5rem;
            ul{
                margin-top: 1rem;
                font-weight: 200;
                li{
                    margin-bottom: 0.4rem;
                    i{
                        font-size: 0.9rem;
                    }
                }
            }
        }
        .ms_btn_void{
            color: $text-color;
        }
    }

    .ms_sub_footer{
        background-color: black;
        height: 65px;       
        line-height: 65px;
        vertical-align: middle;
        .col{
            padding: 0;
            p{
                margin-bottom: 0;
                font-size: 0.8rem;
                .ms_green{
                    color: $bg_button;
                }
            }
        }
    }
}


</style>