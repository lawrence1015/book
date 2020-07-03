<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/A8cak/MADzhTA8cak/1/s2/canva-people-walking-on-park-MADzhTA8cak.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(254, 183, 43, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing how business is going (Adverbs of manner)

      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      A: So, how's business in Vienna?<br />
      B: Um... improving.<br />
      A: Yeah?<br />
      B: Yeah, slowly. It's um... It's easier than last year.<br />
      A: Yeah.<br />
      B: We had a hard year, last year.<br />
      A: Low sales?<br />
      B: Well, we sold a lot of products. But, um... nearly all low-margin goods.<br />
      A: We had exactly the same situation in Dublin.<br />
      B: Last year?<br />
      A: Yeah. We made a profit-just.<br />
      B: We lost money.<br />
      A: Did you?<br />
      B: Yeah. Not too much, but, um...<br />
      A: But this year, you're doing OK?<br />
      B: Yeah, we're making money.<br />
      A: That's good. We are. The good thing is, costs are lower this year, with the stronger euro.<br />
      B: That's true, yeah. And they're getting lower. Of course, you're in the euro zone, in Ireland.<br />
      A: That's right.<br />
      B: So, do you just manage one store?<br />
      A: Yeah, the Dublin branch. There is another one, in...
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Works in pairs. Discuss these sentences. Are they true for you?
      </p>

    <p>
      I work hard every day.<br />
      I prefer to work slowly and quickly.<br />
      I work well in a team.<br />
      I solve problems quickly.<br />
      Free response:<br />
      How's business at your company, or another company you know?
    </p>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#527318">
                <v-card-text class="px-10">
                  <p>
                    Adverbs of manner
                  </p>
                  <p>
                    Most adverbs of manner end in -ly:<br />
                    slow>slowly<br />
                    quick>quickly
                  </p>
                  <p>
                    These adverbs of manner are irregular:<br />
                    good>well<br />
                    hard>hard (no change)<br />
                    fast>fast (no change)
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


    }

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

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #899857 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #899857;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}


</style>
