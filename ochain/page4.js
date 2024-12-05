import { __c, __SYD , __p , __u , __g , __sC, __v} from "./sydneyDom_v2.js"

__SYD.page4 = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;row-gap:2.5rem;padding:10px 10px;background-image:url(./assets/toke.png);background-attachment:fixed;",
            class:`${__p(['page4','animate'],false) ? "toke_animate" : ""}`
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:capitalize;font-weight:700;padding:5px;width:100%;color:#1490ce;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`,
                    class:"text1"
                },
                [
                    'tokenomics',
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;flex-direction:column;width:100%;row-gap:35px;height:fit-content;align-items:center;"
                },
                [
                    __c(
                        'div',
                        {
                            style:`font-size:${__p(['subContainer','scaled'],false) ? '40px' : '25px'};text-transform:none;font-weight:700;padding:5px;width:100%;color:#fff;text-align:center;`,
                            class:"text2"
                        },
                        [
                            'Total Supply: 1,000,000 Tokens',
                        ]
                    ),

                    __c(
                        'p',
                        {
                            style:`font-size:18px;line-height:25px;color:#fff;font-weight:900;max-width:900px;width:100%;text-align:center;`,
                            class:"text3"
                        },
                        [
                            "ZeroChain Tokenomics: Powering Privacy, Security, and Decentralized Freedom",
                        ]
                    )
                ]
            ),

            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;"
                },
                [
                    __c(
                        "div",
                        {
                            style:`height:fit-content;width:100%;display:flex;flex-wrap:wrap;justify-content:${__p(['subContainer','scaled'],false) ? "flex-start" : "center"};padding-left:${__p(['subContainer','scaled'],false) ? "50px" : "0px"};align-items:flex-start;flex-direction:row;column-gap:40px;row-gap:3rem`,
                            class:"text4"
                        },
                        [
                            __c(
                                'div',
                                {
                                    style:'height:50vw;max-height:300px;min-height:250px;min-width:300px;position:relative;',
                                    class:'page4_child1'
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:`position:absolute;top:0;left:0;height:100%;width:100%;background-image:url("../assets/tok2.png");background-position:center center;opacity:${__p(['about_page','animate'],false) ? '1' : '1'}`,
                                            class:`transparent_comp`
                                        },[],{genericStyle:['bg_cover']}
                                    )
                                ]
                            ),
                            __c(
                                'div',
                                {
                                    style:'height:unset;max-height:400px;min-height:fit-content;min-width:300px;text-align:center;animation-duration:1s;row-gap:30px;text-align:left;max-width:400px;width:100%;' + __sC['page3FloatText']({method:'add',style:{justifyContent:'center',padding:'unset',opacity:__p(['about_page','animate'],false) ? '1' : '1'}}),
                                    class:`page4_child2 ${__p(['about_page','animate'],false) ? 'right_incoming_css_animation_custom_slider' : ''}`
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:`font-size:20px;font-weight:900;padding:0px;color:#fff;width:100%;max-width:400px;text-align:${__p(['subContainer','scaled'],false) ? "left" : "center"};`
                                        },
                                        [
                                            "Empowering a Sustainable and Inclusive Ecosystem"
                                        ]
                                    ),
                                    __c(
                                        'p',
                                        {
                                            style:`height:200px;font-size:20px;padding:0px;width:100%;font-weight:400;line-height:25px;text-align:center;text-align:${__p(['subContainer','scaled'],false) ? "left" : "center"}`
                                        },
                                        [
                                            __c(
                                                "p",
                                                {
                                                    style:"",
                                                    class:"h1_animate"
                                                },
                                                [
                                                    `${__p(['page4' , "text"],[`
                                                        Aimed at fostering growth in the ZeroChain ecosystem. Includes staking rewards, liquidity mining, and partnerships.
                                                        `])[__p(['page4' , "index"],0)]}`
                                                ],
                                                {
                                                    type:"page_4_change_txt"
                                                }
                                            )
                                        ]
                                    ),

                                    __c(
                                        "div",
                                        {
                                            style:`height:60px;width:100%;margin-top:3rem;background:unset;display:flex;column-gap:15px;align-items:center;justify-content:${__p(['subContainer','scaled'],false) ? "flex-start" : "center"};`
                                        },
                                        [
                                            __c(
                                                "div",
                                                {
                                                    style:"min-height:50px;min-width:50px;height:50px;width:50px;border-radius:50%;background-color:#141414;border:1.5px solid #fff;background-image:url('./assets/left.svg');background-size:60%;",
                                                    class:"click"
                                                },[],
                                                {
                                                    genericStyle:["bg_fit"],
                                                    events:{
                                                        onclick: e =>{
                                                            __v['page_4_change_txt'].style.display = "none";
                                                            const state = __g("page4");
                                                            if(state.index > 0)
                                                            {
                                                                state.index--;
                                                            }else
                                                            {
                                                                state.index = 2;
                                                            }
                                                            __u("page4" , {type:"a" , value:state});

                                                            let timer = setTimeout(() => {
                                                                __v['page_4_change_txt'].style.display = "block";

                                                                clearTimeout(timer)
                                                            }, 50);

                                                        }
                                                    }
                                                }
                                            ),
                                            __c(
                                                "div",
                                                {
                                                    style:"padding:5px 10px;"
                                                },
                                                [
                                                    `0${__p(['page4' , "index"],0) + 1} / 03`
                                                ]
                                            ),
                                            __c(
                                                "div",
                                                {
                                                    style:"min-height:50px;min-width:50px;height:50px;width:50px;border-radius:50%;background-color:#141414;border:1.5px solid #fff;background-image:url('./assets/right.svg');background-size:60%;",
                                                    class:"click"
                                                },[],
                                                {
                                                    genericStyle:["bg_fit"],
                                                    events:{
                                                        onclick: e =>{
                                                            __v['page_4_change_txt'].style.display = "none";
                                                            const state = __g("page4");
                                                            if(state.index < 2)
                                                            {
                                                                state.index++;
                                                            }else
                                                            {
                                                                state.index = 0;
                                                            }
                                                            __u("page4" , {type:"a" , value:state});
                                                            let timer = setTimeout(() => {
                                                                __v['page_4_change_txt'].style.display = "block";

                                                                clearTimeout(timer)
                                                            }, 50);
                                                        }
                                                    }
                                                }
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )
        ],
        {
            genericStyle:["bg_cover"],
            createState:{
                stateName:"page4",
                state:{
                    index:0,
                    text:[
                        "Aimed at fostering growth in the ZeroChain ecosystem. Includes staking rewards, liquidity mining, and partnerships.",
                        "Dedicated to funding privacy-focused projects, grants, and DAO-driven initiatives to empower the ZeroChain community.",
                        "Tokens distributed via a fair, decentralized sale process, ensuring accessibility for early supporters and minimizing whale dominance."
                    ],
                    animate:false,
                    init_count:() =>{
                        const state = __g('page4');
                        state.animate = true;
                        __u('page4' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page4');
                        state.animate = false;
                        __u('page4' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}