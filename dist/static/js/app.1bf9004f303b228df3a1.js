webpackJsonp([0],{"+z1e":function(e,t){},"/EtP":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("app-menu",{attrs:{experiments:e.experiments},on:{base_selected:function(t){e.base_selected(t)},compare_selected:function(t){e.compare_selected(t)}}}),e._v(" "),n("app-box-visuals",{attrs:{data:e.surfacetest},on:{rt_mz_selection_change:e.rt_mz_selection_change}}),e._v(" "),n("app-graphs",{attrs:{selectedBaseExperiment:e.selectedBaseExperiment,selectedCompareExperiment:e.selectedCompareExperiment,selectedRtMz:e.selectedRtMz,resetTrigger:e.resetTrigger}})],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},"/WXG":function(e,t,n){"use strict";function a(e){n("K5Jm")}var s=n("crKC"),i=n("mg4o"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-0684d311",null);t.a=c.exports},"3ffd":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-5"},[n("app-graph-holder",{attrs:{name:"mz",experiments_data:e.experiments_data_rt,selection_values:e.rt_selection_values},on:{selection_changed:function(t){e.rt_selection_change(t)}}}),e._v(" "),n("app-graph-holder",{attrs:{name:"rt",experiments_data:e.experiments_data_mz,selection_values:e.mz_selection_values},on:{selection_changed:function(t){e.mz_selection_change(t)}}})],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},"8caJ":function(e,t,n){"use strict";var a=n("qkLy"),s=n("mtWM"),i=n.n(s);t.a={props:["selectedBaseExperiment","selectedCompareExperiment","selectedRtMz","resetTrigger"],data:function(){return{experiments_data_rt:[],experiments_data_mz:[],rt_selection_values:{min:0,max:0},mz_selection_values:{min:0,max:0}}},methods:{pointSelected:function(e){var t=this.selectedRtMz.rt_lower,n=this.selectedRtMz.rt_upper,a=this.selectedRtMz.mz_lower,s=this.selectedRtMz.mz_upper;this.mz_selection_change({min:a,max:s}),this.rt_selection_change({min:t,max:n})},rt_selection_change:function(e){this.rt_selection_values=e;var t=["api/experiments/"+this.selectedBaseExperiment+"/rt?low="+e.min+"&high="+e.max];this.selectedCompareExperiment>0&&t.push("api/experiments/"+this.selectedCompareExperiment+"/rt?low="+e.min+"&high="+e.max);var n=t.map(function(e){return i.a.get(e)}),a=this;i.a.all(n).then(function(e){a.experiments_data_rt=e.map(function(e){return e.data.data})}).catch(function(e){console.log(e)})},mz_selection_change:function(e){this.mz_selection_values=e;var t=["api/experiments/"+this.selectedBaseExperiment+"/mz?low="+e.min+"&high="+e.max];this.selectedCompareExperiment>0&&t.push("api/experiments/"+this.selectedCompareExperiment+"/mz?low="+e.min+"&high="+e.max);var n=t.map(function(e){return i.a.get(e)}),a=this;i.a.all(n).then(function(e){a.experiments_data_mz=e.map(function(e){return e.data.data})}).catch(function(e){console.log(e)})}},watch:{selectedRtMz:function(e){this.pointSelected(e)},resetTrigger:function(){this.experiments_data_rt=[],this.experiments_data_mz=[],this.rt_selection_values={min:0,max:0},this.mz_selection_values={min:0,max:0}}},components:{"app-graph-holder":a.a}}},"8lXs":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:e.name}})])},s=[],i={render:a,staticRenderFns:s};t.a=i},"9dvR":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:e.slider_name}}),e._v(" "),n("p",[e._v(e._s(e.mutable_min_value)+" - "+e._s(e.mutable_max_value))])])},s=[],i={render:a,staticRenderFns:s};t.a=i},D28T:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-5"},[n("div",{attrs:{id:"placeholder_surface_plot"}})])}],i={render:a,staticRenderFns:s};t.a=i},DGMM:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-graph",{attrs:{name:e.name,experiments_data:e.experiments_data}}),e._v(" "),n("app-slider",{attrs:{name:e.name,min:0,max:500,selection_values:e.selection_values},on:{selection_changed:function(t){e.selection_changed(t)}}})],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},GEkf:function(e,t,n){"use strict";t.a={data:function(){return{}}}},GMLF:function(e,t){},IloH:function(e,t){},K5Jm:function(e,t){},LCT6:function(e,t,n){"use strict";var a=n("mtWM"),s=n.n(a),i=n("/WXG"),r=n("kQSa"),o=n("eR3x");t.a={data:function(){return{experiments:[],selectedBaseExperiment:-1,selectedCompareExperiment:-1,surfacetest:[],selectedRtMz:[],resetTrigger:0}},methods:{get_experiments:function(){var e=this;s.a.get("api/experiments").then(function(t){e.experiments=t.data.experiments}).catch(function(e){console.log(e)})},get_experiment_data:function(e){var t=this,n="api/experiments/"+e;s.a.get(n).then(function(e){t.surfacetest={meta_data:e.data.meta,graph_data:{z:e.data.intensities,type:"surface",colorscale:[["0.0","rgb(220,220,220)"],["0.00001","rgb(220,220,220)"],["0.01","rgb(49,54,149)"],["1.0","rgb(49,54,149)"]]}}}).catch(function(e){console.log(e)})},base_selected:function(e){this.selectedBaseExperiment=e,e<0?this.surfacetest={graph_data:{z:[[0,0]],type:"surface"}}:this.get_experiment_data(e),0==this.resetTrigger?this.resetTrigger=1:this.resetTrigger=0},compare_selected:function(e){this.selectedCompareExperiment=e,0==this.resetTrigger?this.resetTrigger=1:this.resetTrigger=0},rt_mz_selection_change:function(e){this.selectedRtMz=e}},created:function(){this.get_experiments()},components:{"app-menu":i.a,"app-box-visuals":r.a,"app-graphs":o.a}}},M93x:function(e,t,n){"use strict";function a(e){n("WpCr")}var s=n("xJD8"),i=n("Vq/C"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,null,null);t.a=c.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s=n("M93x"),i=n("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},Ncpf:function(e,t,n){"use strict";var a=n("Oh1V"),s=n("dDDT");t.a={props:["name","experiments_data","selection_values"],data:function(){return{}},computed:{min_value:function(){return this.selection_values.min},max_value:function(){return this.selection_values.max}},components:{"app-graph":a.a,"app-slider":s.a},methods:{selection_changed:function(e){this.$emit("selection_changed",e)}}}},Oh1V:function(e,t,n){"use strict";function a(e){n("IloH")}var s=n("XFxF"),i=n("8lXs"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-3c7cc4e8",null);t.a=c.exports},VJFb:function(e,t,n){"use strict";function a(e){n("wGEA")}var s=n("GEkf"),i=n("i5l2"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-46f61abf",null);t.a=c.exports},"Vq/C":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("app-header"),e._v(" "),n("div",{staticClass:"container-fluid"},[n("app-main")],1)],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},WpCr:function(e,t){},XFxF:function(e,t,n){"use strict";t.a={props:["name","experiments_data"],data:function(){return{plot:null}},mounted:function(){this.plot=document.getElementById(this.name),Plotly.newPlot(this.plot,[[],[]])},watch:{experiments_data:function(e){this.plotExperiments(this.plot,this.experiments_data,this.name)}},methods:{mapExperimentDataToPlot:function(e,t,n){for(var a=[],s=[],i=[],r=[],o=e.points,c=("mz"in o[0]?"mz":"rt"),l=0;l<o.length-1;l++){var u="mz"in o[l]?o[l].mz:o[l].rt,m=o[l].intensity,p=o[l].formulas?o[l].formulas:"?",d=o[l].names?o[l].names:"?",_=c+": "+u+"<br />Intensity: "+m+"<br />Formulas: "+p+"<br />Names: "+d;a.push(u),s.push(0),a.push(u),s.push(m),a.push(null),s.push(null),i.push(""),i.push(_),i.push(""),r.push(this.createAnnotation(u,m,p,t))}return{x:a,y:s,text:i,name:n,mode:"lines",connectgaps:!1,hoverinfo:"text",line:{color:t,width:.5},annotations:r}},is_local_optimum:function(e,t){for(var n=(t[e].x,t[e].y),a=e-1;a>Math.max(0,e-500);a--)if(t[a].y>n)return!1;for(var a=e+1;a<Math.min(e+500,t.length-1);a++)if(t[a].y>n)return!1;return!0},createAnnotation:function(e,t,n,a){return{x:e,y:t,text:n,xref:"x",yref:"y",arrowcolor:a,arrowhead:2,font:{color:a}}},plotExperiments:function(e,t,n){for(var a=["#529AC6","#FF9A42","red","black"],s=0,i=(this.xval,0);i<t.length;i++)s=t[i].points.reduce(function(e,t){return Math.max(e,t.intensity)},s);for(var r=[],o=[],i=0;i<t.length;i++){var c=this.mapExperimentDataToPlot(t[i],a[i],0==i?"Experiment":"Reference");r.push(c),o=o.concat(c.annotations)}o.sort(function(e,t){return e.x-t.x});for(var l=[],u=0;u<o.length;u++){var m=o[u];m.y>s/4&&this.is_local_optimum(u,o)&&l.push(m)}var p={xaxis:{title:n,rangemode:"tozero",autorange:!0},yaxis:{title:"intensity",rangemode:"tozero",autorange:!0},height:300,showlegend:!0,legend:{orientation:"h"},annotations:l};Plotly.purge(e),Plotly.newPlot(e,r,p)}}}},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),s=n("/ocq"),i=n("vZwc");a.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"LCMS",component:i.a}]})},crKC:function(e,t,n){"use strict";t.a={props:["experiments"],data:function(){return{base_selected:-1,compare_selected:-1}},watch:{base_selected:function(e){this.$emit("base_selected",this.base_selected)},compare_selected:function(e){this.$emit("compare_selected",this.compare_selected)}}}},dDDT:function(e,t,n){"use strict";function a(e){n("hWKF")}var s=n("kF7x"),i=n("9dvR"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-13066713",null);t.a=c.exports},e64V:function(e,t){},eR3x:function(e,t,n){"use strict";function a(e){n("e64V")}var s=n("8caJ"),i=n("3ffd"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-5a1db517",null);t.a=c.exports},hWKF:function(e,t){},i5l2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("LCMS")])])}],i={render:a,staticRenderFns:s};t.a=i},kF7x:function(e,t,n){"use strict";t.a={props:["name","min","max","selection_values"],data:function(){return{slider_name:this.name+"-slider",slider_amount:this.name+"-amount",mutable_min_value:this.min_value,mutable_max_value:this.max_value}},computed:{},mounted:function(){$("#"+this.slider_name).slider({range:!0,min:this.min,max:this.max,step:.01,values:[this.min,this.max],slide:function(e,t){this.mutable_min_value=t.values[0],this.mutable_max_value=t.values[1]}.bind(this),stop:function(e,t){this.selection_changed(t.values[0],t.values[1])}.bind(this)})},methods:{selection_changed:function(e,t){this.$emit("selection_changed",{min:e,max:t})}},watch:{selection_values:function(e){this.mutable_min_value=e.min,this.mutable_max_value=e.max,$("#"+this.slider_name).slider("values",0,e.min),$("#"+this.slider_name).slider("values",1,e.max)}}}},kQSa:function(e,t,n){"use strict";function a(e){n("+z1e")}var s=n("kXKM"),i=n("D28T"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-4bfa251c",null);t.a=c.exports},kXKM:function(e,t,n){"use strict";t.a={props:["data"],data:function(){return{layout:{height:800,margin:{t:0},paper_bgcolor:"rgba(0,0,0,0)",autosize:!0,scene:{xaxis:{title:"rt"},yaxis:{title:"m/z"},zaxis:{title:"intensity"}}},location:null,selectedRt:-1,selectedMz:-1}},mounted:function(){this.location=document.getElementById("placeholder_surface_plot"),Plotly.newPlot(this.location,[{z:[[0,0]],type:"surface"}],this.layout)},methods:{set_ticks:function(e,t){e.forEach(function(e,t,n){n[t]=Math.round(100*e)/100}),t.ticktext=[e[0],e[Math.round((e.length-1)/2)],e[e.length-1]],t.tickvals=[0,e.length/2,e.length]},build3dgraph:function(){Plotly.purge(this.location),this.set_ticks(this.data.meta_data.rt_min_values,this.layout.scene.xaxis),this.set_ticks(this.data.meta_data.mz_min_values,this.layout.scene.yaxis),Plotly.newPlot(this.location,[this.data.graph_data],this.layout),this.location.on("plotly_click",function(e){var t,n,a,s;this.selectedRt=e.points[0].x,this.selectedMz=e.points[0].y,t=this.data.meta_data.rt_min_values[e.points[0].x],n=t+this.data.meta_data.rt_bin_size,a=this.data.meta_data.mz_min_values[e.points[0].y],s=a+this.data.meta_data.mz_bin_size,this.$emit("rt_mz_selection_change",{rt_lower:t,rt_upper:n,mz_lower:a,mz_upper:s})}.bind(this))}},watch:{data:function(e){this.build3dgraph()}}}},mg4o:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-2"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"base_selection"}},[e._v("Experiment")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.base_selected,expression:"base_selected"}],staticClass:"form-control",attrs:{id:"base_selection"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.base_selected=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:-1}},[e._v("select item")]),e._v(" "),e._l(e.experiments,function(t){return n("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"compare_selection"}},[e._v("Reference")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.compare_selected,expression:"compare_selected"}],staticClass:"form-control",attrs:{id:"compare_selection"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.compare_selected=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:-1}},[e._v("select item")]),e._v(" "),e._l(e.experiments,function(t){return n("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)])])])},s=[],i={render:a,staticRenderFns:s};t.a=i},nBgy:function(e,t){},qkLy:function(e,t,n){"use strict";function a(e){n("nBgy")}var s=n("Ncpf"),i=n("DGMM"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-f486eb50",null);t.a=c.exports},vZwc:function(e,t,n){"use strict";function a(e){n("GMLF")}var s=n("LCT6"),i=n("/EtP"),r=n("VU/8"),o=a,c=r(s.a,i.a,!1,o,"data-v-2a01066b",null);t.a=c.exports},wGEA:function(e,t){},xJD8:function(e,t,n){"use strict";var a=n("VJFb"),s=n("vZwc");t.a={name:"app",components:{"app-header":a.a,"app-main":s.a}}}},["NHnr"]);
//# sourceMappingURL=app.1bf9004f303b228df3a1.js.map