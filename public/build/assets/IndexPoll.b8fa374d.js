import{P as T}from"./Pagination.bb46f3bf.js";import{I,u as S,a as j}from"./AppLayout.b41f3091.js";import{_ as F}from"./ConfirmationModal.463fa4b9.js";import{_ as L}from"./SecondaryButton.70b07737.js";import{_ as V}from"./DangerButton.c33bbf17.js";import{_ as J,T as q,c as _,w as l,l as d,o as n,b as u,a as e,t as o,e as y,d as a,g as b,F as v,f as r,n as z,q as E,s as f}from"./app.d963b5bf.js";import{_ as O}from"./AdminLayout.ac00fc59.js";import"./Modal.4b805def.js";const R={components:{AdminLayout:O,Pagination:T,Icon:I,JetConfirmationModal:F,JetSecondaryButton:L,JetDangerButton:V},props:{polls:Object},setup(){const{can:t}=S(),{formatTimeAgoToNow:c,formatToDayDateString:p}=j();return{can:t,formatTimeAgoToNow:c,formatToDayDateString:p}},data(){return{deletePollForm:q({}),pollIsBeingDeleted:null}},methods:{confirmRoleDeletion(t){this.pollIsBeingDeleted=t},deletePoll(){this.deletePollForm.delete(route("admin.poll.delete",this.pollIsBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.pollIsBeingDeleted=null})}}},H={class:"py-12 px-10 max-w-7xl mx-auto"},M={class:"flex justify-between mb-8"},Q={class:"font-bold text-3xl text-gray-500 dark:text-gray-400"},U={class:"flex"},G={class:"hidden md:inline"},K={class:"flex flex-col"},W={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},X={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},Y={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none sm:rounded-lg"},Z={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},$={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-300"},ee={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},te={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},oe={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},se={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},ne={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},ae={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},ie={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},re={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},le={scope:"col",class:"relative px-6 py-3"},de={class:"sr-only"},ce={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},_e={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},pe={class:"px-3 py-4"},me={class:"items-center"},ue={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},ye={class:"px-3 py-4 text-sm"},ge={key:1,class:"italic text-gray-500"},he={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},xe=["content"],fe={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ke=["content"],we={key:1,class:"italic"},be={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ve=["content"],De={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},Pe={key:0},Ae={key:1,class:"italic text-red-600"},Be={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 align-middle text-center"},Ce={class:"px-3 py-4 whitespace-nowrap text-right text-sm font-medium dark:text-gray-400"},Ne=["onClick"],Te={key:0},Ie={class:"px-6 py-4 text-center dark:text-gray-400",colspan:"9"};function Se(t,c,p,i,m,k){const D=d("app-head"),g=d("inertia-link"),w=d("icon"),P=d("pagination"),A=d("jet-secondary-button"),B=d("jet-danger-button"),C=d("jet-confirmation-modal"),N=d("AdminLayout"),h=E("tippy");return n(),_(N,null,{default:l(()=>[u(D,{title:"Polls Administration"}),e("div",H,[e("div",M,[e("h1",Q,o(t.__("Polls")),1),e("div",U,[i.can("create polls")?(n(),_(g,{key:0,href:t.route("admin.poll.create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:l(()=>[e("span",null,o(t.__("Create New")),1),e("span",G,"\xA0"+o(t.__("Poll")),1)]),_:1},8,["href"])):y("",!0)])]),e("div",K,[e("div",W,[e("div",X,[e("div",Y,[e("table",Z,[e("thead",$,[e("tr",null,[e("th",ee,o(t.__("#")),1),e("th",te,o(t.__("Question")),1),e("th",oe,o(t.__("Options")),1),e("th",se,o(t.__("Started At")),1),e("th",ne,o(t.__("End At")),1),e("th",ae,o(t.__("Created At")),1),e("th",ie,o(t.__("Created By")),1),e("th",re,o(t.__("Locked")),1),e("th",le,[e("span",de,o(t.__("Actions")),1)])])]),e("tbody",ce,[(n(!0),a(v,null,b(p.polls.data,s=>(n(),a("tr",{key:s.id},[e("td",_e,o(s.id),1),e("td",pe,[e("div",me,[e("div",ue,o(s.question),1)])]),e("td",ye,[s.options.length>0?(n(!0),a(v,{key:0},b(s.options,x=>(n(),a("span",{key:x.id,class:"px-2 mr-1 mb-1 inline-flex text-xs leading-5 font-semibold rounded bg-gray-100 text-gray-800 dark:bg-cool-gray-700 dark:text-gray-300"},o(x.name),1))),128)):(n(),a("span",ge,o(t.__("No options.")),1))]),e("td",he,[f((n(),a("span",{class:"focus:outline-none",content:i.formatToDayDateString(s.started_at)},[r(o(i.formatTimeAgoToNow(s.started_at)),1)],8,xe)),[[h]])]),e("td",fe,[s.closed_at?f((n(),a("span",{key:0,class:"focus:outline-none",content:i.formatToDayDateString(s.closed_at)},[r(o(i.formatTimeAgoToNow(s.closed_at)),1)],8,ke)),[[h]]):(n(),a("span",we,o(t.__("None")),1))]),e("td",be,[f((n(),a("span",{class:"focus:outline-none",content:i.formatToDayDateString(s.created_at)},[r(o(i.formatTimeAgoToNow(s.created_at)),1)],8,ve)),[[h]])]),e("td",De,[s.creator?(n(),a("span",Pe,o(s.creator.username),1)):(n(),a("span",Ae,o(t.__("None")),1))]),e("td",Be,[s.is_closed?(n(),_(w,{key:0,class:"text-green-500",name:"check-circle"})):(n(),_(w,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",Ce,[i.can("update polls")&&!s.is_closed?(n(),_(g,{key:0,as:"button",method:"put",href:t.route("admin.poll.lock",s.id),class:"text-yellow-600 hover:text-yellow-900"},{default:l(()=>[r(o(t.__("Lock")),1)]),_:2},1032,["href"])):y("",!0),i.can("update polls")&&s.is_closed?(n(),_(g,{key:1,as:"button",method:"put",href:t.route("admin.poll.unlock",s.id),class:"text-green-600 hover:text-green-900"},{default:l(()=>[r(o(t.__("Unlock")),1)]),_:2},1032,["href"])):y("",!0),r(" / "),i.can("delete polls")?(n(),a("button",{key:2,class:"text-red-600 hover:text-red-900 focus:outline-none",onClick:x=>k.confirmRoleDeletion(s.id)},o(t.__("Delete")),9,Ne)):y("",!0)])]))),128)),p.polls.data.length===0?(n(),a("tr",Te,[e("td",Ie,o(t.__("No polls found.")),1)])):y("",!0)])])])])])]),u(P,{links:p.polls.links},null,8,["links"])]),u(C,{show:!!m.pollIsBeingDeleted,onClose:c[1]||(c[1]=s=>m.pollIsBeingDeleted=null)},{title:l(()=>[r(o(t.__("Delete Poll")),1)]),content:l(()=>[r(o(t.__("Are you sure you would like to delete this Poll? It is not reversible.")),1)]),footer:l(()=>[u(A,{onClick:c[0]||(c[0]=s=>m.pollIsBeingDeleted=null)},{default:l(()=>[r(o(t.__("Nevermind")),1)]),_:1}),u(B,{class:z(["ml-2",{"opacity-25":m.deletePollForm.processing}]),disabled:m.deletePollForm.processing,onClick:k.deletePoll},{default:l(()=>[r(o(t.__("Delete Poll")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])]),_:1})}const Oe=J(R,[["render",Se]]);export{Oe as default};