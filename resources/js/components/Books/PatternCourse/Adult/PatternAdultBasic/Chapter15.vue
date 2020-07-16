<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5WPi8VE/1/screen_2x/canva-farm-on-the-countryside-MADQ5WPi8VE.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
        >
        <h1 style="margin:0 -30px 10px;
        overflow: hidden;
        padding: 5px;
        padding-left: 35px;
        padding-right: 25px;
        background-color: rgba(2, 21, 70, 0.64);
        border:0px solid #afcde3;
        -webkit-border-radius: 30px;
        border-radius: 30px;">I would always…
      </h1>
    </v-layout>
  </v-img>


  <h2 style="padding-top : 10px;
  padding-left : 15px;
  padding-bottom: 10px;">Preview</h2>

  <hr width="60%">
  <div style="padding : 15px; line-height: 200%;">


    <p>

      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>


          <v-flex xs12>
            <v-card light color="#d7eaea">
              <v-card-text class="px-10">
                <p>
                  <i>“I would always…and “I would never”</i>
                </p>
                <hr />
                <p style="margin-bottom: 0px;">
                  <b>would always</b>
                </p>
                <li style="list-style-type: none;"> - expresses the idea that something was an old habit which stopped in the past. </li>
                <li style="list-style-type: none;"> - an action was often repeated in the past, but it is not usually done now.</li>
                <p>
                  <i>Examples</i>
                  <br />
                  <i>She would always send me strange text messages.</i>
                  <br />
                  <i>Christine would always come late to the meetings.</i>
                </p>
                <p style="margin-bottom: 0px;">
                  <b>would never</b>
                </p>
                <li style="list-style-type: none;"> - indicate that someone never did something in the past, but now they do</li>
                <p>
                  <i>Examples</i>
                  <br />
                  <i>She would never treat her friends for snacks.</i>
                  <br />
                  <i>She would never go to the movies without her father.</i>
                </p>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </p>


    <h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Activity
  </h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <p>
      <h3>A. Dialogue</h3>
    </p>

    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialogA in dialogsA" :key="dialogA">
        <td class = "uppertable" >{{dialogA.name}}</td>
        <td class = "lowertable" >{{dialogA.speech}}</td>
      </tr>

    </table>
      <p>
        <h3>B. Pattern Exercise. What are the things that you used to do in the past that you never do anymore?
        </h3>
      </p>

      <ol style="padding-right: 20px; padding-top: 10px;">
        <li>
          I would always<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would always<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would always<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would always<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would always<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
      </ol>

      <p>
        <h3>C. Dialogue
        </h3>
      </p>

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialogB in dialogsB" :key="dialogB">
          <td class = "uppertable" >{{dialogB.name}}</td>
          <td class = "lowertable" >{{dialogB.speech}}</td>
        </tr>
  
      </table>

      <p>
        <h3>D. Pattern Exercise. What are the things that you did not used to do but you do now?</h3>
      </p>

      <ol style="padding-right: 20px; padding-top: 10px;">
        <li>
          I would never<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would never<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would never<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would never<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
        <li>
          I would never<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
        </li>
      </ol>

      <p>
        <h3>E. Pattern Exercise. Tell whether the sentence is correct or not correct. The sentence should express a repeated past action.</h3>
      </p>
      <ol style="padding-right: 20px; padding-top: 10px;">
        <li>
          He would always embarrass himself in class.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          Laura would always bake cookies for us when we were kids.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          She would always be beautiful when she was young.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          He would always go to Jeju Island during summer.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          He would always bring me to school when we’re still friends.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          Would always be fat, but I lost a lot of weight in high school.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          She would always play the guitar, now she likes singing.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          She would always do her homework.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          They would always go shopping.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
        <li>
          We would always go swimming until now.<u>&emsp; &emsp; &emsp; &emsp;</u>
        </li>
      </ol>
    <br />
    </div>

    <h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Translation
  </h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <h3>A. Dialogue</h3>

    <table style = "border-collapse: collapse;">

      <tr v-for="translationA in translationsA" :key="translationA">
        <td class = "uppertable" >{{translationA.name}}</td>
        <td class = "lowertable" >{{translationA.speech}}</td>
      </tr>

    </table>

    <h3>C. Dialogue
    </h3>

    <table style = "border-collapse: collapse;">

      <tr v-for="translationB in translationsB" :key="translationB">
        <td class = "uppertable" >{{translationB.name}}</td>
        <td class = "lowertable" >{{translationB.speech}}</td>
      </tr>

    </table>


  </div>

  <h2  style="margin-left: -30px;
      overflow: hidden;
      padding: 5px;
      padding-left: 35px;
      padding-right: 0px;
      background-color: #9692af;
      border:0px solid #afcde3;
      -webkit-border-radius: 30px;
      border-radius: 30px;">Vocabulary
  </h2>
  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
 <ol style="padding-right: 20px; padding-top: 10px;">
    <li>
      <u>travel</u> - to move or go from one place to another.
       <i>/ travel  <span style="font-size:14px">이동하다</span></i>
    </li>
    <li>
      <u>express</u> - to show a feeling, opinion, or fact.
       <i>/ express <span style="font-size:14px">표현하다</span></i>
    </li>
    <li>
      <u>vacation</u> - a time when someone does not go to work or school but is free to do what they want, such as travel or relax.
       <i>/ vacation <span style="font-size:14px">휴가</span></i>
    </li>
</ol>
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
        dialogsA:[
        {
          name:'John:',
          speech:'Have you always lived in Spain, Jenny?'
        },
        {
          name:'Jenny:',
          speech:'No, John. I go there once a year.'
        },
        {
          name:'John:',
          speech:'I would always go there for a vacation.'
        },
        {
          name:'Jenny:',
          speech:'Really?! I would always love to go there especially during summer.'
        },
        {
          name:'John:',
          speech:'It’s nice going to Spain. We would always rent a farmhouse outside the city every time we visited the place.'
        },
        ],

        dialogsB:[
        {
          name:'John:',
          speech:'I would never go to work without my car'
        },
        {
          name:'Jenny:',
          speech:'What’s the reason?'
        },
        {
          name:'John:',
          speech:'I found it difficult to travel, but that was a long time ago. Now, it’s fine to take the subway.'
        },
        {
          name:'Jenny:',
          speech:'I would never go to work without my cellphone and wallet.'
        },
        {
          name:'John:',
          speech:'How about these days?'
        },
        {
          name:'Jenny:',
          speech:'Sometimes I go to work without them. I often forget my things at home.'
        },
        ],

        translationsA:[
        {
          name:'John:',
          speech:'Jenny, 너는 항상 스페인에서  살았니?'
        },
        {
          name:'Jenny:',
          speech:'아니, John. 나는 거기 일년에 한 번 가.'
        },
        {
          name:'John:',
          speech:'난 항상 휴가로 그곳을 가곤 했어.'
        },
        {
          name:'Jenny:',
          speech:'정말?! 나는 항상 그곳에 가고 싶었어. 특히 여름동안.'
        },
        {
          name:'John:',
          speech:'스페인에 가는 건 좋은 일이야. 우리는 그곳을 방문할 때마다 항상 도시 외곽에 있는 농가를 임대하곤 했어.'
        },
        ],

        translationsB:[
        {
          name:'John:',
          speech:'난 내 차 없이는 절대 일하러 가지 않았어.'
        },
        {
          name:'Jenny:',
          speech:'이유가 뭐야?'
        },
        {
          name:'John:',
          speech:'나는 이동하는 것이 어렵다는 것을 알았지만, 그건 오래 전 일이야. 이제 지하철을 타도 괜찮아.'
        },
        {
          name:'Jenny:',
          speech:'나는 휴대폰과 지갑 없이는 절대 일하러 가지 않았어.'
        },
        {
          name:'John:',
          speech:'요즘엔 어때?'
        },
        {
          name:'Jenny:',
          speech:'가끔 나는 그들 없이 일하러 가. 나는 종종 집에서 내 물건들을 잊어버리거든.'
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

<style lang="css">

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
