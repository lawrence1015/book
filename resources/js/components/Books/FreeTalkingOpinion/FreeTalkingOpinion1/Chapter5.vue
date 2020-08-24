<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/offended-woman-looking-camera-raising-hands-offence-concept_1262-12805.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Should We Respond To Insults?
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
        Discuss Whether They Should Respond To Insults.
        </b>
      </p>
      <table style = "border-collapse: collapse;">

      <tr>
        <td class = "uppertable" ><b>A :</b></td>
        <td class = "lowertable" >I bumped into someone and he got really mad and insulted me.
         I apologized, but he called me horrible things! However, instead of yelling back at him,
         I calmly listened to my headphones and walked away.</td>
      </tr>
      <tr style="color:#1565C0;">
        <td class = "uppertable" ><b>B :</b></td>
        <td class = "lowertable" >Wow! Sometimes people will get mad for the smallest things.
        It is better to ignore them instead of yelling back. Sometimes people are just crazy!</td>
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
          <b>respond to</b> ~에 반응하다, 대꾸 하다.
        </p>

        <p>
          <b>insult</b> 모욕, 욕
        </p>

        <p>
          <b>mad</b> 화난
        </p>

        <p>
          <b>apologize</b> 사과하다
        </p>

        <p>
          <b>horrible</b> 끔찍한
        </p>

        <p>
          <b>yell</b> 소리지르다
        </p>

        <p>
          <b>ignore</b> 무시하다
        </p>

        <p>
          <b>bump into</b> 부딪히다
        </p>

        <p>
          <b>yelling back at</b> ~ 에 대꾸하여 소리지르다
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
                        해석 욕설에 대꾸할 필요가 있을까?
                        </b>
                      </p>

                      <table style = "border-collapse: collapse;">

                       <tr>
                        <td class = "uppertable" ><b>A :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >내가 어떤 사람이랑 부딪혔는데 그가 정말 나한테 화를 내면서 욕했어.
                          내가 사과를 했는데 나한테 끔찍한 말을 했어! |
                          그런데 그한테 소리지르는 것 대신에 차분하게 헤드폰에서 나오는 음악을 들으면서 걸어갔어.</td>
                      </tr>
                      <tr style="color:#1565C0;">
                        <td class = "uppertable" ><b>B :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >와! 가끔 사람들은 아주 작은 일에도 화를 내.
                          맞서서 소리지르기 보다는 무시 하는 게 더 나아 가끔 사람들은 단순히 제정신이 아니기도 해!</td>
                      </tr>

                    
                      </table>


                      <p class = "korean">
                        욕설에 대꾸해야 할까요?
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
                 margin-top: 0px;">Questions</h3>
      <div style="padding : 16px;">

        <ol style="margin: 12px;">
          <li>Have you ever responded to an insult before? Why or why not?</li>
          <li>What will you do if someone suddenly insulted you for no reason?</li>
          <li>Is it common to see people being insulted in your country? What is your government's action towards it?</li>
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
