---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/01-extractor-de-checklists/","title":"01 - Extractor de Checklists","tags":["prompts","checklist","obsidian"],"dg-note-properties":{"title":"01 - Extractor de Checklists","tags":["prompts","checklist","obsidian"]}}
---


# 📋 Extractor Curricular de Checklists Atómicas

Este prompt audita los archivos de la cátedra cargados en tu cuaderno y genera el desglose temático en formato Markdown nativo (`- [ ]`) listo para pegar y usar en Obsidian.

> [!IMPORTANT] 📌 Puntos críticos a recordar
> * **Entorno y Modelo:** Correr en **[gemini.google.com](https://gemini.google.com)** abriendo el cuaderno de la materia. Modelo según **[[20. Áreas/Sistema de Estudio con IA/04 - Modelos Recomendados por Tarea\|04 - Modelos Recomendados por Tarea]]**.
> * **De a una unidad por mensaje:** Nunca pidas varias unidades juntas; pedir de a una evita que el modelo resuma o saltee contenidos finos (Ver final del prompt con su Instrucción).
> * **Regla de fuentes:** Solo procesa lo que subiste (diapositivas, TPs, parciales). No inventa preguntas de examen si no hay exámenes cargados.
> * **Al terminar:** Copiá las casillas a tu nota de Obsidian y **borrá inmediatamente el chat de Gemini** para no arrastrar tokens ni degradar el contexto.

---

### 📋 El Prompt (Copiar tal cual)

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

*Volver a la guía general:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**  
*Siguiente herramienta:* ➡️ **[[20. Áreas/Sistema de Estudio con IA/02 - Tutor Personal Cognitivo\|02 - Tutor Personal Cognitivo]]**