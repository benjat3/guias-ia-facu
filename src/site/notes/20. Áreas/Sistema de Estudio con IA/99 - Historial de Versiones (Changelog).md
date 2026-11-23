---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/99-historial-de-versiones-changelog/","title":"99 - Historial de Versiones (Changelog)","tags":["changelog","actualizaciones","workflow","ingenieria"],"dg-note-properties":{"title":"99 - Historial de Versiones (Changelog)","tags":["changelog","actualizaciones","workflow","ingenieria"]}}
---



# 📜 Historial de Versiones y Registro de Cambios Técnicos

Este documento registra la evolución técnica, las pruebas descartadas y las mejoras pedagógicas de cada herramienta del sistema, explicando qué cambió, por qué se modificó y cómo impacta en el estudio real.

---

## ✨ 0. Actualización a Arquitecto v6.0 y Ecosistema Hydrogen + Neon (23/11/2026)

* **Arquitecto de Aprendizaje y Copiloto de Ejecución `v6.0` en [[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]:** Actualizado íntegramente a la **versión 6.0 Optimizada** (Ingeniería integral con cobertura completa de 12 familias cognitivas y bloque condicional L2, `<precedencia>` en 4 niveles con frontera anti-inyección y cortacircuito anti-bucle, auditoría `!libre` con evidencia previa al juicio y jerarquía error raíz/arrastre, y `<formato>` con regla de parada y blindaje anti-spoiler).
* **Consolidación en los 2 modelos actuales de Google AI Studio (`Gemini Hydrogen` y `Gemini Neon`) en [[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]:**
  * **`Gemini Hydrogen` (`Low` → `Extra High`):** nuevo caballo de batalla súper económico (`Low` rapidísimo estilo *Flash*, `Medium` ideal para el **Tutor Cognitivo `02`** y consultas del día a día, `High` para producción estructurada y `Extra High` al nivel del antiguo *Argon High* o superior).
  * **`Gemini Neon` (`Low` → `Extra High`):** motor de máxima potencia, recomendado en **`Extra High`** para tareas de máxima complejidad como armar el **`/plan` en 3 pasos** con el Arquitecto `v6.0` o simulacros integradores muy exigentes (`03`).
  * **NotebookLM en rol secundario:** con el rendimiento actual de Hydrogen y Neon, NotebookLM queda poco recomendado (solo como respaldo puntual para citas o links de YouTube en `01B`).
  * **Nuevo diagrama Mermaid en `05`:** reemplazado el gráfico horizontal ilegible de 9 columnas por un esquema vertical de 2 columnas con máxima legibilidad.

---

## ✨ 0B. Rediseño de Entrada, Emergencia, Arranque y Checklists v3.0 (19/11/2026)

Actualización integral enfocada en bajar la fricción para quien entra por primera vez al sistema, alinear la web con la estética real de Obsidian y actualizar todos los prompts vigentes:

* **Portada interactiva en [[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio]]:** Reemplaza el muro de texto largo por un **selector guiado de ruta (cuestionario en 1–2 clics)**, un modo **Acceso Directo** por tarjetas con enlaces directos reales, un **explorador visual por fases** y secciones técnicas desplegables para no abrumar.
* **Nuevo módulo [[20. Áreas/Sistema de Estudio con IA/00B - Modo Emergencia (Ruta Rápida con IA)\|00B - Modo Emergencia (Ruta Rápida con IA)]]:** Guía independiente y directa enfocada exclusivamente en **rutas rápidas con IA** (`/emergencia` en el Arquitecto, pinza `03 Simulador + 02 Tutor` o filtrado de clases de repaso `01B`), activada según presión real de volumen vs. días y sin la antigua regla rígida de "menos de 3 días".
* **Nuevo módulo [[20. Áreas/Sistema de Estudio con IA/00C - Copiloto ARRANQUE (Vencer la Procrastinación)\|00C - Copiloto ARRANQUE (Vencer la Procrastinación)]]:** Incorporación pública del **Copiloto ARRANQUE v4.4** dedicado a destrabar la parálisis inicial, cortes por fuga o saturación y continuidad mediante `Handoff` (`/inicio`, `/plan`, `/traba`, `/fuga`, `/quemado`, `/15min`, `/cierre`).
* **Separación de [[20. Áreas/Sistema de Estudio con IA/04B - Importación a Anki e Image Occlusion (Tutorial Visual)\|04B - Importación a Anki e Image Occlusion (Tutorial Visual)]]:** Se extrajo el tutorial visual de carga `.csv`, *Image Occlusion* y sincronización PC/celular que recargaba la portada (`00`) y ahora vive justo después de **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**.
* **Arquitecto v5.0 + Sistema Pareto 80/20 en Papel para Ingeniería en [[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]:** Actualizado el **Arquitecto de Aprendizaje y Copiloto de Ejecución a la versión v5.0** (`/plan` constructor guiado en 3 pasos, `/completo` en una emisión, `/archivo completo` y Capa A sin moldes rígidos) y rediseñada la Sección 2 como un **sistema Pareto 80/20 exclusivo para Ingeniería** (lectura de ~10–15 min cubriendo teoría, ejercicios y preparación de exámenes escritos, de desarrollo, orales y multiple choice, con los 3 motores de *Make It Stick*, ejemplos tapados como rampa de entrada y sin planillas complejas ni cronómetros rígidos), sumando un diagrama nativo del ciclo `[~]`/`[x]`, el orden de ataque `DCL → letras → control físico` y la advertencia de gemelos para IA común.
* **Google Gemini Hydrogen 4 como caballo de batalla en todas las guías:** Posicionado como motor principal todo terreno de `Low` a `Extra High` muchísimo más económico que **Gemini Argon** (reservado ahora solo para tareas muy largas o complejas): en `High` logra el balance perfecto para cualquier tarea de *thinking* (`01`, `01B`, `02`, `03`, `04`, `08` y `00B`), en `Medium` rinde excelente cuidando cuota, en `Extra High` en AI Studio exprime precisión máxima si sobran tokens, y en `Low` / `Medium` acelera tareas cotidianas (`00C`). Se consolidó todo el ecosistema probado en `Hydrogen 4`, `NotebookLM` y `Argon`, y se aclaró que modelos de otras empresas (`Claude`, `ChatGPT`, `DeepSeek`, `Qwen`) no fueron probados por el autor.
* **Checklists científicas v3.0 (`07.1`–`07.4`) y estética Obsidian *Acero Prusia & Cobre Técnico*:** Rediseño de las 4 checklists a 22–24 principios atómicos alineados con el *Informe de Ciencia del Aprendizaje* (enfocadas en Ingeniería y 100% agnósticas al método, separando tácticas de examen y heurísticas de cátedra en bloques Bonus), recalibración dinámica del contador/semáforo y aplicación fiel de la paleta de Obsidian (*Things* + *Style Settings* + `paleta-ingenieria.css`).

---

## 🌐 1. Evolución de la Arquitectura Global

| Dimensión | Versión Inicial (V1 - Sep 2026) | Versión Consolidada (V2 - Oct 2026) | Versión Definitiva (V2.2 - 15/10/2026) | Impacto Práctico en el Estudio |
| :--- | :--- | :--- | :--- | :--- |
| **Estructura del Flujo** | 4 fases lineales (Checklist ➔ Tutor ➔ Anki ➔ Repaso). | 5 fases modulares (+ Simulador de Exámenes). | **5 fases principales + 1 Módulo Satélite Opcional** (**[[20. Áreas/Sistema de Estudio con IA/01B - Extractor de Clases y Voz de la Cátedra\|01B - Extractor de Clases y Voz de la Cátedra]]**). | Cubre todo el ciclo: desde auditar clases grabadas hasta rendir simulacros y fijar en Anki. |
| **Orquestación de Modelos** | Dependencia casi exclusiva del chat comercial de Gemini. | Ecosistema rígido por modelo. | **Desacople por Etiquetas Cognitivas:** `[Alto Razonamiento]` y `[Minería y Recuperación]`, centralizadas en **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**. | El sistema no queda obsoleto cuando cambian las versiones de los modelos; mejor cuidado de cuotas. |
| **Modelos de Alto Razonamiento** | Modelos generales sin razonamiento paso a paso (*Thinking off*). | Motores antiguos reemplazados (*Flash*, *Argon*, *Hydrogen 4*). | **Gemini Hydrogen** (`Low` a `Extra High`: caballo de batalla súper económico; `Medium` ideal para Tutor y uso diario, `Extra High` al nivel del viejo *Argon High* o mejor) + **Gemini Neon** (`Extra High` para tareas muy complejas como `/plan` del Arquitecto `v6.0`). | Cálculos confiables, cero alucinaciones y máxima calidad con consumo mínimo en el día a día. |
| **Rol de NotebookLM** | Asumido como "cuota infinita" y apto para cualquier tarea. | Descubrimiento del bypass de 27k caracteres para el Tutor V4. | **Rol secundario / poco recomendado:** superado en prácticamente toda tarea por **Hydrogen** y **Neon** en Google AI Studio; queda solo como opción secundaria para citas clickeables o links de YouTube (`01B`). | Mejor calidad de razonamiento, adherencia a prompts y cuentas directas en Google AI Studio. |
| **Extracción de Checklists** | Un solo pase en Gemini Web con cuaderno vinculado. | Fusión cruzada en dos pases (NotebookLM + Gemini Web). | **Extractor Secuencial por Unidad:** Una sola unidad por turno en Google AI Studio (**Hydrogen** / **Neon**) con comando `Seguí`. | Se eliminó el trabajo doble de cruzar dos IAs y se erradicó la omisión silenciosa de temas. |
| **Simulador de Exámenes** | Inexistente (solo preguntas sueltas en el tutor). | Suite forense V1.0 de 4 pasos. | **Suite Forense V2.2:** Denominador real $n/N$ por unidad, pre-cálculo físico de ejercicios gemelos, cero spoilers y paquetes en Ruta B. | Simulacros fieles a los parciales reales de la cátedra listos para resolver o exportar a PDF. |
| **Generador de Anki** | Gemini Web comercial. | Google AI Studio (V2.1 con System Instructions y High/High). | **Anki V2.2:** Prohibición de comillas dobles `"`, LaTeX puro sin tags HTML adentro y campo `Back Extra` enriquecido en Image Occlusion. | Mazos CSV que importan sin errores ni fórmulas rotas en Anki Desktop y AnkiDroid. |

---

## 📋 2. Extractor de Checklists (`[[01 - Extractor de Checklists]]`)

### 🔍 Por qué se descartó la «Fusión de dos IAs» y se pasó al Motor Secuencial

A principios de octubre se probó extraer una checklist en NotebookLM, otra en Gemini Web y unirlas con un tercer prompt. En la práctica se descartó por dos razones contundentes:
1. **NotebookLM estructura mal las checklists** (hace resúmenes superficiales y saltea ejercicios de las guías), por lo que cruzarlo con Gemini solo daba trabajo extra sin aportar nada nuevo.
2. **El conector de cuadernos de NotebookLM dentro de Gemini Web (`gemini.google.com`) falla al indexar archivos** e ignora PDFs enteros.

La versión **V2.2 Secuencial** procesa **una sola unidad por mensaje** directamente en **Google AI Studio** con **Gemini Hydrogen (`High` / `Extra High`)** o **Gemini Neon** (en temarios gigantes) subiendo los PDFs desde la computadora:

| Aspecto | Versión Anterior (Fusión Doble) | Versión Actual (V2.2 Secuencial) | Mejora Obtenida |
| :--- | :--- | :--- | :--- |
| **Entorno** | NotebookLM + Gemini Web conectado a cuaderno. | **Google AI Studio** (**Gemini Hydrogen High / Extra High** o **Gemini Neon**, PDFs desde la PC). | Lectura completa de todos los archivos sin el bug del conector de Gemini Web. |
| **Ritmo de salida** | Pedir varias unidades juntas o fusionar borradores. | **Una unidad por turno** (`DESDE EL PRINCIPIO` ➔ `PAUSA` ➔ `'Seguí'`). | La IA dedica todo su espacio de respuesta a una sola unidad sin recortar los últimos temas. |
| **Orden interno** | Seguía el orden desparejo de las diapositivas. | **Secuencia fija:** 1° Conceptos ➔ 2° Deducciones ➔ 3° Gráficos/Equipos ➔ 4° Arquetipos de TP. | Ordenado exactamente en la secuencia lógica en que se estudia la unidad. |
| **Regla Anti-Spoiler** | Las casillas solían incluir la fórmula o la respuesta. | **Sin spoilers:** Indica qué relación dominar pero oculta la ecuación y el resultado. | Evita que la casilla te sople la respuesta antes de estudiarla con el Tutor Cognitivo. |
| **Guías de TP** | Listaba cada ejercicio suelto o los omitía. | **Agrupación por arquetipo:** `(TP X: Ej. 1, 2 y 4)`. | Agrupa los ejercicios que se resuelven con el mismo modelo físico e indica cuáles son. |

---

## 🎙️ 3. Extractor de Clases y Voz de la Cátedra (`[[01B - Extractor de Clases y Voz de la Cátedra]]`)

Para las materias que graban sus clases en video, la versión **V2 Compacta (Anti-Bucle)** solucionó los cuatro problemas técnicos que tenía la V1 inicial:
1. **Eliminación de relojes y minutos inventados:** Como NotebookLM lee fragmentos de texto y no un reloj continuo, alucinaba los tiempos (`01:23:45`). Se reemplazaron por **números de bloque (`B1`, `B2`...), frases de inicio/cierre y citas clickeables**.
2. **Freno a los bucles de recálculo:** Se quitaron los recuentos matemáticos obligatorios al final de cada turno que hacían que los modelos de razonamiento gastaran minutos enteros recalculando sumas.
3. **Un renglón por idea con Cita Canónica:** Cuando el profesor repite una misma pauta en varias clases, los Pasos 3 y 4 conservan únicamente la cita textual más clara seguida de todas las coordenadas donde se repitió `(C1:E02[B1]; +C3:E09[B4])`, reduciendo un 70% el peso del archivo.
4. **Limpieza de ruido:** Las preguntas mecánicas de despeje en el pizarrón y los avisos de fechas ya vencidas se filtran en las tandas para que `voz_catedra.md` llegue 100% limpio al Tutor.

---

## 🧠 4. Tutor Personal Cognitivo (`[[02 - Tutor Personal Cognitivo]]`)

El Tutor consolidó su regla principal (**una sola consigna corta por turno**) y pasó a tener como **Ruta Principal Recomendada (V3 — Producción)** a Google AI Studio (**Gemini Hydrogen `Medium`** para uso diario, `High`/`Extra High` o **Gemini Neon** en cuentas exigentes), quedando NotebookLM (V4) como alternativa secundaria:

| Mejora Incorporada | Versiones Anteriores (V2) | Versión Actual (V4 NotebookLM y V3 Alto Razonamiento) | Impacto en el Estudio |
| :--- | :--- | :--- | :--- |
| **Límite de caracteres en NotebookLM** | Limitado a 10.000 caracteres. | **Bypass desde Gemini Web:** Permite guardar el prompt completo de 27.000 caracteres en NotebookLM. | El tutor sostiene todas las reglas durante sesiones largas sin olvidarse de auditar ni regalar pistas. |
| **Control de cuentas y física** | Corrección superficial. | **Recálculo obligatorio y control físico:** Verifica unidades, límites de Carnot y segundo principio antes de dar el veredicto. | Evita que la IA te marque como errónea una cuenta que hiciste bien o te acepte resultados imposibles. |
| **Corrección de errores** | Pasaba a otro ejercicio al fallar. | **Loop cerrado:** Te pide explicar por qué falló tu planteo o aplicar la corrección a un caso nuevo antes de avanzar. | Asegura que entendiste el error de fondo y no solo el resultado. |
| **Regla de «Dominado»** | Marcaba "Dominado" en el primer acierto. | **Anti-ilusión de competencia:** Lo que aprendiste hoy con ayuda queda como `Visto con ayuda`; solo pasa a `Dominado` si lo resolvés solo en otra sesión. | Evita confiarte de más con temas que tenés frescos recién explicados. |
| **Tabla de `HANDOFF`** | Resumen libre que perdía temas viejos. | **Tabla acumulativa con barras (`\|`) en bloque de código:** Conserva todos los ítems de sesiones anteriores. | Continuidad exacta de una semana a la otra sin perder el rastro de los temas flojos. |

---

## 🎯 5. Simulador y Generador de Exámenes (`[[03 - Simulador y Generador de Exámenes de Cátedra]]`)

Ajustes clave de la versión **V2.2**:
1. **Porcentaje real por unidad ($n/N$ en `mapa.md`):** El total de exámenes $N$ se cuenta solo sobre los parciales que evalúan esa unidad (un 2.° Parcial no baja artificialmente el porcentaje de un tema del 1.° Parcial).
2. **Orden estricto en `banco.md` y descarte compacto:** Obliga a transcribir el 100% de los exámenes reales antes de filtrar las guías de TP, y resume los ejercicios descartados en un solo renglón para no inflar el archivo.
3. **Pre-cálculo físico en ejercicios gemelos (`Paso 4`):** La IA tiene prohibido inventar propiedades de tablas y debe resolver el problema en su razonamiento interno antes de mostrártelo para garantizar que no falten datos y el resultado tenga sentido físico.
4. **Doble modalidad (`Ruta A` y `Ruta B`):**
   * *Ruta A:* Simulacro a ciegas sin spoilers + comando `Corregir` con puntaje parcial por *error raíz y arrastre*.
   * *Ruta B (`Paquete`):* Generación de simulacros completos (Enunciado + Clave paso a paso en LaTeX + Trazabilidad) sin repetir habilidades entre un examen y el siguiente.

---

## 🗂️ 6. Generador de Tarjetas de Anki (`[[04 - Generador de Tarjetas de Anki]]`)

Problemas reales de importación solucionados en la versión **V2.2**:

| Problema que ocurría en Anki | Causa Técnica | Solución en V2.2 |
| :--- | :--- | :--- |
| **Anki mezclaba 5 tarjetas en una sola al importar** | Había comillas dobles (`"`) adentro del texto que abrían bloques multilínea en el CSV. | **Prohibición total de comillas dobles (`"`):** La IA usa únicamente comillas simples (`'...'`) o angulares (`«...»`). |
| **Fórmulas rotas en el celular (`\( ... <b> ... \)`)** | La IA metía etiquetas HTML de negrita adentro de las fórmulas LaTeX. | **LaTeX 100% puro:** Prohibido usar `<b>`, `<i>` o `<br>` adentro de `\(...\)` y `\[...\]`. |
| **En Image Occlusion solo figuraban nombres sueltos** | Al convertir la tarjeta, el campo `Back Extra` quedaba casi vacío. | **Reverso con función física:** Lista las 3 a 5 partes a tapar agregando en media línea qué hace cada componente. |
| **Se perdían advertencias dichas en clase** | El prompt solo miraba el texto de la diapositiva. | **Campo para Voz de la Cátedra:** Prioridad máxima para transformar en tarjeta las trampas y unidades que anotes en el envío. |

---

## 📚 7. Biblioteca, Guías de Autoevaluación y Método en Papel (`06`, `07` y `08`)

- **En [[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]:** Se incorporó *A Mind for Numbers* (Barbara Oakley) en el puesto #1 como lectura inicial ideal para ingeniería, seguida por *Make It Stick*, *How to Become a Straight-A Student*, *How I Wish I'd Taught Maths*, *Peak*, *Ultralearning* y *Powerful Teaching*.
- **En [[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]:** Se rediseñaron las 4 checklists diagnósticas a la **Versión 3.0** (**[[20. Áreas/Sistema de Estudio con IA/07.1 - Guía de Estudio - Teoría y Ejercicios\|07.1]]** 24 ítems, **[[20. Áreas/Sistema de Estudio con IA/07.2 - Guía de Estudio - Ejercicios y Problemas\|07.2]]** 22 ítems, **[[20. Áreas/Sistema de Estudio con IA/07.3 - Guía de Estudio - Teoría y Demostraciones\|07.3]]** 22 ítems y **[[20. Áreas/Sistema de Estudio con IA/07.4 - Guía de Enseñanza para Docentes y Tutores\|07.4]]** 24 ítems) basadas en los 45 principios del *Informe de Ciencia del Aprendizaje*, destacando **5–6 pilares con estrella (★)**, separando tácticas de examen/cátedra en bloques Bonus y manteniendo 100% de neutralidad frente al método de cada estudiante o docente.
- **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]:** Actualizado al **Arquitecto de Aprendizaje y Copiloto de Ejecución (v6.0)** en la Sección 1 y rediseñado en las Secciones 2–4 como un **sistema Pareto 80/20 en papel para cualquier materia de Ingeniería** (lectura de ~15 min: teoría, ejercicios y exámenes escritos, orales, de desarrollo o multiple choice, sin planillas complejas ni cronómetros rígidos) más 5 reglas prácticas para conversar con una IA común. *(Histórico previo: la versión inicial `v3.5 (Beta)` usaba planillas 7/3 y Modo Emergencia por regla fija de días, hoy reemplazados).*

---

## 🧭 Navegación

*Volver al inicio del sistema:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**
*Consultar infraestructura de modelos:* 🤖 **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**
*Ir a las guías de autoevaluación:* 🧭 **[[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]**