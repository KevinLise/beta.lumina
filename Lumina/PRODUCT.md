# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Clientes finales (público general, contexto Colombia) que buscan velas artesanales, souvenirs y detalles decorativos para regalar o transformar espacios. Llegan del buscador o redes sociales, exploran catálogo y prefieren coordinar el pedido por WhatsApp.

## Product Purpose

Landing de marketing para **Lumiera** que presenta la marca y su colección, permite explorar un catálogo interactivo con detalle de producto y enviar pedidos formateados por WhatsApp. Éxito: el visitante entiende la oferta, agrega productos a un pedido y lo envía por WhatsApp para coordinar producción, envío y pago.

## Positioning

Velas artesanales y detalles personalizados elaborados pieza por pieza, con aromas de una amplia fragrancería propia y personalización de colores/aromas para ocasiones especiales — calidez y elegancia artesanal frente a la producción masiva.

## Operating Context

- Sitio estático hospedado en GitHub Pages (origen: lumieraayd.github.io).
- El pedido se coordina personalizadamente por WhatsApp (sin carrito de pago ni backend).
- Trabajo realizado por un desarrollador para un cliente; assets y datos del negocio se entregarán después.

## Capabilities and Constraints

- **Regla de oro:** no borrar ni eliminar contenido existente (textos, imágenes, info de marca/productos); reorganizar y elevar el diseño.
- Tailwind CSS vía CDN reemplazando el CSS antiguo. Paleta acordada (2026-10-21): página con fondo blanco cálido (blanco/arena), acentos y tipografía dorados, barra de navegación y footer en oscuro (mantener ese contraste).
- Catálogo interactivo: click en producto → vista de detalle tipo e-commerce (galería con miniaturas, panel de compra con precio, selector de variantes, cantidad −/+, "Agregar al pedido", pestañas de descripción/especificaciones/tiempos).
- Carrito temporal persistente (localStorage) y botón "Enviar pedido por WhatsApp" con enlace `wa.me` dinámico.
- Componentes colapsables (acordeones) para información secundaria; 100% responsiva.
- Datos reales de productos/precios y número de WhatsApp: **pendientes** (entregas posteriores del cliente).
- Sin backend, sin pagos en línea.

## Evidence on Hand

- HTML completo de la landing publicada (sección hero, 6 colecciones, nosotros, aromas, contacto, footer) recuperado de https://lumieraayd.github.io/ — fuente de verdad para la réplica.
- Copy real existente: hero, misión/visión, valores, lista de 6 categorías de aromas con fragancias.
- **Ausencias que no deben fabricarse:** imágenes reales (img/), precios, testimonios, claims, número de WhatsApp del negocio.

## Product Principles

1. Conservar la verdad del contenido: nada se inventa ni se elimina.
2. La elegancia artesanal guía cada decisión visual (paleta oscura/dorada, tipografía refinada).
3. El pedido siempre termina en una conversación humana por WhatsApp.
4. Experiencia móvil primero: el catálogo debe usarse cómodamente desde el celular.
5. Datos y assets del cliente se integran sin rehacer la estructura (todo es editable y sustituible).

## Open Decisions

- 🖼️ Imágenes: placeholders temáticos hasta entregar `img/` — *supuesto pendiente*.
- 🏷️ Catálogo: array JS con datos de ejemplo marcados, reemplazado por productos/precios reales — *pendiente*.
- 📱 WhatsApp: constante `MI_NUMERO` con instrucciones — *pendiente: sin número real*.
- Colecciones: asumido filtro de productos en la misma página (subpáginas actuales con enlaces rotos se reemplazan).
