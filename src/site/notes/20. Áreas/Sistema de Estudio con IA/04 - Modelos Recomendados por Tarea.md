---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/04-modelos-recomendados-por-tarea/","title":"04 - Modelos Recomendados por Tarea","tags":["guia","modelos-ia","configuracion","ingenieria"],"dg-note-properties":{"title":"04 - Modelos Recomendados por Tarea","tags":["guia","modelos-ia","configuracion","ingenieria"]}}
---


# 🤖 Modelos Recomendados por Tarea y Gestión de Cuota

Esta página actúa como **fuente única de verdad** para la elección de modelos de IA del sistema. Cuando cambien las versiones o los límites de cuota, actualizá únicamente este archivo para mantener todo el flujo alineado.

> [!NOTE] 🧪 Alcance de las pruebas y herramientas externas
> Todas las configuraciones y recomendaciones de este sistema fueron **testeadas y validadas exclusivamente dentro del ecosistema de Google** (Gemini y NotebookLM), aprovechando su integración nativa y cuotas accesibles.  
> * **Otras alternativas no testeadas:** No se descarta que existan alternativas iguales o superiores, tanto de **pago** (*Claude 3.5/Opus, ChatGPT Plus con Canvas/o1*) como **gratuitas/open-weights** (*DeepSeek, Qwen*, etc.), si contás con acceso a ellas.  
> * Si decidís usar otro entorno, asegurate de que soporte lectura de PDFs extensos sin truncar texto y respete delimitadores CSV estrictos.

---

## ⚠️ Comparativa interna de modelos de Google

En base a las pruebas directas sobre estos prompts de ingeniería:

* **Gemini Flash 3.8 extendido (Recomendado):** Es actualmente el modelo óptimo. Ofrece la mejor combinación de seguimiento estricto de instrucciones negativas (no inventar temas), generación limpia de sintaxis en LaTeX/CSV y velocidad.
* **Gemini Pro 3.1 (Inferior):** A pesar de llevar la etiqueta "Pro", en las pruebas para estas tareas específicas demostró un desempeño **inferior a Flash 3.8**, mostrando menor rigidez al respetar los formatos CSV y mayor tendencia a simplificar checklists.
* **Gemini Flash-Lite (Descartado):** **Es muy malo para este flujo.** Pierde el hilo de las directivas largas, colapsa con el formateo de Anki, omite conceptos clave y alucina contenidos en la extracción curricular. No utilizarlo.

---

## 📊 Matriz de Decisión Rápida

| Tarea | Entorno / Plataforma | Modelo Recomendado | Justificación Operativa |
|---|---|---|---|
| **1. Extractor de Checklists** | [gemini.google.com](https://gemini.google.com) *(con Notebook vinculado)* | **Gemini Flash 3.8 extendido** | Máxima ventana de contexto y fidelidad para no inventar temas ni saltear ítems finos de los PDFs. |
| **2. Tutor Cognitivo Activo** | [notebook.google.com](https://notebook.google.com/) *(NotebookLM)* | **Motor nativo de Gemini Notebook** | **Cuota virtualmente inagotable:** permite chatear durante horas sin agotar límites diarios y con anclaje estricto a las fuentes. |
| **3. Generador de Tarjetas Anki** | [gemini.google.com](https://gemini.google.com) | **Gemini Flash 3.8 extendido** | Precisión matemática superior en LaTeX, respeto estricto del delimitador CSV y nula charlatanería. |

---

## 🔍 Detalle por Entorno y Criterio de Cuota

### 1. Extracción Curricular (Checklists Atómicas)
* **Entorno:** `gemini.google.com` abriendo el cuaderno de la materia.
* **Por qué este modelo:** Para leer diapositivas, guías de TP y parciales de golpe necesitás un modelo con razonamiento estructurado capaz de respetar directivas negativas estrictas (*"no inventar si no hay parciales cargados"*). 
* **Gestión de uso:** Como solo enviás un mensaje por unidad (4 a 8 mensajes en total por materia), el gasto de cuota es mínimo.
* **Regla crítica:** Recordá **borrar el chat** al terminar de copiar las checklists en Obsidian para liberar la memoria del historial.

---

### 2. Sesiones de Estudio con el Tutor Cognitivo
* **Entorno:** `notebook.google.com` (NotebookLM).
* **Por qué NO usar Gemini Web acá:** Si usaras un modelo extendido en el chat general de Gemini para una sesión socrática de estudio activo, **agotarías tu límite diario de uso en cuestión de minutos** debido al reenvío acumulativo de tokens en cada mensaje.
* **La ventaja de NotebookLM:** El entorno de NotebookLM está diseñado para interacciones conversacionales continuas sobre documentos largos con un costo de uso ínfimo. Además, garantiza por arquitectura que la teoría solo provenga del material cargado (epistemología híbrida).

---

### 3. Generación de Mazos de Anki (CSV)
* **Entorno:** `gemini.google.com`
* **Por qué este modelo:** Los prompts de Anki incluyen más de 20 reglas estrictas de formateo (delimitador punto y coma, sin saltos de línea dentro del campo, etiquetas HTML `<b>`, LaTeX en línea `\(...\)`). Modelos livianos o inferiores tienden a romper el CSV o inventar introducciones de cortesía que arruinan la importación.
* **Control de tamaño de lote:** Procesar en bloques equivalentes a **4 a 6 diapositivas** o **1 a 2 páginas** garantiza tarjetas compactas y evita que la IA resuma por pereza cognitiva.

---

## 🔄 Registro de Actualizaciones de Modelos

| Fecha | Tarea | Modelo anterior | Modelo adoptado | Motivo del cambio / Hallazgo |
|---|---|---|---|---|
| **13/09/2026** | Extractor y Anki | Gemini Pro 3.1 | Gemini Flash 3.8 extendido | Flash 3.8 superó a Pro 3.1 en consistencia CSV y seguimiento estricto de prompts. |
| **13/09/2026** | Evaluación general | Flash-Lite | Descartado | Rendimiento muy pobre; incapaz de sostener la complejidad del flujo. |
| **13/09/2026** | Tutor Cognitivo | Gemini Web | NotebookLM Nativo | Prevención de saturación de cuota diaria en sesiones largas. |

---

*Volver a la guía general:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**