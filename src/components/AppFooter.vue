<script>

export default{
    name : "AppFooter"
}
</script>

<template>
    <footer>
        <div class="ms_top_footer">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="logo"></div>
                        <div class="contacts">
                            <div>icon teleph</div>
                            <div>icon mail</div>
                            <div>icon address</div>
                        </div>
                        <div>
                            <button>GET IN TOUCH</button>
                        </div>
                    </div>
                    <div class="col">
                        <h4>About</h4>
                        <ul>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h4>Services</h4>
                        <ul>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h4>Support</h4>
                        <ul>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                            <li>icon The Company</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="ms_sub_footer">
            <div class="container d-flex justify-content-between">
                <div>
                    <p>Enjoy the low price. We are tracking any intention of piracy.</p>
                </div>
                <div>
                    <p>icon 2020 NEXGEN is Proudly Powered by SPAN VERDE Codings</p>
                </div>
            </div>
        </div>


    </footer>

</template>

<style lang="scss" scoped>
footer{
    color: white;
    .ms_top_footer{
        // debug
        background-color: rgba(28, 26, 26, 0.837);
    }
    
    .ms_sub_footer{
            // debug
            background-color: black;
            height: 50px;
    }
}


</style>