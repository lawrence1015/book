<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/woman-having-cold_23-2147934388.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Does Cold Weather Cause Colds?
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
      <td class = "lowertable" >I think cold weather causes colds. I always get sick during the winter, but I rarely get sick during the summer. I don’t know the scientific details, but there’s definitely a connection between cold weather and colds!</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>Tom :</b></td>
      <td class = "lowertable" >Only viruses can cause colds. However, cold viruses spread more easily in low temperatures. Cold weather can also weaken our immune systems. Overall, cold weather does not directly cause colds.</td>
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
          <b>cause ~을 야기하다[초래하다] </b>
        </p>
        <p>
          <b>rarely 드물게 </b>
        </p>
        <p>
          <b>scientific 과학적인 </b>
        </p>
        <p>
          <b>definitely 분명히, 틀림없이 </b>
        </p>
        <p>
          <b>connection 관련성, 연관성 </b>
        </p>
        <p>
          <b>spread 퍼지다, 확산되다 </b>
        </p>
        <p>
          <b>temperature 온도, 기온 </b>
        </p>
        <p>
          <b>weaken 약하게 만들다 </b>
        </p>
        <p>
          <b>immune system 면역 체계 </b>
        </p>
        <p>
          <b>directly 직접(적)으로 </b>
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
            <td class = "lowertable" >추운 날씨가 감기를 유발한다고 생각해. 난 겨울에는 항상 아프지만 여름에는 거의 아프지 않아. 과학적인 세부 사항은 모르지만, 추운 날씨와 감기 사이에는 분명히 연관성이 있어! </td>
          </tr>
          <tr>
            <td class = "uppertable" ><b>탐 :</b></td>
            <td class = "lowertable" >바이러스만이 감기를 일으킬 수 있어. 하지만, 감기 바이러스는 낮은 온도에서 더 쉽게 퍼져. 추운 날씨는 또한 우리의 면역 체계를 약화시킬 수 있어. 전반적으로 추운 날씨는 직접적으로 감기를 유발하지 않아.</td>
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
