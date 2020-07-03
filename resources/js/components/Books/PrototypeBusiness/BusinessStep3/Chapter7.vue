<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5BePL5w/1/screen_2x/canva-vacuum-cleaner-on-a-wooden-floor-MADQ5BePL5w.jpg">

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
        padding-bottom: 10px;">Comparing offers (Comparatives)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Lionel:   Marilyn, these are both top quality products! The quality’s the same.</li>
      <li style="list-style-type: none;">Marilyn:  I know. But they don’t look the same. The one from Gild looks like a modern vacuum cleaner. This Aero…</li>
      <li style="list-style-type: none;">Lionel:   Aerosaurus.</li>
      <li style="list-style-type: none;">Marilyn: Yeah. It looks like something from the 1960s.</li>
      <li style="list-style-type: none;">Lionel:   Well of course it does. It’s a retro look.</li>
      <li style="list-style-type: none;">Marilyn:  I know, but what do most customers want? Do they want to pay a reasonable price for a modern vacuum cleaner,
                                         or pay more for something that looks forty years old?</li>
      <li style="list-style-type: none;">Lionel:   Yes, but surely we don’t want just another ‘modern’ vacuum cleaner, that’s the same as all the other products
                                         we sell? We need something different. OK, the Aerosaurus is more expensive. But it’s different… And Suntra is
                                         making a good offer. Look ? twelve percent discount - Gild is only offering five percent. Suntra is offering cheaper
                                         delivery, as well. We can make a bigger profit margin.</li>
      <li style="list-style-type: none;">Marilyn: We can make a bigger margin, but we can only make a good profit if we sell enough vacuum cleaners.
                                         How many of these Aero…sauruses can we sell? I mean, look at it. It looks like a dinosaur!</li>
      <li style="list-style-type: none;">Lionel:   Of course it does! That’s why people will love it! Just listen to it!</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <ol style="margin: 12px;">
          <li>
            Is there much difference between the quality of the products?
          </li>
          <li>
            What’s the main difference between the products?
          </li>
          <li>
            What does Marilyn think of the Aerosaurus?
          </li>
          <li>
            What does Lionel think of the Aerosaurus?
          </li>
        </ol>

        <p>
           Free response:<br />
           Compare the price and quality of pairs of competing products and stores you both know.<br />
           - mobile phones<br />
           - supermarkets<br />
           - clothes shops<br />
           ...is much cheaper, but the quality isn't as good... .<br />
           ...sells better quality products than ... .<br />
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
                  Comparatives<br />
                  Short adjectives : It’s often fast<b>er</b> and cheap<b>er</b> to buy online.<br />
                  Long adjectives : (+) BMWs are a lot <b>more</b> expensive <b>than</b> Skodas.<br />
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; (-) Skodas are a lot<b>less</b> expensive <b>than</b> BMWs.<br />
                  Irregular adjectives : The situation is <b>worse/better</b> now.<br />
                  As…as : This one isn’t <b>as</b> popular <b>as</b> the other one.
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
