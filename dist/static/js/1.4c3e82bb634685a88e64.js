webpackJsonp([1],{"+bdf":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("va-box",{attrs:{title:t.title,theme:"box-primary",isBorder:!0,widgetType:""}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"form-horizontal"},[a("div",{staticClass:"box-body"},[t._l(t.checkItems,function(e,s){return a("div",{class:{"col-md-5":!0,"col-md-offset-1":s%2==1}},["text"===e.type?a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-3 control-label"},[a("span",[t._v(t._s(e.title)+":")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})])]):"select"===e.type?a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-3 control-label"},[a("span",[t._v(t._s(e.title))])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});e.value=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),t._l(t.options,function(e,s){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])})],2)])]):t._e()])}),t._v(" "),a("div",{staticClass:"col-md-1"},[a("div",{staticClass:"form-group",attrs:{align:"right"}},[a("button",{staticClass:"btn btn-primary",on:{click:t.checkInfo}},[a("span",{staticClass:"fa  fa-search"},[t._v("查    询")])])])])],2)])])])},o=[],i={render:s,staticRenderFns:o};e.a=i},"/MFU":function(t,e,a){"use strict";e.a={name:"pagination",data:function(){return{changePageNum:this.pageNum}},props:{pageNum:{type:Number,default:1},pageCount:{type:Number,default:0}},computed:{options:function(){var t=[],e=this;if(0===e.pageCount)return t;if(e.pageCount<4)for(var a=1;a<=e.pageCount;a++)t[a-1]=a;else e.pageNum+2<=e.pageCount?(t[0]=e.pageNum,t[1]=e.pageNum+1,t[2]=e.pageNum+2):(t[0]=e.pageCount-2,t[1]=e.pageCount-1,t[2]=e.pageCount);return t}},methods:{subClick:function(){this.pageNum>1&&this.$emit("pageNumChange",this.pageNum-1)},numClick:function(t){this.$emit("pageNumChange",t),this.changePageNum=t},addClick:function(){this.pageNum<this.pageCount&&this.$emit("pageNumChange",this.pageNum+1)},jumpTopage:function(){var t=parseInt(this.changePageNum);t<100&&this.$emit("pageNumChange",t)}},watch:{pageNum:{handler:function(t,e){this.changePageNum=this.pageNum}}}}},"1Q7c":function(t,e,a){var s=a("h9dA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("9ceee05a",s,!0)},"1mU1":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border"},[a("row",[a("div",{staticClass:"col-md-12"},[a("span",[t._v("规格"+t._s(t.index+1)+":")]),t._v(" "),a("i",{staticClass:"fa fa-close pull-right text-red",on:{click:t.delSpec}})])]),t._v(" "),a("row",[a("div",{staticClass:"col-md-5 spa"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.specItem.name,expression:"specItem.name",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"名称",disabled:t.disabled},domProps:{value:t.specItem.name},on:{change:function(e){t.specItem.name=e.target.value}}})]),t._v(" "),a("div",{staticClass:"col-md-5 col-md-offset-1 spa"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.specItem.price,expression:"specItem.price",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"价格",disabled:t.disabled},domProps:{value:t.specItem.price},on:{change:function(e){t.specItem.price=e.target.value}}})])]),t._v(" "),a("row",[a("div",{staticClass:"col-md-5 spa"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.specItem.stock,expression:"specItem.stock",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"当前库存",disabled:t.disabled},domProps:{value:t.specItem.stock},on:{change:function(e){t.specItem.stock=e.target.value}}})]),t._v(" "),a("div",{staticClass:"col-md-5 col-md-offset-1 spa"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.specItem.maxStock,expression:"specItem.maxStock",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"最大库存",disabled:t.disabled},domProps:{value:t.specItem.maxStock},on:{change:function(e){t.specItem.maxStock=e.target.value}}})])])],1)},o=[],i={render:s,staticRenderFns:o};e.a=i},"20z6":function(t,e,a){"use strict";var s=a("cSI2"),o=a("W2kC"),i=a("VU/8"),n=i(s.a,o.a,null,null,null);e.a=n.exports},"4Dmm":function(t,e,a){"use strict";var s=a("HM+n");e.a={name:"YFCheckModule",data:function(){return{}},created:function(){console.log(this.title)},props:["checkItems","title","options","radios"],components:{"va-box":s.a},methods:{checkInfo:function(){this.$emit("checkBtnClick")}}}},"6EoY":function(t,e,a){"use strict";function s(t){a("1Q7c")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("8c5u"),i=a("AWtY"),n=a("VU/8"),l=s,r=n(o.a,i.a,l,"data-v-2768fa08",null);e.default=r.exports},"8c5u":function(t,e,a){"use strict";var s=a("Xxa5"),o=a.n(s),i=a("exGp"),n=a.n(i),l=a("Dd8w"),r=a.n(l),c=a("WmRa"),u=a("xl55"),d=a("dEYC"),m=a("NYxO"),p=a("qYpY"),v=a("QoQ2");e.a={name:"operate-app-info",data:function(){return{title:"应用信息查询",modalTitle:"",tableData:[],checkItems:[{title:"应用ID",placeholder:"请输入应用ID",value:"",type:"text"},{title:"应用名称",placeholder:"请输入应用名称",value:"",type:"text"}],tableHeader:["编号","应用名称","应用密钥","授权码","应用状态","操作"],apiKey:[{key:"logoUrl",type:"image",name:"应用logo",required:!1},{key:"id",type:"text",name:"接口ID",maxl:10,required:!1},{key:"name",type:"text",name:"应用名称",maxl:20,required:!0},{key:"secret",type:"text",name:"应用秘钥",maxl:20,required:!1},{key:"status",type:"select",name:"应用状态",required:!1},{key:"token",type:"text",name:"授权码",required:!1},{key:"description",type:"textarea",name:"应用描述",maxl:50,required:!1},{key:"ctime",type:"text",name:"创建时间",maxl:20,required:!1},{key:"utime",type:"text",name:"修改时间",maxl:20,required:!1},{key:"contactName",type:"text",name:"负责人姓名",maxl:20,required:!1},{key:"contactMobile",type:"text",name:"负责人手机",maxl:11,required:!1},{key:"contactEmail",type:"text",name:"负责人邮箱",maxl:20,required:!1}],options:[{value:"1",label:"正常"},{value:"0",label:"禁用"}],seeStatus:{logoUrl:{show:!0,disable:!0},id:{show:!0,disable:!0},name:{show:!0,disable:!0},secret:{show:!0,disable:!0},status:{show:!0,disable:!0},token:{show:!0,disable:!0},description:{show:!0,disable:!0},ctime:{show:!0,disable:!0},utime:{show:!0,disable:!0},contactName:{show:!0,disable:!0},contactMobile:{show:!0,disable:!0},contactEmail:{show:!0,disable:!0}},addStatus:{logoUrl:{show:!0,disable:!1},id:{show:!1,disable:!0},name:{show:!0,disable:!1},secret:{show:!1,disable:!0},status:{show:!1,disable:!0},token:{show:!1,disable:!0},description:{show:!0,disable:!1},ctime:{show:!1,disable:!0},utime:{show:!1,disable:!0},contactName:{show:!0,disable:!1},contactMobile:{show:!0,disable:!1},contactEmail:{show:!0,disable:!1}},updateStatus:{logoUrl:{show:!0,disable:!1},id:{show:!0,disable:!0},name:{show:!0,disable:!1},secret:{show:!0,disable:!0},status:{show:!0,disable:!1},token:{show:!0,disable:!0},description:{show:!0,disable:!1},ctime:{show:!0,disable:!0},utime:{show:!0,disable:!0},contactName:{show:!0,disable:!1},contactMobile:{show:!0,disable:!1},contactEmail:{show:!0,disable:!1}},selectItem:{},tooltip:"",currentStatus:{},saveBtnShow:!0,saveBtnText:"保存",pageCount:0,pageNum:1,pageSize:0,total:0,tableChange:0,file:""}},computed:r()({},a.i(m.a)(["currentUser"])),created:function(){this.pageSize=this.currentUser.pageSize},components:{"yf-checkmodule":c.a,"yf-modal-group":u.a,"yf-pagination":d.a,"yf-right":p.a,"yf-add-module":v.a},methods:{checkBtnClick:function(){this.searchInfo()},searchInfo:function(){function t(){return e.apply(this,arguments)}var e=n()(o.a.mark(function t(){var e,a,s,i,n,l,r,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:this.checkItems[0].value,name:this.checkItems[1].value,pageNum:this.pageNum,pageSize:this.pageSize,orderby:{name:"ctime",type:"desc"}},a={action:"system.app.query",body:e},s=this,t.next=5,s.$http.post("http://d.umq.me/japi-manage/v1/gateway",a);case 5:i=t.sent,n=i.data,l=n.code,r=n.body,"00000"===l&&(c=r.data,this.total=r.total,this.pageCount=r.pageCount,this.tableData=c,this.$nextTick(function(){this.$table(!1)}));case 10:case"end":return t.stop()}},t,this)}));return t}(),updateInfo:function(){function t(){return e.apply(this,arguments)}var e=n()(o.a.mark(function t(){var e,a,s,i,n,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={action:"system.app.update",body:{id:this.selectItem.id,name:this.selectItem.name,description:this.selectItem.description,logoUrl:this.selectItem.logoUrl,contactName:this.selectItem.contactName,contactMobile:this.selectItem.contactMobile,contactEmail:this.selectItem.contactEmail}},a=this,t.next=4,a.$http.post("http://d.umq.me/japi-manage/v1/gateway",e);case 4:s=t.sent,i=s.data,n=i.code,l=i.body,console.log("app.update",l,n),"00000"===n&&this.searchInfo(),this.modelClose();case 11:case"end":return t.stop()}},t,this)}));return t}(),addInfo:function(){function t(){return e.apply(this,arguments)}var e=n()(o.a.mark(function t(){var e,a,s,i,n,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={action:"system.app.add",body:{name:this.selectItem.name,description:this.selectItem.description,logoUrl:this.selectItem.logoUrl,contactName:this.selectItem.contactName,contactMobile:this.selectItem.contactMobile,contactEmail:this.selectItem.contactEmail}},a=this,t.next=4,a.$http.post("http://d.umq.me/japi-manage/v1/gateway",e);case 4:s=t.sent,i=s.data,n=i.code,l=i.body,console.log("app.add",l,n),this.modelClose(),"00000"===n&&this.searchInfo();case 11:case"end":return t.stop()}},t,this)}));return t}(),modalShow:function(t){this.modalTitle="查看应用详情",this.saveBtnShow=!1,this.currentStatus=this.seeStatus,this.selectItem=this.$util.deepClone(this.tableData[t])},modalShowToEdit:function(t){this.modalTitle="编辑应用详情",this.saveBtnShow=!0,this.currentStatus=this.updateStatus,this.selectItem=this.$util.deepClone(this.tableData[t])},modalShowToAdd:function(){this.currentStatus=this.addStatus,this.modalTitle="添加应用信息",this.saveBtnShow=!0},saveInfo:function(){console.log("this.selectItem.id",this.selectItem.id),this.selectItem.id?this.updateInfo():this.addInfo()},modelClose:function(){this.selectItem={}},appSatus:function(t){var e="";switch(t){case 1:e="正常";break;case 0:e="禁用"}return e},pageNumChange:function(t){this.pageNum=t,this.searchInfo()},pageSizeChanged:function(t){this.pageSize=t,this.pageNum=1,this.searchInfo()},appApiInfo:function(t){this.$router.push({path:"/operate/app/api",query:{id:t}})}}}},AWtY:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("row",[a("div",{staticClass:"col-md-12"},[a("yf-checkmodule",{attrs:{title:t.title,checkItems:t.checkItems},on:{checkBtnClick:t.checkBtnClick}})],1)]),t._v(" "),a("yf-add-module",{attrs:{pageSize:t.pageSize,total:t.total,title:"添加应用"},on:{modalShowToAdd:t.modalShowToAdd,pageSizeChanged:t.pageSizeChanged}}),t._v(" "),t.tableData.length>0?a("row",{staticClass:"table-space"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table responsive table-bordered white"},[a("thead",[a("tr",t._l(t.tableHeader,function(e,s){return a("th",{key:"app"+s},[t._v(t._s(e))])}))]),t._v(" "),a("tbody",t._l(t.tableData,function(e,s){return a("tr",{key:"appdata"+s,staticStyle:{width:"100%"}},[a("td",{staticStyle:{width:"10%"}},[t._v(t._s(e.id))]),t._v(" "),a("td",{staticStyle:{width:"18%"}},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticStyle:{width:"18%"}},[t._v(t._s(e.secret))]),t._v(" "),a("td",{staticStyle:{width:"18%"}},[t._v(t._s(e.token))]),t._v(" "),a("td",{staticStyle:{width:"10%"}},[t._v(t._s(t.appSatus(e.status)))]),t._v(" "),a("td",{staticStyle:{width:"25%"}},[a("button",{staticClass:"btn btn-success",attrs:{"data-toggle":"modal","data-target":"#modal-default"},on:{click:function(e){t.modalShow(s)}}},[t._v("查看")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#modal-default"},on:{click:function(e){t.modalShowToEdit(s)}}},[t._v("编辑")]),t._v(" "),a("a",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(a){t.appApiInfo(e.id)}}},[t._v("接口")])])])}))])])]):t._e(),t._v(" "),a("yf-pagination",{attrs:{pageNum:t.pageNum,pageCount:t.pageCount},on:{pageNumChange:t.pageNumChange}}),t._v(" "),a("yf-modal-group",{attrs:{title:t.modalTitle,apiKey:t.apiKey,options:t.options,currentStatus:t.currentStatus,selectItem:t.selectItem,saveBtnShow:t.saveBtnShow,saveBtnText:t.saveBtnText},on:{saveBtnClick:t.saveInfo,close:t.modelClose}}),t._v(" "),a("yf-right")],1)},o=[],i={render:s,staticRenderFns:o};e.a=i},Aesy:function(t,e,a){"use strict";e.a={name:"yf-right"}},DF3T:function(t,e,a){"use strict";e.a={name:"yf-add-module",data:function(){return{changePageSize:this.pageSize}},props:["pageSize","total","title","type"],methods:{modalShowToAdd:function(){this.$emit("modalShowToAdd")},addMenuWithLevel:function(t){this.$emit("addMenuWithLevel",t)}},watch:{changePageSize:{handler:function(t,e){this.$emit("pageSizeChanged",parseInt(this.changePageSize))}}}}},GmLz:function(t,e,a){"use strict";function s(t){a("rInz")}var o=a("d6bB"),i=a("nszs"),n=a("VU/8"),l=s,r=n(o.a,i.a,l,"data-v-b4ec5a2c",null);e.a=r.exports},H45C:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,'.file[data-v-b4ec5a2c]{position:relative;border:1px solid #d9d9d9;border-radius:4px;height:80px;width:80px}.file[data-v-b4ec5a2c]:before{width:2px;height:39.5px}.file[data-v-b4ec5a2c]:after{width:39.5px;height:2px}.file[data-v-b4ec5a2c]:after,.file[data-v-b4ec5a2c]:before{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.file input[data-v-b4ec5a2c]{position:absolute;top:0;left:0;bottom:0;opacity:0;width:80px;height:80px}.imgStatus[data-v-b4ec5a2c]:after,.imgStatus[data-v-b4ec5a2c]:before{width:0}img[data-v-b4ec5a2c]{float:left;width:80px;height:80px;margin-right:9px;margin-bottom:9px;background:no-repeat 50%;background-size:cover}',""])},"HM+n":function(t,e,a){"use strict";var s=a("Rm/k"),o=a("ZFrQ"),i=a("VU/8"),n=i(s.a,o.a,null,null,null);e.a=n.exports},I5KC:function(t,e,a){"use strict";e.a={name:"yf-space",data:function(){return{item:{name:"",price:"",stock:"",maxStock:""}}},props:{index:{type:Number,default:0},disabled:{type:Boolean,default:!1},specItem:{type:Object,default:{name:"",price:"",stock:"",maxStock:""}}},methods:{delSpec:function(){this.$emit("delSpec",this.index)}}}},JZI0:function(t,e,a){"use strict";var s=a("20z6"),o=a("GmLz"),i=a("nxo+");e.a={name:"yf-modal-group",components:{"yf-modal":s.a,"yf-image-upload":o.a,"yf-spec":i.a},data:function(){return{tooltip:"",logoUrl:""}},props:{title:{type:String,default:""},apiKey:{type:Array,default:function(){return[]}},currentStatus:{type:Object,default:function(){return{}}},selectItem:{type:Object,default:function(){return{}}},saveBtnShow:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]}},optionsO:{type:Array,default:function(){return[]}},saveBtnText:{type:String,default:""},modalType:{type:String,default:""},msg:{type:String,default:""},imgPro:{type:String,default:"logoUrl"}},methods:{saveInfo:function(){!1===this.requiredOption()&&""==this.modalType||(this.tooltip="",this.$emit("saveBtnClick"),$("#modal-default").modal("hide"))},addNewStyle:function(){var t={name:"",price:"",stock:"",maxStock:""};this.selectItem.specs.push(t)},delSpec:function(t){this.selectItem.specs.splice(t,1)},requiredOption:function(){for(var t=this,e=0;e<t.apiKey.length;e++){var a=t.apiKey[e];if(!0===a.required&&(""===t.selectItem[a.key]||void 0===t.selectItem[a.key]))return t.tooltip="*提示*: "+a.name+" 是必须输入信息",!1}return!0},modalDis:function(){this.$emit("close")},logoPicUrl:function(t){console.log("path",t),this.selectItem[this.imgPro]=t}}}},JnIT:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".col-sm-3[data-v-14518542]{padding-right:5px;padding-left:0}",""])},NiPD:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("yf-modal",{attrs:{title:t.title},on:{close:t.modalDis}},["msg"===t.modalType?a("div",{attrs:{slot:"body"},slot:"body"},[t._v("\n     "+t._s(t.msg)+"\n   ")]):a("div",{attrs:{slot:"body"},slot:"body"},[t._l(t.apiKey,function(e,s){return a("row",{key:"key"+s},["text"===e.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentStatus[e.key]&&t.currentStatus[e.key].show,expression:"currentStatus[keyItem.key]&&currentStatus[keyItem.key].show"}],staticClass:"form-horizontal form-group col-md-12"},[a("label",{staticClass:"col-md-3 control-label",attrs:{for:"input"+s}},[t._v(t._s(e.name)),e.required?a("span",[t._v("*")]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.selectItem[e.key],expression:"selectItem[keyItem.key]",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"input"+s,placeholder:"请输入"+e.name,maxlength:e.maxl,disabled:t.currentStatus[e.key]&&t.currentStatus[e.key].disable},domProps:{value:t.selectItem[e.key]},on:{input:function(a){a.target.composing||t.$set(t.selectItem,e.key,a.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]):t._e(),t._v(" "),"array"===e.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentStatus[e.key]&&t.currentStatus[e.key].show,expression:"currentStatus[keyItem.key]&&currentStatus[keyItem.key].show"}],staticClass:"form-horizontal form-group col-md-12"},[a("label",{staticClass:"col-md-3 control-label",attrs:{for:"input"+s}},[t._v(t._s(e.name)),e.required?a("span",[t._v("*")]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-9"},[t._l(t.selectItem[e.key],function(s,o){return a("yf-spec",{key:"spec",attrs:{specItem:s,index:o,disabled:t.currentStatus[e.key]&&t.currentStatus[e.key].disable},on:{delSpec:t.delSpec}})}),t._v(" "),a("row",{staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-info btn-sm pull-right",on:{click:t.addNewStyle}},[t._v("新增规格")])])])],2)]):t._e(),t._v(" "),"image"===e.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentStatus[e.key]&&t.currentStatus[e.key].show,expression:"currentStatus[keyItem.key]&&currentStatus[keyItem.key].show"}],staticClass:"form-horizontal form-group col-md-12"},[a("label",{staticClass:"col-md-3 col-xs-12 control-label",attrs:{for:"input"+s}},[t._v(t._s(e.name)),e.required?a("span",[t._v("*")]):t._e()]),t._v(" "),a("yf-image-upload",{attrs:{disable:t.currentStatus[e.key]&&t.currentStatus[e.key].disable,path:t.selectItem[e.key]},on:{logoPicUrl:t.logoPicUrl}})],1):"select"===e.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentStatus[e.key]&&t.currentStatus[e.key].show,expression:"currentStatus[keyItem.key]&&currentStatus[keyItem.key].show"}],staticClass:"form-horizontal form-group col-md-12"},[a("label",{staticClass:"col-md-3 control-label"},[t._v(t._s(e.name)),e.required?a("span",[t._v("*")]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectItem[e.key],expression:"selectItem[keyItem.key]"}],staticClass:"form-control",attrs:{disabled:t.currentStatus[e.key]&&t.currentStatus[e.key].disable},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.selectItem,e.key,a.target.multiple?s:s[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("请选择")]),t._v(" "),t._l(t.options,function(e){return a("option",{key:t.options.id,domProps:{value:e.value}},[t._v(t._s(e.label))])})],2)])]):"select1"===e.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentStatus[e.key]&&t.currentStatus[e.key].show,expression:"currentStatus[keyItem.key]&&currentStatus[keyItem.key].show"}],staticClass:"form-horizontal form-group col-md-12"},[a("label",{staticClass:"col-md-3 control-label"},[t._v(t._s(e.name)),e.required?a("span",[t._v("*")]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectItem[e.key],expression:"selectItem[keyItem.key]"}],staticClass:"form-control",attrs:{disabled:t.currentStatus[e.key]&&t.currentStatus[e.key].disable},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.selectItem,e.key,a.target.multiple?s:s[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("请选择")]),t._v(" "),t._l(t.optionsO,function(e,s,o){return a("option",{key:t.optionsO.id,domProps:{value:e.value}},[t._v(t._s(e.label))])})],2)])]):"textarea"===e.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentStatus[e.key]&&t.currentStatus[e.key].show,expression:"currentStatus[keyItem.key]&&currentStatus[keyItem.key].show"}],staticClass:"form-horizontal form-group col-md-12"},[a("label",{staticClass:"col-md-3 control-label"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.selectItem[e.key],expression:"selectItem[keyItem.key]",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{rows:"3",placeholder:"请输入"+e.name,maxlength:e.maxl,disabled:t.currentStatus[e.key]&&t.currentStatus[e.key].disable},domProps:{value:t.selectItem[e.key]},on:{input:function(a){a.target.composing||t.$set(t.selectItem,e.key,a.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]):"checkbox"===e.type?a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentStatus[e.key]&&t.currentStatus[e.key].show,expression:"currentStatus[keyItem.key]&&currentStatus[keyItem.key].show"}],staticClass:"form-horizontal form-group col-md-12"},[a("label",{staticClass:"col-md-3 control-label"},[t._v(t._s(e.name)),e.required?a("span",[t._v("*")]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-9"},[t._l(t.selectItem[e.key],function(s,o){return[a("input",{directives:[{name:"model",rawName:"v-model",value:s.handle,expression:"role.handle"}],attrs:{type:"checkbox",id:s.id,disabled:t.currentStatus[e.key]&&t.currentStatus[e.key].disable},domProps:{value:s.id,checked:Array.isArray(s.handle)?t._i(s.handle,s.id)>-1:s.handle},on:{__c:function(e){var a=s.handle,o=e.target,i=!!o.checked;if(Array.isArray(a)){var n=s.id,l=t._i(a,n);o.checked?l<0&&(s.handle=a.concat([n])):l>-1&&(s.handle=a.slice(0,l).concat(a.slice(l+1)))}else s.handle=i}}}),t._v(" "),a("label",{attrs:{for:s.id}},[t._v(t._s(s.roleName))]),t._v("   \n             ")]})],2)]):t._e()])}),t._v(" "),a("row",[a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("span",[t._v(t._s(t.tooltip))])])])],2),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.modalDis}},[t._v("关闭")]),t._v(" "),t.saveBtnShow?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveInfo}},[t._v(t._s(t.saveBtnText))]):t._e()])])},o=[],i={render:s,staticRenderFns:o};e.a=i},Qnkj:function(t,e,a){var s=a("jsSK");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("ae57edd2",s,!0)},QoQ2:function(t,e,a){"use strict";function s(t){a("Qnkj")}var o=a("DF3T"),i=a("yZEh"),n=a("VU/8"),l=s,r=n(o.a,i.a,l,null,null);e.a=r.exports},"Rm/k":function(t,e,a){"use strict";e.a={name:"va-box",props:{widgetType:{type:String,default:"collapse"},title:{type:String},content:{type:String},theme:{type:String},isOpen:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},isSolid:{type:Boolean,default:!1},isBorder:{type:Boolean,default:!1}},computed:{btnIcon:function(){return"collapse"===this.widgetType?this.isOpen?"fa fa-minus":"fa fa-plus":"remove"===this.widgetType?"fa fa-times":""}},created:function(){}}},Sg1l:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.options.length>0?a("div",{staticClass:"box-header",staticStyle:{height:"50px"}},[a("div",{staticStyle:{"margin-top":"-5px"}},[t._v("第"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.changePageNum,expression:"changePageNum"}],staticClass:"pageCountInput",attrs:{type:"num"},domProps:{value:t.changePageNum},on:{input:function(e){e.target.composing||(t.changePageNum=e.target.value)}}}),t._v("页\n            "),a("button",{staticClass:"btn btn-primary btn-sm",on:{click:t.jumpTopage}},[t._v("跳转")])]),t._v(" "),a("div",{staticClass:"box-tools"},[a("ul",{staticClass:"pagination pagination-sm no-margin pull-right"},[a("li",[a("a",{on:{click:t.subClick}},[t._v("«")])]),t._v(" "),t._l(t.options,function(e){return a("li",{class:{active:e===t.pageNum}},[a("a",{on:{click:function(a){t.numClick(e)}}},[t._v(t._s(e))])])}),t._v(" "),a("li",[a("a",{on:{click:t.addClick}},[t._v("»")])])],2)])]):t._e()},o=[],i={render:s,staticRenderFns:o};e.a=i},W2kC:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade in",attrs:{id:"modal-default",role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.close}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title"},[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},o=[],i={render:s,staticRenderFns:o};e.a=i},WmRa:function(t,e,a){"use strict";function s(t){a("upzl")}var o=a("4Dmm"),i=a("+bdf"),n=a("VU/8"),l=s,r=n(o.a,i.a,l,"data-v-14518542",null);e.a=r.exports},ZFrQ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box",class:[t.theme,this.isOpen?"":"collapsed-box",t.isSolid?"box-solid":""]},[a("div",{staticClass:"box-header",class:t.isBorder||t.isSolid?"with-border":""},[t._t("icon-title"),t._v(" "),a("h3",{staticClass:"box-title"},[t._v(t._s(t.title))]),t._v(" "),t._m(0)],2),t._v(" "),a("div",{staticClass:"box-body"},[t._t("content")],2),t._v(" "),t.$slots.footer?a("div",{staticClass:"box-footer"},[t._t("footer")],2):t._e(),t._v(" "),this.isLoading?a("div",{staticClass:"overlay"},[a("i",{staticClass:"fa fa-refresh fa-spin"})]):t._e()])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-tools pull-right"},[a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[a("i",{staticClass:"fa fa-minus"})])])}],i={render:s,staticRenderFns:o};e.a=i},agef:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},cSI2:function(t,e,a){"use strict";e.a={name:"yf-modal",props:["title"],methods:{close:function(){this.$emit("close")}}}},d6bB:function(t,e,a){"use strict";var s=a("Xxa5"),o=a.n(s),i=a("exGp"),n=a.n(i);e.a={name:"yf-image-upload",data:function(){return{file:"",imgSrc:this.path,imgStatus:!1,uploadBtnShow:!1}},props:["disable","path"],mounted:function(){},methods:{getFile:function(t){var e=this,a=t.target.files[0];if(a){if("image"!=a.type.split("/")[0])return void alert("请上传图片");if(Math.round(a.size/1024/1024)>3)return void alert("图片大小不得超过3M");console.log(this.file),this.file=a;var s=new FileReader;s.readAsDataURL(a),s.onload=function(){var t=s.result;e.imgSrc=t,e.imgStatus=!0,e.uploadBtnShow=!0}}},submitForm:function(){function t(t){return e.apply(this,arguments)}var e=n()(o.a.mark(function t(e){var a,s,i,n,l,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a=new FormData,a.append("file",this.file),s=this,t.next=6,s.$http.upload("http://d.umq.me/japi-manage/v1/upload",a);case 6:i=t.sent,n=i.data,l=n.code,r=n.path,"00000"===l&&(s.uploadBtnShow=!1,s.imgSrc=r,this.$emit("logoPicUrl",r));case 11:case"end":return t.stop()}},t,this)}));return t}()},watch:{path:{handler:function(t,e){console.log(t,e),this.imgStatus=void 0!=t&&""!=t,console.log("this.path",this.path)}}}}},dEYC:function(t,e,a){"use strict";function s(t){a("yI+g")}var o=a("/MFU"),i=a("Sg1l"),n=a("VU/8"),l=s,r=n(o.a,i.a,l,"data-v-087aa75c",null);e.a=r.exports},gjP3:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"a[data-v-087aa75c]{cursor:pointer!important}",""])},h9dA:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".file[data-v-2768fa08]{position:relative;display:inline-block;background:#d0eeff;border:1px solid #99d3f5;border-radius:4px;overflow:hidden;color:#1e88c7;text-decoration:none;text-indent:0;line-height:60px;height:80px;width:80px;font-size:60px;text-align:center;padding-top:10px}.file input[data-v-2768fa08]{position:absolute;font-size:100px;right:0;top:0;opacity:0}.file[data-v-2768fa08]:hover{background:#aadffd;border-color:#78c3f3;color:#004974;text-decoration:none}",""])},jsSK:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"a{cursor:pointer!important}",""])},nszs:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 col-xs-5"},[a("div",{staticStyle:{width:"80px"}},[a("img",{attrs:{src:t.imgSrc?t.imgSrc:t.path,alt:""}}),t._v(" "),a("div",{class:{file:!0,imgStatus:t.imgStatus}},[a("input",{attrs:{name:"file",type:"file",accept:"image/png, image/jpeg",disabled:t.disable},on:{change:function(e){t.getFile(e)}}})]),t._v(" "),t.uploadBtnShow?a("button",{staticClass:"btn btn-info",on:{click:function(e){t.submitForm(e)}}},[t._v("上传图片")]):t._e()])])},o=[],i={render:s,staticRenderFns:o};e.a=i},"nxo+":function(t,e,a){"use strict";function s(t){a("vMiX")}var o=a("I5KC"),i=a("1mU1"),n=a("VU/8"),l=s,r=n(o.a,i.a,l,"data-v-73c9d67d",null);e.a=r.exports},oNS5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-center"},[t._v("版权归@2017-2018 优麦圈所有")])},o=[],i={render:s,staticRenderFns:o};e.a=i},pL7D:function(t,e,a){var s=a("xDpW");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("8f718900",s,!0)},qYpY:function(t,e,a){"use strict";var s=a("Aesy"),o=a("oNS5"),i=a("VU/8"),n=i(s.a,o.a,null,null,null);e.a=n.exports},rInz:function(t,e,a){var s=a("H45C");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("e030148e",s,!0)},upzl:function(t,e,a){var s=a("JnIT");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("9c5c87a4",s,!0)},vMiX:function(t,e,a){var s=a("agef");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("de332fc0",s,!0)},xDpW:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"span[data-v-30474394]{color:red}",""])},xl55:function(t,e,a){"use strict";function s(t){a("pL7D")}var o=a("JZI0"),i=a("NiPD"),n=a("VU/8"),l=s,r=n(o.a,i.a,l,"data-v-30474394",null);e.a=r.exports},"yI+g":function(t,e,a){var s=a("gjP3");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("16f6f75c",s,!0)},yZEh:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("row",[a("div",{staticClass:"col-md-12"},[t.type?a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#modal-default"},on:{click:function(e){t.addMenuWithLevel(1)}}},[t._v("添加一级菜单")]),t._v(" "),a("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[a("span",{staticClass:"caret"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Toggle Dropdown")])]),t._v(" "),a("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[a("li",[a("a",{attrs:{type:"button","data-toggle":"modal","data-target":"#modal-default"},on:{click:function(e){t.addMenuWithLevel(1)}}},[t._v("添加一级菜单")])]),t._v(" "),a("li",[a("a",{attrs:{type:"button","data-toggle":"modal","data-target":"#modal-default"},on:{click:function(e){t.addMenuWithLevel(2)}}},[t._v("添加二级菜单")])]),t._v(" "),a("li",[a("a",{attrs:{type:"button","data-toggle":"modal","data-target":"#modal-default"},on:{click:function(e){t.addMenuWithLevel(3)}}},[t._v("添加三级菜单")])]),t._v(" "),a("li",[a("a",{attrs:{type:"button","data-toggle":"modal","data-target":"#modal-default"},on:{click:function(e){t.addMenuWithLevel(4)}}},[t._v("添加四级菜单")])])])]):a("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#modal-default"},on:{click:t.modalShowToAdd}},[a("i",{staticClass:"fa fa-plus"}),t._v(t._s(t.title))]),t._v(" "),t.total>0?a("div",{staticClass:"pull-right"},[t._v("每页\n      "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.changePageSize,expression:"changePageSize"}],staticClass:"input-sm",attrs:{name:"example1_length","aria-controls":"example1"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.changePageSize=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),a("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),a("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),a("option",{attrs:{value:"50"}},[t._v("50")])]),t._v("条"),a("span",[t._v(",共"+t._s(t.total)+"条")])]):t._e()])])},o=[],i={render:s,staticRenderFns:o};e.a=i}});