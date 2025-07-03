interface Image {
  src: string;
  url?: string;
  title?: string;
  color?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

interface Camera {
  x: number;
  y: number;
  z: number;
  s: number;
  fov: number;
  tx?: number;
  ty?: number;
  tz?: number;
  d?: number;
  p?: number;
  setTarget?: (c0: number, t1: number, p?: boolean) => void;
  tween?: (v: 'x' | 'y' | 'z') => number;
}

interface DiapoInstance {
  url?: string;
  title?: string;
  color?: string;
  isLoaded: boolean;
  srcImg?: HTMLImageElement;
  img: HTMLImageElement | HTMLCanvasElement | HTMLDivElement;
  canvas: boolean;
  but: HTMLDivElement;
  w: number;
  h: number;
  x: number;
  y: number;
  z: number;
  css: CSSStyleDeclaration;
  zi: number;
  urlActive?: boolean;
  onClick: () => void;
  anim: () => void;
  loading: () => boolean;
}

const diapo: DiapoInstance[] = [];
let animationFrameId: number | null = null;
let scr: HTMLElement;
let bar: HTMLElement;
let urlInfo: HTMLElement;
let selected: DiapoInstance | null = null;
const imagesPath = "/images/gallery/";
const camera: Camera = { x: 0, y: 0, z: -650, s: 0, fov: 500 };
let nw = 0;
let nh = 0;
let isRunning = false;

camera.setTarget = function(c0: number, t1: number, p?: boolean) {
  if (Math.abs(t1 - c0) > 0.1) {
    this.s = 1;
    this.p = 0;
    this.d = t1 - c0;
    if (p) {
      this.d *= 2;
      this.p = 9;
    }
  }
};

camera.tween = function(v: 'x' | 'y' | 'z'): number {
  if (this.s !== 0 && this.p !== undefined && this.d !== undefined) {
    this.p += this.s;
    this[v] += this.d * this.p * 0.01;
    if (this.p === 10) this.s = -1;
    else if (this.p === 0) this.s = 0;
  }
  return this.s;
};

class Diapo implements Omit<DiapoInstance, 'onClick' | 'anim' | 'loading'> {
  url?: string;
  title?: string;
  color?: string;
  isLoaded: boolean;
  srcImg?: HTMLImageElement;
  img: HTMLImageElement | HTMLCanvasElement | HTMLDivElement;
  canvas = false;
  but!: HTMLDivElement;
  w = 0;
  h = 0;
  x: number;
  y: number;
  z: number;
  css: CSSStyleDeclaration;
  zi: number;

  constructor(n: number, img: Image | null, x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.isLoaded = false;

    if (img) {
      this.url = img.url;
      this.title = img.title;
      this.color = img.color;

      const hasCanvasSupport = !!document.createElement("canvas").getContext;
      if (hasCanvasSupport) {
        this.srcImg = new Image();
        this.srcImg.src = imagesPath + img.src;
        const canvas = document.createElement("canvas");
        this.img = canvas;
        this.canvas = true;
        scr.appendChild(canvas);
      } else {
        const imageElement = document.createElement("img");
        imageElement.src = imagesPath + img.src;
        this.img = imageElement;
        scr.appendChild(imageElement);
      }

      this.img.onclick = this.onClick.bind(this);

      this.but = document.createElement("div");
      this.but.className = "button";
      bar.appendChild(this.but);
      this.but.onclick = this.onClick.bind(this);
      this.but.style.left = Math.round(this.but.offsetWidth * 1.2 * (n % 4)) + "px";
      this.but.style.top = Math.round(this.but.offsetHeight * 1.2 * Math.floor(n / 4)) + "px";

      this.zi = 25000;
    } else {
      const divElement = document.createElement("div");
      divElement.className = "fog";
      this.img = divElement;
      this.isLoaded = true;
      scr.appendChild(divElement);
      this.w = 300;
      this.h = 300;
      this.zi = 15000;
    }

    this.css = this.img.style;
  }

  // Add urlActive property to track active state
  urlActive = false;

  onClick = () => {
    if (camera.s) return;
    if (!this.isLoaded) return;
    
    if (this.urlActive && this.url) {
      window.open(this.url, "_blank", "noopener,noreferrer");
    } else {
      camera.tz = this.z - camera.fov;
      camera.tx = this.x;
      camera.ty = this.y;

      if (selected && 'url' in selected && selected.url) {
        selected.but.className = "button viewed";
        selected.but.setAttribute('aria-selected', 'false');
        selected.img.className = "";
        selected.img.style.cursor = "pointer";
        selected.urlActive = false;
        urlInfo.style.visibility = "hidden";
      }

      this.but.className = "button selected";
      this.but.setAttribute('aria-selected', 'true');
      this.but.setAttribute('aria-label', `View ${this.title || 'image'}`);
      interpolation(false);
      this.urlActive = true;
      selected = this;

      if (camera.tx !== undefined) {
        if (!camera.s && camera.setTarget) camera.setTarget(camera.x, camera.tx);
        const m = camera.tween?.("x") || 0;
        if (!m) camera.tx = 0;
      } else if (camera.ty !== undefined) {
        if (!camera.s && camera.setTarget) camera.setTarget(camera.y, camera.ty);
        const m = camera.tween?.("y") || 0;
        if (!m) camera.ty = 0;
      } else if (camera.tz !== undefined) {
        if (!camera.s && camera.setTarget) camera.setTarget(camera.z, camera.tz);
        const m = camera.tween?.("z") || 0;
        if (!m) camera.tz = 0;
      }
    }
  };

  anim() {
    if (this.isLoaded) {
      const x = this.x - camera.x;
      const y = this.y - camera.y;
      let z = this.z - camera.z;
      if (z < 20) z += 5000;
      const p = camera.fov / z;
      const w = this.w * p;
      const h = this.h * p;
      this.css.left = Math.round(nw + x * p - w * 0.5) + "px";
      this.css.top = Math.round(nh + y * p - h * 0.5) + "px";
      this.css.width = Math.round(w) + "px";
      this.css.height = Math.round(h) + "px";
      this.css.zIndex = (this.zi - Math.round(z)).toString();
    } else {
      this.isLoaded = this.loading();
    }
  }

  loading() {
    if (this.img instanceof HTMLImageElement) {
      if (this.img.complete) {
        this.w = this.img.naturalWidth;
        this.h = this.img.naturalHeight;
        this.finishLoading();
        return true;
      }
    } else if (this.canvas && this.img instanceof HTMLCanvasElement && this.srcImg?.complete) {
      this.w = this.srcImg.naturalWidth;
      this.h = this.srcImg.naturalHeight;
      const canvas = this.img;
      canvas.width = this.w;
      canvas.height = this.h;
      const context = canvas.getContext("2d", { alpha: false });
      if (context && this.srcImg) {
        context.drawImage(this.srcImg, 0, 0, this.w, this.h);
      }
      this.finishLoading();
      return true;
    } else if (this.img instanceof HTMLDivElement) {
      // For fog elements
      return true;
    }
    return false;
  }

  private finishLoading() {
    this.but.classList.add("loaded");
    if (!(this.img instanceof HTMLDivElement)) {
      this.img.setAttribute('loading', 'lazy');
      this.img.setAttribute('decoding', 'async');
      if ('alt' in this.img) {
        this.img.alt = this.title || 'Gallery image';
      }
    }
  }
}

const resize = () => {
  nw = scr.offsetWidth * 0.5
  nh = scr.offsetHeight * 0.5
}

const interpolation = (bicubic: boolean) => {
  const o = diapo[0]
  if (o.but) {
    // Use modern image rendering property
    o.css.imageRendering = bicubic ? 'high-quality' : 'pixelated';
    // Fallback for older browsers
    o.css.setProperty('-ms-interpolation-mode', bicubic ? 'bicubic' : 'nearest-neighbor', 'important');
    o.css.imageRendering = bicubic ? "optimizeQuality" : "optimizeSpeed"
  }
}

export const cleanup = () => {
  isRunning = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  // Clear existing diapos
  while (diapo.length) {
    const d = diapo.pop();
    if (d) {
      if (d.img.parentNode) {
        d.img.parentNode.removeChild(d.img);
      }
      if (d.but.parentNode) {
        d.but.parentNode.removeChild(d.but);
      }
    }
  }
  selected = null;
};

export const init = (screen: HTMLElement, barElement: HTMLElement, urlInfoElement: HTMLElement) => {
  // Clean up any existing instance
  cleanup();
  
  isRunning = true;
  scr = screen
  bar = barElement
  urlInfo = urlInfoElement

  resize()

  const data: Image[] = [
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0009.jpg", color: "Saraswati Idol" },
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0010.jpg", color: "Cultural Performance" },
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0011.jpg", color: "Puja Ceremony" },
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0012.jpg", color: "Prasad Distribution" },
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0013.jpg", color: "Prasad Distribution" },
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0014.jpg", color: "Prasad Distribution" },
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0015.jpg", color: "Prasad Distribution" },
    { src: "/images/cimage_saraswati_pics/IMG-20250113-WA0016.jpg", color: "Prasad Distribution" },
    { src: "floral_decoration_2.jpg", title: "More Floral Decorations", color: "#fff" },
    { src: "prasad_offering_2.jpg", title: "More Prasad Offerings", color: "#fff" },
    { src: "devotees_praying_2.jpg", title: "More Devotees Praying", color: "#fff" },
  ]

  const n = data.length

  for (let i = 0; i < n; i++) {
    const x = 1000 * ((i % 4) - 1.5)
    const y = Math.round(Math.random() * 4000) - 2000
    const z = i * (5000 / n)
    diapo.push(new Diapo(i, data[i], x, y, z))
    const k = diapo.length - 1
    for (let j = 0; j < 3; j++) {
      const x = Math.round(Math.random() * 4000) - 2000
      const y = Math.round(Math.random() * 4000) - 2000
      diapo.push(new Diapo(k, null, x, y, z + 100))
    }
  }

  run()
}

const run = () => {
  if (!isRunning) return;
  
  const needsUpdate = 
    (camera.tween?.("x") || 0) || 
    (camera.tween?.("y") || 0) || 
    (camera.tween?.("z") || 0);
  
  if (needsUpdate) {
    // Use transform for better performance
    const transform = `translate3d(0, 0, 0)`;
    document.body.style.transform = transform;
    
    // Process only visible items first
    for (let i = 0; i < Math.min(diapo.length, 10); i++) {
      if (diapo[i]) diapo[i].anim();
    }
    
    // Process remaining items in chunks on idle callback
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(() => {
        for (let i = 10; i < diapo.length; i++) {
          if (diapo[i]) diapo[i].anim();
        }
      }, { timeout: 200 });
    } else {
      // Fallback for browsers without requestIdleCallback
      for (let i = 10; i < diapo.length; i++) {
        if (diapo[i]) diapo[i].anim();
      }
    }
  }
  
  animationFrameId = requestAnimationFrame(run);
};
