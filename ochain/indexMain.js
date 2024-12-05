import { __c, __m, __sC, __SYD  , __p} from "./sydneyDom_v2.js"
import "./scroll.js"
import "./routeFiles.js"
import "./navBar.js"
import "./page1.js"
import "./about.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./page5.js"
import "./page6.js"



__SYD.container = () =>{
    return __c(
        "div",
        {
            style:__sC['container']() + "background-image:url(./assets/contImg.png)"
        },
        [
            __SYD.subContainer()
        ],
        {
            genericStyle:["bg_cover"],
            type:"container"
        }
    )
}


__SYD.subContainer = () =>{
    const check = __p(["subContainer" , "scaled"],false);

    return __c(
        "div",
        {
            style:`min-height:200%;width:100%;height:fit-content;position:relative;display:flex;padding-top:0px;flex-direction:column;row-gap:9rem;align-items:center;`,
            class:"subContainer"
        },
        [
            __SYD.scaleNav(),
            __SYD.page1(),
            __SYD.about_page(),
            __SYD.page2(),
            __SYD.page3(),
            __SYD.page4(),
            __SYD.page5(),
            __SYD.page6()
        ],
        {
            createState:{
                stateName:"subContainer",
                state:{
                    scaled:false
                }
            },
            mediaQuery:{
                query:[{size:">870px" , prop:{scaled:true}}],
                defState:{scaled:false}
            }
        }
    )
}

__m(__SYD.container());