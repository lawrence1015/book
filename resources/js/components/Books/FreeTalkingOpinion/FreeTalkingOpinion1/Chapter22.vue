<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/front-view-plastic-covering-earth-globe_23-2148557672.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Should Plastic Bags Be Banned ?
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
      <td class = "lowertable" >Plastic bags shouldn't be banned, because people are accustomed to them.
      They're so convenient, too! I'm sure that Scientists are looking for solutions to make plastic bags become ecofriendly.</td>
    </tr>
    <tr>
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >Plastic bags are extremely harmful to all life on Earth.
      They pollute our water and land, and they contribute to climate change.
      We need to ban plastic bags and use alternatives immediately.</td>
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
          <b>accustomed 익숙한</b>
        </p>
        <p>
          <b>convenient 편리한</b>
        </p>
        <p>
          <b>solution 해법</b>
        </p>
        <p>
          <b>eco friendly 친환경적인</b>
        </p>
        <p>
          <b>extremely 극도로</b>
        </p>
        <p>
          <b>harmful 해로운</b>
        </p>
        <p>
          <b>pollute 오염시키다</b>
        </p>
        <p>
          <b>contribute 한 원인이 되다</b>
        </p>
        <p>
          <b>climate 기후</b>
        </p>
        <p>
          <b>alternative CHP immediately 즉시</b>
        </p>
        <br />
        <p style="color: #56AAFF;">
          <b>look for ~을 찾다.</b>
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
                        비닐봉지는 금지되어야 하는가?
                    </p>
                    <ol class="replace" type = "A" style="font-weight: bold;">
                      <li><span class = "normaltext">
                          사람들이 비닐봉지에 익숙하기 때문에 비닐봉투를 금지해서는 안 돼.
                          그것들은 정말 편리해!! 난 과학자들이 비닐봉지를 친환경적으로 만들기 위한 해결책을 찾고 있다고 확신해.
                        </span>
                      </li>
                      <li><span class = "normaltext">
                          비닐 봉투는 지구상의 모든 생명체들의 게 매우 해로워.
                          그들은 우리의 물과 땅을 오염시키고, 기후변화에 기여하지.
                          우리는 비닐봉투를 금지해야 하고 즉시 대안을 사용해야 해.
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
