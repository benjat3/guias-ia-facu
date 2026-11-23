---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/00-inicio-y-flujo-de-trabajo/","title":"Sistema de Estudio con IA • Duilio Torres","tags":["guia","estudio-activo","workflow","ingenieria","gardenEntry"],"dg-note-properties":{"title":"Sistema de Estudio con IA • Duilio Torres","tags":["guia","estudio-activo","workflow","ingenieria","gardenEntry"]}}
---



> 👨‍💻 **Desarrollado por Duilio Torres** • Sistema de Estudio Universitario gratuito *(pensado en Ingeniería, 100% adaptable a cualquier carrera — con IA gratuita o directo en papel)*.

**No hace falta entender todo ni leer toda la página.** Elegí tu situación abajo para ver únicamente lo que te sirve hoy, o pasá directo a **Acceso Directo** si ya sabés qué módulo venís a buscar.

<style>
.dgq-wrap{border:1px solid var(--background-modifier-border,#2f3540);background:var(--background-secondary,#131519);border-radius:14px;padding:18px;margin:16px 0 22px}
.dgq-top{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--background-modifier-border,#2f3540)}
.dgq-modes{display:flex;flex-wrap:wrap;gap:8px}
.dgq-mode-btn{padding:8px 14px;border-radius:999px;border:1px solid var(--background-modifier-border,#2f3540);background:var(--background-primary,#181a1e);color:inherit;cursor:pointer;font:inherit;font-size:.88rem;font-weight:650;transition:all .16s ease}
.dgq-mode-btn:hover{border-color:var(--color-accent,#82b2de)}
.dgq-mode-btn.is-active{background:rgba(130,178,222,0.18);border-color:var(--color-accent,#82b2de);box-shadow:0 0 0 1px rgba(130,178,222,0.35)}
.dgq-badge{font-size:.8rem;opacity:.85;padding:4px 10px;border-radius:999px;background:var(--background-primary-alt,#21252b);color:var(--text-muted,#9ba3b0)}
.dgq-qtitle{font-size:1.08rem;font-weight:700;margin:0 0 10px}
.dgq-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}
.dgq-opt{text-align:left;padding:13px 14px;border-radius:12px;border:1px solid var(--background-modifier-border,#2f3540);background:var(--background-primary,#181a1e);color:inherit;cursor:pointer;font:inherit;line-height:1.38;transition:all .16s ease}
.dgq-opt:hover{border-color:var(--color-accent,#82b2de);transform:translateY(-1px);background:rgba(130,178,222,0.10)}
.dgq-opt.is-picked{border-color:var(--color-accent,#82b2de);background:rgba(130,178,222,0.16);box-shadow:0 0 0 1px rgba(130,178,222,0.40)}
.dgq-opt strong{display:block;font-size:.95rem;margin-bottom:4px}
.dgq-opt span{display:block;font-size:.82rem;opacity:.82}
.dgq-actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:12px}
.dgq-linkbtn{background:transparent;border:none;color:var(--link-color,#e0af70);opacity:.88;font:inherit;font-size:.83rem;cursor:pointer;text-decoration:underline;padding:2px 0}
.dgq-linkbtn:hover{opacity:1;color:var(--link-color-hover,#f0c78e)}
.dgq-hidden{display:none !important}
.dgq-wrap.is-interactive .dgq-panel{display:none}
.dgq-wrap.is-interactive .dgq-panel.is-visible{display:block;animation:dgqIn .2s ease}
.dgq-panel{margin-top:14px;padding-top:10px;border-top:1px dashed var(--background-modifier-border,#2f3540)}
.dgq-bento{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
.dgq-bcard{padding:13px;border-radius:12px;background:var(--background-primary,#181a1e);border:1px solid var(--background-modifier-border,#2f3540)}
.dgq-bcard h4{margin:0 0 8px !important;font-size:.92rem !important;letter-spacing:.02em;opacity:.95}
.dgq-blinks{display:flex;flex-direction:column;gap:6px}
.dgq-bitem{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;background:var(--background-primary-alt,#21252b);color:var(--text-normal,#d5d8de) !important;text-decoration:none !important;font-size:.86rem;font-weight:600;transition:background .15s ease,color .15s ease}
.dgq-bitem:hover{background:rgba(130,178,222,0.16);color:var(--text-accent-hover,#a8ccf0) !important}
.dgq-btag{font-size:.73rem;color:var(--link-color,#e0af70);opacity:.9;font-weight:500;white-space:nowrap}
.dgq-pipe{border:1px solid var(--background-modifier-border,#2f3540);background:var(--background-secondary,#131519);border-radius:14px;padding:16px;margin:16px 0}
.dgq-steps{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
.dgq-stepbtn{padding:8px 12px;border-radius:10px;border:1px solid var(--background-modifier-border,#2f3540);background:var(--background-primary,#181a1e);color:inherit;cursor:pointer;font:inherit;font-size:.84rem;font-weight:650;transition:all .15s ease}
.dgq-stepbtn:hover{border-color:var(--color-accent,#82b2de)}
.dgq-stepbtn.is-active{background:rgba(130,178,222,0.18);border-color:var(--color-accent,#82b2de)}
.dgq-pipe.is-interactive .dgq-pcard{display:none}
.dgq-pipe.is-interactive .dgq-pcard.is-active{display:block;animation:dgqIn .18s ease}
.dgq-pcard{padding:14px;border-radius:12px;background:var(--background-primary,#181a1e);border:1px solid var(--background-modifier-border,#2f3540)}
.dgq-pmeta{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 10px}
.dgq-chip{font-size:.78rem;padding:4px 9px;border-radius:999px;background:var(--tag-background,#232b36);color:var(--tag-color,#a6c7e6);border:1px solid var(--background-modifier-border,#2f3540)}
body:has(.dgq-wrap) .floating-toc-widget{display:none !important}
@keyframes dgqIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
</style>
<div class="dgq-wrap dg-no-toc" id="dgQuizApp">
<div class="dgq-top">
<div class="dgq-modes">
<button type="button" class="dgq-mode-btn is-active" data-mode="quiz">🧭 Soy nuevo / Ayudame a elegir</button>
<button type="button" class="dgq-mode-btn" data-mode="direct">⚡ Ya conozco el sistema (Acceso Directo)</button>
</div>
<span class="dgq-badge" id="dgqProgress">Paso 1 de 2</span>
</div>
<div id="dgqQuizView">
<div id="dgqStep1">
<div class="dgq-qtitle">¿En qué situación estás ahora mismo?</div>
<div class="dgq-grid">
<button type="button" class="dgq-opt" data-q1="emergencia"><strong>🚨 Tengo el examen encima / poco tiempo</strong><span>Necesito ir directo a lo evaluable con IA, sin pasos largos</span></button>
<button type="button" class="dgq-opt" data-q1="arranque"><strong>🚀 No puedo arrancar / estoy procrastinando</strong><span>Me cuesta sentarme a empezar o me disperso apenas abro el apunte</span></button>
<button type="button" class="dgq-opt" data-q1="materia"><strong>📚 Tengo tiempo y quiero estudiar una materia</strong><span>Quiero preparar la cursada o un parcial de forma ordenada</span></button>
<button type="button" class="dgq-opt" data-q1="autoeval"><strong>🔍 Quiero revisar cómo estoy estudiando</strong><span>Autoevaluación de hábitos y fundamento científico</span></button>
</div>
</div>
<div id="dgqStep2" class="dgq-hidden" style="margin-top:14px">
<div class="dgq-qtitle">¿Cómo preferís estudiar esta materia?</div>
<div class="dgq-grid">
<button type="button" class="dgq-opt" data-q2="ia-completa"><strong>🤖 Sistema Completo con IA (Paso a paso)</strong><span>Prompts listos para Checklists, Tutor, Simulador de Exámenes y Anki</span></button>
<button type="button" class="dgq-opt" data-q2="papel"><strong>📝 Papel / Cuaderno o IA Simple (Sin configurar nada)</strong><span>Arquitecto v6.0 (le subís apuntes y te arma el plan) o Método en Papel</span></button>
</div>
</div>
<div class="dgq-actions">
<button type="button" class="dgq-linkbtn dgq-hidden" id="dgqReset">↺ Volver a elegir</button>
<button type="button" class="dgq-linkbtn" id="dgqShowAll">Ver las 5 rutas juntas</button>
</div>
</div>
<div id="dgqDirectView" class="dgq-hidden">
<div class="dgq-bento" id="dgqBentoGrid">
<div class="dgq-bcard">
<h4>🔥 Urgencias y Arranque</h4>
<div class="dgq-blinks">
<a class="dgq-bitem" data-note-match="00B" href="/20-areas/sistema-de-estudio-con-ia/00-b-modo-emergencia-ruta-rapida-con-ia/"><span>🚨 Modo Emergencia (IA)</span><span class="dgq-btag">Ruta rápida</span></a>
<a class="dgq-bitem" data-note-match="00C" href="/20-areas/sistema-de-estudio-con-ia/00-c-copiloto-arranque-vencer-la-procrastinacion/"><span>🚀 Copiloto ARRANQUE</span><span class="dgq-btag">Procrastinación</span></a>
</div>
</div>
<div class="dgq-bcard">
<h4>🤖 Sistema Completo (IA)</h4>
<div class="dgq-blinks">
<a class="dgq-bitem" data-note-match="01 -" href="/20-areas/sistema-de-estudio-con-ia/01-extractor-de-checklists/"><span>1. Extractor de Checklists</span><span class="dgq-btag">Temario</span></a>
<a class="dgq-bitem" data-note-match="01B" href="/20-areas/sistema-de-estudio-con-ia/01-b-extractor-de-clases-y-voz-de-la-catedra/"><span>1B. Voz de la Cátedra</span><span class="dgq-btag">Opcional</span></a>
<a class="dgq-bitem" data-note-match="02 -" href="/20-areas/sistema-de-estudio-con-ia/02-tutor-personal-cognitivo/"><span>2. Tutor Personal</span><span class="dgq-btag">Estudio activo</span></a>
<a class="dgq-bitem" data-note-match="03 -" href="/20-areas/sistema-de-estudio-con-ia/03-simulador-y-generador-de-examenes-de-catedra/"><span>3. Simulador de Exámenes</span><span class="dgq-btag">Parciales</span></a>
<a class="dgq-bitem" data-note-match="04 -" href="/20-areas/sistema-de-estudio-con-ia/04-generador-de-tarjetas-de-anki/"><span>4. Generador de Anki</span><span class="dgq-btag">CSV</span></a>
<a class="dgq-bitem" data-note-match="04B" href="/20-areas/sistema-de-estudio-con-ia/04-b-importacion-a-anki-e-image-occlusion-tutorial-visual/"><span>4B. Importar a Anki</span><span class="dgq-btag">Visual</span></a>
</div>
</div>
<div class="dgq-bcard">
<h4>📝 Papel / 1 sola IA</h4>
<div class="dgq-blinks">
<a class="dgq-bitem" data-note-match="08 -" href="/20-areas/sistema-de-estudio-con-ia/08-sistema-de-estudio-tradicional-en-papel-o-con-ia-simple/"><span>🤖 Arquitecto v6.0 + Método en Papel</span><span class="dgq-btag">Universal</span></a>
</div>
</div>
<div class="dgq-bcard">
<h4>🧭 Apoyo y Ciencia</h4>
<div class="dgq-blinks">
<a class="dgq-bitem" data-note-match="05 -" href="/20-areas/sistema-de-estudio-con-ia/05-modelos-recomendados-por-tarea/"><span>🤖 Modelos de IA</span><span class="dgq-btag">Qué usar</span></a>
<a class="dgq-bitem" data-note-match="07 -" href="/20-areas/sistema-de-estudio-con-ia/07-indice-de-guias-y-checklists-de-aprendizaje/"><span>✅ Checklists de Hábitos</span><span class="dgq-btag">07.1–07.4</span></a>
<a class="dgq-bitem" data-note-match="06 -" href="/20-areas/sistema-de-estudio-con-ia/06-biblioteca-de-ciencia-del-aprendizaje/"><span>📚 Biblioteca Científica</span><span class="dgq-btag">7 libros</span></a>
<a class="dgq-bitem" data-note-match="99 -" href="/20-areas/sistema-de-estudio-con-ia/99-historial-de-versiones-changelog/"><span>📜 Historial de Versiones</span><span class="dgq-btag">Cambios</span></a>
</div>
</div>
</div>
</div>
<div class="dgq-panel" data-route="emergencia">

> [!danger] 🚨 Tu ruta recomendada: Modo Emergencia (Ruta Rápida con IA)
> No te pongas a leer resúmenes ni a construir checklists gigantes o mazos completos de Anki:
> * **Tenés parciales viejos:** Usá el mapa de examen (`03`) + probá en hoja en blanco + destrabá solo tus fallas en el Tutor (`02`, `Profundidad: Baja`).
> * **Querés un plan rápido en 1 solo chat:** Subí tus apuntes al **Arquitecto (`08`)** y mandale `/emergencia`.
> * **Tenés clases de repaso grabadas:** Extraé en minutos qué dijo el profesor que entra y qué descartó (`01B`).
> 👉 **[[20. Áreas/Sistema de Estudio con IA/00B - Modo Emergencia (Ruta Rápida con IA)\|Abrir Guía de Modo Emergencia (IA) →]]** · *(¿El bloqueo no te deja ni empezar? Pasá primero 5 min por [[20. Áreas/Sistema de Estudio con IA/00C - Copiloto ARRANQUE (Vencer la Procrastinación)\|Copiloto ARRANQUE]])*

</div>
<div class="dgq-panel" data-route="arranque">

> [!tip] 🚀 Tu ruta recomendada: Copiloto ARRANQUE
> Ideal cuando sabés qué tendrías que hacer pero **no podés sentarte**, venís de fallar ayer o el perfeccionismo te paraliza:
> * Te da **1 acción física concreta de 5–8 minutos** en versión borrador para romper la inercia sin sermones ni autoayuda.
> * Trae comandos al vuelo para trabas (`/traba`), distracciones (`/fuga`), cansancio (`/quemado`) o días malos (`/15min`), y guarda tu **`Handoff`** al cerrar (`/cierre`).
> * Sirve para cualquier materia, TP, trámite o hábito (ej. entrenar).
> 👉 **[[20. Áreas/Sistema de Estudio con IA/00C - Copiloto ARRANQUE (Vencer la Procrastinación)\|Abrir Copiloto ARRANQUE →]]** · *(Después de destrabarte, seguí con [[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|el Tutor]] o [[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|tu cuaderno]])*

</div>
<div class="dgq-panel" data-route="ia-completa">

> [!tip] 🤖 Tu ruta recomendada: Sistema Completo con IA (Paso a paso)
> Pensado para llevar la cursada ordenada usando **Google AI Studio (`Gemini Hydrogen` / `Neon`) + Anki**:
> 1. **Temario ([[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01]]):** Sacás la checklist completa de la unidad sin spoilers *(y opcionalmente señales de clases grabadas en [[20. Áreas/Sistema de Estudio con IA/01B - Extractor de Clases y Voz de la Cátedra\|01B]])*.
> 2. **Estudio activo ([[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02]]):** Estudiás punto por punto con un tutor socrático (1 pregunta corta por turno, sin regalarte soluciones).
> 3. **Simulacros reales ([[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03]]):** Generás parciales idénticos a los de tu cátedra y te los corrige por *arrastre*.
> 4. **No olvidar nada ([[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04]] → [[20. Áreas/Sistema de Estudio con IA/04B - Importación a Anki e Image Occlusion (Tutorial Visual)\|04B]]):** Creás las tarjetas CSV e importás a Anki con tutorial visual.
> 👉 **[[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|Empezar por la Fase 1 (Extractor de Checklists) →]]** · *(Ver qué modelo elegir en cada paso: [[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]])*

</div>
<div class="dgq-panel" data-route="papel">

> [!tip] 📝 Tu ruta recomendada: Papel, Cuaderno o Arquitecto IA (Guía 08)
> Tenés **dos opciones** listas dentro de la misma página, sin configurar 5 herramientas ni usar Anki:
> 1. **Con una IA que te arme el plan a medida (Sección 1):** Copiás el **Arquitecto v6.0**, subís tus apuntes y te arma la rutina exacta y te acompaña sesión a sesión.
> 2. **100% en Papel y Birome (Secciones 2 a 4):** Sistema **Pareto 80/20 para Ingeniería** (lo leés en 10–15 min) cubriendo teoría, ejercicios y exámenes escritos, orales, de desarrollo o multiple choice + pautas breves si usás una IA común sin prompts largos.
> 👉 **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|Abrir Guía 08 (Arquitecto v6.0 + Método en Papel) →]]**

</div>
<div class="dgq-panel" data-route="autoeval">

> [!info] 🔍 Tu ruta recomendada: Autoevaluación de Hábitos y Fundamentos
> Antes de cambiar de herramienta, revisá en 5 minutos si no estás cayendo en la *ilusión de competencia* (creer que sabés solo porque entendiste al leer):
> * **4 Checklists interactivas:** Elegí tu perfil (teórico-práctico, solo problemas, teoría/demostraciones o docente) y marcá qué hábitos aplicás hoy.
> * **Biblioteca científica:** Los 7 libros clave que explican *por qué* funciona este sistema (empezando por *A Mind for Numbers* y *Make It Stick*).
> 👉 **[[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|Abrir Checklists de Autoevaluación →]]** · **[[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|Ver Biblioteca Científica →]]**

</div>
</div>

---

## 🧩 Explorador Visual del Sistema Completo *(¿Qué pasa en cada paso?)*

Si elegiste (o querés entender) cómo trabajan juntas las fases de IA, tocá cada paso para ver qué subís, qué archivo te devuelve y qué guía abrir:

<div class="dgq-pipe" id="dgPipeExplorer">
<div class="dgq-steps">
<button type="button" class="dgq-stepbtn is-active" data-step="p1">1️⃣ Checklists (01)</button>
<button type="button" class="dgq-stepbtn" data-step="p1b">🎙️ Clases (01B)</button>
<button type="button" class="dgq-stepbtn" data-step="p2">2️⃣ Tutor (02)</button>
<button type="button" class="dgq-stepbtn" data-step="p3">3️⃣ Simulador (03)</button>
<button type="button" class="dgq-stepbtn" data-step="p4">4️⃣ Tarjetas (04)</button>
<button type="button" class="dgq-stepbtn" data-step="p5">5️⃣ Importar Anki (04B)</button>
</div>
<div class="dgq-pcard is-active" data-step-panel="p1">
<strong>Fase 1: Extraer el temario completo sin spoilers</strong>
<div class="dgq-pmeta">
<span class="dgq-chip">📥 Subís: Programa + Apuntes + TPs de 1 unidad</span>
<span class="dgq-chip">📤 Obtenés: Checklist unidad por unidad (<code>- [ ]</code>)</span>
<span class="dgq-chip">🤖 Motor: AI Studio (Gemini Hydrogen High / Extra High)</span>
</div>

> Subís los PDFs de cada unidad desde tu PC en [Google AI Studio](https://aistudio.google.com/) y usás el **[[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|Prompt 01]]** de a una unidad por turno (`Seguí`) para no saltear nada.

</div>
<div class="dgq-pcard" data-step-panel="p1b">
<strong>Módulo Satélite Opcional: Voz de la Cátedra (solo si graban clases)</strong>
<div class="dgq-pmeta">
<span class="dgq-chip">📥 Subís: Videos o audios de clases</span>
<span class="dgq-chip">📤 Obtenés: Archivo maestro <code>voz_catedra.md</code></span>
<span class="dgq-chip">🤖 Motor: AI Studio (Gemini Hydrogen High / Extra High) · NotebookLM opcional p/ YouTube</span>
</div>

> Audita lo que el docente advierte en clase (qué **no** entra, qué exige justificar y qué trampas repite). Después lo sumás al resto de los módulos. 👉 **[[20. Áreas/Sistema de Estudio con IA/01B - Extractor de Clases y Voz de la Cátedra\|Abrir Módulo 01B →]]**

</div>
<div class="dgq-pcard" data-step-panel="p2">
<strong>Fase 2: Estudio activo punto por punto con el Tutor</strong>
<div class="dgq-pmeta">
<span class="dgq-chip">📥 Pegás: 1 casilla de tu checklist + profundidad</span>
<span class="dgq-chip">📤 Obtenés: Práctica socrática + bloque <code>HANDOFF</code></span>
<span class="dgq-chip">🤖 Motor: AI Studio (Gemini Hydrogen Medium diario / High-Extra High o Neon)</span>
</div>

> Nunca te regala la solución ni larga resúmenes eternos: avanza **de a 1 pregunta corta por turno** hasta que dominás el punto. 👉 **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|Abrir Tutor Personal →]]**

</div>
<div class="dgq-pcard" data-step-panel="p3">
<strong>Fase 3: Ingeniería inversa y Simulacros de Cátedra</strong>
<div class="dgq-pmeta">
<span class="dgq-chip">📥 Subís: Parciales/finales viejos + TPs</span>
<span class="dgq-chip">📤 Obtenés: <code>mapa.md</code> → <code>banco.md</code> → <code>modelo.md</code> → Simulacros</span>
<span class="dgq-chip">🤖 Motor: AI Studio (Gemini Hydrogen High / Extra High o Neon Extra High)</span>
</div>

> Podés rendir a ciegas en papel y mandar **`Corregir`** *(Ruta A, con puntaje parcial por arrastre)* o generar parciales completos resueltos para imprimir y compartir *(Ruta B: `Paquete`)*. 👉 **[[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|Abrir Simulador 03 →]]**

</div>
<div class="dgq-pcard" data-step-panel="p4">
<strong>Fase 4: Generar tarjetas CSV para repaso espaciado</strong>
<div class="dgq-pmeta">
<span class="dgq-chip">📥 Mandás: De a 4–6 diapositivas o 1–2 págs.</span>
<span class="dgq-chip">📤 Obtenés: Bloque <code>.csv</code> listo para Anki (CON o SIN fórmulas)</span>
<span class="dgq-chip">🤖 Motor: AI Studio (Gemini Hydrogen Medium / High)</span>
</div>

> Adapta las preguntas según si tu materia permite llevar formulario (evalúa criterios y variables) o exige recordar ecuaciones de memoria. Incluye tarjetas para tapar esquemas (`[CREAR IMAGE OCCLUSION]`). 👉 **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|Abrir Generador Anki 04 →]]**

</div>
<div class="dgq-pcard" data-step-panel="p5">
<strong>Fase 5: Cargar el CSV en Anki y tapar esquemas (Visual)</strong>
<div class="dgq-pmeta">
<span class="dgq-chip">📥 Usás: Archivo <code>.csv</code> + Anki Desktop / AnkiDroid</span>
<span class="dgq-chip">📤 Obtenés: Mazo sincronizado en PC y celular</span>
<span class="dgq-chip">🖼️ Tutorial paso a paso con capturas</span>
</div>

> Te muestra exactamente qué casillas marcar al importar el `.csv`, cómo convertir a *Image Occlusion* y qué botón tocar al sincronizar para no pisar tus tarjetas. 👉 **[[20. Áreas/Sistema de Estudio con IA/04B - Importación a Anki e Image Occlusion (Tutorial Visual)\|Abrir Tutorial Visual Anki 04B →]]**

</div>
</div>

> [!warning]- ⚠️ Antes de empezar con IA: 3 Reglas de Oro para no frustrarte *(clic para desplegar)*
> 1. **`Gemini Hydrogen` (`Low` → `Extra High`) en Google AI Studio es tu caballo de batalla:** súper económico y rinde excelente en casi todo: **`Low`** es muy rápido (tipo *Flash*) para consultas cortas y `00C`, **`Medium`** anda muy bien para el **Tutor Cognitivo (`02`)** y el uso diario, **`High`** es ideal para checklists/Anki/simulacros, y **`Extra High`** alcanza o supera al antiguo *Argon High* a una fracción del costo. Activá siempre `Media resolution: High` y subí los PDFs desde tu PC.
> 2. **`Gemini Neon` (`Extra High`) para las tareas más complejas:** es lo más potente disponible hoy, especialmente para armar el **`/plan` en 3 pasos** con el **Arquitecto (`08` v6.0)** o resolver simulacros integradores muy exigentes (`03`). *(Nota: no he probado modelos de otras empresas como Claude, ChatGPT, DeepSeek o Qwen; si los probás, contame cómo te fue).*
> 3. **NotebookLM queda hoy poco recomendado *(y PROHIBIDO conectarlo desde Gemini Web)*:** en prácticamente cualquier tarea hoy rinden mejor Hydrogen o Neon directo en Google AI Studio. Si alguna vez usás NotebookLM (ej. links de YouTube en `01B`), entrá directo en [notebook.google.com](https://notebook.google.com/) y nunca desde el conector lateral de `gemini.google.com` porque ignora archivos. *(Más detalles en [[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]])*.

> [!abstract]- 🧠 Ver mapa visual completo de conexiones (Mermaid) *(clic para desplegar)*
>
> ```mermaid
> flowchart TD
>     INICIO["<b>PUNTO DE ENTRADA (00)</b><br>¿Urgencia, bloqueo o cursada normal?"]
>     URG["<b>00B - MODO EMERGENCIA (IA)</b><br>Pinza rápida 03 + 02 o /emergencia"]
>     ARR["<b>00C - COPILOTO ARRANQUE</b><br>Destraba procrastinación y sesiones"]
>     PAPEL["<b>08 - PAPEL O IA SIMPLE</b><br>Arquitecto v6.0 + Método en Papel"]
>     FUENTES["<b>FUENTES DE CÁTEDRA</b><br>Programa, apuntes, TPs y parciales"]
>     VOZ["<b>01B - VOZ DE LA CÁTEDRA (Opcional)</b><br>Extrae alcance y trampas de clases<br><code>voz_catedra.md</code>"]
>     F1["<b>01 - CHECKLISTS</b><br>Temario unidad por unidad"]
>     F2["<b>02 - TUTOR PERSONAL</b><br>Práctica socrática 1 consigna"]
>     F3["<b>03 - SIMULADOR</b><br>mapa + banco + modelo -> Examen"]
>     F4["<b>04 - GENERADOR ANKI</b><br>Tarjetas CSV CON/SIN fórmulas"]
>     F5["<b>04B - TUTORIAL ANKI</b><br>Importación e Image Occlusion"]
>
>     INICIO -.-> URG
>     INICIO -.-> ARR
>     INICIO -.-> PAPEL
>     INICIO --> FUENTES
>     FUENTES --> F1
>     FUENTES -.-> VOZ
>     VOZ -.-> F1
>     VOZ -.-> F2
>     VOZ -.-> F3
>     VOZ -.-> F4
>     F1 --> F2
>     F2 --> F3
>     F3 --> F4
>     F4 --> F5
> ```

---

## 🗺️ Mapa Completo de Guías {#mapa-completo}

| Grupo | Guía / Herramienta | Para qué sirve |
| :--- | :--- | :--- |
| **Urgencias y Arranque** | **[[20. Áreas/Sistema de Estudio con IA/00B - Modo Emergencia (Ruta Rápida con IA)\|00B - Modo Emergencia (Ruta Rápida con IA)]]** | Ruta rápida con IA cuando tenés poco tiempo frente al volumen de examen. |
| **Urgencias y Arranque** | **[[20. Áreas/Sistema de Estudio con IA/00C - Copiloto ARRANQUE (Vencer la Procrastinación)\|00C - Copiloto ARRANQUE (Vencer la Procrastinación)]]** | Vencer la parálisis para empezar, cortar distracciones y retomar con `Handoff`. |
| **Sistema Completo (IA)** | **[[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]** | Armar la hoja de ruta unidad por unidad en `- [ ]` sin spoilers. |
| **Sistema Completo (IA)** | **[[20. Áreas/Sistema de Estudio con IA/01B - Extractor de Clases y Voz de la Cátedra\|01B - Extractor de Clases y Voz de la Cátedra]]** | *(Opcional)* Auditar clases grabadas para saber qué entra y qué trampas advierten. |
| **Sistema Completo (IA)** | **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]** | Estudiar paso a paso con pistas graduales (AI Studio con Hydrogen Medium; NotebookLM opcional). |
| **Sistema Completo (IA)** | **[[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]** | Ingeniería inversa de parciales viejos y simulacros con corrección real. |
| **Sistema Completo (IA)** | **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]** | Crear mazos `.csv` optimizados (con o sin hoja de fórmulas). |
| **Sistema Completo (IA)** | **[[20. Áreas/Sistema de Estudio con IA/04B - Importación a Anki e Image Occlusion (Tutorial Visual)\|04B - Importación a Anki e Image Occlusion (Tutorial Visual)]]** | Cómo importar `.csv` a Anki, tapar esquemas y sincronizar PC/celular sin borrar nada. |
| **Papel / 1 sola IA** | **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]** | **Arquitecto v6.0** (plan a medida en 1 chat) + **Sistema Pareto 80/20 en Papel** para Ingeniería (teoría, ejercicios y exámenes en ~15 min). |
| **Apoyo y Ciencia** | **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]** | Qué modelo elegir en Google AI Studio (`Gemini Hydrogen` / `Gemini Neon`) según la tarea. |
| **Apoyo y Ciencia** | **[[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]** | Los 7 libros científicos que fundamentan el método. |
| **Apoyo y Ciencia** | **[[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]** | 4 checklists interactivas (`07.1` a `07.4`) para auditar tu forma de estudiar. |
| **Apoyo y Ciencia** | **[[20. Áreas/Sistema de Estudio con IA/99 - Historial de Versiones (Changelog)\|99 - Historial de Versiones (Changelog)]]** | Registro de mejoras y evolución de las herramientas. |

> [!tip]- 📸 ¿Necesitás ver los tutoriales con capturas de pantalla de AI Studio y Anki?
> * **Cómo configurar Google AI Studio (System Instructions, Thinking level, Media High):** está explicado con capturas dentro de **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**.
> * **Cómo importar CSV, usar *Image Occlusion* y sincronizar Anki:** está en **[[20. Áreas/Sistema de Estudio con IA/04B - Importación a Anki e Image Occlusion (Tutorial Visual)\|04B - Importación a Anki e Image Occlusion (Tutorial Visual)]]**.
> * ***(Opcional / Secundario)* Cómo cargar el Tutor de 27k caracteres en NotebookLM:** está explicado con capturas dentro de **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]**.

---

## 🤝 Propósito del Proyecto y Contacto

Armé este sistema durante mis cursadas de Ingeniería Mecánica con una sola idea: **ayudar de forma 100% gratuita a cualquier estudiante universitario a estudiar mejor**, usando la IA para pensar más y no para pensar menos.

* **Libre y abierto:** Compartilo con tus compañeros o adaptalo a tu propia carrera (otra ingeniería, exactas, medicina, derecho, económicas o idiomas).
* **Contacto y sugerencias:** Si tenés dudas implementándolo, encontrás algún error o querés sugerir una mejora, escribime a **[duiliobtorres@gmail.com](mailto:duiliobtorres@gmail.com)**.

<script>
(function(){
var app=document.getElementById("dgQuizApp");
if(app){
app.classList.add("is-interactive");
var modeBtns=app.querySelectorAll(".dgq-mode-btn");
var quizView=document.getElementById("dgqQuizView");
var directView=document.getElementById("dgqDirectView");
var step2=document.getElementById("dgqStep2");
var progress=document.getElementById("dgqProgress");
var resetBtn=document.getElementById("dgqReset");
var showAllBtn=document.getElementById("dgqShowAll");
var q1Btns=app.querySelectorAll("[data-q1]");
var q2Btns=app.querySelectorAll("[data-q2]");
var panels=app.querySelectorAll(".dgq-panel");
var allShown=false;

function hidePanels(){
panels.forEach(function(p){p.classList.remove("is-visible");});
}
function showRoute(route){
allShown=false;
showAllBtn.textContent="Ver las 5 rutas juntas";
panels.forEach(function(p){
p.classList.toggle("is-visible",p.getAttribute("data-route")===route);
});
progress.textContent="Tu ruta lista";
resetBtn.classList.remove("dgq-hidden");
}
function resetQuiz(){
allShown=false;
q1Btns.forEach(function(b){b.classList.remove("is-picked");});
q2Btns.forEach(function(b){b.classList.remove("is-picked");});
step2.classList.add("dgq-hidden");
resetBtn.classList.add("dgq-hidden");
showAllBtn.textContent="Ver las 5 rutas juntas";
progress.textContent="Paso 1 de 2";
hidePanels();
}

modeBtns.forEach(function(btn){
btn.addEventListener("click",function(){
var m=btn.getAttribute("data-mode");
modeBtns.forEach(function(b){b.classList.toggle("is-active",b===btn);});
if(m==="direct"){
quizView.classList.add("dgq-hidden");
directView.classList.remove("dgq-hidden");
hidePanels();
progress.textContent="Acceso directo";
}else{
directView.classList.add("dgq-hidden");
quizView.classList.remove("dgq-hidden");
progress.textContent=step2.classList.contains("dgq-hidden")?"Paso 1 de 2":"Paso 2 de 2";
}
});
});

q1Btns.forEach(function(btn){
btn.addEventListener("click",function(){
var val=btn.getAttribute("data-q1");
q1Btns.forEach(function(b){b.classList.toggle("is-picked",b===btn);});
q2Btns.forEach(function(b){b.classList.remove("is-picked");});
if(val==="materia"){
hidePanels();
step2.classList.remove("dgq-hidden");
resetBtn.classList.remove("dgq-hidden");
progress.textContent="Paso 2 de 2";
}else{
step2.classList.add("dgq-hidden");
showRoute(val);
}
});
});

q2Btns.forEach(function(btn){
btn.addEventListener("click",function(){
q2Btns.forEach(function(b){b.classList.toggle("is-picked",b===btn);});
showRoute(btn.getAttribute("data-q2"));
});
});

resetBtn.addEventListener("click",resetQuiz);

showAllBtn.addEventListener("click",function(){
allShown=!allShown;
if(allShown){
panels.forEach(function(p){p.classList.add("is-visible");});
showAllBtn.textContent="Ocultar lista de rutas";
progress.textContent="Todas las rutas";
}else{
hidePanels();
showAllBtn.textContent="Ver las 5 rutas juntas";
progress.textContent="Paso 1 de 2";
}
});

var internalLinks=document.querySelectorAll("table a.internal-link, a.internal-link");
var bentoLinks=app.querySelectorAll("[data-note-match]");
bentoLinks.forEach(function(bl){
var needle=bl.getAttribute("data-note-match");
for(var i=0;i<internalLinks.length;i++){
var txt=(internalLinks[i].textContent||"")+" "+(internalLinks[i].getAttribute("href")||"");
if(txt.indexOf(needle)!==-1&&internalLinks[i].getAttribute("href")&&internalLinks[i].getAttribute("href")!=="/404"){
bl.setAttribute("href",internalLinks[i].getAttribute("href"));
break;
}
}
});
}

var pipe=document.getElementById("dgPipeExplorer");
if(pipe){
pipe.classList.add("is-interactive");
var sBtns=pipe.querySelectorAll(".dgq-stepbtn");
var pCards=pipe.querySelectorAll(".dgq-pcard");
sBtns.forEach(function(sb){
sb.addEventListener("click",function(){
var id=sb.getAttribute("data-step");
sBtns.forEach(function(x){x.classList.toggle("is-active",x===sb);});
pCards.forEach(function(c){c.classList.toggle("is-active",c.getAttribute("data-step-panel")===id);});
});
});
}
})();
</script>
