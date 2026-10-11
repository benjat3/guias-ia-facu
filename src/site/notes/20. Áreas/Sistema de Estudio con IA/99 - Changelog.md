---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/99-changelog/","title":"99 - Historial de Versiones (Changelog)","tags":["changelog","actualizaciones","workflow","ingenieria"],"dg-note-properties":{"title":"99 - Historial de Versiones (Changelog)","tags":["changelog","actualizaciones","workflow","ingenieria"]}}
---


# 📜 Historial de Versiones y Registro de Cambios

Este documento detalla la evolución técnica del sistema respecto a la versión anterior (Septiembre 2026), explicando qué cambió, por qué se modificó y cuál es el impacto concreto en el rendimiento de estudio.

---

## 🌐 1. Evolución del Sistema Completo y Arquitectura Global

| Dimensión | Versión Anterior (V1 - Sep 2026) | Versión Actual (V2 - Oct 2026) | Impacto Práctico |
|---|---|---|---|
| **Estructura del Flujo** | 4 fases lineales (Checklist ➔ Tutor ➔ Anki ➔ Repaso). | **5 fases modulares integradas** (Checklist ➔ Tutor ➔ **Exámenes de Cátedra** ➔ Anki ➔ Repaso). | Cierra la brecha entre el estudio diario y el rendimiento bajo presión de examen real. |
| **Simulación de Exámenes** | Inexistente (solo consignas aisladas en el tutor). | **Fase 3 completa dedicada:** Minería forense en NotebookLM y redacción de parciales reales. | Permite auto-evaluarse a ciegas o exportar simulacros listos con clave para compartir con compañeros. |
| **Entorno para Tarjetas Anki** | Gemini Web (`gemini.google.com`). | **Google AI Studio** (`aistudio.google.com`). | Cero filtros comerciales, prompts guardados en *System Instructions* y mayor rigidez en el formato CSV. |
| **Límite de Directivas en NotebookLM** | Restringido al tope nativo de 10.000 caracteres. | **Bypass descubierto:** Carga vía Gemini Web (`27k / 10k`). | Permite ejecutar un sistema pedagógico mucho más quirúrgico sin mutilar reglas de andamiaje. |
| **Estrategia de Extracción** | Un solo pase en Gemini Web con cuaderno vinculado. | **Fusión cruzada en dos pases:** NotebookLM + Gemini Flash 3.8. | Elimina sesgos de un solo modelo y garantiza que no se omitan temas finos ni casos de TP. |
| **Ritmo de Estudio del Tutor** | Procesamiento por lotes medianos (4 a 8 ítems juntos). | **Micro-pacing estricto** (1 sola consigna de 1 idea por turno). | Reduce la fatiga cognitiva, evita que la IA mezcle conceptos y asegura control clínico paso a paso. |
| **Orquestación Multimodelo** | Dependencia casi exclusiva del ecosistema Gemini. | **Ecosistema Híbrido Optimizado:** NotebookLM (minería) + Flash 3.8 (Anki/Checklists) + Claude Sonnet 5.5 (redacción de exámenes). | Usa cada modelo en lo que es objetivamente mejor, maximizando cuotas gratuitas. |

---

### 🔑 Principales Hitos Arquitectónicos

1. **Incorporación del Generador Forense de Exámenes:**
   * En la versión anterior faltaba una herramienta para evaluar la integración global de la materia. Ahora el sistema audita parciales viejos, calcula recurrencias matemáticas reales ($n/N$), formaliza la "firma de evaluación" del profesor y genera simulacros hiperrealistas.
2. **Desacople entre Minería y Redacción:**
   * Se comprobó empíricamente que **NotebookLM es pésimo redactando exámenes completos** (alucina con facilidad al armar problemas nuevos). La arquitectura ahora separa la **minería de evidencia** (Pasos 1 al 3B en NotebookLM) de la **redacción final** (Paso 4 en Gemini Flash High o Claude Sonnet 5.5).
3. **Migración técnica a Google AI Studio para Anki:**
   * Gemini Web suele relajar instrucciones negativas por estar optimizado para usuarios casuales. Mover la generación de Anki a AI Studio permitió forzar *Thinking level: High*, *Media resolution: High* y guardar los prompts como presets permanentes en *System Instructions*.
## 📋 2. Extractor de Checklists Atómicas

### 🔍 Resumen del Cambio
El prompt base **se mantuvo idéntico en su formulación y reglas** (demostró una eficacia altísima para evitar alucinaciones), pero se rediseñó por completo **su método de ejecución**, pasando de una extracción simple a una **estrategia de validación cruzada y fusión**.

---

### ⚖️ Comparativa: Antes vs. Ahora

| Aspecto | Versión Anterior (Sep 2026) | Versión Actual (Oct 2026) |
|---|---|---|
| **Prompt Base** | Mismo texto (regla de oro de cero invención, filtro de libros y formato `- [ ]`). | **Sin cambios:** Mismo prompt base conservado por su probada fidelidad documental. |
| **Flujo de Ejecución** | **Pase único:** Se corría solo en Gemini Web con el cuaderno vinculado. | **Doble extracción independiente:** Se corre primero en NotebookLM y luego en Gemini Flash 3.8. |
| **Control de Omisiones** | Manual (revisar a ojo si faltaba algo del PDF). | **Automatizado mediante Fusión:** Nuevo prompt auxiliar que cruza ambas versiones y genera la lista definitiva. |
| **Riesgo de Sesgo** | Si el modelo resumía por pereza cognitiva, ese tema se perdía. | **Eliminado:** Lo que se le escapa a NotebookLM lo captura Gemini Flash, y viceversa. |

---

### 🛠️ Novedad Operativa: El Prompt de Fusión y Consolidación
* Se creó una **segunda instrucción encadenada** para usar dentro del chat de Gemini Web.
* Tras generar su propia checklist, se le inyecta la versión obtenida en NotebookLM con la orden explícita de:
  1. Integrar casos particulares o tipos de ejercicio que una versión haya pasado por alto.
  2. Eliminar redundancias cuando ambas describan lo mismo con palabras distintas.
  3. Devolver un único bloque Markdown limpio consolidado para Obsidian.
## 🧠 3. Evolución del Tutor Personal Cognitivo (De V1 a V4)

### 🔍 Resumen del Gran Salto Pedagógico
En la versión anterior (**V2.2 - Septiembre 2026**), el tutor trabajaba por **lotes medianos (3 a 8 actividades agrupadas)** para lidiar con la latencia del chat. 

Aunque era estable, la práctica real demostró que los lotes sobrecargaban la memoria de trabajo y permitían que la IA regalara pistas intermedias. La nueva **V4 (Octubre 2026)** introduce un cambio de paradigma radical: **Micro-pacing implacable** (una sola consigna corta por mensaje), protocolo **anti-fugas estricto**, soporte visual contextual y la ruptura del límite de caracteres mediante el **bypass de 27k**.

---

### ⏳ Línea de Tiempo Evolutiva de Versiones

* **Familia V1 (V1.0 ➔ V1.2):** Versiones iniciales basadas en principios cognitivos teóricos puros (14 reglas). Foco en andamiaje, analogías y autoexplicación.
* **Familia V2 (V2.0 ➔ V2.2):** Introducción de la *Epistemología Híbrida* y el **estudio por lotes** para NotebookLM. La V2.0 fue inestable; la V2.2 se convirtió en el estándar de la guía anterior.
* **Familia V3 (V3.0 ➔ V3.1 Beta):** Primeras pruebas de **micro-pacing** y soporte visual con búsqueda en Google Imágenes.
* **Versión V4 Actual (V4 Compacta <10k y V4 Quirúrgica ~27k):** La arquitectura definitiva. Incorpora verificación numérica obligatoria, reglas anti-pistas repetidas deliberadamente, y el cierre integrador de punta a punta.

---

### ⚖️ Comparativa Detallada: V2.2 (Anterior) vs. V4 (Actual)

| Dimensión | Versión V2.2 (Sep 2026) | Versión V4 (Oct 2026) | Justificación del Cambio |
|---|---|---|---|
| **Ritmo de Interacción** | **Lotes dinámicos:** Bloques de 4 a 8 actividades por respuesta. | **Micro-pacing estricto:** 1 sola consigna de 1 idea por turno (al final del mensaje). | Los lotes diluían el esfuerzo activo; el micro-pacing obliga a pensar y justificar cada paso. |
| **Tamaño de Prompt** | ~6.000 caracteres (dentro del límite nativo). | **Bifurcación Dual:**<br>• V4 Completa: **~27.200 caracteres** (vía bypass).<br>• V4 Compacta: **~9.900 caracteres** (plug & play). | La versión de 27k permite blindar el prompt contra todas las mañas y deslices del modelo. |
| **Protocolo Anti-Fuga** | Pistas progresivas estándar. | **Tolerancia cero a pistas:** Prohibido usar "sabiendo que...", revelar variables intermedias o adjetivos delatores (ej: *"es inerte"*). | La IA tendía a soplar la respuesta dentro de la misma pregunta. |
| **Recursos Visuales** | Sugerencia pasiva de "codificación dual". | **Línea `Visual:` obligatoria:**<br>1° Cita nativa a figuras del PDF.<br>2° Query exacta para Google Imágenes.<br>3° Mermaid/ASCII solo para flujos.<br>*(Ecuaciones y tablas no son visuales).* | Evita que el modelo mande a ver diapositivas que solo tienen texto o fórmulas. |
| **Criterio de Dominio** | Se infería del historial acumulado de aciertos. | **Regla anti-ilusión de dominio:** Nada de lo explicado o corregido en la sesión pasa a "Dominado" ese mismo día (queda como "Visto con ayuda"). | Exige recuperación sin ayuda en una sesión posterior o en el *brain dump* para declarar dominio. |
| **Verificación Numérica** | Corrección heurística estándar. | **Auditoría matemática previa:** El modelo debe derivar y recalcular el problema antes de marcar un error al alumno. | La IA marcaba errores conceptuales falsos por deslices aritméticos propios o diferencias de redondeo. |
| **Citas a Fuentes** | Nombre de archivo y página en texto. | **Citas nativas clickeables de NotebookLM** (números en círculo). | Agiliza el contraste inmediato sin tener que buscar la página manualmente. |
| **Cierre de Tema** | Práctica intercalada / Drills teóricos. | **Cierre Integrador:** Explicación abierta de punta a punta con palabras propias. | Los ejercicios intercalados por IA fallaban; la síntesis global propia demostró mucha más retención. |

---

### 🛠️ Decisiones Críticas de Diseño (Lecciones de Mantenimiento)

1. **La Redundancia en el Prompt es Deliberada y Obligatoria:**
   * En la V4 muchas reglas están escritas tres veces: en las *Reglas de Oro*, en el cuerpo temático y en el *Chequeo Final antes de Enviar*.  
   * *Hallazgo:* Cuando una regla negativa (*"no regalar fórmulas"*, *"una sola consigna"*) se redacta una sola vez, el modelo la ignora al acumular contexto. Si se intenta "optimizar o acortar" el prompt deduplicando texto, el tutor se degrada.
2. **Qué se eliminó respecto a versiones anteriores y por qué:**
   * **El "Abogado del Diablo", "Pregunta propia" y "Analogías forzadas":** Casi nunca se disparaban en sesiones técnicas densas y consumían tokens de atención.
   * **La práctica intercalada y espaciada automática:** El modelo no sabe gestionar los intervalos de tiempo en un chat. El espaciado ahora lo gestiona el propio estudiante abriendo las sesiones; la IA solo ejecuta el *Brain dump* inicial del `HANDOFF`.
   * **Fase 3 completa:** Rara vez se llegaba a esa fase en la práctica; fue reemplazada con éxito por el *Cierre Integrador*.
3. **Manejo de Teoría No Deducible:**
   * En versiones anteriores la IA intentaba que el alumno "dedujera" cosas imposibles (nombres comerciales de válvulas, mandrilados, clasificaciones arbitrarias). En la V4, si el contenido no es deducible por lógica, **se prohíbe preguntar primero**: la IA debe dar un bloque mínimo de instrucción con cita y pedir recuperarlo después.
## 🎯 4. Incorporación del Simulador y Generador de Exámenes de Cátedra (V1.0 - Módulo Nuevo)

### 🔍 Resumen del Módulo
En la versión anterior del sistema (**Septiembre 2026**), no existía una herramienta para simular parciales completos. La preparación para rendir dependía de hacer TPs en papel o del comando `Modo Examen` del tutor (que solo arrojaba consignas sueltas).

La **Versión 1.0 (Octubre 2026)** introduce una suite completa de **ingeniería inversa forense** compuesta por una cadena de 4 prompts especializados (más un auxiliar teórico y un modificador de exportación), diseñada para replicar con exactitud matemática el estilo, la carga operativa y la cuota teoría/práctica de los exámenes reales de la cátedra.

---

### 🏛️ Arquitectura de la Suite Forense (Cadena de Prompts)

| Componente | Prompt | Entorno | Insumo Documental | Salida Generada | Función Clave |
|---|---|---|---|---|---|
| **Paso 1** | **Mapa Curricular** | NotebookLM | Cursada + Parciales | `mapa.md` | Delimita el universo de habilidades y calcula la evidencia histórica matemática ($n/N$ exámenes donde apareció). |
| **Paso 2** | **Banco Forense** | NotebookLM | Exámenes ➔ TPs + `mapa.md` | `banco.md` | **Barrera de orden dura:** Transcribe 100% de exámenes primero; luego filtra TPs que cubran variantes o zonas ciegas. |
| **Paso 3** | **Modelo de Examen** | NotebookLM | Exámenes + Bancos | `modelo.md` (máx. 70 líneas) | Formaliza la "firma del profesor": cantidad de ejercicios, criterios de corrección y cuota operativa estricta de teoría/práctica. |
| **Paso 3B** | **Banco Teórico** *(Opcional)* | NotebookLM | Apuntes + Modelo + Mapa | `banco_teoria.md` | Preguntas de práctica teórica con citas a apuntes. **Solo se usa si faltan parciales o la teoría es oral**; se saltea si hay parciales viejos. |
| **Paso 4** | **Generador Secuencial** | Gemini Flash High / Claude Sonnet 5.5 | Todos los `.md` anteriores | Exámenes + Claves | Ensambla el simulacro, oculta el origen de los ejercicios durante la prueba y administra el registro adaptativo. |

---

### 🚀 Innovaciones Técnicas Destacadas

1. **Desacople entre Minería y Redacción:**
   * *Hallazgo:* NotebookLM es el mejor entorno para indexar y catalogar fuentes, pero **es pésimo redactando exámenes y alucina con facilidad al balancear problemas numéricos completos.**
   * *Solución:* Los Pasos 1, 2, 3 y 3B corren en NotebookLM (costo cero de cuota y cero invención); el Paso 4 traslada los archivos destilados a **Gemini 3.8 Flash (Thinking High)** o **Claude Sonnet 5.5 (Medium+)** para una redacción matemática impecable.

2. **Doble Modalidad Operativa (Ruta A vs. Ruta B):**
   * **Ruta A (Entrenamiento Personal Adaptativo):** Bucle de examen a ciegas ➔ resolución en papel bajo cronómetro ➔ `Corregir` ➔ `Clave` ➔ actualización de estados (`FRÁGIL`, `CORRECTO 1x`, `CONSOLIDADO`). Dos ejercicios literales nunca consolidan; se exige resolver problemas gemelos inéditos (`G-E` o `G-TP`).
   * **Ruta B (Fábrica de Simulacros Autosuficientes / Modo Compartir):** Mediante la directiva especial (*Nota*), el modelo produce paquetes de examen cerrados con su resolución paso a paso (`Clave`) en el mismo mensaje, priorizando años recientes (2025/2026), sin habilidades redundantes y con bloques de LaTeX limpios para Obsidian, listos para exportar a PDF o enviar a compañeros de cursada.

3. **Taxonomía Forense de Ejercicios:**
   * El generador clasifica con precisión el ADN de cada problema:
     * `L`: Literal de examen.
     * `G-E`: Gemelo de examen (misma estructura y dificultad, datos inéditos).
     * `G-TP`: Gemelo de TP adaptado al estilo y carga del examen.
     * `G-TF`: Gemelo de preguntas explícitas del apunte teórico.
     * `S-A`: Sin antecedente (diseñado desde el modelo cuando no hay ejercicios previos).
## 🗂️ 5. Evolución del Generador de Tarjetas de Anki (De V1 a V2.1)

### 🔍 Resumen de la Evolución
El generador no nació con un marco pedagógico cerrado, sino de la necesidad práctica de **dejar de hacer tarjetas a mano para miles de conceptos de ingeniería**. 

Las primeras versiones (**V1 y V1.1**) pecaban de extremos: o creaban "tarjetas Frankenstein" (respuestas con 5 incisos que hacían imposible autocalificarse con Bien/Otra vez) o generaban "anversos testamento" (preguntas larguísimas que tomaba más tiempo leer que responder). La serie **V2.0 y V2.1** resolvió estos vicios mediante una auditoría párrafo por párrafo, límites estrictos de lectura (< 5 segundos), separación de fórmulas operativas y la migración a **Google AI Studio**.

---

### ⏳ Línea de Tiempo de Versiones

* **Versión V1 (Primitiva):** Prompt genérico de atomización extrema. Agregaba etiquetas manuales al final (`Materia::Unidad::Tema`) y no distinguía el tipo de examen. Tendía a convertir cada oración en una tarjeta o a armar listas imposibles de repasar.
* **Versión V1.1:** Primera bifurcación formal entre **CON hoja de fórmulas** y **SIN hoja de fórmulas**. Se agregaron los delimitadores de `[DIBUJAR EN PAPEL]` y `[CREAR IMAGE OCCLUSION]`. Sin embargo, las reglas anti-trivia descartaban clasificaciones útiles y dejaban "huecos silenciosos" en los apuntes.
* **Versión V2.0 (Salto Arquitectónico Mayor - Sep 2026):** Reescritura total:
  * Introducción del prefijo temático obligatorio `[Tema/Sistema - Foco]`.
  * Regla de anversos de lectura rápida (< 5 segundos).
  * Límite de agrupación lógica (tope orientativo de 3 elementos para evitar tarjetas Frankenstein).
  * Auditoría oculta párrafo por párrafo para no dejar temas sin cubrir.
* **Versión V2.1 Actual (Octubre 2026):** Refinamiento técnico y corrección de sintaxis:
  * **Fix crítico de LaTeX puro:** Prohibición estricta de colocar etiquetas HTML (`<b>`, `<i>`, `<br>`) dentro o alrededor de delimitadores matemáticos (`\(...\)` y `\[...\]`), solucionando un bug recurrente de renderizado en Anki.
  * **Migración operativa a Google AI Studio:** Presets en *System Instructions*, *Thinking level: High* y *Media resolution: High*.
  * **Integración de comentarios de clase:** Soporte para agregar en el mensaje las advertencias orales del docente.

---

### ⚖️ Síntomas Críticos del Uso Real y Soluciones Implementadas

| Problema Observado en el Mazo | Síntoma en el Estudio Diario | Causa en el Prompt Viejo | Solución Implementada en V2.0 / V2.1 |
|---|---|---|---|
| **Tarjetas Frankenstein** | Respuestas con 4 o 5 viñetas largas. Si fallabas una, no sabías si poner "Bien" o "Otra vez". | Reglas que pedían "cubrir todo" sin criterio de corte. | **Tope de 3 elementos:** Si los ítems no son una escala continua o causal directa, se parte en tarjetas independientes. |
| **Anversos "Testamento"** | Consignas de 4 renglones; se perdía más tiempo leyendo el contexto que respondiendo. | "Contexto autosuficiente" mal interpretado por la IA. | **Regla de los 5 segundos:** Preguntas directas al hueso usando el prefijo `[Tema - Foco]`. |
| **Descarte de Clasificaciones Útiles** | Faltaban rangos numéricos típicos y clasificaciones teóricas (que el profesor sí tomaba). | Reglas "anti-trivia" demasiado agresivas. | **Ajuste de Criterio:** Como en el examen no hay tablas ni catálogos, las clasificaciones y órdenes de magnitud **sí son evaluables**. |
| **Huecos Silenciosos** | Secciones enteras de diapositivas sin ninguna tarjeta sin que el estudiante lo supiera. | Procesamiento superficial por bloques. | **Auditoría Párrafo por Párrafo:** La IA debe recorrer el apunte en orden antes de emitir la salida para no omitir nada. |
| **Fórmulas Descartadas Injustamente** | Fórmulas operativas clave (ej: velocidad específica $n_s$) quedaban afuera por ser "derivadas". | Criterio de "fórmula fundamental" mal aplicado en materias sin formulario. | **Los Tres Niveles de Recuperación:** Se evalúa producción activa (memoria limpia), interpretación física o aplicación según el caso. |
| **Bugs de Renderizado en Anki** | Fórmulas matemáticas que no cargaban o aparecían con código roto en la app móvil. | La IA metía `<b>` dentro de los delimitadores LaTeX de MathJax. | **Prohibición de HTML en LaTeX (V2.1):** LaTeX 100% puro; las negritas solo van en texto normal. |

---

### 🛠️ Por qué Existen Dos Prompts Separados (CON vs. SIN Hoja)

El sistema no utiliza un único prompt con parámetros variables para evitar que el modelo diluya las directivas de examen:

* **Opción A (CON hoja de fórmulas):**  
  * *Filosofía:* La fórmula es una **herramienta de análisis, no un objeto de memoria**.
  * *Mecánica:* La fórmula compleja se coloca obligatoriamente en el **anverso** como dato. La tarjeta evalúa qué variable domina en extremos, qué pasa con $Y$ si se duplica $X$, o qué significa físicamente un exponente. Solo las definiciones elementales (rendimientos, diferencias de cota) admiten memoria directa.
* **Opción B (SIN hoja de fórmulas):**  
  * *Filosofía:* El alumno debe ser capaz de **escribir la ecuación desde cero en el examen**.
  * *Mecánica:* Se exige la producción activa y limpia de la fórmula sin pistas en el anverso. Las hipótesis de validez se desacoplan en una tarjeta separada para no recargar la memoria. Admite un parámetro de entrada para definir si se evalúan o no demostraciones paso a paso.
---

## 📌 Conclusión y Estado del Sistema (V2 - Octubre 2026)

Con estas cinco herramientas integradas, el sistema cubre el ciclo completo del aprendizaje técnico universitario:
1. **Mapeo:** Extracción curricular sin lagunas ni invenciones (`01`).
2. **Comprensión Activa:** Destrucción socrática de errores conceptuales con micro-pacing (`02`).
3. **Calibración Forense:** Exámenes de prueba con el formato y cuota matemática real de tu cátedra (`03`).
4. **Retención a Largo Plazo:** Mazos de repetición espaciada quirúrgicos y sin fricción (`04`).
5. **Infraestructura:** Optimización de cuotas y modelos de razonamiento (`05`).

El objetivo final no es estudiar más horas, sino que cada minuto invertido frente a la pantalla tenga un retorno medible en comprensión y rendimiento de examen.

---

## 🧭 Mapa de Navegación del Sistema

* 🏠 **Página Principal:** [[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]
* 📋 **Fase 1 (Checklists):** [[20. Áreas/Sistema de Estudio con IA/01 - Extractor de Checklists\|01 - Extractor de Checklists]]
* 🧠 **Fase 2 (Tutoría Activa):** [[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]
* 🎯 **Fase 3 (Simulacros de Examen):** [[20. Áreas/Sistema de Estudio con IA/03 - Simulador y Generador de Exámenes de Cátedra\|03 - Simulador y Generador de Exámenes de Cátedra]]
* 🗂️ **Fase 4 (Tarjetas de Anki):** [[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]
* 🤖 **Infraestructura y Modelos:** [[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]