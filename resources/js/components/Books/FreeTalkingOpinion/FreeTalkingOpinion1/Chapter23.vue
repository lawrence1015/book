<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/overhead-view-wooden-spoons-with-pills-isolated-white-background_23-2147883817.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Are Multivitamins Important for Good Health?
      </h1>
      </transition>
    </v-layout>
  </v-img>

  <div style=" border-color: #2F4674; border-style: solid; border-width: 2px;">
  </div>

  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Topic</h3>
  <div style = "padding : 16px; line-height: 200%;">

    <table style = "border-collapse: collapse;">

    <tr>
      <td class = "uppertable" ><b>A :</b></td>
      <td class = "lowertable" >Getting my required nutrients from a single vitamin is much easier than looking for healthy foods.
      Vitamins are helpful because most people don't have time to maintain a healthy diet.</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >Vitamins aren't a shortcut for better health.
      Vitamins don't reduce the risk for illnesses such as heart disease or cancer.
      Eating foods with omega-3 fatty acids and limiting saturated fats can.</td>
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
          <b>required 필수의</b>
        </p>
        <p>
          <b>nutrient 영양소</b>
        </p>
        <p>
          <b>maintain 유지하다</b>
        </p>
        <p>
          <b>healthy 건강한</b>
        </p>
        <p>
          <b>diet 식단</b>
        </p>
        <p>
          <b>shortcut 손쉬운 방법</b>
        </p>
        <p>
          <b>reduce 줄이다</b>
        </p>
        <p>
          <b>risk 위험</b>
        </p>
        <p>
          <b>illness 병</b>
        </p>
        <p>
          <b>fatty acid 지방산</b>
        </p>
        <p>
          <b>saturated fat 포화 지방.</b>
        </p>
        <br />
        <p style="color: #56AAFF;">
          <b>look for ~을 찾다</b>
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

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#FFE7D5">
                  <v-card-text class="px-10">
                    <p>
                        종합 비타민은 건강에 중요한가요?
                    </p>
                    <ol class="replace" type = "A" style="font-weight: bold;">
                      <li><span class = "normaltext">
                          한 개의 비타민으로부터 필요한 영양소를 얻는 것은 건강한 음식을 찾는
                          것보다 훨씬 쉬워 비타민은 대부분의 사람들이 건강한 식단을 유지할 시간이 없기 때문에 도움이 되지
                        </span>
                      </li>
                      <li><span class = "normaltext">
                          비타민은 더 나은 건강을 위한 지름길이 아니야.
                          비타민은 심장병이나 암과 같은 질병의 위험을 감소시키지 않아 오메가3 지방산이 함유된 음식을 먹고
                          포화지방을 제한해야 그것이 가능해.
                      </span>
                      </li>
                    </ol>

                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>


      </div>


    </div>


  </v-layout>
</v-container>
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

li{


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
