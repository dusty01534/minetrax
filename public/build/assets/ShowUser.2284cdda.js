import{I as D,A as B,u as S,a as N}from"./AppLayout.b41f3091.js";import{S as A,P as C}from"./SocialChannelBox.815e1331.js";import{_ as P}from"./AlertCard.9185286c.js";import{_ as V}from"./UserDisplayname.00c7a5cf.js";import{_ as E,c,w as d,l as f,o as r,b as g,a as e,f as n,t as o,e as i,H as I,d as l,g as b,F as y,s as h,q as L}from"./app.d963b5bf.js";import"./InfiniteScroll.e5128a8b.js";import"./InputError.fc8731ea.js";import"./LoadingButton.0eee66b7.js";import"./Post.79a288f5.js";const F={components:{SocialChannelBox:A,Icon:D,AppLayout:B,PostListBox:C,AlertCard:P,UserDisplayname:V},props:{profileUser:Object},setup(){const{can:s}=S(),{formatTimeAgoToNow:x,formatToDayDateString:t}=N();return{can:s,formatTimeAgoToNow:x,formatToDayDateString:t}}},z={class:"max-w-6xl px-2 py-3 mx-auto space-y-4 md:py-12 md:px-10"},H={class:"overflow-hidden bg-white border-b border-gray-200 shadow max-w-none dark:bg-cool-gray-800 dark:border-cool-gray-800 md:rounded"},M=["src"],R={class:"px-4 py-2"},q={class:"relative flex w-full"},G={class:"flex flex-1"},J={style:{"margin-top":"-6rem"}},O={style:{height:"9rem",width:"9rem"},class:"relative rounded-full md avatar"},K=["src"],Q=e("div",{class:"absolute"},null,-1),W={key:0,class:"flex space-x-2 text-xs text-right md:text-medium"},X={class:"hidden md:block"},Y={class:"hidden md:block"},Z=e("span",{class:"hidden md:block"},"\xA0User",-1),$={class:"hidden md:block"},ee={class:"hidden md:block"},te={class:"justify-center w-full mt-3 ml-3 space-y-2"},se={class:"font-medium leading-5 text-gray-600 dark:text-gray-400"},oe=["src","alt","content"],re={class:"flex justify-end mr-4"},ae=["title"],le={class:"flex flex-col md:space-x-4 md:flex-row"},ne={class:"flex flex-col mb-4 space-y-4 md:mb-0 md:w-1/2"},ie={key:0,class:"flex flex-col w-full space-y-2 bg-white rounded shadow dark:bg-cool-gray-800"},de=["src","alt"],ce={class:"flex flex-col flex-1 space-y-2"},_e={class:"username"},ue={class:"flex items-center justify-between"},fe={class:"font-bold dark:text-gray-400"},me={class:"flex items-center space-x-2 text-sm font-extrabold text-center text-light-blue-400"},he={key:0,class:"px-2 text-lg border-2 rounded border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800"},ge={key:1,class:"text-sm italic text-gray-500 dark:text-gray-400"},be={class:"flex items-center justify-between"},ye={class:"font-bold dark:text-gray-400"},xe={key:1,class:"text-sm italic text-gray-500 dark:text-gray-400"},pe={class:"flex items-center justify-between"},ke={class:"font-bold dark:text-gray-400"},we={class:"flex items-center space-x-2"},ve={key:0,class:"dark:text-gray-200"},Ue={key:1,class:"text-sm italic text-gray-500 dark:text-gray-400"},je=["src","alt","title"],Te={class:"flex items-center justify-between"},De={class:"font-bold dark:text-gray-400"},Be={class:"flex items-center space-x-2"},Se=["title"],Ne={key:1,class:"p-4 bg-white rounded shadow dark:bg-cool-gray-800"},Ae=e("h3",{class:"font-bold text-gray-700 dark:text-gray-200"}," Badges ",-1),Ce={class:"flex flex-row justify-center space-x-2"},Pe=["title"],Ve=["src","alt"],Ee={key:2,class:"flex flex-col w-full p-4 bg-white rounded shadow dark:bg-cool-gray-800"},Ie={class:"whitespace-pre-wrap dark:text-gray-200"},Le={class:"flex flex-col w-full p-4 space-y-2 bg-white rounded shadow dark:bg-cool-gray-800 dark:text-gray-400"},Fe={class:"flex justify-between"},ze={class:"font-semibold text-gray-800 dark:text-gray-200"},He=["src","alt"],Me={class:"flex justify-between"},Re={class:"font-semibold text-gray-800 dark:text-gray-200"},qe={class:"flex justify-between"},Ge={class:"font-semibold text-gray-800 dark:text-gray-200"},Je={class:"flex justify-between"},Oe={class:"font-semibold text-gray-800 dark:text-gray-200"},Ke={key:0,class:"flex justify-between"},Qe={class:"font-semibold text-gray-800 dark:text-gray-200"},We={key:1,class:"flex items-center justify-center w-full p-3 space-y-4 text-center text-gray-500 bg-white rounded shadow sm:px-5 dark:bg-cool-gray-800"},Xe={class:"italic"};function Ye(s,x,t,_,Ze,$e){const w=f("app-head"),p=f("icon"),u=f("inertia-link"),k=f("AlertCard"),v=f("user-displayname"),U=f("social-channel-box"),j=f("post-list-box"),T=f("app-layout"),m=L("tippy");return r(),c(T,null,{default:d(()=>[g(w,{title:s.__(":name profile",{name:t.profileUser.name})},null,8,["title"]),e("div",z,[t.profileUser.banned_at?(r(),c(k,{key:0,"text-color":"text-red-600 dark:text-red-400","border-color":"border-red-500"},{icon:d(()=>[g(p,{name:"ban",class:"w-6 h-6 mr-4 text-red-500"})]),body:d(()=>[n(o(s.__("If you think it is a mistake."))+" ",1),g(u,{href:s.route("staff.index"),class:"font-semibold hover:underline"},{default:d(()=>[n(o(s.__("Please contact a Staff")),1)]),_:1},8,["href"]),n(". ")]),default:d(()=>[n(o(s.__("This User is Banned!"))+" ",1)]),_:1})):i("",!0),s.$page.props.jetstream.hasEmailVerification&&t.profileUser.email_verified_at===null?(r(),c(k,{key:1,"text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{default:d(()=>[n(o(s.__("This user hasn't verified his email yet!")),1)]),_:1})):i("",!0),e("div",H,[e("div",null,[e("div",{class:"w-full bg-center bg-no-repeat bg-cover",style:I(`height: 300px; background-image: url('${t.profileUser.cover_image_url}');`)},[e("img",{class:"w-full h-full opacity-0",src:`${t.profileUser.cover_image_url}`,alt:"Cover Image"},null,8,M)],4),e("div",R,[e("div",q,[e("div",G,[e("div",J,[e("div",O,[e("img",{style:{height:"9rem",width:"9rem"},class:"relative transition bg-white border-4 border-white rounded-full md dark:bg-cool-gray-800 hover:bg-gray-200 dark:border-gray-600",src:t.profileUser.profile_photo_url,alt:""},null,8,K),Q])])]),s.$page.props.auth.user?(r(),l("div",W,[t.profileUser.id===s.$page.props.auth.user.id?(r(),c(u,{key:0,href:s.route("profile.show"),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold bg-transparent border rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max border-light-blue-500 text-light-blue-500 hover:bg-light-blue-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[n(o(s.__("Edit")),1),e("span",X,"\xA0"+o(s.__("Profile")),1)]),_:1},8,["href"])):i("",!0),_.can("mute users")&&!t.profileUser.muted_at?(r(),c(u,{key:1,method:"post",as:"button",href:s.route("admin.user.mute",t.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-yellow-500 bg-transparent border border-yellow-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-yellow-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[n(o(s.__("Mute")),1),e("span",Y,"\xA0"+o(s.__("User")),1)]),_:1},8,["href"])):i("",!0),_.can("mute users")&&t.profileUser.muted_at?(r(),c(u,{key:2,method:"post",as:"button",href:s.route("admin.user.unmute",t.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-green-500 bg-transparent border border-green-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-green-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[n(o(s.__("UnMute")),1),Z]),_:1},8,["href"])):i("",!0),_.can("ban users")&&!t.profileUser.banned_at?(r(),c(u,{key:3,method:"post",as:"button",href:s.route("admin.user.ban",t.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-red-500 bg-transparent border border-red-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-red-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[n(o(s.__("Ban")),1),e("span",$,"\xA0"+o(s.__("User")),1)]),_:1},8,["href"])):i("",!0),_.can("ban users")&&t.profileUser.banned_at?(r(),c(u,{key:4,method:"post",as:"button",href:s.route("admin.user.unban",t.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-green-500 bg-transparent border border-green-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-green-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[n(o(s.__("UnBan")),1),e("span",ee,"\xA0"+o(s.__("User")),1)]),_:1},8,["href"])):i("",!0),_.can("update users")?(r(),c(u,{key:5,href:s.route("admin.user.edit",t.profileUser.id),class:"flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-light-blue-500 bg-transparent border border-light-blue-500 rounded-full max-h-max whitespace-nowrap focus:outline-none max-w-max hover:bg-green-50 dark:hover:bg-cool-gray-900"},{default:d(()=>[n(o(s.__("Edit")),1)]),_:1},8,["href"])):i("",!0)])):i("",!0)]),e("div",te,[e("div",null,[g(v,{user:t.profileUser,"icon-class":"w-6 h-6","text-class":"text-xl"},null,8,["user"]),e("p",se," @"+o(t.profileUser.username),1)]),e("div",null,[(r(!0),l(y,null,b(t.profileUser.roles,a=>h((r(),l("img",{key:a.id,src:a.photo_url,alt:a.display_name,content:a.display_name,class:"focus:outline-none max-h-16"},null,8,oe)),[[m]])),128))]),e("div",re,[h((r(),l("p",{class:"text-sm font-medium leading-5 text-gray-600 focus:outline-none",title:_.formatToDayDateString(t.profileUser.created_at)},[n(o(s.__("Joined"))+": "+o(_.formatTimeAgoToNow(t.profileUser.created_at)),1)],8,ae)),[[m]])])])])])]),e("div",le,[e("div",ne,[t.profileUser.players.length>0?(r(),l("div",ie,[(r(!0),l(y,null,b(t.profileUser.players,a=>(r(),l("div",{key:a.uuid,class:"flex justify-around p-4 space-x-4 border-b border-gray-200 dark:border-none"},[e("img",{src:s.route("player.render.get",{uuid:a.uuid,username:a.username,scale:4}),alt:a.username},null,8,de),e("div",ce,[e("div",_e,[g(u,{as:"a",href:s.route("player.show",a.uuid),class:"text-lg font-bold text-light-blue-400 hover:text-light-blue-500"},{default:d(()=>[n(o(a.username),1)]),_:2},1032,["href"])]),e("div",ue,[e("p",fe,o(s.__("Position"))+": ",1),e("div",me,[a.position?(r(),l("span",he,o(a.position),1)):(r(),l("span",ge,o(s.__("None")),1))])]),e("div",be,[e("p",ye,o(s.__("Rating"))+": ",1),a.rating!=null?h((r(),c(p,{key:0,class:"w-8 h-8 focus:outline-none",name:`rating-${a.rating}`,content:a.rating},null,8,["name","content"])),[[m]]):(r(),l("p",xe,o(s.__("None")),1))]),e("div",pe,[e("p",ke,o(s.__("Rank"))+": ",1),e("div",we,[a.rank?(r(),l("p",ve,o(a.rank.name),1)):(r(),l("p",Ue,o(s.__("None")),1)),a.rank&&a.rank.photo_url?h((r(),l("img",{key:2,src:a.rank.photo_url,alt:a.rank.name,title:a.rank.name,class:"w-8 h-8 focus:outline-none"},null,8,je)),[[m]]):i("",!0)])]),e("div",Te,[e("p",De,o(s.__("Last Seen"))+": ",1),e("div",Be,[h((r(),l("p",{class:"focus:outline-none dark:text-gray-200",title:_.formatToDayDateString(a.last_seen_at)},[n(o(_.formatTimeAgoToNow(a.last_seen_at)),1)],8,Se)),[[m]])])])])]))),128))])):i("",!0),t.profileUser.badges&&t.profileUser.badges.length>0?(r(),l("div",Ne,[Ae,e("div",Ce,[(r(!0),l(y,null,b(t.profileUser.badges,a=>h((r(),l("div",{key:a.id,title:a.name},[e("img",{class:"w-12 h-12",src:a.photo_url,alt:a.name},null,8,Ve)],8,Pe)),[[m]])),128))])])):i("",!0),t.profileUser.about?(r(),l("div",Ee,[e("span",Ie,o(t.profileUser.about),1)])):i("",!0),e("div",Le,[e("div",Fe,[e("span",null,o(s.__("Country")),1),e("span",ze,[n(o(t.profileUser.country.name)+" ",1),e("img",{class:"inline h-6 mb-1",src:t.profileUser.country.photo_path,alt:t.profileUser.country.name},null,8,He)])]),e("div",Me,[e("span",null,o(s.__("Day of Birth")),1),e("span",Re,o(t.profileUser.dob_string||s.__("unknown")),1)]),e("div",qe,[e("span",null,o(s.__("Gender")),1),e("span",Ge,o(s.__(t.profileUser.gender_string)||s.__("unknown")),1)]),e("div",Je,[e("span",null,o(s.__("Total Posts")),1),e("span",Oe,o(t.profileUser.posts_count),1)]),t.profileUser.social_links&&t.profileUser.social_links.s_discord_username?(r(),l("div",Ke,[e("span",null,o(s.__("Discord")),1),e("span",Qe,o(t.profileUser.social_links.s_discord_username),1)])):i("",!0)]),t.profileUser.social_links?(r(),c(U,{key:3,enabled:!!t.profileUser.social_links,"show-title":!1,facebook:t.profileUser.social_links.s_facebook_url,youtube:t.profileUser.social_links.s_youtube_url,twitch:t.profileUser.social_links.s_twitch_url,twitter:t.profileUser.social_links.s_twitter_url,steam:t.profileUser.social_links.s_steam_profile_url,website:t.profileUser.social_links.s_website_url},null,8,["enabled","facebook","youtube","twitch","twitter","steam","website"])):i("",!0)]),s.$page.props.generalSettings.enable_status_feed?(r(),c(j,{key:0,username:t.profileUser.username,"show-empty-post":!0},null,8,["username"])):(r(),l("div",We,[e("span",Xe,o(s.__("Posts Feed is disabled!")),1)]))])])]),_:1})}const dt=E(F,[["render",Ye]]);export{dt as default};