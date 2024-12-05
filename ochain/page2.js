import { __c, __SYD , __p , __u , __g , __sC} from "./sydneyDom_v2.js"

__SYD.page2 = () =>{
    return __c(
        "div",
        {
            style:"min-height:100vh;height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:5rem;background-attachment:fixed;padding:10px 10px;background-color:#141414;background-image:url(./assets/feature.png);"
        },
        [
            __c(
                'div',
                {
                    style:`font-size:${__p(['subContainer','scaled'],false) ? '60px' : '35px'};text-transform:uppercase;font-weight:700;padding:5px;width:100%;color:#1490ce;text-align:center;text-shadow:3px 3px 0px #01283c;font-family:shine;`
                },
                [
                    'Key Features'
                ]
            ),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:5rem;"
                },
                [
                    __SYD.page3_child1({content:'Only you control your keys. With ZeroChain, there’s no third-party risk—your assets remain in your hands, always.' , title:'Self-Custody' , align:'right' , img:'self.png' , delay:'.3'}),

                    __SYD.page3_child1({content:'Access, manage, and swap assets across multiple blockchains with ease. ZeroChain supports Ethereum, Binance Smart Chain, Solana, and many more, offering you a true cross-chain experience. Swap tokens securely across chains without leaving the wallet.' , title:'Multi-Chain, Cross-Chain Freedom' , align:'left' , img:'free.png' , delay:'.8'}),
        
                    __SYD.page3_child1({content:'ZeroChain integrates with the best multi-chain DEXs, ensuring deep liquidity and fast, cost-effective swaps across chains. Maximize your assets, minimize your fees, all in one place.' , title:'Decentralized Exchange (DEX)' , align:'right' , img:'dex.png' , delay:'1.2'}),
        
                    __SYD.page3_child1({content:'Whether you’re swapping tokens or transferring assets, your privacy is our top priority. With built-in privacy protocols like **CoinJoin, **zk-SNARKs, and **Tornado Cash*, your transactions are anonymous and shielded from prying eyes.' , title:'Privacy by Default' , align:'left' , img:'privacy.png' , delay:'1.6'}),
                ]
            )
        ],
        {
            createState:{
                stateName:'page2',
                state:{
                        show:false,
                        animate:false,
                        init_count:() =>{
                            const state = __g('page2');
                            state.animate = true;
                            __u('page2' , {type:'a' , value:state})
                        },
                        del_count:() =>{
                            const state = __g('page2');
                            state.animate = false;
                            __u('page2' , {type:'a' , value:state})
                        }
                    }
            },
            mediaQuery:{
                query:[{size:'<750px' , prop:{show:true}}],
                defState:{show:false}
            },
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.page3_child1 = ({content,title,align,img = '',delay = '0'} = {}) =>{
    return __c(
        'div',
        {
            style:`animation-delay:${delay}s;display:flex;height:fit-content;width:100%;flex-direction:column;position:relative;overflow-x:hidden;overflow-y:hidden;row-gap:15px;`,
            class:`${__p(['page2','animate'],false) ? `${align === 'left' ? 'left_incoming_css_animation' : 'right_incoming_css_animation_custom_slider'}` : ''} ${__p(['page2','animate'],false) ? "feature_animate" : ""}`
            // class:__p(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? 'child_s_image_comp__left_compiment' : 'child_s_image_comp__right_compiment') : 'child_s_image_comp'
        },
        [
            __SYD.floatingText({content,title,align,delay}),
            __SYD.broadImg({align:align , img:img , delay})
        ]
    )
}

__SYD.floatingText = ({content = '' , title = '' , align = 'left' , delay} = {}) =>{
    // console.log(__p(['page2','show'],false))
    return __c(
        'p',
        {
            style:`z-index:10;min-height:${__p(['subContainer','scaled'],false) ? '100%' : '50%'};height:fit-content;width:${__p(['subContainer','scaled'],false) ? '50%' : '100%'};overflow-x:hidden;position:${__p(['subContainer','scaled'],false) ? 'absolute' : 'static'};top:0;${align == 'left' ? 'left:0;' : 'right:0;'}max-width:${__p(['subContainer','scaled'],false) ? '50%' : 'unset'};background:#141414;${align === 'left' ? 'border-top-right-radius:25px;' :'border-top-left-radius:25px;'}border-${align === 'left' ? 'right' : 'left'}:1px solid rgba(255,255,255,.2);transform:translateX(${align === 'left' ? '-5px' : '5px'});box-shadow:1px 0 5px transparent;text-align:${__p(['subContainer','scaled'],false) ? "left" : "center"};animation-delay:${delay}s;`+__sC.page3FloatText(),
            class:`text`
        },
        [
            __c(
                'div',
                {
                    style:'font-size:25px;font-weight:unset;padding:10px;color:#fff;width:100%;max-width:400px;font-family:shine;margin-bottom:5px;',
                    class:"mainTitle_text"
                },
                [
                    title
                ]
            ),
            __c(
                'p',
                {
                    style:`font-size:18px;padding${__p(['subContainer','scaled'],false) ? "-left" : ""}:10px;line-height:25px;color:#fff;font-weight:900;max-width:400px;`,
                    class:'floatingTxt'
                },
                [
                    __c('span',{style:'font-size:30px;margin-right:5px'},['"']),
                    __c("p",{style:"padding:8px;display:inline;background:#33333329;"},[content]),
                    __c('span',{style:'font-size:30px;margin-left:5px'},['"']),
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750',prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

__SYD.broadImg = ({align = '' , img , delay} = {}) =>{
    return __c(
        'div',
        {
            style:`height:100%;width:${__p(['subContainer','scaled'],false) ? "calc(50% + 50px)" : "100%"};min-height:500px;max-height:500px;background-position:${__p(['subContainer','scaled'],false) ? (align == 'left' ? 'center' : 'center') : 'center'} center;background-image:url("../assets/${img}");border-radius:25px;border-width:1px;animation-delay:${delay}s;align-self:${align == 'left' ? "flex-end" : "none"};`,
            class:`thin_border transparent_comp img`
        },[],{
            events:{
                // onmouseover:(e) =>{
                //     e.target.classList.add('h_page_1_cont_large_image_custom')
                // },
                // onmouseout:(e) =>{
                //     e.target.classList.remove('h_page_1_cont_large_image_custom')
                // },
            },
            genericStyle:['bg_fit']
        }
    )
}