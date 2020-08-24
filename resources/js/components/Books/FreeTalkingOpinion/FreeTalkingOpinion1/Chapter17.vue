<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/students-standing-with-open-books-looking-camera_23-2148166405.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Do Schools Really Prepare Students For A Successful Life?
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
      <td class = "lowertable" >Students study important basic subjects at school.
      They also learn communication skills by studying and playing sports with classmates.
      Schools teach students how to live a successful and productive life..</td>
    </tr>
    <tr style="color:#1565C0;">
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >Schools should fix their curriculums entirely. I think it's a waste of time to
      take science classes if you want to be a pianist or a professional basketball player.
      The current education system will only make students hate studying.</td>
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
          <b>subject</b> 과목
        </p>
        <p>
          <b>communication</b> 의사소통
        </p>
        <p>
          <b>classmate</b> 반 친구
        </p>
        <p>
          <b>productive</b> 결실 있는
        </p>
        <p>
          <b>fix</b> 고치다
        </p>
        <p>
          <b>entirely</b> 완전히
        </p>
        <p>
          <b>waste</b> 낭비
        </p>
        <p>
          <b>professional</b> 전문적인
        </p>
        <p>
          <b>current</b> 현재의
        </p>
        <p>
          <b>hate</b> 몹시 싫어하다..
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
                        학교들은 정말로 학생들을 성공적인 삶을 위해 준비시키는가?
                        </b>
                      </p>

                      <table style = "border-collapse: collapse;">

                       <tr>
                        <td class = "uppertable" ><b>A :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >학생들은 학교에서 중요한 기본 과목을 공부합니다.
                          그들은 또한 공부를 하고 반 친구들과 스포츠를 하면서 의사소통 기술을 배웁니다.
                          학교는 학생들에게 성공적이고 생산적인 삶을 사는 법을 가르칩니다.</td>
                      </tr>
                      <tr style="color:#1565C0;">
                        <td class = "uppertable" ><b>B :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >학교는 교과과정을 완전히 고쳐야 합니다.
                          나는 만약 당신이 피아니스트 또는 프로 농구 선수가 되려고 한다면 과학 수업을 듣는 것이 시간 낭비라고 생각합니다.
                          현재의 교육제도는 학생들이 공부를 몹시 싫어하게 할 뿐입니다.</td>
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
          <li>Do you think schools really help students to prepare for their brighter future? Why or Why not?</li>
          <li>What’s the most important thing you have learnt at school?</li>
          <li>What would the world be like if everyone had access to a good education?</li>
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
