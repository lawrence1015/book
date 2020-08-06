<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://www.limestonepostmagazine.com/wp-content/uploads/2016/06/LongExposure5.jpg" style="max-width: 100%; display:block; height: auto;">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <transition name="slide-fade">
        <h1 v-if="showTitle" style="background-color: rgb(139, 84, 63, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Rain Versus Snow
      </h1>
      </transition>
    </v-layout>
  </v-img>

  <div style=" border-color: #2F4674; border-style: solid; border-width: 2px;">
  </div>

  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Topic</h3>
  <div style = "padding : 16px; line-height: 1.6;">

    <table style = "border-collapse: collapse;">

    <tr>
      <td class = "uppertable" ><b>Jane :</b></td>
      <td class = "lowertable" >The rain can be relaxing, especially when you hear it while getting ready to sleep. On rainy days, people can enjoy indoor activities, like board games. The rain is important for many plants to flourish, too. </td>
    </tr>
    <tr style="color:#1565C0;">
      <td class = "uppertable" ><b>Tom :</b></td>
      <td class = "lowertable" >Snow is a rare sight in many places. So when it snows, it is a pleasant treat. With snow, you can make snowmen, snowballs, snow angels, and igloos. You can also go snowboarding! </td>
    </tr>

    </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #2F4674; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text"
          style="border-radius: 0px 0px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 10px;
                 padding-bottom: 10px;
                 padding-top: 5px;
                 margin-top: 0px;">Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>relaxing</b> 마음을 느긋하게 해 주는 
        </p>
        <p>
          <b>especially</b> 특히 
        </p>
        <p>
          <b>indoor</b> 실내의 
        </p>
        <p>
          <b>activities</b> 활동들 | <b>activity</b> 의 복수 
        </p>
        <p>
          <b>important</b> 중요한
        </p>
        <p>
          <b>flourish</b> 잘 자라다 
        </p>
        <p>
          <b>rare</b> 드문 
        </p>
        <p>
          <b>sight</b> (눈에 보이는) 광경[모습] 
        </p>
        <p>
          <b>pleasant</b> 쾌적한 
        </p>
        <p>
          <b>treat</b> 특별한 것 
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #2F4674; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text"
          style="border-radius: 0px 0px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 10px;
                 padding-bottom: 10px;
                 padding-top: 5px;              
                 margin-top: 0px;
                 width: 100px;">해석</h3>
      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

          <tr>
            <td class = "uppertable" ><b>제인 :</b></td>
            <td class = "lowertable" >비는 마음을 느긋하게 해 줄 수 있는데, 특히 네가 잠잘 준비를 하는 동안 (비 오는 소리를)들었을 때 마음을 느긋하게 해줘. 비가 오는 날에는 사람들은 보드 게임과 같은 실내 활동을 즐길 수 있어. 비는 많은 식물들이 잘 자라게 하기 위해서도 중요해.</td>
          </tr>
          <tr style="color:#1565C0;">
            <td class = "uppertable" ><b>탐 :</b></td>
            <td class = "lowertable" >눈은 많은 곳에서 보기 드문 광경이야. 그래서 눈이 오면 쾌적하고 특별한 거야.. 눈으로 눈사람, 눈덩이, 눈천사, 이글루를 만들 수 있어. 스노우보드 타러 갈 수도 있어!</td>
          </tr>
      
          </table>


      </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #2F4674; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text"
          style="border-radius: 0px 0px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 10px;
                 padding-bottom: 10px;
                 padding-top: 5px;
                 margin-top: 0px;">Questions</h3>
      <div style="padding : 16px;">

        <ol style="margin: 12px;">
          <li>Which do you prefer - rain or snow? Why?</li>
          <li>When do rainy days come in Korea? How about snow?</li>
          <li>What activities can you do on rainy days? How about on snowy days?</li>
        </ol>

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
      showTitle:false


    }

  },

mounted(){
  this.showTitle=true
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

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}


body{

  font-size: 16px;
}


.border {
  position: relative;
  left: 0px;
  width: 255px;
  height: 40px;
  background: #2F4674;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}
.uppertable {
  border: 0px solid #dddddd;
  text-align: left; padding: 8px;
  vertical-align:top;
  width: 0%;
  white-space: nowrap;
}

.lowertable {
border: 0px solid #dddddd;
text-align: left;
padding: 8px;
}

.normaltext {
  font-weight: normal;
}

.replace {
  counter-reset: list;
}
.replace > li {
  list-style: none;
  position: relative;
}
.replace > li:before {
  content: counter(list, upper-alpha) ":";
  counter-increment: list;
  position: absolute;
  left: -1.4em;
}

.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>
