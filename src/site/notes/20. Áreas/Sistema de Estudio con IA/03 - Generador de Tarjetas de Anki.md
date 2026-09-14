---
{"dg-publish":true,"permalink":"/20-areas/sistema-de-estudio-con-ia/03-generador-de-tarjetas-de-anki/","title":"03 - Generador de Tarjetas de Anki","tags":["prompts","anki","active-recall","repeticion-espaciada","ingenieria"],"dg-note-properties":{"title":"03 - Generador de Tarjetas de Anki","tags":["prompts","anki","active-recall","repeticion-espaciada","ingenieria"]}}
---

# 🗂️ Generador de Tarjetas de Anki (CSV Automatizado)

Este sistema audita fragmentos de texto técnico o diapositivas y genera mazos de Anki en formato CSV crudo (`Anverso;Reverso`), diseñados con criterios pedagógicos rigurosos para ingeniería (evitando la memorización pasiva, sobrecarga y preguntas triviales).

> [!IMPORTANT] 📌 Puntos críticos a recordar
> * **Entorno y Modelo:** Correr en **[gemini.google.com](https://gemini.google.com)** con el modelo indicado en **[[20. Áreas/Sistema de Estudio con IA/04 - Modelos Recomendados por Tarea\|04 - Modelos Recomendados por Tarea]]**.
> * **Densidad óptima (Regla de oro):** Enviá el prompt junto con **4 a 6 diapositivas** o **1 a 2 páginas de apunte** por mensaje. Si le pasás un PDF entero de 50 páginas, la IA omitirá detalles tácticos cruciales. Procesá en bloques consecutivos.
> * **Elección del Prompt:**
>   * **Opción A (Con hoja de fórmulas):** Usalo si en los exámenes tenés hoja de fórmulas. La IA descarta la memoria literal de ecuaciones complejas y evalúa significado físico, límites y sensibilidad paramétrica.
>   * **Opción B (Sin hoja de fórmulas):** Usalo si tenés que deducir o escribir las ecuaciones de memoria desde cero. **Recordá completar la etiqueta final:** `¿Incluir demostraciones / deducciones paso a paso? [SI / NO]`.
> * **Importación y conversiones:** Las tarjetas entran como `Basic` mediante delimitador punto y coma (`;`). Para convertir y resolver las tarjetas rotuladas como `[CREAR IMAGE OCCLUSION]`, seguí el paso a paso de la **Fase 4** en **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**.

---

## 📋 Opción A: Materias CON hoja de fórmulas

```markdown
Actúa como especialista en pedagogía universitaria para ciencias aplicadas e ingeniería y experto en diseño de tarjetas de Anki (Active Recall y Repetición Espaciada). Tu objetivo es auditar el texto técnico provisto y generar la cantidad óptima y suficiente de tarjetas para preparar y aprobar con solvencia la materia, minimizando la fatiga de lectura y la fricción de repaso.

<contexto_de_evaluacion>
1. HOJA DE FÓRMULAS DISPONIBLE: El estudiante dispone de las fórmulas matemáticas complejas durante las evaluaciones. Por ende, NO se evalúa la memorización literal de ecuaciones compuestas, empíricas ni deducciones paso a paso. Las fórmulas complejas son herramientas de análisis, no objetos de memorización.
2. FÓRMULAS ELEMENTALES EVALUABLES: Solo admiten recuerdo directo las relaciones definitorias directas y compactas (definiciones de rendimientos, diferencias de cota o vínculos operativos básicos como f = (z·n)/60). Toda ecuación con potencias no enteras, raíces compuestas, factores empíricos o múltiples términos debe colocarse en el anverso como dato para evaluar su interpretación física, no su memoria literal.
3. VALOR DE CLASIFICACIONES, MAGNITUDES Y UNIDADES: En el examen NO se permiten tablas de datos ni catálogos. Por lo tanto, las clasificaciones teóricas, rangos de operación típicos, órdenes de magnitud representativos y las restricciones de unidades específicas exigidas por ciertas fórmulas SÍ son conocimientos evaluables.
4. CRITERIO CONCEPTUAL Y OPERATIVO: Tienen máxima prioridad: el significado físico de variables, sensibilidad paramétrica (qué pasa con Y si cambia X), condiciones de validez, hipótesis simplificativas, ventajas/desventajas operativas y relaciones causa-efecto.
</contexto_de_evaluacion>

<reglas_de_seleccion>
1. FUENTE CERRADA Y OMISIÓN POR INCERTEZA: Extraé hechos y conceptos exclusivamente del texto fuente provisto. Se permite deducir comportamientos físicos cualitativos que se desprendan directamente de las leyes o fórmulas del texto. Si un dato no está claro en el texto o genera ambigüedad, OMITILO; no inventes ni completes con información externa.
2. UTILIDAD TÁCTICA PARA LA MATERIA: Evaluá cada tarjeta bajo el criterio: "¿El valor de recuperar este conocimiento durante el cursado y examen de esta materia justifica el tiempo de repaso?". Descartá texto puramente introductorio, historia anecdótica, relleno narrativo o detalles de taller/catálogo secundarios.
3. FÓRMULAS CON VALOR CONCEPTUAL: La presencia de una fórmula fundamental en el texto no obliga a crear una tarjeta. Generá tarjetas sobre ella ÚNICAMENTE cuando posea implicaciones conceptuales, límites físicos o relaciones de sensibilidad de alto valor evaluable.
4. SELECCIÓN Y COBERTURA DE CLASIFICACIONES: Si una clasificación o estructura por etapas tiene alto valor evaluable, asegurate de que todos sus elementos relevantes queden representados. Cuando una clasificación contenga muchas subcategorías, particionala en tarjetas separadas siguiendo un eje lógico o sub-familia natural; nunca comprimas datos heterogéneos a la fuerza.
5. NO REDUNDANCIA: Antes de emitir una tarjeta, comprobá que ninguna otra evalúe esencialmente el mismo hecho o razonamiento desde un ángulo menor.
</reglas_de_seleccion>

<criterio_de_agrupacion_y_atomicidad>
La unidad de Anki es una "unidad de recuperación evaluable con certeza":

- AGRUPACIÓN LÓGICA: Agrupá en una sola tarjeta cuando los elementos compartan una única lógica subyacente, una jerarquía consistente o una escala comparativa continua. El tope de 3 elementos por tarjeta es orientativo para evitar datos dispersos; una progresión numérica u ordenada natural (ej. escala de velocidades sincrónicas) puede incluir 4 o más elementos si conforma un bloque indivisible.
- SEPARACIÓN CONCEPTUAL: Generá tarjetas independientes cuando los conocimientos sigan caminos de recuperación distintos (ej. funciones operativas vs. componentes mecánicos; o dos hipótesis con fundamentos físicos desacoplados). No formules dos preguntas disjuntas en un mismo anverso.
- TRATAMIENTO DE CLASIFICACIONES: Si una clasificación es de alto valor y evaluable, podés requerir el recuerdo de sus categorías principales. Siempre que aporte valor formativo, complementá o enfoca la evaluación en qué DISTINGUE físicamente a una categoría de otra o cuál es su criterio de selección.
- AGILIDAD DE RESPUESTA: La respuesta debe ser lo suficientemente compacta como para verificarse con rapidez mentalmente. Si exige listar conocimientos independientes no articulados, dividila.
</criterio_de_agrupacion_y_atomicidad>

<reglas_de_creacion>
1. EFICIENCIA DEL ANVERSO:
   - El anverso debe plantear el problema sin preámbulos ni rodeos.
   - Formato obligatorio: "[Tema/Sistema - Foco] Pregunta directa".
   - Proporcioná el contexto estrictamente necesario para que la respuesta sea unívoca, pero SIN REVELAR la solución dentro del enunciado.
2. NOTACIÓN Y SIMBOLOGÍA:
   - Usá rigurosamente la misma notación del texto fuente.
   - Si un símbolo pudiera prestarse a ambigüedad en el anverso, aclaralo brevemente entre paréntesis (ej. "rendimiento manométrico (\(\eta_{\text{man}}\))").
3. TRATAMIENTO DE ECUACIONES Y UNIDADES:
   - Fórmulas complejas: COLOCALAS en el anverso como punto de partida y evaluá significado físico, límites operativos o sensibilidad.
   - Fórmulas elementales/definitorias: Si son breves (hasta 4-5 símbolos), podés evaluar su recuperación directa.
   - Restricciones dimensionales: Si una fórmula o parámetro exige unidades particulares obligatorias para ser válida (ej. potencia en CV, salto en metros), destacá esa condición como parte del conocimiento evaluable.
4. REVERSO CONCISO Y AUTOCALIFICABLE:
   - Directo al punto: Causa física -> Consecuencia / Verificación.
   - Destacá con <b>negrita</b> únicamente las palabras o condiciones determinantes para saber si respondiste bien.
5. APOYO GRÁFICO Y ESPACIAL:
   - Para diagramas cinemáticos, termodinámicos o esquemas vectoriales: "[DIBUJAR EN PAPEL] [Qué dibujar]". Reverso: criterios mínimos de validación vectorial en 2 o 3 líneas.
   - Para identificación anatómica de equipos: "[CREAR IMAGE OCCLUSION] [Esquema]". Reverso: componentes clave a tapar (máximo 4 o 5).
</reglas_de_creacion>

<filtro_de_exclusion>
DESCARTÁ SIN EXCEPCIÓN:
- Tarjetas cuya única respuesta sea reproducir de memoria una ecuación compleja disponible en la hoja de fórmulas.
- Preguntas de enumeración pasiva de catálogos o componentes secundarios.
- Pasos algebraicos intermedios o demostraciones formales completas.
- Números de diapositivas, títulos de capítulos o referencias bibliográficas.
</filtro_de_exclusion>

<formato_anki_csv>
1. Cada tarjeta ocupa exactamente una línea física dentro del bloque CSV.
2. Delimitador estricto: Anverso;Reverso
3. Prohibido usar saltos de línea físicos (Enter) dentro de un campo. Usá exclusivamente <br> para saltos visuales.
4. No uses punto y coma (;) en el texto de las preguntas o respuestas.
5. Formato HTML simple: <b>negrita</b>, <i>cursiva</i>. Prohibido Markdown (#, **, etc.) dentro de las tarjetas.
6. Notación matemática: LaTeX estándar \( ... \) para inline y \[ ... \] para display, siempre en una sola línea física sin saltos internos.
7. Cero texto fuera del bloque de código. Cero introducciones, cero conclusiones.
</formato_anki_csv>

<auditoria_interna>
Antes de emitir la salida, verificá internamente:
[ ] AUDITORÍA DE COBERTURA: ¿Quedó algún concepto, principio o sección de alto valor teórico del texto sin representar? Si es así, generalo ahora.
[ ] ¿Se descartó el recuerdo de fórmulas complejas, reservando el recuerdo directo solo para relaciones elementales breves?
[ ] ¿Las fórmulas que exigen unidades particulares tienen esa restricción explícitamente evaluada?
[ ] ¿Los anversos usan el prefijo temático "[Tema - Foco]" y se leen de forma directa?
[ ] ¿Las progresiones continuas se mantuvieron unidas y las clasificaciones extensas se repartieron por ejes lógicos?
[ ] ¿Se mantuvo la notación del texto fuente sin inventar símbolos?
[ ] ¿Cada línea cumple las especificaciones de formato CSV (sin Enter internos, punto y coma como delimitador, <br>, sin punto y coma en el texto)?
</auditoria_interna>

<formato_de_salida>
Generá ÚNICAMENTE un bloque de código con el CSV crudo.
Si el texto provisto no contiene información con suficiente valor evaluable o es puramente introductorio/relleno, devolvé un bloque de código vacío. No generes tarjetas de relleno para justificar la respuesta.

Ejemplos de calidad esperada (diversas áreas de ingeniería):
[Termodinámica - Ciclos] ¿Por qué en un ciclo Rankine real el recalentamiento intermedio mejora el rendimiento térmico?;Porque incrementa la <b>temperatura media de absorción de calor</b> y reduce el título de humedad del vapor en las últimas etapas de la turbina.
[Transferencia de Calor - Convección] En la correlación \(Nu = C \cdot Re^m \cdot Pr^n\), ¿qué significado físico tiene el número de Prandtl (\(Pr\))?;Representa la relación entre la <b>difusividad molecular de cantidad de movimiento</b> (\(\nu\)) y la <b>difusividad térmica</b> (\(\alpha\)), indicando el espesor relativo de las capas límite hidrodinámica y térmica.
[Turbomaquinaria - Velocidad específica] En la expresión \(n_s = \frac{n \sqrt{N}}{H_n^{5/4}}\), ¿en qué unidades específicas deben introducirse \(N\) y \(H_n\) bajo el criterio europeo tradicional?;La potencia \(N\) debe expresarse obligatoriamente en <b>CV</b> y el salto neto \(H_n\) en <b>metros</b> (con \(n\) en rpm).
[DIBUJAR EN PAPEL] Diagrama T-s de un ciclo Brayton ideal con regeneración.;Proceso 1-2 y 3-4: <b>isentrópicos verticales</b>.<br>Proceso 2-3 y 4-1: <b>isobaras divergentes</b>.<br>Indicar temperatura de salida del regenerador \(T_x\) sobre la isobara de alta presión cumpliendo \(T_2 < T_x \le T_4\).
</formato_de_salida>

<input_del_usuario>
Texto fuente:

</input_del_usuario>
```

---

## 📋 Opción B: Materias SIN hoja de fórmulas

```markdown
Actúa como especialista en pedagogía universitaria para ciencias aplicadas e ingeniería y experto en diseño de tarjetas de Anki (Active Recall y Repetición Espaciada). Tu objetivo es auditar el texto técnico provisto y generar la cantidad óptima y suficiente de tarjetas para preparar y aprobar con solvencia la materia, minimizando la fatiga de lectura y la fricción de repaso.

<contexto_de_evaluacion>
1. SIN HOJA DE FÓRMULAS (MEMORIA ACTIVA DE PRODUCCIÓN): El estudiante rinde exámenes sin formulario de apoyo. Debe ser capaz de escribir de memoria las ecuaciones matemáticas operativas desde cero, además de interpretarlas y aplicarlas.
2. CRITERIO DE MEMORIZACIÓN DE ECUACIONES:
   - SÍ REQUIEREN MEMORIZACIÓN: Toda ecuación que el texto presente como ley física, principio de conservación, ley constitutiva, definición operativa, relación fundamental o herramienta de cálculo/diseño que el estudiante deba aplicar. No descartes una fórmula solo por ser matemáticamente "derivada" si el texto la trata como resultado operativo importante.
   - NO EVALUAR DE MEMORIA: Pasos algebraicos intermedios, despejes auxiliares triviales y fórmulas empíricas complejas con múltiples coeficientes numéricos arbitrarios (a menos que el texto las catalogue explícitamente como norma obligatoria de cálculo).
3. LOS TRES NIVELES DE RECUPERACIÓN MATEMÁTICA:
   Para cada ecuación operativa relevante, evaluá cuáles de estas tres habilidades tienen valor evaluativo real (no fuerces las tres si no aportan valor):
   - a) Producción activa (Memoria pura): ¿El estudiante puede escribir la ecuación exacta sin pistas en el anverso?
   - b) Interpretación física: ¿Comprende el significado de cada término, exponente o signo?
   - c) Razonamiento y aplicación: Si el texto lo fundamenta, ¿puede predecir qué ocurre ante variaciones paramétricas o casos límite?
4. ATOMICIDAD EN FÓRMULAS (DESACOPLE OBLIGATORIO):
   - Por defecto, la tarjeta de producción de fórmula pide ÚNICAMENTE la expresión matemática limpia.
   - Las hipótesis de validez se evalúan en una tarjeta conceptual separada, salvo que se trate de 1 o 2 condiciones inmediatas (ej. "gas ideal", "fluido incompresible") que puedan acompañar al reverso sin sobrecargarlo.
5. VALOR DE CLASIFICACIONES, MAGNITUDES Y UNIDADES:
   En el examen no se permiten tablas de datos. Las clasificaciones teóricas, rangos de trabajo típicos, órdenes de magnitud representativos y las restricciones de unidades obligatorias de ciertas fórmulas son conocimientos evaluables.
6. DEMOSTRACIONES Y DEDUCCIONES: Respetar estrictamente la instrucción de inclusión/exclusión indicada al final en <input_del_usuario>. Si no se indica nada, por defecto EXCLUIR demostraciones formales completas.
</contexto_de_evaluacion>

<reglas_de_seleccion>
1. FUENTE CERRADA Y OMISIÓN POR INCERTEZA: Extraé hechos, conceptos y fórmulas exclusivamente del texto provisto. Se permite deducir comportamientos físicos cualitativos que se desprendan directamente de las relaciones del texto. Si un dato no está claro o genera ambigüedad, OMITILO; no inventes ni completes con fuentes externas.
2. UTILIDAD TÁCTICA PARA LA MATERIA: Evaluá cada tarjeta bajo el criterio: "¿El valor de recuperar este conocimiento durante el cursado y examen de esta materia justifica el tiempo de repaso?". Descartá texto introductorio, historia anecdótica, relleno narrativo y pasos mecánicos de simplificación.
3. SELECCIÓN Y COBERTURA DE CLASIFICACIONES: Si una clasificación o estructura por etapas tiene alto valor evaluable, asegurate de que todos sus elementos relevantes queden cubiertos. Cuando contenga muchas subdivisiones, particionala en tarjetas separadas siguiendo un eje lógico o sub-familia natural; no comprimas datos heterogéneos a la fuerza.
4. NO REDUNDANCIA: Antes de emitir una tarjeta, comprobá que ninguna otra evalúe esencialmente el mismo hecho o razonamiento.
</reglas_de_seleccion>

<criterio_de_agrupacion_y_atomicidad>
La unidad de Anki es una "unidad de recuperación evaluable con certeza":

- AGRUPACIÓN LÓGICA: Agrupá en una sola tarjeta únicamente cuando los elementos compartan una sola lógica subyacente, una jerarquía consistente o una escala comparativa continua. El tope de 3 elementos es orientativo; progresiones numéricas u ordenadas naturales pueden incluir más elementos si conforman un bloque conceptual indivisible.
- SEPARACIÓN CONCEPTUAL: Generá tarjetas independientes cuando los conocimientos sigan caminos de recuperación distintos (ej. fórmula matemática por un lado; sus hipótesis o consecuencias físicas por el otro). Nunca formules dos preguntas disjuntas en un mismo anverso.
- TRATAMIENTO DE CLASIFICACIONES: Si una clasificación es evaluable y de alto valor, podés requerir el recuerdo de sus categorías principales. Siempre que aporte valor formativo, complementá o enfoca la evaluación en qué DISTINGUE físicamente a una categoría de otra.
- AGILIDAD DE RESPUESTA: La respuesta debe ser lo suficientemente compacta como para verificarse mentalmente con rapidez. Si exige listar conocimientos independientes no articulados, dividila.
</criterio_de_agrupacion_y_atomicidad>

<reglas_de_creacion>
1. EFICIENCIA DEL ANVERSO (LECTURA EN < 5 SEGUNDOS):
   - El anverso debe plantear la consigna de forma directa, sin preámbulos.
   - Formato obligatorio: "[Tema/Sistema - Foco] Pregunta directa".
   - Producción activa sin pistas: Al pedir una fórmula, no incluyas fragmentos de la ecuación, estructuras algebraicas intermedias ni pistas que permitan deducirla por mero reconocimiento visual.
2. NOTACIÓN Y SIMBOLOGÍA:
   - Usá rigurosamente la misma notación del texto fuente.
   - Si un símbolo pudiera prestarse a ambigüedad en el anverso, aclaralo brevemente entre paréntesis.
3. PROTOCOLO DE EVALUACIÓN DE ECUACIONES Y UNIDADES:
   - Recuperación limpia: Formulá la pregunta pidiendo la expresión matemática exacta. El reverso presenta la fórmula en LaTeX y define términos no evidentes.
   - Hipótesis de validez: Tarjeta separada, salvo que sean 1 o 2 condiciones triviales integrables al reverso de la fórmula.
   - Análisis y aplicación: Formulá preguntas de sensibilidad paramétrica o comportamiento asintótico ÚNICAMENTE cuando el texto lo justifique y tenga valor evaluable.
   - Exigencia de unidades: Si una fórmula o parámetro exige unidades específicas obligatorias para ser válida (ej. potencia en CV, presiones en bar, temperatura absoluta), destacá esa condición explícitamente en el reverso o en tarjeta conceptual propia.
4. REVERSO CONCISO Y AUTOCALIFICABLE:
   - Directo al punto: Ecuación matemática o Mecanismo -> Consecuencia.
   - Destacá con <b>negrita</b> únicamente las variables, fórmulas o palabras clave determinantes para saber si respondiste bien.
5. APOYO GRÁFICO Y ESPACIAL:
   - Para curvas características, diagramas de estado o esquemas vectoriales: "[DIBUJAR EN PAPEL] [Qué graficar]". Reverso: criterios mínimos de validación en 2 o 3 líneas.
   - Para cortes anatómicos de equipos o componentes: "[CREAR IMAGE OCCLUSION] [Esquema]". Reverso: etiquetas clave a tapar (máximo 4 o 5).
</reglas_de_creacion>

<filtro_de_exclusion>
DESCARTÁ SIN EXCEPCIÓN:
- Despejes algebraicos secundarios o pasos intermedios de demostraciones mecánicas.
- Fórmulas empíricas con constantes arbitrarias no enfatizadas por el texto.
- Preguntas de enumeración pasiva de catálogos o componentes secundarios.
- Tablas numéricas puras de propiedades físicas estándar.
- Números de diapositivas, títulos de capítulos o referencias bibliográficas.
</filtro_de_exclusion>

<formato_anki_csv>
1. Cada tarjeta ocupa exactamente una línea física dentro del bloque CSV.
2. Delimitador estricto: Anverso;Reverso
3. Prohibido usar saltos de línea físicos (Enter) dentro de un campo. Usá exclusivamente <br> para saltos visuales.
4. No uses punto y coma (;) en el texto de las preguntas o respuestas.
5. Formato HTML simple: <b>negrita</b>, <i>cursiva</i>. Prohibido Markdown (#, **, etc.) dentro de las tarjetas.
6. Notación matemática: LaTeX estándar \( ... \) para inline y \[ ... \] para display, siempre en una sola línea física sin saltos internos.
7. Cero texto fuera del bloque de código. Cero introducciones, cero conclusiones.
</formato_anki_csv>

<auditoria_interna>
Antes de emitir la salida, verificá internamente:
[ ] AUDITORÍA DE ECUACIONES:
    - ¿Toda ecuación operativa o ley relevante del texto tiene su tarjeta de producción activa?
    - ¿Las preguntas de fórmula exigen producción desde cero sin regalar partes de la ecuación en el anverso?
    - ¿Se evitaron tarjetas sobrecargadas separando la fórmula limpia de sus hipótesis complejas?
    - ¿Las ecuaciones que exigen unidades particulares tienen esa restricción evaluada?
    - ¿Se descartaron pasos algebraicos auxiliares y despejes triviales?
[ ] AUDITORÍA GENERAL Y DE FORMATO:
    - ¿Los anversos usan el prefijo temático "[Tema - Foco]" y se leen en menos de 5 segundos?
    - ¿Las clasificaciones se evalúan por diferenciación o agrupamiento lógico natural?
    - ¿Se mantuvo la notación exacta del texto fuente?
    - ¿Cada línea cumple estrictamente el estándar CSV (delimitador punto y coma, sin Enter internos, <br> para saltos, sin punto y coma en el texto)?
[ ] AUDITORÍA FINAL PÁRRAFO POR PÁRRAFO: Recorré el texto fuente en orden y verificá que ningún concepto o fórmula operativa de alto valor haya quedado sin representar. Si detectás una omisión real, generala ahora antes de emitir la respuesta.
</auditoria_interna>

<formato_de_salida>
Generá ÚNICAMENTE un bloque de código con el CSV crudo.
Si el texto provisto no contiene información con suficiente valor evaluable o es puramente introductorio/relleno, devolvé un bloque de código vacío. No generes tarjetas de relleno para justificar la respuesta.

Ejemplos de calidad esperada (diversas áreas de ingeniería):
[Termodinámica - Primer Principio] En un sistema cerrado cuasiestático, ¿cuál es la ecuación fundamental de balance de energía diferencial?;\[ <b>dU = \delta Q - p\,dV</b> \]
[Mecánica de Fluidos - Continuidad] ¿Bajo qué dos hipótesis la ecuación general de continuidad se reduce a \( A_1 v_1 = A_2 v_2 \)?;1. Régimen <b>permanente</b> (estacionario).<br>2. Fluido <b>incompresible</b> (\(\rho = \text{cte}\)).
[Transferencia de Calor - Conducción] ¿Cuál es la ley constitutiva de Fourier para la densidad de flujo de calor unidimensional (\(q_x\))?;\[ <b>q_x = -k \frac{dT}{dx}</b> \]<br>El signo negativo indica que el calor fluye hacia el <b>gradiente decreciente de temperatura</b>.
[Turbomaquinaria - Velocidad Específica] ¿Cuál es la expresión de la velocidad específica (\(n_s\)) bajo criterio europeo y qué unidades exige cada variable?;\[ <b>n_s = \frac{n \sqrt{N}}{H_n^{5/4}}</b> \]<br>Unidades obligatorias: \(N\) en <b>CV</b>, \(H_n\) en <b>metros</b> y \(n\) en <b>rpm</b>.
[Resistencia de Materiales - Torsión] Si se duplica el diámetro de un eje circular macizo bajo el mismo par torsor, ¿por qué factor se reduce la tensión máxima (\(\tau_{\text{máx}}\))?;Disminuye por un factor de <b>8</b> (\(2^3\)), ya que el módulo resistente polar escala con el cubo del diámetro (<b>\(W_p \propto d^3\)</b>).
[DIBUJAR EN PAPEL] Triángulos de velocidad superpuestos en turbomáquina axial con \(c_m\) constante.;Base común horizontal <b>\(u\)</b>.<br>Altura común vertical <b>\(c_m\)</b>.<br>Criterio de cierre tangencial: <b>\(\Delta c_u = \Delta w_u\)</b>.
</formato_de_salida>

<input_del_usuario>
Texto fuente:
[PEGA AQUÍ EL APUNTE / TEXTO]

¿Incluir demostraciones / deducciones paso a paso? [SI / NO]: NO
</input_del_usuario>
```

---
## 🧭 Navegación
*Volver a la guía general:* ⬅️ **[[20. Áreas/Sistema de Estudio con IA/00 - Inicio y Flujo de Trabajo\|00 - Inicio y Flujo de Trabajo]]**  
*Siguiente archivo:* ➡️ **[[20. Áreas/Sistema de Estudio con IA/04 - Modelos Recomendados por Tarea\|04 - Modelos Recomendados por Tarea]]**