"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[592],{7550:(c,d,s)=>{s.d(d,{r:()=>p});var l=s(2340),v=s(7579),h=s(1135),r=s(4004),n=s(262),a=s(9646),u=s(5e3),g=s(520);const _=l.N.base_url;let p=(()=>{class o{constructor(e){this._http=e,this.dialogSubject=new v.x,this._services=new h.X(null)}get services$(){return this._services.asObservable()}createService(e){return this._http.post(`${_}/service/create`,e,this.getHeaders).pipe((0,r.U)(t=>t.statusCode?t.statusCode:500),(0,n.K)(t=>(0,a.of)(t.status)))}updateService(e){return this._http.put(`${_}/service/update`,e,this.getHeaders).pipe((0,r.U)(t=>(null==t?void 0:t.statusCode)?null==t?void 0:t.statusCode:500),(0,n.K)(t=>(console.log(t),(0,a.of)(500))))}findServices(e){return this._http.post(`${_}/service/find`,e,this.getHeaders).pipe((0,r.U)(t=>(null==t?void 0:t.statusCode)&&200==(null==t?void 0:t.statusCode)?(this._services.next(null==t?void 0:t.services),{page:null==t?void 0:t.page,total:t.total,pages:null==t?void 0:t.pages,services:t.services}):null),(0,n.K)(t=>(0,a.of)(null)))}dialog(){this.dialogSubject.next()}get onDialog(){return this.dialogSubject.asObservable()}get getToken(){return localStorage.getItem("x-token")||""}get getHeaders(){return{headers:{"x-token":this.getToken}}}}return o.\u0275fac=function(e){return new(e||o)(u.LFG(g.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},4557:(c,d,s)=>{s.d(d,{K:()=>p});var l=s(2340),v=s(7579),h=s(1135),r=s(4004),n=s(262),a=s(9646),u=s(5e3),g=s(520);const _=l.N.base_url;let p=(()=>{class o{constructor(e){this._http=e,this.fooSubject=new v.x,this._users=new h.X(null),this._neighbors=new h.X(null),this.path=`${_}/user`}get users$(){return this._users.asObservable()}get neighbors$(){return this._neighbors.asObservable()}getUsers(e){return this._http.post(`${this.path}/users`,e,this.getHeaders).pipe((0,r.U)(t=>t.statusCode&&200==t.statusCode?(this._users.next(t.data),{users:t.data,total:t.count,page:t.page,pages:t.pages}):null),(0,n.K)(t=>(0,a.of)(null)))}createUser(e){return this._http.post(`${this.path}/create`,e,this.getHeaders).pipe((0,r.U)(t=>t.statusCode?t.statusCode:500),(0,n.K)(t=>(0,a.of)(t.status)))}updateUser(e){return this._http.put(`${this.path}/update`,e,this.getHeaders).pipe((0,r.U)(t=>t?t.statusCode:500),(0,n.K)(t=>(0,a.of)(t.status)))}deleteUser(e){return this._http.delete(`${this.path}/${e}`,this.getHeaders).pipe((0,r.U)(t=>t?t.statusCode:500),(0,n.K)(t=>(0,a.of)(t.status)))}getNeighbors(){return this._http.get(`${this.path}/neighbors`,this.getHeaders).pipe((0,r.U)(e=>(this._neighbors.next(null==e?void 0:e.data),null==e?void 0:e.data)),(0,n.K)(e=>(0,a.of)(null)))}updateNeighborStatus(e,t){return this._http.put(`${this.path}/status`,{userId:e,status:t},this.getHeaders).pipe((0,r.U)(i=>i?null==i?void 0:i.statusCode:500),(0,n.K)(i=>(0,a.of)(null==i?void 0:i.status)))}get getToken(){return localStorage.getItem("x-token")||""}get getHeaders(){return{headers:{"x-token":this.getToken}}}foo(){this.fooSubject.next()}get onFoo(){return this.fooSubject.asObservable()}}return o.\u0275fac=function(e){return new(e||o)(u.LFG(g.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);