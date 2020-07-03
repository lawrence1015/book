<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGwITUbVY/5/screen_2x/canva-train-station-MADGwITUbVY.jpg">

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
        padding-bottom: 10px;">Making choices (Superlatives)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      A: What time do we get to Frankfurt? Quarter past?<br />
      B: Um... yes. Yes, we're on time, I think. The last time I took this flight it was about an hour late.<br />
      A: Yeah? I don't usually fly. I normally go to Frankfurt on the train.<br />
      B: From Paris?<br />
      A: Yeah. It takes... six and a half hours.<br />
      B: Hmm.<br />
      A: It's not a high-speed train.<br />
      B: No. I drove last year, from Paris to Frankfurt. It took me... six hours, I think.<br />
      A: Right.<br />
      B: No, the fastest way's by plane. Definitely.<br />
      A: Oh yeah, I agree. I think the train's the most convenient way, though. There's more space. so you can work.
         You arrive right in the city center.<br />
      B: Oh, I'm not so sure. For me the most convenient way's the fastest way. I prefer to fly.<br />
      A: Well, I suppose, for me, It's a question of cost, really. The train's cheaper.<br />
      B: How much is it to Frankfurt?<br />
      A: From Paris? It's about, um... a hundred and eighty euros.<br />
      B: Yeah. You're right. And that's cheaper than going by car. With fuel and running costs.<br />
      A: Hmm. I don't like driving. I think it's the worst way to travel. For longer distances.<br />
      B: Yes, that's true. When I drove to Frankfurt, I arrived at about...
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Make superlatives.
      </p>

      <ol style="margin: 12px;">
        <li>
          flying/safe way to travel<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          a high-speed train/ convenient way to travel<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          what/good way/get to the airport?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>

      <p>
        Free response:<br />
        Compare travelling by plane, train and car. What are the advantages and disadvantages?<br />
        Give your opinion for each of these situations.
      </p>
      <p>
        - a one-day business trip to another city.<br />
        - a week at a conference in another city<br />
        - a holiday abroad
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
                    Superlatives
                  </p>
                  <p>
                    Short adjectives<br />
                    <b>the</b> cheap<b>est</b><br />
                    <b>the</b> fast<b>est</b><br />
                  </p>
                  <p>
                    Long adjectives<br />
                    <b>the most</b> expensive<br />
                    <b>the least</b> convenient
                  </p>
                  <p>
                    Irrgular adjectives<br />
                    good><b>the best</b><br />
                    bad><b>the worst</b>
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
