/*
 * smoothscroll polyfill - v0.3.3
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */
!function(t,e,o){"use strict"
    function l(){function l(t,e){this.scrollLeft=t,this.scrollTop=e}function r(t){return.5*(1-Math.cos(Math.PI*t))}function n(t){if("object"!=typeof t||null===t||t.behavior===o||"auto"===t.behavior||"instant"===t.behavior)return!0
        if("object"==typeof t&&"smooth"===t.behavior)return!1
        throw new TypeError("behavior not valid")}function s(o){var l,r,n
        do o=o.parentNode,l=o===e.body,r=o.clientHeight<o.scrollHeight||o.clientWidth<o.scrollWidth,n="visible"===t.getComputedStyle(o,null).overflow
        while(!l&&(!r||n))
        return l=r=n=null,o}function a(e){e.frame=t.requestAnimationFrame(a.bind(t,e))
        var l,n,s,c=m(),i=(c-e.startTime)/f
        return i=i>1?1:i,l=r(i),n=e.startX+(e.x-e.startX)*l,s=e.startY+(e.y-e.startY)*l,e.method.call(e.scrollable,n,s),n===e.x&&s===e.y?(t.cancelAnimationFrame(e.frame),o):o}function c(o,r,n){var s,c,i,f,p,g=m()
        o===e.body?(s=t,c=t.scrollX||t.pageXOffset,i=t.scrollY||t.pageYOffset,f=u.scroll):(s=o,c=o.scrollLeft,i=o.scrollTop,f=l),p&&t.cancelAnimationFrame(p),a({scrollable:s,method:f,startTime:g,startX:c,startY:i,x:r,y:n,frame:p})}if(!("scrollBehavior"in e.documentElement.style)){var i=t.HTMLElement||t.Element,f=468,u={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,scrollIntoView:i.prototype.scrollIntoView},m=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now
        t.scroll=t.scrollTo=function(){return n(arguments[0])?(u.scroll.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]),o):(c.call(t,e.body,~~arguments[0].left,~~arguments[0].top),o)},t.scrollBy=function(){return n(arguments[0])?(u.scrollBy.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]),o):(c.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)),o)},i.prototype.scrollIntoView=function(){if(n(arguments[0]))return u.scrollIntoView.call(this,arguments[0]||!0),o
            var l=s(this),r=l.getBoundingClientRect(),a=this.getBoundingClientRect()
            l!==e.body?(c.call(this,l,l.scrollLeft+a.left-r.left,l.scrollTop+a.top-r.top),t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:l}:l()}(window,document)