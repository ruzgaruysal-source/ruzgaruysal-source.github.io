import{PageViewEvent}from"@shopify/events";import{onDocumentReady}from"@theme/utilities";onDocumentReady(function(){const template=document.querySelector("main[data-template]")?.dataset.template||"";document.dispatchEvent(new PageViewEvent({page:{template,title:document.title,url:window.location.href}}))},{once:!0});
//# sourceMappingURL=/a/page-view-event.js-33cb67e4a5.map
