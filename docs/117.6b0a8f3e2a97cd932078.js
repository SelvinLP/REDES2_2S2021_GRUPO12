(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[117],{5117:(t,e,o)=>{"use strict";o.r(e),o.d(e,{AuthModule:()=>R});var n=o(8583),r=o(3679),i=o(1841),s=o(3423),a=o(7716);let l=(()=>{class t{constructor(){this.today=new Date}ngOnInit(){document.body.classList.add("bg-white")}ngOnDestroy(){document.body.classList.remove("bg-white")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-auth"]],decls:13,vars:0,consts:[[1,"d-flex","flex-column","flex-column-fluid","bgi-position-y-bottom","position-x-center","bgi-no-repeat","bgi-size-contain","bgi-attachment-fixed",2,"background-image","url('./assets/media/illustrations/sketchy-1/14.png')"],[1,"d-flex","flex-center","flex-column","flex-column-fluid","p-10","pb-lg-20"],["routerLink","/",1,"mb-12"],[1,"w-lg-500px","bg-white","rounded","shadow-sm","p-10","p-lg-15","mx-auto"],[1,"d-flex","flex-center","flex-column-auto","p-10"],[1,"d-flex","align-items-center","fw-bold","fs-6"],[1,"text-muted","text-hover-primary","px-2","cursor-pointer"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a._UZ(2,"a",2),a.TgZ(3,"div",3),a._UZ(4,"router-outlet"),a.qZA(),a.qZA(),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"a",6),a._uU(8,"About"),a.qZA(),a.TgZ(9,"a",6),a._uU(10,"Contact"),a.qZA(),a.TgZ(11,"a",6),a._uU(12,"Contact Us"),a.qZA(),a.qZA(),a.qZA(),a.qZA())},directives:[s.yS,s.lC],styles:["[_nghost-%COMP%]{height:100%}"]}),t})();var m=o(8049),u=o(4222);function g(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"div",15),a.TgZ(2,"div",16),a._uU(3," Use account "),a.TgZ(4,"strong"),a._uU(5),a.qZA(),a._uU(6," and password "),a.TgZ(7,"strong"),a._uU(8),a.qZA(),a._uU(9," to continue. "),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw();a.xp6(5),a.Oqu(t.defaultAuth.email),a.xp6(3),a.Oqu(t.defaultAuth.password)}}function c(t,e){1&t&&(a.ynx(0),a.TgZ(1,"div",17),a.TgZ(2,"div",18),a._uU(3," The login details are incorrect "),a.qZA(),a.qZA(),a.BQk())}function d(t,e){1&t&&(a.ynx(0),a.TgZ(1,"span",19),a._uU(2," Please wait... "),a._UZ(3,"span",20),a.qZA(),a.BQk()),2&t&&(a.xp6(1),a.Udp("display","block"))}function p(t,e){1&t&&(a.ynx(0),a.TgZ(1,"span",21),a._uU(2,"Continue"),a.qZA(),a.BQk())}function f(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"div",22),a.TgZ(2,"span",23),a._uU(3),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw().message;a.xp6(3),a.hij(" ",t," ")}}function h(t,e){if(1&t&&a.YNc(0,f,4,1,"ng-container",3),2&t){const t=e.control;a.Q6J("ngIf",t.hasError(e.validation)&&(t.dirty||t.touched))}}const v=function(t,e){return{"is-invalid":t,"is-valid":e}},b=function(t){return{validation:"required",message:"Email is required",control:t}},x=function(t){return{validation:"email",message:"Email is invalid",control:t}},Z=function(t){return{validation:"minLength",message:"Email should have at least 3 symbols",control:t}},w=function(t){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:t}},q=function(t){return{validation:"required",message:"Password is required",control:t}},T=function(t){return{validation:"minlength",message:"Password should have at least 3 symbols",control:t}},k=function(t){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:t}};let _=(()=>{class t{constructor(t,e,o,n){this.fb=t,this.authService=e,this.route=o,this.router=n,this.defaultAuth={email:"admin@demo.com",password:"demo"},this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:[this.defaultAuth.email,r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:[this.defaultAuth.password,r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])]})}submit(){this.hasError=!1;const t=this.authService.login(this.f.email.value,this.f.password.value).pipe((0,m.P)()).subscribe(t=>{t?this.router.navigate([this.returnUrl]):this.hasError=!0});this.unsubscribe.push(t)}ngOnDestroy(){this.unsubscribe.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(r.qu),a.Y36(u.e),a.Y36(s.gz),a.Y36(s.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-login"]],decls:31,vars:46,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[4,"ngIf"],[1,"fv-row","mb-10"],[1,"form-label","fs-6","fw-bolder","text-dark"],["type","email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","justify-content-between","mt-n5"],[1,"d-flex","flex-stack","mb-2"],[1,"form-label","fw-bolder","text-dark","fs-6","mb-0"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"text-center"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],["formError",""],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"indicator-label"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(t,e){if(1&t&&(a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return e.submit()}),a.TgZ(1,"div",1),a.TgZ(2,"h1",2),a._uU(3,"Sign In to Redes 2 Group 12"),a.qZA(),a.qZA(),a.YNc(4,g,10,2,"ng-container",3),a.YNc(5,c,4,0,"ng-container",3),a.TgZ(6,"div",4),a.TgZ(7,"label",5),a._uU(8,"Email"),a.qZA(),a._UZ(9,"input",6),a.GkF(10,7),a.GkF(11,7),a.GkF(12,7),a.GkF(13,7),a.qZA(),a.TgZ(14,"div",4),a.TgZ(15,"div",8),a.TgZ(16,"div",9),a.TgZ(17,"label",10),a._uU(18,"Password"),a.qZA(),a.qZA(),a.qZA(),a._UZ(19,"input",11),a.GkF(20,7),a.GkF(21,7),a.GkF(22,7),a.qZA(),a.TgZ(23,"div",12),a.TgZ(24,"button",13),a.YNc(25,d,4,2,"ng-container",3),a.ALo(26,"async"),a.YNc(27,p,3,0,"ng-container",3),a.ALo(28,"async"),a.qZA(),a.qZA(),a.qZA(),a.YNc(29,h,1,1,"ng-template",null,14,a.W1O)),2&t){const t=a.MAs(30);a.Q6J("formGroup",e.loginForm),a.xp6(4),a.Q6J("ngIf",!e.hasError),a.xp6(1),a.Q6J("ngIf",e.hasError),a.xp6(4),a.Q6J("ngClass",a.WLB(26,v,e.loginForm.controls.email.invalid,e.loginForm.controls.email.valid)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(29,b,e.loginForm.controls.email)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(31,x,e.loginForm.controls.email)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(33,Z,e.loginForm.controls.email)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(35,w,e.loginForm.controls.email)),a.xp6(6),a.Q6J("ngClass",a.WLB(37,v,e.loginForm.controls.password.invalid,e.loginForm.controls.password.valid)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(40,q,e.loginForm.controls.password)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(42,T,e.loginForm.controls.password)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(44,k,e.loginForm.controls.password)),a.xp6(2),a.Q6J("disabled",e.loginForm.invalid),a.xp6(1),a.Q6J("ngIf",a.lcZ(26,22,e.isLoading$)),a.xp6(2),a.Q6J("ngIf",!a.lcZ(28,24,e.isLoading$))}},directives:[r._Y,r.JL,r.sg,n.O5,r.Fj,r.JJ,r.u,n.mk,n.tP],pipes:[n.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})();class A{static MatchPassword(t){var e,o,n;(null===(e=t.get("password"))||void 0===e?void 0:e.value)!==(null===(o=t.get("cPassword"))||void 0===o?void 0:o.value)&&(null===(n=t.get("cPassword"))||void 0===n||n.setErrors({ConfirmPassword:!0}))}}var y=o(3223);class F extends y.W{constructor(){super(...arguments),this.roles=[]}setUser(t){const e=t;this.id=e.id,this.username=e.username||"",this.password=e.password||"",this.fullname=e.fullname||"",this.email=e.email||"",this.pic=e.pic||"./assets/media/users/default.jpg",this.roles=e.roles||[],this.occupation=e.occupation||"",this.companyName=e.companyName||"",this.phone=e.phone||"",this.address=e.address,this.socialNetworks=e.socialNetworks}}function O(t,e){1&t&&(a.ynx(0),a.TgZ(1,"div",30),a.TgZ(2,"div",31),a._uU(3," The registration details are incorrect "),a.qZA(),a.qZA(),a.BQk())}function C(t,e){1&t&&(a.ynx(0),a.TgZ(1,"div",32),a.TgZ(2,"div",33),a._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),a.qZA(),a.qZA(),a.BQk())}function U(t,e){1&t&&(a.ynx(0),a.TgZ(1,"span",34),a._uU(2,"Submit"),a.qZA(),a.BQk())}function J(t,e){1&t&&(a.ynx(0),a.TgZ(1,"span",35),a._uU(2," Please wait... "),a._UZ(3,"span",36),a.qZA(),a.BQk()),2&t&&(a.xp6(1),a.Udp("display","block"))}function P(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"div",32),a.TgZ(2,"div",33),a.TgZ(3,"span",37),a._uU(4),a.qZA(),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw().message;a.xp6(4),a.hij(" ",t," ")}}function Q(t,e){if(1&t&&a.YNc(0,P,5,1,"ng-container",10),2&t){const t=e.control;a.Q6J("ngIf",t.hasError(e.validation)&&(t.dirty||t.touched))}}const I=function(t,e){return{"is-invalid":t,"is-valid":e}},L=function(t){return{validation:"required",message:"Fullname is required",control:t}},E=function(t){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:t}},G=function(t){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:t}},N=function(t){return{validation:"required",message:"Email is required",control:t}},S=function(t){return{validation:"email",message:"Email is invalid",control:t}},M=function(t){return{validation:"minlength",message:"Email should have at least 3 symbols",control:t}},V=function(t){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:t}},Y=function(t){return{validation:"required",message:"Password is required",control:t}},B=function(t){return{validation:"minlength",message:"Password should have at least 3 symbols",control:t}},K=function(t){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:t}},W=function(t){return{validation:"required",message:"Confirm Password is required",control:t}},j=function(t){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:t}},$=function(t){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:t}},z=[{path:"",component:l,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:_,data:{returnUrl:window.location.pathname}},{path:"registration",component:(()=>{class t{constructor(t,e,o){this.fb=t,this.authService=e,this.router=o,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],email:["qwe@qwe.qwe",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],cPassword:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],agree:[!1,r.kI.compose([r.kI.required])]},{validator:A.MatchPassword})}submit(){this.hasError=!1;const t={};Object.keys(this.f).forEach(e=>{t[e]=this.f[e].value});const e=new F;e.setUser(t);const o=this.authService.registration(e).pipe((0,m.P)()).subscribe(t=>{t?this.router.navigate(["/"]):this.hasError=!0});this.unsubscribe.push(o)}ngOnDestroy(){this.unsubscribe.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(r.qu),a.Y36(u.e),a.Y36(s.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-registration"]],decls:65,vars:80,consts:[["novalidate","novalidate","id","kt_login_signup_form",1,"form","w-100","fv-plugins-bootstrap5","fv-plugins-framework",3,"formGroup","ngSubmit"],[1,"mb-10","text-center"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],["routerLink","/auth/login",1,"link-primary","fw-bolder"],["type","button",1,"btn","btn-light-primary","fw-bolder","w-100","mb-10"],["alt","Logo","src","./assets/media/svg/brand-logos/google-icon.svg",1,"h-20px","me-3"],[1,"d-flex","align-items-center","mb-10"],[1,"border-bottom","border-gray-300","mw-50","w-100"],[1,"fw-bold","text-gray-400","fs-7","mx-2"],[4,"ngIf"],[1,"row","fv-row","mb-7"],[1,"form-label","fw-bolder","text-dark","fs-6"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"fv-row","mb-7"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"mb-10","fv-row"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-5"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-10"],[1,"form-check","form-check-custom","form-check-solid"],["id","kt_login_toc_agree","type","checkbox","formControlName","agree","name","agree",1,"form-check-input"],["for","kt_login_toc_agree",1,"form-check-label","fw-bold","text-gray-700","fs-6"],["href","https://keenthemes.com/Metronic/?page=faq","target","_blank",1,"ms-1","link-primary"],[1,"text-center"],["type","submit","id","kt_sign_up_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],["routerLink","/auth/login","type","button","id","kt_login_signup_form_cancel_button",1,"btn","btn-lg","btn-light-primary","w-100","mb-5"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["role","alert"]],template:function(t,e){if(1&t&&(a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return e.submit()}),a.TgZ(1,"div",1),a.TgZ(2,"h1",2),a._uU(3,"Create an Account"),a.qZA(),a.TgZ(4,"div",3),a._uU(5," Already have an account? "),a.TgZ(6,"a",4),a._uU(7,"Sign in?"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"button",5),a._UZ(9,"img",6),a._uU(10,"Sign in with Google "),a.qZA(),a.TgZ(11,"div",7),a._UZ(12,"div",8),a.TgZ(13,"span",9),a._uU(14,"OR"),a.qZA(),a._UZ(15,"div",8),a.qZA(),a.YNc(16,O,4,0,"ng-container",10),a.TgZ(17,"div",11),a.TgZ(18,"label",12),a._uU(19,"Fullname"),a.qZA(),a._UZ(20,"input",13),a.GkF(21,14),a.GkF(22,14),a.GkF(23,14),a.qZA(),a.TgZ(24,"div",15),a.TgZ(25,"label",12),a._uU(26,"Email"),a.qZA(),a._UZ(27,"input",16),a.GkF(28,14),a.GkF(29,14),a.GkF(30,14),a.GkF(31,14),a.qZA(),a.TgZ(32,"div",17),a.TgZ(33,"label",12),a._uU(34,"Password"),a.qZA(),a._UZ(35,"input",18),a.GkF(36,14),a.GkF(37,14),a.GkF(38,14),a.qZA(),a.TgZ(39,"div",19),a.TgZ(40,"label",12),a._uU(41,"Confirm Password"),a.qZA(),a._UZ(42,"input",20),a.GkF(43,14),a.GkF(44,14),a.GkF(45,14),a.YNc(46,C,4,0,"ng-container",10),a.qZA(),a.TgZ(47,"div",21),a.TgZ(48,"div",22),a._UZ(49,"input",23),a.TgZ(50,"label",24),a._uU(51," I Agree the\xa0"),a.TgZ(52,"a",25),a._uU(53,"terms and conditions"),a.qZA(),a._uU(54,". "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(55,"div",26),a.TgZ(56,"button",27),a.YNc(57,U,3,0,"ng-container",10),a.ALo(58,"async"),a.YNc(59,J,4,2,"ng-container",10),a.ALo(60,"async"),a.qZA(),a.TgZ(61,"a",28),a._uU(62," Cancel "),a.qZA(),a.qZA(),a.qZA(),a.YNc(63,Q,1,1,"ng-template",null,29,a.W1O)),2&t){const t=a.MAs(64);a.Q6J("formGroup",e.registrationForm),a.xp6(6),a.Udp("margin-left","5px"),a.xp6(10),a.Q6J("ngIf",e.hasError),a.xp6(4),a.Q6J("ngClass",a.WLB(42,I,e.registrationForm.controls.fullname.invalid,e.registrationForm.controls.fullname.valid)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(45,L,e.registrationForm.controls.fullname)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(47,E,e.registrationForm.controls.fullname)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(49,G,e.registrationForm.controls.fullname)),a.xp6(4),a.Q6J("ngClass",a.WLB(51,I,e.registrationForm.controls.email.invalid,e.registrationForm.controls.email.valid)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(54,N,e.registrationForm.controls.email)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(56,S,e.registrationForm.controls.email)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(58,M,e.registrationForm.controls.email)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(60,V,e.registrationForm.controls.email)),a.xp6(4),a.Q6J("ngClass",a.WLB(62,I,e.registrationForm.controls.password.invalid,e.registrationForm.controls.password.valid)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(65,Y,e.registrationForm.controls.password)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(67,B,e.registrationForm.controls.password)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(69,K,e.registrationForm.controls.password)),a.xp6(4),a.Q6J("ngClass",a.WLB(71,I,e.registrationForm.controls.cPassword.invalid,e.registrationForm.controls.cPassword.valid)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(74,W,e.registrationForm.controls.cPassword)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(76,j,e.registrationForm.controls.cPassword)),a.xp6(1),a.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",a.VKq(78,$,e.registrationForm.controls.cPassword)),a.xp6(1),a.Q6J("ngIf",e.registrationForm.controls.cPassword.errors&&e.registrationForm.controls.cPassword.errors.ConfirmPassword),a.xp6(10),a.Q6J("disabled",e.registrationForm.invalid||!e.registrationForm.controls.agree.value),a.xp6(1),a.Q6J("ngIf",!1===a.lcZ(58,38,e.isLoading$)),a.xp6(2),a.Q6J("ngIf",a.lcZ(60,40,e.isLoading$))}},directives:[r._Y,r.JL,r.sg,s.yS,n.O5,r.Fj,r.JJ,r.u,n.mk,n.tP,r.Wl],pipes:[n.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})()},{path:"logout",component:(()=>{class t{constructor(t){this.authService=t,this.authService.logout()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(u.e))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-logout"]],decls:2,vars:0,template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"logout works!"),a.qZA())},styles:[""]}),t})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(z)],s.Bz]}),t})();var D=o(7292);let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,D.q,X,r.u5,r.UX,i.JF]]}),t})()}}]);