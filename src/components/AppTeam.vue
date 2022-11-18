<script>

export default{
    name : "AppTeam"
}

</script>

<template>
    <section class="py-5" id="team">
        <div class="container d-flex">
            <div class="ms_col_60 d-flex flex-column">
                <div class="ms_hhp d-flex flex-column">
                    <h6>We like what we do</h6>
                    <h2>Team of Experts</h2>
                    <p>Ethnics and integrity are the bases on which our professionals build their careers. They are fundamentals that became daily attitudes.</p>
                </div>

                <div class="team row row-cols-2 g-5">
                    <div class="col d-flex">
                        <div class="pic">
                            <img src="../assets/img/team-1.jpg" alt="CEO">
                        </div>
                        <div>
                            <h5>David Cooper</h5>
                            <p>CEO & CO-FOUNDER</p>
                            <div class="social d-flex">
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex">
                        <div class="pic">
                            <img src="../assets/img/team-3.jpg" alt="CEO">
                        </div>
                        <div>
                            <h5>Oliver Jones</h5>
                            <p>CHEF PROCUREMENT</p>
                            <div class="social d-flex">
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex">
                        <div class="pic">
                            <img src="../assets/img/team-2.jpg" alt="CEO">
                        </div>
                        <div>
                            <h5>Emma Lopez</h5>
                            <p>CHIEF MARKETING</p>
                            <div class="social d-flex">
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                            </div>
                        </div>
                    </div>

                    <div class="col d-flex">
                        <div class="pic">
                            <img src="../assets/img/team-4.jpg" alt="CEO">
                        </div>
                        <div>
                            <h5>T. JOHNSON</h5>
                            <p>CEO & PRESIDENT</p>
                            <div class="social d-flex">
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                                <a href=""> icon  </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="ms_col_40 d-flex align-items-end my-2">
                <div class="ms_speech ">
                    <h4>President Speech</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sit doloribus assumenda laboriosam, aliquam quasi id eveniet aliquid cum soluta! Provident sequi accusamus nostrum, quas officiis, harum suscipit eum eveniet architecto recusandae quisquam qui rem laborum explicabo. Itaque, velit autem.</p>
                    <span>Firma  </span>
                    <i>icona</i>
                </div>
            </div>

        </div>



    </section>
</template>

<style lang="scss" scoped>
section{
    // debug
    background-color: black;
    color: white;

    .ms_col_60{
        width: 60%;

        .pic{
            width: 10%;
            width: 40%;
        }
    }
    .ms_col_40{
        width: 40%;

        .ms_speech{
            background-color: rgb(23, 141, 141);
        }
    }
}

</style>