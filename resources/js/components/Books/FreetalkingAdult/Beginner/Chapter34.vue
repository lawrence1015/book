<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv8UrE_A/7/screen/canva-aerial-view-photography-of-city-MADGv8UrE_A.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">My City</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>The place I live in is a young city. In fact, it is considered a "baby" because it has not been a city for even a year yet! Because we have many facilities, establishments and a good economy, the government awarded us the status of a city! Our hospital is located along Valencia St, beside San Martin's University. Behind it stands a Buddhist Temple. However, my family goes to a Christian Church located along Privet Drive. Across it is a bakery which sells the best egg pies I have ever tasted. Beside the bakery is a boutique that sells our town's handicrafts such as shell lamps and wooden statues.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Facility(n)</u> -  something designed to give service <span style="font-size:16px">시설[기관], 기능[특징], 시설, 재능</span>
</li>

<li style="list-style-type: none;"><u>Establishment(n)</u> -  a business, institution, or organization <span style="font-size:16px">기관, 시설, 기득권층, 지배층, 설립, 수립, 확립</span>
</li>

<li style="list-style-type: none;"><u>Economy(n)</u> -   the production and use of resources of a community <span style="font-size:16px">경기; 경제</span>
</li>

<li style="list-style-type: none;"><u>Status(n)</u> -  rank or condition <span style="font-size:16px">신분[자격], 지위, 높은 지위, 중요도, 상황, 특정 사건을 알리다</span>
</li>

<li style="list-style-type: none;"><u>Boutique(n)</u> - a small store selling special goods <span style="font-size:16px">부티크, 양품점(값비싼 옷이나 선물류를 파는 작은 가게)</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Our neighborhood has _________ like a swimming pool, a gym, a sauna and a basketball court!
  </li>

  <li>The commercial __________ in the capital earn much.
  </li>

  <li>Someday I will open a fashion ___________!
  </li>

  <li>What is your secret for having a good health __________?
  </li>

  <li>If people have jobs, the __________ better.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Why did he call his city a “baby”?
</li>

<li>Why was the place given the status of a city?
</li>

<li>Where is the hospital located?
</li>

<li>Where is the Buddhist temple?
</li>

<li>Where is his family’s church located?
</li>

<li>Where is the bakery? The boutique?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">

  <p>내가 사는 곳은 젊은 도시야. 사실, 그곳은 아직 도시가 된지 1년조차 되지 않았기 때문에 "아기"로 여겨지고 있답니다! 우리는 많은 시설과 시설, 그리고 좋은 경제를 가지고 있기 때문에, 정부는 우리에게 도시의 지위를 주었다! 우리 병원은 발렌시아 가를 따라 산마틴 대학 옆에 있다. 그 뒤에는 절이 서 있다. 하지만 우리 가족은 프리벳 드라이브를 따라 위치한 기독교 교회에 다닌다. 건너편에는 내가 먹어본 가장 맛있는 에그파이를 파는 빵집이 있다. 빵집 옆에는 조개등과 나무조각상 등 우리 마을의 수공예품을 파는 부티크가 있다.
  </p>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Conversation Samples <span style="font-size:18px">(선생님과 역할을 나눠서 연습해보세요)</span></h3>

<div style="padding : 16px;">

<p>
<b>A.</b>
</p>

<table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs" :key="dialog">
      <td class = "uppertable" ><b>{{dialog.name}}</b></td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

  </table>


<p>
<b>B.</b>
</p>

<table style = "border-collapse: collapse;">

  <tr v-for="dialog2 in dialogs2" :key="dialog2">
    <td class = "uppertable" ><b>{{dialog2.name}}</b></td>
    <td class = "lowertable" >{{dialog2.speech}}</td>
  </tr>

</table>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">

<p>
<b>A.</b>
</p>

  <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" ><b>{{translation.name}}</b></td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

<p>
<b>B.</b>
</p>
      <table style = "border-collapse: collapse;">

        <tr v-for="translation1 in translations1" :key="translation1">
          <td class = "uppertable" ><b>{{translation1.name}}</b></td>
          <td class = "lowertable" >{{translation1.speech}}</td>
        </tr>

      </table>

</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


    <p>
      Give the correct location for the places listed below. Provide as many descriptions of location as possible. Use proper prepositions.
    </p>



    <v-container>
        <v-layout wrap align-content-center>

            <v-flex xs12 md12>
                <v-card hover>

                  <v-card hover>

                      <v-img src="images/mycity_map.png" />


                  </v-card>


                </v-card>
            </v-flex>

        </v-layout>
    </v-container>

    
        <li style="list-style-type: none;">Where is the mall?
        </li>
        <li style="list-style-type: none;">Ex. It is along Iris Street. It is at the corner of Iris Street and Gardenia Street. It is beside the gym.
        </li>

        <li style="list-style-type: none;">Where is the hospital?
        </li>

        <li style="list-style-type: none;">Where is the park?
        </li>

        <li style="list-style-type: none;">Where is the university?
        </li>

        <li style="list-style-type: none;">Where is the bookstore?
        </li>

        <li style="list-style-type: none;">Where is the church?
        </li>

        <li style="list-style-type: none;">How will I go to the park from the hospital?
        </li>

        <li style="list-style-type: none;">How will I go to the Italian restaurant from the dormitory?
        </li>

        <li style="list-style-type: none;">How will I go from the bookstore to the cafe?
        </li>

        <li style="list-style-type: none;">Where is the police station?
        </li>


</div>



<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What city do you live in?
  </li>

  <li>How long have you been living there?
  </li>

  <li>Why are you living there?
  </li>

  <li>Are you happy with it? Why or why not?
  </li>

  <li>What are the advantages of living in your city? Disadvantages?
  </li>

  <li>If you could change one thing about your city, what will it be?
  </li>

  <li>What are the famous tourist spots there?
  </li>

  <li>Where is the hospital?
  </li>

  <li>Where is your home?
  </li>

  <li>Where is the mall? The supermarket?
  </li>

  <li>Where is your favorite cafe or restaurant?
  </li>

  <li>Where is your office/school?
  </li>

  <li>Where do you usually hang out with your friends?
  </li>

  <li>Where is your city located in your country?
  </li>

  <li>Do you plan to live in your city forever? Why or why not?
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
       dialogs:[
        {
          name:'M :',
          speech:"Excuse me Miss. Good day to you! I would like to ask how to get back to the hotel. I think I got lost from wandering around the city."
        },
        {
          name:'F :',
          speech:"Good day! Oh, you just walk straight along this road and turn right. Continue walking until you see the bakeshop then turn left. You should be able to see the hotel building."
        },
        {
          name:'M :',
          speech:"Umm .. Can you please repeat that? I didn't catch everything!"
        },
        {
          name:'F :',
          speech:"Oh, I will just write you a map. Can you wait a minute please?"
        },
        {
          name:'M :',
          speech:"Sure! Thank you very much! "
        },
        {
          name:'F :',
          speech:"You're welcome. Just be careful next time."
        },
        {
          name:'M :',
          speech:"Can you also tell me how to get to the Palm Spring's Resort?"
        },
        {
          name:'F :',
          speech:"Oh, I think I need to draw another map then!"
        },
       ],
       dialogs2:[
        {
          name:'F :',
          speech:"Are you sure that the pet clinic is across Dolly's Shop? There seems to be no pet shop here'"
        },
        {
          name:'M :',
          speech:"Yes, I am sure. According to the veterinarian, we just need to walk along Demi Street and turn left. I am pretty sure she said it is across Dolly's Shop."
        },
        {
          name:'F :',
          speech:"Their office used to be inside the mall near my office. I don't know why they were relocated. It was much more convenient for me if they were still there."
        },
        {
          name:'M :',
          speech:"But the good thing here is that it is now near the nicest cafes in the city!"
        },
        {
          name:'F :',
          speech:"Look, over there! It's the pet shop!"
        },
        {
          name:'M :',
          speech:"Finally we found it!"
        },
        {
          name:'F :',
          speech:"And it is across Rolly's Shop, not Dolly's!"
        },
       ],
       translations:[
        {
          name:'M :',
          speech:"실례합니다, 아가씨. 좋은 하루 보내세요! 호텔로 어떻게 돌아가는지 물어보고 싶어요. 시내를 배회하다가 길을 잃은 것 같아서요."
        },
        {
          name:'F :',
          speech:"좋은 하루입니다! 아, 이 길을 곧장 걸어가다가 오른쪽으로 꺾으세요. 베이크샵이 보일 때까지 계속 걷다가 왼쪽으로 돌으세요. 호텔 건물을 볼 수 있을 거예요."
        },
        {
          name:'M :',
          speech:"음.. 다시 한 번 말해줄래? 제가 다 이해한게 아니라서요!"
        },
        {
          name:'F :',
          speech:"아, 지도만 하나 바로 그려드릴게요. 잠깐만 기다려 주시겠어요?"
        },
        {
          name:'M :',
          speech:"물론이죠! 정말 고마워요!"
        },
        {
          name:'F :',
          speech:"천만에요. 다음부터는 조심해요."
        },
        {
          name:'M :',
          speech:"팜스프링 리조트에 어떻게 가는지도 가르쳐 줄래요?"
        },
        {
          name:'F :',
          speech:"아, 그럼 다른 지도를 그려야 할 것 같아요!"
        },
       ],
       translations1:[
        {
          name:'F :',
          speech:"동물병원이 돌리스 가게 건너편에 있는 게 확실해? 여기는 동물가게가 없는 것 같아."
        },
        {
          name:'M :',
          speech:"그래, 확실해. 수의사 말로는 데미 가를 따라 걸어가서 왼쪽으로 돌면 된다고 하던데. 나는 그녀가 동물병원이 돌리스 가게 건너편에 있다고 말했다고 확신해"
        },
        {
          name:'F :',
          speech:"그들의 사무실은 내 사무실 근처 쇼핑몰 안에 있었어. 나는 그들이 왜 재배치되었는지 모르겠어. 그들이 아직 거기 있으면 내게 훨씬 편했어."
        },
        {
          name:'M :',
          speech:"하지만 여기서 좋은 점은 이제 이 도시에서 가장 좋은 카페 근처에 있다는 거야!"
        },
        {
          name:'F :',
          speech:"저기 봐! 동물 가게야!"
        },
        {
          name:'M :',
          speech:"드디어 찾았어!"
        },
        {
          name:'F :',
          speech:"그리고 그건 롤리 가게 건너편에 있어. 돌리가 아니라!"
        },
       ],


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

body{

  font-size: 16px;
}

</style>
