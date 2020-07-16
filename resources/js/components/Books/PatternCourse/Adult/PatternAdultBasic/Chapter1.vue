<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://media-public.canva.com/MADQ4w39aME/1/screen.jpg">

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
    border-radius: 30px;">Nouns (1) 명사
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
          <u>nouns<span style="font-size:14px">(명사)</span></u> – <span style="font-size:14px">사람·사물·장소·특질·활동을 가리키는 단어.</span>
          </p> <p>
          <u>common nouns<span style="font-size:14px">(보통명사)</span></u> – <span style="font-size:14px">사람, 장소, 사물, 아이디어 또는 사건의 일반화된 이름.
          보통 명사는 보통 문장을 시작하거나 제목의 일부분이 아니면 대문자로 표기되지 않는다.</span>

             </p> <p>
            <i>Ex. girl, boy, book, chocolate</i>
               </p> <p>
            <u>proper nouns<span style="font-size:14px">(고유명사)</span></u> – <span style="font-size:14px">특정한 사람, 장소, 사물, 아이디어, 사건의 이름.
              고유명사는 항상 대문자로 되어 있다.</span>
               </p> <p>
            <i>Ex. Ms. White, Mr. Smith, Suwon City, South Korea</i>

          </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>

</p>






<h2 style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Dialogue</h2>

<table style = "border-collapse: collapse;">
    
  <tr v-for="dialog in dialogs" :key="dialog">
    <td class = "uppertable" >{{dialog.name}}</td>
    <td class = "lowertable" >{{dialog.speech}}</td>
  </tr>

</table>

<hr />

<table style = "border-collapse: collapse;">

  <tr v-for="translation in translations" :key="translation">
    <td class = "uppertable" >{{translation.name}}</td>
    <td class = "lowertable" >{{translation.speech}}</td>
  </tr>

</table>


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

<div style="padding-top : 10px; padding-bottom : 0px;">

<h3>A.	Fill in the blanks with the nouns provided, and identify whether it’s a common (C) or a proper (P) noun.</h3>

<p>

<i>president, Park Geun-Hye, South Korea</i>
<br>
1.	The <u>president</u> of <u>South Korea</u> is <u>Park Geun-Hye</u>.<br>
<pre class="tab">         C         P             P</pre>
<br>
<i>Seoul, city, South Korea</i><br>
2. ______ is the largest ____ in ___________.
<br>
<br>
<i>Psy, singer</i><br>
3. ___ is a famous _______.
<br>
<br>
<i>Jeju Island, place</i><br>
4. __________ is a beautiful _____.
<br>
<br>
<i>English, language</i><br>
5.	_______ is a universal ________.

</p>
</div>

<h3>B.	List down 5 objects that you can see inside the house. Tell whether it’s a common or proper noun.</h3>

<p>
<ol type="1">
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ol>
</p>

<h3>C.	Replace the underlined common nouns with proper nouns.</h3>

<p>
<ol type="1">
<li>Our neighbor bought a new car.
<br>
Answer: <u>Mr. White bought a Hyundai Tucson.</u>
</li>
<br>
<li>My friend works at a company.
<br>
Answer: _________________________________.
</li>
<br>
<li>The president delivered her speech.
<br>
Answer: _________________________________.
</li>
<br>
<li>My colleague bought a new cellphone.
<br>
Answer: _________________________________.
</li>
<br>
<li>The actress is beautiful.
<br>
Answer: _________________________________.
</li>
</ol>
</p>



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
          speech:'Welcome to ABC Company!'
        },
        {
          name:'B:',
          speech:'Thank you Mr. Jones.'
        },
        {
          name:'A:',
          speech:'Have you worked in other companies before?'
        },
        {
          name:'B:',
          speech:'Yes, Mr. Jones. I have worked in New York Enterprises two years ago.'
        },
        {
          name:'A:',
          speech:'Why did you choose to work here in our company?'
        },
        {
          name:'B:',
          speech:'Living in other countries is quite difficult. I want to work here in Korea. Your company is my top choice.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'ABC Company에 온 걸 환영합니다!'
        },
        {
          name:'B:',
          speech:'존스 씨 감사합니다.'
        },
        {
          name:'A:',
          speech:'전에 다른 회사에서 일한 적이 있나요?'
        },
        {
          name:'B:',
          speech:'네, 존스 씨. 저는 2년 전에 New York Enterprises에서 일한 적이 있습니다.'
        },
        {
          name:'A:',
          speech:'왜 우리 회사에서 일하기로 하셨나요?'
        },
        {
          name:'B:',
          speech:'다른 나라에 사는 건 꽤 어렵습니다. 저는 한국에서 일하고 싶습니다. 여러분의 회사가 제 최고의 선택입니다.'
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
