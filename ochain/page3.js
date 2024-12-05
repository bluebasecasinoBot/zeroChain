import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page3 = () =>{
    return __c(
        "div",
        {
            style:"min-height:unset;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:2.5rem;background:unset;padding:10px 10px;",
            class:`${__p(['page3','animate'],false) ? "join_animate" : ""}`
        },

        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '40px' : '25px'};text-transform:capitalize;font-weight:700;padding:5px;width:100%;color:#1490ce;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`,
                    class:"text1"
                },
                [
                    'join us',
                ]
            ),
            __SYD.community_btn()
        ],
        {
            createState:{
                stateName:"page3",
                state:{
                    animate:false,
                    init_count:() =>{
                        const state = __g('page3');
                        state.animate = true;
                        __u('page3' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page3');
                        state.animate = false;
                        __u('page3' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}