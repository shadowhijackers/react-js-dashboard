(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},23:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),o=(a(23),a(7)),l=(a(30),a(1)),s=a(2),u=a(3),d=a(5),h=a(4),m=(a(31),a(32),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).navigations=n._getNavigations(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.navigations.map((function(e,t){return r.a.createElement("li",{key:t},e.name)}));return r.a.createElement("header",{className:"Header u-shadow"},r.a.createElement("div",{className:"Header__wrapper"},r.a.createElement("section",{className:"Header-left-menu"},r.a.createElement("i",{className:"Header-left-menu__icon icon icon-menu",onClick:this.props.toggleMenuCallBack}),r.a.createElement("nav",null,r.a.createElement("ul",{className:"Header-left-menu__list"},e)))))}},{key:"_getNavigations",value:function(){return[{path:"/",name:"Home"},{path:"/file",name:"File"},{path:"/resize",name:"Resize"},{path:"/changes",name:"All changes saved"}]}}]),a}(r.a.Component)),f=(a(33),a(8)),g=a(10),p=a.n(g),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).chartComponent=r.a.createRef(),n.state={config:n.props.config},n}return Object(u.a)(a,[{key:"_getConfig",value:function(){return Object(l.a)({chart:{type:"bar"},title:{text:""}},this.state.config)}},{key:"componentDidMount",value:function(){var e=this.chartComponent.current.container.current;e.style.height=this.state.config.height,e.style.width=this.state.config.width,this.chartComponent.current.chart.reflow()}},{key:"render",value:function(){var e=this._getConfig();return r.a.createElement(p.a,{highcharts:f,options:e,ref:this.chartComponent})}}]),a}(r.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).chartComponent=r.a.createRef(),n.state={config:n.props.config},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.chartComponent.current.container.current;e.style.height=this.state.config.height,e.style.width=this.state.config.width,this.chartComponent.current.chart.reflow()}},{key:"render",value:function(){var e=this._getConfig();return r.a.createElement(p.a,{highcharts:f,options:e,ref:this.chartComponent})}},{key:"_getConfig",value:function(){return Object(l.a)({chart:{type:"pie"},title:{text:""}},this.state.config)}}]),a}(r.a.Component),y=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"getChartData",value:function(){return{bar:this.getBarChartConfig(),pie:this.getPieChartConfig()}}},{key:"getBarChartConfig",value:function(){return Object(l.a)(Object(l.a)({},this.getChartConfig()),{},{chart:{type:"bar",backgroundColor:"rgba(0,0,0,0)"},series:[{color:"#757ce8",data:[1,5,3,4]}]})}},{key:"getPieChartConfig",value:function(){return Object(l.a)(Object(l.a)({},this.getChartConfig()),{},{width:"150px",height:"120px",chart:{type:"pie",plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,backgroundColor:"rgba(0,0,0,0)"},plotOptions:{pie:{allowPointSelect:!1,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!1}},series:[{name:"Brands",data:[{name:"Chrome",y:61.41},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Other",y:2.61}]}]})}},{key:"getChartConfig",value:function(){return{width:"150px",height:"120px",credits:{enabled:!1},xAxis:{title:!1,labels:{enabled:!1}},yAxis:{title:!1,labels:{enabled:!1}},legend:{enabled:!1},tooltip:{enabled:!1}}}}]),e}(),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).dragStartHandler=function(e){e.dataTransfer.setData("text/plain",e.target.id)},n.dragEndHandler=function(e){e.dataTransfer.clearData("text/plain")},n.state={charts:y.getChartData()},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"Sidenav u-shadow"},r.a.createElement("div",{className:"Sidenav__wrapper"},r.a.createElement("section",{className:"Sidenav-list"},r.a.createElement("ul",{className:"Sidenav-list__container"},r.a.createElement("li",null,r.a.createElement("i",{className:"Sidenav__icon icon icon-update"}),r.a.createElement("label",null,"Update")),r.a.createElement("li",{className:"Sidenav-list__item--active"},r.a.createElement("i",{className:"Sidenav__icon icon icon-bar-chart"}),r.a.createElement("label",null,"Templates")),r.a.createElement("li",null,r.a.createElement("i",{className:"Sidenav__icon icon icon-work"}),r.a.createElement("label",null,"Work")))),this.props.toggleSideNavBody&&r.a.createElement("section",{className:"Sidenav-body"},r.a.createElement("article",{className:"Sidenav-body-item"},r.a.createElement("div",{className:"Sidenav-body-item__header"},r.a.createElement("h4",{className:"u-no-margin"},"Charts"),r.a.createElement("span",null,"See all")),r.a.createElement("div",{className:"Sidenav-body-item__body"},this.props.chartData.map((function(t,a){return r.a.createElement("div",{key:t.id,draggable:"true",id:t.id,onDragStart:function(t){e.dragStartHandler(t)},onDragEnd:function(t){return e.dragEndHandler(t)}},"bar"===t.type?r.a.createElement(v,{config:e.state.charts.bar}):r.a.createElement(b,{config:e.state.charts.pie}))})))))))}}]),a}(r.a.Component),O=E=Object(o.b)((function(e){return e.sideNav}))(E),C=(a(34),Object.freeze({ADD_CHART:"[A4SHEET] ADD Chart"})),j=function(e){return{type:C.ADD_CHART,payload:e}},_=Object.freeze({REMOVE_CHART:"[SIDENAV] REMOVE Chart"}),D=function(e){return{type:_.REMOVE_CHART,payload:e}},S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).dragStartHandler=function(e){e.dataTransfer.setData("text/plain",e.target.id)},e.dropHandler=function(t){t.preventDefault();var a=t.dataTransfer.getData("text"),n=e.props.chartData.find((function(e){return+e.id===+a}));if(n){var r=document.getElementById(n.id),i=e._getPosition(t,n.id),c=i.shiftX,o=i.shiftY;return r.style.left=c,void(r.style.top=o)}var l=e._getPosition(t,a),s=l.shiftX,u=l.shiftY,d=e.props.dispatch;d(j({type:+a%2===0?"bar":"pie",id:a,style:{left:s,top:u}})),d(D({id:+a}))},e.dragOVerHandler=function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"A4Sheet"},r.a.createElement("div",{className:"A4Sheet__page",onDrop:function(t){e.dropHandler(t)},onDragOver:function(t){return e.dragOVerHandler(t)}},this.props.chartData.map((function(t){return r.a.createElement("div",{key:t.id,id:t.id,className:"A4Sheet__chart",draggable:"true",onDragStart:function(t){e.dragStartHandler(t)},style:t.style,onDragEnd:function(t){return e.dragStartHandler(t)}},"bar"===t.type?r.a.createElement(v,{config:y.getBarChartConfig()}):r.a.createElement(b,{config:y.getPieChartConfig()}))}))))}},{key:"_getPosition",value:function(e,t){var a=document.getElementById(t),n=a.getBoundingClientRect(),r=e.target.getBoundingClientRect(),i=e.clientX-(r.left+n.width/2)+"px",c=e.clientY-(r.top+n.height/2)+"px";return a.style.left=i,a.style.top=c,{shiftX:i,shiftY:c}}}]),a}(r.a.Component),N=S=Object(o.b)((function(e){return e.a4Sheet}))(S),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleMenu=function(e){n.setState(Object(l.a)(Object(l.a)({},n.state),{},{isMenuOpened:!n.state.isMenuOpened}))},n.state={isMenuOpened:!0},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Dashboard"},r.a.createElement("div",null,r.a.createElement(m,{toggleMenuCallBack:this.toggleMenu})),r.a.createElement("div",{className:"Dashboard-body"},r.a.createElement("section",{className:"Dashboard-body__side-nav"},r.a.createElement(O,{toggleSideNavBody:this.state.isMenuOpened})),r.a.createElement("main",{className:"Dashboard-body__content"},r.a.createElement(N,null))))}}]),a}(r.a.Component),w=a(6),H={chartData:Array.from({length:3},(function(e,t){return{id:t,type:t%2===0?"bar":"pie"}}))};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.REMOVE_CHART:var a=e.chartData.findIndex((function(e){return e.id===t.payload.id}));return e.chartData.splice(a,1),Object(l.a)(Object(l.a)({},e),{},{payload:t.payload});default:return e}},x=a(17),B={chartData:[]};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.ADD_CHART:return Object(l.a)(Object(l.a)({},e),{},{chartData:[].concat(Object(x.a)(e.chartData),[t.payload])});default:return e}},M=Object(w.combineReducers)({a4Sheet:R,sideNav:A}),T=a(16),I=Object(w.createStore)(M,Object(T.composeWithDevTools)());var P=function(){return r.a.createElement(o.a,{store:I},r.a.createElement("div",{className:"App"},r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.138427c3.chunk.js.map