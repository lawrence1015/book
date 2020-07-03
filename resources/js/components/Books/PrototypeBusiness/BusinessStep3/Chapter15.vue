<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ4xUstzE/1/screen/canva-road-in-san-fransisco-MADQ4xUstzE.jpg">

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
        padding-bottom: 10px;">Sightseeing (Tourist information)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       <p>
         A: Hi<br />
         B: Hello. Do you have any information about Alcatraz? Any… booklets or leaflets?<br />
         A: Yes. Just behind you, on the shelf, there.<br />
         B: Ah, OK. Thank you.
       </p>
     </li>
     <li>
       <p>
         A: Hi<br />
         B: Hi. Is there anywhere near here where you can buy gifts… and souvenirs?<br />
         A: Yeah. If you turn right out of the door, then take the first right, there are gift shops all along the … the street, there.<br />
         B: OK. Thanks very much.
       </p>
     </li>
     <li>
       <p>
         B: Can you visit the museum all day? What are the opening times?<br />
         A: It opens at ten and closes at five. If you want to take a guided tour, they start every hour, on the hour and last… I think they<br />
         last forty-five minutes, but I’ll just check…
       </p>
     </li>
     <li>
       <p>
         B: Excuse me. Have you got any street maps?<br />
         A: Sure.<br />
         B: …. Thanks. How much are they?<br />
         A: They’re free.
       </p>
     </li>
   </ol>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

      <p>
        Free response:<br />
        Talk about tourism in your town/region
      </p>
      <p>
        What are the most interesting places to visit?<br />
        What’s available for tourists at the places(guided tours, souvenirs…)?
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
                  Useful language
                </p>
                <p>
                  Excuse me? Is there a tourist information office near here?<br />
                  Do you have any information/booklets/leaflets about the history of the island?<br />
                  Do you have any maps of the city centre?<br />
                  You can visit the museum with a guide. There’s a guided tour every hour.
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
