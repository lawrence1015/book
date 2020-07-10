<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://d3hjf51r9j54j7.cloudfront.net/wp-content/uploads/sites/9/2019/01/Bringing-cinematic-filming-technique-and-live-streaming-together.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Live Broadcast Versus Pre-Filmed Broadcast
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
      <td class = "lowertable" >Live broadcasts are more exciting and authentic than pre-filmed broadcasts. When watching something live, you feel like you’re there. Pre-filmed broadcasts are stale because they are too edited.</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>Tom :</b></td>
      <td class = "lowertable" >Many mistakes happen during live broadcasts, so they can get messy. They can also drag on and get boring. Pre-filmed broadcasts guarantee consistent quality and pacing.</td>
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
          <b>exciting 흥미진진한 </b>
        </p>
        <p>
          <b>authentic 진짜인 </b>
        </p>
        <p>
          <b>stale 신선미가 없는 </b>
        </p>
        <p>
          <b>edited 편집된 </b>
        </p>
        <p>
          <b>mistake 실수 </b>
        </p>
        <p>
          <b>messy 엉망인 </b>
        </p>
        <p>
          <b>drag on 질질 끌다 </b>
        </p>
        <p>
          <b>guarantee 보장하다 </b>
        </p>
        <p>
          <b>consistent 일관성 있는 </b>
        </p>
        <p>
          <b>quality 질 </b>
        </p>
        <p>
          <b>pacing 진행 </b>
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
            <td class = "lowertable" >생방송은 사전 녹화 방송보다 더 흥미진진하고 진실한 방송이야. 생생한 것을 볼 때 볼 때, 너는 마치 그곳에 있는 것처럼 느껴. 사전 녹화 방송은 편집이 너무 신선미가 없어. </td>
          </tr>
          <tr>
            <td class = "uppertable" ><b>탐 :</b></td>
            <td class = "lowertable" >생방송 중에 많은 실수들이 일어나기 때문에, 그것들은 엉망이 될 수 있어. 그들은 또한 질질 끌며 지루해질 수 있지. 사전 녹화 방송은 일관된 품질과 진행을 보장해. </td>
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
