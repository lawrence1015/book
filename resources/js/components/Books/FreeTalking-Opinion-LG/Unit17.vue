<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://media1.fdncms.com/sacurrent/imager/u/original/9884328/screen_shot_2018-03-09_at_1.10.56_pm.png" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Plays Versus Musicals
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
      <td class = "lowertable" >Plays are flopping on Broadway, but musicals are doing well. Why? Plays are outdated and boring! No one wants to watch people talk for hours on stage. Modern audiences want to see extravagance. </td>
    </tr>
    <tr style="color:#1565C0;">
      <td class = "uppertable" ><b>Tom :</b></td>
      <td class = "lowertable" >The unfortunate truth is that plays are dying out. However, that does not mean we should let them completely fade away. Brilliant plays can make people think and learn in ways musicals cannot.</td>
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
          <b>flop</b> 완전히 실패하다 
        </p>
        <p>
          <b>outdated</b> 구식의 
        </p>
        <p>
          <b>hours</b> 오랜 시간, 오래 
        </p>
        <p>
          <b>modern</b> 현대의 
        </p>
        <p>
          <b>audience</b> 관객 
        </p>
        <p>
          <b>extravagance</b> 화려함 
        </p>
        <p>
          <b>unfortunate</b> 불행한 
        </p>
        <p>
          <b>die out</b> 소멸하다 
        </p>
        <p>
          <b>however</b> 하지만 
        </p>
        <p>
          <b>completely</b> 완전히 
        </p>
        <p>
          <b>fade</b> 사라지다 
        </p>
        <p>
          <b>brilliant</b> 훌륭한 
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
            <td class = "lowertable" >연극은 브로드웨이에서 완전히 실패하고 있지만, 뮤지컬은 잘 되고 있어. 왜일까? 연극은 구식이고 지루해! 아무도 사람들이 무대에서 몇 시간 동안 말하는 것을 보고 싶어하지 않아. 현대 관객들은 화려함을 보고 싶어해.</td>
          </tr>
          <tr style="color:#1565C0;">
            <td class = "uppertable" ><b>탐 :</b></td>
            <td class = "lowertable" >불행한 사실은 연극이 사라지고 있다는 거야. 하지만, 그렇다고 해서 우리가 그들을 완전히 사라지게 해야 한다는 뜻은 아니야 훌륭한 연극은 사람들로 하여금 뮤지컬이 할 수 없는 방식으로 생각하고 배우게 할 수 있어.</td>
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
          <li>Do you like watching plays or musicals? Which ones do you prefer? Why?</li>
          <li>What are the differences between a play and a musical?</li>
          <li>When was the last time you watched a play or a musical? How was it?</li>
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
