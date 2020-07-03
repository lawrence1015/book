<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/Lx6xU/MADySSLx6xU/1/s2/canva-man-and-woman-lying-on-mattress-MADySSLx6xU.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(140, 103, 90, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Talking about weekend (Life at home)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Tessa: So, did you have a good weekend, Dave?</li>
      <li style="list-style-type: none;">Dave: Yeah, OK, thanks. It was nice to have some warm weather for a change.</li>
      <li style="list-style-type: none; padding-left: 40px;">We ate outside yesterday, at lunchtime. We sat outside in the garden.</li>
      <li style="list-style-type: none;">Tessa: Did you?</li>
      <li style="list-style-type: none;">Dave: Yeah, We wanted to have a barbecue, actually, but I forgot to buy some charcoal, so…</li>
      <li style="list-style-type: none;">Tessa: Oh, no. You didn’t have people coming round?</li>
      <li style="list-style-type: none;">Dave: Oh, no. It was just me and my wife, so… it wasn’t too bad. In fact, I was quite pleased.</li>
      <li style="list-style-type: none; padding-left: 40px;">Normally, when we have a barbecue, I do the cooking, you see.</li>
      <li style="list-style-type: none; padding-left: 40px;">But otherwise my wife cooks, so…</li>
      <li style="list-style-type: none;">Tessa: So you slept in the sun, and your wife did all the cooking!</li>
      <li style="list-style-type: none;">Dave: Well… I wasn’t asleep – I had one eye open… so I could see when it was ready!</li>
      <li style="list-style-type: none; padding-left: 40px;">No, actually, I had quite a busy weekend! I put a new front door on the house on Saturday.</li>
      <li style="list-style-type: none; padding-left: 40px;">It was a bigger job than I thought, actually. I got up early on Saturday and worked all day.</li>
      <li style="list-style-type: none; padding-left: 40px;">Then on Sunday, I got up early and painted it… What about you? What did you do?</li>
      <li style="list-style-type: none;">Tessa: Not much really. We went to the cinema on Saturday night.</li>
      <li style="list-style-type: none;">Dave:  Oh yeah? What did you see?</li>
      <li style="list-style-type: none;">Tessa: Oh, it wasn’t very good. It was that new film with…</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Tick the things that Dave did last weekend.
        </p>

        <ol style="margin: 12px;">
          <li>
            He sat in the garden. (&emsp;)
          </li>
          <li>
            He had some friends round. (&emsp;)
          </li>
          <li>
            He cooked a meal. (&emsp;)
          </li>
          <li>
            He did some gardening. (&emsp;)
          </li>
          <li>
            He worked on the house. (&emsp;)
          </li>
          <li>
            He had a lie in. (&emsp;)
          </li>
        </ol>

        <p>
           Free response:<br />
           Discuss with your teacher what you did last weekend, or what you normally do at the weekend.<br />
           Try to find five things that you did/normally do.
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Notes
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#F2CBBD">
                  <v-card-text class="px-10">
                <p>
                  Useful language<br />
                  Did you have a good weekend? / What did you do at the weekend?<br />
                  I had a relaxing/busy weekend. / We had some friends round for dinner.<br />
                  I cooked a big meal on Saturday night. / I had a lie in on Sunday morning.<br />
                  I worked on the house all weekend.
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
  border-color: transparent#402B24 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background:#402B24;
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
