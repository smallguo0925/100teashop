<template>
    <div id="header">
        <div class="headerWrapper">
            <div class="logo_PC">
                <img src="../assets/images/LOGO.svg" alt="headerLogo">
            </div>
            <div class="logo_mobile">
                <img src="../assets/images/orange100.svg" alt="headerLogo">
            </div>
            <div class="hamburger">
            <!-- 漢堡選單 -->
                <li>
                    <button  class="ham_btn" @click="Openmenu()">
                        <div class="ham_btn_line"></div>
                        <div class="ham_btn_line"></div>
                        <div class="ham_btn_line"></div>
                    </button>
                </li>
            </div>
            <!-- 選單打開 -->
            <transition name="slide-up">
                <div class="hamWrapper openMenu" v-if="menuOpen">
                    <div class="menuTop">
                        <img src="../assets/images/white100.svg" alt="menulogo">
                    </div>
                    <i class="fa-solid fa-xmark fa-2x closeIcon"  @click="Openmenu()"></i>
                    <div class="menuContent">
                        <div class="ham_about ">關於我們　#About</div>
                        <div class="hamhover_about hamhover">About</div>
                        <div class="ham_news  ">最新消息　#News</div>
                        <div class="hamhover_news hamhover">News</div>
                        <div class="ham_drinks ">飲品介紹　#Drinks</div>
                        <div class="hamhover_drinks hamhover">Drinks</div>
                        <div class="ham_follow ">追蹤我們　#Follow
                            <div class="followicons">
                                <a href="https://www.facebook.com/today100points" target="_blank">
                                    <img src="../assets/images/whiteFB.svg" alt="fb_icon" >
                                </a>
                                <a href="https://www.instagram.com/100points_today_tw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                                    <img src="../assets/images/whiteIG.svg" alt="ig_icon">
                                </a>
                            </div>
                        </div>
                        <div class="hamhover_follow hamhover">Follow</div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        }
    },
    methods: {
        Openmenu(){
            this.menuOpen=!this.menuOpen
            
        }
    },
}
</script>
