import{A as _}from"./AppLayout-9f94cfff.js";import{S as x}from"./ShoutBox-5ea0151d.js";import{S as h}from"./ServerStatusBox-2832e1ef.js";import{l as c,o,c as i,w as n,b as a,a as e,t as r,d as l,F as f,g as u,p as y}from"./app-9b50b83a.js";import"./useAuthorizable-6bc0b9b8.js";import"./CopyToClipboard-da0e6391.js";const g={class:"px-2 py-4 mx-auto md:py-12 md:px-10 max-w-7xl"},k={class:"flex flex-col md:space-x-4 md:flex-row"},v={class:"flex-grow"},w={class:"-my-2 overflow-x-auto md:-mx-6 lg:-mx-8"},b={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},S={class:"p-4 space-y-10 overflow-hidden bg-white border-b border-gray-200 rounded shadow dark:bg-cool-gray-800 dark:border-gray-800"},B={class:"mt-2 text-2xl font-bold text-center text-gray-700 dark:text-gray-300"},L={key:0,class:"grid gap-4 grid:cols-1 md:grid-cols-3"},A=["src"],I={class:"flex flex-col items-center mt-2"},N={class:"font-bold text-gray-800 dark:text-gray-300"},C={key:1,class:"flex justify-center italic text-gray-600 dark:text-gray-400"},F={class:"sticky flex flex-col flex-none h-screen mt-4 space-y-4 md:w-1/4 top-5 md:mt-0"},E={__name:"IndexStaff",props:{staffs:{type:Array,required:!0}},setup(d){return(s,M)=>{const m=c("app-head"),p=c("InertiaLink");return o(),i(_,null,{default:n(()=>[a(m,{title:s.__("Staff Members")},null,8,["title"]),e("div",g,[e("div",k,[e("div",v,[e("div",w,[e("div",b,[e("div",S,[e("h2",B,r(s.__("Meet the Team")),1),d.staffs.length>0?(o(),l("div",L,[(o(!0),l(f,null,u(d.staffs,t=>(o(),i(p,{key:t.id,class:"flex flex-col items-center cursor-pointer hover:opacity-50",as:"div",href:s.route("user.public.get",t.username)},{default:n(()=>[e("img",{class:"w-40 h-40 rounded-lg drop-shadow",src:t.profile_photo_url,alt:"Profile Photo"},null,8,A),e("div",I,[e("h3",N,r(t.name),1),e("p",{style:y([t.roles[0].color?{color:t.roles[0].color}:null]),class:"text-sm text-gray-700 dark:text-gray-400"},r(t.roles[0].display_name),5)])]),_:2},1032,["href"]))),128))])):(o(),l("div",C,r(s.__("No Staff Yet!")),1))])])])]),e("div",F,[a(h),a(x)])])])]),_:1})}}};export{E as default};