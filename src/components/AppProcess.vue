<script>

export default{
    name : "AppProcess"
}

</script>

<template>
    <section class="py-5" id="process">
        <div class="ms_hhp text-center pb-3">
            <h6>How it works in practice</h6>
            <h2><span class="ms_evidence_light">Process</span>&nbsp;Management</h2>
            <p>We work with innovative methodologies to ensure that the entire reformatting precess is done form start to finish as planned.</p>
        </div>

        <div class="ms_large_void pb-3">
            <div class="ms_first_liner"></div>
            <div class="row">
                <div class="col item text-center">
                    <div class="ms_liner ms_fragile"></div>
                    <span class="ms_ball">01</span>
                    <span>
                        <h5 class="py-2"><strong>Collection of information</strong></h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">02</span>
                    <span>
                        <h5 class="py-2"><strong>Strategic planning</strong></h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">03</span>
                    <span>
                        <h5 class="py-2"><strong>Assignment of responsibilities</strong></h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">04</span>
                    <span>
                        <h5 class="py-2"><strong>Formatting process</strong></h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner ms_fragile"></div>
                    <span class="ms_ball">05</span>
                    <span>
                        <h5 class="py-2"><strong>Continuity formalization</strong></h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>


            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

#process{
    p{
        color:$text-color-grey;
    }
    .ms_hhp{
        width: 50%;
        margin: 0 auto;
    }
    
    .ms_liner, .ms_first_liner{
        width: 100%;
        height: 4px;
        background-color: $bg-evidence-light;
        position: absolute;
        top: 23px;
    }
    
    .ms_large_void{
        position: relative;
        line-height: 50px;
        .row{
            width: 80%;
            max-width: 1500px;
            margin: 0 auto;
            .col{
                position: relative;
                .ms_ball{
                    background-color: $bg-evidence-light;
                    position: relative;
                    border-radius: 50%;
                    padding: 8px 9px;
                    z-index: 5;
                    color: $text-color-special;
                    font-weight: 800;
                }
                &:hover span{
                    color: rgb(81, 165, 145);
                }
                p{
                    line-height: 1.4rem;
                }
            }
        }
    }

}

@media screen and (max-width:475px){
    #process .ms_hhp {
        width: 70%;
        h2{
            font-size: 1.5rem;
        }
    }
    #process .ms_liner {
    left: 0px;
    transform: rotate(90deg);
    }
    .ms_large_void .ms_first_liner{
        display: none;
    }
    .row {
        flex-direction: column;
        .item span{
            position: relative;
            z-index: 30;
                p{
                position: relative;
                z-index: 30;
                padding: 0.5rem;
                background-color: rgb(119 239 214 / 14%);
                border-radius: 5px;
                box-shadow: 0px 10px 23px 3px #888888;
            }
        }
        .ms_fragile{
            display: none;
        }
    }
}

// RESPONSIVE

@media screen and (max-width: 767px){
    #process .ms_hhp {
        width: 70%;
        h2{
            font-size: 2rem;
        }
} }

</style>