<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/YQgoc/MADyQ5YQgoc/1/s2/canva-people-gathering-in-room-MADyQ5YQgoc.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Should I Make Small Talk First?
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
    <td class = "lowertable" >I went to my friend’s birthday party yesterday
    and I was really stress out. I didn’t know many
    people there and I did not know what to say to
    break the ice. But then this girl noticed that I was struggling, and started to
    make small talk. The topics were just simple things like the basketball game she
    watched last week and the weather, but I got a lot more comfortable after.
    I was so thankful to her for her thoughtful action!</td>
  </tr>
  <tr style="color:#1565C0;">
    <td class = "uppertable" ><b>B :</b></td>
    <td class = "lowertable" >Ah… It must have been a really awkward experience!
    Maybe you should make small talk on your own next time.
    It could help.
    <p>Do we need to make small talk first?</p></td>
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
          <b>small talk</b> 잡담
        </p>

        <p>
          <b>birthday</b> 생일
        </p>

        <p>
          <b>comfortable</b> 편한
        </p>

        <p>
          <b>thoughtful</b> 사려 깊은
        </p>

        <p>
          <b>awkward</b> 어색한
        </p>

        <p>
          <b>stress out</b> 스트레스 받다
        </p>

        <p>
          <b>break the ice</b> 서먹서먹한 분위기를 깨다
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
                        내가 먼저 잡담을 시작해야 할까요?
                        </b>
                      </p>

                      <table style = "border-collapse: collapse;">

                       <tr>
                        <td class = "uppertable" ><b>A :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >나는 어제 내 친구의 생일 파티에 갔는데 진짜 스트레스를 많이 받았어.
                        나는 그곳의 많은 사람들을 잘 몰랐고 서먹서먹한 분위기를 깨기 위해 무슨 말을 해야 할 지 몰랐어.
                        그런데 한 소녀가 내가 힘들어 하는 걸 알고 잡담을 하기 시작했어.
                        주제들은 지난 주에 그녀가 봤던 야구경기와 같은 작은 것들이었지만, 그 후에 더 편해졌어.
                        그녀의 사려 깊은 행동에 대해 너무 고맙게 생각해!</td>
                      </tr>
                      <tr style="color:#1565C0;">
                        <td class = "uppertable" ><b>B :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >아… 진짜 어색한 경험이었겠네!
                        아마도 너는 네 스스로 다음에 잡담을 시작해야 할 것 같아. 도움이 될 거야.
                        <p>우리가 잡담을 먼저 시작해야 할까요?</p></td>
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
          <li>What is the importance of small talks?</li>
          <li>Do you like starting small talks with people you've just met? Why or why not?</li>
          <li>Have you had a small talk with a stranger? Tell me about it.</li>
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
