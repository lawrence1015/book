<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Should We Look For Chances To Compliment Others?
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
      <td class = "uppertable" ><b>A :</b></td>
      <td class = "lowertable" >I recently completed a project. It was about how we should all do more.
      By taking action through community activities.
      During our discussions, I just said ideas without thinking!
      I was so embarrassed to even talk about it to be honest.
      But a teammate spoke highly of me even when I said something really stupid.</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >I guess that is the key in good social relations.
      Even when you find that something is stupid, you should look for chances to compliment others!</td>
    </tr>

    </table>

      <p>
        Do we need to find chances to compliment others?
      </p>

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
          <b>chance 기회, 가능성 </b>
        </p>

        <p>
          <b>compliment 칭찬하다</b>
        </p>

        <p>
          <b>recently 최근에</b>
        </p>

        <p>
          <b>action 행동</b>
        </p>

        <p>
          <b>discussion 논의, 상의</b>
        </p>

        <p>
          <b>embarrassed 어색한, 당황스런</b>
        </p>

        <p>
          <b>stupid 멍청한, 바보 같은 </b>
        </p>

        <p>
          <b>social 사회적인</b>
        </p>

        <p>
          <b>relation 관계, 관계[관련], 친척</b>
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

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#FFE7D5">
                  <v-card-text class="px-10">
                    <p>
                      우리는 다른 사람들을 칭찬하는 기회를 찾아야만 할까요?
                    </p>
                  <ol class="replace" type = "A" style="font-weight: bold;">
                    <li><span class = "normaltext">
                      최근에 학교 프로젝트를 끝냈어.
                        그것은 어떻게 우리 모두가 커뮤니티 활동을 통해서 조치를 취하여 더 일을 해야 하는지에 대해서였어.
                        토론하는 동안, 나는 생각하지 않고 아이디어들을 그냥 말했어!
                        솔직히 심지어 그것에 대해서 이야기하기가 몹시 당황스러웠어.
                        그렇지만 팀의 친구는 내가 진짜 바보 같은 말을 했을 때도 나를 칭찬해줬어.
                      </span>
                    </li>
                    <li><span class = "normaltext">
                      그것은 좋은 사회적 관계에서의 핵심이라고 생각해.
                        심지어 네가 무언가 바보 같은 걸 찾았을 때에도, 너는 다른 사람들을 칭찬할 기회를 찾아야만 해!</b>
                    </span>
                    </li>
                  </ol>
                    <p>
                      우리는 다른 사람들을 칭찬하는 기회를 찾아야만 할까요?.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>


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
