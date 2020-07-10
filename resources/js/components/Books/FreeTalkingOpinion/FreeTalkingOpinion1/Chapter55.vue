<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/group-casually-dressed-business-people-discussing-ideas-office_7861-1633.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Spontaneous Action Versus Planned Action
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
      <td class = "lowertable" >Spontaneous actions are well received by people because they feel more genuine than actions that are planned in advance. When you rehearse something too much, it becomes stale, especially for performers.</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>Tom :</b></td>
      <td class = "lowertable" >Planned actions are needed because of organizational and safety reasons. For example, an important speech needs thorough planning to be effective. For athletes and performers, improvisation can be risky and cause harm.</td>
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
          <b>well received 잘 받아들여지는 </b>
        </p>
        <p>
          <b>genuine 진실한 </b>
        </p>
        <p>
          <b>in advance 미리</b>
        </p>
        <p>
          <b>rehearse 연습[준비]하다 </b>
        </p>
        <p>
          <b>stale 신선하지 않은 </b>
        </p>
        <p>
          <b>organizational 조직의 </b>
        </p>
        <p>
          <b>thorough 철저한 </b>
        </p>
        <p>
          <b>effective 효과적인 </b>
        </p>
        <p>
          <b>improvisation 즉흥 </b>
        </p>
        <p>
          <b>risky 위험한 </b>
        </p>
        <p>
          <b>harm 해 </b>
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
            <td class = "lowertable" >즉흥적인 행동은 미리 계획된 행동보다 더 진실한 느낌을 주기 때문에 사람들에게 잘 받아들여져. 어떤 것을 너무 많이 준비하면, 특히 연기자들의 경우에 신선하지 않게 돼.</td>
          </tr>
          <tr>
            <td class = "uppertable" ><b>탐 :</b></td>
            <td class = "lowertable" >조직적이고 안전상의 이유로 계획된 행동이 필요해. 예를 들어, 중요한 연설은 효과가 있기 위해 철저한 계획이 필요하지. 운동선수와 연기자들에게 즉흥으로 하는 것은 위험하고 해를 끼칠 수 있어.</td>
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
