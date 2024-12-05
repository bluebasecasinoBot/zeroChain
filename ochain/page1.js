import { __c, __g, __p, __SYD, __u, __v } from "./sydneyDom_v2.js"

__SYD.page1 = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:30px;padding:0 10px;background-image:url('./assets/front.png');padding-top:90px;"
        },
        [
            __c(
                "div",
                {
                    style:"display:flex;align-items:center;width:100%;max-width:800px;min-height:400px;"
                },
                [
                    __c(
                        "h1",
                        {style:"text-align:center;font-family:shine;text-shadow:1px 1px 1px #141414;position:relative;"},
                        [
                            __p(['page1' , 'write'] , "") , __c("small",{style:"margin-left:15px;display:inline;",class:"autoType"},[]),
                        ]
                    ),
                ]
            ),
            __SYD.launch_app_btn()
        ],
        {
            genericStyle:['bg_cover'],
            createState:{
                stateName:"page1",
                state:{
                    text:"Empowering Your Crypto Journey with Privacy, Security, and Freedom",
                    write:"",
                    autoType:() =>{
                        const state = __g("page1")
                        if(__p(['page1' , 'write'] , "").length < __p(['page1' , 'text'] , "").length)
                        {
                            state.write = state.text.slice(0 , state.write.length+1);
                        }
                        __u("page1" , {type:"a" , value:state})
                    },
                    restartType:() =>{
                        const state = __g("page1");
                        state.write = "";
                        __u("page1" , {type:"a" , value:state})
                    },
                    init_count:() =>{
                            __v["page1"].querySelector("h1").classList.add("h1_animate")
                    },
                    del_count:() =>{
                        __v["page1"].querySelector("h1").classList.remove("h1_animate")
                    }
                }
            }
        }
    )
}