<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/laptop-surrounded-by-pictures_23-2148019165.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Should a Celebrity's Private Life Be Open To The Public?
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
      <td class = "lowertable" >Fans of celebrities want to know everything about them.
      If celebrities want to become more famous, they shouldn't be afraid of opening their private lives to the public.
      They also need to learn to take criticism.</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >People should admire a celebrity's talent, not his or her private life.
      Celebrities need some privacy, just like normal people.
      Also, even if they earn a lot of money, that doesn't mean their private lives should be exposed to everyone..</td>
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
          <b>afraid 두려워하는</b>
        </p>
        <p>
          <b>public 일반 사람들, 대중</b>
        </p>
        <p>
          <b>criticism 비난</b>
        </p>
        <p>
          <b>admire 감탄하며 바라보다</b>
        </p>
        <p>
          <b>talent 재능</b>
        </p>
        <p>
          <b>privacy 사생활</b>
        </p>
        <p>
          <b>normal 평범한</b>
        </p>
        <p>
          <b>earn (돈을) 다</b>
        </p>
        <p>
          <b>expose 드러내다</b>
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
                        유명인의 사생활이 대중들에게 공개되어야만 하나요?
                    </p>
                    <ol class="replace" type = "A" style="font-weight: bold;">
                      <li><span class = "normaltext">
                          유명 인사의 팬은 자신에 대한 모든 것을 알고 싶어합니다.
                          유명 인사가 더 유명 해지고 싶다면 대중에게 사생활을 개방하는 것을 두려워해서는 안됩니다.
                          그들은 또한 비판을 받는 법을 배울 필요가 있습니다.
                        </span>
                      </li>
                      <li><span class = "normaltext">
                          사람들은 그들의 사생활이 아닌 유명인의 재능에 감탄해야 합니다.
                          유명 인사는 평범한 사람들처럼 사생활이 필요 합니다.
                          또한, 그들이 돈을 많이 벌더라도,
                          그것이 그들의 사생활이 모든 사람들에게 노출되어야 한다는 것을 의미하지는 않습니다..
                      </span>
                      </li>
                    </ol>

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
