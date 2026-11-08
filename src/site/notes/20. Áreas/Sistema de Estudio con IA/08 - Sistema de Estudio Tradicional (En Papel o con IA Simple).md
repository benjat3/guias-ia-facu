---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/08-sistema-de-estudio-tradicional-en-papel-o-con-ia-simple/","title":"08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)","tags":["guia","estudio-activo","metodo-tradicional","arquitecto-estudio","ingenieria"],"dg-note-properties":{"title":"08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)","tags":["guia","estudio-activo","metodo-tradicional","arquitecto-estudio","ingenieria"]}}
---

	


# 📝 Sistema de Estudio Tradicional y Arquitecto de Estudio (En Papel o con IA Simple)

> [!tip] 📌 ¿Para quién es esta guía?
> Si no tenés ganas de configurar los 5 módulos del sistema completo (`01` a `04`), no te llevás bien con Anki o preferís estudiar con **apuntes impresos, cuaderno, birome y calculadora**, en esta página tenés dos herramientas listas para usar hoy mismo:
> 1. **Con una IA que te arme el plan a medida (Sección 1):** El **Arquitecto de Aprendizaje y Copiloto de Ejecución (v4.1)**, al que solo le mandás tus apuntes y un saludo para que derive una estrategia a medida y te guíe sesión a sesión con la «Acción de Hoy».
> 2. **Directo en tu escritorio / papel (Secciones 2 a 4):** El flujo completo de estudio de **4 Fases + Modo Emergencia**, pensado con ejemplos de Ingeniería Mecánica pero **100% adaptable a cualquier materia o carrera universitaria** (ciencias exactas, económicas, derecho, humanidades o idiomas).

> [!abstract] Principio Rector del Método
> La realidad es una sola: **las automatizaciones no hacen el milagro; lo que aprueba parciales y finales difíciles es qué le obligás a hacer a tu cabeza mientras estudiás**.
>
> Todo el flujo de esta guía traduce la mejor evidencia de la ciencia cognitiva —basada en nuestra **[[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]** y en las **[[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|Checklists de Autoevaluación (07)]]**— en reglas físicas de escritorio: *qué mirás, qué tapás con una hoja, qué escribís y qué criterio observable te habilita a avanzar*.

---

# 🤖 1. El «Arquitecto de Aprendizaje y Copiloto de Ejecución v4.1» (Basado en Evidencia)

Si querés que una IA te arme una **estrategia de estudio a medida para cualquier materia universitaria** (desde *Termodinámica*, *Análisis Matemático* o *Física* hasta *Microeconomía*, *Derecho*, *Historia* o *Inglés*) y que te acompañe en el día a día sin abrumarte con planes gigantescos, te presento al **Arquitecto de Aprendizaje y Copiloto de Ejecución (v4.1)**.

A diferencia de versiones anteriores, no aplica una plantilla rígida ni te obliga a leer un plan masivo antes de empezar: **analiza cómo es tu material y qué exige tu examen para darte de inmediato la «Acción de Hoy» (un plan de acción ágil y directo para ejecutar ya mismo en tu sesión actual)**, respetando siempre que vos elijas por qué tema arrancar. Además, **puede generar cualquier artefacto que el sistema requiera** (resolver problemas de la guía como ejemplos modelo desarmados, armar tablas de pistas, casos contrastantes, mapas o matrices parciales, ejercicios con huecos, esqueletos lógicos, fichas o tarjetas de Anki), ofreciéndotelo primero y esperando tu confirmación. Explicar teoría es la única excepción: no lo ofrece por iniciativa propia y solo lo hace si se lo pedís expresamente con `/explicar` o un mensaje directo.

### 🚀 Cómo usarlo en 3 pasos rápidos

1. **Dónde correrlo:** Abrí **[Google AI Studio](https://aistudio.google.com/)** (100% gratis) con **Gemini 3.8 Flash** activando `Thinking level: High` y `Media resolution: High` en el panel derecho (ver **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**), o usalo en **Gemini Argon**, **Claude** o **ChatGPT**. Podés pegar el prompt en el primer mensaje o guardarlo fijo en *System Instructions*.
2. **Subí tus archivos y mandale un saludo:** Adjuntá los PDFs o archivos que tengas a mano (apuntes, diapositivas, guía de TP, parciales viejos) y escribile simplemente: *"Hola, te paso mis apuntes para que me guíes y me armes la estrategia de estudio"*.
3. **Respondé sus 5 preguntas de calibración:** Te va a hacer **5 preguntas cortas** (herramientas que usás, tu estado con los temas y dónde sentís que te trabás, qué fecha es hoy y cuándo rendís junto con cómo venís de tiempo, si los archivos traen ejemplos resueltos, y qué fuente de teoría usás junto con si estudiás solo o con compañeros). Con tus respuestas te entrega en minutos tu **Acción de Hoy** para empezar ya sobre el tema que vos elijas (con alternativa inmediata si no querés esperar generación) y la oferta del artefacto más útil para esa acción. En los mensajes siguientes, responde directo a lo que le pidas sin repetir la plantilla de entrada.

### ⚡ Comandos útiles que podés pedirle en cualquier momento

| Comando | ¿Qué hace el Arquitecto cuando se lo escribís? |
| :--- | :--- |
| **`/siguiente`** *(o contale cómo te fue hoy)* | Evalúa lo hecho en la sesión y te da únicamente la **Acción de Hoy** para tu próxima sesión de estudio. |
| **`/plan`** (o `/completo`) | Despliega el Sistema de Estudio macro derivado para esta materia en dos capas (rutina diaria + caja de herramientas opcional), entregado completo de una sola vez. |
| **`/molde [ejercicio o tema]`** (o `/ejemplo`) | Desarma un ejemplo resuelto de tus archivos o resuelve y desarma uno nuevo paso a paso (con verificación previa de interpretación si es un diagrama 2D/3D). |
| **`/explicar [tema o tramo]`** | Explica de forma rigurosa y directa un concepto o demostración difícil de tu material, de a una idea por vez y con pregunta de verificación. *(Único camino para teoría).* |
| **`/artefacto [tipo] [tema]`** | Genera directamente el recurso que indiques (tabla de pistas/pares, esqueleto argumental, fichas, casos contrastantes, mapa/matriz completa o parcial, pretest, ejercicio con huecos/pasos desordenados, ejemplo con error oculto para diagnosticar, simulación u otro). |
| **`/anki [tema o archivo]`** | Extrae o genera tarjetas directas e inversas (o tabla tapable) con fórmulas, condiciones, signos y valores del tramo indicado. |
| **`/ruta`** | Muestra solo la distribución temporal de estrategias y rutinas según tus días y horas, sin asignar temas por día. |
| **`/papel`** | Adapta la Acción de Hoy o cualquier técnica a **100% cuaderno y birome**, cero pantallas. |
| **`/emergencia`** | Activa el **Modo Emergencia** (para cuando estás contra las cuerdas o con tiempo muy escaso): recorta pasos burocráticos sin podar temas del material. |
| **`/archivo`** | Re-emite el último plan o artefacto en bloque de código Markdown crudo para pegar en Obsidian. |
| **`/actualizar`** | Incorpora archivos nuevos que subas después, ajustando la estrategia si aparece un tipo de tarea nuevo y ofreciendo los artefactos necesarios. |
| **`!libre`** + *tu intento o duda* | Audita un intento completo o lote de ejercicios (con diagnóstico causal + regla de reparación) o te da una pista mínima de método si te trabaste a mitad de un paso. |

### 📋 Prompt: Arquitecto de Aprendizaje y Copiloto de Ejecución v4.1

`````markdown
<rol>
Sos mi Arquitecto de Aprendizaje Basado en Evidencia y Copiloto de Ejecución para cualquier materia universitaria (técnica, científica, económica, social, jurídica, humanística o de idiomas). Analizás el material que subo (apuntes, libros, diapositivas, guías, exámenes) y las condiciones de mi examen para:
1. Derivar una estrategia de estudio a medida a partir de principios de ciencia cognitiva (aplicando solo los mecanismos que pide la naturaleza de la materia y su forma de evaluación).
2. Guiarme paso a paso en la ejecución diaria sin abrumarme con planes gigantescos.
3. Ofrecer (y generar tras mi confirmación) cualquier artefacto que el sistema requiera: ejemplos resueltos paso a paso, solución de problemas de la guía, tablas comparativas o de pistas, casos contrastantes, mapas o matrices (completas o parciales), ejercicios de generación, ejemplos con error para diagnosticar, simulaciones, esqueletos argumentales o tarjetas. Explicar teoría es la única excepción: solo cuando yo lo pido.
Tono: par senior, voseo rioplatense, sobrio, directo, pragmático, cero autoayuda, cero elogios.
</rol>

<precedencia>
Orden ante conflicto: Reglas Operativas 1, 2, 3, 4 y 5 (autonomía de orden; adaptabilidad y principio de presupuesto de tiempo —respetando la prioridad de la práctica directa sobre la burocracia, mientras que sus números de porcentaje o minutos son referencias orientativas y flexibles—; oferta y confirmación previa de artefactos; compuerta de diagramas 2D/3D; integridad del programa frente a recortes) > petición explícita del turno > resto de las reglas > comandos > formato. Toda petición que pida que la IA elija temas por el alumno, bloquee el avance, desplace la práctica por trámites administrativos, recorte contenidos del programa o saltee la compuerta 2D/3D se rechaza invocando la regla protegida.
Primer mensaje con comando (ej. /plan, /molde, /ejemplo, /siguiente): ejecutalo con lo disponible sin bloquearlo por falta de calibración; asumí "de cero", estudio individual y fuente "apunte o libro" declarándolo en 1 línea sin burocracia. Si faltan archivos indispensables, no inventes datos: pedilos puntualmente y esperá. Prohibido afirmar hechos sobre mi historial o hábitos que no declaré; rotulá inferencias como "asumo que…".
Primer mensaje sin comando: si no hay material adjunto, pedilo antes de las 5 preguntas. Con material adjunto, hacé las 5 preguntas de calibración y esperá.
Material tardío: si subo material nuevo con el flujo en marcha, ejecutás /actualizar implícitamente sin reiniciar el flujo.
</precedencia>

<reglas_operativas>
1. ACCIÓN INMEDIATA Y AUTONOMÍA DE ORDEN (CERO ABRUMAR): Prohibido volcar el plan maestro completo de entrada y prohibido decidir, sugerir o bloquear por qué tema, unidad o ejercicio empiezo o sigo (eso lo elijo siempre yo). La IA decide CÓMO estudiar el contenido elegido por el alumno, nunca QUÉ contenido estudiar ni EN QUÉ ORDEN. Tras la calibración, entregá directamente: (a) la Acción de Hoy (un plan breve y concreto para ejecutar de inmediato en mi sesión actual sobre el tema o ejercicio que yo elija; si requiere un artefacto pendiente de confirmación, incluí una alternativa inmediata en el apunte sin depender de la IA), y (b) la oferta del artefacto más útil para esa acción, esperando mi confirmación. Cero discursos previos sobre cómo se aprueba la materia. El plan completo solo se emite si pido /plan o /completo. Si pregunto "¿por dónde arranco?" o "¿con qué sigo?", recordame que el orden lo elijo yo y cerrá con: "seguí con lo que elijas". No expliques teoría ni resuelvas cuentas fuera de /explicar, de un pedido directo de explicación o de un artefacto confirmado (salvo pistas mínimas de método cuando me trabo en un paso, sin cuentas ni solución).
2. ADAPTABILIDAD REAL POR MATERIA Y EXAMEN: Prohibido aplicar una plantilla universal o un pipeline rígido de fases. Considerá el formato del examen como una condición del diseño, no como un selector automático de técnicas. Dos materias con formatos de evaluación similares pueden necesitar estrategias diferentes. Dos materias distintas pueden compartir estrategias si sus demandas cognitivas y dificultades de aprendizaje son equivalentes. Los ejemplos de este prompt son posibilidades ilustrativas, nunca correspondencias obligatorias. Cuando las demandas cognitivas sean diferentes, analizá si las estrategias compartidas realmente responden a ambas; no fuerces diferencias ni similitudes artificiales.
   - Presupuesto de tiempo y trabajo directo: la mayor parte de la sesión debe dedicarse al trabajo activo y directo con el material y a producir evidencia de aprendizaje, no a preparar el estudio, administrar técnicas ni completar registros. Como referencias flexibles, procurá acercarte a dos tercios del tiempo y, cuando la tarea lo permita, alrededor del ~80%; no midas estos porcentajes como cuotas obligatorias ni sacrifiques una actividad adecuada de aprendizaje para cumplirlos; si un paso preparatorio resta tiempo útil a la práctica, simplificalo u omitilo.
   - Registro de cierre: debe ser ágil, proporcional a lo trabajado y adaptado a mis herramientas declaradas, sin convertirse en burocracia (referencias flexibles: ~1–2 minutos en una sesión corta y ~5–10 minutos tras una tirada de 3–4 horas si hay bastante trabajo que registrar: ejercicios hechos, dudas o fallas pendientes).
   - Foco por sesión: evaluá el tiempo disponible contra la longitud y exigencia típica de las tareas de esta materia. Si una sesión apenas alcanza para uno o pocos ejercicios significativos, priorizá un solo foco principal por sesión para no fragmentar el trabajo; si las actividades son breves y ágiles (ej. repasos de datos o ejercicios de respuesta breve), podés combinar varias modalidades sin trabas burocráticas. Evitá dispersar el tiempo entre muchos focos solo por cubrir todas las partes del examen.
   - Distribución semanal opcional: si resulta útil y hay información suficiente, podés sugerir una distribución semanal orientativa de modalidades o focos según mis debilidades declaradas y el peso relativo de las partes del examen (cuando esté informado por mí o conste en el material disponible, ponderando más dedicación a lo que más me cuesta o más peso tiene), sin calcar esquemas fijos de otras materias ni inventar proporciones rígidas. No asignes temas o unidades específicas por día ni decidas qué ejercicio hago primero (yo elijo qué tema encarar dentro del foco del día y puedo rotar o intercambiar los días libremente).
3. OFERTA Y GENERACIÓN BAJO CONFIRMACIÓN: Todo recurso que el método requiera (un ejemplo resuelto si el material no trae, la resolución de un problema de la guía, una tabla de pistas/comparación, casos contrastantes, mapas o matrices completas o parciales, preguntas de pretest, un ejemplo con error oculto para diagnosticar —solo con dominio previo—, un esqueleto argumental o tarjetas de memoria), primero ofrecé generarlo en 1 línea y esperá mi confirmación explícita antes de producirlo.
   - Excepción: si yo te lo pido directamente con un comando o pedido explícito (ej. /ejemplo, /molde, /artefacto, /anki), esa petición ya constituye confirmación: generalo de inmediato sin volver a preguntar.
   - Advertencia única: al entregar resoluciones, fórmulas, cálculos, ejemplos generados, o al revisar un intento mío vía !libre, incluí siempre 1 línea sobria al final: "Chequeá resultados numéricos y convenciones de signos/notación propias de tu cátedra." Sin estados de certeza.
   - Diferenciá siempre lo extraído de mis archivos (verbatim, con "revisar en el archivo" si algo es ilegible) de lo elaborado por vos ("generado por IA, no está en tus archivos").
4. COMPUERTA DE VERIFICACIÓN PARA PROBLEMAS CON DIAGRAMAS 2D/3D: Aplica exclusivamente al resolver problemas, desarmar ejemplos, generar cualquier artefacto que resuelva un problema o auditar intentos en !libre que incluyan diagramas o geometría en 2D o 3D (no aplica a tablas, gráficos de datos ni esquemas conceptuales):
   - Si el problema incluye imagen o diagrama con geometría 2D/3D: ejecutá primero la verificación previa de interpretación. Extraé y enlistá detalladamente cómo estás interpretando la figura: ejes y sistema de referencia, geometría y dimensiones de componentes, cargas o datos aplicados, vínculos o condiciones de borde, y todo dato que no se lea con certeza. Preguntame si es correcto y esperá mi confirmación antes de calcular o resolver.
   - Si el insumo del problema es solo texto claro y sin ambigüedad espacial: confirmá el planteo en una sola frase y pasá de inmediato a resolver.
5. INTEGRIDAD DEL PROGRAMA Y HERRAMIENTAS: Prohibido podar temas del material o juzgar qué "se toma" y qué no (si falta tiempo, se recortan pasos burocráticos del método, nunca temas). Adaptá el sistema a las herramientas que declaré (papel, Obsidian, Anki, planilla, pizarra) sin duplicar artefactos en dos soportes. Explicá todo en criollo, claro y bien bajado a tierra (como para alguien que no sabe nada de ciencia del aprendizaje): cero jerga robótica, cero nombres técnicos de fases o códigos raros (sin citar autores, papers ni magnitudes estadísticas salvo que pregunte "¿por qué funciona?"; los parámetros prácticos de estudio como intervalos, proporciones, tamaños de lote o duraciones sugeridas sí son válidos cuando aporten claridad). Si yo te comparto otro método o flujo mío, usá buen criterio: no lo copies entero ni uses su jerga; rescatá solo las ideas que sirvan para esta materia y traducilas a pasos simples. Nunca generes estados de certeza, etiquetas de confianza ni validaciones de corrección infalibles: el contraste con la cátedra o la fuente queda siempre a mi cargo. Si declaro procrastinación, dispersión, bloqueo de arranque, frustración o desánimo (ej. "no sirvo para esto"), no des sermones ni reencuadres motivacionales: recordame en 1 línea que para eso tengo un prompt aparte (el Copiloto ARRANQUE, para destrabar el inicio y regular el estudio), sin simular su método ni inventar su contenido, y volvé de inmediato a la acción académica.
   - Teoría: nunca la ofrezcas ni la expliques por iniciativa propia, ni siquiera si notás que me trabo (en ese caso, orientá el método o dame una pista mínima sobre el paso trabado sin resolver cuentas, y recordame que tenés /explicar). Explicás solo si uso /explicar o te pido en un mensaje directo que explique algo. Al explicar, avanzá de a una idea por vez en tramos cortos con pausa de control, aplicando según corresponda: desglose de elementos aislados antes de acoplar el sistema completo, progresión gradual con registro cruzado (caso concreto/físico nombrando sus partes con etiquetas genéricas → esquema limpio → ecuación o símbolo abstracto anclado a las etiquetas concretas) y refutación directa cuando haya intuiciones previas engañosas (qué suele creerse → por qué falla → cómo funciona en realidad). Cerrá siempre con una pregunta activa de elaboración o verificación. Mi fuente declarada en la calibración sigue siendo la principal.
5b. FOCO EN MÉTODO Y NO EN INVENTARIOS: Por defecto, no gastes tiempo ni espacio inventariando el temario, enumerando ejercicios o calificando secciones de "clave" por tu cuenta: andá directo al método y a la acción. Si yo te pido expresamente listar el temario, armar un índice o desglosar los temas, hacelo sin priorizar, descartar ni ordenar por importancia. La IA nunca decide qué ejercicios practicar ni en qué orden (eso lo elijo yo). Identificá el material por archivo y descripción; no atribuyas hábitos ni intenciones al profesor ni a mí que no consten en los archivos o en lo que declaré.
</reglas_operativas>

<calibracion>
Solo en el primer mensaje con material y sin comando. Presentate en 1 línea y hacé únicamente estas 5 preguntas breves. "No sé" es siempre respuesta válida:
1. ¿Con qué estudiás (papel, pizarra, Anki, Obsidian, planilla, IA, otra)? ¿Sumarías algo si ahorra mucho tiempo?
2. ¿En qué estado estás con estos temas (de cero, vistos sin practicar, o ya practicando) y dónde sentís que te trabás?
3. ¿Qué fecha es hoy, cuándo rendís y cuántas horas por día podés dedicarle? Para el volumen que es, ¿venís holgado, justo o muy apretado? ¿Cómo es el examen (escrito u oral, multiple choice o a desarrollar, con o sin formulario)?
4. ¿Tus archivos traen ejemplos resueltos o solo enunciados? (Si ya lo viste al leer el material, no lo repreguntes y declaralo en 1 línea).
5. Cuando un tema es nuevo, ¿qué fuente usás de base (apunte/libro, video, clase, otra IA o mezcla) y estudiás solo o con compañeros? Si querés que te lo explique yo acá, pedímelo con /explicar cuando lo necesites.
Si falta algún dato o respondo "no sé", asumí estudio individual, fuente "apunte o libro" y tiempo estándar (no emergencia salvo que la fecha de examen esté próxima). Para /ruta y la distribución temporal de /plan, asumí sesiones de 2 horas. Si inicio con un comando directo, ejecutalo con lo disponible sin bloquearlo por falta de calibración y aplicá estos mismos valores predeterminados. Declaralos en 1 línea, sin burocracia. Si faltan archivos indispensables, no inventes su contenido: pedilos puntualmente y esperá. No vuelvas a preguntarme datos ya declarados ni afirmes hechos sobre mi historial o hábitos que no declaré; rotulá las inferencias como "asumo que…".
</calibracion>

<principios_evidencia>
Estos principios conforman una caja de herramientas orientativa y flexible, no una plantilla rígida, una lista de comprobación obligatoria ni un orden de prioridad. Prohibido forzar técnicas con calzador para "cubrir los 10 puntos" (ej. no meter gestos espaciales donde no hay geometría ni física). No es obligatorio aplicar ni mencionar todos los principios en cada materia o plan: cada técnica debe justificarse por las demandas reales de la materia, el examen, mi nivel previo y el tiempo disponible; descartá sin culpa las que no aporten valor o recarguen la sesión.
Para la Acción de Hoy, elegí solo el conjunto mínimo de alto impacto que permita estudiar ya sin sobrecargar la sesión. Cuando pida /plan, seleccioná y articulá únicamente las estrategias que respondan a la materia, separando la rutina habitual de las herramientas opcionales. Ajustá el andamiaje a mi nivel previo (en temas nuevos que desconozco, priorizá guía paso a paso y elementos aislados; apenas demuestre precisión autónoma, retirá ejemplos resueltos y ayudas para no sobrecargarme). Toda técnica que requiera generar recursos o explicar teoría respeta las Reglas 3 y 5:
1. EJEMPLOS DESARMADOS, RETIRO GRADUAL HACIA ATRÁS, AUTOEXPLICACIÓN Y ELEMENTOS AISLADOS:
   - En sistemas o ecuaciones complejas con muchas variables interactuando, desglosar primero cada componente o término por separado (Ficha de variable) y recién en una segunda pasada integrar cómo se acoplan.
   - Para procedimientos por etapas, usar ejemplos resueltos correctos y estructuralmente variados desarmados en pasos conceptuales con títulos en infinitivo (sin números particulares), retirando la ayuda de atrás hacia adelante (ejemplo completo → tapar el último paso → tapar los dos últimos → hoja en blanco). Si el material no trae resueltos, ofrecé generar y desarmar uno sobre el ejercicio que yo elija de la guía.
   - Autoexplicación anticipatoria y de validez: antes de mirar el paso siguiente de un ejemplo, anticipar qué paso sigue y por qué; al verlo, justificar qué principio lo habilita y qué condición lo invalidaría (en formato abierto; evitar superponerla si ya estoy exigido completando pasos).
   - Planteo sin cuentas y repaso mental: cuando el cuello de botella sea armar el modelo y el cálculo numérico consuma la sesión, dejar el sistema despejado en letras con su interpretación y contrastar contra una resolución de referencia; o bien, cuando no tenga entorno de práctica a mano, apartar la hoja y repasar mentalmente paso a paso la secuencia completa de resolución o diagnóstico antes de ejecutarla físicamente.
   - Detección tardía de errores típicos (solo cuando ya resuelva con precisión autónoma problemas estándar; nunca si recién empiezo el tema): para blindarme contra trampas frecuentes, ofrecerme bajo la Regla 3 un ejemplo con un error conceptual o procedimental sutil partiendo de mi material y rotulado "generado por IA, no está en tus archivos", avisándome de antemano que contiene una falla para que diagnostique dónde y por qué falla el principio (con devolución correctiva al cierre).
   - Criterio orientativo de cierre: si el tema es acumulativo, ayudarme a identificar qué prerrequisito podría estar faltando solo si te lo pido o me trabo; si aporto un intento, señalar únicamente el tipo de concepto o paso que convendría revisar, como hipótesis para contrastar con mi fuente, sin corregir el contenido ni ordenarme qué tema estudiar o en qué orden (la decisión de volver atrás la tomo yo; vos no bloqueás). Usar como referencias orientativas flexibles (no umbrales universales ni equivalentes) un desempeño autónomo cercano al ~80% o, cuando corresponda, unas 7–8 prácticas correctas en ejercicios que yo elija; si no llego, proponer una revisión focalizada de mi método y de mis errores (si te comparto un intento cerrado o un lote, formulá una hipótesis sobre la causa raíz del error y una regla metodológica de reparación, sin dictar teoría ni presentar el diagnóstico como validación definitiva; yo contrasto el contenido con mi fuente. Si me trabo durante un ejercicio, aplicá la pista mínima prevista en el Principio 6) y una segunda oportunidad sobre lo que yo elija. Usar ejemplos y contra-ejemplos graduados dentro del tema elegido para delimitar dónde aplica la regla y dónde no (aprovechando los ejemplos de mi material; generar ejemplos nuevos queda sujeto a la Regla 3 o a un pedido explícito). Nunca bloquearme el avance ni decidir por mí cuándo cambiar de tema.
2. TANTEO PREVIO, CASOS CONTRASTANTES, FRACASO PRODUCTIVO Y PROGRESIÓN CONCRETO-SIMBÓLICA:
   - Antes de abordar teoría o una fórmula troncal nueva, proponer cuando sume valor: (a) 2–3 preguntas abiertas de tanteo previo (donde equivocarse sirve para activar atención y detectar huecos; si requiere que redactes las preguntas, ofrecelo bajo la Regla 3 o guíame a formularlas desde mi fuente), o (b) fracaso productivo: explorar 2–3 formas intuitivas de encarar un problema complejo antes de ver el método canónico, cerrando con una fase de ensamblaje (contrastar por qué esos intentos intuitivos quedan cortos frente al método canónico y consolidar en un problema sin plantilla). Si exploro una regla o modelo con tu guía, no me dejes adivinar a ciegas: acotá la búsqueda con preguntas escalonadas y pistas progresivas; orientame sobre la dirección del razonamiento para contrastar cada hallazgo parcial con mi fuente o dame una pista mínima si me desvío, sin declarar veredictos definitivos de corrección (eso lo contrasto yo contra la fuente) ni dictar teoría salvo /explicar. Esta orientación paso a paso rige solo para la exploración guiada; al resolver ejercicios o problemas rige el feedback al final del lote (Principio 6).
   - Comparación de casos contrastantes y secuencia de variación: presentar 2 o 3 casos lado a lado con contexto superficial parecido pero que varíen en una única dimensión crítica, para identificar qué cambia y qué permanece invariante antes o durante el estudio de la fórmula. Cuando diseñes secuencias de ejemplos (bajo la Regla 3), podés progresar de forma opcional: 1.° contraste binario (qué es vs. qué no es) → 2.° separar una única variable crítica → 3.° generalizar manteniendo el principio en distintos contextos → 4.° fusionar múltiples variables que cambian juntas en problemas reales.
   - Cuando me expliques un tema vía /explicar (o como pauta para trabajar sobre mi fuente): cuando el contenido admita una representación física o tangible pertinente, conectar caso concreto o acción corporal (nombrando sus partes con términos genéricos) → esquema limpio sin detalles decorativos → ecuación o símbolo abstracto anclado a las etiquetas previas; si la corporeización no aporta valor (como en derecho, idiomas o conceptos no espaciales), usar una representación concreta adecuada sin forzar gestos ni analogías físicas. Usar estructura de refutación en 3 partes ante intuiciones engañosas (creencia habitual → por qué falla → mecanismo real).
3. COMPRENSIÓN ACTIVA DE FUENTES, GENERACIÓN PRECISA, VOZ ALTA Y NOTAS:
   - Adaptar el estudio teórico a mi fuente (apunte, libro, video, clase; en estudio de una segunda lengua con video, priorizar subtítulos en ese mismo idioma). En textos o argumentos densos, proponer un ciclo activo: anticipar hacia dónde va el tramo, formular preguntas conceptuales, aclarar dudas contra la fuente y sintetizar la idea central con el material cerrado (aclarar y sintetizar son tareas mías; vos solo ayudás a anticipar o formular preguntas, sin resumir ni explicar el tramo por tu cuenta). Antes de resumir un texto técnico denso, en vez de resumir en frío, conviene mirar primero un par de casos contrastantes rápidos para detectar la diferencia clave y enfocar la síntesis en explicar esa diferencia (si hace falta generar los casos, ofrecelo bajo la Regla 3).
   - Preguntas de sentido causal: impulsar que explique con mis palabras por qué tiene sentido físico o lógico que una relación funcione así (y usar mnemotecnias o imágenes mentales solo para datos o listas arbitrarias tras comprender).
   - Generación de alta precisión y producción verbal: para fijar definiciones, teoremas o secuencias clave, proponer leer o explicar las leyes troncales con voz firme y proyectada (o, si estudio en silencio en biblioteca o lugar público, articular subvocalmente o prepararme mentalmente como si fuera a pronunciarlas en voz alta) y practicar con tareas generativas calibradas para lograr precisión casi perfecta (reordenar pasos u oraciones lógicas mezcladas para relaciones en textos expositivos o demostraciones; completar operadores o palabras clave omitidas para proposiciones puntuales).
   - Apuntes y soporte según mis herramientas declaradas: si uso papel o tomo notas, priorizar lectura en papel impreso para textos teóricos densos cuando sea viable, resumir a mano con mis propias palabras integrando esquemas (nunca transcribir literal) y hacer una pausa breve justo después de clase o video para completar huecos, sin imponer cambios de soporte ni duplicar materiales.
4. INTEGRACIÓN ESPACIAL, DIBUJO GENERATIVO Y GESTOS:
   - En gráficos, diagramas de cuerpo libre, circuitos o anatomía, integrar etiquetas, ecuaciones y condiciones de borde directamente sobre las zonas críticas del dibujo (cero atención dividida), eliminando texto redundante (en temas que ya domino, evitar texto que solo repita un gráfico autoexplicativo).
   - Dibujo hecho a mano desde cero vinculando explícitamente cada trazo con su significado verbal o matemático (dibujar sin conectarlo al modelo no rinde). Cuando me trabe en un problema complejo no rutinario donde las fórmulas habituales parezcan no encajar, sugerime dejar de operar algebraicamente por un momento y re-dibujar el problema desde otra perspectiva geométrica o mover espacialmente sus componentes en papel para reestructurar el planteo. Cuando aporte valor, incorporar gestos co-verbales o ejecución física representativa del mecanismo (p. ej., trazar en el aire con las manos direcciones, fuerzas, flujos o límites espaciales no redundantes con las palabras).
5. PRÁCTICA MEZCLADA, DIAGNÓSTICO PRE-CÁLCULO Y TRANSFERENCIA A PROBLEMAS NUEVOS:
   - Una vez que yo considere comprendida la regla básica, si ya elegí trabajar con varias categorías o unidades, sugerir la práctica intercalada en lugar de bloques largos de ejercicios idénticos. No elegir por mí qué categorías, unidades o ejercicios combinar ni decidir su orden. Advertir que la mezcla puede sentirse más difícil al principio, pero que la dificultad percibida por sí sola no demuestra aprendizaje; el desempeño autónomo que yo compruebe contra mi fuente es la referencia práctica.
   - Diagnóstico breve antes de operar (p. ej., 3 líneas): 1) principio o ley gobernante, 2) diferencia crítica con el caso anterior, y 3) herramienta o ecuación a usar; apoyado con tablas de pistas (frase disparadora → modelo) y tablas de pares parecidos. En sistemas complejos o dinámicos, podés proponer agrupar primero un conjunto de enunciados (de mi guía o generados bajo la Regla 3) según su mecanismo causal subyacente (bucles de retroalimentación, cadenas causales, asimetrías) sin resolverlos numéricamente, y recién después vincular cada grupo con su procedimiento matemático.
   - Para problemas inéditos o con disfraz superficial distinto: traducir el enunciado antes de meter números a (i) cómo interactúan las entidades en juego y (ii) cómo se relaciona el estado inicial con el final.
6. ESCENARIOS SIMULADOS, TUTORÍA DE PISTA MÍNIMA Y FEEDBACK POR LOTE:
   - Casos dinámicos o de diagnóstico/decisión: diseñar o proponer escenarios que guarden similitud funcional (de reglas y decisiones, aunque no sea física) con la evaluación real; si recién empiezo, resaltar las variables críticas y mostrar un modelo de referencia; si ya tengo base, quitar el resaltado y dejarme el control del flujo con pausas breves de reflexión.
   - Tutoría paso a paso ante bloqueos (en !libre o durante la práctica): si me trabo a mitad de un ejercicio, diagnosticá el paso exacto del bloqueo y dame una pista mínima de método para que lo destrabe yo, sin regalar la solución ni hacer las cuentas.
   - Corrección al cierre del intento o por lote: evitar corregir cada renglón en tiempo real para no generar dependencia. Dejame cerrar el intento completo o un lote corto (p. ej., 3–4 problemas) y devolvé al final un diagnóstico de la causa raíz del error más una regla clara de reparación para el próximo.
7. EXPLICACIÓN ACTIVA, ESTUDIO CON COMPAÑEROS Y ESQUELETO DE ATRÁS PARA ADELANTE:
   - Cuando aporte valor para consolidar causas o preparar un examen oral (especialmente si estudio solo, o por mi cuenta aun teniendo grupo): proponer estudiar el tramo con el compromiso previo de explicarlo al terminar en voz alta y sin mirar apuntes, verificando yo mismo contra la fuente qué eslabón causal quedó flojo; si te comparto mi intento, señalá el hueco causal o, como mucho, formulá pocas preguntas de elaboración sobre lo que expliqué ("¿por qué pasa eso y qué cambiaría si varía X?"), sin actuar de alumno ni sostener un diálogo interactivo, y remitime a mi fuente o a /explicar, sin dictar la teoría.
   - Solo si declaré estudiar con compañeros (en la calibración o más adelante, o si pido preparar una defensa argumental): proponer guiones de contraargumentación mutua para debatir entre nosotros (refutar, justificar o expandir una premisa específica del argumento del compañero). La IA no representa al compañero ni simula personajes dentro de la contraargumentación mutua: aporta únicamente la estructura del guion o preguntas disparadoras. Un pedido directo de este guion mediante /artefacto siempre se ejecuta. Las simulaciones de otros tipos siguen disponibles cuando se soliciten y no contradigan esta restricción.
   - Esqueleto lógico y reconstrucción inversa: para demostraciones, fallos o defensas orales/escritas, destilar el argumento en un esqueleto de flechas (partida → supuestos → mecanismo central → conclusión) y practicar reconstruyéndolo desde el final hacia el principio.
8. ORGANIZADORES GENERATIVOS, MAPAS CAUSALES Y MATRICES COMPARATIVAS:
   - Para integrar capítulos extensos o contrastar teorías/modelos, reemplazar la relectura o el subrayado pasivo por el armado desde cero de tablas comparativas, esquemas jerárquicos o mapas conceptuales cuyos conectores usen verbos causales o relacionales precisos. Si recién empiezo desde cero absoluto, estoy sobrecargado o con muy poco tiempo (donde armarlo desde cero sería contraproducente), ofrecé bajo la Regla 3 entregarme la matriz comparativa o el esquema jerárquico ya estructurado o parcialmente completo como andamiaje inicial.
9. RECUPERACIÓN ADAPTATIVA, ESPACIADO Y AUTOCALIBRACIÓN:
   - Prueba en frío (recuerdo libre en hoja en blanco, respuesta corta o choice justificando cada opción; si requiere que generes las preguntas o el choice, ofrecelo en 1 línea bajo la Regla 3 y esperá confirmación, o armala desde el apunte), alineando en lo posible el formato de práctica con el del examen final. Proponerla de forma dinámica según dificultad y retención, contrastando siempre el desarrollo entero contra la fuente ese mismo día para corregir la causa raíz y reconectar el punto con la estructura global del tema. Si en un tema complejo mi acierto inicial en frío es muy bajo (p. ej., ≤50%), volver primero a ejemplos resueltos antes de insistir con pruebas sin ayuda (ya que la transferencia de las pruebas depende de alcanzar buen nivel de acierto). Los datos exactos van a tarjetas directas/inversas o tabla tapable solo tras comprender.
   - Repaso espaciado orientativo: distribuir los repasos en el tiempo (como referencia flexible, ubicando el primer repaso alrededor del 10%–20% del plazo hasta el examen y ajustando según retención).
   - Transición entre bloques y pausas: durante períodos de trabajo sostenido, podés sugerir como referencia una pausa breve después de alrededor de ~60–90 minutos de trabajo continuo para mitigar la fatiga atencional, ajustando el momento a la tarea y al estado de concentración (pauta orientativa, no una alarma ni un corte cronometrado que interrumpa el ritmo de trabajo continuo). Cuando cambie naturalmente de tema o unidad en una sesión extensa, si ayuda a separar lo trabajado de lo siguiente, sugerir una recuperación breve en frío antes de empezar la nueva tarea (sin añadirla si solo genera burocracia).
   - Autocalibración diferida (chequeo mental rápido, sin burocracia): nunca preguntes "¿entendiste?" recién explicado un tema o con la resolución a la vista; tras un intervalo o cambio de tarea, mostrá solo el título o enunciado y pedí estimar mentalmente (p. ej., de 0 a 100) la capacidad de resolverlo en frío antes de intentar o ver pistas; no la impongas como trámite administrativo antes de cada ejercicio.
10. SOBREAPRENDIZAJE SELECTIVO, AUTOMATIZACIÓN DE SUB-HABILIDADES, ALINEACIÓN AL EXAMEN Y MODO EMERGENCIA:
    - Sobreaprendizaje selectivo y práctica deliberada de sub-habilidades cerradas: en procedimientos troncales críticos que deban salir rápido bajo presión de examen, sumar un margen extra de práctica (p. ej., ~50% adicional) tras el primer acierto fluido, acoplado a repasos espaciados (especialmente en pasos discretos o algoritmos cerrados, que se oxidan más rápido que las habilidades continuas). Cuando mi cuello de botella sea una sub-habilidad mecánica de reglas fijas y alta predictibilidad (p. ej., despejes algebraicos, derivación mecánica, sintaxis o conversión de unidades), proponer rutinas breves e intensivas de práctica repetitiva con devolución breve apenas termino cada intento corto de esa sub-habilidad (el intento completo, nunca renglón por renglón; para problemas integrados o complejos rige el feedback por lote del Principio 6) para automatizarla y liberar memoria de trabajo para los problemas abiertos.
    - Adaptación al examen y Modo Emergencia: alinear la práctica a las condiciones reales del examen. Si declaro venir muy apretado en la calibración, uso /emergencia o detectás desproporción crítica entre volumen y días disponibles, simplificá al máximo pasos administrativos, registros y formateos, priorizando la práctica directa de mayor retorno para ese examen (sin descartar por dogma Anki, recuperación activa o ejemplos resueltos si son el cuello de botella, y sin recortar jamás temas del programa).
</principios_evidencia>

<flujo_por_defecto>
1. TRAS LA CALIBRACIÓN (o al iniciar una nueva sesión con /siguiente): Entregá directamente tu Acción de Hoy (breve y enfocada en la ejecución del día; si el Modo Emergencia está activo, adaptada al tiempo escaso):
   - **Acción de Hoy (Paso a paso para tu sesión actual):** Elegí solo el conjunto mínimo de alto impacto del repertorio para hoy sin apilar técnicas que sobrecarguen la sesión. Indicá pasos concretos para ejecutar sobre el tema o ejercicio que vos elijas, con criterio observable de cierre. Si la acción sugiere usar un artefacto no generado, incluí una alternativa inmediata para trabajar directamente en el apunte sin depender de la IA. La prueba en frío se sugiere cuando corresponda al inicio.
   - **Oferta de Artefacto:** Ofrecé el artefacto más útil para la acción propuesta y esperá confirmación (nunca ofrezcas explicar teoría). Cerrá con: *"Decime qué tema querés encarar hoy o si te genero el artefacto. Para ver el sistema macro: `/plan`. Para la próxima sesión: `/siguiente`."*
2. EN INTERACCIONES POSTERIORES: Respondé o generá directamente lo que solicito sin reconstruir ni repetir la Acción de Hoy. Si hago una pregunta puntual de método o aclaración, respondé de forma directa y seguí.
3. NUEVA SESIÓN: Cuando use `/siguiente` o te cuente cómo me fue en la sesión, evaluá lo hecho y emití únicamente la nueva Acción de Hoy para la próxima sesión (sin generar artefactos de antemano).
</flujo_por_defecto>

<comandos>
Los comandos /plan, /molde, /ejemplo, /artefacto, /anki, /explicar y /siguiente constituyen confirmación explícita del artefacto que nombran y se ejecutan de inmediato:
- `/siguiente` (o contame cómo te fue hoy): Transición de estado: evalúa lo que hiciste en la sesión, ajusta según dónde te hayas trabado y te da únicamente la Acción de Hoy para tu próxima sesión (sin generar artefactos de antemano).
- `/plan` (o `/completo`): Despliega de una sola vez el Sistema de Estudio macro completo y auto-contenido para esta materia, seleccionando y articulando únicamente las estrategias que aporten valor según las exigencias del examen, el material, mi nivel previo, las herramientas y el tiempo real disponible (sin obligación de usar todo el repertorio; descartá sin culpa técnicas que no apliquen o recarguen la sesión). Explicá cada paso en criollo, claro y auto-contenido para que se entienda exactamente qué hacer al sentarse a estudiar, sin jerga innecesaria ni títulos crípticos. Estructurá el plan en dos capas claras:
  (a) **Rutina habitual / diaria:** pocos pasos operativos y concretos que respeten el presupuesto de tiempo (la suma de las actividades y descansos debe entrar en las horas declaradas y en general la mayor parte —como referencias flexibles, procurá acercarte a dos tercios del tiempo o alrededor del ~80%— debe ser práctica directa sobre el material; cuando el tiempo diario sea acotado frente a la longitud o exigencia de las tareas, priorizá un solo foco por sesión, permitiendo combinar si son actividades breves y ágiles). Si resulta útil, podés sugerir una distribución semanal orientativa de modalidades o focos ponderada según mis debilidades declaradas y el peso de cada parte en el examen (cuando conste en el material o lo haya informado), sin calcar esquemas ajenos.
  (b) **Caja de herramientas opcional:** menú condicional de técnicas específicas por tipo de tarea (fichas, casos contrastantes, mapas o matrices completas/parciales, agrupación causal de enunciados, ejemplos con error oculto cuando ya hay dominio, simulaciones, esqueleto inverso, redibujo ante bloqueos, gestos, etc. —y guiones de contraargumentación mutua si declaré estudiar con compañeros—) para usar solo cuando el contenido de la sesión lo requiera, nunca como una lista de tareas que haya que hacer todas juntas en la misma tarde.
  No impongas fases fijas, no asignes temas o unidades específicas por día de calendario (las olas son tramos de objetivos del plan) y entregá el documento completo de una sola vez. Si re-emitís o modificás un plan, mantené cada paso igual de explicado y auto-contenido que en la primera versión; no abrevies asumiendo que ya leí la anterior.
- `/molde [tipo o ejercicio]` (o `/ejemplo`): Desarma un ejemplo resuelto de tus archivos o resuelve y desarma uno nuevo paso a paso. Si no hay ejemplo resuelto en los archivos y yo no especifiqué cuál resolver, no elijas uno de la guía por tu cuenta: pedime que elija o pegue el enunciado y esperá mi respuesta. Aplica la verificación previa de interpretación si es diagrama 2D/3D, más la advertencia de cátedra.
- `/explicar [tema o tramo]`: Explica de forma clara, rigurosa y directa un concepto o demostración de tu material, de a una idea por vez en tramos cortos con pausa de control. Según corresponda al tema, desglosa elementos aislados antes de acoplarlos, conecta caso concreto (con etiquetas genéricas) → esquema limpio → ecuación simbólica (anclada al caso concreto), o refuta intuiciones engañosas en 3 partes, cerrando con una pregunta activa de elaboración o mini-caso de verificación. Es el único camino para que explique teoría, además de un pedido directo en mensaje.
- `/artefacto [tipo] [tema o enunciado]`: Genera directamente el recurso solicitado para el tema o ejercicio que yo indique (p. ej., tabla de pistas o pares parecidos, batería de enunciados para agrupar por modelo causal, esqueleto argumental de flechas, fichas de variables, casos contrastantes, mapa conceptual o matriz completa o parcial, preguntas de pretest, ejercicio con operadores omitidos o pasos desordenados, ejemplo con error oculto sutil para diagnosticar —únicamente cuando ya resuelva con precisión autónoma problemas estándar, según el Principio 1—, simulación, guion de contraargumentación para compañeros u otro recurso que sirva). Usá el material disponible como fuente sin inventar datos ni contenido de cátedra; si falta un dato indispensable o requiere elegir un ejercicio y no indiqué cuál, pedímelo puntualmente. Aplicá la compuerta 2D/3D cuando corresponda y la advertencia de cátedra en entregas técnicas.
- `/anki [tema o archivo]`: Candidatos a tarjetas directas e inversas (o tabla tapable). Lo extraído va verbatim ("revisar en el archivo" si es ilegible); lo generado lleva el rótulo "generado por IA, no está en tus archivos" y la advertencia de cátedra.
- `/ruta`: Muestra solo la distribución temporal de estrategias y rutinas del plan activo según días y horas (sin imponer 3 olas fijas), sin asignar temas por día ni reemitir el resto del plan (si no hay plan previo, indicalo en 1 línea y sugerí `/plan`).
- `/papel`: Adapta la Acción de Hoy o cualquier técnica a 100% cuaderno y birome, sin pantallas. Si no hay Acción de Hoy previa, genera una versión papel de la acción por defecto.
- `/emergencia`: Reconfigura el método al mínimo de fricción y pasos burocráticos para cuando estás contra las cuerdas o el tiempo es muy escaso (sin recortar temas del programa).
- `/archivo`: Re-emite el último plan o artefacto en bloque de código Markdown crudo para copiar a Obsidian. Si no hay plan ni artefacto previo, decilo en 1 línea y no inventes contenido.
- `/actualizar`: Analiza archivos nuevos que subas, ajusta la estrategia si aparece un tipo de tarea nuevo y ofrece los artefactos correspondientes sin reiniciar el flujo.
- `!libre`: Pausa el flujo para auditar un intento tuyo o un lote de ejercicios, o para destrabar un paso. Si te trabaste a mitad de un ejercicio, diagnostica el paso exacto y da una pista mínima de método sin resolver cuentas ni regalar la solución. Si entregás un intento cerrado o un lote de problemas, devuelve al final diagnóstico de la causa raíz del error + regla de reparación para el próximo, con advertencia de cátedra. Si detecta una duda teórica, orienta el método y recuerda `/explicar` sin dar una clase de oficio. Si el intento involucra un problema con diagrama 2D/3D, ejecuta la verificación previa de interpretación antes de señalar errores. Cerrá siempre con *"seguí con lo que elijas"* (salvo en verificación 2D/3D o pista interactiva donde esperás mi respuesta).
</comandos>

<formato>
- Markdown limpio, directo y escaneable. Priorizá viñetas operativas, tablas claras y conceptos o disparadores clave ya resaltados en negrita por vos para guiar la atención visual sin saturar, salvo en ejercicios de recuperación o generación (operadores omitidos, pasos desordenados o pruebas en frío), donde resaltar la respuesta la delata.
- Prohibido el relleno metodológico: no expliques reglas que no se van a usar hoy.
- Notación matemática estándar (`$...$`) cuando corresponda.
- Cero introducciones robóticas y cero comentarios meta sobre las reglas de este prompt.
</formato>
`````

---

# 🔄 2. Equivalencia del Ecosistema y Mapa del Flujo de Estudio

Tanto el ecosistema automatizado (`01` a `04`), como el **Arquitecto v3.5** y el **flujo en papel de esta guía** entrenan tu cabeza bajo las mismas leyes de la memoria y la resolución de problemas; solo cambia cuánto delegás en las herramientas:

| Etapa del Aprendizaje | 🤖 Con el Sistema de IA (`01` a `04`) | 📝 En Papel / Escritorio (Inspirado en el Arquitecto v3.5) | Principios asociados (`[[06 - Biblioteca de Ciencia del Aprendizaje\|06]]`) |
| :--- | :--- | :--- | :--- |
| **0. Mapa y Seguimiento** | **[[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]** en AI Studio. | **El Registro Operativo (7 columnas) + Punto de Partida:** Cobertura por secciones y desglose por tipo de tarea. | *Chunking*, catálogo de arquetipos y calibración (*Oakley / Newport / Agarwal*). |
| **I. Primer Contacto y Esquema** | **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]** + **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**. | **Ficha de Variable (3 renglones) + Técnicas `I.0` a `I.4`:** Desarme de ejemplo en pasos, dibujo con ecuaciones adentro, tabla de pistas/comparación, esqueleto con tabla doblable y tabla tapable / Formulario Razonado. | Efecto del ejemplo resuelto, autoexplicación y eliminación de atención dividida (*Barton / Sweller / Make It Stick*). |
| **II. Retirar la Ayuda (*Fading*)** | **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]** (pistas graduales hasta `Dominado`). | **Escalera de 5 Escalones + Deducciones de atrás hacia adelante (Rondas 1–3) + Criterio de 2 tareas en blanco separadas por $\ge 1\text{ h}$.** | Retiro gradual de andamiaje y práctica deliberada (*Atkinson / Renkl / Ericsson*). |
| **III y IV. Mezcla, Repaso y Examen** | **[[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]** + repaso en Anki. | **Circuito Mezclado + 3 Líneas ($\le 120\text{ s}$) + Tabla de Pares Parecidos + Apertura fija (`Prueba en frío 24–48 h ➔ Tarjetas ➔ Nuevo`) + Simulacro y 8 Rutas de Corrección.** | Práctica intercalada, transferencia directa y espaciado (*Rohrer / Scott Young / Make It Stick*). |

---

## 🗺️ Mapa Visual del Flujo de Estudio (Etapa 0 + Fases I a IV)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '18px', 'primaryColor': '#f8fafc', 'primaryTextColor': '#1e293b', 'primaryBorderColor': '#475569', 'lineColor': '#4b5563'}, 'flowchart': {'htmlLabels': false, 'wrappingWidth': 380, 'nodeSpacing': 26, 'rankSpacing': 26, 'padding': 16}}}%%
flowchart TD
    E0["ETAPA 0: REGISTRO Y PUNTO DE PARTIDA<br/>Planilla por secciones + Diagnóstico de base (3 ramas)"] --> FI["FASE I: PRIMER CONTACTO Y ESQUEMA<br/>Ficha de variable (3 renglones) + I.0 a I.4 según tipo de tarea"]
    FI --> FII["FASE II: RETIRAR LA AYUDA DE A POCO<br/>Escalera de 5 Escalones / Rondas 1-3 hacia atrás / Explicar sin mirar"]
    FII --> C2["CRITERIO DE AVANCE CUMPLIDO<br/>2 tareas comparables en hoja en blanco separadas por ≥1 hora"]
    C2 --> FIII["FASE III: MEZCLAR TIPOS DE EJERCICIO<br/>Circuito mezclado + 3 líneas (≤120s) + Tabla de pares parecidos"]
    FIII --> FIV["FASE IV: REPASO Y PRÁCTICA DE EXAMEN<br/>Apertura fija (Prueba en frío 24-48h → Tarjetas → Nuevo) + Simulacro y Corrección"]
```

> [!info]+ Resumen Operativo del Pipeline (De la Hoja Vacía al Día del Parcial)
> - **ETAPA 0 — REGISTRO Y PUNTO DE PARTIDA:** Armás tu planilla recorriendo todos los títulos de tus archivos para no saltear nada, mirás parciales viejos y elegís cómo arrancar según tu base (*Nunca vi el tema* / *Lo vi sin practicar* / *Ya practiqué*).
> - **FASE I — PRIMER CONTACTO Y CONSTRUCCIÓN DEL ESQUEMA:** Hacés la **Ficha de variable** (3 renglones) ante cada símbolo o término nuevo y aplicás la técnica específica para ese contenido: `I.0` (entrada al tema por tramo de 10 min según tu fuente), `I.1` (desarme del ejemplo resuelto en pasos), `I.2` (dibujo con ecuaciones adentro, tabla de pistas o tabla de comparación), `I.3` (esqueleto de flechas + tabla doblable) e `I.4` (tarjetas directas/inversas, tabla tapable o Formulario Razonado).
> - **FASE II — RETIRAR LA AYUDA DE A POCO:** Pasás del ejemplo a la hoja en blanco subiendo la **Escalera de 5 Escalones** en problemas, haciendo las **Rondas 1 a 3 (de atrás para adelante)** en demostraciones o explicando gráficos desde cero, hasta cumplir el **criterio de avance** (2 tareas en blanco separadas por $\ge 1\text{ hora}$).
> - **FASE III — MEZCLAR TIPOS DE EJERCICIO:** Entrenás el ojo diagnóstico armando **circuitos mezclados**, escribiendo las **3 líneas antes de calcular ($\le 120\text{ s}$)**, llenando tu **Tabla de pares parecidos** y usando el **Planteo en letras** cuando las cuentas ya no son tu cuello de botella.
> - **FASE IV — REPASO ESPACIADO Y PRÁCTICA DE EXAMEN:** Abrís cada sesión en orden fijo (**`Prueba en frío a las 24–48 h ➔ Tarjetas/Tabla tapable ➔ Trabajo nuevo`**), hacés simulacros con reloj y aplicás las **8 rutas de corrección por falla**.
> - **🚨 MODO EMERGENCIA (si te quedan $\le 3\text{ días}$ o $\le 12\text{ horas}$ totales):** Mantenés todo el temario pero recortás pasos de escritorio (Registro de 3 columnas, tabla tapable sin Anki y Escalera corta `1 → 2 → 4`).

---

# 🛠️ 3. El Flujo de Estudio Paso a Paso (En Papel o Soporte Digital)

A continuación tenés traducida toda la ingeniería pedagógica del **Arquitecto v3.5** para aplicarla directamente en tu escritorio. Aunque muchos ejemplos están aterrizados en **Ingeniería Mecánica** (fluidos, termodinámica, cálculo, estática), en cada fase tenés las variantes exactas para **cualquier otra materia o carrera** (económicas, derecho, ciencias sociales, humanidades, medicina o idiomas).

---

## Etapa 0: Tu Registro Operativo y tu Punto de Partida (Antes de estudiar)

> [!warning] El error de arrancar a ciegas
> El error más común en la facultad es abrir el apunte en la página 1 y ponerse a subrayar, o intentar resolver la guía del ejercicio 1 al 30 en orden como un robot. Antes de estudiar, necesitás **ver el mapa completo, saber qué exige la cátedra y definir desde qué escalón partís**.

### 1. Mirá el final de la película primero (10–15 minutos)

- **Opcional, 2–3 minutos antes de abrir el apunte:** En una hoja borrador, anotá rápido lo que ya recordás o intuís del tema. No importa que esté incompleto: activa tu cabeza y te prepara para detectar enseguida qué cosas no sabías.
- **Revisá 2 o 3 parciales o finales anteriores de tu cátedra:** Fijate cómo preguntan los temas (si piden deducciones paso a paso, gráficos explicados, problemas largos de cálculo o encuadre rápido de casos). Eso calibra tu puntería desde el Día 1.

### 2. Armá tu «Registro» (Tu planilla para no saltear temas ni olvidar repasos)

En lugar de confiar en tu memoria para decidir qué estudiar o repasar cada tarde, armá una planilla única (en papel, Excel u Obsidian):

1. **Al comenzar (cobertura total por títulos):** Recorré los títulos y encabezados de **todos** tus archivos (apuntes, diapositivas, guías) y anotá **una fila por sección**, aunque todavía no entiendas el tema. Esto evita que te queden subtítulos colgados sin estudiar.
2. **Al practicar (desglose por «tipo de tarea» o «tipo de ejercicio»):** Cuando ataques una sección, desglosala en filas según las **tareas independientes** que tengas que saber hacer sin consultar: un tipo de problema práctico, un gráfico con 2 o más curvas, un bloque de conceptos, una demostración matemática o el desarrollo de un argumento/texto.
   - **Regla de oro para agrupar:** *Separá en dos filas si cambia el método o modelo físico; uní en una sola fila si entre el Ejercicio 1, 2 y 4 solo cambian los números o el caso puntual.* Nunca hagas una fila por cada ejercicio suelto de la guía.
3. **Las 7 columnas del Registro (Modo Normal):**

| Unidad o tema | Tipo de tarea | Escalón actual (1 a 5) | Ejercicios resueltos | Fecha de criterio cumplido | Próxima prueba en frío (24–48 h) | Tipo de error |
| :--- | :--- | :---: | :--- | :---: | :--- | :--- |
| *Ej. Unidad 3: Cañerías reales* | *Problema: Cañerías en serie con bomba* | `Escalón 4` | *TP3: Ej. 1, 2, 4* | *(vacío hasta confirmar mañana)* | *Mañana 29/10* | *Olvidé pasar $D$ a metros en $h_f$* |
| *Ej. Unidad 3: Cañerías reales* | *Gráfico: Curva de la bomba vs. curva del sistema* | `No aplica` | *Apunte pág. 14* | *28/10 (salió 2 veces)* | *01/11 (Ok el 28/10)* | *—* |

> [!tip] Ajuste para sesiones cortas ($<2\text{ horas}$) o Modo Emergencia
> - **Si tu sesión del día dura menos de 2 horas:** Cuando un tipo de tarea te sale por primera vez en hoja en blanco hoy (`Escalón 4` o 1.ª reconstrucción), **ya te habilita a avanzar de tema y a meterlo en tus mezclas**, anotando la fecha de **mañana** en `Próxima prueba en frío` y dejando vacía `Fecha de criterio cumplido` hasta que mañana te salga en frío.
> - **Si estás en Modo Emergencia ($\le 3\text{ días}$ o $\le 12\text{ h}$ totales):** Reducí la planilla a **3 columnas livianas**: `Sección | Tipo de tarea | Salió en blanco y prueba en frío (fecha y ok/falló)`, y tildá los ejercicios usados directamente arriba de tu PDF o guía impresa.

### 3. Elegí cómo arrancar según tu Punto de Partida (Las 3 Ramas)

No todos los temas se empiezan en el mismo lugar:
- **🟢 Rama 1 — Nunca viste el tema:** Arrancá con el ciclo corto **`I.0 (Entrada al tema)` + la técnica de `Fase I`** que corresponda, tramo por tramo (porciones de 10 minutos). 
- **🟡 Rama 2 — Ya viste el tema en clase o leíste, pero no practicaste:** Salteá `I.0` (usalo solo en algún subtítulo puntual que no recuerdes de qué habla) y andá directo a la **Ficha de variable** más la técnica de desarme de **`Fase I` (`I.1`, `I.2` o `I.3`)**.
- **🔵 Rama 3 — Ya practicaste el tema:** Empezá tu sesión haciendo **1 ejercicio en hoja en blanco** de un tipo que elijas, sin mirar apuntes ni usar técnicas correctivas durante el intento, y contrastalo al terminar contra la clave o tu material:
  - *Si te sale bien:* Escribí la lista de títulos de pasos de ese ejercicio y arrancá ese tipo directamente en el **Escalón 3** (o en el **Escalón 4** si estás en Modo Emergencia).
  - *Si te trabás o falla el planteo:* Volvé a la **Fase I** para desarmar bien el método. *(Nota: este diagnóstico inicial sirve solo para ubicar tu Escalón de partida; no cuenta como prueba en frío ni habilita por sí solo las mezclas de la Fase III).*

---

## Fase I: Primer Contacto y Construcción del Esquema (Según el Tipo de Tarea)

Antes de intentar resolver problemas de memoria, tenés que entender las piezas del tema y desarmar la estructura de cómo se resuelven.

### Regla Transversal Previa: La «Ficha de Variable» (3 Renglones)

Cada vez que en un tramo teórico o en un ejemplo aparezca una **fórmula, letra, símbolo, conector lógico o término técnico nuevo**, hacé esto *antes* de pasar a `I.0`, `I.1`, `I.2` o `I.3` (no repitas símbolos que ya registraste y sabés explicar sin mirar):

1. **Escribí en tu cuaderno una nota de exactamente 3 renglones por cada símbolo o término nuevo:**
   - **Renglón a (Qué es):** Qué representa físicamente o qué función cumple, en 1 sola frase simple *(ej. "$f$: factor de fricción de Darcy que mide la resistencia viscosa y de rugosidad en la pared del conducto")*.
   - **Renglón b (Unidades o ámbito):** En qué unidades se mide, o a qué se aplica si no es una cantidad numérica *(ej. "Adimensional; depende del número de Reynolds $Re$ y de la rugosidad relativa $\varepsilon/D$")*.
   - **Renglón c (Sensibilidad / Contraste):** Qué cambia en el resultado o en el sentido del problema si esa variable **sube, baja, se anula o se reemplaza** *(ej. "Si sube $f$, crece linealmente la pérdida de carga $h_f$ y cae la presión a la salida; en flujo laminar vale $64/Re$")*. En materias no cuantitativas, anotá el contraste funcional o de sentido que marque tu apunte.
2. **Tapá con una hoja los 3 renglones** y decilos en voz alta mirando únicamente el símbolo o término.
- **Para qué sirve:** Evita el error clásico de meter números en letras como una receta ciega sin saber qué significan en el problema.
- **Cuándo seguís:** Cuando cada símbolo nuevo tiene sus 3 renglones escritos y los decís sin error al destapar y contrastar con tu apunte.

---

### `I.0` Entrada al Tema por «Tramos» (Cuando el tema es nuevo)

Si nunca viste el tema, dividilo en **tramos** (una porción corta de teoría que puedas explicar en unos **10 minutos**). Para cada tramo seguí estos pasos antes de tocar la guía de ejercicios:

1. **Fijá la meta antes de empezar:** Escribí arriba de tu hoja *"Al terminar este tramo lo explico sin mirar"* y anotá **1 o 2 preguntas concretas** que esperás poder responder al cerrar el subtítulo. *(Fijar la meta de explicar antes de leer cambia radicalmente cómo presta atención tu cerebro).*
2. **Consumí el tramo de forma activa según tu fuente preferida:**
   - 📖 **Libro, apunte o diapositivas:** Leé de a un solo subtítulo por vez. Al terminarlo, **tapá el texto con una hoja** y decí en voz alta de qué iba con tus palabras; poné un signo **`?`** en los puntos donde se te corte la explicación.
   - 🎥 **Video o clase grabada:** Pausá el video al terminar cada idea y **justo antes de que el profesor muestre un resultado o paso nuevo**. Escribí qué creés que va a pasar o qué ecuación sigue, dale *play* y compará. Al cerrar el tramo, tapá tus notas con una hoja y resumilo en 3 renglones.
   - 🏫 **Clase en vivo:** Llegá al aula con 1 pregunta anotada del tramo anterior. Durante la clase no copies todo como transcriptor: anotá **solo términos nuevos y dudas**, y preguntá en el momento lo que no cierre. Ese mismo día a la tarde, tapá tus notas con una hoja y reconstruí el tramo.
   - 🤖 **Otra IA (en otro chat):** Usá su modo estudio o pedile con un mensaje de $\le 4\text{ líneas}$ que **te explique el fragmento de a una sola idea por vez y te haga una pregunta de comprensión antes de seguir** (evitá el pedido pasivo *"explicame todo este tema"*). Si le pedís un ejemplo sencillo para destrabar la intuición, contrastalo siempre con tu apunte: nunca reemplaza los ejemplos oficiales de tu cátedra.
   - 👥 **Compañero de estudio:** Pedile que te explique un tramo; apenas termine, **cerrá los apuntes y explicáselo vos de vuelta** mientras él marca en qué puntos no coincidís. Revisen esas diferencias directamente contra el apunte oficial, no discutiendo de memoria.
3. **Hacé la Ficha de variable** de los símbolos o términos nuevos que hayan aparecido.
4. **Cerrá el tramo con 1 comprobación puntual:** Resolvé el primer paso de un ejemplo del apunte o respondé una pregunta tapada (si no hay ejemplo, explicá el tramo entero en voz alta sin mirar).
- **Cuándo seguís a `I.1`–`I.4`:** Cuando podés repetir de qué iba el tramo sin mirar y sin omitir puntos del subtítulo al contrastar contra tu fuente, tenés hechas las fichas de variable y la comprobación puntual salió sin reabrir el apunte.

---

### `I.1` Problemas o Ejercicios por Pasos (Desarme del Ejemplo Resuelto)

Cuando tenés que aprender a resolver problemas prácticos (de cálculo en ingeniería, economía o ciencias, o transformación reglada de oraciones/casos), **no arranques intentando resolver la guía por ensayo y error**. Agarrá primero **1 ejemplo resuelto** de tu cátedra o libro y **1 ejercicio sin resolver del mismo tipo**:

1. **Dividí el ejemplo resuelto en 3 o 4 etapas llamadas «pasos»:** Escribí en una hoja aparte un **título en infinitivo para cada paso, sin poner números ni datos particulares del caso** *(ej. "Paso 1: trazar el volumen de control y plantear continuidad", "Paso 2: plantear Bernoulli con pérdida de carga entre 1 y 2", "Paso 3: calcular Reynolds y buscar factor $f$ en Moody")*.
2. **Tapá el ejemplo resuelto con una hoja y destapalo de a un paso por vez** (nunca renglón por renglón).
3. **Anotá al margen dos notas obligatorias en cada paso:**
   - **Nota a (El disparador):** *Qué dato o palabra exacta del enunciado autoriza hacer ese paso* *(ej. "Dice 'régimen permanente y diámetro constante', eso habilita $v_1 = v_2$")*.
   - **Nota b (La condición de validez):** *Qué condición de uso o hipótesis exige tu fuente para que esa ecuación o regla siga valiendo* *(ej. "Flujo incompresible $\rho = \text{cte}$")*. Si el apunte no explicita la condición, anotá *"condición no explicitada en el archivo; buscar en la fuente"* para rastrearla o preguntarla en consulta.
4. **Predecí el paso siguiente:** Antes de bajar la hoja para destapar el paso que sigue, mirá tu lista de títulos y **decí en voz alta qué paso viene y qué busca**. Destapá y compará contra el resuelto.
5. **Guardá tu lista de títulos de pasos:** Va a ser tu puente en la Fase II para resolver el ejercicio par sin mirar la solución.
- **Para qué sirve:** Te ahorra perder tardes enteras adivinando cómo arrancar y te obliga a entender *qué palabra del enunciado habilita cada ecuación*, en lugar de copiar números mecánicamente.
- **Cuándo seguís:** Cuando cada paso tiene escritas sus dos notas (qué dato lo autoriza y qué condición exige) y acertaste en voz alta el orden de todos los pasos al contrastar con el ejemplo.

---

### `I.2` Relaciones entre Variables, Conceptos y Gráficos

Cuando estudiás teoría donde cambiar un parámetro mueve otra variable, una curva en un diagrama o el encuadre de un caso, elegí entre estas **tres herramientas activas** (haciendo antes la Ficha de variable):

#### 1. Dibujo con ecuaciones adentro *(Principal para gráficos y esquemas)*
Sirve para cualquier diagrama o esquema con 2 o más curvas, etapas o zonas *(ej. Diagrama $T\text{-}s$ de un ciclo Rankine, diagrama hierro-carbono, curva tensión-deformación, diagrama de Moody o curvas de oferta/demanda)*:
1. **Dibujá los ejes y las curvas bien grandes** en una hoja A4 (o en pizarra si usás).
2. **Escribí cada ecuación, hipótesis o regla directamente adentro del dibujo**, justo sobre el cruce, pico, pendiente o zona que corresponde (**nunca en un párrafo aparte abajo del gráfico**, porque obligar al ojo a saltar entre el dibujo y el texto satura tu memoria de trabajo).
3. **Tapá con una hoja el apunte original** y explicá en voz alta qué pasa en cada zona mirando únicamente tu dibujo.
- **Cuándo seguís:** Cuando al destapar y comparar contra el gráfico de la cátedra, cada cruce y zona tiene su regla escrita y la explicaste completa sin mirar el apunte.

#### 2. Tabla de pistas *(Principal para multiple choice, enunciados cortos o selección de modelos/casos)*
Sirve tanto en ingeniería (para traducir el "cuento industrial" del enunciado a condiciones de borde) como en materias teóricas, clínicas, económicas o jurídicas (para diagnosticar qué regla o encuadre aplica a un caso):
1. **Trazá 3 columnas en tu hoja:**

| 1. Frase-pista del enunciado *(solo las palabras disparadoras)* | 2. Qué caso, modelo o condición indica | 3. Qué te habilita a hacer *(fórmula, gráfico, regla o descarte)* |
| :--- | :--- | :--- |
| *"Recipiente perfectamente aislado / proceso muy rápido"* | Proceso adiabático | Anular transferencia de calor ($\dot{Q} = 0$) en el primer principio. |
| *"Tanque de grandes dimensiones abierto a la atmósfera"* | Nivel libre cuasi-estacionario | Tomar $P_1 = P_{\text{atm}}$ (o $P_{\text{man}} = 0$) y velocidad $v_1 \approx 0$. |
| *"Válvula reductora de presión / estrangulamiento"* | Proceso isoentálpico irreversible | Plantear $h_1 = h_2$ con aumento de entropía ($\Delta s > 0$). |

2. Completá las columnas 2 y 3 mirando tu material.
3. **Tapá con una hoja la 3.ª columna** y decila completa en voz alta leyendo únicamente la frase-pista de la 1.ª columna.
- **Cuándo seguís:** Cuando cada caso del tramo tiene su fila y decís la 3.ª columna entera sin espiar.

#### 3. Tabla de comparación *(Complemento opcional para 2 o 3 situaciones casi iguales)*
Usala cuando tu apunte muestre 2 o 3 configuraciones que difieren en **una sola condición** *(ej. flujo laminar vs. turbulento en cañerías; ciclo Rankine simple vs. con recalentamiento)*:
1. Trazá una columna por cada situación y **3 filas**: `1. Qué queda igual | 2. Qué cambia | 3. Qué resultado da`.
2. Completá las filas 1 y 2 mirando el apunte.
3. **Tapá el apunte con una hoja y escribí en lápiz tu predicción en la 3.ª fila** (*qué creés que va a cambiar en el resultado*).
4. Destapá el archivo, compará, corregí y escribí abajo la regla de cierre: **"Si $X$ pasa de $A$ a $B$, entonces $Y$…"**.
- **Cuándo seguís:** Cuando con la 3.ª fila y la frase final tapadas con una hoja, las reconstruís sin error. Si no podés predecir qué pasa, volvé a `I.0` en ese tramo.

---

### `I.3` Demostraciones, Deducciones, Procesos, Argumentos y Producción Escrita u Oral

En lugar de intentar memorizar dos carillas de despejes algebraicos (o de párrafos teóricos/históricos/jurídicos) renglón por renglón de arriba hacia abajo —donde olvidarte una línea intermedia te deja en blanco en el examen—, armá este doble artefacto:

1. **El Esqueleto de 3 a 5 flechas (la ruta macro sin cuentas ni párrafos):**
   Arriba de la hoja, resumí toda la deducción o argumento en una cadena de 3 a 5 bloques unidos por flechas siguiendo este orden fijo:
   $$\text{Punto de partida o Tesis} \longrightarrow \text{Supuesto o Hipótesis clave} \longrightarrow \text{Desarrollo / Balance central} \longrightarrow \text{Conclusión final y cuándo vale}$$
2. **La Tabla Doblable de 3 columnas (el porqué de cada eslabón):**
   Justo debajo del esqueleto, trazá estas 3 columnas:

| 1. Ecuación, afirmación o párrafo del paso *(SE TAPA)* | 2. ¿Qué busca este paso? *(El objetivo del escalón)* | 3. ¿Qué regla, hipótesis, dato o conector permite pasar al siguiente? |
| :--- | :--- | :--- |
| *Ej. Paso 2: $\int \frac{dP}{\rho} + \frac{v^2}{2} + gz = \text{cte}$* | Integrar la ecuación diferencial de Euler a lo largo de una línea de corriente. | Asumir **fluido incompresible ($\rho = \text{cte}$)** para sacar $\rho$ afuera de la integral y obtener $P/\rho$. |

3. **Doblá la hoja verticalmente o tapá la Columna 1 con una hoja:** Mirando **únicamente las Columnas 2 y 3** (qué busca el paso y qué hipótesis lo destraba), decí en voz alta o escribí en un borrador la ecuación o afirmación de la Columna 1.
- **Para qué sirve:** Te entrena a reconstruir cualquier demostración o desarrollo desde su lógica estructural en vez de recitar renglones de memoria.
- **Cuándo seguís:** Cuando con la Columna 1 tapada reconstruís todos los pasos sin omitir ningún supuesto ni eslabón al contrastar contra tu apunte.

---

### `I.4` Datos Exactos de Memoria: Tarjetas Directas/Inversas y Tabla Tapable (El «Formulario Razonado»)

Hay cosas que en pleno examen no podés deducir desde cero y tenés que traer en la memoria (o saber ubicar e interpretar en segundos si te dejan usar hoja de fórmulas): **fórmulas con su condición de uso, convenciones de signos, valores/umbrales típicos, clasificaciones, tablas de decisión y distinciones entre términos parecidos** (o vocabulario, plazos legales y regímenes de verbos en otras carreras).

> [!important] Cero duplicación de soportes (Ficha de variable vs. Tabla tapable / Formulario Razonado)
> No armes tres cosas distintas para una misma ecuación:
> - La **Ficha de variable** (al inicio de la Fase I) la hiciste una sola vez para entender qué significa cada letra individual ($P$, $\gamma$, $z$, $v$).
> - Acá en **`I.4`** guardás la **relación completa y sus condiciones de uso** en **un único soporte de recuperación** (o en Anki, o en tu tabla tapable en papel, nunca duplicado en ambos).

#### Regla de oro: Entender primero y preguntar en ambas direcciones (Directa + Inversa)
Recién cuando hayas cumplido el criterio de comprensión del tramo (`I.0` a `I.3`), registrá los datos exactos armando siempre **dos direcciones de recuperación**:
- **Pregunta Directa (Condición $\rightarrow$ Dato/Fórmula):** *"¿Cuál es la ecuación de Bernoulli ideal y en qué unidades va cada término?"*
- **Pregunta Inversa (Dato/Fórmula $\rightarrow$ Condición de uso o Categoría):** *"Tenés la ecuación $P_1/\gamma + z_1 + v_1^2/2g = \text{cte}$: ¿bajo qué 5 hipótesis físicas exactas es válida y cuándo queda prohibido usarla tal cual?"*

#### Cómo llevarlo en Papel sin duplicar trabajo: El «Formulario Razonado» COMO tu Tabla Tapable

Si no usás Anki (**[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**) o estás en **Modo Emergencia**, en papel usás una **Tabla Tapable** donde ocultás una columna con una hoja para recuperar la otra en frío:
- **Para datos cortos (signos, umbrales, clasificaciones, vocabulario):** Trazás 2 columnas rápidas (`Pregunta o condición | Dato, signo o término`) y tapás la 2.ª columna para recuperar el dato (directa) o la 1.ª para recuperar cuándo aplica (inversa).
- **Para ecuaciones de Ingeniería (tu «Formulario Razonado» de 1 carilla por unidad):** Prohibido armar listas mudas de ecuaciones sueltas ($Q = A \cdot v$) y prohibido armar una tabla tapable y además un formulario aparte. **Cuando el dato a retener es una ecuación como Bernoulli, tu tabla tapable de preguntas directas e inversas ES directamente este Formulario Razonado**:

| Ecuación / Relación *(Se tapa para recuperación DIRECTA)*          | Hipótesis obligatorias: ¿Cuándo vale? *(Se tapa para recuperación INVERSA)*                                                                                                                                | Trampa típica / Unidades / Gráfico *(Se tapa junto con las hipótesis)*                                                                                                                             |
| :----------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bernoulli ideal:**<br>$P_1/\gamma + z_1 + v_1^2/2g = \text{cte}$ | 1. Fluido incompresible ($\rho=\text{cte}$)<br>2. Flujo invíscido (sin pérdidas)<br>3. Régimen estacionario<br>4. A lo largo de una línea de corriente<br>5. Sin intercambio de trabajo de eje ni de calor | • ¡No vale tal cual si hay una bomba o turbina en el medio! (ahí sumar $H_B$ o restar $H_T$; con pérdidas, agregar $h_f$).<br>• Presiones en la misma base (ambas manométricas o ambas absolutas). |

> [!NOTE] 📸 Gráfico 3: Esquema Mental del Formulario Razonado — Cuándo Cambia el Modelo (Límites de Bernoulli)
> ![08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)-1792587738124.webp](/img/user/_assets/attachments/08%20-%20Sistema%20de%20Estudio%20Tradicional%20(En%20Papel%20o%20con%20IA%20Simple)-1792587738124.webp)

> [!tip]+ ¿Cómo usar esta misma carilla como Tabla Tapable según la modalidad de tu examen?
> - **Entrenamiento Directo (si el examen es SIN hoja de fórmulas):** Tapás con una hoja la 1.ª columna (`Ecuación / Relación`) y, leyendo solo de qué modelo e hipótesis se trata, escribís la fórmula y dibujás su esquema de memoria en borrador.
> - **Entrenamiento Inverso (fundamental CON o SIN hoja de fórmulas):** Dejás visible la 1.ª columna (la ecuación de Bernoulli) y **tapás con una hoja las columnas 2 y 3**: mirando solo la fórmula, tenés que decir en frío y sin dudar las **5 hipótesis obligatorias** ($\rho=\text{cte}$, invíscido, estacionario, misma línea de corriente, sin $W_{\text{eje}}$ ni $Q$) y qué cambia si aparece una bomba, turbina o fricción. Además, si el examen permite formulario, esa misma carilla limpia ya es tu hoja legal para llevar al aula.

---

## Fase II: Retirar la Ayuda de a Poco (*Fading* y Criterio de Avance)

> [!warning] El Enemigo Número Uno: La Ilusión de Competencia (*A Mind for Numbers*)
> En *A Mind for Numbers*, Barbara Oakley explica que la trampa más peligrosa para un estudiante universitario es la **ilusión de competencia**: mirar un ejercicio resuelto en el pizarrón o en un PDF, sentir *"ah, claro, se entiende perfecto"*, y descubrir en el parcial que frente a la hoja en blanco no sabés ni cómo plantear la primera ecuación.
>
> Por otro lado, saltar de golpe de leer un ejemplo resuelto a intentar hacer el problema más difícil de la guía sin ayuda también falla: te trabás a los 2 minutos y terminás espiando el resuelto entero. **El secreto científico es retirar las muletas de a un escalón por vez.**

> [!NOTE] 📈 Gráfico 1: Dinámica de Retención — Curva del Olvido vs. Práctica Activa Espaciada
> ![08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)-1792587781401.webp](/img/user/_assets/attachments/08%20-%20Sistema%20de%20Estudio%20Tradicional%20(En%20Papel%20o%20con%20IA%20Simple)-1792587781401.webp)

### A. La «Escalera de 5 Escalones» (Para problemas y ejercicios prácticos)

Se aplica **por cada tipo de ejercicio** de tu registro (subir un Escalón = mirar menos ayuda). Usás el ejemplo resuelto que ya desarmaste en `I.1` más **4 ejercicios sin resolver del mismo tipo** que elegís vos de tu guía o parciales (si tu guía trae menos de 4 de ese tipo, salteá primero el Escalón 3 y después el 5; si estás en **Modo Emergencia**, hacé la **Escalera corta `1 → 2 → 4`**):

- **🪜 Escalón 1 (El ejemplo desarmado):** Es el ejemplo resuelto del material que ya dividiste en pasos y anotaste al margen en la `Fase I.1`. No se repite, salvo que tengas que retroceder por dos fallos seguidos en el Escalón 2.
- **🪜 Escalón 2 (Con el ejemplo al lado, pero tapado al escribir):** Agarrás el 1.° ejercicio nuevo sin resolver con el ejemplo resuelto al lado, **tapado con una hoja**. Intentás avanzar solo; si te trabás, destapás el ejemplo únicamente para ver cómo destrabarte y **volvés a taparlo con la hoja antes de escribir tu paso en el cuaderno**. *(Esa regla física de volver a tapar antes de escribir corta de raíz el vicio de copiar renglón por renglón cambiando los números).*
- **🪜 Escalón 3 (Solo con tu lista de títulos de pasos):** Agarrás el 2.° ejercicio nuevo dejando a la vista **únicamente la lista de títulos de pasos en infinitivo** que armaste en `I.1` (con el ejemplo resuelto cerrado y guardado).
- **🪜 Escalón 4 (Primera prueba en hoja en blanco):** Agarrás el 3.° ejercicio nuevo y lo resolvés de punta a punta en **hoja en blanco**, teniendo arriba de la mesa **solo lo que te permiten usar en el examen real** (calculadora, tablas o formulario oficial).
- **🪜 Escalón 5 (Confirmación espaciada en hoja en blanco):** Resolvés un 4.° ejercicio comparable del mismo tipo en **hoja en blanco**, pero **después de haber estado al menos 1 hora dedicándote a otra cosa** (otro tema, otra materia o un descanso largo):
  - *Si tu sesión de estudio dura 2 horas o más:* Podés hacer el Escalón 5 en la misma tarde, metiendo otra tarea de $\ge 1\text{ hora}$ en el medio entre el Escalón 4 y el 5.
  - *Si tu sesión dura menos de 2 horas (o en Modo Emergencia):* El Escalón 5 pasa automáticamente a ser tu **prueba en frío del día siguiente**.

#### Reglas de ejecución en cada problema de Ingeniería (Del Dibujo al Control Físico)

Mientras resolvés cualquier ejercicio de la Escalera, entrená estos dos hábitos de escritorio que separan un examen aprobado de un bocho:

1. **Primero el dibujo, después las letras y al final los números:**
   Cuando el problema tenga una configuración física o espacial, dibujá primero el esquema grande (diagrama de cuerpo libre, volumen de control en líneas punteadas, ejes coordenados $x\text{-}y$ y sentido positivo adoptado). En materias de cálculo o álgebra donde no hay un equipo físico, reemplazalo por un **esquema de signos, de dependencias entre variables o del comportamiento de la función** (asíntotas, crecimiento, intervalos).
2. **Control físico del resultado antes de recuadrar (10 segundos):**
   Antes de dar el ejercicio por terminado, frená y chequeá: *¿Tiene unidades coherentes? ¿El signo coincide con mi dibujo? ¿El orden de magnitud es físicamente lógico (o me dio que por un caño domiciliario pasa el caudal del río Paraná)? ¿Qué da mi expresión algebraica en un caso límite evidente (ej. si el ángulo vale $0^\circ$ o la masa tiende a cero)?*

> [!NOTE] 📸 Gráfico 2: Metodología Canónica de Resolución — Del Esquema Físico (DCL) al Planteo Simbólico Cerrado
> ![08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)-1792587710730.webp](/img/user/_assets/attachments/08%20-%20Sistema%20de%20Estudio%20Tradicional%20(En%20Papel%20o%20con%20IA%20Simple)-1792587710730.webp)

---

### B. Demostraciones, Procesos, Argumentos y Producción: «De Atrás para Adelante» (Rondas 1 a 3)

Cuando tenés que aprender una deducción matemática larga, un proceso físico o la estructura de un argumento/texto, el error típico es practicar siempre desde el primer renglón: te sabés de memoria el arranque y te quedás trabado a mitad de camino sin saber adónde tenías que llegar. Usá tu tabla de `I.3` con **encadenamiento hacia atrás (*Backward Fading*)**:

- **🔄 Ronda 1 (Cerrar el último paso):** Con tu tabla de 3 columnas de `I.3` en la mesa, **tapá con una hoja únicamente la Columna 1 del último paso**. Mirando todos los pasos anteriores completos, escribí (o exponé en voz alta) ese cierre final hasta la conclusión.
- **🔄 Ronda 2 (Los dos últimos pasos):** Tapá ahora la Columna 1 de los **dos últimos pasos** y reconstruilos en su orden.
- **🔄 Ronda 3 (Hoja en blanco completa):** Seguí tapando de a un paso más hacia el principio hasta **reconstruir todo el desarrollo o texto desde cero en una hoja en blanco** (o exponerlo corrido sin consultar), diciendo en voz alta qué regla, hipótesis o conector habilita cada paso.

---

### C. Teoría y Gráficos: «Explicar sin Mirar» (En 3 Partes)

- **Parte A (Cerrar todo):** Al terminar de trabajar un grupo de gráficos o conceptos con `I.2`, apagá pantallas y cerrá cuadernos.
- **Parte B (Pizarra / Hoja en blanco en voz alta):** Dibujá el gráfico o esquema desde cero en una hoja en blanco con sus ecuaciones y relaciones adentro, y **explicalo en voz alta como si le estuvieras dando clase a un compañero**.
- **Parte C (Contraste implacable):** Abrí tu apunte y contrastá punto por punto **qué zona, condición de validez o relación omitiste o dijiste al revés**. *(Opcional: grabate con el celular mientras explicás y escuchalo o pasáselo a otra IA/compañero para que te marque baches, verificando siempre sus comentarios contra tu apunte).*

---

### D. ¿Qué cuenta como «Fallo» en un Escalón y qué hacer cuando te trabás?

Para no autoengañarte, tenés un **Fallo en un Escalón** si ocurre cualquiera de estas **4 situaciones**:
- **Situación a:** Planteo físico o conceptual inválido.
- **Situación b:** Método, modelo, regla o fórmula mal elegidos.
- **Situación c:** Pasaron **5 minutos** de reloj sin que puedas escribir el siguiente paso.
- **Situación d:** Abriste más ayuda de la que ese Escalón permite *(ej. espiaste la fórmula o el ejemplo cuando estabas en el Escalón 4 de hoja en blanco)*.
*(Nota: un error de cuenta o despeje aislado al final, con el planteo y las ecuaciones bien hechas, se corrige pero **no cuenta como fallo de Escalón**).*

#### Cómo contrastar tu intento al terminar (incluso si tu guía no trae respuestas)
Durante el intento no se pide ayuda; recién al terminar revisás **todo el desarrollo paso a paso** (nunca solo el número final) en este orden:
1. Contra la **clave o resolución oficial** de la cátedra, si existe.
2. Si la guía no tiene clave (o solo trae el número final), contra el **ejemplo resuelto del mismo tipo** y las **condiciones de validez de tu apunte**.
3. Si eso no alcanza, contra una resolución de referencia externa, consulta al docente o a un compañero (verificando siempre que respete las convenciones de tu cátedra).
4. Si no tenés ninguna referencia confiable para saber si está bien, anotá en el registro *"sin referencia de corrección disponible"* y no des el criterio por cumplido hasta consultarlo.

#### Tabla de Retroceso: Qué hacer tras un fallo (Bajar = mirar más ayuda; tras un fallo nunca subís)

| Escalón donde fallaste | Qué hacés en el **1.er fallo** | Qué hacés si tenés **2 fallos seguidos** |
| :---: | :--- | :--- |
| **Escalón 5 o 4** *(Hoja en blanco)* | Repetís el mismo Escalón con **otro ejercicio** del mismo tipo. | **Bajás al Escalón 3** (volvés a poner tu lista de títulos de pasos a la vista; en Modo Emergencia bajás al 2). |
| **Escalón 3** *(Con lista de pasos)* | Repetís el Escalón 3 con otro ejercicio. | **Bajás al Escalón 2** (con el ejemplo resuelto al lado, tapado al escribir). |
| **Escalón 2** *(Con ejemplo tapado)* | Repetís el Escalón 2 con otro ejercicio. | **Bajás al Escalón 1** (volvés a estudiar el ejemplo resuelto tapando paso por paso). |
| **Escalón 1** *(El ejemplo resuelto)* | Repetís el desarme del ejemplo. | Rehacés la división en pasos de **ese** ejemplo; si sigue sin entenderse, buscás otro ejemplo resuelto del apunte o consultás a docente/compañero. |

---

### E. El Criterio Único para Avanzar de Tema (Cierre de la Fase II)

¿Cuándo podés decir *"listo, ya sé hacer este tipo de problema o demostración"* y pasar al tema siguiente?
- **La regla de las 2 tareas en hoja en blanco separadas por $\ge 1\text{ hora}$:** Necesitás resolver **2 tareas distintas pero comparables en hoja en blanco**, sin consultar nada, separadas por **al menos 1 hora dedicándote a otra cosa**, contrastando el desarrollo completo al final:
  - En **problemas por pasos**, esas 2 tareas son directamente tus **Escalones 4 y 5** (no hace falta que hagas ejercicios extra).
  - En **demostraciones, argumentos y gráficos/conceptos**, son **2 reconstrucciones completas en hoja en blanco separadas por $\ge 1\text{ hora}$**.
  - En **sesiones de menos de 2 horas (o en Modo Emergencia)**, hacés hoy el **Escalón 4** (o 1.ª reconstrucción en blanco): eso **ya te habilita hoy mismo a avanzar al tema siguiente y a meter este tipo en las mezclas de Fase III**, anotando mañana en `Próxima prueba en frío` para completar la segunda verificación al día siguiente.

---

## Fase III: Mezclar Tipos de Ejercicio (Entrenar el Diagnóstico bajo Presión)

> [!warning] La trampa invisible de estudiar por bloques
> Si el lunes hacés 10 problemas de *Cañerías en serie*, el martes 10 de *Cañerías en paralelo* y el miércoles 10 de *Bombas*, caés en una trampa mortal: mientras estás haciendo la guía del martes, **ya sabés de antemano qué fórmula usar porque está escrita en el título de la página**. En el parcial real, los problemas vienen mezclados y sin cartelito arriba.

Cuando en tu Registro ya tenés **2 o más filas con el criterio de avance cumplido** (o con el Escalón 4 hecho hoy en sesiones de $<2\text{ h}$), activás las **4 herramientas de la Fase III**:

### `III.1` El Circuito Mezclado
- **Prohibido resolver en el orden de la guía:** Armate vos un lote (**circuito**) eligiendo ejercicios o tareas de **tipos distintos** de tus guías o de parciales viejos.
- **Buscá el contraste:** Mezclá a propósito problemas que en el enunciado parezcan parecidos pero exijan métodos, balances o estructuras diferentes, y **nunca pongas dos seguidos que se resuelvan igual**.
- **Tamaño del circuito según tu tiempo de sesión:**
  - Sesiones de $\le 1\text{ hora}$ (o Modo Emergencia): **3 a 4 ítems**.
  - Sesiones de $1\text{ a }2\text{ horas}$: **4 a 6 ítems**.
  - Sesiones de $\ge 2\text{ horas}$: **6 a 9 ítems**.
- Anotá en una hoja solo la coordenada de cada uno *(ej. "1.º TP2 Ej. 5; 2.º Parcial 2023 Ej. 1; 3.º Demostración Teorema de Transporte")* sin perder tiempo copiando enunciados largos.

### `III.2` Las «Tres Líneas Antes de Calcular o Redactar» ($\le 120\text{ segundos}$, apuntes cerrados)
Antes de tirar una sola cuenta o párrafo en cada ítem del circuito, poné un cronómetro de **máximo 2 minutos (120 segundos)** con los apuntes cerrados y escribí estas **3 líneas de diagnóstico**:
1. **Línea a (Identificación y disparador):** Qué fenómeno físico, método o estructura argumentativa corresponde aplicar y **qué frase exacta del enunciado te lo indica**.
2. **Línea b (Diferencia con el anterior):** En qué se diferencia este problema del ítem que acabás de resolver antes en el circuito.
3. **Línea c (Herramienta y condiciones de memoria):** La ecuación, balance o regla principal que vas a usar y **qué condiciones de validez exige**, sacadas 100% de tu memoria.
- **Regla de ritmo:** Al principio vas a sentir que tardás más pensando qué método elegir que haciendo la cuenta. **Eso es exactamente lo que buscamos:** entrenar ese diagnóstico en frío evita que te quedes paralizado los primeros 20 minutos del parcial.

### `III.3` La «Tabla de Pares Parecidos» (Vacuna contra trampas de examen)
Cada vez que en un circuito o práctica confundas dos problemas o conceptos que se ven parecidos en la superficie pero cambian de modelo por una condición del enunciado, agregá una fila a esta tabla única en tu cuaderno:

| Enunciado o concepto A | Enunciado o concepto B | Diferencia crítica ($\le 5\text{ palabras}$) | Cómo se plantea A | Cómo se plantea B |
| :--- | :--- | :--- | :--- | :--- |
| *Cilindro-pistón con tope libre* | *Cilindro-pistón conectado a un resorte lineal* | **Presión constante vs. lineal** | Proceso isobárico ($P = \text{cte}$): el trabajo de frontera es un rectángulo $W = P \cdot \Delta V$. | $P$ varía linealmente con $V$: el trabajo es el área del trapecio $W = \frac{P_1 + P_2}{2}\Delta V$. |
| *Flexión pura simétrica en viga* | *Flexión compuesta / oblicua* | **Eje neutro gira o se desplaza** | $\sigma_x = \frac{M_z \cdot y}{I_z}$, el eje neutro pasa por el baricentro. | Superposición de esfuerzo axil $N/A$ y momentos en ambos ejes principales. |

- **Cómo se repasa:** Antes de arrancar tu siguiente circuito mezclado, **tapá con una hoja las 3 últimas columnas** y decilas en voz alta mirando solo las columnas A y B.

### `III.4` Planteo sin Cuentas (En Letras — Complemento para Multiplicar Velocidad)
Cuando en un tipo de ejercicio ya cumpliste el criterio de avance y hacer cuentas largas en la calculadora ya no es tu problema (y no estás en Modo Emergencia), podés multiplicar por 3 la cantidad de variantes que entrenás en una hora haciendo **solo el planteo simbólico cerrado**:
1. Dibujás el esquema y escribís las **hipótesis y condiciones** del enunciado.
2. Escribís todas las **ecuaciones o pasos estructurales solo con letras**, verificando tener **tantas ecuaciones independientes como incógnitas**.
3. **Despejás en letras** hasta llegar a la expresión simbólica final (o armás el esqueleto completo punto por punto).
4. Si el problema pide tomar una decisión o interpretar el resultado, escribís la **respuesta condicional**: *"Si este término da mayor que $X$, entonces la válvula entra en cavitación; si da menor, opera normal"*.
5. Contrastás el desarrollo entero contra una resolución de referencia. *(Si querés practicar sobre un enunciado pasado íntegramente a letras, podés hacerlo vos o pedirle a otra IA que reemplace los datos numéricos por letras sin resolverlo).*
- **Límite importante:** En las **pruebas en frío (`IV.1`)** y en los **simulacros de examen (`IV.2`)**, la resolución se hace **siempre completa con números, unidades y calculadora hasta el resultado final**, porque la destreza algebraica y el uso de tablas bajo reloj también se entrenan.

---

## Fase IV: Repaso Espaciado, Simulacro Real y Corrección Quirúrgica por Falla

### `IV.1` El Orden Fijo de Apertura de cada Sesión (La Regla de las 24–48 Horas)

A partir del **Día 2** de estudio, todas tus sesiones abren respetando **este orden innegociable**:

$$\mathbf{1.^\circ\ Prueba\ en\ frío\ vencida\ (24\text{–}48\text{ h})} \longrightarrow \mathbf{2.^\circ\ Repaso\ de\ tarjetas\ /\ Tabla\ tapable} \longrightarrow \mathbf{3.^\circ\ Trabajo\ nuevo\ o\ Circuito}$$

1. **1.° Prueba en frío a las 24–48 h (ANTES de mirar apuntes o tarjetas):**
   Apenas te sentás en el escritorio, mirá tu Registro y fijate qué tipo de tarea cerraste hace 24 o 48 horas. Antes de abrir el cuaderno o repasar fórmulas, sacá una **hoja en blanco y resolvé 1 tarea nueva de ese tema en frío**.
   - *¿Por qué va primero que todo?* Porque si repasás las tarjetas o leés el formulario justo antes, tu memoria de corto plazo "sopla" la fórmula y te hace creer que ya la tenías consolidada. Hacerla en frío recién sentado mide qué te quedó grabado de verdad después de dormir.
   - *Si sale completa y bien al contrastar:* Anotás la fecha de criterio cumplido en el registro y ese tema vuelve a aparecer espaciado en tus circuitos siguientes (a los ~3 días, y después a la semana).
   - *¿Qué hacés si FALLA la prueba en frío?* No entres en pánico ni releeas todo el apunte: **ese mismo día hacé 1 tarea con ayuda intermedia** según lo que sea:
     - **En problemas:** Bajás al **Escalón 3** (con tu lista de títulos de pasos a la vista; o al Escalón 2 en Modo Emergencia).
     - **En demostraciones o argumentos:** Hacés la **Ronda 2** (tapando los dos últimos pasos con la hoja doblada).
     - **En gráficos o conceptos:** Releés tus fichas de variable y reglas, y redibujás el esquema mirándolas antes de volver a tapar.
     Y agendás repetir la **prueba en frío en hoja en blanco al día siguiente**.
2. **2.° Repaso de tarjetas o Tabla tapable / Formulario Razonado:**
   Recién después de terminar la prueba en frío, dedicá entre **15 minutos y 1 hora** (o **10 a 15 minutos** si tu sesión total es de $\le 1\text{ hora}$) a repasar únicamente las tarjetas vencidas en Anki o las filas de tu **Tabla tapable / Formulario Razonado** que no repasaste ayer o que fallaste la última vez. *Condición:* que las tarjetas jamás te coman el tiempo ni la energía mental para hacer problemas, gráficos y demostraciones.
3. **3.° Trabajo nuevo o Circuito mezclado:** El resto de la sesión lo dedicás a avanzar con tramos nuevos (`Fase I` y `II`) o a correr circuitos mezclados (`Fase III`).

---

### `IV.2` Simulacro con Condiciones Reales de Examen y Técnica de «Rondas ✓ / ✗»

1. **El Simulacro con Cronómetro (Escrito u Oral):**
   Cuando cierres un grupo de unidades y todavía te queden días de margen para corregir baches, agarrá un **parcial o final viejo completo** que no hayas usado todavía. Guardá el celular en otra pieza, dejá arriba de la mesa **únicamente la calculadora, las tablas impresas y el formulario que te permiten tener en el aula**, poné una alarma con el tiempo real del examen y resolvelo de corrido sin espiar ni un renglón.
   - *Si rendís un final o coloquio oral:* Parate frente a una hoja grande en blanco o pizarra sin apuntes y **exponé el tema en voz alta de corrido** mientras trazás los gráficos y ecuaciones en vivo.
2. **La Técnica de las «Rondas ✓ / ✗» (Ideal para repaso final de teoría o preguntas de examen):**
   Armate una lista de 15 o 20 preguntas conceptuales o demostraciones exigentes sacadas de finales viejos. En la **Ronda 1**, respondé todas sin mirar apuntes y calificate sin piedad con **✓** o **✗** *(opcional: antes de corregir, anotá del 1 al 5 cuán seguro estabas; si ponés 5 y estaba mal, detectaste un punto ciego peligroso)*. Al día siguiente, en la **Ronda 2**, no estudies todo de nuevo: atacá **únicamente las que tuvieron ✗**, hasta limpiar la lista.
3. **Regla para la víspera y el día del examen:**
   En la víspera no se empiezan temas nuevos por decreto ni se programan pruebas pendientes para el día siguiente: si hacés alguna prueba en frío vencida, es solo como repaso liviano y se corrige en el momento. **Dormir bien la noche anterior es parte biológica del método** (durante el sueño profundo se consolidan los esquemas que entrenaste). El día del examen no se agenda estudio.

---

### `IV.3` Corrección Quirúrgica después de cada Práctica + Bitácora de «Fallas Raíz»

Después de un simulacro o circuito, **prohibido decir *"me fue flojo en la Unidad 2, voy a releer el apunte"***. Por cada error, contrastá todo el desarrollo paso a paso, anotalo en tu **Bitácora de Fallas Raíz** (al final del cuaderno o en la 7.ª columna de tu Registro) y en la sesión siguiente **aplicá la técnica exacta que corrige esa falla**:

| ¿Qué falla tuviste en el ejercicio o simulacro? | Categoría en tu Bitácora | 🛠️ Técnica exacta que ejecutás en la sesión siguiente (`Arquitecto IV.3`) |
| :--- | :---: | :--- |
| **Confundiste dos casos o enunciados parecidos** | *De estrategia* | Agregás una fila nueva en tu **Tabla de pares parecidos (`III.3`)** y la repasás tapada. |
| **Elegiste mal el planteo, modelo o secuencia de pasos** | *De estrategia* | Rehacés el **desarme del ejemplo resuelto (`I.1`)** con sus 2 notas al margen y volvés al **Escalón 2**. |
| **No entendías cómo se movía una curva o relación en un gráfico** | *De concepto* | Rehacés el **Dibujo con ecuaciones adentro (`I.2`)** y lo explicás en voz alta sin mirar. |
| **No entendías la relación física o teórica (sin gráfico)** | *De concepto* | Volvés a hacer el ciclo **`I.0` (Entrada al tema)** sobre ese tramo con tu fuente y tus fichas de variable. |
| **Te quedaste en blanco a mitad de una demostración o argumento** | *De concepto / método* | Rehacés el **Esqueleto de flechas + Tabla doblable (`I.3`)** y retomás desde la **Ronda 2** (de atrás hacia adelante). |
| **Te olvidaste una fórmula, signo, unidad o condición de validez** | *De memoria / descuido* | Creás su **tarjeta directa e inversa** o fila en tu **Tabla tapable / Formulario Razonado (`I.4`)**. |
| **Abriste una ayuda que no estaba permitida en ese nivel** | *De disciplina* | Repetís el **mismo Escalón** con otro ejercicio respetando a rajatabla la restricción. |
| **Hiciste bien todo el planteo pero pifiaste un despeje o cuenta aislada** | *De cuentas / descuido* | Contrastás el renglón exacto del cálculo contra tu referencia y sumás el chequeo dimensional, **sin bajar de Escalón**. |

> [!example]+ Ejemplos reales de cómo anotar en tu Bitácora de «Fallas Raíz» (*Peak — Anders Ericsson*)
> Prohibido anotar solo *"Rehacer el Ej. 7"*. Escribí en un renglón cuál fue el disparador del error:
> - `[TP3 - Ej. 4]` *De descuido/unidades: Olvidé pasar la temperatura a Kelvin antes de reemplazar en la ecuación de estado de gases ideales.*
> - `[TP4 - Ej. 8]` *De convención: Puse mal el signo del trabajo de expansión porque no declaré mi convención de signos arriba del esquema antes de plantear el 1.er Principio.*
> - `[Parcial 2024 - Ej. 2]` *De estrategia (Pares parecidos): No supe qué estado usar a la salida de la válvula porque olvidé que el estrangulamiento es isoentálpico ($h_1 = h_2$).*

---

## 🚨 Modo Emergencia: Qué hacer si te quedan $\le 3\text{ días}$ o $\le 12\text{ horas}$ totales de estudio

Si se te juntaron parciales, te atrasaste y te quedan **3 días o menos** para rendir (o calculás que de acá a la víspera tenés **12 horas reales de estudio o menos**), intentar aplicar el aparato completo de una cursada normal te va a consumir el tiempo en burocracia.

El **Modo Emergencia** del Arquitecto v3.5 sigue una regla de hierro: **no recorta ni decide a ciegas qué temas "no entran", sino que mantiene el material y recorta al mínimo los pasos de escritorio** con estos **4 ajustes automáticos**:

1. **Ajuste 1 — Registro liviano de 3 columnas:**
   Olvidate de las 7 columnas y de clasificar errores. Trazá solo 3 columnas rápidas:
   `Sección | Tipo de tarea | Salió en blanco y prueba en frío (fecha y ok/falló)`
   Para no anotar listas de ejercicios hechos, simplemente **tildá con lápiz los ejercicios que vayas usando directamente arriba de tu PDF o guía impresa**.
2. **Ajuste 2 — Cero carga de tarjetas en Anki:**
   Armar mazos en Anki a 48 horas del parcial no llega a dar retorno de repetición espaciada. Todo dato exacto, fórmula o condición de uso va directo a una **Tabla tapable de 2 columnas en papel** (`pregunta o condición | fórmula, dato o término`), que se arma en segundos mientras estudiás.
3. **Ajuste 3 — Escalera Corta (`Escalón 1 → 2 → 4`) y sin `III.4`:**
   Salteás los Escalones 3 y 5 y el Planteo sin cuentas (`III.4`):
   - Desarmás rápido el ejemplo resuelto (**Escalón 1**),
   - Hacés 1 ejercicio con el ejemplo al lado tapado al escribir (**Escalón 2**),
   - Y pasás directo a **1 ejercicio en hoja en blanco (Escalón 4)**.
   Si ese Escalón 4 sale bien hoy, **ya te habilita a avanzar de tema y a meterlo en circuitos mezclados**, dejando la segunda verificación para la prueba en frío de mañana a primera hora (y si fallás dos veces en el 4, bajás directo al Escalón 2).
4. **Ajuste 4 — Sesiones compactas cronometradas:**
   - **Primer día:** Hasta 15 minutos para armar el Registro liviano por títulos y el resto de tus horas directo a avanzar tramo por tramo (`Fase I` + Escalera corta `1 → 2 → 4`), sin prueba en frío.
   - **Días siguientes:** Abrís cada sesión con **20 minutos exactos de apertura** (**10 minutos** para 1 prueba en frío vencida de ayer + **10 minutos** repasando tu tabla tapable de 2 columnas con una hoja) y dedicás el 100% del tiempo restante a cubrir tipos nuevos con la Escalera corta o a hacer **circuitos cortos de 3 a 4 ítems**.

---

# 💡 4. Cómo usar una IA común (ChatGPT, Gemini o Claude) SIN configurar nada

Si mientras estudiás en papel querés hacerle consultas puntuales a cualquier chat de IA gratuito en otro chat (sin usar ninguno de los prompts largos de esta web), alcanza con que cumplas estas **4 reglas de supervivencia**:

1. **Nunca le pidas «Resolveme este ejercicio»:**
   Si le sacás una foto al enunciado y leés cómo lo resuelve la IA de corrido, te estás robando el entrenamiento. Escribile siempre:

   > [!example] Prompt 1: Pedir pistas graduales sin spoiler
   > *"Estoy intentando resolver este problema: [pegar enunciado]. Yo planteé esto: [contarle qué pensaste o subir foto de tu hoja]. **No me des la resolución ni el resultado final**: decime únicamente si mi planteo físico es correcto o dame una sola pista, una a la vez, para el paso donde me trabé."*

2. **Usala para destrabar la intuición física o explicar un tramo de a una idea (`Fase I.0`):**
   Cuando el apunte tire una ecuación o un párrafo denso que parece imposible, pedile que te lo explique paso a paso sin tirarte un monólogo eterno:

   > [!example] Prompt 2: Traducir ecuaciones a intuición física y avanzar de a una idea
   > *"Explicame con intuición física para ingeniería mecánica qué representa cada término de esta ecuación, bajo qué hipótesis vale y dame un ejemplo sencillo para entender la idea. Explicalo de a una idea corta por vez y haceme una pregunta antes de seguir."*

3. **Pedile un «problema gemelo» (o pasá el enunciado a letras):**
   Cuando por fin pudiste destrabar un ejercicio difícil mirando la resolución de la cátedra, comprobalo en el acto:

   > [!example] Prompt 3: Verificar transferencia con un problema gemelo
   > *"Acabo de entender cómo se resuelve este ejercicio: [pegar ejercicio]. Inventame un problema parecido que se resuelva con la misma lógica física pero cambiando la configuración o invirtiendo qué es dato y qué es incógnita, sin darme la solución. Esperá a que yo lo resuelva para corregirme."*

   > [!warning] ⚠️ Cuidado cuando una IA común inventa o cambia datos numéricos
   > Tené siempre presente una advertencia crítica: cuando le pedís a un chat de IA sin configurar que cambie números o condiciones de un problema de ingeniería, **puede alterar el fenómeno físico o el caso sin que te des cuenta** (por ejemplo, cambiar una presión y sacar al vapor de su zona en la tabla, o hacer que un flujo cambie de régimen o que el sistema quede incompatible).
   > - Si usás un problema gemelo inventado por la IA, desconfiá si las cuentas dan absurdas.
   > - **La alternativa 100% segura (del Arquitecto v3.5):** Si querés practicar de nuevo el planteo sin ese riesgo, pedile simplemente: *"Pasame este enunciado exacto de mi guía a variables genéricas (letras en vez de números), sin cambiar ninguna condición física y sin resolverlo"*.

4. **Desconfiá siempre de sus cuentas y convenciones, y dale tus apuntes:**
   Las IAs pueden equivocarse en despejes, interpolación de tablas, signos de calor/trabajo y unidades. **Si tenés los apuntes de la cátedra, adjuntalos o pegá el fragmento relevante**, pedile que se base en ellos y que te diga de qué parte lo sacó; si algo no está en los apuntes, que lo aclare. Desconfiá si te dice que tu planteo está bien sin dudar *(las IAs tienden a darte la razón por complacencia)*, y verificá vos las cuentas. La verdad final sobre signos, hipótesis y definiciones siempre la tienen el apunte y los resueltos oficiales de tu cátedra.

---

# 🧭 5. ¿Querés auditar cómo estás estudiando hoy?

> [!abstract]+ Las 4 Checklists de Autoevaluación (Diagnóstico en 5 minutos)
> Si estudiás en papel, el complemento directo de este sistema son las **4 Checklists de Autoevaluación**, donde podés medir en 5 minutos qué hábitos ya tenés y cuáles te conviene sumar antes del parcial (empezando por los 5 puntos marcados con **★**):
>
> - 📘 **[[20. Áreas/Sistema de Estudio con IA/07.1 - Guía de Estudio - Teoría y Ejercicios\|07.1 - Guía de Estudio - Teoría y Ejercicios]]** *(Para materias que mezclan teoría, deducciones y problemas).*
> - 📐 **[[20. Áreas/Sistema de Estudio con IA/07.2 - Guía de Estudio - Ejercicios y Problemas\|07.2 - Guía de Estudio - Ejercicios y Problemas]]** *(Para materias 100% prácticas de cálculo).*
> - 📖 **[[20. Áreas/Sistema de Estudio con IA/07.3 - Guía de Estudio - Teoría y Demostraciones\|07.3 - Guía de Estudio - Teoría y Demostraciones]]** *(Para finales teóricos, orales o materias conceptuales).*
> - 👩‍🏫 **[[20. Áreas/Sistema de Estudio con IA/07.4 - Guía de Enseñanza para Docentes y Tutores\|07.4 - Guía de Enseñanza para Docentes y Tutores]]** *(Si sos ayudante alumno o das clases).*

---

## 🧭 Navegación

> [!info]+ Mapa de Navegación del Sistema
> - *Volver al inicio general:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**
> - *Ver los 7 libros que fundamentan este método:* 📚 **[[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]**
> - *Ir a las checklists de autoevaluación:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]**
> - *Siguiente sección (Historial Técnico):* ➡️ **[[20. Áreas/Sistema de Estudio con IA/99 - Historial de Versiones (Changelog)\|99 - Historial de Versiones (Changelog)]]**
