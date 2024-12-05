import { __SYD, __c, __g, __p, __sC, __u } from "./sydneyDom_v2.js"


__SYD.about_page = () =>{
    return __c(
        'div',
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:space-around;align-items:center;flex-direction:column;row-gap:4rem;background:unset;padding:10px 10px;",//({method:'add',style:{rowGap:'30px',background:'transparent',flexDirection:'row-reverse',justifyContent:'center', flexWrap:'wrap',columnGap:'10px'}})
            class:`${__p(['about_page','animate'],false) ? "about_animate" : ""}`
        },
        [
            // __SYD.text_lib_type_h1_glob({cnt:"Choose Your Apartment Type",size:__p(['about_page','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:uppercase;font-weight:700;padding:5px;width:100%;color:#1490ce;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`
                },
                [
                    'about'
                ]
            ),
            __c(
                "div",
                {
                    style:`height:fit-content;width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;flex-direction:${__p(['subContainer' , 'scaled'] , false) ? "row-reverse" : "column-reverse"};column-gap:10px;row-gap:3rem`
                },
                [
                    __c(
                        'div',
                        {
                            style:'height:80vw;max-height:500px;min-height:400px;min-width:300px;position:relative;border-radius:20px;',
                            class:`about_page_child1 transparent_comp img`
                        },
                        [
                            __c(
                                'div',
                                {
                                    style:`position:absolute;top:0;left:0;height:100%;width:100%;background-image:url("./assets/zChainLogo__.png");background-position:center center;opacity:${__p(['about_page','animate'],false) ? '1' : '1'}`,
                                    // class:`thin_border ${__p(['about_page','animate'],false) ? 'downSlide_animate' : ''}`
                                },[],{genericStyle:['bg_fit']}
                            ),
                            // __c(
                            //     'div',
                            //     {
                            //         style:`position:absolute;top:50%;left:20%;height:calc(100% - 50%);animation-delay:.3s;width:calc(100% - 20%);background-image:url("../assets/a3.jpg");background-position:center 0;opacity:${__p(['about_page','animate'],false) ? '1' : '0'}`,
                            //         class:`thin_border ${__p(['about_page','animate'],false) ? 'topSlide_animate' : ''}`
                            //     },[],{genericStyle:['bg_cover']}
                            // )
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'height:unset;max-height:400px;min-height:fit-content;min-width:300px;text-align:center;animation-duration:1s;row-gap:30px;text-align:center;max-width:400px;width:100%;' + __sC['page3FloatText']({method:'add',style:{justifyContent:'center',padding:'unset',opacity:__p(['about_page','animate'],false) ? '1' : '1'}}),
                            class:`about_page_child2 ${__p(['about_page','animate'],false) ? 'right_incoming_css_animation_custom_slider' : ''}`
                        },
                        [
                            __c(
                                'p',
                                {
                                    style:`font-size:18px;padding:5px;width:100%;font-weight:900;line-height:25px;text-align:${__p(['subContainer','scaled'],false) ? "left" : "center"}`,
                                    class:`text`
                                },
                                [
                                    `ZeroChain is a revolutionary self-custody, multi-chain wallet designed for "privacy-first" users who demand more from their crypto tools.`,
                                    __c("p",{},["At its core, ZeroChain is built for people who want full control of their assets, with no compromises on security or privacy"]),
                                    __c("p",{},["In a world where privacy is becoming increasingly rare and centralized platforms hold the keys to your assets,  ZeroChain is built to give you full control over your digital life."]),
                                    __c("p",{},["With ZeroChain, you're not just using a wallet—you're taking command of your financial future in a decentralized, cross-chain universe, with the ultimate focus on privacy, security and autonomy."])
                                ]
                            )
                        ]
                    )
                ]
            )
        ],
        {
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            },
            createState:{
                stateName:'about_page',
                state:{
                    font:'40px',
                    animate:false,
                    init_count:() =>{
                        const state = __g('about_page');
                        state.animate = true;
                        __u('about_page' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('about_page');
                        state.animate = false;
                        __u('about_page' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}