<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/happy-man-with-cash-dollars-flying-home-office-rich-from-business-online-concept_1150-4999.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Can Money Make Everyone Happy?
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
      <td class = "uppertable" ><b>A :</b></td>
      <td class = "lowertable" >People need money to make a living.
      We can buy anything with enough money.
      Without it, nobody would feel happy, because they wouldn't be able to fulfill their basic needs.
      You don't want to sleep on the streets in the cold weather.</td>
    </tr>
    <tr style="color:#1565C0;">
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >You may feel secure by having money, but money itself does not define happiness.
      Not all poor people are miserable.
      People shouldn't depend on money to be happy.
      It is only a tool that supports one's life.</td>
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
                 padding-top: 0px;
                 margin-top: 0px;">Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>living</b> 생활
        </p>
        <p>
          <b>enough</b> 충분한
        </p>
        <p>
          <b>without</b> ~ 없이
        </p>
        <p>
          <b>fulfill</b> 채우다
        </p>
        <p>
          <b>secure</b> 안심하는
        </p>
        <p>
          <b>define</b> 정의하다
        </p>
        <p>
          <b>miserable</b> 비참한
        </p>
        <p>
          <b>depend</b> 의지하다
        </p>
        <p>
          <b>tool</b> 도구
        </p>
        <p>
          <b>support</b> 유지하다.
        </p>
        <br />
        <p style="color: #56AAFF;">
          <b>make a living 생계를 유지하다 </b>
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
                 padding-top: 0px;           
                 margin-top: 0px;
                 width: 100px;">해석</h3>
      <div style="padding : 16px;">


                      <p class = "korean">
                        <b>
                        해석 돈이 모두를 행복하게 할 수 있나요?
                        </b>
                      </p>

                      <table style = "border-collapse: collapse;">

                       <tr>
                        <td class = "uppertable" ><b>A :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >사람들은 생계를 유지하기 위해 돈이 필요합니다.
                          우리는 충분한 돈으로 무엇이든 살 수 있습니다. 그것 없이는, 아무도 행복하지 않을 것입니다.
                          왜냐하면 그들은 그들의 기본적인 필요를 성취 할 수 없기 때문입니다.
                          당신은 추운 날씨에 거리에서 자고 싶지 않을 거예요.</td>
                      </tr>
                      <tr style="color:#1565C0;">
                        <td class = "uppertable" ><b>B :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >돈이 있으면 안심할 수 있지만, 돈 자체가 행복을 정의하지는 않습니다.
                          모든 가난한 사람들이 비참하지는 않습니다. 사람들은 행복하기 위해 돈에 의존해서는 안됩니다.
                          그것은 단지 자신의 인생을 지원하는 도구 일뿐입니다.</td>
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
          <li>How does money actually make people happy?</li>
          <li>What are the things that money cannot buy?</li>
          <li>Why does being rich make people happier?</li>
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
