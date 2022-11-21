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
                        <h2><span class="ms_evidence">Team</span> of Experts</h2>
                        <p>Ethnics and integrity are the bases on which our professionals build their careers. They are fundamentals that became daily attitudes.</p>
                    </div>
    
                    <div class="team row row-cols-2 g-5">
                        <div class="col d-flex">
                            <div class="pic">
                                <img src="../assets/img/team-1.jpg" alt="CEO">
                            </div>
                            <div class="team_mate">
                                <h4>David Cooper</h4>
                                <h6>CEO & CO-FOUNDER</h6>
                                <div class="social d-flex">
                                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="col d-flex">
                            <div class="pic">
                                <img src="../assets/img/team-3.jpg" alt="CEO">
                            </div>
                            <div class="team_mate">
                                <h4>Oliver Jones</h4>
                                <h6>CHEF PROCUREMENT</h6>
                                <div class="social d-flex">
                                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="col d-flex">
                            <div class="pic">
                                <img src="../assets/img/team-2.jpg" alt="CEO">
                            </div>
                            <div class="team_mate">
                                <h4>Emma Lopez</h4>
                                <h6>CHIEF MARKETING</h6>
                                <div class="social d-flex">
                                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="col d-flex">
                            <div class="pic">
                                <img src="../assets/img/team-4.jpg" alt="CEO">
                            </div>
                            <div class="team_mate">
                                <h4>T. Johnson</h4>
                                <h6>CEO & PRESIDENT</h6>
                                <div class="social d-flex">
                                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                                <a href=""><i class="fa-brands fa-twitter"></i></a>
                                <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="ms_col_40 d-flex align-items-end my-2">
                    <div class="ms_speech">
                        <h4 class="pb-3">President Speech</h4>
                        <p>Lorem, ipsum dolor sit amet, consectetur soluta adipisicing elit. Lorem ipsum dolor sit.</p>
                        <p>Quia sit doloribus assumenda laboriosam, aliquam quasi id eveniet aliquid cum soluta! Provident sequi accusamus nostrum, quas officiis, harum suscipit eum eveniet architecto velit autem.</p>
                        <p>Itaque, velit autem. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <span class="d-flex justify-content-between">
                            <span> <strong>T. Johnson</strong> </span>
                            <i class="fa-solid fa-quote-right"></i>                    
                        </span>
                    </div>
                </div>
            </div>
    </section>
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

section{
    background-color: $bg-color;
    color:$text-color;
    p, .team h6{
        color:$text-color-soft;
    }

    .ms_col_60{
        width: 60%;
        .pic{
            width: 35%;
            img{
                border-radius: 5px;
            }
        }
        .team_mate{
            margin-left: 1rem;
            h4{
                font-weight: 800;
            }
            h6{
                font-weight: 300;
            }
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin: 1rem .5rem 0 0;
                background-color: $bg_evidence;

                &:hover i{
                    color: $bg-very-soft;
                }
            }
            i{
                color: $text_color_special;
            }
        }
    }
    .ms_col_40{
        width: 40%;
        justify-content: flex-end;

        .ms_speech{
            width: 75%;
            background-color: rgb(23, 141, 141);
            border-radius: 5px;
            padding: 2rem;
            
            span i{
                color: $bg-dark-green ;
                font-size: 2rem;
            }
            
        }
    }
}

//RESPONSIVE

@media screen and (max-width: 1240px){
    #team .container{
        flex-direction: column;

        .ms_col_60 {
        width: 100%;
            .pic{
                min-width: 45%;
            }
            .team_mate{
                a{
                    width: 15px;
                    height: 15px;
                }
            }
        }
        .ms_col_40{
            width: 100%;
            justify-content: center;
            .ms_speech{
                margin-top: 1rem;
                width: 100%;
            }
        }

    }
}

</style>