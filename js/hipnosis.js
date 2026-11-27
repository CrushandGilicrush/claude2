/* ============================================================================
   FINAL ALTERNATIVO: LA HIPNOSIS (metrónomo + péndulo)

   - El metrónomo y el péndulo se encuentran en la casa y se pueden coger.
   - «combinar metrónomo con péndulo» los une en un solo objeto.
   - Tras la cuarta prueba llega el agresor. Hay una PAUSA con la pregunta
     «¿Qué deseas hacer?»:
        · «usar metrónomo hipnótico» (con el objeto combinado) → final alternativo
        · cualquier otro comando → «No puedes hacer eso. Prueba otra cosa.»
        · al tercer comando erróneo → el final normal del juego (o el que pongas en finalFallo)

   Instalación: solo hay que añadir <script src="js/hipnosis.js"></script> en index.html,
   DESPUÉS de extras.js y ANTES de main.js. No hace falta tocar main.js ni orders.js:
   este archivo se engancha solo a Extras.comando (para leer los comandos) y a
   Juego.terminar (para interrumpir el final normal con la pausa).

   Todo lo que se puede cambiar (textos, lugares, nombres) está en «CONFIGURACIÓN».
   ============================================================================ */
const Hipnosis = (() => {

  /* ===== CONFIGURACIÓN ===== */

  /* Dónde está cada objeto y qué dice. `estancia` debe existir en data.js. */
  const metronomo = {
    item: 'metrónomo', estancia: 'despacho',
    desc: 'Un metrónomo de madera con la pesa de latón deslizante. Lo heredaste de tu abuela y todavía marca el compás con un tic-tac grave y regular.',
    coger: 'Coges el metrónomo del escritorio. Pesa más de lo que parece.',
    yaTienes: 'Ya tienes el metrónomo.',
    fuera: 'No ves ningún metrónomo por aquí.'
  };
  const pendulo = {
    item: 'péndulo', estancia: 'salon',
    desc: 'Un péndulo de cristal tallado, colgado de una cadena muy fina. Atrapa la luz de la estancia y la devuelve a destellos.',
    coger: 'Coges el péndulo de cristal, que estaba escondido entre los libros de la biblioteca.',
    yaTienes: 'Ya tienes el péndulo.',
    fuera: 'No ves ningún péndulo por aquí.'
  };
  /* El objeto que resulta de combinarlos. */
  const combinado = {
    item: 'metrónomo hipnótico',
    desc: 'El péndulo de cristal cuelga del brazo del metrónomo y oscila a su compás. El efecto es extrañamente hipnótico.'
  };

  const textos = {
    combinar: 'Cuelgas el péndulo del brazo del metrónomo y ajustas la cadena hasta que el cristal oscila al ritmo del compás. Quizá puedan llegar a ser útiles en algún momento.',
    yaCombinados: 'Ya has combinado el metrónomo y el péndulo.',
    faltaAmbos: 'Para combinarlos necesitas tener el metrónomo y el péndulo.',
    faltaMetronomo: 'Te falta el metrónomo.',
    faltaPendulo: 'Te falta el péndulo.',
    noEsMomento: 'Todavía no es el momento de usarlo. Guárdalo: quizá lo necesites más adelante.',
    pregunta: '<b>¿Qué deseas hacer?</b>',
    error: 'No puedes hacer eso. Prueba otra cosa.'
  };

  /* La escena de la pausa: [tipo, texto]. Tipos: 'narrativo' (naranja) o 'dialogo' (azul). */
  const escena = [
    ['narrativo', 'Cuatro pruebas. Cuatro veces has hecho lo que te pedía. El móvil vibra una última vez sobre la mesa.'],
    ['dialogo', '«Voy para allá. Deja la puerta abierta.»'],
    ['narrativo', 'Pasan los minutos. Oyes el ascensor detenerse en tu planta y unos pasos lentos, seguros, que se acercan por el pasillo. La puerta de la casa cruje al abrirse. Alguien entra y se detiene en el umbral.'],
    ['narrativo', 'Todo parece quedarse en silencio. Tienes unos segundos antes de que cruce la estancia.']
  ];

  /* Final alternativo (hipnosis conseguida). */
  const finalHipnosis = `Te tiemblan las manos, pero no vas a desperdiciar ni un segundo. Dejas el metrónomo sobre la mesa y lo pones en marcha: tic, tac, tic, tac. El péndulo cuelga de su brazo y empieza a oscilar al compás. El cristal atrapa la luz de la lámpara y la reparte por la pared en destellos lentos.

—Mira el cristal —dices, y tu voz suena más firme de lo que esperabas—. Solo el cristal. Escucha el compás.

Él frunce el ceño y abre la boca para decir algo, pero sus ojos ya han seguido el vaivén una vez, y luego otra. Los hombros se le aflojan. El pie que avanzaba se detiene. El tic-tac llena la habitación y, poco a poco, todo lo demás se apaga: las amenazas, las fotos, las órdenes.

—Respira hondo. Cada vez que el péndulo cruza el centro, te sientes más pesado. Más tranquilo. Más dispuesto a escucharme.

Cuando sus párpados caen, comprendes que ha funcionado. Esta vez, el que obedece no eres tú.

Con calma, sin dejar de marcar el compás, le ordenas que se siente. Que desbloquee su móvil y te lo entregue. Que cuente, en voz alta y despacio, quién es, cuántas fotos tiene y a cuántas personas ha amenazado antes que a ti. Lo grabas todo. Habla sin resistencia, como quien recita una lección aprendida.

Cuando termina, no lo despiertas. Coges el teléfono y llamas a la policía. Explicas dónde estás, qué ha ocurrido y que el responsable está sentado en tu salón, sin ofrecer resistencia. Conservas los mensajes, la grabación y su móvil intacto, tal como te indican.

Mientras esperas a los agentes, el péndulo sigue oscilando cada vez más despacio, hasta detenerse.

La extorsión se alimenta del silencio y del miedo. Tú has recuperado las dos cosas: la voz y el control. Y has comprobado algo más importante: nunca estuviste obligada a obedecer.

Has ganado la partida.`;

  /* Final del tercer comando erróneo. Si lo dejas en null se usa el último final de data.js
     (el de «Has perdido la partida»). Para uno propio, escribe aquí el texto entre comillas invertidas. */
  const finalFallo = null;

  const maxFallos = 3;                 // comandos erróneos permitidos antes del final de fallo
  const permitirCombinarEnPausa = false;   // true: combinar los objetos dentro de la pausa no cuenta como error
  const atajoPrueba = 't5555';         // escribe esto para probar la escena con el objeto combinado (null para desactivarlo; bórralo al publicar)

  /* ===== Utilidades ===== */
  const norm = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const tiene = i => Juego.estado.inventario.includes(i);
  function cambiarInventario(quitar, poner) {
    const inv = Juego.estado.inventario;
    quitar.forEach(q => { const k = inv.indexOf(q); if (k >= 0) inv.splice(k, 1); });
    if (poner && !inv.includes(poner)) inv.push(poner);
    UI.inventario(inv);
  }

  /* ===== Registro de los objetos en el juego (examinar, coger, alias) ===== */
  function registrar() {
    [metronomo, pendulo].forEach(o => {
      Datos.objetos[o.estancia] = Datos.objetos[o.estancia] || {};
      Datos.objetos[o.estancia][o.item] = o.desc;
      Datos.alias[norm(o.item)] = o.item;                               // «metronomo» (sin tilde) → «metrónomo»
      Datos.cogibles.push({
        item: o.item, nombres: new RegExp(norm(o.item)), estancia: o.estancia,
        texto: o.coger, yaTienes: o.yaTienes, fuera: o.fuera
      });
    });
  }

  /* ===== Reconocimiento de comandos ===== */
  const hayMetronomo = c => /metronomo/.test(c), hayPendulo = c => /pendulo/.test(c);
  const esCombinar = c => hayMetronomo(c) && hayPendulo(c) &&
    /^(combinar|unir|juntar|atar|enganchar|colgar|acoplar|montar|fijar|sujetar|poner|usar|utilizar|emplear|ensamblar|mezclar)\b/.test(c);
  const esUsar = c => /^hipnotizar\b/.test(c) ||
    (/^(usar|utilizar|emplear|activar|balancear|sacar|mostrar)\b/.test(c) && /metronomo|pendulo|hipnotic|artefacto|aparato/.test(c));

  /* ===== Combinar ===== */
  function combinar() {
    if (tiene(combinado.item)) return UI.log(textos.yaCombinados);
    const m = tiene(metronomo.item), p = tiene(pendulo.item);
    if (!m && !p) return UI.log(textos.faltaAmbos);
    if (!m) return UI.log(textos.faltaMetronomo);
    if (!p) return UI.log(textos.faltaPendulo);
    cambiarInventario([metronomo.item, pendulo.item], combinado.item);
    UI.log(textos.combinar);
  }

  /* ===== La pausa ===== */
  let activa = false, fallos = 0, yaMostrada = false;
  let terminarOriginal = null;

  function iniciar() {
    yaMostrada = true; activa = true; fallos = 0;
    escena.forEach(([tipo, texto]) => UI.log(texto, tipo));
    UI.log(textos.pregunta);
  }
  function finalAlternativo() {
    activa = false;
    Datos.finales.hipnosis = finalHipnosis;      // propiedad con nombre: no altera Datos.finales.length
    terminarOriginal('hipnosis');
  }
  function finalFalloMostrar() {
    activa = false;
    if (finalFallo) { Datos.finales.hipnosisFallida = finalFallo; return terminarOriginal('hipnosisFallida'); }
    terminarOriginal(Datos.finales.length - 1);
  }
  function turnoPausa(cmd) {
    if (esUsar(cmd) && tiene(combinado.item)) { finalAlternativo(); return true; }
    if (permitirCombinarEnPausa && esCombinar(cmd)) { combinar(); UI.log(textos.pregunta); return true; }
    fallos++;
    if (fallos >= maxFallos) { finalFalloMostrar(); return true; }
    UI.log(textos.error);
    return true;
  }

  /* ===== Punto de entrada de los comandos. Devuelve true si ya lo ha gestionado. ===== */
  function comando(cmd) {
    const est = Juego.estado;
    if (est.terminado || est.esperandoCodigo) return false;

    if (atajoPrueba && cmd === norm(atajoPrueba)) {          // atajo de prueba: objeto combinado y escena directa
      cambiarInventario([metronomo.item, pendulo.item], combinado.item);
      iniciar();
      return true;
    }
    if (activa) return turnoPausa(cmd);

    if (esCombinar(cmd)) { combinar(); return true; }
    if (tiene(combinado.item)) {
      if (/^(examinar|ver|mirar)\b/.test(cmd) && /metronomo|pendulo|hipnotic/.test(cmd)) { UI.log(combinado.desc); return true; }
      if (esUsar(cmd)) { UI.log(textos.noEsMomento); return true; }
    }
    return false;
  }

  /* ===== Enganches (no hace falta editar main.js ni orders.js) ===== */
  function instalarTerminar() {            // se ejecuta cuando ya existe Juego (evento load)
    if (terminarOriginal || typeof Juego === 'undefined') return;
    terminarOriginal = Juego.terminar;
    Juego.terminar = i => (i === Datos.finales.length - 1 && !yaMostrada) ? iniciar() : terminarOriginal(i);
  }
  registrar();
  if (typeof Extras !== 'undefined') {
    const comandoExtras = Extras.comando;
    Extras.comando = cmd => comando(cmd) || comandoExtras(cmd);
  } else {
    console.warn('hipnosis.js: carga este archivo DESPUÉS de extras.js para que reconozca los comandos.');
  }
  if (typeof window !== 'undefined') window.addEventListener('load', instalarTerminar);

  return { comando, iniciar, instalarTerminar, get activa() { return activa; } };
})();
