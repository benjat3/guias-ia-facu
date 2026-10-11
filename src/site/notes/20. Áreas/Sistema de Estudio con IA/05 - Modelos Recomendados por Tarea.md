---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/05-modelos-recomendados-por-tarea/","title":"05 - Modelos Recomendados por Tarea","tags":["guia","modelos-ia","configuracion","ingenieria","ai-studio"],"dg-note-properties":{"title":"05 - Modelos Recomendados por Tarea","tags":["guia","modelos-ia","configuracion","ingenieria","ai-studio"]}}
---


# 🤖 Modelos Recomendados por Tarea y Gestión de Cuotas

Esta página actúa como **fuente única de verdad** para la elección de plataformas, modelos de IA y parámetros de razonamiento del sistema. Cuando se actualicen las versiones o cambien los límites de cuota, se modifica únicamente este archivo para mantener todo el flujo alineado.

> [!NOTE] 🧪 Entornos Testeados y Validados
> El flujo de trabajo está diseñado optimizando el ecosistema de **Google (NotebookLM, Gemini Web y Google AI Studio)** para garantizar cuota accesible o ilimitada, sumando a **Anthropic (Claude Sonnet 5.5)** de forma táctica en tareas de alta síntesis matemática.

---

## 📊 Matriz de Decisión Rápida

| Tarea del Sistema                        | Entorno / Plataforma                                                                                                                 | Modelo Recomendado                                                  | Parámetros Clave                                   | Justificación Operativa                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **1. Extractor de Checklists**           | **Paso 1:** [NotebookLM](https://notebook.google.com/)<br>**Paso 2:** [Gemini Web](https://gemini.google.com) *(cuaderno vinculado)* | **1.** Motor NotebookLM<br>**2.** Gemini 3.8 Flash High o Extendido | Predeterminado                                     | Doble extracción cruzada y fusión. Flash 3.8 High o Extendido audita omisiones finas.                                   |
| **2. Tutor Cognitivo Activo**            | [NotebookLM](https://notebook.google.com/) *(con directivas vía bypass)*                                                             | **Motor nativo de Gemini Notebook**                                 | Prompt cargado vía Gemini Web                      | **Cuota inagotable:** permite sesiones socráticas de micro-pacing durante horas prácticamente sin límite de mensajes.   |
| **3. Generador de Exámenes (Minería)**   | [NotebookLM](https://notebook.google.com/)                                                                                           | **Motor nativo de Gemini Notebook**                                 | Pasos 1, 2, 3 y 3B                                 | Anclaje documental estricto para extraer habilidades (`mapa.md`), banco (`banco.md`) y firma docente (`modelo.md`).     |
| **3. Generador de Exámenes (Redacción)** | [Gemini Web](https://gemini.google.com) o [Claude.ai](https://claude.ai)                                                             | **Gemini 3.8 Flash** o **Claude Sonnet 5.5**                        | **Gemini:** Extended o High<br>**Claude:** Medium+ | **NotebookLM es pésimo redactando exámenes completos.** Se requiere razonamiento avanzado para cálculos y LaTeX limpio. |
| **4. Generador de Tarjetas Anki**        | [Google AI Studio](https://aistudio.google.com/prompts/new_chat)                                                                     | **Gemini 3.8 Flash**                                                | Thinking: `High`<br>Media Res: `High`              | Entorno para desarrolladores sin filtros comerciales. Presets en *System Instructions* y delimitadores CSV perfectos.   |

---

## 🔍 Detalle por Tarea y Criterios de Selección

### 1. Extracción de Checklists Curriculares
* **Entornos:** NotebookLM ➔ Gemini Web.
* **Dinámica:** NotebookLM extrae el primer borrador gracias a su ventana de contexto indexada. Luego, el chat de Gemini Web (con el cuaderno seleccionado) corre el mismo prompt de forma independiente y fusiona ambos desgloses en una lista maestra.
* **Gestión de cuota:** Se envían solo 2 o 3 mensajes por unidad. 
* **Regla crítica:** Al terminar de copiar las casillas a Obsidian, **borrá el chat en Gemini Web** para no saturar tokens en futuras consultas.

---

### 2. Tutor Cognitivo Socrático (Estudio Diario)
* **Entorno:** `notebook.google.com` (NotebookLM).
* **Por qué NO usar Gemini Web ni Claude acá:** Una sesión de estudio interactivo con micro-pacing consume entre 40 y 80 interacciones por unidad. En cualquier chat comercial convencional agotarías tu cuota diaria en menos de media hora debido a la re-inyección acumulativa del historial.
* **La ventaja de NotebookLM:** Cuota virtualmente infinita y anclaje nativo a los PDFs de la cátedra con citas clickeables. Además, el **bypass de configuración** permite inyectar el prompt de 27k caracteres sin que el sistema lo recorte.

---

### 3. Simulador y Generador de Exámenes de Cátedra
* **Fase de Minería Forense (Pasos 1 al 3B):** Se corre dentro de **NotebookLM** para garantizar que los ejercicios transcriptos al banco y los porcentajes del mapa salgan estrictamente de los archivos cargados.
* **Fase de Ensamblado (Paso 4):** Se descarga el texto de los archivos `.md` y se traslada a:
  * **Gemini 3.8 Flash (Razonamiento High):** Rápido, preciso en deducciones algebraicas y disponible en Gemini Web o AI Studio.
  * **Claude Sonnet 5.5 (Esfuerzo de Razonamiento en Medium o superior):** Es el modelo con mejor redacción pedagógica y consistencia en el balance de ejercicios inéditos. 
  * *⚠️ Alerta de cuota en Claude:* Usar Sonnet 5.5 en niveles *High* o *Max* destruye la cuota gratuita diaria de Anthropic en 1 o 2 respuestas. El nivel **Medium** ofrece el equilibrio perfecto entre profundidad analítica y rendimiento.

---

### 4. Generación de Tarjetas de Anki (CSV Automatizado)
* **Entorno:** **Google AI Studio** (`aistudio.google.com`).
* **Por qué NO usar el chat regular de Gemini Web:** 
  1. **Filtros comerciales vs. Entorno de desarrollo:** Google ha confirmado que Gemini Web prioriza la experiencia conversacional del usuario general, lo que suele relajar directivas negativas. AI Studio entrega el modelo en crudo para desarrolladores, acatando con rigidez extrema las reglas de sintaxis CSV y la prohibición de etiquetas HTML dentro de bloques LaTeX.
  2. **Productividad con Presets:** AI Studio permite guardar los prompts de Anki en **System Instructions**, eliminando la necesidad de copiar y pegar el prompt en cada bloque de diapositivas.
  3. **Calibración obligatoria:**
     * `Thinking level: High`: Garantiza que el modelo analice el significado físico antes de escribir la tarjeta.
     * `Media resolution: High`: Imprescindible para que la visión computacional lea subíndices chicos y detalles en diagramas vectoriales o curvas de clase.

---

## ⚠️ Comparativa de Modelos Evaluados

* **Gemini 3.8 Flash (El estándar del sistema):** Es actualmente el mejor modelo costo-beneficio de Google. Supera a modelos teóricamente más pesados en seguimiento de directivas negativas, formateo de código sin alucinaciones y velocidad de respuesta.
* **Claude Sonnet 5.5 (El referente en síntesis y exámenes):** Sobresaliente para generar problemas de examen nuevos (*gemelos*) que respeten la carga horaria y dificultad de la cátedra sin cometer deslices conceptuales.
* **Gemini Pro 3.1 (Desaconsejado):** Demostró un rendimiento inferior a Flash 3.8 para las tareas de este sistema. Tiende a simplificar consignas, resumir checklists por pereza cognitiva y cometer errores de escape en delimitadores CSV.
* **Gemini Flash-Lite (Terminantemente prohibido):** No tiene la capacidad para sostener las directivas de estos prompts. Alucina contenidos curriculares y destruye la estructura de importación de Anki.

---

## 🔄 Historial de Actualizaciones de Modelos

| Fecha | Tarea | Cambio Realizado | Justificación Técnica |
|---|---|---|---|
| **11/10/2026** | Generación de Tarjetas Anki | Gemini Web ➔ **Google AI Studio** | Acceso a *System Instructions* guardadas, *Media Resolution High* y eliminación de fallas de formato en CSV/LaTeX. |
| **11/10/2026** | Generador de Exámenes | Adopción de **Claude Sonnet 5.5** (Medium) | NotebookLM alucina al redactar exámenes enteros; Sonnet 5.5 y Flash 3.8 High garantizan simulacros matemáticamente válidos. |
| **11/10/2026** | Tutor Cognitivo | Implementación del **Bypass de 27k** | Permite correr el prompt quirúrgico V4 completo en NotebookLM sin sufrir el recorte nativo de 10k caracteres. |
| **13/09/2026** | Checklists y Anki | Gemini Pro 3.1 ➔ Flash 3.8 extendido | Flash 3.8 demostró mayor fidelidad al texto y menor tasa de alucinación en directivas negativas. |

---

## 🧭 Navegación
*Volver a la guía general:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**  
*Ver registro histórico de cambios:* ➡️ **[[99 - Historial de Versiones (Changelog)\|99 - Historial de Versiones (Changelog)]]**