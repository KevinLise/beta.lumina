/* ═══════════════════════════════════════════════════════════════
   LUMIERA · Catálogo interactivo + carrito + WhatsApp
   ───────────────────────────────────────────────────────────────
   📞 NÚMERO DE WHATSAPP DEL NEGOCIO:
      Busca la constante WHATSAPP_NUMERO más abajo (línea ~20)
      y reemplaza MI_NUMERO por el número real, con código de
      país y SIN signos. Ej: 573001234567
   📦 PRODUCTOS:
      Reemplaza el array PRODUCTOS con tus productos reales.
   ═══════════════════════════════════════════════════════════════ */

// ⚠️ CAMBIA AQUÍ EL NÚMERO (solo dígitos, con código de país, sin +)
const WHATSAPP_NUMERO = 'MI_NUMERO';

/* ────────────────────────────────────────────────
   CATÁLOGO — datos de ejemplo. Reemplaza con tus
   productos reales manteniendo la misma estructura.
   ──────────────────────────────────────────────── */
const PRODUCTOS = [
    {
        id: 'souvenir-vela-mini',
        nombre: 'Souvenir Vela Mini',
        coleccion: 'souvenirs',
        coleccionNombre: 'Souvenirs & Recordatorios',
        precio: 8000,
        variantes: [
            { tipo: 'Color', opciones: ['Marfil', 'Dorado', 'Rosa', 'Azul'] },
            { tipo: 'Aroma', opciones: ['Vainilla', 'Lavanda', 'Rosa', 'Coco'] }
        ],
        descripcion: 'Vela artesana en miniatura perfecta para recordatorios de bodas, bautizos y eventos especiales. Elaborada a mano con cera de alta calidad y presentada en su tarjeta personalizada.',
        especificaciones: {
            Materiales: 'Cera de soya, mecha de algodón',
            Dimensiones: '4 cm diámetro × 5 cm alto',
            'Tiempo de quemado': 'Aprox. 8 horas'
        },
        tiempos: {
            elaboracion: '7–10 días hábiles',
            entrega: 'Se coordina por WhatsApp'
        }
    },
    {
        id: 'recuerdo-personalizado',
        nombre: 'Recuerdo Personalizado',
        coleccion: 'souvenirs',
        coleccionNombre: 'Souvenirs & Recordatorios',
        precio: 12000,
        variantes: [
            { tipo: 'Presentación', opciones: ['Caja individual', 'Bolsa organza', 'Estuche'] },
            { tipo: 'Aroma', opciones: ['Chicle', 'Natilla', 'Marrón Azucarado'] }
        ],
        descripcion: 'Detalle personalizado con el nombre y fecha de tu ocasión especial. Incluye etiqueta diseñada a medida y presentación lista para regalar.',
        especificaciones: {
            Materiales: 'Cera de soya, etiqueta personalizada',
            Dimensiones: '6 cm diámetro × 6 cm alto',
            'Tiempo de quemado': 'Aprox. 15 horas'
        },
        tiempos: {
            elaboracion: '10–12 días hábiles',
            entrega: 'Se coordina por WhatsApp'
        }
    },
    {
        id: 'ramillete-floral',
        nombre: 'Ramillete Floral',
        coleccion: 'ramilletes',
        coleccionNombre: 'Ramilletes, Ramos y Bouquet',
        precio: 25000,
        variantes: [
            { tipo: 'Tamaño', opciones: ['Pequeño', 'Mediano', 'Grande'] },
            { tipo: 'Color', opciones: ['Rosa', 'Blanco', 'Dorado'] }
        ],
        descripcion: 'Ramillete compuesto con flores seleccionadas y detalles artesanales. Un detalle que enamora y perdura en la memoria.',
        especificaciones: {
            Materiales: 'Flores preservadas, lazos satinados',
            Dimensiones: '15–30 cm según tamaño',
            'Tiempo de duración': 'Meses con cuidado adecuado'
        },
        tiempos: {
            elaboracion: '3–5 días hábiles',
            entrega: 'Se coordina por WhatsApp'
        }
    },
    {
        id: 'vela-aromatica-lavanda',
        nombre: 'Vela Aromática Lavanda',
        coleccion: 'velas-decoraciones',
        coleccionNombre: 'Velas & Decoraciones',
        precio: 18000,
        variantes: [
            { tipo: 'Color', opciones: ['Lavanda', 'Marfil', 'Dorado'] },
            { tipo: 'Tamaño', opciones: ['180 g', '350 g'] }
        ],
        descripcion: 'Vela artesanal de aroma lavanda que transforma cualquier espacio en un refugio de calidez. Quemado limpio y uniforme con mecha de algodón.',
        especificaciones: {
            Materiales: 'Cera de soya, mecha de algodón',
            Dimensiones: '8 cm diámetro × 9 cm alto',
            'Tiempo de quemado': 'Aprox. 35 horas'
        },
        tiempos: {
            elaboracion: '5–7 días hábiles',
            entrega: 'Se coordina por WhatsApp'
        }
    },
    {
        id: 'wax-melts-caja',
        nombre: 'Wax Melts · Caja x6',
        coleccion: 'waxmelts',
        coleccionNombre: 'Wax Melts & Wax Sachets',
        precio: 15000,
        variantes: [
            { tipo: 'Aroma', opciones: ['Frutos Rojos', 'Palo Santo', 'Café Avellana', 'Piña Colada'] }
        ],
        descripcion: 'Caja con 6 unidades de wax melts para difundir tu aroma favorito en quemadores. Sin llama, sin hollín, aroma constante.',
        especificaciones: {
            Materiales: 'Cera de soya perfumada',
            Dimensiones: 'Caja 12 × 8 × 3 cm',
            'Duración': 'Cada pieza: 8–10 horas de aroma'
        },
        tiempos: {
            elaboracion: '3–5 días hábiles',
            entrega: 'Se coordina por WhatsApp'
        }
    },
    {
        id: 'vela-gourmet-cafe',
        nombre: 'Vela Gourmet Café Avellana',
        coleccion: 'gourmet',
        coleccionNombre: 'Velas Gourmet',
        precio: 22000,
        variantes: [
            { tipo: 'Tamaño', opciones: ['200 g', '400 g'] }
        ],
        descripcion: 'Vela gourmet de café avellana con notas cálidas y envolventes. Una experiencia aromática premium para los sentidos.',
        especificaciones: {
            Materiales: 'Cera de soya premium, fragancia gourmet',
            Dimensiones: '9 cm diámetro × 10 cm alto',
            'Tiempo de quemado': 'Aprox. 45 horas'
        },
        tiempos: {
            elaboracion: '7–10 días hábiles',
            entrega: 'Se coordina por WhatsApp'
        }
    },
    {
        id: 'vela-fecha-especial',
        nombre: 'Vela Fecha Especial',
        coleccion: 'fechas',
        coleccionNombre: 'Fechas Especiales',
        precio: 20000,
        variantes: [
            { tipo: 'Ocasión', opciones: ['Cumpleaños', 'Aniversario', 'Navidad', 'Día de la Madre'] },
            { tipo: 'Color', opciones: ['Dorado', 'Plateado', 'Rosa'] }
        ],
        descripcion: 'Vela conmemorativa para fechas especiales, decorada con los colores y detalles de la ocasión. Personalizable con nombre y fecha.',
        especificaciones: {
            Materiales: 'Cera de soya, decoración artesanal',
            Dimensiones: '10 cm diámetro × 8 cm alto',
            'Tiempo de quemado': 'Aprox. 30 horas'
        },
        tiempos: {
            elaboracion: '7–10 días hábiles',
            entrega: 'Se coordina por WhatsApp'
        }
    }
];

/* ────────────────────────────────────────────────
   ESTADO
   ──────────────────────────────────────────────── */
const LS_KEY = 'lumiera_pedido';
let carrito = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
let productoActual = null;
let varianteActual = {};
let cantidadActual = 1;
let filtroActual = 'todas';

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const fmtPrecio = n => '$' + n.toLocaleString('es-CO');

function guardarCarrito() {
    localStorage.setItem(LS_KEY, JSON.stringify(carrito));
}

/* ────────────────────────────────────────────────
   GRID DE PRODUCTOS + FILTROS
   ──────────────────────────────────────────────── */
function renderGrid() {
    const grid = $('#grid-productos');
    const lista = PRODUCTOS.filter(p => filtroActual === 'todas' || p.coleccion === filtroActual);

    if (!lista.length) {
        grid.innerHTML = `<p class="col-span-full py-12 text-center text-sm text-humo">No hay productos en esta colección todavía.</p>`;
        return;
    }

    grid.innerHTML = lista.map((p, i) => {
        const ph = ['ph', 'ph-2', 'ph-3', 'ph-4', 'ph-5', 'ph-6'][i % 6];
        return `
        <button type="button" class="card group lift reveal text-left" style="--d:${(i % 3) * 0.08}s" data-producto="${p.id}" aria-label="Ver detalle de ${p.nombre}">
            <div class="relative aspect-[4/3] overflow-hidden">
                <div class="${ph} absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#d8b45a" stroke-width="1.5" stroke-linecap="round" class="h-12 w-12 opacity-70 transition-transform duration-500 ease-expo group-hover:scale-110"><path d="M32 9c4.5 6.5 7.5 9.5 7.5 14.5a7.5 7.5 0 1 1-15 0C24.5 18.5 27.5 15.5 32 9z"/><line x1="32" y1="25" x2="32" y2="31"/><rect x="23" y="31" width="18" height="24" rx="3"/></svg>
                </div>
                <span class="absolute left-3 top-3 rounded-full bg-noche-deep/85 px-3 py-1 text-[11px] font-medium text-oro-light backdrop-blur-sm">${p.coleccionNombre}</span>
                <span class="absolute inset-x-0 bottom-0 translate-y-full bg-oro/95 py-2.5 text-center text-xs font-semibold text-noche transition-transform duration-300 ease-expo group-hover:translate-y-0">Ver detalle</span>
            </div>
            <div class="p-5">
                <h3 class="font-display text-xl text-tinta transition-colors group-hover:text-oro-deep">${p.nombre}</h3>
                <p class="mt-2 text-lg font-semibold text-oro-deep tabular">${fmtPrecio(p.precio)}</p>
            </div>
        </button>`;
    }).join('');
    observeReveals();
}

function initFiltros() {
    $$('#filtros .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            filtroActual = chip.dataset.filtro;
            $$('#filtros .chip').forEach(c => c.setAttribute('aria-pressed', c === chip));
            renderGrid();
        });
    });

    $$('.card[data-coleccion]').forEach(card => {
        card.addEventListener('click', () => {
            const col = card.dataset.coleccion;
            const chip = $(`#filtros .chip[data-filtro="${col}"]`);
            if (chip) chip.click();
        });
    });
}

/* ────────────────────────────────────────────────
   MODAL DE DETALLE
   ──────────────────────────────────────────────── */
function abrirModal(id) {
    productoActual = PRODUCTOS.find(p => p.id === id);
    if (!productoActual) return;

    cantidadActual = 1;
    varianteActual = {};
    productoActual.variantes.forEach(v => varianteActual[v.tipo] = v.opciones[0]);

    $('#modal-nombre').textContent = productoActual.nombre;
    $('#modal-precio').textContent = fmtPrecio(productoActual.precio);
    $('#qty-valor').textContent = '1';
    $('#agregar-texto').textContent = 'Agregar al pedido';

    renderThumbs();
    renderVariantes();
    renderTabs();

    const modal = $('#modal-producto');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    $('#modal-cerrar').focus();
}

function cerrarModal() {
    const modal = $('#modal-producto');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => modal.classList.add('hidden'), 350);
}

function renderThumbs() {
    const phList = ['ph', 'ph-2', 'ph-3', 'ph-4'];
    const cont = $('#modal-thumbs');
    cont.innerHTML = phList.map((ph, i) => `
        <button type="button" class="thumb ${ph} h-14 w-14 shrink-0 rounded-lg border ${i === 0 ? 'border-oro' : 'border-black/10'} transition-colors hover:border-oro/50 overflow-hidden flex items-center justify-center" data-ph="${ph}" aria-label="Ver imagen ${i + 1}">
            <svg viewBox="0 0 64 64" fill="none" stroke="#d8b45a" stroke-width="2" stroke-linecap="round" class="h-5 w-5 opacity-70"><path d="M32 9c4.5 6.5 7.5 9.5 7.5 14.5a7.5 7.5 0 1 1-15 0C24.5 18.5 27.5 15.5 32 9z"/><line x1="32" y1="25" x2="32" y2="31"/><rect x="23" y="31" width="18" height="24" rx="3"/></svg>
        </button>`).join('');

    const img = $('#modal-imagen');
    img.className = `ph order-1 flex min-h-[240px] flex-1 items-center justify-center rounded-xl border border-black/[.08] md:order-2 md:min-h-[420px]`;

    $$('.thumb', cont).forEach(t => {
        t.addEventListener('click', () => {
            $$('.thumb', cont).forEach(x => x.classList.replace('border-oro', 'border-black/10'));
            t.classList.replace('border-black/10', 'border-oro');
            img.className = `${t.dataset.ph} order-1 flex min-h-[240px] flex-1 items-center justify-center rounded-xl border border-black/[.08] md:order-2 md:min-h-[420px]`;
        });
    });
}

function renderVariantes() {
    const cont = $('#modal-variantes');
    cont.innerHTML = productoActual.variantes.map(v => `
        <div>
            <span class="field-label">${v.tipo}</span>
            <div class="flex flex-wrap gap-2" role="group" aria-label="${v.tipo}">
                ${v.opciones.map((op, i) => `
                    <button type="button" class="chip !text-xs" data-tipo="${v.tipo}" data-op="${op}" aria-pressed="${i === 0}">${op}</button>
                `).join('')}
            </div>
        </div>`).join('');

    $$('.chip[data-tipo]', cont).forEach(chip => {
        chip.addEventListener('click', () => {
            varianteActual[chip.dataset.tipo] = chip.dataset.op;
            $$(`.chip[data-tipo="${chip.dataset.tipo}"]`, cont).forEach(c => c.setAttribute('aria-pressed', c === chip));
        });
    });
}

function renderTabs() {
    $('#panel-desc').textContent = productoActual.descripcion;
    $('#panel-tiempos').textContent =
        `Elaboración: ${productoActual.tiempos.elaboracion} · Entrega: ${productoActual.tiempos.entrega}. Los tiempos exactos se confirman por WhatsApp.`;

    const specs = productoActual.especificaciones;
    $('#panel-specs').innerHTML = `
        <dl class="divide-y divide-black/[.08]">
            ${Object.entries(specs).map(([k, v]) => `
                <div class="flex justify-between gap-4 py-2.5 text-sm">
                    <dt class="text-humo">${k}</dt>
                    <dd class="text-right text-tinta">${v}</dd>
                </div>`).join('')}
        </dl>`;

    switchTab('desc');
}

function switchTab(name) {
    $$('.tab-btn').forEach(b => b.setAttribute('aria-selected', b.dataset.tab === name));
    ['desc', 'specs', 'tiempos'].forEach(t => {
        $(`#panel-${t}`).classList.toggle('hidden', t !== name);
    });
}

/* ────────────────────────────────────────────────
   AGREGAR AL CARRITO
   ──────────────────────────────────────────────── */
function agregarAlCarrito() {
    if (!productoActual) return;

    const varianteStr = Object.entries(varianteActual).map(([k, v]) => `${k}: ${v}`).join(' · ');
    const existente = carrito.find(item =>
        item.id === productoActual.id && item.variante === varianteStr
    );

    if (existente) {
        existente.cantidad += cantidadActual;
    } else {
        carrito.push({
            id: productoActual.id,
            nombre: productoActual.nombre,
            precio: productoActual.precio,
            variante: varianteStr,
            cantidad: cantidadActual
        });
    }

    guardarCarrito();
    renderCarrito();
    mostrarAviso(`✓ ${productoActual.nombre} agregado al pedido`);

    const btn = $('#btn-agregar');
    $('#agregar-texto').textContent = '¡Agregado!';
    const badge = $('#badge-carrito');
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
    setTimeout(() => $('#agregar-texto').textContent = 'Agregar al pedido', 1400);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    renderCarrito();
}

function cambiarCantidad(index, delta) {
    carrito[index].cantidad += delta;
    if (carrito[index].cantidad < 1) carrito.splice(index, 1);
    guardarCarrito();
    renderCarrito();
}

/* ────────────────────────────────────────────────
   RENDER CARRITO
   ──────────────────────────────────────────────── */
function renderCarrito() {
    const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
    const unidades = carrito.reduce((s, i) => s + i.cantidad, 0);

    const badge = $('#badge-carrito');
    badge.textContent = unidades;
    badge.classList.toggle('hidden', unidades === 0);

    const vacio = $('#carrito-vacio');
    const lista = $('#lista-carrito');
    const btnWa = $('#btn-whatsapp');

    if (!carrito.length) {
        vacio.classList.remove('hidden');
        vacio.classList.add('flex');
        lista.classList.add('hidden');
        btnWa.disabled = true;
        $('#carrito-total').textContent = '$0';
        return;
    }

    vacio.classList.add('hidden');
    vacio.classList.remove('flex');
    lista.classList.remove('hidden');
    btnWa.disabled = false;
    $('#carrito-total').textContent = fmtPrecio(total);

    lista.innerHTML = carrito.map((item, i) => `
        <li class="card !rounded-xl p-4">
            <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                    <p class="font-display text-lg leading-snug text-tinta">${item.nombre}</p>
                    <p class="mt-0.5 truncate text-xs text-humo">${item.variante}</p>
                    <p class="mt-1 text-sm font-semibold text-oro-deep tabular">${fmtPrecio(item.precio)}</p>
                </div>
                <button type="button" data-elim="${i}" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-humo transition-colors hover:bg-black/[.06] hover:text-tinta" aria-label="Quitar ${item.nombre}">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="mt-3 flex items-center justify-between">
                <div class="flex items-center gap-1 rounded-full border border-black/12 p-1">
                    <button type="button" data-menos="${i}" class="flex h-7 w-7 items-center justify-center rounded-full text-oro-deep transition-colors hover:bg-black/[.06]" aria-label="Quitar uno"><i class="fa-solid fa-minus text-[10px]"></i></button>
                    <span class="w-7 text-center text-sm font-semibold text-tinta tabular">${item.cantidad}</span>
                    <button type="button" data-mas="${i}" class="flex h-7 w-7 items-center justify-center rounded-full text-oro-deep transition-colors hover:bg-black/[.06]" aria-label="Agregar uno"><i class="fa-solid fa-plus text-[10px]"></i></button>
                </div>
                <span class="text-sm font-semibold text-tinta tabular">${fmtPrecio(item.precio * item.cantidad)}</span>
            </div>
        </li>`).join('');

    $$('[data-elim]', lista).forEach(b => b.addEventListener('click', () => eliminarDelCarrito(+b.dataset.elim)));
    $$('[data-menos]', lista).forEach(b => b.addEventListener('click', () => cambiarCantidad(+b.dataset.menos, -1)));
    $$('[data-mas]', lista).forEach(b => b.addEventListener('click', () => cambiarCantidad(+b.dataset.mas, 1)));
}

/* ────────────────────────────────────────────────
   WHATSAPP
   ──────────────────────────────────────────────── */
function enviarPorWhatsApp() {
    if (!carrito.length) return;

    if (WHATSAPP_NUMERO === 'MI_NUMERO') {
        mostrarAviso('⚠️ Configura tu número en WHATSAPP_NUMERO (script.js)');
        return;
    }

    const lineas = carrito.map(i => `• ${i.cantidad}x ${i.nombre} (${i.variante}) - ${fmtPrecio(i.precio * i.cantidad)}`);
    const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);

    const texto = [
        '¡Hola! Quisiera realizar el siguiente pedido desde la página web:',
        ...lineas,
        `Total estimado: ${fmtPrecio(total)}`,
        'Quedo a la espera para coordinar el tiempo de producción, costo de envío y detalles de pago. ¡Gracias!'
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`, '_blank');
}

function initEnlacesWhatsApp() {
    $$('[data-wa]').forEach(a => {
        if (WHATSAPP_NUMERO === 'MI_NUMERO') return;
        const base = `https://wa.me/${WHATSAPP_NUMERO}`;
        a.href = a.dataset.waText ? `${base}?text=${encodeURIComponent(a.dataset.waText)}` : base;
    });
}

/* ────────────────────────────────────────────────
   AVISO TOAST
   ──────────────────────────────────────────────── */
let avisoTimer;
function mostrarAviso(msg) {
    const el = $('#aviso');
    el.textContent = msg;
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(avisoTimer);
    avisoTimer = setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50%) translateY(-8px)';
    }, 2600);
}

/* ────────────────────────────────────────────────
   ACORDEÓN DE AROMAS
   ──────────────────────────────────────────────── */
function initAcordeon() {
    $$('.acc-btn').forEach(btn => {
        const panel = $('#' + btn.getAttribute('aria-controls'));
        if (btn.getAttribute('aria-expanded') === 'true') {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        btn.addEventListener('click', () => {
            const open = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!open));
            panel.style.maxHeight = open ? '0' : panel.scrollHeight + 'px';
        });
    });
}

/* ────────────────────────────────────────────────
   MENÚ MÓVIL
   ──────────────────────────────────────────────── */
function initMenuMovil() {
    const btn = $('#btn-hamburguesa');
    const menu = $('#menu-movil');
    const lines = $$('.hamburger-line');

    const toggle = () => {
        const open = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden', open);
        btn.setAttribute('aria-expanded', String(!open));
        lines[0].style.transform = open ? '' : 'translateY(7px) rotate(45deg)';
        lines[1].style.opacity = open ? '' : '0';
        lines[2].style.transform = open ? '' : 'translateY(-7px) rotate(-45deg)';
    };

    btn.addEventListener('click', toggle);
    $$('.menu-link').forEach(l => l.addEventListener('click', () => { if (!menu.classList.contains('hidden')) toggle(); }));
}

/* ────────────────────────────────────────────────
   PESTAÑAS DEL MODAL
   ──────────────────────────────────────────────── */
function initTabs() {
    $$('.tab-btn').forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));
}

/* ────────────────────────────────────────────────
   REVELADO AL ENTRAR EN VISTA
   ──────────────────────────────────────────────── */
function initReveal() {
    document.querySelectorAll('[data-reveal-group]').forEach(g => {
        [...g.children].forEach((el, i) => {
            if (el.classList.contains('reveal')) return;
            el.classList.add('reveal');
            el.style.setProperty('--d', `${Math.min(i * 0.07, 0.35)}s`);
        });
    });

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add('is-in');
            io.unobserve(e.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    document.querySelectorAll('.reveal:not(.is-in)').forEach(el => io.observe(el));
    return io;
}

let revealIO;
function observeReveals() {
    if (!revealIO) return initReveal();
    document.querySelectorAll('.reveal:not(.is-in)').forEach(el => revealIO.observe(el));
}

/* ────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    initFiltros();
    initAcordeon();
    initMenuMovil();
    initTabs();
    initEnlacesWhatsApp();
    renderCarrito();
    initReveal();

    // Grid → modal
    $('#grid-productos').addEventListener('click', e => {
        const card = e.target.closest('[data-producto]');
        if (card) abrirModal(card.dataset.producto);
    });

    // Modal
    $$('[data-cerrar]', $('#modal-producto')).forEach(b => b.addEventListener('click', cerrarModal));
    $('#qty-menos').addEventListener('click', () => {
        if (cantidadActual > 1) cantidadActual--;
        $('#qty-valor').textContent = cantidadActual;
    });
    $('#qty-mas').addEventListener('click', () => {
        if (cantidadActual < 99) cantidadActual++;
        $('#qty-valor').textContent = cantidadActual;
    });
    $('#btn-agregar').addEventListener('click', agregarAlCarrito);

    // Carrito
    $('#btn-carrito').addEventListener('click', () => {
        const p = $('#panel-carrito');
        p.classList.remove('hidden');
        p.setAttribute('aria-hidden', 'false');
        requestAnimationFrame(() => p.classList.add('is-open'));
        document.body.style.overflow = 'hidden';
    });
    $$('[data-cerrar]', $('#panel-carrito')).forEach(b => b.addEventListener('click', cerrarCarrito));
    $('#btn-whatsapp').addEventListener('click', enviarPorWhatsApp);

    // Esc cierra todo
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (!$('#modal-producto').classList.contains('hidden')) cerrarModal();
        if (!$('#panel-carrito').classList.contains('hidden')) cerrarCarrito();
    });
});

function cerrarCarrito() {
    const p = $('#panel-carrito');
    p.classList.remove('is-open');
    p.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => p.classList.add('hidden'), 350);
}
