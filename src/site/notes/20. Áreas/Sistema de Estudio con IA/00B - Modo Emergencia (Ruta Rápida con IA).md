---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/00-b-modo-emergencia-ruta-rapida-con-ia/","title":"00B - Modo Emergencia (Ruta Rápida con IA)","tags":["guia","emergencia","ruta-rapida","ia","estudio-activo"],"dg-note-properties":{"title":"00B - Modo Emergencia (Ruta Rápida con IA)","tags":["guia","emergencia","ruta-rapida","ia","estudio-activo"]}}
---



# 🚨 Modo Emergencia — Ruta Rápida con IA

> [!warning] 📌 ¿Cuándo usar esta guía?
> Activala cuando **el tiempo disponible hasta el examen ya no alcanza para recorrer el sistema completo** (`01` → `02` → `03` → `04`) respecto al volumen de materia que tenés por delante.
>
> **Regla madre en emergencia:** Acá se recorta la burocracia (checklists extensas, Anki desde cero, resúmenes prolijos), **no el criterio**. No podes unidades enteras a ciegas por pánico: andá directo a practicar lo que realmente evalúan y repará fallas activamente.
> *(Si preferís estudiar **sin herramientas complejas de IA, en papel y birome**, seguí la guía de [[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]).*

<style>
.dge-box{border:1px solid color-mix(in srgb,var(--callout-error,#bd7670) 38%,var(--background-modifier-border,#2f3540));background:var(--background-secondary,#131519);border-radius:14px;padding:18px;margin:18px 0}
.dge-title{font-weight:700;font-size:1.05rem;margin-bottom:10px}
.dge-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:12px}
.dge-btn{text-align:left;padding:11px 13px;border-radius:10px;border:1px solid var(--background-modifier-border,#2f3540);background:var(--background-primary,#181a1e);color:inherit;cursor:pointer;font:inherit;line-height:1.35;transition:all .16s ease}
.dge-btn:hover{border-color:var(--callout-error,#bd7670);transform:translateY(-1px)}
.dge-btn.is-active{border-color:var(--callout-error,#bd7670);background:color-mix(in srgb,var(--callout-error,#bd7670) 14%,var(--background-primary,#181a1e));box-shadow:0 0 0 1px color-mix(in srgb,var(--callout-error,#bd7670) 40%,transparent)}
.dge-btn strong{display:block;font-size:.94rem;margin-bottom:3px}
.dge-btn span{display:block;font-size:.82rem;opacity:.82}
.dge-box.is-interactive .dge-card{display:none}
.dge-box.is-interactive .dge-card.is-active{display:block;animation:dgeFade .18s ease}
.dge-card{border-top:1px dashed var(--background-modifier-border,#2f3540);padding-top:12px;margin-top:8px}
.dge-all-btn{background:transparent;border:none;color:var(--link-color,#e0af70);opacity:.85;font-size:.82rem;cursor:pointer;text-decoration:underline;padding:4px 0}
@keyframes dgeFade{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}
</style>
<div class="dge-box dg-no-toc" id="dgEmergencyTriage">
<div class="dge-title">⚡ Triage en 1 clic: ¿Qué tenés en la mano ahora mismo?</div>
<div class="dge-grid" id="dgeButtons">
<button type="button" class="dge-btn is-active" data-triage="parciales"><strong>📄 Parciales o finales viejos</strong><span>La vía más directa al formato real de examen</span></button>
<button type="button" class="dge-btn" data-triage="un-chat"><strong>🧠 Apuntes y quiero 1 solo chat</strong><span>Plan de rescate rápido a medida sin cambiar de herramienta</span></button>
<button type="button" class="dge-btn" data-triage="clases"><strong>🎙️ Clases grabadas / no sé qué entra</strong><span>Rescatar qué descartó y qué exige el profesor</span></button>
<button type="button" class="dge-btn" data-triage="bloqueo"><strong>🧱 Pánico o bloqueo total</strong><span>No puedo ni abrir la carpeta hoy</span></button>
</div>
<button type="button" class="dge-all-btn" id="dgeToggleAll">Ver las 4 rutas de rescate juntas</button>
<div class="dge-card is-active" data-triage-panel="parciales">

> [!tip] 🎯 Ruta recomendada: Pinza directa `03 Simulador` + `02 Tutor`
> 1. Saltate `01` (checklists completas) y `04` (Anki). Corré solo el **Paso 1 (`mapa.md`)** del Simulador sobre tus exámenes viejos para ver qué se evalúa de verdad.
> 2. Probá resolver un modelo o simulacro (`Examen`) en hoja en blanco y mandá **`Corregir`**.
> 3. Llevá **solo tus puntos rojos** al Tutor pidiendo **`Profundidad: Baja`** (y subí a `Media` únicamente en lo troncal más repetido).
> 👉 Abrir: **[[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]** · **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]**

</div>
<div class="dge-card" data-triage-panel="un-chat">

> [!tip] ⚡ Ruta recomendada: Todo en 1 chat con el Arquitecto (`/emergencia`)
> 1. Abrí Google AI Studio con **Gemini Neon** (`Extra High` para armar el plan rápido más sólido) o **Gemini Hydrogen** (`High` / `Extra High` si querés máxima economía de cuota, y `Medium` para el seguimiento diario) y pegá el prompt de la **Sección 1** de la guía `08`.
> 2. Subí tus apuntes, programa y parciales viejos, y escribí **`/emergencia`** con la fecha del examen y tus horas diarias reales.
> 3. Usá **`!libre`** en ese mismo chat para destrabarte o corregir tandas de ejercicios a carpeta cerrada sin burocracia.
> 👉 Abrir: **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]** *(Sección 1)*

</div>
<div class="dge-card" data-triage-panel="clases">

> [!tip] 🎙️ Ruta recomendada: Filtrar pautas reales con `01B Voz de la Cátedra`
> 1. No mires horas de video entero. Cargá **solo las 1 o 2 clases de repaso o consulta pre-parcial** en NotebookLM.
> 2. Corré los **Prompts `1` y `2A`** para obtener citas textuales de qué entra, qué **no** entra y qué trampas advierte tu docente.
> 3. Con ese filtro claro, pasá directo a exámenes (`03`) o a un chat único con el Arquitecto (`08` con `/emergencia`).
> 👉 Abrir: **[[20. Áreas/Sistema de Estudio con IA/01B - Extractor de Clases y Voz de la Cátedra\|01B - Extractor de Clases y Voz de la Cátedra]]**

</div>
<div class="dge-card" data-triage-panel="bloqueo">

> [!tip] 🚀 Primer paso obligatorio: Destrabar los primeros 5 minutos
> Cuando estás paralizado por la presión del examen, mirar todo el temario junto empeora el bloqueo.
> 1. Abrí el **Copiloto ARRANQUE** en cualquier chat rápido y mandá `/inicio` o `/15min`.
> 2. Hacé **una sola acción física de 5 minutos** en versión borrador imperfecto; apenas rompas la inercia, volvé a esta página para atacar un examen o tema puntual.
> 👉 Abrir: **[[20. Áreas/Sistema de Estudio con IA/00C - Copiloto ARRANQUE (Vencer la Procrastinación)\|00C - Copiloto ARRANQUE (Vencer la Procrastinación)]]**

</div>
</div>
<script>
(function(){var box=document.getElementById("dgEmergencyTriage");if(!box)return;box.classList.add("is-interactive");var btns=box.querySelectorAll(".dge-btn");var cards=box.querySelectorAll(".dge-card");var allBtn=document.getElementById("dgeToggleAll");var showAll=false;function pick(id){showAll=false;allBtn.textContent="Ver las 4 rutas de rescate juntas";btns.forEach(function(b){b.classList.toggle("is-active",b.getAttribute("data-triage")===id)});cards.forEach(function(c){c.classList.toggle("is-active",c.getAttribute("data-triage-panel")===id)})}btns.forEach(function(b){b.addEventListener("click",function(){pick(b.getAttribute("data-triage"))})});allBtn.addEventListener("click",function(){showAll=!showAll;if(showAll){btns.forEach(function(b){b.classList.remove("is-active")});cards.forEach(function(c){c.classList.add("is-active")});allBtn.textContent="Volver a mostrar solo 1"}else{pick("parciales")}})})();
</script>

---

## ⚡ Comparativa Rápida de Opciones

| Tu situación ahora mismo | Qué hacer ya mismo | Módulo a abrir |
| :--- | :--- | :--- |
| **Querés un plan de rescate rápido en un solo chat** *(tenés apuntes / exámenes y no sabés cómo organizarte)* | Subí tu material y usá el comando **`/emergencia`** con tu fecha de examen y horas reales. | 👉 **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]** *(Sección 1: Arquitecto v6.0)* |
| **Tenés parciales o finales viejos de tu cátedra** *(la vía más directa al aprobado)* | Saltate `01` y `04`: armá solo el mapa de examen, rendí simulacros en blanco y usá el Tutor solo para tus fallas. | 👉 **[[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]** + **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]** |
| **Tenés clases grabadas y cero idea de qué prioriza el profesor** | Pasá **únicamente las clases de repaso o consulta** por los Prompts `1 + 2A` para rescatar pautas explícitas de examen y trampas. | 👉 **[[20. Áreas/Sistema de Estudio con IA/01B - Extractor de Clases y Voz de la Cátedra\|01B - Extractor de Clases y Voz de la Cátedra]]** |
| **El pánico o el cansancio no te dejan ni empezar** | Cortá la parálisis inicial en 5 minutos sin sermones antes de abrir ningún apunte. | 👉 **[[20. Áreas/Sistema de Estudio con IA/00C - Copiloto ARRANQUE (Vencer la Procrastinación)\|00C - Copiloto ARRANQUE (Vencer la Procrastinación)]]** *(comando `/inicio` o `/15min`)* |

---

## 🛠️ Detalle de Ejecución Paso a Paso

### Opción A — Todo en un solo chat con el Arquitecto (`/emergencia`)

Es la vía más simple si no querés encadenar varios módulos:

1. Abrí Google AI Studio con **Gemini Neon** (`Extra High` para armar el plan más sólido) o **Gemini Hydrogen** (`High` / `Extra High` para máxima economía de cuota y `Medium` en el seguimiento — ver [[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]).
2. Pegá el prompt de la **Sección 1** de **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]** junto con tus apuntes, programa y los exámenes viejos que tengas.
3. Escribí **`/emergencia`** aclarando **cuándo rendís** y **cuántas horas reales tenés por día**.
4. El Arquitecto va a comprimir pasos burocráticos, priorizar evidencia activa directa al formato del parcial y habilitarte **`!libre`** para corregir tus resoluciones y destrabar trabas al vuelo.

### Opción B — Pinza directa: Exámenes reales (`03`) + Tutor enfocado (`02`)

Es la vía más precisa cuando tenés modelos de parciales/finales reales:

1. **Detectá qué se evalúa de verdad ([[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Paso 1]]):** Corré solo el **Prompt 1 (`mapa.md`)** sobre tus parciales viejos y guía. En minutos ves qué habilidades son `RECURRENTE` y en qué formato las piden (`[N]` cálculo, `[C]` concepto, `[D]` deducción, `[J]` justificación).
   * *Si vas muy justo de tiempo:* Usá directamente los parciales reales cargados o pedile al **Paso 4** de `03` un simulacro (`Examen`) tomando de referencia tus parciales sin perder tiempo armando un `banco.md` gigante si tenés pocos exámenes.
2. **Probate a carpeta cerrada primero (`Examen` → hoja en blanco → `Corregir`):** No empieces leyendo toda la teoría desde la página 1. Resolvé un parcial viejo o simulacro con lo que ya sabés para medir exactamente qué te falta.
3. **Rescatá solo tus puntos rojos ([[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor]] en `Profundidad: Baja`):** Llevá únicamente los temas que dejaste en blanco o fallaste al Tutor indicando **`Profundidad: Baja`** (repaso eficiente: conceptos críticos, distinciones y aplicación directa sin rodeos; subí a **`Media`** solo en los pilares más repetidos). Apenas destrabes el tema, volvé a resolver otro punto de examen.

---

## ⛔ 3 trampas que queman tus últimas horas (evitalas)

1. **Pedirle a la IA *"resumime los 5 PDFs"* para leerlos pasivamente:** Te da sensación de avance, pero sin hoja en blanco ni examen real se borra al entrar al aula.
2. **Ponerte a fabricar mazos gigantes de Anki (`04`) antes de rendir:** La repetición espaciada rinde a lo largo de semanas; con el examen encima, creá tarjetas únicamente para datos o fórmulas muy puntuales que te sigan trabando después de practicar.
3. **Perfeccionar checklists (`01`) de toda la cursada sin resolver ni un ejercicio tipo parcial:** Si el tiempo apremia, la práctica sobre el formato real del examen vale mucho más que tener el temario prolijo.

---

## 🧭 Navegación

*Volver al inicio y selector de ruta:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**
*Si estás trabado y no podés arrancar:* 🚀 **[[20. Áreas/Sistema de Estudio con IA/00C - Copiloto ARRANQUE (Vencer la Procrastinación)\|00C - Copiloto ARRANQUE (Vencer la Procrastinación)]]**
*Estudio completo en papel o con el Arquitecto:* 📝 **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]**
*Modelos recomendados por cuota y potencia:* 🤖 **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**
