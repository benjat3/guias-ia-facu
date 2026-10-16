---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/99-historial-de-versiones-changelog/","title":"99 - Historial de Versiones (Changelog)","tags":["changelog","actualizaciones","workflow","ingenieria"],"dg-note-properties":{"title":"99 - Historial de Versiones (Changelog)","tags":["changelog","actualizaciones","workflow","ingenieria"]}}
---



# 📜 Historial de Versiones y Registro de Cambios Técnicos

Este documento registra la evolución técnica, las pruebas descartadas y las mejoras pedagógicas de cada herramienta del sistema, explicando qué cambió, por qué se modificó y cómo impacta en el estudio real.

---

## 🌐 1. Evolución de la Arquitectura Global

| Dimensión | Versión Inicial (V1 - Sep 2026) | Versión Consolidada (V2 - Oct 2026) | Versión Definitiva (V2.2 - 15/10/2026) | Impacto Práctico en el Estudio |
| :--- | :--- | :--- | :--- | :--- |
| **Estructura del Flujo** | 4 fases lineales (Checklist ➔ Tutor ➔ Anki ➔ Repaso). | 5 fases modulares (+ Simulador de Exámenes). | **5 fases principales + 1 Módulo Satélite Opcional** (**[[20. Áreas/Sistema de Estudio con IA/01B - Extractor de Clases y Voz de la Cátedra\|01B - Extractor de Clases y Voz de la Cátedra]]**). | Cubre todo el ciclo: desde auditar clases grabadas hasta rendir simulacros y fijar en Anki. |
| **Orquestación de Modelos** | Dependencia casi exclusiva del chat comercial de Gemini. | Ecosistema híbrido fijo (NotebookLM + Flash 3.8 + Sonnet 5.5). | **Desacople por Etiquetas Cognitivas:** `[Alto Razonamiento]` y `[Minería y Recuperación]`, centralizadas en **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**. | El sistema no queda obsoleto cuando cambian las versiones de los modelos; mejor cuidado de cuotas. |
| **Modelos de Alto Razonamiento** | Modelos generales sin razonamiento paso a paso (*Thinking off*). | Gemini 3.8 Flash High y Claude Sonnet 5.5 Medium. | **Gemini 3.8 Flash High** en AI Studio como estándar gratuito + incorporación de **Gemini Argon** (en pruebas para planes pagos). | Cálculos de balance físico confiables, cero alucinaciones en estados de tablas y LaTeX limpio. |
| **Rol de NotebookLM** | Asumido como "cuota infinita" y apto para cualquier tarea. | Descubrimiento del bypass de 27k caracteres para el Tutor V4. | **Sinceramiento de límites:** Cuota muy amplia (no infinita), rezago en razonamiento y prohibición de redactar exámenes. | Se usa donde es imbatible: como biblioteca central de 40 archivos con citas clickeables. |
| **Extracción de Checklists** | Un solo pase en Gemini Web con cuaderno vinculado. | Fusión cruzada en dos pases (NotebookLM + Gemini Web). | **Extractor Secuencial por Unidad:** Una sola unidad por turno en AI Studio / Argon con comando `Seguí`. | Se eliminó el trabajo doble de cruzar dos IAs y se erradicó la omisión silenciosa de temas. |
| **Simulador de Exámenes** | Inexistente (solo preguntas sueltas en el tutor). | Suite forense V1.0 de 4 pasos. | **Suite Forense V2.2:** Denominador real $n/N$ por unidad, pre-cálculo físico de ejercicios gemelos, cero spoilers y paquetes en Ruta B. | Simulacros fieles a los parciales reales de la cátedra listos para resolver o exportar a PDF. |
| **Generador de Anki** | Gemini Web comercial. | Google AI Studio (V2.1 con System Instructions y High/High). | **Anki V2.2:** Prohibición de comillas dobles `"`, LaTeX puro sin tags HTML adentro y campo `Back Extra` enriquecido en Image Occlusion. | Mazos CSV que importan sin errores ni fórmulas rotas en Anki Desktop y AnkiDroid. |

---

## 📋 2. Extractor de Checklists (`[[01 - Extractor de Checklists]]`)

### 🔍 Por qué se descartó la «Fusión de dos IAs» y se pasó al Motor Secuencial
A principios de octubre se probó extraer una checklist en NotebookLM, otra en Gemini Web y unirlas con un tercer prompt. En la práctica se descartó por dos razones contundentes:
1. **NotebookLM estructura mal las checklists** (hace resúmenes superficiales y saltea ejercicios de las guías), por lo que cruzarlo con Gemini solo daba trabajo extra sin aportar nada nuevo.
2. **El conector de cuadernos de NotebookLM dentro de Gemini Web (`gemini.google.com`) falla al indexar archivos** e ignora PDFs enteros.

La versión **V2.2 Secuencial** procesa **una sola unidad por mensaje** directamente en **Google AI Studio (`Gemini 3.8 Flash High`)** o **Gemini Argon** subiendo los PDFs desde la computadora:

| Aspecto | Versión Anterior (Fusión Doble) | Versión Actual (V2.2 Secuencial) | Mejora Obtenida |
| :--- | :--- | :--- | :--- |
| **Entorno** | NotebookLM + Gemini Web conectado a cuaderno. | **Google AI Studio** o **Gemini Argon** (PDFs subidos desde la PC). | Lectura completa de todos los archivos sin el bug del conector de Gemini Web. |
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

El Tutor consolidó su regla principal (**una sola consigna corta por turno**) y sumó la **Ruta BETA** para modelos de alto razonamiento junto a la **Ruta Estable** de NotebookLM:

| Mejora Incorporada | Versiones Anteriores (V2 / V3) | Versión Actual (V4 Estable y Ruta Beta) | Impacto en el Estudio |
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

## 📚 7. Biblioteca y Guías de Autoevaluación (`[[06 - Biblioteca de Ciencia del Aprendizaje|06]]` y `[[07 - Índice de Guías y Checklists de Aprendizaje|07]]`)

- **En [[20. Áreas/Sistema de Estudio con IA/06 - Biblioteca de Ciencia del Aprendizaje\|06 - Biblioteca de Ciencia del Aprendizaje]]:** Se incorporó *A Mind for Numbers* (Barbara Oakley) en el puesto #1 como lectura inicial ideal para ingeniería, seguida por *Make It Stick*, *How to Become a Straight-A Student*, *How I Wish I'd Taught Maths*, *Peak*, *Ultralearning* y *Powerful Teaching*.
- **En [[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]:** Se organizaron las 4 checklists diagnósticas (**[[20. Áreas/Sistema de Estudio con IA/07.1 - Guía de Estudio - Teoría y Ejercicios\|07.1]]**, **[[20. Áreas/Sistema de Estudio con IA/07.2 - Guía de Estudio - Ejercicios y Problemas\|07.2]]**, **[[20. Áreas/Sistema de Estudio con IA/07.3 - Guía de Estudio - Teoría y Demostraciones\|07.3]]** y **[[20. Áreas/Sistema de Estudio con IA/07.4 - Guía de Enseñanza para Docentes y Tutores\|07.4]]**) destacando los **5 hábitos con estrella (★)** para quien quiere empezar a mejorar su forma de estudiar sin abrumarse.
- **[[20. Áreas/Sistema de Estudio con IA/08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)\|08 - Sistema de Estudio Tradicional (En Papel o con IA Simple)]]**: Incorporación del flujo 100% analógico en 4 pasos (Mapa en 1 carilla, Ejemplo tapado y deducciones por tramos, Formulario razonado + Bitácora de fallas clasificadas, e Intercalado + Simulacro) junto con las 4 reglas para usar chats de IA comunes sin prompts complejos.
---

## 🧭 Navegación
*Volver al inicio del sistema:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**  
*Consultar infraestructura de modelos:* 🤖 **[[20. Áreas/Sistema de Estudio con IA/05 - Modelos Recomendados por Tarea\|05 - Modelos Recomendados por Tarea]]**  
*Ir a las guías de autoevaluación:* 🧭 **[[20. Áreas/Sistema de Estudio con IA/07 - Índice de Guías y Checklists de Aprendizaje\|07 - Índice de Guías y Checklists de Aprendizaje]]**