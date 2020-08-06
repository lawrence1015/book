<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/pro-house-painting_1426-1767.jpg">

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
        padding-bottom: 10px;">You're not much help
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br />( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">You're not much help</li><br />
     
      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
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
          <u>Look at the pictures and make sentences</u><br />
          Example:<br />
        </p>

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-letter.jpg" />
                <v-card-text>
                Letters/mail<br>
                There are a lot of letters in the cars mail box.
                </v-card-text>

              </v-card>
            </v-flex>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-tank.jpg" />
                <v-card-text>
                box gas/tank<br>
                There’s only a little gas in the tank.
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-parking-lot.jpg" />
                <v-card-text>
                cars/parking lot<br>
                There are only a few in the parking lot.
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>


        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-1.jpg" />
                <v-card-text>
                1. books/bookcase 
                </v-card-text>

              </v-card>
            </v-flex>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-2.jpg" />
                <v-card-text>
                2. coffee/pot
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-3.jpg" />
                <v-card-text>
                3. salad/bowl
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-4.jpg" />
                <v-card-text>
                4. apples/box 
                </v-card-text>

              </v-card>
            </v-flex>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-5.jpg" />
                <v-card-text>
                5. juice/ bottle 
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-6.jpg" />
                <v-card-text>
                6. cherries/dish
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-7.jpg" />
                <v-card-text>
                7. lemonade/pitcher 
                </v-card-text>

              </v-card>
            </v-flex>

            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-8.jpg" />
                <v-card-text>
                8. Ice cream/box 
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md3 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-unit15-9.jpg" />
                <v-card-text>
                9. people/restaurant
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

       

          <br />
        <p>
          Free response:<br />
            Do you drink alcohol? How much do you drink?<br />
            Do many people in Korea drink alcohol?<br />
            Do they drink a lot?<br />
        </p>



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

          <tr v-for="translation in translations" :key="translation">
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
                    <ol style="margin: 12px;">
                    <li>
                      much/a little + 셀 수 없는 명사/ many/a few + 셀 수 있는 명사 <br />
                    </li>
                    <li>
                      셀 수 없는 명사 : 개체수가 많거나 형태가 일정하지 않아 셀 수 없는 명사들 <br />
                        (water, sand, rice, bread, money, luck, beer, sugar, news, milk, paper,cake)<br />
                    </li>
                    </ol>
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
          speech:'You’re doing a good job with the painting, Matt.'
        },
        {
          name:'B:',
          speech:'Thanks, Jenny. I still have much left to do. Can you give me a little help?'
        },
        {
          name:'A:',
          speech:'Sure. Do you have another brush?'
        },
        {
          name:'B:',
          speech:'Yes. Here’s a brush and a bucket of paint.'
        },
        {
          name:'A:',
          speech:'Matt, there’s only a little paint left in the bucket.'
        },
        {
          name:'B:',
          speech:'Don’t worry. There’s more paint in the garage.'
        },
        {
          name:'A:',
          speech:'What else do you have in the garage?'
        },
        {
          name:'B:',
          speech:'Just some old comic books.'
        },
        {
          name:'A:',
          speech:'Can I borrow a few of your comic books?'
        },
        {
          name:'B:',
          speech:'OK, but take only a few. I don’t have very many.'
        },
        {
          name:'A:',
          speech:'Gee, these comics are really good! I like this story about Superman.'
        },
        {
          name:'B:',
          speech:'Jenny, are you going to help me or not?'
        },
        {
          name:'A:',
          speech:'Sure, but I can stay only a few more minutes. My mother’s waiting for me.'
        },
        {
          name:'B:',
          speech:'You’re not much help, anyway.'
        },
        {
          name:'A:',
          speech:'Sorry, Matt.'
        },
        {
          name:'B:',
          speech:'It’s OK. I can finish it alone.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'페인트칠 잘하는구나, Matt'
        },
        {
          name:'B:',
          speech:'고마워, Jenny. 아직 할 일이 많이 남아 있어. 나를 조금 도와줄래?'
        },
        {
          name:'A:',
          speech:'물론이야. 다른 붓 있니?'
        },
        {
          name:'B:',
          speech:'응. 여기 붓이랑 페인트 한 통이 있어.'
        },
        {
          name:'A:',
          speech:'Matt, 통 안에 페인트가 조금만 남아 있네.'
        },
        {
          name:'B:',
          speech:'걱정하지 마. 차고에 페인트가 더 있어.'
        },
        {
          name:'A:',
          speech:'차고에 또 뭐가 있어?'
        },
        {
          name:'B:',
          speech:'오래된 만화책이 조금 있어.'
        },
        {
          name:'A:',
          speech:'만화책들 조금 빌려가도 돼?'
        },
        {
          name:'B:',
          speech:'좋아, 하지만 몇 권만 가져가. 나는 그렇게 많지 않아.'
        },
        {
          name:'A:',
          speech:'와우, 이 만화책들 정말 좋다! 나는 슈퍼맨에 대한 이 이야기를 좋아해.'
        },
        {
          name:'B:',
          speech:'Jenny, 나를 도와줄 거야 안 도와줄 거야?'
        },
        {
          name:'A:',
          speech:'물론 도와줄 거야. 그런데 몇 분만 더 머물 수 있어. 엄마가 나를 기다리고 있거든.'
        },
        {
          name:'B:',
          speech:'어쨌든 넌 도움이 안돼.'
        },
        {
          name:'A:',
          speech:'미안해, Matt.'
        },
        {
          name:'B:',
          speech:'괜찮아. 나 혼자 할 수 있어.'
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
