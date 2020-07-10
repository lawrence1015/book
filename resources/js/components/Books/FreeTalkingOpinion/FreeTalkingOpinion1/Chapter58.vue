<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/young-beautiful-woman-eating-slice-pizza-city-street_72229-268.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Is Eating in Public Rude?
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
      <td class = "lowertable" >Eating in public is not proper etiquette, especially if you do it in cramped places like the subway or bus. By eating in public, you’re bothering people by making them smell your food and hear you eat.      </td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>Tom :</b></td>
      <td class = "lowertable" >Our world has so many busy people. Some people have to starve all day long if they don’t eat while on the go. As long as they’re not eating something extreme, others should understand.      </td>
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
          <b>proper 적절한 </b>
        </p>
        <p>
          <b>etiquette 예의 </b>
        </p>
        <p>
          <b>especially 특히 </b>
        </p>
        <p>
          <b>cramped 비좁은 </b>
        </p>
        <p>
          <b>bother 신경 쓰이게 하다 </b>
        </p>
        <p>
          <b>busy 바쁜 </b>
        </p>
        <p>
          <b>starve 굶다 </b>
        </p>
        <p>
          <b>on the go 끊임없이 일하는 </b>
        </p>
        <p>
          <b>extreme 지나친 </b>
        </p>
        <p>
          <b>understand 이해하다 </b>
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
            <td class = "lowertable" >공공장소에서 먹는 것은 적절한 예의가 아니야, 특히 지하철이나 버스처럼 비좁은 곳에서 먹는다면 말이야. 공공장소에서 음식을 먹으면 사람들에게 음식의 냄새를 풍기고 네가 먹는 소리를 듣게 함으로써 사람들을 괴롭히는 거야.</td>
          </tr>
          <tr>
            <td class = "uppertable" ><b>탐 :</b></td>
            <td class = "lowertable" >우리 세상에는 바쁜 사람들이 너무 많아. 이동 중에 밥을 먹지 않으면 하루 종일 굶어야 하는 사람들도 있어. 그들이 극단적인 것을 먹지 않는 한, 다른 사람들은 이해해야 해.</td>
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
