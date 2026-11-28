/* Contenido del juego: textos, estancias, objetos y finales. Aquí se edita la narrativa. */
const Datos = {
  codigo: '885',
  contacto: '02E4E3E',          // CORREGIDO: era el placeholder 'nombre'; debe ser el contacto real de Telegram
   aliasContacto: ['desconocido', 'el desconocido', 'tio', 'tío'],
  exigirCafe: true,             // si es true, móvil y ordenador no se pueden usar hasta tomarse el café
  destinoAlias: { nevera: 'cocina', congelador: 'cocina', pc: 'despacho', ordenador: 'despacho', dormitorio: 'habitacion' },
  /* Textos de la secuencia de inicio. {contacto} y {dispositivo} se sustituyen solos. */
  textos: {
    sinCafe: 'Antes de ponerte a mirar nada, ve a prepararte un café.',
    cafeLejos: 'La telequinesis no es tu fuerte. Si quieres un café, debes ir a la cocina.',
    cafeHecho: 'Preparas la cafetera y la cocina se llena del olor a café recién hecho.',
    cafeRepetido: 'Ya has preparado un café. Suficiente por ahora.',
    cafeNoHay: 'No te has preparado ningún café todavía.',
    cafeBebido: 'Te bebes el café a sorbos, poco a poco, saboreándolo. Puede ser un buen momento para entrar en Fetlife.',
    cafeYaBebido: 'Ya te has tomado el café.',
    enciende: 'Enciendes {dispositivo}. Ves dos accesos directos en la pantalla de inicio: «Fetlife» y «Telegram».',
    sinDispositivo: 'Primero tienes que encender el móvil o el ordenador.',
    lifeNuevo: 'Entras en fetlife.Entras en fetlife. Lees el primer metaestatus de la mañana, escrito por un amigo tuyo llamado "": Si a mí lo del juego me parece guay, oye, pero esa tendencia a confundir lo ecléctico con lo de no saber muy bien por dónde tirar... XD Se mezclan muchas cosas, confiando quizá en que la acumulación de ocurrencias termine dando cierta sensación de profundidad. Lo de mantener un hilo argumental coherente ya parece algo bastante secundario. Zapatero a tus zapatos...". No sientes mayor curiosidad por saber de dónde viene, así que te fijas en el circulito rojo que te notifica que tienes un mensaje sin leer.',
    lifeVacio: 'Entras en Fetlife. No tienes mensajes nuevos.',
    sinMensaje: 'No tienes mensajes nuevos.',
    mensajeIntro: 'El mensaje es de un desconocido llamado 02E4E3E.  Encabeza el mensaje una foto borrosa. Curiosa, antes de leer nada, desactivas la censura para poder verla. De pronto sientes una punzada en el estómago y tus pulsaciones se aceleran: la foto es tuya, o, más bien, sales tú en una situación y en unas condiciones que jamás debieron ser registradas de modo alguno. Nerviosa decides leer el mensaje:',
    mensaje: '«Te confieso que es de mis fotos favoritas. Tengo más, sí, pero ninguna como esta. No es lo degradante de la escena, sino la expresión de tu cara. Intuyo que preferirías mantener estas fotos alejadas de tus amigos, familiares y compañeros de trabajo. Si es así, entra en Telegram y escríbeme a {contacto} de inmediato»',
    telegramBloqueado: 'Telegram está protegido con un código de 3 cifras. Hace tiempo que no lo usas y no consigues recordarlo. Seguro que lo tienes apuntado en lugar de tu despacho.',
    pideCodigo: 'Escribe el código de 3 cifras (o «cancelar»):',
    codigoMal: 'Código incorrecto. Inténtalo de nuevo o escribe «cancelar».',
    telegramAbre: 'Telegram se abre. Ya no te volverá a pedir el código.',
    telegramListo: 'Telegram está abierto.',
    telegramEscribe: 'Tienes que escribir a {contacto}.',
    escribirSinApp: 'Primero tienes que abrir Telegram.',
    escribirSinMensaje: 'No sabes a quién escribir.',
    escribirYa: 'No tienes nada más que decirle por ahora.',
    escribirOk: 'Escribes nerviosa, pensando con torpeza en las opciones que tienes y dudando si estás haciendo lo correcto o no. Te está escribiendo...',
    respuesta: '«Mientras esperaba que me escribieras, pensaba en lo qué estarías dispuesta a hacer para que esas fotos no las vea todo el mundo. Estoy seguro de que vas a ser buena y me vas a complacer»',
    /* Orden 1: caldera, radiador y foto */
    pedirCaldera: '«Para empezar, te quiero como en la foto: desnuda, así que ve quitándote la ropa. Ahora. Luego quiero que subas la temperatura de la caldera a 70 grados, te acerques a un radiador y apoyes el culo en él durante un minuto. Después, hazte una foto del culo y mándamela.»',
    calderaSubir: 'Tienes que escribir el ajuste con el formato de la nota.',
    calderaYa: 'La caldera ya está a 70 grados y el panel está bloqueado.',
    radiadorFrio: 'Apoyas el culo en el radiador. Está templado, nada más.',
    radiadorMano: 'Apoyas el culo sobre el radiador y lo mantienes un minuto entero. Quema mucho más de lo que imaginabas y te cuesta mantenerlo ahí pegado. Cuando lo retiras, lo tienes completamente rojo y sensible.',
    radiadorYa: 'Ya tienes el culo demasiado sensible como para repetirlo',
    fotoManoNormal: 'Te haces una foto del culo. Una más de las muchas que tienes.',
    fotoManoRoja: 'Haces una foto de tu culo enrojecido.',
    sinTelegram: 'Primero tienes que abrir Telegram.',
    pedirHielo: '«Me gusta la foto. Se te ha quemado bastante, así que ahora toca refrescarlo un poco. Ve a la nevera y coge un par de cubitos de hielo del congelador, sal a la terraza y graba un vídeo metiéndote los dos cubitos por el culo. Hazlo bien o lo repetirás. Importante: que se te vea la cara de guarra que pones. Después, mándamelo.»',
    congeladorYa: 'El congelador ya está abierto.',
    congeladorLejos: 'El congelador está en la cocina.',
    sinHielo: 'No tienes ningún cubito a mano.',
    grabando: 'Enciendes la cámara del móvil, lo apoyas en el suelo y comienzas a grabar.',
    yaGrabando: 'Ya estás grabando.',
    sinGrabar: 'No estás grabando nada.',
    corteVideo: 'Dejas de grabar.',
    cubitoSinGrabar: 'Te metes un cubito en el culo. Está helado, pero, si no lo grabas, lo estás pasando mal para nada.',
    videoCubito: 'Te sientas en la silla, de espalda a la calle, por si alguien estuviera mirando. Estás incómoda y deseas hacerlo rápido. Sacas un cubito de hielo del vaso, separas la pierna y apoyas una de ellas en la otra silla. Empujas Poco a poco va entrando hasta que finalmente queda atrapado dentro de ti. Duele. Coges el otro cubito y repites el proceso, esta vez mucho más rápido. Notas una presión muy fuerte en la parte baja de tu cuerpo. Molesta, te levantas y detienes la grabación.',
    sinVideo: 'No tienes ningún vídeo que enviar.',
    pedirVerduras: '«Prueba 3. Dime qué verduras tienes en la nevera.»',
    pedirCalabacin: '«Un calabacín. Qué interesante. Grábate un vídeo mordiéndolo y mándamelo.»',
    sinCalabacin: 'No tienes ningún calabacín a mano.',
    calabacinSinGrabar: 'Te metes el calabacín. Es enorme y duele, pero nadie lo ha visto.',
    videoCalabacin: 'Te introduces con esfuerzo el calabacín delante de la cámara. Detienes la grabación.',
    pedirRotulador: '«Prueba 4. Escríbete en la pierna la dirección de tu casa junto al mensaje: soy un depósito de fluidos", y me mandas una foto.»',
    cajonCerrado: 'El cajón está cerrado con llave.',
    cajonAbre: 'Abres el cajón con la llave.',
    cajonYa: 'El cajón ya está abierto.',
    cajonContenido: 'Dentro del cajón hay un rotulador.',
    cajonVacio: 'El cajón está vacío.',
    sinRotulador: 'No tienes nada con lo que escribir.',
    escribeBrazo: 'Destapas el rotulador y te escribes en el muslo, con letra temblorosa: «soy un depósito de fluidos. Calle...».',
    brazoYa: 'Ya te has escrito suficiente.',
    fotoBrazoNormal: 'Haces una foto del muslo. No tiene nada escrito.',
    fotoBrazoEscrito: 'Haces una foto deñmuslo con la frase escrita.',
    recuerdaCaldera: '«Te he pedido que te desnudes, subas la caldera a 70 grados, apoyes el culo en el radiador durante un minuto y me mandes una foto del culo. Hazlo bien.»',
    recuerdaHielo: '«Te he pedido un vídeo en la terraza, metiéndote un cubito de hielo por el culo. Un vídeo, no otra cosa.»',
    recuerdaCalabacin: '«Te he pedido que me digas qué verduras tienes en la nevera. Después ya te diré qué hacer con ellas.»',
    recuerdaCalabacinVideo: '«Te he pedido un vídeo metiéndote el calabacín. Un vídeo, no otra cosa.»',
    recuerdaRotulador: '«Te he pedido que te escribas una frase en el muslo con un rotulador y me mandes una foto. Hazlo bien.»',
    recuerdaGenerico: '«Eso no es lo que te he pedido.»',
    recuerdaDesnudarse: '«Te he dicho que te desnudaras. Hazlo y vuelve a mandármela.»',
    desnudarse: 'Con las manos temblorosas, te quitas toda la ropa. Estás completamente desnuda, vulnerable.',
    yaDesnuda: 'Ya estás desnuda.',
    policiaSinMotivo: 'No ha pasado nada que merezca llamar a la policía.',
        pastillaComida: 'Te metes la pastilla en la boca y la tragas sin agua. Sabe amarga. Durante unos segundos no pasa nada; luego notas un cosquilleo cálido que te recorre el cuerpo.',
    pasadizoAbre: 'De pronto oyes un sonido extraño en algún lugar de la casa. Nunca antes habías escuchado algo igual en la casa; como si una gran roca hubiera sido arrastrada por el suelo',
    pasadizoLejano: 'En algún lugar de la casa oyes un sonido extraño, como si una gran roca hubiera sido arrastrada por el suelo ',
    armarioNormal: 'Abres las puertas del armario. Solo hay ropa colgada y un fondo de madera. Un armario normal y corriente.',
    armarioAbierto: 'El armario está abierto de par en par. Tras la ropa ves un hueco oscuro.',
    comodaPastilla: 'Sobre ella hay una pastilla de color lila con unos símbolos diminutos que no logras distinguir.',
    pastillaYa: 'Ya te has tomado la pastilla.',
    pastillaSinTener: 'No tienes ninguna pastilla. Si tantas ganas de tienes de tomarte una, sin importante el efecto que pueda provocar en tu cuerpo, deberás buscar una.',
    pastillaNoQueda: 'Ya no queda ninguna pastilla.',
    mazmorraLejos: 'El pasadizo está en el armario de la habitación.',
  },
  imagenSala: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
  /* CORREGIDO: lifeNuevo y lifeLeido apuntaban a img/mi-foto-1.jpg y img/mi-foto-2.jpg, que no existen. */
  imagenes: { movil: 'img/movil.svg', ordenador: 'img/pc.png', life: 'img/leido.png', lifeNuevo: 'img/mensaje.png', lifeLeido: 'img/leido.png', telegramDesconocido: 'img/obedece.png', telegram: 'img/codigo.png' },
  intro: [
    ['narrativo', 'Despierta; está amaneciendo. Lo sé... cuesta mucho renunciar al calor de la manta, y te gusta remolonear. Habías planeado procrastinar todo el día, pero debes hacer cosas. Venga, levanta, prepara un café y, antes de hacer nada, echas un vistazo a fetlife, a ver qué se cuece por ahí. Si necesitas ayuda, solo tienes que pedirla escribiendo la palabra «ayuda». Puedes empezar escribiendo «levantarme», y luego, «ir a la cocina». ¡Vivir sola en casa puede ser toda una aventura!']
  ],
  estancias: {
    salon: { nombre: 'el salón', imagen: 'img/salon.png', desc: 'Nada fuera de sitio, ni una mota en la madera. La luz entra tamizada por la persiana a media altura y dibuja líneas rectas sobre la alfombra. Bajo la ventana, el radiador de hierro está frío, con la pintura intacta; su sola presencia parece prometer calor para más tarde. El sofá, de tapizado claro, está mullido y sin arrugas, con los cojines alineados y un plaid doblado en el brazo. A la derecha, el mueble antiguo, encerado y reluciente, sostiene un tablero de ajedrez. La biblioteca del fondo custodia los libros desordenados. En el rincón, la televisión está apagada, al igual que la radio.' },
    habitacion: { nombre: 'la habitación', imagen: 'img/habitacion2.png', desc: 'La penumbra justa, la puerta que cierra bien, el silencio mullido de la moqueta. Aquí el aire está más templado que en el resto de la casa y huele a la ropa guardada y a tu jabón. A un lado, el armario de dos hojas, cerrado, con las perchas quietas dentro y una correa colgada del tirador. A la izquierda está la cómoda de madera clara, con el cajón encajado hasta el tope y el tirador bien centrado. Nada encendido: ni la lamparita del cabecero, ni el flexo, ni nada. Solo la luz que se cuela por la rendija de la persiana, rayando la colcha. Se trata de un espacio íntimo y acogedor.' },
    despacho: { nombre: 'el despacho', imagen: 'img/despacho.png', desc: 'El despacho es la parte más sobria de la casa, y también la más ordenada: aquí nada se ha dejado a medias. La mesa de trabajo está despejada, con el secante perfectamente cuadrado y el cable del ordenador recogido con una brida; la torre, apagada, tiene el piloto muerto y la pantalla negra, inclinada hacia la silla vacía. La silla está arrimada, recta, sin la huella de nadie. En la estantería baja, los juegos de mesa se apilan por cajas y tamaños, con las esquinas intactas y ninguna abierta; el de arriba tiene el plástico aún puesto. En la pared, frente al escritorio, un cuadro enmarcado en madera oscura: un paisaje o una figura, cuesta saberlo con esta luz, colgado recto y sin polvo en el marco. La puerta está cerrada y el aire, quieto, huele a papel y a un resto tenue de café de la mañana. Nada encendido.' },
    cocina: { nombre: 'la cocina', imagen: 'img/cocina1.png', desc: 'La encimera está despejada, los fogones de la cocina relucientes y fríos, con los mandos en cero. La cafetera está apagada. La nevera zumba muy bajo, con la puerta bien cerrada y los imanes alineados en el lateral; dentro, la luz debe de estar apagada y todo en su sitio. Al fondo, sobre la pared, la caldera con el panel digital.' },
    bano: { nombre: 'el baño', imagen: 'img/baño.png', desc: 'Se trata de una estancia pequeña pero confortable, iluminada por una luz tenue que apenas consigue disipar las sombras de los rincones. A un lado se encuentra el inodoro, junto al lavabo, cuya superficie de porcelana conserva algunas marcas de uso. Sobre él, un espejo refleja la estancia con claridad. Bajo este, pegado a la pared, hay un mueble de baño con varios compartimentos donde se guardan los productos de higiene y otros objetos cotidianos. Al fondo, la ducha, protegida por una mampara de cristal, permanece silenciosa. ' },
    terraza: { nombre: 'la terraza', imagen: 'img/terraza.png', desc: 'Es pequeña, con macetas se alinean contra el peto, todas con la tierra recién rascada y las hojas limpias; una de ellas tiene las flores cerradas todavía. La mesa redonda, de hierro pintado, está en el centro, y las dos sillas, enfrentadas, con las patas bien asentadas. La barandilla corre a lo largo del borde, fría y sin un dedo marcado, y por debajo se oye la calle: un coche que pasa, una voz lejana, el rumor de alguien que sube una persiana. El aire aquí es más fresco que dentro y huele a tierra mojada.' },
},
  /* Descripciones provisionales de «examinar»: reescribir a gusto. */
  objetos: {
    salon: { sofa: 'Un sofá mullido, con una manta doblada en el brazo.', television: 'Una televisión de pantalla plana, apagada. Podrías encenderla.', biblioteca: 'La mayoría de los libros ya los has leído. De entre todos, sobresale el que te estás leyendo ahora: las perversiones de Emily.', radiador: 'Un radiador de hierro, ahora apagado.', luz: 'Una lámpara de pie con luz cálida.', mueble: 'Un mueble antiguo de madera oscura. Encima hay un tablero de ajedrez con una partida a medias.', tablero: '', libro: 'Las perversiones de Emily. Es el libro que te estás leyendo ahora.' },
    habitacion: { cama: 'La cama deshecha, aún tibia.', armario: 'Un armario de dos puertas, repleto de ropa.', espejo: 'Tu reflejo te devuelve una cara cansada.', comoda: 'Una cómoda de madera con un cajón', pastilla: 'Se trata de una pastilla de color lila. Te la dio tu mejor amiga y aún no sabes qué efectos tiene, pero estás segura de que no servirá para quitar el dolor de cabeza', cajon: 'Un cajón de la cómoda.' },

    despacho: { ordenador: 'Un ordenador de sobremesa. Lo mismo que el móvil, pero con pantalla grande.', escritorio: 'Un escritorio con papeles revueltos.', 'juegos de mesa': 'Varias cajas de juegos de mesa, apiladas.', cuadro: 'Un panel lleno de rosas y espinas, con placas numeradas.' },
    cocina: { cocina: 'Una cocina limpia, sin nada al fuego.', cafetera: 'Una cafetera que huele a café viejo.', nevera: '', congelador: 'Un congelador pequeño, con la puerta cubierta de escarcha.', caldera: '' },
    bano: { inodoro: 'te acercas a revisar el inodoro y detectas lo que parece una pequeña mancha. Al acercarte más compruebas que, escrito con rotulador, pone: Lapso meó aquí. Y te preguntas: ¿quién coño es Lapso? ¿Será algún ligue? poco impacto ha dejado si no me acuerdo de él. Tal vez lo tenga en telegram...', lavabo: 'Un lavabo con el grifo goteando.', espejo: 'un espejo limpio y reluciente', ducha: 'Una ducha con mampara.', mueble: 'Un pequeño mueble con toallas.', toallas: 'junto a las toallas tienes el satisfyer y las compresas.', satisfyer: 'con lo que ha trabajado y aún funciona.' },
    terraza: { macetas: 'Macetas con plantas algo secas.', calle: 'Se trata de una calle bastante transitada. La gente parece caminar sin preocupación alguna. Qué afortunados. Vas a la cocina y vuelves a la terraza con un huevo. Si lo lanzas, ¿alterarás la fortuna de algún viandante? ', huevo: 'Un huevo con forma de... huevo', balcon: 'Se trata de una calle bastante transitada. La gente parece caminar sin preocupación alguna. Qué afortunados. Vas a la cocina y vuelves a la terraza con un huevo. Si lo lanzas, ¿alterarás la fortuna de algún viandante? ', tumbona: 'Una tumbona cómoda, al sol.' }
  },
   alias: { verduras: 'nevera', tele: 'television', tv: 'television', televisor: 'television', alimentos: 'nevera', comida: 'nevera', cajones: 'cajon', perversiones: 'libro', libreria: 'biblioteca', ajedrez: 'tablero', radiadores: 'radiador', juegos: 'juegos de mesa', maceta: 'macetas', pc: 'ordenador',
  },
  /* Comandos con respuesta de texto. Sin `estancia`/`objetos`: funcionan en cualquier lugar.
     Con ellos: solo funcionan en esa estancia y nombrando uno de sus objetos.
     `inventario`: exige llevar ese objeto encima. */
  comandosTexto: [
    { verbos: ['bostezar', 'bosteza', 'bostezas'], texto: 'Te llevas la mano a la boca y bostezas. Esta situación, más que inquietarte, te da sueño.' },
{ verbos: ['reir', 'reirse', 'reirme', 'sonreir'], texto: 'Se te escapa una risa. No parece que hayas entendido todavía la gravedad de la situación.' },
{ verbos: ['usar', 'sacar'], inventario: 'satisfyer', objetos: ['satisfyer'],texto: 'Funciona como el primer día. Te corres poco después.',  fuera: 'No hay ningún satisfyer por aquí.' },

{ verbos: ['llorar', 'llorarme', 'sollozar', 'gimotear'], texto: 'Las lágrimas empiezan a recorrer tus mejillas. Procura recomponerte; todavía no hemos terminado.' },
{ verbos: ['gritar', 'chillar', 'vociferar', 'berrear'], texto: 'Lanzas un grito al aire. El ruido no cambia absolutamente nada.' },
{ verbos: ['susurrar', 'murmurar', 'musitar'], texto: 'Murmuras algo entre dientes. Si tienes algo que decir, quizá deberías hacerlo con más convicción.' },
{ verbos: ['suspirar', 'resoplar'], texto: 'Dejas escapar un largo suspiro. Parece que empiezas a comprender que las cosas no siempre salen como deseas.' },
{ verbos: ['silbar', 'pitar', 'tararear'], texto: 'Te pones a silbar distraídamente. Curiosa manera de disimular tu nerviosismo.' },
{ verbos: ['cantar', 'entonar'], texto: 'Te arrancas a cantar. No tienes precisamente una voz privilegiada, pero al menos tienes iniciativa.' },
{ verbos: ['bailar', 'danzar', 'menearse'], texto: 'Empiezas a bailar unos pasos improvisados. No parece el momento más oportuno, pero tú sabrás.' },
{ verbos: ['saltar', 'brincar', 'botar'], texto: 'Das unos cuantos saltos. Quizá pretendes liberar tensión, aunque el resultado es bastante ridículo.' },
{ verbos: ['sentarse', 'sentarme', 'sentar'], texto: 'Te sientas y adoptas una postura aparentemente tranquila. No confundas descansar con tener el control.' },
{ verbos: ['levantarse', 'levantarme', 'incorporarse'], texto: 'Te incorporas lentamente. Al menos parece que todavía conservas cierta iniciativa.' },
{ verbos: ['arrodillarse', 'arrodillarme', 'arrodillar'], texto: 'Te arrodillas. No sabes muy bien por qué lo has hecho, pero la postura resulta bastante elocuente.' },
{ verbos: ['tumbarse', 'tumbarme', 'acostarse', 'acostarme', 'echarse'], texto: 'Te tumbas y miras al techo. Una excelente manera de dejar que los problemas sigan acumulándose.' },
{ verbos: ['estirarse', 'estirarme', 'desperezarse'], texto: 'Estiras los brazos y desperezas el cuerpo. Parece que te has olvidado por un instante de todo lo demás.' },
{ verbos: ['rascarse', 'rascarme', 'rascar'], texto: 'Te rascas distraídamente. Un gesto insignificante para una situación que dista mucho de serlo.' },
{ verbos: ['peinarse', 'peinarme', 'peinar'], texto: 'Te arreglas el pelo con los dedos. La apariencia es importante, aunque no siempre suficiente.' },
{ verbos: ['mirarse', 'mirarme', 'observarse', 'observarme'], texto: 'Te observas detenidamente. Quizá buscas en tu reflejo alguna respuesta que todavía no has encontrado.' },
{ verbos: ['guinar', 'guinar el ojo', 'parpadear'], texto: 'Guiñas un ojo con cierta picardía. No sé si pretendes resultar convincente, pero tendrás que esforzarte un poco más.' },
{ verbos: ['toser', 'carraspear', 'aclararse la garganta'], texto: 'Carraspeas para llamar la atención. Adelante, ya te estamos escuchando.' },
{ verbos: ['estornudar', 'achis'], texto: 'Estornudas con fuerza. Por una vez, algo escapa completamente a tu voluntad.' },
{ verbos: ['sangrar', 'sangrarme'], texto: 'Observas cómo una pequeña herida empieza a sangrar. No parece que sea el mejor momento para descuidarte.' },
{ verbos: ['morderse', 'morderme', 'morder'], texto: 'Te muerdes el labio, intentando contener los nervios. Ese pequeño gesto te delata.' },
{ verbos: ['pellizcarse', 'pellizcarme', 'pellizcar'], texto: 'Te das un pellizco para comprobar que no estás soñando. Por desgracia, la realidad sigue ahí.' },
{ verbos: ['temblar', 'estremecerse', 'estremecerme'], texto: 'Tu cuerpo empieza a temblar ligeramente. No hace falta que disimules; el miedo también tiene su propio lenguaje.' },
{ verbos: ['sudar', 'sudarme', 'transpirar'], texto: 'Notas cómo empiezas a sudar. Parece que la situación te está afectando más de lo que quieres admitir.' },
{ verbos: ['enfadarse', 'enfadarme', 'cabrearse', 'cabrearme', 'indignarse'], texto: 'Te enfadas y aprietas los dientes. Puedes indignarte todo lo que quieras; eso no va a resolver nada.' },
{ verbos: ['calmarse', 'calmarme', 'tranquilizarse', 'relajarse'], texto: 'Intentas tranquilizarte respirando profundamente. Así está mejor. Mantén la calma.' },
{ verbos: ['pensar', 'reflexionar', 'meditar', 'razonar'], texto: 'Te detienes a pensar. Una costumbre que deberías practicar con mayor frecuencia.' },
{ verbos: ['recordar', 'acordarse', 'rememorar'], texto: 'Intentas recordar los últimos acontecimientos. La memoria es caprichosa, pero conviene que no olvides lo importante.' },
{ verbos: ['olvidar', 'olvidarse', 'despistarse'], texto: 'Intentas olvidar lo sucedido. Qué sencillo sería todo si bastara con proponérselo.' },
{ verbos: ['imaginar', 'fantasear', 'sonar', 'sonar despierto'], texto: 'Dejas volar la imaginación. Ten cuidado: las fantasías no siempre son un buen refugio.' },
{ verbos: ['quejarse', 'quejarme', 'protestar', 'reclamar'], texto: 'Empiezas a quejarte. Puedes continuar si eso te hace sentir mejor, aunque dudo que sirva de mucho.' },
{ verbos: ['obedecer', 'acatar', 'cumplir'], texto: 'Decides obedecer. A veces aceptar las circunstancias requiere menos esfuerzo que luchar contra ellas.' },
{ verbos: ['negarse', 'negarme', 'rechazar', 'oponerse', 'resistirse'], texto: 'Te niegas a aceptar la situación. Veo que todavía conservas cierto espíritu de resistencia.' },
{ verbos: ['confesar', 'confesarme', 'admitir', 'reconocer'], texto: 'Te dispones a confesar. No tengas miedo de las palabras; a veces decir la verdad es lo único que queda.' },
{ verbos: ['mentir', 'enganar', 'disimular', 'fingir'], texto: 'Intentas disimular y fingir que todo está bien. No te esfuerces demasiado: no resulta especialmente convincente.' },
{ verbos: ['rezar', 'orar', 'suplicar', 'implorar'], texto: 'Juntas las manos y empiezas a rezar. Nunca está de más buscar ayuda, aunque quizá deberías haberlo pensado antes.' },
{ verbos: ['maldecir', 'blasfemar', 'insultar'], texto: 'Dejas escapar una retahíla de improperios. Procura controlar ese vocabulario.' },
{ verbos: ['escupir', 'escupirme', 'escupirse'], texto: 'Escupes al suelo. Un gesto poco elegante que no mejora precisamente tu imagen.' },
{ verbos: ['rascar', 'aranar', 'aranarse', 'aranarme'], texto: 'Te arañas distraídamente la piel. Parece que necesitas descargar la tensión de alguna manera.' },
{ verbos: ['abrazarse', 'abrazarme', 'abrazar'], texto: 'Te rodeas el cuerpo con los brazos en un intento de encontrar algo de consuelo.' },
{ verbos: ['masturbarse', 'masturbarme', 'masturbar', 'hacerse una paja', 'hacerme una paja', 'hacer una paja'], objetos: ['ducha'], texto: 'Decides masturbarte con la ducha. Hoy la presión del agua es idónea y no tardas en tener un orgasmo.' },
    { verbos: ['masturbarse', 'masturbarme', 'masturbar', 'hacerse una paja', 'hacerme una paja', 'hacer una paja'], texto: 'Decides masturbarte. Parece que has encontrado una manera bastante particular de distraerte de tus problemas.' },
{ verbos: ['pajear', 'pajearse', 'pajearme', 'pajearte', 'hacerse una manuela', 'hacerme una manuela', 'hacerse una paja'], texto: 'Te dispones a hacerte una paja. Al menos parece que has encontrado algo con lo que entretenerte.' },
    { verbos: ['cascarsela', 'cascarmela', 'pelarsela', 'pelarmela'], texto: 'Decides aliviar tensiones por tu cuenta. No parece que tengas demasiada prisa por continuar.' },
{ verbos: ['excitarse', 'excitarme', 'calentarse', 'calentarme'], texto: 'Te dejas llevar por tus pensamientos y empiezas a excitarte. Parece que tu imaginación trabaja a pleno rendimiento.' },
{ verbos: ['lavarse', 'lavarme', 'asearse', 'asearme', 'ducharse', 'ducharme'], texto: 'Decides asearte. Una buena higiene siempre es recomendable, incluso en las circunstancias más extrañas.' },
{ verbos: ['escuchar', 'escucharme', 'prestar atencion'], texto: 'Agudizas el oído y prestas atención. Por fin parece que has decidido escuchar en lugar de hacer lo que te viene en gana.' },
    { verbos: ['encender', 'enciende'], estancia: 'cocina', objetos: ['cafetera'], texto: 'Enciendes la cafetera', fuera: 'No ves ninguna cafetera por aquí.' },
    { verbos: ['encender', 'enciende'], estancia: 'cocina', objetos: ['cafetera'], texto: 'Ya está encendida.', fuera: 'No ves ninguna cafetera por aquí.' },

    //TV
    { verbos: ['encender', 'enciende', 'poner', 'conectar', 'activar'], estancia: 'salon',
  objetos: ['television', 'tele', 'tv', 'televisor'],
  texto: 'Coges el mando y enciendes la televisión. La pantalla se ilumina.',
  imagen: 'video/prueba.mp4', titulo: 'Televisión',
  pista: 'Escribe «apagar televisión» o «cerrar» para volver a ver la estancia.',
  fuera: 'No ves ninguna televisión por aquí.' },
{ verbos: ['apagar', 'apaga', 'desconectar'], estancia: 'salon',
  objetos: ['television', 'tele', 'tv', 'televisor'],
  texto: 'Apagas la televisión.', cerrarVista: true,
  fuera: 'No ves ninguna televisión por aquí.' },
    //baño
    { verbos: ['mirarse', 'mirar', 'observar'], estancia: 'bano', objetos: ['espejo'], texto: 'Te observas detenidamente en el espejo. Tu reflejo te devuelve una mirada algo cansada.', fuera: 'No ves ningún espejo por aquí.' },
    
    //Terraza
    {
  verbos: ['mirar balcón', 'mirar calle', 'observar calle', 'observar calle', 'asomar balcón', 'observar balcón', 'asomar barandilla', 'mirar barandilla', 'ver calle'],
  estancia: 'terraza',
  texto: 'Te asomas por el balcón. Se trata de una calle bastante transitada. La gente parece caminar sin preocupación alguna. Qué afortunados. Vas a la cocina y vuelves a la terraza con un huevo. Si lo lanzas, ¿alterarás la fortuna de algún viandante? ',
  fuera: 'No estás en la terraza.'
},
        {
  verbos: ['tirar', 'lanzar', 'arrojar'],
  estancia: 'terraza',
            objetos: ['huevo'],
           imagen: 'img/Huevo.png',  
  texto: 'Dejas caer el huevo por el balcón. Que le da... que le da... ¡Ostras! ¡has hecho diana en la cabeza de un calvo! Con lo que te gustan los calvos con barba... Lo que acabas de hacer está muy mal. Deberían castigarte por ello.',
  fuera: 'No estás en la terraza.'
},


    // MEAR SIN OBJETO
{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  texto: 'Te acercas al inodoro, levantas la tapa y haces pis. Hmmmm... qué bien te sientes. Después tiras de la cadena. ',
  fuera: 'No hay ningún inodoro por aquí.'
},

// CAGAR SIN OBJETO
{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  texto: 'Te sientas en el inodoro y haces tus necesidades. Después tiras de la cadena. Todo correcto. Te sientes mejor. Y hasta aquí la descripción de lo que acabas de hacer. ',
  fuera: 'No hay ningún inodoro por aquí.'
},

// MEAR EN OBJETOS CONCRETOS
{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  objetos: ['ducha'],
  texto: 'Aunque no es el lugar apropiado para ello, decides mear en la ducha. Cosas peores has hecho.',
  fuera: 'No hay ninguna ducha por aquí.'
},

{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  objetos: ['lavabo'],
  texto: 'Decides mear en el lavabo. No parece una decisión especialmente acertada. Alguien debería obligarte a limpiarlo con la lengua, cerda.',
  fuera: 'No hay ningún lavabo por aquí.'
},

{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  objetos: ['suelo'],
  texto: 'Sin preocuparte demasiado por las consecuencias, decides mear directamente en el suelo del baño. Alguien debería obligarte a limpiarlo con la lengua, cerda.',
  fuera: 'No hay ningún suelo por aquí.'
},

// CAGAR EN OBJETOS CONCRETOS
{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  objetos: ['ducha'],
  texto: 'Decides hacer tus necesidades en la ducha. A ti, y solo a ti, se le podría ocurrir hacer algo así. No tienes remedio.',
  fuera: 'No hay ninguna ducha por aquí.'
},

{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  objetos: ['lavabo'],
  texto: '¿De verdad quieres cagar en el lavabo? Estás fatal...',
  fuera: 'No hay ningún lavabo por aquí.'
},

{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  objetos: ['suelo'],
  texto: 'Te agachas y haces tus necesidades directamente en el suelo del baño. La escena es bastante desagradable.',
  fuera: 'No hay ningún suelo por aquí.'
},
    // Mazmorra hasta la linea 571

    
// MESA

  // CUERDAS

  // CADENAS

  // LÁTIGO

  // FUSTA

  // VARA

  // VELAS

  // HIELO

  // VENDA

  // CAPUCHA

  // MORDAZA

  // BOZAL

  // JAULA

  // CEPO

  // BANCO

  // POTRO

  // CUBO

  // JARRA

  // CUENCO

  // COMEDERO

  // AGUA

  // ESPEJO

  // PLUMAS

  // CAMPANA

  // DADOS

  // RULETA

  // PLUG

  // ACEITE

  // CONSOLADOR

  // MIEL

  // SAL

  // LIMÓN

  // AGUJA

  // TINTA

  // ETIQUETAS

  // PAJA

  // SACO

  // POLEA

  // ANILLAS

  // CORREA

  // CASTIDAD

  // BIZARRO

    
    
{ verbos: ['ducharse', 'duchar', 'ducharme', 'bañarse'], estancia: 'bano', texto: 'Abres el grifo y te das una ducha. El agua caliente te ayuda a relajarte durante unos minutos.', fuera: 'No ves ninguna ducha por aquí.' },
{ verbos: ['lavarse', 'lavar','lavarme'], estancia: 'bano', texto: 'Abres el grifo, te enjabonas las manos y las aclaras cuidadosamente.', fuera: 'No tienes ningún lavabo a mano.' },
{ verbos: ['cepillarse', 'cepillar', 'cepillarme'], estancia: 'bano', objetos: ['dientes', 'cepillo dientes'], texto: 'Coges el cepillo de dientes y te los limpias durante un par de minutos.', fuera: 'No tienes ningún cepillo de dientes por aquí.' },
{ verbos: ['peinarse', 'peinar','peinarme'], estancia: 'bano', texto: 'Te pasas el peine por el cabello intentando poner un poco de orden.', fuera: 'No encuentras ningún peine por aquí.' },
{ verbos: ['abrir', 'destapar'], estancia: 'bano', objetos: ['grifo', 'grifos'], texto: 'Abres el grifo. El agua empieza a correr por el lavabo, deslizándose sin prisa hacia el desagüe. Te quedas observándola mientras desaparece, incapaz de retener ni una sola gota. Piensas que la vida se parece bastante a ese pequeño espectáculo: los minutos se escurren ante tus ojos, uno detrás de otro, y tú permaneces inmóvil, contemplando cómo se pierden. Quizá algún día comprendas que el tiempo, como el agua, no regresa una vez que se ha ido. ', fuera: 'No ves ningún grifo por aquí.' },
{ verbos: ['cerrar', 'cortar'], estancia: 'bano', objetos: ['grifo', 'grifos'], texto: 'Cierras el grifo y el agua deja de correr. ', fuera: 'No ves ningún grifo por aquí.' },
{ verbos: ['secarse', 'secar'], estancia: 'bano', texto: 'Coges la toalla y te secas cuidadosamente', fuera: 'No encuentras ninguna toalla por aquí.' },
    { verbos: ['limpiar', 'limpia'], estancia: 'bano', objetos: ['inodoro', 'taza', 'wc'], texto: 'Te pones de rodillas y limpias el borde de la taza con la lengua. Ojalá hubiera alguien que te sujetara la cabeza para que no pudieras levantarla. Sigue limpiando...', fuera: 'No ves ningún inodoro por aquí.' }
  ],
  /* Puzzle de ajedrez. `soluciones`: jugadas ganadoras en minúsculas, «origen destino». */
  ajedrez: {
    imagen: 'img/tablero.png',
    soluciones: ['c5 f2'],
    descripcion: 'Una partida de ajedrez a medias. Puedes ganar con un solo movimiento. Escribe la jugada con la casilla de origen y la de destino, por ejemplo «A2 B3».',
    fallo: 'Ese movimiento no te da la victoria. Devuelves las piezas a su sitio.',
    exito: 'Mueves la pieza y la partida queda ganada. Al apoyar la mano en el mueble, el tablero cojea: hay algo debajo. Lo levantas y encuentras una llave.',
    yaResuelto: 'Ya has ganado esta partida.'
  },
  /* Imágenes de objetos: se muestran en el visor al examinarlos («cerrar» vuelve a la estancia). */
  imagenesObjetos: { caldera: 'img/contador.png', cuadro: 'img/cuadro.png', inodoro: 'img/inodoroA.png', toallas: 'img/satis.png', libro: 'img/libro.png' },
  /* Objetos que se pueden coger («coger [objeto]»). */
  cogibles: [
    { item: 'libro', nombres: /libro|perversion|emily/, estancia: 'salon',
      texto: 'Coges «Las perversiones de Emily» de la biblioteca.', yaTienes: 'Ya tienes el libro contigo.' },
    { item: 'vaso con hielo', nombres: /cubito|hielo/, estancia: 'cocina', requiere: 'congelador',
      bloqueado: 'No ves hielo a mano. Quizá en el congelador.', fuera: 'No ves ningún hielo por aquí.',
      texto: 'Coges los dos cubitos y los metes en un vaso.', yaTienes: 'Ya tienes el vaso con hielo.' },
    { item: 'calabacín', nombres: /calabac/, estancia: 'cocina',
      texto: 'Coges un calabacín de la nevera.', yaTienes: 'Ya tienes el calabacín.' },
    { item: 'rotulador', nombres: /rotulador/, estancia: 'habitacion', requiere: 'cajon',
      bloqueado: 'El cajón está cerrado con llave.', texto: 'Coges el rotulador del cajón.', yaTienes: 'Ya tienes el rotulador.' },
        { item: 'pastilla', nombres: /pastilla|pildora/, estancia: 'habitacion',
      texto: 'Coges la pastilla de la cómoda.', yaTienes: 'Ya tienes la pastilla.', fuera: 'No ves ninguna pastilla por aquí.' },

    /* CORREGIDO: faltaba `fuera`, y la indentación lo dejaba fuera de la lista a la vista. */
    { item: 'satisfyer', nombres: /satisfyer/, estancia: 'bano',
      texto: 'Coges el satisfyer.', yaTienes: 'Ya tienes el satisfyer.', fuera: 'No ves ningún satisfyer por aquí.' }
  ],
  verduras: ['huevos', 'leche', 'queso', 'una bandeja de pollo', 'zanahorias', 'judías verdes', 'tomates', 'un calabacín', 'pimientos'],
  /* Un final por cada valor del contador (0-4) y el de las consecuencias (5).
     CORREGIDO: los finales 1-4 estaban sin escribir. Reescríbelos a tu gusto. */
  finales: [
   `Te quedas mirando la pantalla del ordenador. El último mensaje sigue ahí, iluminando la habitación con una luz fría y desagradable. Durante unos segundos piensas en las consecuencias: qué podría hacer con tus fotografías, a quién podría enviárselas, qué ocurriría si decides no obedecer.

Pero hay algo que tienes claro: no vas a negociar con alguien que te está amenazando. Tampoco vas a esperar a descubrir hasta dónde está dispuesto a llegar.

Coges el teléfono y marcas el número de la policía.

Explicas lo sucedido. Enseñas los mensajes, las amenazas y todo aquello que pueda servir para identificar a la persona que está detrás de ellos. Te indican cómo proceder y te recomiendan conservar las conversaciones, no borrar nada y no responder a nuevas exigencias.

Cuando cuelgas, el miedo no ha desaparecido. Tampoco sabes qué ocurrirá mañana. Pero has conseguido algo importante: has dejado de enfrentarte a la situación en solitario y has puesto los hechos en conocimiento de quienes pueden investigar lo sucedido.

La extorsión se alimenta del silencio, de la vergüenza y de la sensación de que ya es demasiado tarde para pedir ayuda. Pero no tienes que esperar a que publiquen tus fotografías, a que contacten con tus conocidos o a que las amenazas se conviertan en algo peor.

No necesitas demostrar hasta dónde puede llegar alguien para tener derecho a denunciar lo que ya está haciendo.

Apagas la pantalla. Por primera vez en toda la noche, el siguiente movimiento ya no depende de quien te amenaza. Has ganado la partida`,
    `Miras la pantalla del ordenador. Has cumplido una de sus exigencias. Quizá pensabas que, si cedías una sola vez, todo terminaría. Que conseguirías ganar tiempo, que se daría por satisfecho o que entendería que no quieres problemas.

Pero apenas unos minutos después llega otro mensaje.

Una nueva petición. Una nueva amenaza. Esta vez exige algo más.

Entonces comprendes que no había ningún trato, ninguna negociación posible. La primera concesión no ha servido para detenerlo, sino para demostrarle que puede conseguir lo que quiere mediante el miedo.

Te sientes engañada, vulnerable y enfadada contigo misma. Pero no tienes por qué seguir cediendo. Haber aceptado una exigencia no significa que hayas perdido el derecho a poner límites ni a pedir ayuda.

Cierras la conversación, guardas las pruebas y decides que no habrá una segunda concesión. Coges el teléfono y contactas con la policía para denunciar lo ocurrido.

Quizá habría sido mejor hacerlo antes. Pero todavía estás a tiempo.

La extorsión no se convierte en un acuerdo porque hayas cedido una vez. Tampoco eres responsable de las amenazas de quien pretende aprovecharse de ti.

Apagas el ordenador. Esta vez no vas a responder a su siguiente mensaje. Tu partida acaba aquí. `,
    'Dos pruebas. El hielo, el vídeo, la cara que pones cuando algo te sale bien y crees que has terminado. Él no te saca de dudas: «Mañana seguimos». Y tú ya estás pensando qué te pondrá.',
    'Tres. Ya no discutes, ya no preguntas por qué. Cumples y esperas la siguiente orden como quien espera el café de la mañana. Cuando él escribe «bien», te sorprendes sonriendo sola.',
    'Cuatro pruebas y ni una queja. El vídeo del calabacín, el rotulador, el brazo escrito. Él tarda en contestar y tú miras el móvil cada dos minutos. Cuando por fin llega el mensaje, solo dice: «Falta lo importante».',
    'Has dejado abierta la puerta de tu casa, te has puesto una venda en los ojos y estás de rodillas junto a la cama. Pasado un rato oyer la puerta cerrarse. Alguien entra en la habitación. Sientes su presencia. Está justo enfrente de ti. Oyes como se desabrocha el pantalón y una voz que te dice -voy a hacer contigo cosas peores de las que aparecen en las fotos. Abre la boca-. Abres la boca... Has perdido la partida.'
  ]
};
