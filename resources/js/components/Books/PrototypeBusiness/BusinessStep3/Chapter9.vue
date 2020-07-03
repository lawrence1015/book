<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGx6w_XSg/4/screen_2x/canva-building-beside-shore-MADGx6w_XSg.jpg">

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
        padding-bottom: 10px;">Describing places (Location and geography / Travel recommendations)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Alistair Alby, from New Zealand, is on a business trip in Hawaii. He's having lunch with Caroline Carmen, a colleague.
    </p>

   <p>
      <li style="list-style-type: none;">Caroline: So, what do you think of Hawaii?</li>
      <li style="list-style-type: none;">Alistair:   Fantastic. The beaches are amazing.</li>
      <li style="list-style-type: none; padding-left: 55px;">We’ve got some good surfing beaches in New Zealand, but here it’s… well,</li>
      <li style="list-style-type: none; padding-left: 55px;">the weather’s a lot warmer, that’s the first difference… at this time of year, anyway.</li>
      <li style="list-style-type: none;">Caroline: Of course, it’s winter in New Zealand, isn’t it?</li>
      <li style="list-style-type: none;">Alistair:   Yeah. It’ll soon be spring, though.</li>
      <li style="list-style-type: none;">Caroline: I’d like to go, actually… maybe not this year, but… possibly next year.</li>
      <li style="list-style-type: none;">Alistair:   To New Zealand?</li>
      <li style="list-style-type: none;">Caroline: Yeah. What’s the best time of year to visit?</li>
      <li style="list-style-type: none;">Alistair:   Early summer’s nice. Late December, early January.</li>
      <li style="list-style-type: none;">Caroline: And what’s the weather like?</li>
      <li style="list-style-type: none;">Alistair:   Pretty hot, usually. You can have Christmas dinner on the beach, no problem!</li>
      <li style="list-style-type: none; padding-left: 55px;">But there’s a lot more to do than just sit on a beach, obviously.</li>
      <li style="list-style-type: none;">Caroline: Oh, sure. So, what are the best places to see?</li>
      <li style="list-style-type: none;">Alistair:   The nicest part of the country’s the South Island, in my opinion, anyway. You go to the mountains there,</li>
      <li style="list-style-type: none; padding-left: 55px;">the Southern Alps, and it’s… oh, it’s beautiful.</li>
      <li style="list-style-type: none;">Caroline: So, do you need a car, to travel round?</li>
      <li style="list-style-type: none;">Alistair:   Yeah. Or you can rent a camper van.</li>
      <li style="list-style-type: none; padding-left: 55px;">That’s what a lot of people do. There are hundreds of campsites, where you can…,   you know, park and…</li>
      <li style="list-style-type: none;">Caroline: Yeah. Yeah.</li>
      <li style="list-style-type: none;">Alistair:   I know that area pretty well, so…</li>
      <li style="list-style-type: none;">Caroline: Can you recommend some campsites?</li>
      <li style="list-style-type: none;">Alistair:   Yeah, I can give you some good addresses. There’s one campsite, next to a lake…</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <ol style="margin: 12px;">
          <li>
            What does Alistair like about Hawaii?
          </li>
          <li>
            What time of year is it in New Zealand?
          </li>
          <li>
            Why does Alistair talk about Christmas dinner?
          </li>
          <li>
            What’s the name of the mountains he talks about?
          </li>
          <li>
            What does he say about travelling on the South Island?
          </li>
        </ol>

        <p>
           Free response:<br />
           Talk about a tourist destination, in your country or abroad, that you would like to visit and say why.
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
                  Useful language :<br />
                  What’s it like there?<br />
                  It’s beautiful. The beaches are really nice.<br />
                  It’s in the mountains, but it’s not too far from the sea.<br />
                  What’s the weather like in summer?<br />
                  What’s the best time of year to visit?
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
