import { __v , __p} from "./sydneyDom_v2.js";

const scroll_element = ['page1' , 'about_page' , 'page2' , 'page3' , 'page4' , 'page5'];//, 'about_page' , 'page2' , 'page3' ,'page4' ,'page5'

const createLabels = () =>{
    const obj = {};
    scroll_element.forEach((val,id) =>{
        obj[`${id}`] = false;
    })
    return obj
}

const scroll_element_labels = createLabels();

addEventListener("DOMContentLoaded" , e =>{
    initiatePage1AutoText()
    __v['container'].addEventListener("scroll" , (e) =>{
        for(let i = scroll_element.length-1; i >= 0 ; i--)
            {
                if(e.target.scrollTop > __v[scroll_element[i]].offsetTop - (window.innerHeight/2))
                {
                    if(!scroll_element_labels[`${i}`])
                    {
                        __p([scroll_element[i],'init_count'],() =>{})();
                        if(scroll_element[i] !== "page1")
                        {
                            __v['scaleNav'].style.backgroundColor = "#171717"
                            // __v['siteMainTitle'].style.backgroundImage = "url('./assets/zChainLogo__.png')"
                        }else
                        {
                            __v['scaleNav'].style.backgroundColor = "#1490ce";
                            // __v['siteMainTitle'].style.backgroundImage = "url('./assets/zChainLogo.png')"
                        }
                    }
                    for(let j = i-1; j >= 0; j--)
                    {
                        if(!scroll_element_labels[`${i}`])
                        {
                            scroll_element_labels[`${j}`] = false;
                            __p([scroll_element[j],'del_count'],() =>{})();
                        }
                    }
        
                    for(let j = i+1; j < scroll_element.length; j++)
                    {
                        if(!scroll_element_labels[`${i}`])
                        {
                            scroll_element_labels[`${j}`] = false;
                            __p([scroll_element[j],'del_count'],() =>{})();
                        }
                    }
                    scroll_element_labels[`${i}`] = true;
                    break;
                }else{
                    scroll_element_labels[`${i}`] = false;
                }
            }
    })
})

addEventListener("scrollend", e =>{//__v[scroll_element[0]].offsetTop - 120
    //window.scrollY
    console.log("scrolling")
    
})

function initiatePage1AutoText()
{
    if(__p(['page1' , 'write'] , "").length >= __p(['page1' , 'text'] , "").length)
    {
        let timer = setTimeout(() => {
            __p(['page1' , 'restartType'] , () =>{})();
            initiatePage1AutoText()
        }, 2000);
    }else
    {
        let timer = setTimeout(() => {
            __p(['page1' , 'autoType'] , () =>{})();

            initiatePage1AutoText()
        }, 100);
    }
}