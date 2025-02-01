interface Image {
  src: string
  url?: string
  title?: string
  color?: string
}

const diapo: any[] = []
let imb: HTMLImageElement
let scr: HTMLElement
let bar: HTMLElement
let urlInfo: HTMLElement
let selected: any
const imagesPath = "/images/gallery/"
const camera = { x: 0, y: 0, z: -650, s: 0, fov: 500 }
let nw = 0
let nh = 0

camera.setTarget = (c0: number, t1: number, p?: boolean) => {
  if (Math.abs(t1 - c0) > 0.1) {
    camera.s = 1
    camera.p = 0
    camera.d = t1 - c0
    if (p) {
      camera.d *= 2
      camera.p = 9
    }
  }
}

camera.tween = (v: "x" | "y" | "z") => {
  if (camera.s != 0) {
    camera.p += camera.s
    camera[v] += camera.d * camera.p * 0.01
    if (camera.p == 10) camera.s = -1
    else if (camera.p == 0) camera.s = 0
  }
  return camera.s
}

class Diapo {
  url?: string
  title?: string
  color?: string
  isLoaded: boolean
  srcImg?: HTMLImageElement
  img: HTMLImageElement | HTMLCanvasElement
  canvas: boolean
  but: HTMLDivElement
  w: number
  h: number
  x: number
  y: number
  z: number
  css: CSSStyleDeclaration
  zi: number

  constructor(n: number, img: Image | null, x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
    this.isLoaded = false

    if (img) {
      this.url = img.url
      this.title = img.title
      this.color = img.color

      if (document.createElement("canvas").getContext) {
        this.srcImg = new Image()
        this.srcImg.src = imagesPath + img.src
        this.img = document.createElement("canvas")
        this.canvas = true
        scr.appendChild(this.img)
      } else {
        this.img = document.createElement("img")
        this.img.src = imagesPath + img.src
        scr.appendChild(this.img)
      }

      this.img.onclick = this.onClick.bind(this)

      this.but = document.createElement("div")
      this.but.className = "button"
      bar.appendChild(this.but)
      this.but.onclick = this.onClick.bind(this)
      this.but.style.left = Math.round(this.but.offsetWidth * 1.2 * (n % 4)) + "px"
      this.but.style.top = Math.round(this.but.offsetHeight * 1.2 * Math.floor(n / 4)) + "px"

      imb = this.img as HTMLImageElement
      this.zi = 25000
    } else {
      this.img = document.createElement("div")
      this.isLoaded = true
      this.img.className = "fog"
      scr.appendChild(this.img)
      this.w = 300
      this.h = 300
      this.zi = 15000
    }

    this.css = this.img.style
  }

  onClick() {
    if (camera.s) return
    if (this.isLoaded) {
      if ((this as any).urlActive) {
        window.open(this.url, "_blank")
      } else {
        camera.tz = this.z - camera.fov
        camera.tx = this.x
        camera.ty = this.y
        if (selected) {
          selected.but.className = "button viewed"
          selected.img.className = ""
          selected.img.style.cursor = "pointer"
          ;(selected as any).urlActive = false
          urlInfo.style.visibility = "hidden"
        }
        this.but.className = "button selected"
        interpolation(false)
        selected = this
      }
    }
  }

  anim() {
    if (this.isLoaded) {
      const x = this.x - camera.x
      const y = this.y - camera.y
      let z = this.z - camera.z
      if (z < 20) z += 5000
      const p = camera.fov / z
      const w = this.w * p
      const h = this.h * p
      this.css.left = Math.round(nw + x * p - w * 0.5) + "px"
      this.css.top = Math.round(nh + y * p - h * 0.5) + "px"
      this.css.width = Math.round(w) + "px"
      this.css.height = Math.round(h) + "px"
      this.css.zIndex = (this.zi - Math.round(z)).toString()
    } else {
      this.isLoaded = this.loading()
    }
  }

  loading() {
    if ((this.canvas && this.srcImg!.complete) || (this.img as HTMLImageElement).complete) {
      if (this.canvas) {
        this.w = this.srcImg!.width
        this.h = this.srcImg!.height
        ;(this.img as HTMLCanvasElement).width = this.w
        ;(this.img as HTMLCanvasElement).height = this.h
        const context = (this.img as HTMLCanvasElement).getContext("2d")
        context!.drawImage(this.srcImg!, 0, 0, this.w, this.h)
      } else {
        this.w = (this.img as HTMLImageElement).width
        this.h = (this.img as HTMLImageElement).height
      }
      this.but.className += " loaded"
      return true
    }
    return false
  }
}

const resize = () => {
  nw = scr.offsetWidth * 0.5
  nh = scr.offsetHeight * 0.5
}

const interpolation = (bicubic: boolean) => {
  const o = diapo[0]
  if (o.but) {
    o.css.msInterpolationMode = bicubic ? "bicubic" : "nearest-neighbor"
    o.css.imageRendering = bicubic ? "optimizeQuality" : "optimizeSpeed"
  }
}

export const init = (screen: HTMLElement, barElement: HTMLElement, urlInfoElement: HTMLElement) => {
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
  if (camera.tx) {
    if (!camera.s) camera.setTarget(camera.x, camera.tx)
    const m = camera.tween("x")
    if (!m) camera.tx = 0
  } else if (camera.ty) {
    if (!camera.s) camera.setTarget(camera.y, camera.ty)
    const m = camera.tween("y")
    if (!m) camera.ty = 0
  } else if (camera.tz) {
    if (!camera.s) camera.setTarget(camera.z, camera.tz)
    const m = camera.tween("z")
    if (!m) {
      camera.tz = 0
      interpolation(true)
      if (selected.url) {
        selected.img.style.cursor = "pointer"
        ;(selected as any).urlActive = true
        selected.img.className = "href"
        ;(urlInfo as any).diapo = selected
        urlInfo.onclick = selected.img.onclick
        urlInfo.innerHTML = selected.title || selected.url
        urlInfo.style.visibility = "visible"
        urlInfo.style.color = selected.color || "#fff"
        urlInfo.style.top =
          Math.round(selected.img.offsetTop + selected.img.offsetHeight - urlInfo.offsetHeight - 5) + "px"
        urlInfo.style.left =
          Math.round(selected.img.offsetLeft + selected.img.offsetWidth - urlInfo.offsetWidth - 5) + "px"
      } else {
        selected.img.style.cursor = "default"
      }
    }
  }

  for (const o of diapo) {
    o.anim()
  }

  requestAnimationFrame(run)
}

