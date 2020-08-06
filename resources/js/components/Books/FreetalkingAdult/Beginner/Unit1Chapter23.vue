<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ4pAH1OY/2/screen_2x/canva-untitled-MADQ4pAH1OY.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Hobbies</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   
                     padding-top : 10px;  
                     padding-left : 10px; 
                     padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Some hobbies can actually payoff. One can make a living out of some of his hobbies. For instance, because I really like shopping, I have been hired by my neighbor Mrs. Sue to be her personal shopper. I also like to walk my dog in the park so she also pays me to walk her dogs for $50 per month occasionally. Since last year, I have been making some cash out of baking too! I often like to bake cupcakes and other pastries. One day I gave a box of pastries to my manager and she encouraged me to open my own shop. Now, I am running a small cafe in our neighborhood!
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">

<br>

<li style="list-style-type: none;"><u>Pay off(v)</u> - to be successful or profitable <span class = "korean">급료 지불, 청산</span>
</li>

<li style="list-style-type: none;"><u>For instance(n)</u> - for example <span class = "korean">예를 들어</span>
</li>

<li style="list-style-type: none;"><u>Make a living (v)</u> - to earn money <span class = "korean">생계를 꾸리다</span>
</li>

<li style="list-style-type: none;"><u>Pastry (n)</u> -  sweet baked food <span class = "korean">페이스트리 반죽, 페이스트리</span>
</li>

<li style="list-style-type: none;"><u>Encourage (v)</u> - give someone hope or confidence <span class = "korean">격려[고무]하다, 용기를 북돋우다, 권장[장려]하다</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>In the future, your studies can really ________ especially when you find a good job.
  </li>

  <li>I _________ you to keep learning English. You can do it!
  </li>

  <li>If you eat too much ________ you can get a toothache.
  </li>

  <li>You should try to _________ before having your own family.
  </li>

  <li> Italian dishes are popular; _________, spaghetti, pizza, and lasagna are known all over the world.
  </li>

</ol>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>How can some hobbies pay off?
</li>

<li>Why was she hired to be Mrs. Sue’s personal shopper?
</li>

<li>How much does she earn by walking her neighbors’ dogs?
</li>

<li>What has she done since last year?
</li>

<li>How did she get to run a small café?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;" class = "korean">
  <p>어떤 취미들은 실제로 성과를 낼 수 있다. 사람은 취미 생활로 생계를 유지할 수 있다. 예를 들어, 나는 쇼핑을 정말 좋아하기 때문에 이웃집 아주머니 Sue의 쇼핑 상담자로 고용되었다. 나는 또한 공원에서 개를 산책시키는 것을 좋아하기 때문에 그녀는 또한 가끔 매달 50달러에 개를 산책시키도록 나에게 돈을 지불한다. 작년부터, 나는 또한 베이킹으로 돈을 벌고 있다! 나는 종종 컵케익과 다른 페이스트리를 굽는 것을 좋아한다. 어느 날 나는 매니저에게 페이스트리 한 상자를 주었고 그녀는 나에게 내 가게를 열라고 격려했다. 지금, 나는 우리 동네에서 작은 카페를 운영하고 있다!
  </p>

</div>


 </div>




       </v-layout>
     </v-container>
</div>
</template>

<script>
export default {

  props: ['fontSize'],

  data(){

    return{
      


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}


body{

  font-size: 16px;
}

</style>
