
<template>
  <main id="home">
    <div class="homeWrapper">
      <div class="banner">
        <img src="../assets/images/banner1.svg" alt="banner1">
        <img src="../assets/images/banner2.svg" alt="banner2">
      </div>
      <div class="text_marquee">
        <span v-for="repeat in 4">100 TEA SHOP HAVE A GOOD DAY.</span>
      </div>
      <div class="index_drinks">
        <h3>飲品系列#Drinks</h3>
        <div class="drinks_pics">
          <img src="../assets/images/uber_25blacktea.jpg" alt="25紅茶">
          <img src="../assets/images/uber_milktea.jpg" alt="奶茶">
          <img src="../assets/images/milkwintertea.png" alt="冬瓜鮮奶">
          <img src="../assets/images/milkercovercoffee.jpg" alt="奶蓋黑咖啡">
          <img src="../assets/images/uber_alltea.jpg" alt="飲料合集">
          <img src="../assets/images/puertea.jpg" alt="古樹普洱">
        </div>
      </div>
      <div class="index_news">
        <div class="newsContent">
          <h3 class="newstitle">最新消息#News</h3>
        </div>
        <div class="newspic">
          <img src="../assets/images/news1_coffee.jpg" alt="咖啡系列新聞圖">
        </div>
      </div>
      <div class="pic_marquee">
        <!-- 圖片跑馬燈 -->
      </div>
      <div class="index_about">
        <div class="about_pics">
          <img src="../assets/images/index_aboutus1.png" alt="關於我們圖1">
          <img src="../assets/images/bgwhite100.jpg" alt="100分">
          <img src="../assets/images/index_aboutus2.png" alt="關於我們圖2">
          <img src="../assets/images/bgwhite100.jpg" alt="100分">
        </div>
        <span>今天100分的一杯好茶，讓你今天100分</span>
      </div>
    </div>
    
  </main>
</template>


  <script>
  export default{
  }
  </script>
