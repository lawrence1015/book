<template>
  <div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
      <div style="padding : 16px;">

            <div style="margin-left: -18px;
            margin-right: -18px;
            margin-bottom: -10px;">
            <v-img src="https://marketplace.canva.com/MADGxjoLRWY/4/screen_2x/canva-portrait-of-cute-girl-MADGxjoLRWY.jpg"></v-img>
          </div>


          <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">
          ( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
          </h3>


          <div style="padding : 16px;">

            <p>I have an elder sister and a younger brother. My sister is tall and pretty. 
               She has light brown eyes and long black hair. She likes to collect action and fantasy novels. 
               She is an avid reader. On the other hand, my brother is a
               sporty guy. His room is filled with colorful posters of athletes. 
               He is tall and tan from playing under the sun.
               We like to hang-out at a seaside restaurant in our town. 
               We like to share hilarious experiences. 
               Although we like different things and have different personalities, we are very close to each other.
            </p>



          </div>

          <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

          <div style="padding : 16px;">



            <li style="list-style-type: none;"><u>Avid</u> - eager or very interested in something <span class = "korean">열심인[열렬한], 열망하는</span>
            </li>

            <li style="list-style-type: none;"><u>Sporty</u> - likes to play sports <span class = "korean">스포츠를 좋아하는[잘하는], 빠르고 날렵한</span>
            </li>

            <li style="list-style-type: none;"><u>Athlete</u> - a sports player <span class = "korean">운동을 잘 하는 사람, 운동선수</span>
            </li>

            <li style="list-style-type: none;"><u>Tan</u> - light brown color <span class = "korean">햇볕에 타다[그을리다]; 햇볕에 태우다</span>
            </li>

            <li style="list-style-type: none;"><u>Seaside</u> - near the sea <span class = "korean">해변[바닷가]</span>
            </li>

            <li style="list-style-type: none;"><u>Hilarious</u> - very funny <span class = "korean">아주 우스운[재미있는]</span>
            </li>

            <p>Fill in the blanks using the words above.
            </p>

            <ol style="margin: 12px;">
              <li>I am an _______ fan of jazz and classical music.
              </li>

              <li>Marie is a __________ girl. She plays tennis and volleyball.
              </li>

              <li>My favorite ________ is Park Ji Sung. He is a soccer player.
              </li>

              <li>After a lot of swimming during the summer, my skin became ___________.
              </li>

              <li>He is a _____________ person. He can make everyone laugh.
              </li>

              <li>We can hear the waves from the ____________ cottage.
              </li>


            </ol>

          </div>

          <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
          <div style="padding : 16px;">


            <ol style="margin: 12px;">
            <li>How does her sister look?
            </li>

            <li>What does she collect?
            </li>

            <li>How does his brother look?
            </li>

            <li>What does his room look like?
            </li>

            <li>What do they like to do?
            </li>

            <li>Can you identify the adjectives in the reading?
            </li>
            </ol>

          </div>

          <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

          <div style="padding : 16px;" class = "korean">

            <p>
              나는 언니와 남동생이 있어. 내 여동생은 키가 크고 예쁘다.
              그녀는 밝은 갈색 눈과 긴 검은 머리를 가지고 있다. 그녀는 액션과 판타지 소설을 모으는 것을 좋아한다.
              그녀는 열렬한 독서가다. 반면에 내 동생은 스포티한 남자다. 그의 방은 선수들의 화려한 포스터로 가득 차 있다.
              그는 키가 크고 햇볕 아래에서 놀아서 햇볕에 그을렸다. 우리는 우리 동네에 있는 바닷가 식당에서 노는 것을 좋아한다.
              우리는 아주 재미있는 경험을 공유하기를 좋아한다. 서로 다른 것을 좋아하고 성격도 다르지만 서로 매우 친하다.
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

  data() {

    return {


    }

  },


  beforeMount() {


  },

  methods: {


  },

  watch: {

    fontSize(current, old) {

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
