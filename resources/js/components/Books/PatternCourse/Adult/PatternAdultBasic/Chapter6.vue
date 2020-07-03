<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwNTdwQ8/5/screen_2x/canva-white-and-black-floral-cap-sleeved-shirt-MADGwNTdwQ8.jpg">

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
    border-radius: 30px;">This and That
  </h1>
      </v-layout>
    </v-img>


    <h2 style="padding-top : 10px;
               padding-left : 15px;
               padding-bottom: 10px;">Preview</h2>

  <hr width="60%">
  <div style="padding : 15px;">


<p>

<v-container grid-list-md text-xs-left>
    <v-layout row wrap>


        <v-flex xs12>
        <v-card light color="#d7eaea">
          <v-card-text class="px-10">

          <p><i>“This is…” “These are…” “That is…” and “Those are…”  <span style="font-size:14px">/ 이것(들)은 … 이다.</span></i></p>

          <hr />

          <p>
            These and those are plural words. They refer to more than one thing.
          </p>

          <p style="margin-bottom: 0px;">
            Example:<i>These flowers are pretty. (near or holding the flowers)</i>
          </p>
          <li style="list-style-type: none; margin-top: 0px;  margin-left: 60px;"><i>Those flowers in the garden are beautiful. (pointing at the flowers)</i></li>

          <p>
            The word “these” refers to more than one flower.
          </p>

          <p>
            This and that are singular words. They refer to only one thing.
          </p>

          <p style="margin-bottom: 0px;">
            Example:<i>That plant needs water. (pointing at the plant)</i>
          </p>
          <li style="list-style-type: none; margin-top: 0px;  margin-left: 60px;"><i>This plant needs sunshine. (near or holding the plant)</i></li>

          <p>
            The word “that” refers to only one plant.
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
    border-radius: 30px;">Getting Started</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

<h3>A. Dialogue
</h3>

<table style = "border-collapse: collapse;">
    
  <tr v-for="dialog in dialogs">
    <td class = "uppertable" >{{dialog.name}}</td>
    <td class = "lowertable" >{{dialog.speech}}</td>
  </tr>

</table>

<table style = "font-family: arial,
                sans-serif;
                border-collapse: collapse;
                width: 100%;
                margin-top : 16px;">

<tr style = "background-color: #696969;">
  <td style ="color:#f7faf8; border: 1px solid #dddddd; text-align: left; padding: 8px; border: 1px solid #141414;">If the item is...</td>
  <td style = "color:#f7faf8; border: 1px solid #dddddd; text-align: left; padding: 8px; border: 1px solid #141414;">Singular</td>
  <td style = "color:#f7faf8; border: 1px solid #dddddd; text-align: left; padding: 8px; border: 1px solid #141414;">Plural</td>
  <td style = "color:#f7faf8; border: 1px solid #dddddd; text-align: left; padding: 8px; border: 1px solid #141414;">Examples</td>
</tr>
<tr>
  <td class="tableData">Near in time or space</td>
  <td class="tableData">This</td>
  <td class="tableData">These</td>
  <td class="tableData"><ol>
    <li>
      <i>Would you like this book?</i>
    </li>
    <li>
      <i>I went for a walk this morning.</i>
    </li>
    <li>
      <i>I brought you these fruits.</i>
    </li>
    <li>
      <i>What makes him busy these days?</i>
    </li>
  </ol></td>
</tr>
<tr>
  <td class="tableData">Distant in time or space</td>
  <td class="tableData">That</td>
  <td class="tableData">Those</td>
  <td class="tableData"><ol>
    <li>
      <i>Please bring me that toy.</i>
    </li>
    <li>
      <i>I had been outside that afternoon.</i>
    </li>
    <li>
      <i>I forgot to bring those clothes you wanted.</i>
    </li>
    <li>
      <i>What were you up to during those months you were gone?</i>
    </li>
  </ol>
  </td>
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
    border-radius: 30px;">Translation
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
  <table style = "border-collapse: collapse;">

    <tr v-for="translation in translations">
      <td class = "uppertable" >{{translation.name}}</td>
      <td class = "lowertable" >{{translation.speech}}</td>
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
    border-radius: 30px;">Activity
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

<h3>A. Pattern Exercise: Choose the correct answer inside the parenthesis.</h3>

<ol style="margin: 12px;">
  <li>
    I don’t know why I’m wearing my hair <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> way. (this, those)
  </li>
  <li>
    Did you eat <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> cookies on the table? (those, that)
  </li>
  <li>
    <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> notebooks on my desk don’t have names on them. (these, this)
  </li>
  <li>
    Remember <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> show we watched a week ago? (that, those)
  </li>
  <li>
    <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> Palm trees are growing very tall. (These, This)
  </li>
  <li>
    <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> storm we had last night kept me awake. (Those, That)
  </li>
  <li>
    Did you buy <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> corn chips at the market? (that, those)
  </li>
  <li>
    Ask <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> man where the school is. (that, those)
  </li>
  <li>
    How many of <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> tables here do you need? (these, this)
  </li>
  <li>
    <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> shirts here are quite expensive. (These, This)
  </li>
</ol>

<h3>B.	Pattern Exercise: Make your own sentence using the situations below.
</h3>

<ol style="margin: 12px;">
  <li>
   A girl holding a bag
  </li>
  <p style="list-style-type: none; margin-top: 0px; margin-bottom: 0px;">
   Ex. This bag is expensive.
  </p>
  <li>
    A man pointing at a painting
  </li>
  <li>
   A child pointing at the birds flying
  </li>
  <li>
    A lady jogged yesterday morning
  </li>
  <li>
    A man will walk to the park in the afternoon
  </li>
  <li>
    A girl looking closely at the jewelry
  </li>
  <li>
   A mother holding books for her child
  </li>
  <li>
   A father pointing at a huge ball
  </li>
  <li>
    A woman trying on the pair of shoes
  </li>
  <li>
    A girl pointing at the beautiful dress
  </li>
</ol>



<h3>C. Pattern Exercise: Make a sentence using the picture. Follow the featured pattern.
</h3>

<p><i>“This is”, “These are”, “Those are”, ‘That is”</i></p>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGx3XhI6Y/4/screen_2x/canva-multicolored-shoe-lot-MADGx3XhI6Y.jpg">
                               </v-card-media>

                               <v-card-text>
                                1. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>


                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>


<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>


                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGxiM6Zaw/5/screen_2x/canva-woman-playing-guitar-MADGxiM6Zaw.jpg">
                               </v-card-media>

                               <v-card-text>
                                2. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>


                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGx4JRp-w/4/screen_2x/canva-person-wearing-gold-colored-ring-MADGx4JRp-w.jpg">
                               </v-card-media>

                               <v-card-text>
                                3. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGyUR5Nts/4/screen_2x/canva-man-in-brown-robe-carrying-bag-smiling-MADGyUR5Nts.jpg">
                               </v-card-media>

                               <v-card-text>
                                4. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGxnZKa3I/4/screen_2x/canva-woman-reading-book-MADGxnZKa3I.jpg">
                               </v-card-media>

                               <v-card-text>
                                5. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGyPBqTS0/4/screen_2x/canva-boy-standing-near-fence-pointing-on-the-sky-MADGyPBqTS0.jpg">
                               </v-card-media>

                               <v-card-text>
                                6. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGv_8j2vM/6/screen_2x/canva-woman-surrounded-by-sunflowers-raising-hand-MADGv_8j2vM.jpg">
                               </v-card-media>

                               <v-card-text>
                                7. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADQ5BHZWrk/1/screen/canva-brunette-woman-on-white-background-MADQ5BHZWrk.jpg">
                               </v-card-media>

                               <v-card-text>
                                8. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="//live.staticflickr.com/7322/11515884955_61443644a9_5k.jpg">
                               </v-card-media>

                               <v-card-text>
                                9. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container grid-list-md text-xs-center>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-card-media src="https://marketplace.canva.com/MADGx9l2kqo/4/screen_2x/canva-woman-at-shoe-store-MADGx9l2kqo.jpg">
                               </v-card-media>

                               <v-card-text>
                                10. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; .</u>
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<h2  style="margin-left: -40px
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Vocabulary
</h2>

  <p>
   <ol style="padding-right: 20px;">
     <li>
       plural - a noun is the form of it that is used to refer to more than one person or thing. / plural <span style="font-size:14px">복수형</span>
     </li>
     <li>
       jewellery - ornaments that people wear, for example rings, bracelets, and necklaces.
       It is often made of a valuable metal such as gold, and sometimes decorated with precious stones. /  jewellery <span style="font-size:14px">귀금속</span>
     </li>
     <li>
       distant - very far away. / distant <span style="font-size:14px">먼</span>
     </li>
   </ol>
  </p>

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
          name:'Joanne:',
          speech:'I like this shirt. I think it will look good on me.'
        },
        {
          name:'Jessy:',
          speech:'I like this one better. I think it’s a good fit.'
        },
        {
          name:'Joanne:',
          speech:'How about these skirts? Do you think they’re nice?'
        },
        {
          name:'Jessy:',
          speech:'Ummm.. Let’s try those over there.'
        },
        {
          name:'Joanne:',
          speech:'Alright then, let’s try on those.'
        },
        ],

        translations:[
        {
          name:'조앤:',
          speech:'난 이 셔츠가 좋아. 나한테 잘 어울릴 것 같아.'
        },
        {
          name:'제시:',
          speech:'난 이게 더 좋아. 잘 맞는 것 같아.'
        },
        {
          name:'Joanne:',
          speech:'이 치마들은 어때? 너는 그들이 좋다고 생각하니?'
        },
        {
          name:'Jessy:',
          speech:'음.. 저기 있는 거 입어보자.'
        },
        {
          name:'Joanne:',
          speech:'그럼, 그거 입어보자.'
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

.tableData{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  border: 1px solid #141414;
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
