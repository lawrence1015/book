<template>

<div :style = "{fontSize: fontSize + 'px'}">





<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADGvwjfkYQ/7/screen_2x/canva-abstract-color-painting-MADGvwjfkYQ.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: 0px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어주세요 )</span></h3>
     <div style="padding : 16px;">

<p>Our art professor told us that colors reflect one's personality. I was very curious and interested so I searched the Internet for information. I learned that colors really tell a person's character! My favorite color is green. According to the website, people who like green are those who want to love and be loved.
</p>

<p>Here are the personality meanings for other colors:
</p>

<li style="list-style-type: none;">Red - Active and brave
</li>

<li style="list-style-type: none;">Violet - Helpful
</li>

<li style="list-style-type: none;">Yellow - Cheerful and active
</li>

<li style="list-style-type: none;">Blue- Peaceful and Calm
</li>

<li style="list-style-type: none;">White - Simple and clean
</li>

<li style="list-style-type: none;">Orange - Sociable
</li>

</div>

<h3 style="padding-top: 7px;  margin-left: 0px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Curious</u> -  to be interested <span class = "korean">궁금한; 호기심이 많은 (=inquisitive)</span>
</li>

<li style="list-style-type: none;"><u>Personality</u> - the behavioral, mental and emotional characteristics of a person <span class = "korean">성격, 인격, (매력적이고 흥미로운) 개성</span>
</li>

<li style="list-style-type: none;"><u>Sociable</u> - friendly <span class = "korean">사람들과 어울리기 좋아하는, 사교적인, 붙임성 있는</span>
</li>

<li style="list-style-type: none;"><u>Cheerful</u> - happy and energetic <span class = "korean">발랄한, 쾌활한</span>
</li>

<p>
  <h3>Vocabulary Stop</h3>
</p>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>My sister likes to make many friends. She is _______________.
  </li>

  <li>A person with a nice __________ will have happier relationships.
  </li>

  <li>They are always smiling.  They are ______________.
  </li>

  <li>I am really ___________ about ghosts. Are they real?
  </li>


</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: 0px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">


<ol style="margin: 12px;">
<li>What did the professor tell the writer?</span>
</li>

<li>Why did the writer search the Internet?</span>
</li>

<li>What color does the writer like?</span>
</li>

<li>What does the color say about the writer?</span>
</li>

<li>What is your personality if you like orange?</span>
</li>

<li>What kind of person likes blue? Violet? Red?</span>
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: 0px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">

       <p>
         우리 미술 교수님은 색은 사람의 성격을 반영한다고 하셨다. 나는 매우 궁금하고 흥미가 있어서 인터넷에서 정보를 찾아보았다. 나는 색이 정말 사람의 성격을 말해준다는 것을 배웠다. 내가 가장 좋아하는 색깔은 초록색이다. 웹사이트에 따르면, 초록색을 좋아하는 사람들은 사랑하고 사랑받고 싶은 사람들이다.
         다른 색에 대한 성격적 의미는 다음과 같다.
       </p>

        <p>
          빨간색 - 활동적이고 용감함<br />
          바이올렛 - 도움이 되는<br />
          노란색 - 경쾌하고 활동적<br />
          푸른색-평화롭고 차분한<br />
          흰색 - 단순하고 깨끗한<br />
          오렌지 - 사교적<br />
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
