---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/01-extractor-de-checklists/","title":"01 - Extractor de Checklists","tags":["prompts","checklist","obsidian","notebooklm","gemini"],"dg-note-properties":{"title":"01 - Extractor de Checklists","tags":["prompts","checklist","obsidian","notebooklm","gemini"]}}
---


# 📋 Extractor Curricular de Checklists Atómicas (Estrategia de Fusión Cruzada)

Este sistema audita los archivos de la cátedra cargados en tu cuaderno y genera el desglose temático en formato Markdown nativo (`- [ ]`), listo para pegar y usar en Obsidian.

> [!IMPORTANT] 📌 Flujo Táctico: Doble Extracción y Fusión (NotebookLM + Gemini Flash 3.8)
> Para no depender de los sesgos de un solo modelo y capturar el 100% de los detalles finos, la extracción se realiza mediante una **validación cruzada**:
> 
> 1. **Extracción A (NotebookLM):** Corrés el *Prompt Extractor* en **[NotebookLM](https://notebook.google.com/)** para obtener la primera versión con anclaje directo a las fuentes.
> 2. **Extracción B (Gemini Web):** Abrís tu cuaderno en **[gemini.google.com](https://gemini.google.com)** con el modelo **Gemini 3.8 Flash** y le pasás **el mismo Prompt Extractor** para que arme su propia versión independiente.
> 3. **Fusión Definitiva (En el chat de Gemini Web):** En el mensaje siguiente, le pegás la checklist que te dio NotebookLM y le pedís que integre ambas versiones en una sola checklist maestra sin omisiones ni redundancias.
> 
> * **Regla de oro:** Procesá siempre **de a una unidad por vez**.
> * **Al terminar la unidad:** Copiá la lista final consolidada a tu nota de Obsidian y **borrá el chat de Gemini Web** para liberar contexto.

---

# 1️⃣ El Prompt Extractor (Usar en NotebookLM y en Gemini Web)

Copiá este prompt tal cual y ejecutalo primero en NotebookLM y luego en Gemini Web indicando la unidad correspondiente:

```markdown
# ROL Y OBJETIVO
Actuá como un extractor curricular exhaustivo basado EXCLUSIVAMENTE en evidencia documental provista. Tu misión es procesar los archivos cargados para la unidad indicada y generar un CHECKLIST ATÓMICO en formato Markdown nativo (`- [ ]`), listo para usar en Obsidian.

---

# REGLA DE ORO: CERO INVENCIÓN DE FUENTES NO APORTADAS (ESTRICTO)
Operá únicamente sobre el material explícitamente cargado:

1. **Condicionalidad de fuentes:**
   - Si NO se adjuntaron parciales, finales ni modelos de examen, **TIENE PROHIBIDO inventar o suponer "preguntas típicas", "trampas de examen" o "casos de parcial" desde tu conocimiento general.**
   - Omití por completo cualquier sección o ítem de examen si no existe un documento de evaluación real cargado como fuente.
   - Lo mismo aplica si falta alguna otra fuente: solo procesás lo que está en los archivos.

2. **Jerarquía y Filtro de Libros (si hay bibliografía cargada):**
   - El perímetro de lo que entra lo fijan las diapositivas de clase, los apuntes y las guías de TP.
   - Si hay libros o manuales completos, usalos ÚNICAMENTE como soporte técnico de los temas que efectivamente aparecen en las clases o TPs. Lo que esté en el libro pero no se mencione en el material de cursada queda afuera.

---

# REGLAS DE FORMATO Y ATOMICIDAD (PARA OBSIDIAN)

1. **Formato Markdown Nativo:**
   - Exclusivamente encabezados (`#`, `##`) y casillas de verificación: `- [ ]`.
   - Prohibidas las tablas, introducciones, conclusiones o explicaciones teóricas extensas.

2. **Atomicidad Funcional:**
   - Cada línea debe ser un ítem evaluable y autosuficiente que yo pueda copiar y pegar directamente a mi tutor de estudio para comprobar mi dominio.
   - No desarmes metodologías o deducciones si sus pasos carecen de sentido físico o analítico por separado.

---

# ESTRUCTURA DE SALIDA DINÁMICA

Organizá la salida por bloques temáticos reales según figuren en el material cargado. 

# Unidad [X]: [Nombre de la Unidad]
## [Nombre del Subtema 1]
- [ ] [Concepto atómico, relación o deducción presente en las clases/apuntes]
- [ ] [Tipo de cálculo, algoritmo o ejercicio presente en las guías de TP]

## [Nombre del Subtema 2]
- [ ] ...

*(Nota: Creá una sección o ítems de "Exámenes / Parciales" ÚNICA Y EXCLUSIVAMENTE si en las fuentes cargadas hay archivos de parciales, finales o preguntas explícitamente rotuladas como de examen).*

---

# INSTRUCCIÓN DE EJECUCIÓN
Procesá el material cargado para la **[indicar Unidad X, ej: Unidad 1]**. 
Devolvé ÚNICAMENTE el bloque de código Markdown con las casillas, sin texto de cortesía antes ni después.
```

---

# 2️⃣ El Prompt de Fusión y Consolidación (Gemini Web)

Inmediatamente después de que Gemini Web termine de generar su propia checklist, respondé en ese **mismo chat** pegando este mensaje:

```markdown
# INSTRUCCIÓN DE FUSIÓN Y CONSOLIDACIÓN CURRICULAR

Acá tenés la checklist que generó NotebookLM para esta misma unidad a partir de las mismas fuentes:

---
[PEGAR AQUÍ LA CHECKLIST GENERADA POR NOTEBOOKLM]
---

Tu objetivo es **integrar y fusionar tu versión con la de NotebookLM** para crear una **CHECKLIST MAESTRA DEFINITIVA**:

1. **Fusión sin omisiones:** Si una versión detectó un detalle fino, caso de borde, tipo de ejercicio de TP o deducción que la otra pasó por alto, incorporalo.
2. **Eliminación de redundancias:** Si ambas versiones incluyeron el mismo concepto con distinta redacción, unificalas eligiendo la formulación más atómica y precisa.
3. **Estructura limpia:** Mantené el orden pedagógico real de la materia, encabezados claros (`#`, `##`) y casillas nativas (`- [ ]`).
4. **Cero texto extra:** Devolvé ÚNICAMENTE el bloque de código Markdown consolidado, sin introducciones ni comentarios.
```

---

## 🧭 Navegación
*Volver a la guía general:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**  
*Siguiente herramienta:* ➡️ **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]**