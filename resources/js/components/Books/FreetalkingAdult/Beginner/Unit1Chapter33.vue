<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADGviUzFw0/7/screen/canva-photo-of-people-walking-in-the-street-MADGviUzFw0.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(13, 13, 13, 0.7);
       width: 100%;
       padding-top : 10px;
       padding-left : 10px;
       padding-bottom: 10px;">Neighborhood</h1>
                </v-layout>
            </v-img>


            <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
            <div style="padding : 16px;">

                <p>We are immigrants from Asia and it has only been a month since we settled in a neighborhood in California. Across our home lives the Dela Cruz family who became our friends. Last month, they invited us into their home for their
                    daughter's debut party despite the fact that we were not acquainted well. Mr. Dela Cruz helps my father find his way through the busy city streets and job openings. His wife, Gina who is extremely sociable and funny, helps my
                    mother cook new dishes and shop in supermarkets. This morning, I saw the house beside ours being occupied by a new family. I wonder if we can also be friends with them.
                </p>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

                <div style="padding : 16px;">



                    <li style="list-style-type: none;"><u>Immigrants(n)</u> - a newcomer to a country and will settle there <span style="font-size:16px">이민자[이주민]</span>
                    </li>

                    <li style="list-style-type: none;"><u>Across(prep)</u> - on the opposite side; going to the opposite side <span style="font-size:16px">건너서, 가로질러, …쪽으로, 맞은편에, 가로로, 가로 열쇠의</span>
                    </li>

                    <li style="list-style-type: none;"><u>Debut(n)</u> - first public appearance; a girl’s 18th birthday for many cultures <span style="font-size:16px">데뷔, 첫 출연[출전]</span>
                    </li>

                    <li style="list-style-type: none;"><u>Acquaint(v)</u> - to be aware of something <span style="font-size:16px">익히다, 숙지하다</span>
                    </li>

                    <li style="list-style-type: none;"><u>Occupy(v)</u> - to take over or live in place <span style="font-size:16px">차지하다, 사용하다[거주하다], 점령[점거]하다</span>
                    </li>


                    <p>Fill in the blanks using the words above.
                    </p>

                    <ol style="margin: 12px;">
                        <li>As new employees of this company, please __________ yourselves of our rules and schedules.
                        </li>

                        <li>The bakery is just ___________ our apartment.
                        </li>

                        <li>It’s either Mr. Kim or Mr. Lee who will __________ the vacant position as manager.
                        </li>

                        <li>The Eiffel tower made its official ___________ in 1889.
                        </li>

                        <li>Most of the Americans are actually English ____________ from Great Britain.
                        </li>

                    </ol>

                </div>

                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

                <div style="padding : 16px;">
                     
                    <ol style="margin: 12px;">
                    <li>Where is the immigrant family originally from?
                    </li>

                    <li>Who lives across them?
                    </li>

                    <li>What did the Dela Cruz family do last month?
                    </li>

                    <li>Who are the two Dela Cruz family members mentioned? What do they do?
                    </li>

                    <li>What did the writer see this morning?
                    </li>
                    </ol>


                </div>
                
                <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

                <div style="padding : 16px;">

                    <p>우리는 아시아에서 온 이민자들이며 캘리포니아의 한 동네에 정착한 지 한 달밖에 되지 않았다. 우리 집 건너편에는 친구가 된 델라 크루즈 가족이 살고 있다. 지난 달, 우리가 잘 알지 못하는데도 불구하고 그들은 딸의 데뷔 파티를 위해 우리를 그들의 집으로 초대했다. Dela Cruz씨는 우리 아버지가 번화한 도시의 거리와 일자리를 통해 길을 찾는 것을 돕는다. 극도로 사교적이고 재미있는 그의 아내 지나씨는 어머니가 새로운 요리를 만들고 슈퍼마켓에서 쇼핑하는 것을 돕는다. 오늘 아침, 나는 우리 옆에 있는 집에 새로운 가족이 이사오는 것을 보았다. 우리도 그들과 친구가 될 수 있을지 궁금하다.
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
