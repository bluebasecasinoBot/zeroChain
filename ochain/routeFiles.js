import {__sS , __SYD , __c, __p , __u , __g , __sC} from "./sydneyDom_v2.js"


__sS([
    {
        nameTag:"container",
        style:{
            height:"100vh",
            width:"100vw",
            position:"relative",
            // paddingTop:"30px",
            // paddingBottom:"300px",
            overflowX:"hidden",
            overflowY:"scroll",
            backgroundColor:"#141414",
            color:"#fff",
            fontFamily:"jose"
        }
    },

    {
        nameTag:"rad_1",
        style:{
            borderRadius:"10px"
        }
    },

    {
        nameTag:"bookingTabDesign",
        style:{
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
        }
    },

    {
        nameTag:"three_d_style",
        style:{
            boxShadow:` -1px -1px 3px #180505 inset,
            1px 1px 1px #f8a8e466 inset,
            2px 2px 5px #090303 `,
            backgroundColor:"#670015", //"rgba(36, 41, 54, 1)",
            color:"#fff"
        }
    },

    {
        nameTag:"three_d_child",
        style:{
            background:" rgb(24, 26, 36)",
            boxShadow:" 1px 1px 3px #000 inset",
        }
    },

    {
        nameTag:"top_highlight",
        style:{

        }
    },

    {
        nameTag:"txt_shad",
        style:{
            textShadow:"1px 2px 1px #000"
        }
    }
])

__sS([
    {
        nameTag:'hsec3_video_container',
        style:{
            height:'fit-content',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            rowGap:'50px',
            padding:'15px 5px',
            paddingTop:'20px',
            background:'rgba(0,0,0,.1)',
            alignItems:'center',
            position:'relative'
        }
    }
])

__sS([
    {
        nameTag:'page3FloatText',
        style:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'10px 5px',
            overflow:'visible',
        }
    }
])


__SYD.ul_lists_el = ({child , function_ = {}}) =>{
    return __c(
        "li",
        {
            style:"list-style-type:none;",
            // class:"click"
        },
        [
            child
        ],
        {
            events:{
                ...function_
            }
        }
    )
}

__SYD.pTag = ({style = "" , class_ = "" , function_ = {} , id = "" , text , child = []} = {}) =>{
    return __c(
        "p",
        {
            style:`font-weight:300;${style};`,
            class:`${class_}`,
            id:`${id}`
        },
        [
            `${text}`,
            ...child
        ],
        {
            events:{
                ...function_
            }
        }
    )
}

__SYD.launch_app_btn = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:none;border-radius:15px;",
            class:"launch_btn"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700;font-size:14px;text-align:center;"
                },
                [
                   "LAUNCH dApp" 
                ]
            )
            
        ]
    )
}

__SYD.community_btn = () =>{
    return __c(
        "div",
        {
            style:"padding:15px 25px;text-transform:capitalize;border-radius:15px;",
            class:"launch_btn text2"
        },
        [
            __c(
                "p",
                {
                    style:"font-weight:700"
                },
                [
                   "community" 
                ]
            )
            
        ]
    )
}

// __SYD.hsec6_text_img_array = () =>{
//     return createElement(
//         'div',
//         {
//             style:__sC.body1({
//                 method:'add',style:{rowGap:'80px',height:'fit-content',background:'transparent',paddingTop:'80px',paddingBottom:'20px',opacity:__p(['hsec6_text_img_array','animate'],false) ? '1' : '0'}
//             })
//         },
//         [
//             __SYD.page3_child1({content:'Our apartments are designed to make you feel at home. Each unit features plush bedding with premium linens, ensuring restful nights and rejuvenated mornings. Stay connected with high-speed Wi-Fi and keep your clothes fresh with an in-apartment washer and dryer. For your added convenience, we provide complimentary toiletries, a coffee maker, and a work desk, catering to both relaxation and productivity.' , title:'Comfort and Convenience' , align:'left' , img:'a1.jpg' , delay:'0'}),
//             __SYD.page3_child1({content:'Step into our elegantly furnished apartments, where every detail has been considered to enhance your stay. Enjoy spacious living areas with contemporary décor, including comfortable seating, a flat-screen TV, and a fully equipped kitchenette. Cook your favorite meals with ease using top-of-the-line appliances, including a refrigerator, microwave, stovetop, and essential cookware.' , title:'Stylish and Fully Equipped' , align:'right' , img:'a6.jpg' , delay:'.5'}),
//             __SYD.page3_child1({content:'Located in the city of Abuja, our shortlet apartments offer easy access to local attractions, dining, and shopping. Experience the city’s pulse while enjoying a tranquil retreat back at your apartment. Whether you’re exploring nearby landmarks or relaxing after a busy day, our location provides the perfect balance of excitement and serenity.' , title:'Prime Location' , align:'left' , img:'a1.jpg' , delay:'1'}),
//         ],
//         {
//             createState:{
//                 stateName:'hsec6_text_img_array',
//                 state:{show:false,animate:false,init_count:() =>{
//                     console.log('here 6')
//                     const state = __g('hsec6_text_img_array');
//                     state.animate = true;
//                     __u('hsec6_text_img_array' , {type:'a' , value:state})
//                 }}
//             },
//             mediaQuery:{
//                 query:[{size:'<750px' , prop:{show:true}}],
//                 defState:{show:false}
//             }
//         }
//     )
// }