import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page5 = () =>{
    return __c(
        "div",
        {
            style:"min-height:unset;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:2.5rem;background:unset;padding:10px 10px;padding-bottom:300px;",
            class:`${__p(['page5','animate'],false) ? "toke_animate" : ""}`
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:capitalize;font-weight:700;padding:5px;width:100%;color:#1490ce;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`
                },
                [
                    'incentives',
                ]
            ),

            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;row-gap:20px;column-gap:20px;flex-wrap:wrap;flex-direction:column;"
                },
                [
                    __c(
                        "div",
                        {
                            style:"display:flex;column-gap:20px;row-gap:20px;width:100%;",
                            class:"page5Tabs_parent"
                        },
                        [
                            __c(
                                "div",
                                {
                                    style:"height:150px;border-radius:20px;display:flex;justify-content:center;padding:10px;flex-direction:column;",
                                    class:"transparent_comp page5Tabs text1"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:20px;font-weight:unset;padding:10px;color:#fff;width:100%;max-width:400px;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text"
                                        },
                                        [
                                            "Staking Rewards"
                                        ]
                                    ),
                                    __c("li" , {style:""},["Secure the ZeroChain network by staking $ZCN and earn attractive rewards for your contribution to decentralization and stability."])
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"height:150px;border-radius:20px;display:flex;justify-content:center;padding:10px;flex-direction:column;",
                                    class:"transparent_comp page5Tabs text2"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:20px;font-weight:unset;padding:10px;color:#fff;width:100%;max-width:400px;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text"
                                        },
                                        [
                                            "Liquidity Mining"
                                        ]
                                    ),
                                    __c("li" , {style:""},["Provide liquidity to ZeroChain’s cross-chain pools and earn $ZCN rewards while enabling seamless, cost-effective token swaps."])
                                ]
                            ),
                        ]
                    ),
                    __c(
                        "div",
                        {
                            style:"display:flex;column-gap:20px;row-gap:20px;width:100%;",
                            class:"page5Tabs_parent"
                        },
                        [
                            __c(
                                "div",
                                {
                                    style:"height:150px;border-radius:20px;display:flex;justify-content:center;padding:10px;flex-direction:column;",
                                    class:"transparent_comp page5Tabs text3"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:20px;font-weight:unset;padding:10px;color:#fff;width:100%;max-width:400px;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text"
                                        },
                                        [
                                            "Early Adopter Bonus"
                                        ]
                                    ),
                                    __c("li" , {style:""},["Be among the first to join the ZeroChain revolution and unlock exclusive $ZCN rewards for early adoption and engagement."])
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"height:150px;border-radius:20px;display:flex;justify-content:center;padding:10px;flex-direction:column;",
                                    class:"transparent_comp page5Tabs text4"
                                },
                                [
                                    __c(
                                        'div',
                                        {
                                            style:'font-size:20px;font-weight:unset;padding:10px;color:#fff;width:100%;max-width:400px;font-family:shine;margin-bottom:5px;',
                                            class:"mainTitle_text"
                                        },
                                        [
                                            "Cross-Chain Bridging Incentives"
                                        ]
                                    ),
                                    __c("li" , {style:""},["Earn rewards for facilitating liquidity across multiple blockchains, driving ZeroChain’s multi-chain mission forward."])
                                ]
                            ),
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:"page5",
                state:{
                    animate:false,
                    init_count:() =>{
                        const state = __g('page5');
                        state.animate = true;
                        __u('page5' , {type:'a' , value:state})
                    },
                    del_count:() =>{
                        const state = __g('page5');
                        state.animate = false;
                        __u('page5' , {type:'a' , value:state})
                    }
                }
            }
        }
    )
}