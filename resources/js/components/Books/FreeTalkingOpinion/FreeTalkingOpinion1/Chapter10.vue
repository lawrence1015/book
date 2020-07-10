 <template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/i-just-put-one-pin-here-voila-talented-creative-young-tailor-putting-clothes-she-sewed-mannequin-while-catching-it-up-with-sewing-machine-her-workshop-someday-her-brand-become-famous_176420-14566.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">What is more important? Talent or Hard Work?
      </h1>
      </transition>
    </v-layout>
  </v-img>

  <div style=" border-color: #2F4674; border-style: solid; border-width: 2px;">
  </div>

  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Topic</h3>
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">

    <tr>
      <td class = "uppertable" ><b>A :</b></td>
      <td class = "lowertable" >In my opinion, I think with dedication and hard work, we can be successful in all the different fields.
      I believe that "practice makes perfect," because when we practice we can fix all our mistakes and comprehend better.</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >I disagree. I think talent matters. Even you put in a lot of hard work, the
      capacity exists for their intellectual ability.
      You can push to your limits, but you will not be able to perform better than someone who is gifted.</td>
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
                 padding-top: 2px;
                 margin-top: 0px;">Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>successful 성공한</b>
        </p>
        <p>
          <b>dedication 전념, 헌신</b>
        </p>
        <p>
          <b>field 분야 </b>
        </p>
        <p>
          <b>practice 연습</b>
        </p>
        <p>
          <b>fix 고치다.</b>
        </p>
        <p>
          <b>comprehend 이해하다</b>
        </p>
        <p>
          <b>capacity 수용력</b>
        </p>
        <p>
          <b>exist 존재하다</b>
        </p>
        <p>
          <b>perform 수행하다</b>
        </p>
        <p>
          <b>gifted 재능이 있는</b>
        </p>
        <br />
        <p style="color: #56AAFF;">
          <b>put in 투입하다.</b>
        </p>
        <p style="color: #56AAFF;">
          <b>Push to 밀어붙이다.</b>
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
                 padding-top: 2px;
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
                        재능 vs. 노력, 뭐가 더 중요할까?
                    </p>
                    <ol class="replace" type = "A" style="font-weight: bold;">
                      <li><span class = "normaltext">
                        제 의견으로는 헌신과 노력으로 우리는 모든 분야에서 성공할 수 있다고 생각합니다.
                          저는 “연습은 완벽으로 이끈다" 라고 생각합니다. 연습 할 때 우리는 모든 실수를 고쳐서 더 잘 이해할 수 있기 때문입니다.
                        </span>
                      </li>
                      <li><span class = "normaltext">
                        저는 동의하지 않습니다. 저는 재능이 중요하다고 생각합니다.
                          당신이 열심히 노력하더라도, 능력은 그들의 지적 능력을 위해 존재합니다.
                          당신은 한계에 도달 할 수는 있지만, 재능 있는 사람보다 더 잘 수행 할 수는 없습니다.
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
