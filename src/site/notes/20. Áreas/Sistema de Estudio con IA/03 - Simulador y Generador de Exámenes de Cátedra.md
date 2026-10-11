---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/03-simulador-y-generador-de-examenes-de-catedra/","title":"03 - Simulador y Generador de Exámenes de Cátedra","tags":["prompts","examenes","simulacro","ingenieria","evaluacion"],"dg-note-properties":{"title":"03 - Simulador y Generador de Exámenes de Cátedra","tags":["prompts","examenes","simulacro","ingenieria","evaluacion"]}}
---


# 🎯 Simulador Forense y Generador de Exámenes de Cátedra

Este sistema implementa una **ingeniería inversa documental** sobre tu materia: no le pide a la IA que "invente un examen genérico", sino que audita tus exámenes históricos, guías de TP y apuntes para construir un mapa de habilidades, formalizar la "firma de evaluación" de tus docentes y generar simulacros hiperrealistas.

> [!IMPORTANT] 📌 Arquitectura Híbrida de Entornos (NotebookLM + LLM de Razonamiento)
> Para maximizar la precisión analítica y no degradar la calidad de las pruebas, este sistema divide el trabajo entre dos plataformas:
> 
> 1. **Fase de Minería Forense (Pasos 1, 2, 3 y 3B):** Se corre en **[NotebookLM](https://notebook.google.com/)**.  
>    * Cargás todos los PDFs de la cursada (parciales viejos, finales, TPs, apuntes).
>    * Al ejecutarse acá, el costo de tokens es cero. Aunque ningún modelo tiene tasa nula de alucinación, NotebookLM es actualmente la herramienta con mejor anclaje estricto a documentos extensos para extraer y catalogar evidencia.
> 2. **Fase de Ensamblado y Generación (Paso 4):** Se corre fuera de NotebookLM, en un chat nuevo de **[Gemini](https://gemini.google.com)** (modelo *Flash extendido / Razonamiento Alto*) o en **Claude** (*Sonnet 5.5 con razonamiento en Medium o superior*).  
>    * **NotebookLM es horrible para redactar exámenes y alucina con facilidad al intentar inventar o balancear problemas enteros.**
>    * Modelos avanzados como Gemini Flash (High) o Sonnet 5.5 (Medium+) toman los archivos `.md` destilados de las fases anteriores y producen problemas numéricos coherentes con formato LaTeX impecable (`$...$` y `$$...$$`).
>    * *Nota sobre cuota:* En Claude, usar Sonnet 5.5 en niveles High o Max destruye tu límite diario gratuito en un par de mensajes; el nivel Medium es el punto de equilibrio óptimo.

---

## 🗺️ Mapa del Flujo de Trabajo

```text
  [ FUENTES EN NOTEBOOKLM: Parciales, Finales, TPs, Apuntes ]
                               │
                               ▼
                     [ PASO 1: mapa.md ]
               Mapa curricular de habilidades
                y evidencia histórica (n/N)
                               │
                               ▼
                     [ PASO 2: banco.md ]
                 Banco forense de consignas
           (Exámenes ➔ TPs, catalogados con mapa.md)
                               │
                               ▼
                    [ PASO 3: modelo.md ]
             Especificación de la firma del profesor
                (Estructura, cuota T/P, formatos)
                               │
                  ┌────────────┴────────────┐
                  │ (Solo si falta teoría)  │
                  ▼                         ▼
      [ PASO 3B: banco_teoria.md ]  [ PASO 4: GENERACIÓN ]
         Preguntas de práctica      Gemini Flash / Claude Sonnet 5.5
         ancladas con citas         • Ruta A: Bucle activo
                  │                 • Ruta B: Paquetes listos
                  └────────────┬────────────┘
                               ▼
                     [ EXAMEN FINALIZADO ]
```

---

## ⚙️ Dinámica Operativa de las Fases

### Paso 1: Mapa Curricular (`mapa.md`)
* **Objetivo:** Definir el universo de habilidades evaluables clasificadas por tipo de desempeño (`[C]` concepto, `[D]` deducción, `[N]` cálculo, `[I]` interpretación, `[J]` justificación, `[G]` gráfico).
* **Métrica histórica:** Cada habilidad recibe una etiqueta con evidencia matemática observable (ej. `RECURRENTE 3/7`, `EVALUADA 1/7`, `ENSEÑADA+TP 0/7`).
* **Cómo se procesa:** En NotebookLM, **unidad por unidad**.

### Paso 2: Banco Forense de Consignas (`banco.md`)
* **Dependencia de entrada:** Requiere tener a mano el `mapa.md` generado en el Paso 1 para poder asociar cada consigna a los IDs de habilidad correspondientes.
* **Barrera de orden estricta:** Primero se cargan **todos los exámenes reales** (se transcriben al 100% para fijar la línea base).
* **TPs y Teoría selectivos:** Recién después se procesan las guías de TP y diapositivas teóricas, incorporando **únicamente** los ejercicios que cubran zonas ciegas o variantes que los exámenes no mostraron.
* **Resultado:** Catálogo estructurado con IDs correlativos (`B01`, `B02`, etc.).

### Paso 3: Especificación del Modelo (`modelo.md`)
* **Objetivo:** Auditar los exámenes cargados y resumir en máximo 70 líneas la "firma de evaluación": cantidad de ejercicios, cuota estricta de teoría/práctica, criterios de corrección y tipo de demanda.

> [!WARNING] ⚠️ Decisión Crítica: ¿Cuándo usar y cuándo EVITAR el Paso 3B?
> El **Paso 3B (`banco_teoria.md`)** genera preguntas de práctica teórica respaldadas en tus apuntes.
> * **NO LO USES si tenés una base sólida de parciales viejos:** Si tus exámenes históricos ya tienen preguntas teóricas escritas, **salteá el Paso 3B**. Dejar que la IA redacte teoría sintética cuando ya tenés la voz real de la cátedra introduce ruido innecesario.
> * **USALO ÚNICAMENTE SI:** Tenés muy pocos exámenes viejos (1 o 2), o si la cátedra evalúa la teoría en coloquios/orales de los cuales no hay registro escrito en los parciales de papel.

### Paso 4: Generación del Simulacro
Descargás o copiás el texto de `mapa.md`, `banco.md`, `modelo.md` (y `banco_teoria.md` si existiera), abrís un chat en **Gemini Flash (razonamiento alto)** o **Claude Sonnet 5.5 (razonamiento Medium+)** y elegís una de las dos modalidades de trabajo:

* **Ruta A (Entrenamiento Personal Adaptativo):** Generás el examen a ciegas, lo resolvés en papel con cronómetro, usás el comando `Corregir` y actualizás tu archivo de registro para rastrear el progreso de consolidación tema por tema.
* **Ruta B (Fábrica de Simulacros Autosuficientes):** Usás la directiva especial (bloque *Nota*) para que el modelo ensamble un examen completo con su resolución paso a paso (`Clave`) en el mismo mensaje, priorizando años recientes (2025/2026), sin habilidades repetidas, listo para exportar a PDF o pasarle a compañeros de estudio.

---

# 📋 Los Prompts del Sistema

## 1️⃣ Prompt 1: Mapa Curricular y Evidencia
* **Entorno:** NotebookLM
* **Salida que guardás en Obsidian:** `mapa.md`

```markdown
# ROL
Analista curricular. Construís el MAPA DE HABILIDADES EVALUABLES de la materia y registrás la evidencia histórica de examen de cada una. NO generás exámenes, NO analizás el estilo del profesor, NO predecís el próximo examen.

# FUENTES
- UNIVERSO (qué existe): programa, diapositivas/apuntes, guías de TP, TPs resueltos. Bibliografía solo como soporte de temas ya presentes en esos materiales; lo que está solo en un libro queda afuera (si amplía o contradice, va a Anomalías).
- EVIDENCIA (qué se evaluó): parciales, finales, recuperatorios, modelos oficiales. No definen el universo; solo registran qué habilidades aparecieron y cuántas veces.
- Ausencia en los exámenes cargados = ausencia de evidencia, no prueba de que no se tome (son una muestra parcial).
- Cero invención: nada por conocimiento general, analogía ni porque "debería estar". Nomenclatura exacta de las fuentes. Si algo no se puede determinar: NO CONFIRMADA + motivo.

# HABILIDAD EVALUABLE
Unidad → Tema → Habilidad: algo que el estudiante debe hacer, explicar, calcular, interpretar o justificar, y que podría ser una parte distinguible de un examen.
Separar dos habilidades solo si (a) pueden evaluarse de forma independiente, (b) requieren estrategias distintas, o (c) las fuentes las presentan/practican por separado. No convertir variables, símbolos, unidades ni pasos algebraicos en habilidades. Granularidad dudosa: agrupar y anotar en Anomalías.
Tipos (solo si las fuentes los respaldan; puede haber varios por habilidad):
[C] concepto, definición, supuestos de validez
[D] deducción o demostración formal
[N] cálculo o procedimiento numérico
[I] interpretar resultados/gráficos, predecir efecto de variar un parámetro
[J] justificar, comparar o seleccionar método o criterio
[G] graficar o esquematizar

# EVIDENCIA DE EXAMEN
Asignar la primera etiqueta que corresponda, en este orden:
1. RECURRENTE: aparece en 2+ exámenes distintos.
2. EVALUADA: aparece en 1 examen.
3. ENSEÑADA+TP: sin examen, con práctica relevante en TP.
4. ENSEÑADA: solo teoría, sin TP ni examen.
5. NO CONFIRMADA: ambigua, mencionada sin desarrollo o con fuentes contradictorias.
Reglas:
- La etiqueta refleja la mejor clasificación según la evidencia observable. La ambigüedad residual (ej. habilidad dudosa que igual aparece en un examen) se registra en Confianza y Anomalías.
- Cuenta como evaluada si el examen exige sustancialmente el mismo desempeño, aunque cambien contexto, números o redacción. Un examen cuenta una sola vez por habilidad.
- Distinguir evidencia DIRECTA (foco de la consigna) de PARCIAL (necesaria dentro de un ejercicio más amplio).
- Con un solo examen, ninguna habilidad es RECURRENTE. Sin exámenes: avisarlo al inicio y usar solo ENSEÑADA+TP / ENSEÑADA / NO CONFIRMADA.
- Informar siempre n/N y porcentaje, con nombres de los exámenes. N = total de exámenes cargados y analizados (no los que existieron). n=0 = "sin evidencia en la muestra cargada", no "nunca evaluada".
- Las etiquetas describen historia, no probabilidad futura. Prohibido: "seguro entra", "alta probabilidad", "riesgo", "poco importante", "el profesor siempre toma".
- Confianza: ALTA = evidencia clara y repetida o inequívoca; MEDIA = suficiente pero limitada; BAJA = única, indirecta o ambigua.
- Si los exámenes son de distintos períodos, unidades o docentes, anotarlo cuando afecte la lectura.

# ANOMALÍAS (antes del mapa)
1. Contenido evaluado en exámenes sin respaldo visible en la cursada: NO va al mapa, se lista aparte.
2. TP sin respaldo teórico visible (HUECO TEÓRICO).
3. Teoría sin práctica visible (HUECO DE APLICACIÓN; no implica irrelevante).
4. Dudas de granularidad y ambigüedades residuales.
5. Fuentes faltantes y qué parte del análisis afectan.

# FORMATO DE SALIDA (Markdown simple, sin tablas, sin bloques de código, sin introducción)
ANOMALÍAS Y HUECOS
- (lista por categoría, o "ninguno")

MAPA
U1: [Nombre exacto]
- U1.1 [Tema]
  - U1.1a [N][I] [habilidad] | RECURRENTE 3/7 (43%) | Exámenes: Parcial 1 2023, Final 2024, Recup 2025 | Directa | Cursada: TP2, Clase 3 | Conf: ALTA
  - U1.1b [C] [habilidad] | ENSEÑADA+TP 0/7 | Cursada: TP3, Clase 4 | Conf: MEDIA
Orden: el de la estructura de la materia, no por frecuencia. Si no podés ubicar la página, indicá solo el archivo; no inventes páginas ni números de ejercicio.

ZONA CIEGA HISTÓRICA: IDs de habilidades ENSEÑADA+TP sin evidencia de examen en las fuentes cargadas (descriptivo, sin interpretar riesgo).
RESUMEN: N unidades, N temas, N habilidades; distribución por etiqueta.

# AUDITORÍA INTERNA (antes de emitir; si algo falla, corregir)
[ ] Universo salió de la cursada, no de los exámenes
[ ] Ninguna habilidad descartada por no estar en exámenes
[ ] Nada agregado por conocimiento general ni libros ajenos a la cursada
[ ] Cada habilidad es distinguible, sin fragmentación mecánica
[ ] Recorrí TODOS los exámenes; cada etiqueta con examen tiene n/N y nombres
[ ] Sin frases predictivas
[ ] Anomalías fuera del mapa y fuentes faltantes registradas

# EJECUCIÓN
Unidad a procesar: [indicar o "todas"]. Si es extenso, avanzar de a una unidad, manteniendo la numeración, y esperar mi OK entre unidades. Pedir aclaración solo si falta material que impida identificar el universo. Terminar con: "¿Corregís algo del mapa antes de pasar al banco de consignas?"
```

---

## 2️⃣ Prompt 2: Banco Forense de Consignas
* **Entorno:** NotebookLM
* **Salida que guardás en Obsidian:** `banco.md`

```markdown
# ROL

Actuá como transcriptor y catalogador forense de consignas. Extraé ejercicios/preguntas de EXÁMENES REALES y, selectiva y justificadamente, de GUÍAS DE TP y MATERIAL TEÓRICO (diapositivas/apuntes), catalogándolos contra el mapa curricular.

# FUENTES

* EXAMEN: ítem de examen real; evidencia histórica, formato y reciclaje.
* TP: ejercicio de guía; antecedentes operativos y variantes estructurales.
* TEORÍA-FUENTE: pregunta/consigna/actividad conceptual explícita (control, autoevaluación, título en forma de pregunta, “para pensar”); voz de la cátedra y antecedentes teóricos.
  NO generes ni resuelvas ejercicios/preguntas ni interpretes intenciones docentes: solo transcribí lo existente.

# BARRERA DE ORDEN

Procesá SIEMPRE EXÁMENES antes que TPs y TEORÍA-FUENTE. Si la fuente es TP/TEORÍA-FUENTE y no hay ningún EXAMEN en el banco, detenete y emití exactamente:
“ERROR DE ORDEN: No se pueden procesar TPs ni material teórico sin establecer la línea de base. Cargá primero los exámenes reales para fijar el benchmark de formato y complejidad.”
No proceses nada bajo criterios alternativos.

# EXTRACCIÓN

## 1. EXAMEN — exhaustiva

Transcribí el 100% de los ítems prácticos y teóricos, sin omitir ninguno. Definen el benchmark.

## 2. TP — selectiva y justificada

Analizá TODOS los ejercicios; no transcribas la guía completa. Seleccioná solo los que:

1. superen el GATEKEEPER: estructura y autonomía compatibles con exámenes cargados (cantidad/función de incisos y autonomía; sin desarrollo semanal/software; no exige coincidencia literal); Y
2. aporten uno de:

* [ZONA CIEGA]: (Habilidad + Tipo de desempeño) sin antecedente en EXAMEN.
* [DESEMPEÑO NO REPRESENTADO]: la habilidad aparece en examen, pero no bajo ese desempeño (ej.: U1.1a [C] existe, [N]/[I]/[J] no).
* [VARIANTE NO REPRESENTADA]: el par existe en examen, pero el TP cambia sustancialmente configuración, condición de borde o hipótesis y aporta una variante útil para gemelos.
  Excluí: TRIVIALES (despeje directo/verificación numérica), GUIADOS/TUTORIALES (6–8 incisos paso a paso; por defecto), REDUNDANTES (sin variante analítica), SOBREDIMENSIONADOS (proyectos/software).
  Única excepción guiado: si es el único antecedente de una [ZONA CIEGA], incorporalo como [GUIADO: requiere adaptación a formato autónomo].
  TOPE: máx 1–2 ejercicios por par (Habilidad + Desempeño), ej.: hasta 2 para U1.1a [N] y 2 para U1.1a [C].

## 3. TEORÍA-FUENTE — selectiva y justificada

Extraé ÚNICAMENTE preguntas/consignas explícitas escritas en el material. Prohibido convertir afirmaciones, definiciones o títulos en preguntas.
Cada candidato debe evaluar habilidad del mapa con [C], [D], [J], [I] o [G] y declarar uno de los 3 motivos contra ítems cargados.
GATEKEEPER: compatible con ítems teóricos de EXAMEN (demanda, extensión, apertura). Sin examen teórico para comparar, no lo apliques y marcá [PROVISIONAL].
Descartá preguntas retóricas sin contenido evaluable, respondibles con dato aislado y redundantes.
TOPE: máx 1–2 ítems por par (Habilidad + Desempeño) en TODO el banco.

# TRANSCRIPCIÓN

1. Literalidad absoluta: texto exacto con numeración de incisos, puntajes, datos, unidades, símbolos y notación. No corrijas, reformules, resumas ni completes.
2. Dudas por calidad: transcribí y marcá [¿?]. Ilegible: [ILEGIBLE]. Nunca adivines números ni unidades.
3. Figura/esquema/tabla no transcribible: [FIGURA: descripción objetiva de lo visible, sin interpretar/resolver]. Consultar original.
4. Unidad del banco = ejercicio/pregunta completa con todos sus incisos.
5. Sin resoluciones. Si la fuente trae resolución/criterio: solo “Resolución en fuente: SÍ (archivo)”.
6. Cero invención: no agregues ejercicios, preguntas, datos ni habilidades ausentes.
7. Conservá la fuente exacta; nunca presentes TP/TEORÍA-FUENTE como examen.
8. Aislamiento estadístico: TP/TEORÍA-FUENTE no son evidencia de examen ni participan en Reutilización LITERAL.

# CATALOGACIÓN POR ÍTEM

* ID: B01, B02… correlativo y estable; no reutilizar.
* Fuente: EXAMEN / TP / TEORÍA-FUENTE.
* Tipo de ítem: PRÁCTICO (cálculo/procedimiento numérico), TEÓRICO (concepto/deducción/justificación/interpretación sin cálculo central) o HÍBRIDO; según incisos, no por fuente.
* Origen exacto: archivo y número de ejercicio/pregunta, página/diapositiva si figura.
* EXAMEN: examen de origen y puntaje total/por inciso si figura.
* TP/TEORÍA-FUENTE: origen + Motivo [ZONA CIEGA / DESEMPEÑO NO REPRESENTADO / VARIANTE NO REPRESENTADA] + justificación breve. Si aplica: [GUIADO: requiere adaptación a formato autónomo].
* Habilidades del mapa: ID + desempeño (ej. U1.2a [N]). Sin ID: SIN ID + Anomalías; no inventar.
* Estructura observable: verbo principal por inciso, datos del enunciado, qué aporta el alumno, cantidad y dependencias.
* Estructura de respuesta observable: formato (desarrollo, definición breve, V/F justificado, opción múltiple, completar, esquema), etapas/líneas aprox., justificación, hipótesis, procedimiento, unidades, gráficos/esquemas.
* Complejidad: BAJA/MEDIA/ALTA comparada con EXÁMENES; justificar por etapas, dependencias, autonomía y carga operativa/conceptual. Con <2 exámenes: [PROVISIONAL]. Si no se puede: NO DETERMINABLE. No estimar minutos.
* Reutilización (SOLO EXAMEN): LITERAL = mismo enunciado o mínima variación de datos (listar Bxx repetidos); VARIACIÓN DE PATRÓN = misma estructura/dependencias con otro caso (indicar Bxx compartido); ÚNICA = sin equivalente en exámenes. TP/TEORÍA-FUENTE: Reutilización examen: NO APLICA.
* Usada como literal: NO (EXAMEN); NO APLICA (TP/TEORÍA-FUENTE).

# SALIDA

Markdown simple; sin tablas, bloques de código ni introducción.

## ANOMALÍAS Y CONTROL DE FILTRADO

* Reportá habilidades SIN ID, figuras dudosas, archivos de baja calidad, ítems incompletos o “ninguna”.
* Si procesaste TP/material teórico:
  * cantidades analizada/descartada/seleccionada;
  * ÍTEMS DESCARTADOS: número/diapositiva + motivo (TRIVIAL / GUIADO / REDUNDANTE / SOBREDIMENSIONADO / SIN MOTIVO DE SELECCIÓN / FORMATO INCOMPATIBLE / NO ES CONSIGNA EXPLÍCITA) + justificación de una línea;
  * HABILIDADES SIN ANTECEDENTE EN EL BANCO (solo unidad):
    * SIN ANTECEDENTE — TP PROCESADO: habilidad ENSEÑADA+TP cuyo TP ya fue procesado y ninguno pasó el filtro.
    * SIN ANTECEDENTE — TP NO PROCESADO: habilidad ENSEÑADA+TP cuya práctica está en TP aún no procesado.
    * SIN ANTECEDENTE — CANDIDATA A BANCO TEÓRICO: par (Habilidad + Desempeño) teórico [C]/[D]/[J]/[I]/[G] marcado ENSEÑADA, o con material teórico procesado, sin Bxx de ninguna fuente para ese par. Otro desempeño de la misma habilidad no cuenta.
    * ANOMALÍA MAPA/BANCO: habilidad EVALUADA o RECURRENTE en el mapa sin Bxx de EXAMEN asociado. Advertí: sin Bxx de ninguna fuente, caerán a S-A en el generador salvo antecedente en banco teórico (Prompt 3B).

## BANCO — FORMATO

B01 | Fuente: EXAMEN | Tipo de ítem: HÍBRIDO | Parcial 1 2024 | Ejercicio 1 | Puntaje: 3 | Habilidades: U1.1a [N], U1.2b [I] | Estructura: a) Calcule... b) Justifique... | Dependencias: b usa resultado de a | Da: [...] / Aporta el alumno: [...] | Respuesta: desarrollo con cálculo + justificación | Complejidad: MEDIA — [justificación] | Reutilización examen: ÚNICA | Resolución en fuente: NO | Usada como literal: NO
TEXTO LITERAL: [enunciado completo tal cual]

B02 | Fuente: TP | Tipo de ítem: PRÁCTICO | TP2 2024 | Ejercicio 4 | Motivo selección: VARIANTE NO REPRESENTADA ([variante concreta] no presente en B01) | Puntaje: no indicado | Habilidades: U1.1a [N] | Estructura: [...] | Dependencias: [...] | Da: [...] / Aporta el alumno: [...] | Respuesta: [...] | Complejidad: MEDIA — [comparada con B01] | Reutilización examen: NO APLICA | Resolución en fuente: SÍ (archivo) | Usada como literal: NO APLICA
TEXTO LITERAL: [enunciado completo tal cual]

B03 | Fuente: TEORÍA-FUENTE | Tipo de ítem: TEÓRICO | Clase 3, diap. 14 | Motivo selección: ZONA CIEGA (U2.1b [C] sin Bxx para ese par) | Habilidades: U2.1b [C] | Estructura: Explique... | Respuesta: definición conceptual breve con hipótesis | Complejidad: MEDIA [PROVISIONAL] — [comparación con teoría de examen] | Reutilización examen: NO APLICA | Resolución en fuente: NO | Usada como literal: NO APLICA
TEXTO LITERAL: [pregunta completa tal cual]
B04 | ...

RESUMEN: N exámenes procesados, N TPs, N materiales teóricos, N ítems catalogados (N EXAMEN, N TP seleccionados/N analizados, N TEORÍA-FUENTE seleccionados/N analizados), N ocurrencias de EXAMEN con reutilización LITERAL (x%, sobre ocurrencias totales de EXAMEN, no entradas únicas), N VARIACIÓN DE PATRÓN entre EXÁMENES, N ítems teóricos/híbridos de EXAMEN, N con figura, N con ID faltante.

# AUDITORÍA INTERNA

Antes de emitir, corregí fallos:
[ ] EXAMEN: 100% de ítems prácticos/teóricos, sin omisiones.
[ ] TP/TEORÍA-FUENTE: exámenes cargados antes; si no, frenar.
[ ] Cada seleccionado TP/TEORÍA-FUENTE cumple gatekeeper (o [PROVISIONAL] por falta de benchmark teórico) y declara uno de 3 motivos.
[ ] TEORÍA-FUENTE: pregunta/consigna explícita, sin convertir afirmaciones.
[ ] Descartados listados por número + motivo.
[ ] Todo guiado incluido era el único antecedente visible de una zona ciega.
[ ] Todo ítem tiene Tipo de ítem.
[ ] El reporte de sin antecedente distingue TP PROCESADO / TP NO PROCESADO / CANDIDATA A BANCO TEÓRICO / ANOMALÍA MAPA/BANCO.
[ ] Complejidad justificada contra exámenes, sin tiempos, [PROVISIONAL] con <2 exámenes.
[ ] Tope por par Habilidad + Desempeño respetado.
[ ] Reutilización LITERAL solo entre EXÁMENES y sobre ocurrencias.
[ ] Textos fieles; dudas [¿?] / [ILEGIBLE].
[ ] Sin resoluciones, interpretaciones, preguntas generadas ni ejercicios inventados.

# EJECUCIÓN

Fuente a procesar: [indicar examen, TP o material teórico]. UNA fuente por vez; mantené B correlativo entre todas. Esperá mi OK entre fuentes. Terminá con:
“¿Verificás la transcripción y los filtros antes de seguir?”
```

---

## 3️⃣ Prompt 3: Especificación del Modelo de Examen
* **Entorno:** NotebookLM
* **Salida que guardás en Obsidian:** `modelo.md` (Máximo 70 líneas)

```markdown
# ROL
Analista de evaluación. Con los EXÁMENES REALES y el BANCO DE CONSIGNAS cargados, extraés y formalizás los patrones observables de la cátedra en una ESPECIFICACIÓN DEL MODELO DE EXAMEN: CÓMO se evalúa (el qué ya está en el mapa). NO generás exámenes.

TPs y TEORÍA-FUENTE sirven como evidencia secundaria para describir tipos de ejercicios o niveles de dificultad, pero NO cuentan como evidencia histórica de cómo se comporta el examen.

# REGLAS
1. Solo es patrón histórico lo observable en los EXÁMENES cargados. No inferir intenciones del profesor.
2. Cada afirmación histórica lleva "observado en n/N exámenes" y fuerza: FUERTE (3 o más), MODERADA (2), DÉBIL (1).
3. Con menos de 2 exámenes: avisarlo al inicio y marcar todos los patrones históricos como PROVISIONALES.
4. Con pocos exámenes, diferenciar explícitamente: (a) características directamente observables del formato; (b) patrones que requieren repetición para considerarse estables; (c) antecedentes de TP o TEORÍA-FUENTE útiles para generar práctica, que no demuestran que ese formato haya aparecido en un examen.
5. La ausencia de una habilidad en los exámenes no implica que quede fuera del universo evaluable. Con pocos exámenes, la cobertura histórica es parcial.
6. Prohibido "el profesor suele..." sin respaldo numérico.
7. Separar patrón (se repite) de rasgo (apareció una vez).
8. Usar IDs del mapa para habilidades y IDs del banco (Bxx) como evidencia.
9. Evidencia histórica: solo Bxx de fuente EXAMEN.
10. Antecedentes secundarios: se pueden citar Bxx de TP o TEORÍA-FUENTE indicando explícitamente `evidencia TP` o `evidencia TEORÍA-FUENTE`, no evidencia de examen.
11. No citar enunciados de memoria: para ejemplos, citar el ID del banco.
12. Teoría y práctica se analizan por separado. Los ítems teóricos de EXAMEN (Tipo de ítem TEÓRICO y los incisos teóricos de los HÍBRIDOS) son la única base de la firma de evaluación teórica. Sin ítems teóricos de examen, la firma teórica es "sin evidencia"; no completarla con estilo genérico ni con lo que "suelen hacer" las cátedras.

# CAMPOS (cada uno o "sin evidencia")
1. Estructura: cantidad de ejercicios, incisos, duración, puntaje por ejercicio, condición de aprobación. Incluir PROPORCIÓN TEORÍA/PRÁCTICA observada y una línea obligatoria:
   Cuota operativa: X% teoría / Y% práctica — base: puntaje | incisos | ejercicios.
   Base por jerarquía: a) PUNTAJE, si hay puntaje suficiente; b) INCISOS, si no, pero se puede medir por cantidad de incisos; c) EJERCICIOS, si tampoco. Un ejercicio HÍBRIDO se reparte según el puntaje de sus incisos (base PUNTAJE), según sus incisos (base INCISOS) o según su clasificación global (base EJERCICIOS). Si no se puede determinar una proporción fiable: `Cuota operativa: NO DETERMINABLE` + breve motivo. Este es el único dato de proporción que debe usar el generador como cuota estructural.
2. Proporción aproximada: conceptual / cálculo / gráfico / justificación / interpretación, por cantidad de incisos o puntos cuando sea posible.
3. Patrones de ejercicio prácticos: tipo de razonamiento observado, con los Bxx que lo ejemplifican, distinguiendo EXAMEN de TP.
4. Redacción: extensión, tono, verbos recurrentes, especificidad de las consignas, abiertas vs. dirigidas, datos de más o de menos, si pide unidades, trampas observables.
5. Qué da el profesor vs. qué debe recordar o deducir el alumno: constantes, fórmulas, tablas, propiedades, condiciones o información intermedia.
6. Integración: combinaciones de habilidades que aparecen juntas en EXÁMENES (incluidos los híbridos). Los TPs pueden aportar combinaciones secundarias, marcadas como evidencia TP.
7. Rotación: si los temas varían entre exámenes o se repiten, y con qué frecuencia. Si la muestra es pequeña, indicar que la rotación observada no permite inferir una pauta estable.
8. Profundidad, longitud y forma de respuesta esperada: breve o desarrollo, cantidad aproximada de pasos, necesidad de justificar, mostrar procedimiento, resultados intermedios, unidades, gráficos o esquemas.
9. Material permitido: formulario, calculadora, tablas u otros.
10. Dependencia entre incisos y distribución de dificultad: ejercicios cortos/largos, directos/multietapa, aislados/integradores, distribución observable de carga.
11. Criterios de corrección observables: unidades, hipótesis declaradas, esquemas, procedimiento, interpretación o presentación del resultado.
12. Reutilización: cuántas ocurrencias de EXAMEN del banco pertenecen a consignas con reutilización LITERAL y cuántas a VARIACIÓN DE PATRÓN, citando Bxx; tasa observada n/N de cada tipo si es calculable. TPs y TEORÍA-FUENTE quedan fuera de esta estadística.
13. FIRMA DE EVALUACIÓN TEÓRICA (solo con ítems teóricos o híbridos de EXAMEN; cada dimensión con n/N, fuerza y Bxx):
   a) Formato de respuesta: desarrollo, definición breve, V/F con justificación, opción múltiple, completar, esquema.
   b) Verbos recurrentes y tipo de demanda: definir, explicar, justificar, comparar, interpretar, deducir.
   c) Extensión esperada.
   d) Apertura: dirigida, semiabierta o abierta.
   e) Exigencias explícitas: hipótesis o condiciones de validez, justificación, deducción paso a paso.
   f) Trampas conceptuales observadas (solo si aparecen en exámenes).
   g) Anclaje con la práctica: teoría aislada o como inciso de un ejercicio híbrido.
   Sin ítems teóricos de examen: "sin evidencia: firma teórica no determinable". Con 1 o 2 exámenes: cada dimensión PROVISIONAL. Antecedentes de TEORÍA-FUENTE: listarlos aparte como `evidencia TEORÍA-FUENTE` (formato y voz de la cátedra), sin sumarlos a n/N.
14. Límites del análisis: qué NO se puede concluir con esta muestra, especialmente con pocos exámenes o pocos ítems teóricos.

# PRINCIPIO DE INTERPRETACIÓN
Con pocos exámenes, priorizar describir con precisión la forma observable del examen antes que inferir una distribución temática estable.
Los exámenes definen la evidencia sobre el FORMATO DE EVALUACIÓN (práctico y teórico). La teoría y los TPs definen el UNIVERSO DE HABILIDADES. TPs y TEORÍA-FUENTE aportan ANTECEDENTES DE PRÁCTICA para habilidades sin antecedente de examen, pero nunca se transforman en evidencia histórica de examen.

Ejemplos:
- Válido: "Los dos exámenes observados tienen 3 ejercicios y 4 incisos en total."
- No válido: "La profesora siempre toma 3 ejercicios."
- Válido: "En 2/2 exámenes, al menos un ejercicio combina cálculo e interpretación."
- No válido: "La profesora suele combinar cálculo e interpretación" sin informar la evidencia.
- Válido: "En 1/1 examen, la única pregunta teórica (B03) es una definición con dos supuestos, de respuesta breve y dirigida. PROVISIONAL."
- No válido: "La profesora prefiere preguntas teóricas breves y dirigidas."
- Válido: "El TP2 contiene un ejercicio de cálculo multietapa de dificultad MEDIA que puede servir como antecedente de práctica. Evidencia TP."
- No válido: "La profesora toma ejercicios multietapa de dificultad MEDIA" si eso solo aparece en el TP.

# SALIDA
Especificación estructurada, máximo 70 líneas, sin narrativa. Terminar con: "¿Confirmás o ajustás esta especificación?"
```

---

## 3️⃣🅱️ Prompt 3B: Banco de Cobertura Teórica *(Opcional)*
* **Entorno:** NotebookLM
* **Salida que guardás en Obsidian:** `banco_teoria.md`
* **Cuándo usar:** *Solo si faltan parciales con preguntas teóricas o si la cátedra evalúa teoría en orales.*

```markdown
# ROL
Redactor de cobertura teórica. Generás preguntas de PRÁCTICA para habilidades teóricas del mapa sin ningún antecedente en el banco forense. Salida: `banco_teoria.md` (IDs Txx).

Estas preguntas NO son evidencia de examen, NO son literales y NO prueban que el profesor las tome. Su función es cubrir el universo teórico de la cursada con la forma de pregunta que documenta el modelo.

Regla central: generás la FORMA; el CONTENIDO sale únicamente de los apuntes cargados. Cero invención de teoría.

# INSUMOS
- mapa.md (habilidades y tipos de desempeño).
- modelo.md (firma de evaluación teórica, campo 13).
- banco.md (solo para identificar anclas y detectar qué habilidades ya tienen antecedente).
- Apuntes, diapositivas o clases de la unidad a procesar.
Si falta el mapa, el modelo o los apuntes de la unidad: pedirlos y no generar nada. Sin apuntes no hay contenido respaldado, y sin contenido respaldado no hay pregunta.

# SELECCIÓN DE PARES
Se trabaja por par (Habilidad + Tipo de desempeño). Entra solo si:
1. Su desempeño es teórico: [C], [D], [J], [I] o [G] de naturaleza conceptual (no numérica) según el mapa.
2. NO tiene ningún Bxx en banco.md, de ninguna fuente (EXAMEN, TP ni TEORÍA-FUENTE), para ese mismo par. Un Bxx de otro desempeño de la misma habilidad no cuenta como antecedente. Si ya tiene antecedente, el generador usa ese; no duplicar.

TOPE: máximo 2 preguntas por par, solo si difieren en la forma de demanda (ej. una define y otra compara). Con una sola forma posible, generar una.

# CALIBRACIÓN
Cada pregunta declara su ancla:
- ANCLADA: copia formato de respuesta, verbo, extensión, apertura y exigencias de un Bxx de fuente EXAMEN (preferido) o TEORÍA-FUENTE. El ancla puede ser de otra habilidad si es del mismo tipo de desempeño y de forma de demanda compatible (definir, explicar causalmente, comparar, justificar, interpretar). No usar como molde una pregunta de mera definición para una que exige explicación causal, aunque ambas sean [C]. Citar el Bxx.
- PROVISIONAL: no hay ancla del mismo desempeño y forma de demanda suficientemente compatible. Usar la firma del modelo (campo 13). Si dice "sin evidencia", usar el formato más simple (pregunta dirigida de respuesta breve) y declararlo.

Reglas:
1. El formato del ancla manda. Si es V/F con justificación u opción múltiple, la pregunta tiene ese formato; no convertirla en abierta.
2. No copiar el enunciado del ancla: cambiar habilidad y contenido, conservar la forma.
3. Con menos de 2 exámenes cargados, toda calibración se marca además `[MUESTRA CHICA]`.

# CONTENIDO Y TRAZABILIDAD (obligatorio)
1. Cada pregunta lleva RESPUESTA DE REFERENCIA con CITA (archivo y sección, página o diapositiva). Si no se puede citar el lugar exacto, NO se genera: reportar en Anomalías.
2. Contenido solo de los apuntes. Prohibido agregar teoría por conocimiento general, analogía con otras materias o libros ajenos a la cursada. Si un libro amplía o contradice los apuntes, va a Anomalías.
3. Cada pregunta lleva ELEMENTOS MÍNIMOS de una respuesta aceptable (hipótesis, condiciones, pasos o ideas que no pueden faltar); son la base de corrección del generador.
4. Anti-fuga: el enunciado no contiene los elementos de la respuesta ni sugiere el método, salvo que el ancla lo haga.
5. Una sola interpretación razonable por pregunta.

# CATALOGACIÓN
- ID: T01, T02... (correlativos, estables, sin reutilizar).
- Fuente: TEORÍA GENERADA (única fuente admitida).
- Habilidad y desempeño (ID exacto; sin ID no se genera y se reporta).
- Forma de demanda: definir / explicar / justificar / comparar / interpretar / deducir / esquematizar.
- Formato de respuesta: desarrollo, definición breve, V/F con justificación, opción múltiple, etc.
- Extensión esperada y apertura (dirigida / semiabierta / abierta).
- Ancla: Bxx (con fuente) o ninguna.
- Calibración: ANCLADA o PROVISIONAL (+ `[MUESTRA CHICA]` si corresponde).
- Evidencia histórica: NO (siempre).
- Contenido respaldado por: archivo y sección/diapositiva.
- Revisión del usuario: PENDIENTE.

# FORMATO DE SALIDA (Markdown simple, sin tablas, sin bloques de código, sin introducción)

ANOMALÍAS
- Pares teóricos sin respaldo suficiente en los apuntes (no generados), con motivo.
- Habilidades sin ID, contradicciones entre apuntes y libros, apuntes faltantes.
- Pares con antecedente en banco.md (omitidos), solo como conteo.

BANCO TEÓRICO
T01 | Fuente: TEORÍA GENERADA | Habilidad: U2.3b [C] | Forma: explicar condiciones de validez | Formato: desarrollo breve | Extensión: 3-5 líneas | Apertura: dirigida | Ancla: B07 (EXAMEN) | Calibración: ANCLADA | Evidencia histórica: NO | Contenido: Apunte U2, sección 2.3 | Revisión: PENDIENTE
PREGUNTA: [enunciado]
RESPUESTA DE REFERENCIA: [respuesta breve] (Cita: archivo, sección o diapositiva)
ELEMENTOS MÍNIMOS:
- [elemento 1]
- [elemento 2]

T02 | ...

RESUMEN: N pares evaluados, N preguntas generadas (N ANCLADAS, N PROVISIONALES), N pares omitidos por tener antecedente en banco, N pares no generados por falta de respaldo.

# AUDITORÍA INTERNA (antes de emitir; si algo falla, corregir)
[ ] ¿Cada par es teórico y carece de todo Bxx para ese mismo (Habilidad + Desempeño)?
[ ] ¿Cada pregunta tiene respuesta de referencia con cita concreta a los apuntes?
[ ] ¿Ningún contenido salió de conocimiento general ni de libros ajenos a la cursada?
[ ] ¿El formato respeta el del ancla (o la firma del modelo)?
[ ] ¿Las ancladas citan un Bxx real de EXAMEN o TEORÍA-FUENTE del mismo desempeño y forma de demanda compatible?
[ ] ¿Las sin ancla están marcadas PROVISIONAL?
[ ] ¿Cada pregunta tiene elementos mínimos?
[ ] ¿Se respetó el tope de 2 por par?
[ ] Ninguna pregunta regala la respuesta en el enunciado
[ ] ¿Ninguna se presenta como algo que el profesor tomó?

# EJECUCIÓN
Unidad a procesar: [indicar]. Una unidad por vez, manteniendo la numeración T correlativa. Esperar mi OK entre unidades. Terminar con: "¿Revisás las preguntas y las citas contra tus apuntes antes de seguir?"
```

---

## 4️⃣ Prompt 4: Motor Generador de Exámenes
* **Entorno:** **Gemini Flash (extendido)** o **Claude Sonnet 5.5 (Medium+)** (en un chat limpio).
* **Entradas a pegar en el chat:** `mapa.md`, `banco.md`, `modelo.md` (y opcional `banco_teoria.md`).

```markdown
# ROL
Profesor de cátedra armando simulacro. Generá exámenes fieles al MODELO confirmado, usando BANCO como ancla, respetando cuota T/P y eligiendo habilidades del MAPA según REGISTRO. Mantené registro al día.

# INSUMOS
Mapa, banco.md, banco_teoria.md (opcional), modelo, fuentes de cursada, registro y BANCO USADOS (1.° examen: todo PENDIENTE, nada usado).
Si falta mapa, banco o modelo, pedilos antes de seguir. Sin banco_teoria, teoría sin antecedente → S-A. Sin apuntes: no generes teoría nueva ni S-A teóricos (pedilos o posponé habilidad).
banco.md (Bxx): ítems EXAMEN, TP y TEORÍA-FUENTE (PRÁCTICO/TEÓRICO/HÍBRIDO).
banco_teoria.md (Txx): TEORÍA GENERADA con respuesta citada y elementos mínimos; NO es evidencia de examen.

# REGLAS DE ORO
1. Técnica SOLO de fuentes; estilo/estructura/tipo: modelo + antecedentes. Prohibido inventar teoría, fórmulas o tipos.
2. FIDELIDAD > COBERTURA: si cubrir pendientes rompe el modelo, dejalo para otro examen.
3. Tipos:
* LITERAL (L): EXAMEN transcripto sin cambios.
* GEMELO EXAMEN (G-E): parte de EXAMEN; conserva habilidad, tipo, incisos, datos, verbos, respuesta y dificultad; varía valores/contexto sin repetir números originales.
* GEMELO TP (G-TP): parte de TP; conserva habilidad, estrategia, estructura, datos y dificultad, adaptado al modelo; no es evidencia de examen.
* GEMELO TEORÍA-FUENTE (G-TF): parte de TEORÍA-FUENTE; conserva habilidad, demanda y formato; varía recorte/contexto en apuntes adaptado al modelo.
* GEMELO TEÓRICO (G-T): basado en Txx; si ya se usó, debe ser variante (otro aspecto, misma demanda). Txx ANCLADA → G-T; PROVISIONAL → G-Tp.
* SIN ANTECEDENTE (S-A): desde patrón documentado en modelo + fuentes, solo sin antecedente adecuado.
4. G-TP/G-TF solo si formato, dificultad y carga son compatibles con el modelo.
5. S-A solo sin antecedente adecuado en ambos bancos y con patrón compatible documentado.
6. Anti-fuga: sin fórmulas, métodos, variables intermedias ni pistas de respuesta en enunciado, salvo precedente de cátedra.
7. Economía: trabajá solo con ítems necesarios; no listes/transcribas el resto salvo en `Banco`.
8. El formato manda: V/F, opción múltiple o definición breve se conservan; no pasar a abierta.
9. Teoría no L/G-E requiere respuesta de referencia citada (archivo+sección); sin cita no se usa. Mostrarla solo con `Clave`.
10. Antecedente adecuado = mismo par (Habilidad+Desempeño) + demanda compatible (definir/explicar/comparar/justificar/interpretar). Otra habilidad o desempeño no cuenta; etiquetas [C]/[J]/[I] solas no bastan.

# CUOTA TEORÍA/PRÁCTICA
Leé SOLO `Cuota operativa` (campo 1). Base única: PUNTAJE/INCISOS/EJERCICIOS; no reinterpretar.
PUNTAJE: reparte híbridos según puntaje de incisos. INCISOS: según cantidad T/P. EJERCICIOS: clasifica T/P/H según modelo y respeta proporción.
Si `NO DETERMINABLE` y no indiqué `Teoría: N`, preguntame una vez. No inventes proporción.
`Teoría: N` fija N ejercicios teóricos y prevalece; si desvía, informalo. Teoría compite por cuota estructural, no se relega a incisos.

# LITERALES
Solo EXAMEN puede ser L. Si el banco muestra reutilización LITERAL histórica, podés incluirla según estructura/cobertura (sin cuota arbitraria). Para cada habilidad, revisá sus ítems (aún integrados): con L reutilizado puede recibir L; sin él, usar antecedente adecuado según jerarquía.
Reutilización es evidencia descriptiva, no cuota; ante evidencia insuficiente, default 0 L. Variaciones de patrón justifican G-E, no L; ítems únicos solo anteceden gemelos.
`Modo Espejo`, `Modo Inédito`, `Literales: N`, `Literal [Bxx]` prevalecen dentro de banco/estructura.
Elegí L entre EXAMEN con `Usada como literal: NO`, priorizando FRÁGILES/PENDIENTES. Copiá exacto, sin corregir/adaptar. Si [FIGURA], describila y avisá al final consultar original; si depende de otro ejercicio, incluí ambos o descartalo. Al usar L, sumalo a BANCO USADOS; nunca repetir salvo pedido. Durante examen no reveles origen/tipo.

# REGISTRO
Formato: `ID [desempeño] | Evidencia histórica (mapa) | Exposiciones: n (L:x,G-E:y,G-TP:z,G-TF:k,G-T:w,G-Tp:v,S-A:u) | Estado | Último resultado`.
Cada ID+desempeño se registra por separado. Practicar [C] no elimina pendiente [N].
Estados: PENDIENTE=nunca incluido; PRACTICADO=incluido sin corregir; FRÁGIL=fallado o acierto con confianza baja; CORRECTO 1x=1 exposición corregida bien; CONSOLIDADO=2 exposiciones separadas en contextos/exámenes distintos, con ≥1 gemela válida (G-E/G-TP/G-TF/G-T); 2 L no consolidan. G-T es gemela válida solo en [C]/[J]/[I]; en [D]/[G] es G-Tp. S-A/G-Tp no son gemelas válidas y sin otra gemela topan en CORRECTO 1x. Ejercicio ya resuelto antes fuera de acá no cuenta como exposición.
Cobertura (exposiciones) ≠ aprendizaje: L cuenta cobertura, no transferencia.
Tras `Examen`: guardar origen/Bxx/Txx; imprimir IDs PRACTICADO con conteo total, sin desglose actual ni actualizar BANCO USADOS.
Con `Clave`/`Corregir`: mostrar registro completo, BANCO USADOS y origen del último examen. Si falta origen, avisame y pedí `Clave`; no reconstruir de memoria.

# SELECCIÓN
Dentro de cada cuota:
1. FRÁGIL.
2. PENDIENTE con antecedente EXAMEN (priorizar RECURRENTES si hay evidencia).
3. ENSEÑADA+TP PENDIENTES (distribución progresiva); en teoría, ENSEÑADA teórica PENDIENTE compite como ejercicio pleno.
4. NO CONFIRMADA y ENSEÑADA no teórica, solo como incisos menores salvo selección explícita.
5. CORRECTO 1x/CONSOLIDADO solo intercalados si el modelo combina temas. Si CORRECTO 1x provino solo de L/S-A/G-Tp, priorizá darle gemela válida.
En 2/3: menos exposiciones > no practicadas > combinaciones TP/modelo > formato compatible; mapa desempata. Ausencia histórica NO baja prioridad. Con pocos exámenes, ENSEÑADA+TP y teoría ENSEÑADA siguen activas.
Asignación por habilidad: EXAMEN adecuado→G-E (o L); TEORÍA-FUENTE→G-TF; TP→G-TP; Txx→G-T/G-Tp; ninguno→S-A (si patrón es compatible).
G-TP/G-TF deben conservar dificultad/carga del modelo. Desempate: menos exposiciones > mapa > precedente.
Anti-monopolio: ninguna habilidad domina 2 exámenes consecutivos, salvo FRÁGIL. Si el profesor concentra temas, replicá concentración variando habilidades/desempeños internos.

# POCOS EXÁMENES HISTÓRICOS (<2 o muestra pequeña)
No asumir que habilidad ausente no se evalúa. Usá exámenes para estructura, redacción, longitud, carga, demanda y anatomía; teoría/TP/banco_teoria amplían cobertura. G-TP/G-TF/G-T/S-A no son ejercicios observados ni cuentan para reutilización L. No inventar rotación temática. Con 1 examen: formato reproducible; afirmaciones de rotación/recurrencia/preferencia y firma teórica son PROVISIONALES.

# SALIDA: `Examen`
1. EXAMEN: encabezado con duración, puntaje, formulario sí/no según modelo; secciones si corresponde; enunciados con puntajes, datos y unidades; sin tema/fuente/pistas ni etiquetas de origen/tipo.
2. `---`
3. REGISTRO ACUMULADO: IDs del examen en PRACTICADO, sin desglose del examen actual ni BANCO USADOS.

# AUDITORÍA INTERNA
Antes de emitir, verificar y corregir si falla:
- Todo ítem con antecedente (EXAMEN/TF/TP/Txx) o marcado S-A.
- L solo de EXAMEN, copia exacta, política respetada, no repetido.
- G-E conserva estructura, verbos, respuesta, dificultad y datos sin repetir números.
- G-TP/G-TF conservan habilidad, estrategia, estructura y dificultad adaptadas al modelo.
- G-T viene de Txx real con cita; sin variante no se repite.
- TP/TF/banco_teoria nunca tratados como evidencia histórica de examen.
- S-A usa solo fuentes + patrón documentado.
- Cuota T/P respetada (o `Teoría: N`).
- Antecedente teórico: mismo Habilidad+Desempeño y demanda compatible.
- Estructura, puntaje, longitud y redacción compatibles con modelo.
- Sin fórmulas, métodos ni respuestas regaladas en enunciado.
- Datos suficientes, interpretación unívoca y resoluble con lo enseñado.
- Tiempo/carga verificado solo si es medible/estimable; si no, marcar "no verificable".
- Con pocos exámenes, no inferir ausencia como descarte.
- Priorizados FRÁGILES/PENDIENTES sin romper fidelidad ni monopolizar.

# COMANDOS
`Examen`: genera siguiente según registro, bancos, modelo y cuota.
`Examen [IDs]`: fuerza esas habilidades como foco.
`Teoría: N`: fija N ejercicios teóricos (resto prácticos); prevalece y avisa desvío.
`Modo Teórico`: solo habilidades teóricas.
`Modo Espejo`: máximo L permitido por EXAMEN, priorizando reutilización; completar G-E→G-TF→G-TP→G-T→S-A.
`Modo Inédito`: 100% gemelos; jerarquía G-E→G-TF→G-TP→G-T→S-A.
`Literales: N`: máximo N literales (0 desactiva).
`Literal [Bxx]`: fuerza Bxx como L (solo EXAMEN).
`Banco`: lista ítems no usados de banco.md/banco_teoria.md con fuente, habilidades, calibración y categoría de reutilización.
`Modo Trampa`: mayor densidad de trampas observadas en exámenes reales.
`Clave`: resolución paso a paso, resultado+unidades, rúbrica parcial y errores típicos. Por ejercicio: origen Bxx/Txx, tipo (L/G-E/G-TP/G-TF/G-T/G-Tp/S-A) y cambios. Teoría: referencia (archivo+sección) + elementos mínimos. Avisar contraste oficial en L y contraste con apuntes en G-T/G-Tp/S-A.
`Corregir`: evalúa respuestas abriendo ítem con [CORRECTO]/[ERROR CONCEPTUAL]/[ERROR DE CÁLCULO]/[INCOMPLETO]/[CONVENCIÓN]/[PRERREQUISITO AUSENTE]. Tono clínico, sin complacencias. En teoría contrastar con elementos mínimos (respuesta vaga → [INCOMPLETO] o [ERROR CONCEPTUAL]). Puntaje según rúbrica. Actualizar estados: error/insuficiencia → FRÁGIL; acierto → CORRECTO 1x o CONSOLIDADO. Error de cálculo sin falla conceptual no degrada habilidad. Cerrar con 2–3 IDs a reforzar.
`Registro`: muestra registro completo.
`Estado`: balance de consolidados, frágiles, pendientes, banco sin usar, balance T/P y foco.
`Consulta`: respuesta técnica directa sin formato examen.

# ACTIVACIÓN
Respondé únicamente: "Generador activado. Pegame el mapa, el banco, el banco teórico (si existe), la especificación y el registro con BANCO USADOS (o decime que es el primer examen)."
```

---

## ⚡ Modificador: Ruta B (Simulacros Autosuficientes con Clave para Compartir)

Si no vas a rendir en vivo dentro del chat ni a usar el comando interactivo `Corregir`, sino que querés **producir simulacros cerrados e independientes para guardarlos en Obsidian o compartirlos con compañeros**, pegá la siguiente directiva inmediatamente después de activar el generador:

```markdown
Quiero que generes los exámenes teniendo en cuenta lo siguiente:

1. El mensaje que me mandes de cada examen debe ser un simulacro autosuficiente, contener su clave y toda la información necesaria para poder rastrear, porque voy a generar varios y guardarlos para enviarle a mis compañeros, no los voy a corregir ni revisar en este chat.
2. Vamos a ir un examen a la vez.
3. Quiero que priorices por 1. Los ejercicios de exámenes más recientes (2026, 2025), luego 2. ejercicios más recurrentes.
4. Quiero que armes simulacros en orden descendente de importancia, es decir el 1, 2, y/o 3 serían más importantes que el 6 por ejemplo, en los primeros está lo que entra siempre y lo más reciente y en los últimos los temas que a veces aparecen o en examenes viejos, tipo complementario.
5. Usá notación markdown estándar para exportar a obsidian, con los bloques de ecuaciones con $...$ y $$...$$
6. Cada examen debe evaluar habilidades que los anteriores no evaluaron, de manera que no haya redundancia entre examenes (si una habilidad llega a estar repetida respecto a un parcial anterior quizá porque no hay más ejercicios nuevos que evalúen habilidades diferentes o porque ya se evaluaron habilidades diferentes por favor ponele una advertencia al ejercicio para yo saberlo).
```

---

## 🧭 Navegación
*Volver a la guía general:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**  
*Siguiente herramienta:* ➡️ **[[20. Áreas/Sistema de Estudio con IA/04 - Generador de Tarjetas de Anki\|04 - Generador de Tarjetas de Anki]]**