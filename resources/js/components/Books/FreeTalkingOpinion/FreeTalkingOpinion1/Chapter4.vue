<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/i_Xjg/MADyRxi_Xjg/1/s2/canva-person-holding-door-lever-MADyRxi_Xjg.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Should We Hold The Door Open For Everyone?
      </h1>
      </transition>
    </v-layout>
  </v-img>

  <div style=" border-color: #2F4674; border-style: solid; border-width: 2px;">
  </div>

  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Topic</h3>


  <div style = "padding : 16px; line-height: 1.6;">

      <p>
        <b>
        Two People Discuss If They Should Hold The Door Open For People.
        </b>
      </p>

      <table style = "border-collapse: collapse;">

      <tr>
        <td class = "uppertable" ><b>A :</b></td>
        <td class = "lowertable" >I was walking through the subway station and a person held the door open for me.
        Usually people just walk past and don't care, but this person was kind enough to wait for me to walk through.
        It was such a kind gesture, I couldn't believe it!</td>
      </tr>
      <tr style="color:#1565C0;">
        <td class = "uppertable" ><b>B :</b></td>
        <td class = "lowertable" >Wow, I wish that people would hold the door open more often.
        I think that a world where people are kind to one another is a better world.</td>
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
          <b>held</b> 잡았다 (hold) 과거형
        </p>

        <p>
          <b>ipast</b> 지나서
        </p>

        <p>
          <b>enough</b> 충분하게
        </p>

        <p>
          <b>Wait for</b> ~ 를 기다리다
        </p>

        <p>
          <b>gesture</b> 몸짓
        </p>

        <p>
          <b>better</b> 더 좋은
        </p>
        <br />
        <p style="color: #56AAFF;">
          <b>walk through 통과하다.</b>
        </p>

        <p style="color: #56AAFF;">
          <b>kind to one another 서로에게 친절하다.</b>
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
                        다른 사람들을 위해 문을 잡아줘야 하나요? 두 사람이 문을 사람들을 위해 잡아줘야 하는지에 대해 토론을 합니다.
                        </b>
                      </p>

                      <table style = "border-collapse: collapse;">

                       <tr>
                        <td class = "uppertable" ><b>A :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >나는 지하철 역을 걷고 있었는데 어떤 사람이 나를 위해 열려진 문을 잡아주었어.
                          보통 사람들은 그냥 지나가고 신경을 쓰지 않는데 이 사람은 내가 문을 통과할 때까지 기다려 줄만큼 친절했어.
                          그것은 너무 친절한 행동이야. 믿기 힘들어!</td>
                      </tr>
                      <tr style="color:#1565C0;">
                        <td class = "uppertable" ><b>B :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >와, 나도 사람들이 더 자주 열려진 문을 잡아줬음 좋겠어.
                          나는 다른 사람에게 친절한 사람들이 있는 세상이 더 좋은 세상이라고 생각해.</td>
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
          <li>How often can you see people holding doors for everyone?</li>
          <li>When you hold the door open and they don't say thank you, what will be your reaction?</li>
          <li>Is it rude to not hold the door for someone? Why?</li>
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
