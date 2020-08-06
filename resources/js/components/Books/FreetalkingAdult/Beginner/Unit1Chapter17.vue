<template>
    <div :style="{fontSize: fontSize + 'px'}">

        <v-container fluid ma-0 pa-0>

            <v-layout column>
                <v-img
                    src="https://marketplace.canva.com/MADGx1mhHz0/4/screen_2x/canva-red-and-white-alarm-clock-displaying-9%3A11-MADGx1mhHz0.jpg">

                    <v-layout align-end fill-height pa-0 white--text>
                        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Time</h1>
                    </v-layout>
                </v-img>


                <h3
                    style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">
                    Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
                <div style="padding : 16px;">

                    <p>On September 11, 2001, I woke up at 7:30 AM. My alarm clock had ran out of batteries and I woke
                        up late for work. I panicked out of bed and hastily ate a bowl of cold cereal. I had been
                        promised a promotion in December if I would
                        be able to have an exceptional record for the preceding months. Furthermore, I also have a
                        presentation to make on that morning. I was upset as I rode a cab because the traffic was
                        heavier than ever. "The twin towers collapsed,"
                        the driver told me. That is where my office is.
                    </p>

                    <h3
                        style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">
                        Vocabulary Review</h3>

                    <div style="padding : 16px;">



                        <li style="list-style-type: none;"><u>Panic(v)</u> - to feel great fear and distress <span
                                class = "korean">겁에 질려 어쩔 줄 모르다[모르게 하다]</span>
                        </li>

                        <li style="list-style-type: none;"><u>Hastily(adv)</u> - very fast; in a hurry <span
                                class = "korean">급히, 서둘러서, 허둥지둥; 성급하게, 경솔하게</span>
                        </li>

                        <li style="list-style-type: none;"><u>Exceptional(adj)</u> - extraordinary <span
                                class = "korean">이례적일 정도로 우수한, 특출한, 극히 예외적인 </span>
                        </li>

                        <li style="list-style-type: none;"><u>Furthermore(adv)</u> - in addition <span
                                class = "korean">뿐만 아니라, 더욱이</span>
                        </li>

                        <li style="list-style-type: none;"><u>Cab(n)</u> - taxi <span class = "korean">택시</span>
                        </li>

                        <li style="list-style-type: none;"><u>Collapse (v)</u> - to fall; to break down <span
                                class = "korean">붕괴되다, 무너지다, 쓰러지다</span>
                        </li>


                        <p>Fill in the blanks using the words above.
                        </p>

                        <ol style="margin: 12px;">
                            <li>The tower ____________ when it was bombed.
                            </li>

                            <li>The people ____________when the fire became bigger.
                            </li>

                            <li>The people ____________when the fire became bigger.
                            </li>

                            <li>You are in charge of the tent and tables. ____________, you should also bring some food.
                            </li>

                            <li>We should ride a _____________ because we don’t know this place.
                            </li>

                        </ol>

                    </div>

                    <h3
                        style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">
                        Comprehension</h3>

                    <div style="padding : 16px;">

                        <ol style="margin: 12px;">
                        <li>What time did the writer wake up?
                        </li>

                        <li>Why did he wake up late?
                        </li>

                        <li>Why was he upset when he rode the cab?
                        </li>

                        <li>What did the driver tell him?
                        </li>

                        <li>What would have happened if he wasn’t late for work?
                        </li>
                        </ol>



                    </div>
                    
                     <h3
                        style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">
                        Translation</h3>

                    <div style="padding : 16px;" class = "korean">

                    <p>2001년 9월 11일 아침 7시 30분에 일어났다. 자명종 시계에 배터리가 다 되어서 출근하는데 늦게 일어났다. 나는 당황해서 침대에서 일어나 서둘러 차가운 시리얼 한 그릇을 먹었다. 만약 내가 이전 달 동안 예외적인 기록을 가질 수 있다면 나는 12월에 승진을 약속받을 수 있었을 텐데. 게다가, 나도 그날 아침에 발표해야 할 것이 있었다. 어느 때보다 교통이 혼잡해서 택시를 탔더니 이전보다 고통체증이 심해서 화가 났다. "쌍둥이 빌딩이 무너졌다"고 운전사가 내게 말했다. 거기는 내 사무실이 있는 곳이다.
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
    p {

        margin-top: 10px;
    }

    h3 {
        padding-top: 7px;

    }



    body {

        font-size: 16px;
    }

</style>
