<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/VRdFM/MADyRCVRdFM/1/s2/canva-three-men-watching-camera-holding-by-a-woman-MADyRCVRdFM.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(72, 87, 125, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Saying where you’re from
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">
      <tr v-for="dialog in dialogs">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>
    
    </table>
    


        <v-flex xs6 md2>
          <v-card hover>
            <v-img src="images/france.jpg" />
          </v-card>
        </v-flex>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
      <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Translation</h3>
    <div style="padding : 16px;">
      
      <table style = "border-collapse: collapse;">
      
        <tr v-for="translation in translations">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>
          
      </table>  
         
          
    </div>



    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Where are the cities? Fill in the gaps.
      </p>

      <li style="list-style-type: none;">north/ south/ east/ west/ center</li>
      <ol style="margin: 12px;">
        <li>
          1. Madrid is in the ( &emsp; &emsp; ) of Spain.
        </li>
        <li>
          Beijing is in the ( &emsp; &emsp; )-( &emsp; &emsp; ) of China.
        </li>
        <li>
          Chester is in the ( &emsp; &emsp; ) of the UK, near Manchester.
        </li>
      </ol>

      <v-container grid-list-md text-xs-center>
        <v-layout wrap align-content-center>

          <v-flex xs12 md6 >
            <v-card hover>

              <v-img src="images/Europe.jpg" />

            </v-card>
          </v-flex>

        </v-layout>
      </v-container>


      <p>
        Free response:
      </p>
      <p>
        Where are you from?
      </p>
      <p>
        Where’s …………. ?
      </p>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#9197A6">
                <v-card-text class="px-10">
                  <p>
                    be 동사
                  </p>
                  <p>
                    Where are [you/they] from?<br />
                    Where’s [he/she] from? (Where’s=Where is)<br />
                    Where’s..? It’s in the [north/south/east/west of…(near..)].
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
        dialogs:[
        {
          name:'A:',
          speech:'Where are you from?'
        },
        {
          name:'B:',
          speech:'Toulon.'
        },
        {
          name:'A:',
          speech:'Toulon? Where’s that?'
        },
        {
          name:'B:',
          speech:'It’s in the south of France, near Marseille.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'I’m from Masan.'
        },
        {
          name:'B:',
          speech:'Masan? Where’s that?'
        },
        {
          name:'A:',
          speech:'It’s in South Korea, near Pusan.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Where are you from?'
        },
        {
          name:'B:',
          speech:'I’m from Bremen, in the north of Germany.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'고향이 어디세요?'
        },
        {
          name:'B:',
          speech:'툴롱이요.'
        },
        {
          name:'A:',
          speech:'툴롱? 거기가 어디예요?'
        },
        {
          name:'B:',
          speech:'프랑스 남부 마르세유 근처에 있어요.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'저는 마산 출신입니다.'
        },
        {
          name:'B:',
          speech:'마산? 거기가 어디인가요?'
        },
        {
          name:'A:',
          speech:'그곳은 한국 안에, 부산 근처에 있어요.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'고향이 어디세요?'
        },
        {
          name:'B:',
          speech:'전 독일 북부의 브레멘 출신입니다.'
        },
      ]

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
  border-color: transparent #43464C transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #43464C;
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
  width: 5%;
  white-space: nowrap;
}

.lowertable {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}

</style>
