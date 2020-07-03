<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5P5nIq4/1/screen/canva-architects-at-work-MADQ5P5nIq4.jpg">

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
        padding-bottom: 10px;">Discussing strengths and weaknesses (Gerund)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Interviewer: So, when you design an office, where do you start?</li>
      <li style="list-style-type: none;">Steve: &emsp; &emsp; Well, the first question is, how much space do you need? And that’s one of the most difficult questions,</li>
      <li style="list-style-type: none; padding-left: 83px;">sometimes because for most people, it’s difficult to say, oh I need…fifteen square meters, for example.</li>
      <li style="list-style-type: none; padding-left: 83px;">So you have to look at what people need to do in the office, look at what equipment they need – you know,</li>
      <li style="list-style-type: none; padding-left: 83px;">most people need a phone, a computer, um…a desk! Then there’s shared equipment,… you normally</li>
      <li style="list-style-type: none; padding-left: 83px;">have a room with a photocopier, printers… a fax machine, possibly.</li>
      <li style="list-style-type: none;">Interviewer: A coffee machine.</li>
      <li style="list-style-type: none;">Steve: &emsp; &emsp; Oh, a coffee machine is essential! It’s important where you put it. Do you put it in a corridor, with no windows…</li>
      <li style="list-style-type: none; padding-left: 83px;">or next to the toilets… you know, so people have short coffee breaks. Or do you have a nice coffee area,</li>
      <li style="list-style-type: none; padding-left: 83px;">with seats… bit consideration. Light’s extremely important.</li>
      <li style="list-style-type: none;">Interviewer: So you want big windows, if possible.</li>
      <li style="list-style-type: none;">Steve: &emsp; &emsp; Yeah, you usually want a lot of light.</li>
      <li style="list-style-type: none;">Interviewer: What do you think of open-plan officers? Do you like that sort of design?</li>
      <li style="list-style-type: none;">Steve: &emsp; &emsp; Well, an open-plan office isn’t really a design, is it? It’s just a big room, um…</li>
      <li style="list-style-type: none; padding-left: 83px;">But we’re talking about the requirements for offices, and the most important question is money.</li>
      <li style="list-style-type: none; padding-left: 83px;">You know, cost is always the biggest problem. At the end of the day, walls cost money. If they’re not an</li>
      <li style="list-style-type: none; padding-left: 83px;">essential requirement, then why have them? With anything that costs money, clients always ask, is it really</li>
      <li style="list-style-type: none; padding-left: 83px;">necessary? Offices are expensive, even if you only have what’s in the regulations – what’s compulsory.</li>
      <li style="list-style-type: none; padding-left: 83px;">So, if something’s an optional extra…</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Are these sentences true(T) or false(F)?
        </p>

        <ol style="margin: 12px;">
          <li>
            A coffee machine is an optional extra. (&emsp;)
          </li>
          <li>
            It’s important to have lots of light. (&emsp;)
          </li>
          <li>
            Open plan offices are more expensive. (&emsp;)
          </li>
        </ol>

        <p>
           Free response:<br />
           What do you think of your company's offices? What do you like about them? What don't you like?
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
                  Superlatives<br />
                  (+) small : This is the smallest office.<br />
                  (+) expensive : This is the most expensive.<br />
                  (-) expensive : That’s the least expensive.<br />
                  (+) good/bad : I think this is the best and that’s the worst.
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
