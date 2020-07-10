<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv8RmfkY/6/screen_2x/canva-man-and-woman-sitting-on-chair-in-front-of-desk-MADGv8RmfkY.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(59, 105, 120, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">There's a dog
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">There's a dog</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Exercise</h3>
        <div style="padding : 16px;">

        <p>
          <u>Fill the blanks. Always answer with a whole sentence</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
              <u> &emsp; &emsp; &emsp; </u> on the floor? - There's a red carpet. <br />
                바닥에 무엇이 있습니까? - 붉은 카펫이 있습니다.
          </li>
          <li>
              <u> &emsp; &emsp; &emsp; </u> a gray hair on my head. <br />
                내 머리 위에 회색 머리카락이 있습니다.
          </li>
          <li>
              Is <u> &emsp; &emsp; &emsp; </u> a cafeteria in the building?
                그 건물 안에는 식당이 있습니까?
          </li>
        </ol>



      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Translation</h3>
      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

</div>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
        </div>
        <h3 class = "border white--text" style="padding-top: 7px;
                                                margin-left: -18px;
                                                margin-right: -18px;
                                                padding-left: 10px;
                                                padding-bottom: 10px;
                                                padding-top: 10px;
                                                margin-top: 0px;
                                                background-color: #204051;">Self Study</h3>
        <div style="padding : 16px;">

          <p>

            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>


                <v-flex xs12>
                  <v-card light color="#cae8d5">
                    <v-card-text class="px-10">
                    <li>
                      Notes
                    </li>
                    <li>
                      1) There's a ... : 생각하거나 보고 있는 무언가를 묘사할 때 명사가 단수라면 항상 there is 뒤에 a  
                      를 써주어야 합니다.                  
                    </li>
                    <li>
                      2) There's의 쓰임 : <br />
                        ex) The cup is on the table (Where's the cup?에 대한 대답을 할 때) <br />
                        There's a cup on the table (What's on the table? 에 대한 대답을 할 때)
                    </li>
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
          speech:'What’s on the picture?'
        },
        {
          name:'B:',
          speech:'There’s a dog under the table.'
        },
        {
          name:'A:',
          speech:'What else?'
        },
        {
          name:'B:',
          speech:'Well, there’s a typewriter on the table and a lamp behind the typewriter. There’s also a vase next to the typewriter with a rose in it. And there’s a cup in front of the vase, too.'
        },
        {
          name:'A:',
          speech:'Is there a cup on the table?'
        },
        {
          name:'B:',
          speech:'Yes there is.'
        },
        {
          name:'A:',
          speech:'Is the cup in front of the typewriter?'
        },
        {
          name:'B:',
          speech:'No, it isn’t. It’s in front of the vase.'
        },
        {
          name:'A:',
          speech:'Is there a chair?'
        },
        {
          name:'B:',
          speech:'Yes, there is. There’s a chair next to the table.'
        },
        {
          name:'A:',
          speech:'Is there a cat under the table?'
        },
        {
          name:'B:',
          speech:'No, there isn’t. There’s a DOG.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'그림에 무엇이 있습니까?'
        },
        {
          name:'B:',
          speech:'탁자 밑에 개가 있습니다.'
        },
        {
          name:'A:',
          speech:'그 밖에 무엇이 있습니까?'
        },
        {
          name:'B:',
          speech:'글쎄요, 탁자 위에 타자기가 있고 타자기 뒤에는 등이 있습니다. 타자기 옆에 장미 한 송이가 꽂혀 있는 꽃병 또한 있습니다. 꽃병 앞에 컵도 있습니다.'
        },
        {
          name:'A:',
          speech:'탁자 위에 컵이 있습니까?'
        },
        {
          name:'B:',
          speech:'네 있습니다.'
        },
        {
          name:'A:',
          speech:'그 컵은 타자기 앞에 있습니까?'
        },
        {
          name:'B:',
          speech:'아니요, 그렇지 않습니다. 그것은 꽃병 앞에 있습니다.'
        },
        {
          name:'A:',
          speech:'의자가 있습니까?'
        },
        {
          name:'B:',
          speech:'네, 있습니다. 탁자 옆에 의자가 있습니다.'
        },
        {
          name:'A:',
          speech:'탁자 아래에 고양이가 있습니까?'
        },
        {
          name:'B:',
          speech:'아니요, 없습니다. 개가 있습니다'
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
  border-color: transparent #204051 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #204051;
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
