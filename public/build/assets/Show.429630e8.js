import{A as w}from"./AppLayout.a27d234c.js";import F from"./DeleteUserForm.6ffa4613.js";import{J as y}from"./SectionBorder.bf84e859.js";import $ from"./LogoutOtherBrowserSessionsForm.1f295609.js";import k from"./TwoFactorAuthenticationForm.dfda5767.js";import v from"./UpdatePasswordForm.58bd34a8.js";import P from"./UpdateProfileInformationForm.dace2e21.js";import b from"./UpdateNotificationPreferencesForm.4b544593.js";import{_ as j,p as t,o as s,c as B,w as p,a as n,t as U,b as o,d as a,e as m,F as x}from"./app.6f335fbd.js";import"./ActionSection.1a61ac38.js";import"./SectionTitle.d3f23117.js";import"./DialogModal.c2b5f91a.js";import"./Modal.c6dd94e8.js";import"./DangerButton.cf8757ac.js";import"./Input.fe90f152.js";import"./InputError.9646903f.js";import"./SecondaryButton.631d1338.js";import"./ActionMessage.9d867c44.js";import"./Button.ad5d93a8.js";import"./XInput.ce27f4dc.js";import"./FormSection.ff9b7b85.js";import"./PasswordStrengthMeter.2baca6d5.js";import"./Label.960fa72f.js";import"./index.es.53a97813.js";import"./XCheckbox.7893c662.js";import"./XSelect.e855d5ce.js";import"./XTextarea.3861227f.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,q){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),u=t("two-factor-authentication-form"),d=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:p(()=>[n("h2",S,U(e.__("Profile")),1)]),default:p(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.user},null,8,["user"]),o(r)])):m("",!0),n("div",null,[o(l,{user:e.$page.props.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):m("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(u,{class:"mt-10 sm:mt-0","requires-confirmation":!0}),o(r)])):m("",!0),o(d,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1})}const uo=j(A,[["render",I]]);export{uo as default};