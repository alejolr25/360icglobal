// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus() {
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 300) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click', function (e) {
    console.log(e.target);
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function () {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function () {
    apertura();
});

Vue.config.devtools = true;

Vue.component('card', {
    template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
    mounted() {
        this.width = this.$refs.card.offsetWidth;
        this.height = this.$refs.card.offsetHeight;
    },
    props: ['dataImage'],
    data: () => ({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null
    }),
    computed: {
        mousePX() {
            return this.mouseX / this.width;
        },
        mousePY() {
            return this.mouseY / this.height;
        },
        cardStyle() {
            const rX = this.mousePX * 30;
            const rY = this.mousePY * -30;
            return {
                transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
            };
        },
        cardBgTransform() {
            const tX = this.mousePX * -40;
            const tY = this.mousePY * -40;
            return {
                transform: `translateX(${tX}px) translateY(${tY}px)`
            }
        },
        cardBgImage() {
            return {
                backgroundImage: `url(${this.dataImage})`
            }
        }
    },
    methods: {
        handleMouseMove(e) {
            this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
            this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
        },
        handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(() => {
                this.mouseX = 0;
                this.mouseY = 0;
            }, 1000);
        }
    }
});

const app = new Vue({
    el: '#app'
});