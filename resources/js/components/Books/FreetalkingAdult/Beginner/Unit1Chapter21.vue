<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="//live.staticflickr.com/4862/33052645958_51a0b83f88_k.jpg">

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
        padding-bottom: 10px;">Superheroes</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>One of the most popular superheroes of all time would definitely be Batman. Created in 1939 by DC comics, the fictional Batman is the secret identity of Bruce Wayne, an American billionaire. He witnessed the murder of his parents as a boy and swore to revenge on the criminals because of the injustice that he received. To many, he has been a favorite because he does not possess superpowers but only uses his intellect, wealth, technology and martial arts skills to protect the ordinary citizens of Gotham
City. He vastly and hastily gained popularity after his character was introduced.  He has been adapted into movies, books, video games and TV shows.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">


<li style="list-style-type: none;"><u>Definitely(adv)</u> -  surely <span class = "korean">분명히[틀림없이]; 절대, 확실히, 분명히</span>
</li>

<li style="list-style-type: none;"><u>Swore(v)</u> -   to promise <span class = "korean">맹세하다, 선서[맹세]하다</span>
</li>

<li style="list-style-type: none;"><u>Revenge(n)</u> -  punishment for a harm done by somebody <span class = "korean">복수, 보복, 설욕</span>
</li>

<li style="list-style-type: none;"><u>Intellect(n)</u> -   intelligence <span class = "korean">지적 능력, 지력, 지적 능력이 뛰어난 사람</span>
</li>

<li style="list-style-type: none;"><u>Vastly(adv)</u> - widely <span class = "korean">대단히, 엄청나게</span>
</li>
 
<li style="list-style-type: none;"><u>Hastily(adv)</u> - very fast <span class = "korean">급히, 서둘러서, 허둥지둥; 성급하게, 경솔하게</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Are you planning to take __________ on your enemy?
  </li>

  <li>I __________ to Tina that I will attend her party!
  </li>

  <li>That is ___________ a nice dress! I like it!
  </li>

  <li>Gangnam Style is _____________ known all over the world.
  </li>

  <li>We must use our ____________ to help other people and improve the world.
  </li>

  <li>We ___________ packed our bags because we were in a hurry.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What was the article about?
</li>

<li>Who is Batman?
</li>

<li>How did he become a superhero?
</li>

<li>What does use to protect the people?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;" class = "korean">

  <p>역사상 가장 인기 있는 슈퍼히어로들 중 하나는 단연 배트맨일 것이다. 1939년 DC 코믹스에 의해 만들어진 가상의 배트맨은 미국의 억만장자인 브루스 웨인의 비밀스러운 정체성이다. 그는 어렸을 때 부모를 살해하는 것을 목격했고, 자신이 받은 억울함 때문에 범인들에게 복수를 맹세했다. 많은 사람들에게 그는 슈퍼파워를 가지고 있지 않고 오직 고섬시(뉴욕시)의 일반 시민들을 보호하기 위해 그의 지적 능력, 부, 기술, 무술 기술을 사용하기 때문에 많은 사람들에게 인기가 있었다. 그는 캐릭터가 소개된 후 엄청나게 그리고 성급하게 인기를 얻었다. 그는 영화, 책, 비디오 게임, TV 쇼로 각색되었다.
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
