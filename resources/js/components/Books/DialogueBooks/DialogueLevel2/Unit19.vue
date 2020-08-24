<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/waitress-taking-orders-from-people-restaurant_23-2148006736.jpg">

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
        padding-bottom: 10px;">American Restaurant
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">American Restaurant</li><br />

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
          <u>Role play customer and waiter, order from the menu, ask and answer; change roles</u><br />
          (매뉴로 질문을 해보고, 묻고 답해보고, 역할을 바꿔서 손님과 웨이터의 역할극을 해보세요)
        </p>

        <ol style="margin: 12px;">
          <br />
            - Which … would you like? – I’d like … <br />
          <br />  
            - Would you like …? <br />
          <br />
            - How much is the …? <br />
        </ol>
        <br />
        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>
          
          <v-flex xs12 md8>
          <v-card hover>
          
          <v-img src="images/menu.png" />
          
          </v-card>
          </v-flex>
          
          </v-layout>
          </v-container>
          
          <br />
        <p>
          Free response:<br />
          What do you usually order when you eat at a restaurant?<br />
          What’s your father’s favorite meal?<br />
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
                      I'd like 명사 : ~하고 싶다라고 해석이 되고 바람이나 희망을 나타낼 때 사용됩니다. <br />
                        would you like...? : 정중하게 부탁하거나 물을 때 사용이 됩니다.<br />                  
                    </li>
                    <li>
                      what about(how about) : ~ 하는 게 어때?<br />
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
          name:'Customer:',
          speech:'Waiter! I’d like the menu, please.'
        },
        {
          name:'Waiter:',
          speech:'There you go, sir.'
        },
        {
          name:'Customer:',
          speech:'Thanks… I’d like some appetizer…'
        },
        {
          name:'Waiter:',
          speech:'What about tomato soup?'
        },
        {
          name:'Customer:',
          speech:'Yes, and I’d like a steak.'
        },
        {
          name:'Waiter:',
          speech:'Rare, medium, or well-done?'
        },
        {
          name:'Customer:',
          speech:'Medium, please.'
        },
        {
          name:'Waiter:',
          speech:'Which vegetables would you like?'
        },
        {
          name:'Customer:',
          speech:'I’d like some baked potatoes, some peas… oh, and a green salad.'
        },
        {
          name:'Waiter:',
          speech:'Certainly, sir. Would you like dressing on your salad?'
        },
        {
          name:'Customer:',
          speech:'Please.'
        },
        {
          name:'Waiter:',
          speech:'Which salad dressing would you like, sir? French? Italian? Thousand Island? Oil and vinegar…?'
        },
        {
          name:'Customer:',
          speech:'Oil and vinegar, please.'
        },
        {
          name:'Waiter:',
          speech:'Would you like something to drink?'
        },
        {
          name:'Customer:',
          speech:'Yes, I’d like cola… large, with lots of ice, please.'
        },
        ],

        translations:[
        {
          name:'Customer:',
          speech:'웨이터! 메뉴 좀 주세요.'
        },
        {
          name:'Waiter:',
          speech:'여기 있습니다.'
        },
        {
          name:'Customer:',
          speech:'고맙습니다. .. 저는 전채요리를 원하는데요...'
        },
        {
          name:'Waiter:',
          speech:'토마토스프는 어떠세요?'
        },
        {
          name:'Customer:',
          speech:'네, 그리고 저는 스테이크를 원합니다'
        },
        {
          name:'Waiter:',
          speech:'Rare(덜익은), medium(중간정도 익은)으로 드릴까요? 아니면 well-done(잘 익은)으로 드릴까요?'
        },
        {
          name:'Customer:',
          speech:'Medium으로 주세요.'
        },
        {
          name:'Waiter:',
          speech:'어떤 야채를 드시겠습니까?'
        },
        {
          name:'Customer:',
          speech:'구운 감자, 약간의 콩... 아, 그리고 야채 샐러드를 원합니다.'
        },
        {
          name:'Waiter:',
          speech:'알겠습니다. 샐러드 위에 드레싱(소스를 얹는 것)을 원하십니까?'
        },
        {
          name:'Customer:',
          speech:'네 그렇게 해주세요.'
        },
        {
          name:'Waiter:',
          speech:'어떤 샐러드 드레싱을 원하십니까? French? Italian? Thousand Island? Oil and vinegar(기름과 식초)...?'
        },
        {
          name:'Customer:',
          speech:'Oil and vinegar 로 주세요'
        },
        {
          name:'Waiter:',
          speech:'음료도 하시겠습니까?'
        },
        {
          name:'Customer:',
          speech:'네, 얼음이 많이 넣은 콜라 큰 것으로 주세요.'
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
