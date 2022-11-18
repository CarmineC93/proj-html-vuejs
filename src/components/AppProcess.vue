<script>

export default{
    name : "AppProcess"
}

</script>

<template>
    <section class="py-5" id="process">
        <div class="ms_hhp text-center pb-3">
            <h6>How it works in practice</h6>
            <h2>Process Management</h2>
            <p>We work with innovative methodologies to ensure that the entire reformatting precess is done form start to finish as planned.</p>
        </div>

        <div class="ms_large_void">
            <div class="ms_liner"></div>
            <div class="row">
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">01</span>
                    <span>
                        <h5>Collection of information</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">02</span>
                    <span>
                        <h5>Strategic planning</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">03</span>
                    <span>
                        <h5>Assignment of responsibilities</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">04</span>
                    <span>
                        <h5>Formatting process</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div class="col item text-center">
                    <div class="ms_liner"></div>
                    <span class="ms_ball">05</span>
                    <span>
                        <h5>Continuity formalization</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>


            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
#process{
    .ms_hhp{
        width: 50%;
        margin: 0 auto;
    }
    
    .ms_liner{
        width: 100%;
        height: 4px;
        background-color: aquamarine;
        position: absolute;
        top: 20px;
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
                    background-color: aquamarine;
                    position: relative;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    padding: 7px;
                    z-index: 5;
                }
                p{
                    line-height: 1.4rem;
                }
            }
        }
    }

}

</style>