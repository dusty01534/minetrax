import{A as w}from"./AppLayout-9f94cfff.js";import F from"./DeleteUserForm-f969f4c4.js";import{J as y}from"./SectionBorder-e0cc7ef7.js";import $ from"./LogoutOtherBrowserSessionsForm-2a741adb.js";import k from"./TwoFactorAuthenticationForm-57448c33.js";import v from"./UpdatePasswordForm-d89a6101.js";import P from"./UpdateProfileInformationForm-8b4af91d.js";import b from"./UpdateNotificationPreferencesForm-8277bb80.js";import{_ as j,l as t,o as s,c as B,w as p,a as n,t as U,b as o,d as a,e as m,F as x}from"./app-9b50b83a.js";import"./useAuthorizable-6bc0b9b8.js";import"./ActionSection-85b70489.js";import"./SectionTitle-5356a9a0.js";import"./DialogModal-f1fe7175.js";import"./Modal-5bc3ed35.js";import"./DangerButton-784f0c98.js";import"./Input-9240a425.js";import"./InputError-396fbd53.js";import"./SecondaryButton-15bbe80b.js";import"./ActionMessage-8f4a450c.js";import"./Button-bf895ce4.js";import"./XInput-c4573bcd.js";import"./FormSection-164644d5.js";import"./PasswordStrengthMeter-bb7c974d.js";import"./Label-a819376c.js";import"./index.es-a23a68a6.js";import"./XCheckbox-15c84b34.js";import"./XSelect-00ebc6f1.js";import"./XTextarea-ede0d59e.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,q){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),u=t("two-factor-authentication-form"),d=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:p(()=>[n("h2",S,U(e.__("Profile")),1)]),default:p(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.auth.user},null,8,["user"]),o(r)])):m("",!0),n("div",null,[o(l,{user:e.$page.props.auth.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):m("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(u,{class:"mt-10 sm:mt-0","requires-confirmation":!0}),o(r)])):m("",!0),o(d,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1})}const ho=j(A,[["render",I]]);export{ho as default};