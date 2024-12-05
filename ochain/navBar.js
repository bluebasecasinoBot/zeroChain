import { __c, __g, __p, __SYD, __u, SYD_VAR } from "./sydneyDom_v2.js";

__SYD.scaleNav = () =>{
    const check = __p(["subContainer" , "scaled"],false);

    return __c(
        "div",
        {
            style:`position:fixed;top:0px;bottom:auto;left:0;width:100%;padding:${check ? "20px 30px" : "20px 10px"};display:flex;align-items:center;column-gap:50px;justify-content:space-between;user-select:none;z-index:500;background:${"transparent"};color:${"#ffc2cb"};font-weight:900;transition:unset;box-shadow:0px 2px 3px #000;transform:translateY(-1px);transition:all linear .3s;`//background:linear-gradient(#000,#0000);
        },
        [   
            __SYD.scaleNavComponent(),
            __SYD.siteMainTitle(),
            __SYD.telegram_app_section(),
            __SYD.nav_menu_tog(),
            __SYD.dropDownNavMenu(),
        ],
        {
            createState:{
                stateName:"scaleNav",
                state:{
                    togNav:false
                }
            }  
        }
    )
}


__SYD.siteMainTitle = () =>{
    return __c(
        "div",
        {
            style:"text-transform:uppercase;display:flex;column-gap:5px;width:200px;height:80px;background-image:url(../assets/logo.png);cursor:pointer;background-image:url('./assets/zChainLogo.png')"
        },
        [
            // __SYD.pTag({text:"Ivviera" , style:`text-transform:capitalize;font-family:ivviera;font-size:25px;font-weight:500;color:${SYD_VAR.light_red_theme}`}),
            // __SYD.pTag({text:"title" , style:"font-size:25px;font-weight:900;"}),
        ],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    // navFunction_get({route:""})
                }
            },
            type:"siteMainTitle"
        }
    )
}

__SYD.scaleNavComponent = () =>{

    return __c(
        "nav",
        {
            style:`padding:10px 0;display:${__p(["subContainer" , "scaled"],false) ? "flex" : "none"};column-gap:40px;list-style-type:none;text-transform:capitalize;color:#fff;`
        },
        [
            __SYD.ul_lists_el({child:__SYD.pTag({text:"About" , class_:`` , style:"font-size:18px;font-weight:300;font-family:shine;"})}),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"tokenomics" , class_:`` , style:"font-size:18px;font-weight:300;font-family:shine;"})})
        ]
    )
}

__SYD.nav_menu_tog = () =>{

    return __c(
        "i",
        {
            style:`height:35px;width:35px;font-size:35px;display:${__p(["subContainer" , "scaled"],false) ? "none" : "block"};align-items:center;background-image:url(./assets/menu.svg);margin-right:10px;`,
            class:"fa-solid fa-bars click"
        },[],
        {
            genericStyle:['bg_cover'],
            events:{
                onclick:(e) =>{
                    const state = __g("scaleNav");
                    if(!state.togNav)
                    {
                        e.target.classList.remove("fa-bars");
                        e.target.classList.add("fa-xmark");

                        e.target.style.backgroundImage =  "url(./assets/close.svg)"                      
                    }else
                    {
                        e.target.classList.add("fa-bars");
                        e.target.classList.remove("fa-xmark");

                        e.target.style.backgroundImage =  "url(./assets/menu.svg)"  
                    }
                    state.togNav = state.togNav ? false : true;
                    __u('scaleNav' , {type:"a" , value:state})
                }
            }
        }
    )
}


__SYD.dropDownNavMenu = () =>{
    const check_one = !__p(["subContainer" , "scaled"],false) && __p(['scaleNav' , 'togNav'],false);
    return __c(
        "div",
        {
            style:`height:calc(100vh - 70px);width:100vw;position:absolute;left:50%;transform:translateX(-50%);top:100%;display:${check_one ? "block" : "none"};overflow:hidden;`
        },
        [
            __SYD.dropDownNavMenu_el()
        ]
    )
}

__SYD.dropDownNavMenu_el = () =>{
    return __c(
        "div",
        {
            style:"height:100%;width:100%;background:#171717;display:flex;flex-direction:column;row-gap:20px;padding:20px;color:#fff;text-transform:capitalize;animation-duration:.4s;",
            class:"drop_down_menu navDropDown"
        },
        [
            __SYD.ul_lists_el({child:__SYD.pTag({text:"About" , style:"font-size:22px;font-weight:700;"})}),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Tokenomics" , style:"font-size:22px;font-weight:700;"})}),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Telegram" , style:"font-size:22px;font-weight:700;"})}),
            // __SYD.ul_lists_el({child:__SYD.pTag({text:"terms" , style:"font-size:22px;font-weight:700;"}) , function_:{onclick:() =>{/*write a function here */ navFunction_get({route:"terms"})}}}),

        ]
    )
}

__SYD.telegram_app_section = () =>{
    return __c(
        "div",
        {
            style:`padding:10px 0;display:${__p(["subContainer" , "scaled"],false) ? "flex" : "none"};column-gap:40px;list-style-type:none;text-transform:capitalize;color:#fff;align-items:center;`
        },
        [
            __SYD.ul_lists_el({child:__SYD.pTag({text:"Telegram" , class_:"navClick" , style:"font-size:16px;font-weight:700;"})}),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"X" , class_:"navClick" , style:"font-size:16px;font-weight:700;"})}),
            __SYD.launch_app_btn()
        ]
    )
}
