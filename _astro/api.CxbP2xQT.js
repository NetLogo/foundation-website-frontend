import"./jsx-runtime.BftctW7E.js";/* empty css                       */import"./index.DJO9vBfz.js";/* empty css                        */class k extends Error{response;request;constructor(t,n){const s=`${k.extractMessage(t)}: ${JSON.stringify({response:t,request:n})}`;super(s),Object.setPrototypeOf(this,k.prototype),this.response=t,this.request=n,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,k)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${String(t.status)})`}}const re=e=>e.toUpperCase(),$=e=>typeof e=="function"?e():e,ye=(e,t)=>e.map((n,s)=>[n,t[s]]),C=e=>{let t={};return e instanceof Headers?t=ke(e):Array.isArray(e)?e.forEach(([n,s])=>{n&&s!==void 0&&(t[n]=s)}):e&&(t=e),t},ke=e=>{const t={};return e.forEach((n,s)=>{t[s]=n}),t},we=e=>{try{const t=e();return Re(t)?t.catch(n=>oe(n)):t}catch(t){return oe(t)}},oe=e=>e instanceof Error?e:new Error(String(e)),Re=e=>typeof e=="object"&&e!==null&&"then"in e&&typeof e.then=="function"&&"catch"in e&&typeof e.catch=="function"&&"finally"in e&&typeof e.finally=="function",Z=e=>{throw new Error(`Unhandled case: ${String(e)}`)},P=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),Le=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0},Fe=(e,t,n)=>e.query?e:{query:e,variables:t,requestHeaders:n,signal:void 0};function q(e,t){if(!!!e)throw new Error(t)}function Pe(e){return typeof e=="object"&&e!==null}function qe(e,t){if(!!!e)throw new Error("Unexpected invariant triggered.")}const Me=/\r\n|[\n\r]/g;function J(e,t){let n=0,s=1;for(const i of e.body.matchAll(Me)){if(typeof i.index=="number"||qe(!1),i.index>=t)break;n=i.index+i[0].length,s+=1}return{line:s,column:t+1-n}}function Ue(e){return Te(e.source,J(e.source,e.start))}function Te(e,t){const n=e.locationOffset.column-1,s="".padStart(n)+e.body,i=t.line-1,r=e.locationOffset.line-1,a=t.line+r,h=t.line===1?n:0,p=t.column+h,u=`${e.name}:${a}:${p}
`,d=s.split(/\r\n|[\n\r]/g),E=d[i];if(E.length>120){const f=Math.floor(p/80),I=p%80,N=[];for(let y=0;y<E.length;y+=80)N.push(E.slice(y,y+80));return u+ae([[`${a} |`,N[0]],...N.slice(1,f+1).map(y=>["|",y]),["|","^".padStart(I)],["|",N[f+1]]])}return u+ae([[`${a-1} |`,d[i-1]],[`${a} |`,E],["|","^".padStart(p)],[`${a+1} |`,d[i+1]]])}function ae(e){const t=e.filter(([s,i])=>i!==void 0),n=Math.max(...t.map(([s])=>s.length));return t.map(([s,i])=>s.padStart(n)+(i?" "+i:"")).join(`
`)}function Be(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class K extends Error{constructor(t,...n){var s,i,r;const{nodes:a,source:h,positions:p,path:u,originalError:d,extensions:E}=Be(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=ce(Array.isArray(a)?a:a?[a]:void 0);const f=ce((s=this.nodes)===null||s===void 0?void 0:s.map(N=>N.loc).filter(N=>N!=null));this.source=h??(f==null||(i=f[0])===null||i===void 0?void 0:i.source),this.positions=p??f?.map(N=>N.start),this.locations=p&&h?p.map(N=>J(h,N)):f?.map(N=>J(N.source,N.start));const I=Pe(d?.extensions)?d?.extensions:void 0;this.extensions=(r=E??I)!==null&&r!==void 0?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,K):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+Ue(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+Te(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function ce(e){return e===void 0||e.length===0?void 0:e}function g(e,t,n){return new K(`Syntax Error: ${n}`,{source:e,positions:[t]})}class Ve{constructor(t,n,s){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class ge{constructor(t,n,s,i,r,a){this.kind=t,this.start=n,this.end=s,this.line=i,this.column=r,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const xe={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},je=new Set(Object.keys(xe));function ue(e){const t=e?.kind;return typeof t=="string"&&je.has(t)}var b;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(b||(b={}));var z;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(z||(z={}));var l;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(l||(l={}));function Q(e){return e===9||e===32}function L(e){return e>=48&&e<=57}function Ie(e){return e>=97&&e<=122||e>=65&&e<=90}function _e(e){return Ie(e)||e===95}function $e(e){return Ie(e)||L(e)||e===95}function Ge(e){var t;let n=Number.MAX_SAFE_INTEGER,s=null,i=-1;for(let a=0;a<e.length;++a){var r;const h=e[a],p=Ye(h);p!==h.length&&(s=(r=s)!==null&&r!==void 0?r:a,i=a,a!==0&&p<n&&(n=p))}return e.map((a,h)=>h===0?a:a.slice(n)).slice((t=s)!==null&&t!==void 0?t:0,i+1)}function Ye(e){let t=0;for(;t<e.length&&Q(e.charCodeAt(t));)++t;return t}function He(e,t){const n=e.replace(/"""/g,'\\"""'),s=n.split(/\r\n|[\n\r]/g),i=s.length===1,r=s.length>1&&s.slice(1).every(I=>I.length===0||Q(I.charCodeAt(0))),a=n.endsWith('\\"""'),h=e.endsWith('"')&&!a,p=e.endsWith("\\"),u=h||p,d=!i||e.length>70||u||r||a;let E="";const f=i&&Q(e.charCodeAt(0));return(d&&!f||r)&&(E+=`
`),E+=n,(d||u)&&(E+=`
`),'"""'+E+'"""'}var o;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(o||(o={}));class Je{constructor(t){const n=new ge(o.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==o.EOF)do if(t.next)t=t.next;else{const n=Qe(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===o.COMMENT);return t}}function ze(e){return e===o.BANG||e===o.DOLLAR||e===o.AMP||e===o.PAREN_L||e===o.PAREN_R||e===o.SPREAD||e===o.COLON||e===o.EQUALS||e===o.AT||e===o.BRACKET_L||e===o.BRACKET_R||e===o.BRACE_L||e===o.PIPE||e===o.BRACE_R}function w(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function U(e,t){return Oe(e.charCodeAt(t))&&ve(e.charCodeAt(t+1))}function Oe(e){return e>=55296&&e<=56319}function ve(e){return e>=56320&&e<=57343}function S(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return o.EOF;if(n>=32&&n<=126){const s=String.fromCodePoint(n);return s==='"'?`'"'`:`"${s}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function T(e,t,n,s,i){const r=e.line,a=1+n-e.lineStart;return new ge(t,n,s,r,a,i)}function Qe(e,t){const n=e.source.body,s=n.length;let i=t;for(;i<s;){const r=n.charCodeAt(i);switch(r){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return Xe(e,i);case 33:return T(e,o.BANG,i,i+1);case 36:return T(e,o.DOLLAR,i,i+1);case 38:return T(e,o.AMP,i,i+1);case 40:return T(e,o.PAREN_L,i,i+1);case 41:return T(e,o.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return T(e,o.SPREAD,i,i+3);break;case 58:return T(e,o.COLON,i,i+1);case 61:return T(e,o.EQUALS,i,i+1);case 64:return T(e,o.AT,i,i+1);case 91:return T(e,o.BRACKET_L,i,i+1);case 93:return T(e,o.BRACKET_R,i,i+1);case 123:return T(e,o.BRACE_L,i,i+1);case 124:return T(e,o.PIPE,i,i+1);case 125:return T(e,o.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?nt(e,i):Ze(e,i)}if(L(r)||r===45)return We(e,i,r);if(_e(r))return it(e,i);throw g(e.source,i,r===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:w(r)||U(n,i)?`Unexpected character: ${S(e,i)}.`:`Invalid character: ${S(e,i)}.`)}return T(e,o.EOF,s,s)}function Xe(e,t){const n=e.source.body,s=n.length;let i=t+1;for(;i<s;){const r=n.charCodeAt(i);if(r===10||r===13)break;if(w(r))++i;else if(U(n,i))i+=2;else break}return T(e,o.COMMENT,t,i,n.slice(t+1,i))}function We(e,t,n){const s=e.source.body;let i=t,r=n,a=!1;if(r===45&&(r=s.charCodeAt(++i)),r===48){if(r=s.charCodeAt(++i),L(r))throw g(e.source,i,`Invalid number, unexpected digit after 0: ${S(e,i)}.`)}else i=G(e,i,r),r=s.charCodeAt(i);if(r===46&&(a=!0,r=s.charCodeAt(++i),i=G(e,i,r),r=s.charCodeAt(i)),(r===69||r===101)&&(a=!0,r=s.charCodeAt(++i),(r===43||r===45)&&(r=s.charCodeAt(++i)),i=G(e,i,r),r=s.charCodeAt(i)),r===46||_e(r))throw g(e.source,i,`Invalid number, expected digit but got: ${S(e,i)}.`);return T(e,a?o.FLOAT:o.INT,t,i,s.slice(t,i))}function G(e,t,n){if(!L(n))throw g(e.source,t,`Invalid number, expected digit but got: ${S(e,t)}.`);const s=e.source.body;let i=t+1;for(;L(s.charCodeAt(i));)++i;return i}function Ze(e,t){const n=e.source.body,s=n.length;let i=t+1,r=i,a="";for(;i<s;){const h=n.charCodeAt(i);if(h===34)return a+=n.slice(r,i),T(e,o.STRING,t,i+1,a);if(h===92){a+=n.slice(r,i);const p=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?Ke(e,i):et(e,i):tt(e,i);a+=p.value,i+=p.size,r=i;continue}if(h===10||h===13)break;if(w(h))++i;else if(U(n,i))i+=2;else throw g(e.source,i,`Invalid character within String: ${S(e,i)}.`)}throw g(e.source,i,"Unterminated string.")}function Ke(e,t){const n=e.source.body;let s=0,i=3;for(;i<12;){const r=n.charCodeAt(t+i++);if(r===125){if(i<5||!w(s))break;return{value:String.fromCodePoint(s),size:i}}if(s=s<<4|R(r),s<0)break}throw g(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function et(e,t){const n=e.source.body,s=le(n,t+2);if(w(s))return{value:String.fromCodePoint(s),size:6};if(Oe(s)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=le(n,t+8);if(ve(i))return{value:String.fromCodePoint(s,i),size:12}}throw g(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function le(e,t){return R(e.charCodeAt(t))<<12|R(e.charCodeAt(t+1))<<8|R(e.charCodeAt(t+2))<<4|R(e.charCodeAt(t+3))}function R(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function tt(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw g(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function nt(e,t){const n=e.source.body,s=n.length;let i=e.lineStart,r=t+3,a=r,h="";const p=[];for(;r<s;){const u=n.charCodeAt(r);if(u===34&&n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34){h+=n.slice(a,r),p.push(h);const d=T(e,o.BLOCK_STRING,t,r+3,Ge(p).join(`
`));return e.line+=p.length-1,e.lineStart=i,d}if(u===92&&n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34&&n.charCodeAt(r+3)===34){h+=n.slice(a,r),a=r+1,r+=4;continue}if(u===10||u===13){h+=n.slice(a,r),p.push(h),u===13&&n.charCodeAt(r+1)===10?r+=2:++r,h="",a=r,i=r;continue}if(w(u))++r;else if(U(n,r))r+=2;else throw g(e.source,r,`Invalid character within String: ${S(e,r)}.`)}throw g(e.source,r,"Unterminated string.")}function it(e,t){const n=e.source.body,s=n.length;let i=t+1;for(;i<s;){const r=n.charCodeAt(i);if($e(r))++i;else break}return T(e,o.NAME,t,i,n.slice(t,i))}const st=10,Ae=2;function ee(e){return B(e,[])}function B(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return rt(e,t);default:return String(e)}}function rt(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(ot(e)){const s=e.toJSON();if(s!==e)return typeof s=="string"?s:B(s,n)}else if(Array.isArray(e))return ct(e,n);return at(e,n)}function ot(e){return typeof e.toJSON=="function"}function at(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Ae?"["+ut(e)+"]":"{ "+n.map(([i,r])=>i+": "+B(r,t)).join(", ")+" }"}function ct(e,t){if(e.length===0)return"[]";if(t.length>Ae)return"[Array]";const n=Math.min(st,e.length),s=e.length-n,i=[];for(let r=0;r<n;++r)i.push(B(e[r],t));return s===1?i.push("... 1 more item"):s>1&&i.push(`... ${s} more items`),"["+i.join(", ")+"]"}function ut(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const lt=globalThis.process&&!0,ht=lt?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var s;const i=n.prototype[Symbol.toStringTag],r=Symbol.toStringTag in t?t[Symbol.toStringTag]:(s=t.constructor)===null||s===void 0?void 0:s.name;if(i===r){const a=ee(t);throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class De{constructor(t,n="GraphQL request",s={line:1,column:1}){typeof t=="string"||q(!1,`Body must be a string. Received: ${ee(t)}.`),this.body=t,this.name=n,this.locationOffset=s,this.locationOffset.line>0||q(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||q(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function pt(e){return ht(e,De)}function dt(e,t){const n=new ft(e,t),s=n.parseDocument();return Object.defineProperty(s,"tokenCount",{enumerable:!1,value:n.tokenCount}),s}class ft{constructor(t,n={}){const s=pt(t)?t:new De(t);this._lexer=new Je(s),this._options=n,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(o.NAME);return this.node(t,{kind:l.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:l.DOCUMENT,definitions:this.many(o.SOF,this.parseDefinition,o.EOF)})}parseDefinition(){if(this.peek(o.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===o.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw g(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(o.BRACE_L))return this.node(t,{kind:l.OPERATION_DEFINITION,operation:b.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let s;return this.peek(o.NAME)&&(s=this.parseName()),this.node(t,{kind:l.OPERATION_DEFINITION,operation:n,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(o.NAME);switch(t.value){case"query":return b.QUERY;case"mutation":return b.MUTATION;case"subscription":return b.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(o.PAREN_L,this.parseVariableDefinition,o.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:l.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(o.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(o.DOLLAR),this.node(t,{kind:l.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:l.SELECTION_SET,selections:this.many(o.BRACE_L,this.parseSelection,o.BRACE_R)})}parseSelection(){return this.peek(o.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let s,i;return this.expectOptionalToken(o.COLON)?(s=n,i=this.parseName()):i=n,this.node(t,{kind:l.FIELD,alias:s,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(o.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(o.PAREN_L,n,o.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,s=this.parseName();return this.expectToken(o.COLON),this.node(n,{kind:l.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(o.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(o.NAME)?this.node(t,{kind:l.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:l.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:l.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:l.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case o.BRACKET_L:return this.parseList(t);case o.BRACE_L:return this.parseObject(t);case o.INT:return this.advanceLexer(),this.node(n,{kind:l.INT,value:n.value});case o.FLOAT:return this.advanceLexer(),this.node(n,{kind:l.FLOAT,value:n.value});case o.STRING:case o.BLOCK_STRING:return this.parseStringLiteral();case o.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:l.BOOLEAN,value:!0});case"false":return this.node(n,{kind:l.BOOLEAN,value:!1});case"null":return this.node(n,{kind:l.NULL});default:return this.node(n,{kind:l.ENUM,value:n.value})}case o.DOLLAR:if(t)if(this.expectToken(o.DOLLAR),this._lexer.token.kind===o.NAME){const s=this._lexer.token.value;throw g(this._lexer.source,n.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:l.STRING,value:t.value,block:t.kind===o.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:l.LIST,values:this.any(o.BRACKET_L,n,o.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:l.OBJECT,fields:this.any(o.BRACE_L,n,o.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,s=this.parseName();return this.expectToken(o.COLON),this.node(n,{kind:l.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(o.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(o.AT),this.node(n,{kind:l.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(o.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(o.BRACKET_R),n=this.node(t,{kind:l.LIST_TYPE,type:s})}else n=this.parseNamedType();return this.expectOptionalToken(o.BANG)?this.node(t,{kind:l.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:l.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(o.STRING)||this.peek(o.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),i=this.many(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);return this.node(t,{kind:l.SCHEMA_DEFINITION,description:n,directives:s,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(o.COLON);const s=this.parseNamedType();return this.node(t,{kind:l.OPERATION_TYPE_DEFINITION,operation:n,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:l.SCALAR_TYPE_DEFINITION,description:n,name:s,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:l.OBJECT_TYPE_DEFINITION,description:n,name:s,interfaces:i,directives:r,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(o.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseFieldDefinition,o.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseName(),i=this.parseArgumentDefs();this.expectToken(o.COLON);const r=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(t,{kind:l.FIELD_DEFINITION,description:n,name:s,arguments:i,type:r,directives:a})}parseArgumentDefs(){return this.optionalMany(o.PAREN_L,this.parseInputValueDef,o.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseName();this.expectToken(o.COLON);const i=this.parseTypeReference();let r;this.expectOptionalToken(o.EQUALS)&&(r=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(t,{kind:l.INPUT_VALUE_DEFINITION,description:n,name:s,type:i,defaultValue:r,directives:a})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:l.INTERFACE_TYPE_DEFINITION,description:n,name:s,interfaces:i,directives:r,fields:a})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(t,{kind:l.UNION_TYPE_DEFINITION,description:n,name:s,directives:i,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(o.EQUALS)?this.delimitedMany(o.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(t,{kind:l.ENUM_TYPE_DEFINITION,description:n,name:s,directives:i,values:r})}parseEnumValuesDefinition(){return this.optionalMany(o.BRACE_L,this.parseEnumValueDefinition,o.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:l.ENUM_VALUE_DEFINITION,description:n,name:s,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw g(this._lexer.source,this._lexer.token.start,`${F(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(t,{kind:l.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:s,directives:i,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseInputValueDef,o.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===o.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),s=this.optionalMany(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);if(n.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:l.SCHEMA_EXTENSION,directives:n,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:l.SCALAR_TYPE_EXTENSION,name:n,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),s=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(s.length===0&&i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:l.OBJECT_TYPE_EXTENSION,name:n,interfaces:s,directives:i,fields:r})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),s=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(s.length===0&&i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:l.INTERFACE_TYPE_EXTENSION,name:n,interfaces:s,directives:i,fields:r})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),s=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(s.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.UNION_TYPE_EXTENSION,name:n,directives:s,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),s=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(s.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.ENUM_TYPE_EXTENSION,name:n,directives:s,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),s=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(s.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:s,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(o.AT);const s=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(t,{kind:l.DIRECTIVE_DEFINITION,description:n,name:s,arguments:i,repeatable:r,locations:a})}parseDirectiveLocations(){return this.delimitedMany(o.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(z,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Ve(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw g(this._lexer.source,n.start,`Expected ${Se(t)}, found ${F(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===o.NAME&&n.value===t)this.advanceLexer();else throw g(this._lexer.source,n.start,`Expected "${t}", found ${F(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===o.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return g(this._lexer.source,n.start,`Unexpected ${F(n)}.`)}any(t,n,s){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(s);)i.push(n.call(this));return i}optionalMany(t,n,s){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(s));return i}return[]}many(t,n,s){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(s));return i}delimitedMany(t,n){this.expectOptionalToken(t);const s=[];do s.push(n.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==o.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw g(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function F(e){const t=e.value;return Se(e.kind)+(t!=null?` "${t}"`:"")}function Se(e){return ze(e)?`"${e}"`:e}function mt(e){return`"${e.replace(Et,Nt)}"`}const Et=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Nt(e){return yt[e.charCodeAt(0)]}const yt=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Tt=Object.freeze({});function gt(e,t,n=xe){const s=new Map;for(const v of Object.values(l))s.set(v,xt(t,v));let i,r=Array.isArray(e),a=[e],h=-1,p=[],u=e,d,E;const f=[],I=[];do{h++;const v=h===a.length,ne=v&&p.length!==0;if(v){if(d=I.length===0?void 0:f[f.length-1],u=E,E=I.pop(),ne)if(r){u=u.slice();let D=0;for(const[j,ie]of p){const se=j-D;ie===null?(u.splice(se,1),D++):u[se]=ie}}else{u={...u};for(const[D,j]of p)u[D]=j}h=i.index,a=i.keys,p=i.edits,r=i.inArray,i=i.prev}else if(E){if(d=r?h:a[h],u=E[d],u==null)continue;f.push(d)}let A;if(!Array.isArray(u)){var N,y;ue(u)||q(!1,`Invalid AST Node: ${ee(u)}.`);const D=v?(N=s.get(u.kind))===null||N===void 0?void 0:N.leave:(y=s.get(u.kind))===null||y===void 0?void 0:y.enter;if(A=D?.call(t,u,d,E,f,I),A===Tt)break;if(A===!1){if(!v){f.pop();continue}}else if(A!==void 0&&(p.push([d,A]),!v))if(ue(A))u=A;else{f.pop();continue}}if(A===void 0&&ne&&p.push([d,u]),v)f.pop();else{var V;i={inArray:r,index:h,keys:a,edits:p,prev:i},r=Array.isArray(u),a=r?u:(V=n[u.kind])!==null&&V!==void 0?V:[],h=-1,p=[],E&&I.push(E),E=u}}while(i!==void 0);return p.length!==0?p[p.length-1][1]:e}function xt(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function It(e){return gt(e,Ot)}const _t=80,Ot={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>c(e.definitions,`

`)},OperationDefinition:{leave(e){const t=m("(",c(e.variableDefinitions,", "),")"),n=c([e.operation,c([e.name,t]),c(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:s})=>e+": "+t+m(" = ",n)+m(" ",c(s," "))},SelectionSet:{leave:({selections:e})=>_(e)},Field:{leave({alias:e,name:t,arguments:n,directives:s,selectionSet:i}){const r=m("",e,": ")+t;let a=r+m("(",c(n,", "),")");return a.length>_t&&(a=r+m(`(
`,M(c(n,`
`)),`
)`)),c([a,c(s," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+m(" ",c(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>c(["...",m("on ",e),c(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:s,selectionSet:i})=>`fragment ${e}${m("(",c(n,", "),")")} on ${t} ${m("",c(s," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?He(e):mt(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+c(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+c(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+m("(",c(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>m("",e,`
`)+c(["schema",c(t," "),_(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>m("",e,`
`)+c(["scalar",t,c(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:s,fields:i})=>m("",e,`
`)+c(["type",t,m("implements ",c(n," & ")),c(s," "),_(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:s,directives:i})=>m("",e,`
`)+t+(he(n)?m(`(
`,M(c(n,`
`)),`
)`):m("(",c(n,", "),")"))+": "+s+m(" ",c(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:s,directives:i})=>m("",e,`
`)+c([t+": "+n,m("= ",s),c(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:s,fields:i})=>m("",e,`
`)+c(["interface",t,m("implements ",c(n," & ")),c(s," "),_(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:s})=>m("",e,`
`)+c(["union",t,c(n," "),m("= ",c(s," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:s})=>m("",e,`
`)+c(["enum",t,c(n," "),_(s)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>m("",e,`
`)+c([t,c(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:s})=>m("",e,`
`)+c(["input",t,c(n," "),_(s)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:s,locations:i})=>m("",e,`
`)+"directive @"+t+(he(n)?m(`(
`,M(c(n,`
`)),`
)`):m("(",c(n,", "),")"))+(s?" repeatable":"")+" on "+c(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>c(["extend schema",c(e," "),_(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>c(["extend scalar",e,c(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:s})=>c(["extend type",e,m("implements ",c(t," & ")),c(n," "),_(s)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:s})=>c(["extend interface",e,m("implements ",c(t," & ")),c(n," "),_(s)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>c(["extend union",e,c(t," "),m("= ",c(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>c(["extend enum",e,c(t," "),_(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>c(["extend input",e,c(t," "),_(n)]," ")}};function c(e,t=""){var n;return(n=e?.filter(s=>s).join(t))!==null&&n!==void 0?n:""}function _(e){return m(`{
`,M(c(e,`
`)),`
}`)}function m(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function M(e){return m("  ",e.replace(/\n/g,`
  `))}function he(e){var t;return(t=e?.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}const pe="Accept",X="Content-Type",W="application/json",Ce="application/graphql-response+json",de=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),vt=e=>{const t=e.toLowerCase();return t.includes(Ce)||t.includes(W)},fe=e=>{try{if(Array.isArray(e))return{_tag:"Batch",executionResults:e.map(me)};if(P(e))return{_tag:"Single",executionResult:me(e)};throw new Error(`Invalid execution result: result is not object or array. 
Got:
${String(e)}`)}catch(t){return t}},me=e=>{if(typeof e!="object"||e===null)throw new Error("Invalid execution result: result is not object");let t,n,s;if("errors"in e){if(!P(e.errors)&&!Array.isArray(e.errors))throw new Error("Invalid execution result: errors is not plain object OR array");t=e.errors}if("data"in e){if(!P(e.data)&&e.data!==null)throw new Error("Invalid execution result: data is not plain object");n=e.data}if("extensions"in e){if(!P(e.extensions))throw new Error("Invalid execution result: extensions is not plain object");s=e.extensions}return{data:n,errors:t,extensions:s}},At=e=>e._tag==="Batch"?e.executionResults.some(Ee):Ee(e.executionResult),Ee=e=>Array.isArray(e.errors)?e.errors.length>0:!!e.errors,be=e=>typeof e=="object"&&e!==null&&"kind"in e&&e.kind===l.OPERATION_DEFINITION,Dt=e=>{let t;const n=e.definitions.filter(be);return n.length===1&&(t=n[0].name?.value),t},St=e=>{let t=!1;const n=e.definitions.filter(be);return n.length===1&&(t=n[0].operation==="mutation"),t},Y=(e,t)=>{const n=typeof e=="string"?e:It(e);let s=!1,i;if(t)return{expression:n,isMutation:s,operationName:i};const r=we(()=>typeof e=="string"?dt(e):e);return r instanceof Error?{expression:n,isMutation:s,operationName:i}:(i=Dt(r),s=St(r),{expression:n,operationName:i,isMutation:s})},te=JSON,H=async e=>{const t={...e,method:e.request._tag==="Single"?e.request.document.isMutation?"POST":re(e.method??"post"):e.request.hasMutations?"POST":re(e.method??"post"),fetchOptions:{...e.fetchOptions,errorPolicy:e.fetchOptions.errorPolicy??"none"}},s=await bt(t.method)(t);if(!s.ok)return new k({status:s.status,headers:s.headers},{query:e.request._tag==="Single"?e.request.document.expression:e.request.query,variables:e.request.variables});const i=await Ct(s,e.fetchOptions.jsonSerializer??te);if(i instanceof Error)throw i;const r={status:s.status,headers:s.headers};if(At(i)&&t.fetchOptions.errorPolicy==="none"){const a=i._tag==="Batch"?{...i.executionResults,...r}:{...i.executionResult,...r};return new k(a,{query:e.request._tag==="Single"?e.request.document.expression:e.request.query,variables:e.request.variables})}switch(i._tag){case"Single":return{...r,...Ne(t)(i.executionResult)};case"Batch":return{...r,data:i.executionResults.map(Ne(t))};default:Z(i)}},Ne=e=>t=>({extensions:t.extensions,data:t.data,errors:e.fetchOptions.errorPolicy==="all"?t.errors:void 0}),Ct=async(e,t)=>{const n=e.headers.get(X),s=await e.text();return n&&vt(n)?fe(t.parse(s)):fe(s)},bt=e=>async t=>{const n=new Headers(t.headers);let s=null,i;n.has(pe)||n.set(pe,[Ce,W].join(", ")),e==="POST"?(i=(t.fetchOptions.jsonSerializer??te).stringify(kt(t)),typeof i=="string"&&!n.has(X)&&n.set(X,W)):s=wt(t);const r={method:e,headers:n,body:i,...t.fetchOptions};let a=new URL(t.url),h=r;if(t.middleware){const u=await Promise.resolve(t.middleware({...r,url:t.url,operationName:t.request._tag==="Single"?t.request.document.operationName:void 0,variables:t.request.variables})),{url:d,...E}=u;a=new URL(d),h=E}return s&&s.forEach((u,d)=>{a.searchParams.append(d,u)}),await(t.fetch??fetch)(a,h)},kt=e=>{switch(e.request._tag){case"Single":return{query:e.request.document.expression,variables:e.request.variables,operationName:e.request.document.operationName};case"Batch":return ye(e.request.query,e.request.variables??[]).map(([t,n])=>({query:t,variables:n}));default:throw Z(e.request)}},wt=e=>{const t=e.fetchOptions.jsonSerializer??te,n=new URLSearchParams;switch(e.request._tag){case"Single":return n.append("query",de(e.request.document.expression)),e.request.variables&&n.append("variables",t.stringify(e.request.variables)),e.request.document.operationName&&n.append("operationName",e.request.document.operationName),n;case"Batch":{const s=e.request.variables?.map(a=>t.stringify(a))??[],i=e.request.query.map(de),r=ye(i,s).map(([a,h])=>({query:a,variables:h}));return n.append("query",t.stringify(r)),n}default:throw Z(e.request)}};class Rt{url;requestConfig;constructor(t,n={}){this.url=t,this.requestConfig=n}rawRequest=async(...t)=>{const[n,s,i]=t,r=Fe(n,s,i),{headers:a,fetch:h=globalThis.fetch,method:p="POST",requestMiddleware:u,responseMiddleware:d,excludeOperationName:E,...f}=this.requestConfig,{url:I}=this;r.signal!==void 0&&(f.signal=r.signal);const N=Y(r.query,E),y=await H({url:I,request:{_tag:"Single",document:N,variables:r.variables},headers:{...C($(a)),...C(r.requestHeaders)},fetch:h,method:p,fetchOptions:f,middleware:u});if(d&&await d(y,{operationName:N.operationName,variables:s,url:this.url}),y instanceof Error)throw y;return y};async request(t,...n){const[s,i]=n,r=Lt(t,s,i),{headers:a,fetch:h=globalThis.fetch,method:p="POST",requestMiddleware:u,responseMiddleware:d,excludeOperationName:E,...f}=this.requestConfig,{url:I}=this;r.signal!==void 0&&(f.signal=r.signal);const N=Y(r.document,E),y=await H({url:I,request:{_tag:"Single",document:N,variables:r.variables},headers:{...C($(a)),...C(r.requestHeaders)},fetch:h,method:p,fetchOptions:f,middleware:u});if(d&&await d(y,{operationName:N.operationName,variables:r.variables,url:this.url}),y instanceof Error)throw y;return y.data}async batchRequests(t,n){const s=Le(t,n),{headers:i,excludeOperationName:r,...a}=this.requestConfig;s.signal!==void 0&&(a.signal=s.signal);const h=s.documents.map(({document:f})=>Y(f,r)),p=h.map(({expression:f})=>f),u=h.some(({isMutation:f})=>f),d=s.documents.map(({variables:f})=>f),E=await H({url:this.url,request:{_tag:"Batch",operationName:void 0,query:p,hasMutations:u,variables:d},headers:{...C($(i)),...C(s.requestHeaders)},fetch:this.requestConfig.fetch??globalThis.fetch,method:this.requestConfig.method||"POST",fetchOptions:a,middleware:this.requestConfig.requestMiddleware});if(this.requestConfig.responseMiddleware&&await this.requestConfig.responseMiddleware(E,{operationName:void 0,variables:d,url:this.url}),E instanceof Error)throw E;return E.data}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,n){const{headers:s}=this.requestConfig;return s?s[t]=n:this.requestConfig.headers={[t]:n},this}setEndpoint(t){return this.url=t,this}}const Lt=(e,t,n)=>e.document?e:{document:e,variables:t,requestHeaders:n,signal:void 0},x=(e,...t)=>e.reduce((n,s,i)=>`${n}${s}${i in t?String(t[i]):""}`,""),O={introduction:x`
    query {
      introduction {
        title
        description
      }
    }
  `,introSplash:x`
    query GetIntroSplash {
      intro_splash {
        title
        description
        learn_more_link
        demo_image {
          id
        }
        featured_items {
          id
          image {
            id
          }
          type
          image_description
          column_title
          column_words {
            word
            url
          }
        }
      }
    }
  `,whyNetLogo:x`
    query GetWhyNetLogo {
      why_netlogo {
        id
        title
        content
        icon
        order
      }
    }
  `,getNetLogo:x`
    query GetGetNetLogo {
      get_netlogo {
        id
        title
        content
        icon
        link
        order
      }
    }
  `,community:x`
    query GetCommunity {
      community {
        id
        Title
        Description
        Icon
        Link
        order
        Bordered
      }
    }
  `,partners:x`
    query GetPartners {
      featured_partners {
        id
        partner_name
        partner_image
      }
    }
  `,contacts:x`
  query getContacts {
    contact_data {
      heading
      body
    }
  }
  `,mainAnnouncements:x`
  query getAnnouncements {
    announcements (sort: ["-date"]){
      title
      date
      content
    }
  }
`,referenceData:x`
  query getReferences {
    References(limit: -1) {
      year
      reference
      is_ccl
    }
  }
`,navigationData:x`
    query GetNavigation {
      navigation_sections {
        name
        items {
          display_title
          url
          in_footer
        }
      }
    }
  `,aboutContent:x`
  query getAbout {
    about {
      body
    }
  }
  `,netLogoVersions:x`
    query GetNetLogoVersions {
      netlogo_versions {
        version
        download_links {
          platform
          download_url
        }
      }
    }
  `,resourcesData:x`
    query GetResources {
      resources {
        section_title
        section_content
      }
    }
  `,mainPageData:x`
    query GetAllData {
      introduction {
        title
        description
      }
      intro_splash {
        title

        description
        learn_more_link
        featured_items {
          id
          type
          image {
            id
          }
          image_description
          word_column_title
          column_words {
            word
            url
          }
          image_column_title
          column_images {
            image {
              id
            }
            word
          }
        }
      }
      why_netlogo {
        title
        content
        icon {
          id
        }
      }
      get_netlogo {
        title
        content
        icon {
          id
        }
        link
        button_text
      }
      community {
        title
        description
        icon {
          id
        }
        link
      }
      featured_partners {
        partner_name
        partner_image {
          id
        }
      }
    }
  `,downloadPageData:x`
    query GetDownloadPageData {
      netlogo_versions {
        version
        download_links {
          platform
          download_url
          primary
          subplatform
          platform_icon {
            icon {
              id
            }
          }
        }
      }
      donation_data{
        title
        text
        image {
          id
        }
        url
      }
    }
  `,donationData:x`
    query GetDonationData {
      donation_data{
        title
        text
        image {
          id
        }
        url
      }
    }
  `},Ut=()=>{const e=new Date,t=p=>String(p).padStart(2,"0"),n=e.getFullYear(),s=t(e.getMonth()+1),i=t(e.getDate()),r=t(e.getHours()),a=t(e.getMinutes()),h=t(e.getSeconds());return`${n}-${s}-${i} ${r}:${a}:${h}`};class Bt{baseUrl;client;constructor(t="https://backend.netlogo.org"){this.baseUrl=t,this.client=new Rt(this.baseUrl+"/graphql")}async fetchData(t){try{const n=`${this.baseUrl}${t}`,s=await fetch(n);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return(await s.json()).data}catch(n){throw console.error(`Error fetching ${t}:`,n),n}}async graphqlFetchData(t){try{return await this.client.request(t)}catch(n){throw console.error("GraphQL query error:",n),n}}async getMainPageData(){return await this.graphqlFetchData(O.mainPageData)}async getDownloadPageData(){return await this.graphqlFetchData(O.downloadPageData)}async getDonationData(){return(await this.graphqlFetchData(O.donationData)).donation_data}async getNetLogoVersions(){return await this.graphqlFetchData(O.netLogoVersions)}async getContact(){return(await this.graphqlFetchData(O.contacts)).contact_data}async getAnnouncements(){return(await this.graphqlFetchData(O.mainAnnouncements)).announcements}async getAboutContent(){return(await this.graphqlFetchData(O.aboutContent)).about}async getReferences(){const t=await this.graphqlFetchData(O.referenceData);let n=new Map;return t.References.forEach(i=>{const r=i.year;n.has(r)||n.set(r,[]),n.get(r)?.push({reference:i.reference,is_ccl:i.is_ccl})}),Array.from(n.entries()).map(([i,r])=>({year:i,references:r}))}async getNavigationData(){return await this.graphqlFetchData(O.navigationData)}async getResourcesData(){return(await this.graphqlFetchData(O.resourcesData)).resources}async sendDownloadForm(t){const n=this.baseUrl+"/items/download_responses";return await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async sendMailingForm(t){const n=this.baseUrl+"/items/mailing_subscribers";return await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}export{Bt as N,Ut as g};
