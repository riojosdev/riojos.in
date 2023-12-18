
function addElement() {
    let container = document.getElementById("articles-carousel")
    let newElem = document.createElement("div")
    newElem.setAttribute("class", "article")
    container.append(newElem)
    return {container, newElem}
}

let {container, newElem} = addElement()

let tl = gsap.timeline()

let containerOffset = container.offsetWidth
let containerChildren = container.children
let containerItemWidth = containerChildren[0].offsetWidth
let containerItemCount = containerChildren.length

let spacebetween = (containerOffset - containerItemWidth * containerItemCount) / containerItemCount

let xMove = -parseInt(containerItemWidth)
- (spacebetween)

let posMove = (
    newElem.offsetLeft
    - (spacebetween)
    ) 
gsap.registerPlugin(ScrollTrigger) 
    
tl
    .addLabel("start")
    .to(containerChildren, { 
        x: xMove, 
        duration: 1, 
        scrollTrigger: {
            trigger: "#articles-carousel",
            start: "100px bottom",
            end: "40% center",
            pinSpacing: true,
            preventOverlaps: true,
            scrub: 1,
        }
    })
    .addLabel("spin")
    .fromTo(containerChildren[0], 
        {
            x: xMove,
            duration: 1
        },
        {
            x: posMove, 
            duration: 1, 
            rotation: 360, 
            scrollTrigger: {
                trigger: "#articles-carousel",
                start: "40% center",
                end: "+=100%",
                pin: true,
                pinSpacing: true,
                preventOverlaps: true,
                scrub: 1,
            }
        }
    )
    .addLabel("end")