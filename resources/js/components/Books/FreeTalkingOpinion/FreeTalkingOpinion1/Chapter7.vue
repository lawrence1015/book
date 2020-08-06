<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-volunteer-holding-clothes-donation-box_1170-1795.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Should we participate in volunteer work?
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
      <td class = "lowertable" >I think we all need to take part in volunteering and social work.
      Nowadays, people are getting more selfish and living less grateful lives.
      I think spending some quality time away from a busy life will be helpful in gaining confidence and self-esteem.</td>
    </tr>
    <tr style="color:#1565C0;">
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >I totally agree with you.
      I have recently joined a volunteering organization in my neighborhood to help disabled people.
      It was a very rewarding experience and I started to feel grateful for the simple things in my life.</td>
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
          <b>participate</b> in 참여하다
        </p>
        <p>
          <b>selfish</b> 제멋대로의
        </p>
        <p>
          <b>grateful</b> 감사하는
        </p>
        <p>
          <b>busy</b> 바쁜
        </p>
        <p>
          <b>gain</b> 얻다
        </p>
        <p>
          <b>self-esteem</b> 자존감
        </p>
        <p>
          <b>volunteer</b> 봉사
        </p>
        <p>
          <b>organization</b> 단체
        </p>
        <p>
          <b>rewarding</b> 보람이 있는
        </p>
        <p>
          <b>experience</b> 경험
        </p>
        <br />
        <p style="color: #56AAFF;">
          <b>take part in ~ ~에 참여하다.</b>
        </p>
        <p style="color: #56AAFF;">
          <b>disabled people 장애인</b>
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
                        봉사활동에 참여해야 할까요?
                        </b>
                      </p>

                      <table style = "border-collapse: collapse;">

                       <tr>
                        <td class = "uppertable" ><b>A :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >우리 모두는 자원 봉사와 사회 사업에 참여 해야 한다고 생각해.
                          요즘 사람들은 점점 이기적으로 생활하고 덜 감사하는 삶을 살고 있어.
                          바쁜 삶에서 벗어나 좋은 시간을 보내면 자신감과 자부심을 얻는 데 도움이 될 거야.</td>
                      </tr>
                      <tr style="color:#1565C0;">
                        <td class = "uppertable" ><b>B :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >나도 완전히 너에게 동의해.
                          나는 최근 장애인을 돕기 위해 이웃 에있는 자원 봉사 단체에 가입했어..
                          매우 보람 있는 경험 이었고 저는 제 인생의 단순한 것들에 감사하게 되었어.</td>
                      </tr>

                    
                      </table>


                   


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
