import{j as x}from"./jsx-runtime.D_zvdyIk.js";import{r as m}from"./index.BVOCwoKb.js";var I=class{mountToDiv;canvas;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;totalFrameTime=0;speed=0;providedUniforms;hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;maxResolution=0;constructor(t,i,r={},o,s=0,n=0,a=1920){const l=document.createElement("canvas");t.style.contain="strict",t.style.position="relative",l.style.position="absolute",l.style.inset="0",l.style.zIndex="-1",l.style.width="100%",l.style.height="100%",this.canvas=l,this.mountToDiv=t,t.appendChild(l),this.fragmentShader=i,this.providedUniforms=r,this.totalFrameTime=n,this.maxResolution=a;const h=l.getContext("webgl2",o);if(!h)throw new Error("WebGL not supported");this.gl=h,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),this.setSpeed(s),this.canvas.setAttribute("data-paper-shaders","true"),this.mountToDiv.paperShaderMount=this}initProgram=()=>{const t=S(this.gl,w,this.fragmentShader);t&&(this.program=t)};setupPositionAttribute=()=>{const t=this.gl.getAttribLocation(this.program,"a_position"),i=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(t),this.gl.vertexAttribPointer(t,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{const t={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([i,r])=>{if(t[i]=this.gl.getUniformLocation(this.program,i),r instanceof HTMLImageElement){const o=`${i}_aspect_ratio`;t[o]=this.gl.getUniformLocation(this.program,o)}}),this.uniformLocations=t};resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.mountToDiv),this.handleResize()};renderScale=1;handleResize=()=>{const t=this.mountToDiv.clientWidth,i=this.mountToDiv.clientHeight,r=this.maxResolution,o=Math.max(2,window.devicePixelRatio);this.renderScale=Math.min(1,r/Math.max(t,i))*o;let s=t*this.renderScale,n=i*this.renderScale;(this.canvas.width!==s||this.canvas.height!==n)&&(this.canvas.width=s,this.canvas.height=n,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=t=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const i=t-this.lastRenderTime;this.lastRenderTime=t,this.speed!==0&&(this.totalFrameTime+=i*this.speed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.totalFrameTime*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.speed!==0?this.requestRender():this.rafId=null};requestRender=()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(t,i)=>{if(!i.complete||i.naturalWidth===0)throw new Error(`Image for uniform ${t} must be fully loaded`);const r=this.textures.get(t);r&&this.gl.deleteTexture(r);const o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,i);const s=this.gl.getError();if(s!==this.gl.NO_ERROR||o===null){console.error("WebGL error when uploading texture:",s);return}this.textures.set(t,o);const n=this.uniformLocations[t];if(n){const a=this.textures.size-1;this.gl.useProgram(this.program),this.gl.activeTexture(this.gl.TEXTURE0+a),this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.uniform1i(n,a);const l=`${t}_aspect_ratio`,h=this.uniformLocations[l];if(h){const u=i.naturalWidth/i.naturalHeight;this.gl.uniform1f(h,u)}}};setUniformValues=t=>{this.gl.useProgram(this.program),Object.entries(t).forEach(([i,r])=>{const o=this.uniformLocations[i];if(!o){console.warn(`Uniform location for ${i} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(i,r);else if(Array.isArray(r))switch(r.length){case 2:this.gl.uniform2fv(o,r);break;case 3:this.gl.uniform3fv(o,r);break;case 4:this.gl.uniform4fv(o,r);break;default:r.length===9?this.gl.uniformMatrix3fv(o,!1,r):r.length===16?this.gl.uniformMatrix4fv(o,!1,r):console.warn(`Unsupported uniform array length: ${r.length}`)}else typeof r=="number"?this.gl.uniform1f(o,r):typeof r=="boolean"?this.gl.uniform1i(o,r?1:0):console.warn(`Unsupported uniform type for ${i}: ${typeof r}`)})};getCurrentFrameTime=()=>this.totalFrameTime;setFrame=t=>{this.totalFrameTime=t,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(t=1)=>{this.speed=t,this.rafId===null&&t!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&t===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setUniforms=t=>{this.providedUniforms={...this.providedUniforms,...t},this.setUniformValues(t),this.render(performance.now())};dispose=()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(t=>{this.gl.deleteTexture(t)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this.uniformLocations={},this.mountToDiv.paperShaderMount=void 0}},w=`#version 300 es
layout(location = 0) in vec4 a_position;

void main() {
  gl_Position = a_position;
}
`;function E(e,t,i){const r=e.createShader(t);return r?(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function S(e,t,i){const r=E(e,e.VERTEX_SHADER,t),o=E(e,e.FRAGMENT_SHADER,i);if(!r||!o)return null;const s=e.createProgram();return s?(e.attachShader(s,r),e.attachShader(s,o),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)?(e.detachShader(s,r),e.detachShader(s,o),e.deleteShader(r),e.deleteShader(o),s):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(r),e.deleteShader(o),null)):null}var A={Checks:0},y=`#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;


out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  // Smoothstep for interpolation
  vec2 u = f * f * (3.0 - 2.0 * f);

  // Do the interpolation as two nested mix operations
  // If you try to do this in one big operation, there's enough precision loss to be off by 1px at cell boundaries
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);

}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv_original = uv;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= iterations_number; i++) {
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`;function v(e,t=[0,0,0,1]){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:v(t);if(typeof e!="string")return v(t);let i,r,o,s=1;if(e.startsWith("#"))[i,r,o,s]=F(e);else if(e.startsWith("rgb"))[i,r,o,s]=L(e);else if(e.startsWith("hsl"))[i,r,o,s]=M(P(e));else return console.error("Unsupported color format",e),v(t);return[R(i,0,1),R(r,0,1),R(o,0,1),R(s,0,1)]}function F(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(s=>s+s).join("")),e.length===6&&(e=e+"ff");const t=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,o=parseInt(e.slice(6,8),16)/255;return[t,i,r,o]}function L(e){const t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function P(e){const t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function M(e){const[t,i,r,o]=e,s=t/360,n=i/100,a=r/100;let l,h,u;if(i===0)l=h=u=a;else{const d=(p,b,g)=>(g<0&&(g+=1),g>1&&(g-=1),g<.16666666666666666?p+(b-p)*6*g:g<.5?b:g<.6666666666666666?p+(b-p)*(.6666666666666666-g)*6:p),c=a<.5?a*(1+n):a+n-a*n,_=2*a-c;l=d(_,c,s+1/3),h=d(_,c,s),u=d(_,c,s-1/3)}return[l,h,u,o]}var R=(e,t,i)=>Math.min(Math.max(e,t),i);function D(e){const t=m.useRef(void 0),i=m.useCallback(r=>{const o=e.map(s=>{if(s!=null){if(typeof s=="function"){const n=s,a=n(r);return typeof a=="function"?a:()=>{n(null)}}return s.current=r,()=>{s.current=null}}});return()=>{o.forEach(s=>s?.())}},e);return m.useMemo(()=>e.every(r=>r==null)?null:r=>{t.current&&(t.current(),t.current=void 0),r!=null&&(t.current=i(r))},e)}var T=e=>{const t={},i=[],r=s=>{try{return s.startsWith("/")||new URL(s),!0}catch{return!1}},o=s=>{try{return s.startsWith("/")?!1:new URL(s,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(e).forEach(([s,n])=>{if(typeof n=="string"){if(!r(n)){console.warn(`Uniform "${s}" has invalid URL "${n}". Skipping image loading.`);return}const a=new Promise((l,h)=>{const u=new Image;o(n)&&(u.crossOrigin="anonymous"),u.onload=()=>{t[s]=u,l()},u.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${n}`),h()},u.src=n});i.push(a)}else t[s]=n}),Promise.all(i).then(()=>t)},U=m.forwardRef(function({shaderMountRef:t,fragmentShader:i,uniforms:r={},webGlContextAttributes:o,speed:s=1,frame:n=0,...a},l){const[h,u]=m.useState(!1),d=m.useRef(null),c=m.useRef(null);return m.useEffect(()=>((async()=>{const p=await T(r);d.current&&!c.current&&(c.current=new I(d.current,i,p,o,s,n),t&&(t.current=c.current),u(!0))})(),()=>{c.current?.dispose(),c.current=null}),[i,o]),m.useEffect(()=>{(async()=>{const p=await T(r);c.current?.setUniforms(p)})()},[r,h]),m.useEffect(()=>{c.current?.setSpeed(s)},[s,h]),m.useEffect(()=>{c.current?.setFrame(n)},[n,h]),x.jsx("div",{ref:D([d,l]),...a})});U.displayName="ShaderMount";var f={params:{scale:1,rotation:0,color1:"hsla(0, 0%, 15%, 1)",color2:"hsla(203, 80%, 70%, 1)",proportion:.35,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.1,shape:A.Checks}},O=({scale:e,rotation:t,color1:i,color2:r,color3:o,proportion:s,softness:n,distortion:a,swirl:l,swirlIterations:h,shapeScale:u,shape:d,...c})=>{const _=m.useMemo(()=>({u_scale:e??f.params.scale,u_rotation:t??f.params.rotation,u_color1:v(i,f.params.color1),u_color2:v(r,f.params.color2),u_color3:v(o,f.params.color2),u_proportion:s??f.params.proportion,u_softness:n??f.params.softness,u_distortion:a??f.params.distortion,u_swirl:l??f.params.swirl,u_swirlIterations:h??f.params.swirlIterations,u_shapeScale:u??f.params.shapeScale,u_shape:d??f.params.shape}),[e,t,i,r,o,s,n,a,l,h,u,d]);return x.jsx(U,{...c,fragmentShader:y,uniforms:_})};function z(e){const t={speed:.4,rotation:.5,style:{width:"100%",height:"100%"}};return x.jsx(O,{...t,...e,style:{...t.style,...e.style}})}export{z as default};
