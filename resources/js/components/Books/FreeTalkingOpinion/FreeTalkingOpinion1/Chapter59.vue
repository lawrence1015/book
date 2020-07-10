<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/woman-patient-dentist_1303-9355.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Are Regular Visits to the Dentist Necessary?
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
      <td class = "uppertable" ><b>Jane :</b></td>
      <td class = "lowertable" >If you brush and floss your teeth often, they should be perfectly fine. Frequently going to the dentist is expensive and a waste of time!</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>Tom :</b></td>
      <td class = "lowertable" >Regular visits to the dentist are important to keep your teeth and gums healthy. Dentists check if there are any problems and then remove plaque and tartar. Doctors recommend going every six months, which is not difficult to do.</td>
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
          <b>brush 칫솔질을 하다 </b>
        </p>
        <p>
          <b>floss 치실질을 하다 </b>
        </p>
        <p>
          <b>often 자주 </b>
        </p>
        <p>
          <b>perfectly 완전히 </b>
        </p>
        <p>
          <b>fine 건강한 </b>
        </p>
        <p>
          <b>frequently 자주 </b>
        </p>
        <p>
          <b>expensive 비싼 </b>
        </p>
        <p>
          <b>waste 낭비 </b>
        </p>
        <p>
          <b>important 중요한 </b>
        </p>
        <p>
          <b>gum 잇몸 </b>
        </p>
        <p>
          <b>plaque 치태 </b>
        </p>
        <p>
          <b>tartar 치석 </b>
        </p>
        <p>
          <b>recommend 추천하다 </b>
        </p>
        <p>
          <b>difficult 어려운 </b>
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

        <table style = "border-collapse: collapse;">

          <tr>
            <td class = "uppertable" ><b>제인 :</b></td>
            <td class = "lowertable" >만약 네가 양치질과 치실을 자주 쓴다면, 그것들은 완벽하게 괜찮을 거야 치과에 자주 가는 것은 비싸고 시간 낭비야!</td>
          </tr>
          <tr>
            <td class = "uppertable" ><b>탐 :</b></td>
            <td class = "lowertable" >치과의사를 정기적으로 방문하는 것은 치아와 잇몸을 건강하게 유지하는 데 중요해. 치과의사들은 문제가 없는지 확인한 후 치태와 치석을 제거해. 의사들은 매 6개월 마다 가라고 추천하고 있는데, 그렇게 하는 것은 어렵지 않아</td>
          </tr>
      
          </table>


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
