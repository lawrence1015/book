<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv4WssmY/7/screen_2x/canva-flat-screen-television-MADGv4WssmY.jpg">

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
        padding-bottom: 10px;">Talking about your interests (Sport and leisure / likes and dislikes)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Woman: So, are you watching the cup final this weekend?</li>
      <li style="list-style-type: none;">Man:     Um… no, I don’t think so.</li>
      <li style="list-style-type: none;">Woman: Don’t you like football?</li>
      <li style="list-style-type: none;">Man:     No. I can’t stand it. Sorry to sound so miserable!</li>
      <li style="list-style-type: none;">Woman: Mmm, I hate it too, but I watch the World Cup Final.</li>
      <li style="list-style-type: none;">Man:     I can’t play, that’s my problem. I’m hopeless at it! If I’m not very good at a sport, I don’t like watching it.</li>
      <li style="list-style-type: none;">Woman: So what do you like, then?</li>
      <li style="list-style-type: none;">Man:     I play golf.</li>
      <li style="list-style-type: none;">Woman: Oh right… My husband plays. I’m not interested in it, though. It’s…not my cup of tea.
                                         He plays golf, I go horse riding.</li>
      <li style="list-style-type: none;">Man:     Oh, right. Well you could play polo-both of you. That’s half horse riding, half golf!...
                                         I’d love to have a go at riding, actually. I bet it’s good fun.</li>
      <li style="list-style-type: none;">Woman: Oh, it’s great fun.</li>
      <li style="list-style-type: none;">Man:     So, do you have your own horse?</li>
      <li style="list-style-type: none;">Woman: No. I’d love to have one, but, um…it’s expensive.</li>
      <li style="list-style-type: none;">Man:     Yeah, I’m quite interested in tropical fish. I’d like to have an aquarium, but…it’s a problem if you travel a lot…</li>
      <li style="list-style-type: none;">Woman: Tropical fish?</li>
      <li style="list-style-type: none;">Man:     Yeah. I’d like to have some piranhas.</li>
      <li style="list-style-type: none;">Woman: Piranhas?</li>
      <li style="list-style-type: none;">Man:     Well, they say a hundred piranhas can eat a horse in less than five minutes!</li>
      <li style="list-style-type: none;">Woman: Oh!</li>
      <li style="list-style-type: none;">Man:     I’m not sure if that includes the rider or not…</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Answer the questions.
        </p>

        <ol style="margin: 12px;">
          <li>
            Why doesn’t the man watch football on TV?
          </li>
          <li>
            Why does he talk about polo?
          </li>
          <li>
            What’s he interested in, apart from golf?
          </li>
        </ol>

        <p>
           Free response:<br />
           What are the most popular sports and leisure activities in your country?<br />
           What do you think the most popular sports and leisure activities in the world are?
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
                  Useful language:<br />
                  I enjoy playing golf. / I can’t stand football! / I like watching ice skating<br />
                  I’m hopeless at tennis! / I’d love to have a go at surfing / I’m (not) interested in that
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
